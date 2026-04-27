import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MaintenanceOrderModal from '../src/components/MaintenanceOrderModal.jsx';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('MaintenanceOrderModal', () => {
  it('closes via the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <MaintenanceOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Care', price: 'R99.00' }}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('submits and navigates on success', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn(async (input) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url === '/api/contact') return { ok: true, json: async () => ({ message: 'ok' }) };
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const onClose = vi.fn();
    render(
      <MaintenanceOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'Care', price: 'R99.00' }}
      />,
    );

    await user.type(screen.getByLabelText(/^name\b/i), 'Jane');
    await user.type(screen.getByLabelText(/surname/i), 'Doe');
    await user.type(screen.getByLabelText(/^email address\b/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/^phone number\b/i), '0123456789');
    await user.type(screen.getByLabelText(/current website address/i), 'https://example.co.za');

    await user.click(screen.getByRole('button', { name: /submit order/i }));

    const contactCall = await waitFor(() =>
      global.fetch.mock.calls.find(([url]) => url === '/api/contact'),
    );
    const [, init] = contactCall;
    const payload = JSON.parse(init.body);

    expect(payload).toEqual(
      expect.objectContaining({
        name: 'Jane',
        surname: 'Doe',
        email: 'jane@example.com',
        tel: '0123456789',
        website_url: 'https://example.co.za',
        form_type: 'Maintenance Order',
        plan_name: 'Care',
      }),
    );

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/thank-you'));
  });

  it('shows an error message on failed submission', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn(async (input) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url === '/api/contact') return { ok: false, json: async () => ({ error: 'bad' }) };
      throw new Error(`Unexpected fetch: ${url}`);
    });

    render(
      <MaintenanceOrderModal
        isOpen
        onClose={() => {}}
        plan={{ title: 'Care', price: 'R99.00' }}
      />,
    );

    await user.type(screen.getByLabelText(/^name\b/i), 'Jane');
    await user.type(screen.getByLabelText(/surname/i), 'Doe');
    await user.type(screen.getByLabelText(/^email address\b/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/^phone number\b/i), '0123456789');
    await user.type(screen.getByLabelText(/current website address/i), 'https://example.co.za');

    await user.click(screen.getByRole('button', { name: /submit order/i }));
    await screen.findByText(/error submitting your order/i);
  });
});
