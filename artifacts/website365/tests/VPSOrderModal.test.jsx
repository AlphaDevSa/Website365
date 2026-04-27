import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VPSOrderModal from '../src/components/VPSOrderModal.jsx';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('VPSOrderModal', () => {
  it('closes via the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <VPSOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'VPS Starter', price: 'R99.00' }}
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
      <VPSOrderModal
        isOpen
        onClose={onClose}
        plan={{ title: 'VPS Starter', price: 'R99.00' }}
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Tel No'), '0123456789');
    await user.type(screen.getByLabelText('Hostname'), 'server1.example.com');
    await user.selectOptions(screen.getByLabelText('Operating System (Linux)'), 'ubuntu-22');

    await user.click(screen.getByRole('button', { name: /confirm order/i }));

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
        hostname: 'server1.example.com',
        os: 'ubuntu-22',
        form_type: 'VPS Order',
        plan_name: 'VPS Starter',
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
      <VPSOrderModal
        isOpen
        onClose={() => {}}
        plan={{ title: 'VPS Starter', price: 'R99.00' }}
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Jane');
    await user.type(screen.getByLabelText('Surname'), 'Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Tel No'), '0123456789');
    await user.type(screen.getByLabelText('Hostname'), 'server1.example.com');
    await user.selectOptions(screen.getByLabelText('Operating System (Linux)'), 'ubuntu-22');

    await user.click(screen.getByRole('button', { name: /confirm order/i }));

    await screen.findByText(/error submitting your order/i);
  });
});

