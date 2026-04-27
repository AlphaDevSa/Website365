import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DomainRegistrationOrderModal from '../src/components/DomainRegistrationOrderModal.jsx';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('DomainRegistrationOrderModal', () => {
  it('submits basic domain registration order payload', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn(async (input) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url === '/api/contact') {
        return { ok: true, json: async () => ({ message: 'ok' }) };
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const onClose = vi.fn();
    render(
      <DomainRegistrationOrderModal
        isOpen
        onClose={onClose}
        domain="example.co.za"
        domainPricing={{ amount: 119, currencyCode: 'ZAR' }}
        lookup={{ source: 'test', detail: 'manual', status: 'ok' }}
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Telephone Number'), '0123456789');

    await user.click(screen.getByRole('button', { name: /complete my registration/i }));

    const contactCall = await waitFor(() =>
      global.fetch.mock.calls.find(([url]) => url === '/api/contact'),
    );

    const [, init] = contactCall;
    const payload = JSON.parse(init.body);

    expect(payload).toEqual(
      expect.objectContaining({
        form_type: 'Domain Registration Order',
        domain: 'example.co.za',
        domain_register_years: 1,
        domain_price: '119',
        domain_price_currency: 'ZAR',
        add_hosting: 'false',
        name: 'Jane',
        surname: 'Doe',
        email: 'jane@example.com',
        tel: '0123456789',
        lookup_source: 'test',
      }),
    );

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/thank-you'));
  });

  it('includes hosting fields when add hosting is selected', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn(async (input) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url === '/api/contact') {
        return { ok: true, json: async () => ({ message: 'ok' }) };
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const onClose = vi.fn();
    render(
      <DomainRegistrationOrderModal
        isOpen
        onClose={onClose}
        domain="example.co.za"
        domainPricing={{ amount: 119, currencyCode: 'ZAR' }}
        lookup={{ source: 'test', detail: 'manual', status: 'ok' }}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Yes' }));

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Telephone Number'), '0123456789');

    await user.click(screen.getByRole('button', { name: /complete my registration/i }));

    const contactCall = await waitFor(() =>
      global.fetch.mock.calls.find(([url]) => url === '/api/contact'),
    );

    const [, init] = contactCall;
    const payload = JSON.parse(init.body);

    expect(payload).toEqual(
      expect.objectContaining({
        add_hosting: 'true',
        hosting_plan: expect.any(String),
        hosting_category: expect.any(String),
        hosting_billing_cycle: expect.any(String),
        hosting_price_monthly: expect.any(String),
        hosting_price_yearly: expect.any(String),
        hosting_due_now: expect.stringMatching(/^R\d/),
      }),
    );
  });
});
