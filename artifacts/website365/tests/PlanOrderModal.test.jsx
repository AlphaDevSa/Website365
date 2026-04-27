import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlanOrderModal from '../src/components/PlanOrderModal.jsx';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const createFetchMock = (overrides = {}) => {
  return vi.fn(async (input) => {
    const url = typeof input === 'string' ? input : input?.url;

    if (url?.startsWith('/api/domain/check')) {
      return {
        ok: true,
        json: async () => ({
          status: 'available',
          available: true,
          pricing: { amount: 119, currencyCode: 'ZAR' },
          ...overrides.domainCheckJson,
        }),
      };
    }

    if (url === '/api/contact') {
      return {
        ok: overrides.contactOk ?? true,
        json: async () => (overrides.contactJson ?? { message: 'ok' }),
      };
    }

    throw new Error(`Unexpected fetch: ${url}`);
  });
};

describe('PlanOrderModal', () => {
  it('does not render when closed', () => {
    render(
      <PlanOrderModal
        isOpen={false}
        onClose={() => {}}
        plan={{ title: 'Starter', price: 'R10.00', billingPeriod: 'Monthly' }}
      />,
    );
    expect(screen.queryByText('Place Your Order')).not.toBeInTheDocument();
  });

  it('closes via the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <PlanOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Starter', price: 'R10.00', billingPeriod: 'Monthly' }}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('can run a domain check and show a success status', async () => {
    const user = userEvent.setup();
    global.fetch = createFetchMock();
    const onClose = vi.fn();

    render(
      <PlanOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Starter', price: 'R10.00', billingPeriod: 'Monthly' }}
      />,
    );

    await user.type(screen.getByLabelText('Domain Name'), 'example.co.za');
    await user.click(screen.getByRole('button', { name: 'Check' }));

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringMatching(/^\/api\/domain\/check\?/),
      expect.any(Object),
    );

    await screen.findByText(/Available to register/i);
  });

  it('submits the order payload and navigates on success', async () => {
    const user = userEvent.setup();
    global.fetch = createFetchMock();
    const onClose = vi.fn();

    render(
      <PlanOrderModal
        isOpen
        onClose={onClose}
        plan={{
          title: 'Starter',
          price: 'R10.00',
          yearlyPrice: 'R100.00',
          billingPeriod: 'Monthly',
        }}
        formType="Order"
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(screen.getByLabelText('Telephone Number'), '0123456789');

    await user.click(screen.getByRole('button', { name: /submit order/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const contactCall = global.fetch.mock.calls.find(([url]) => url === '/api/contact');
    expect(contactCall).toBeTruthy();

    const [, init] = contactCall;
    const payload = JSON.parse(init.body);

    expect(payload).toEqual(
      expect.objectContaining({
        name: 'Jane',
        surname: 'Doe',
        email: 'jane@example.com',
        tel: '0123456789',
        form_type: 'Order',
        plan_name: 'Starter',
        billing_cycle: 'monthly',
      }),
    );

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/thank-you'));
  });

  it('shows an error message on failed submission', async () => {
    const user = userEvent.setup();
    global.fetch = createFetchMock({ contactOk: false, contactJson: { error: 'bad' } });
    const onClose = vi.fn();

    render(
      <PlanOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Starter', price: 'R10.00', billingPeriod: 'Monthly' }}
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(screen.getByLabelText('Telephone Number'), '0123456789');

    await user.click(screen.getByRole('button', { name: /submit order/i }));

    await screen.findByText(/error submitting your order/i);
    expect(onClose).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('disables submit button and shows submitting state while request is in flight', async () => {
    const user = userEvent.setup();
    let resolveContact;
    global.fetch = vi.fn(async (input) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url === '/api/contact') {
        return await new Promise((resolve) => {
          resolveContact = () =>
            resolve({
              ok: true,
              json: async () => ({ message: 'ok' }),
            });
        });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const onClose = vi.fn();
    render(
      <PlanOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Starter', price: 'R10.00', billingPeriod: 'Monthly' }}
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(screen.getByLabelText('Telephone Number'), '0123456789');

    const submitButton = screen.getByRole('button', { name: /submit order/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent(/submitting/i);

    resolveContact();
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/thank-you'));
  });
});
