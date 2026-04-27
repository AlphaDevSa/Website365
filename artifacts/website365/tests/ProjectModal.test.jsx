import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectModal from '../src/components/ProjectModal.jsx';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProjectModal', () => {
  it('closes via the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<ProjectModal isOpen onClose={onClose} />);

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
    render(<ProjectModal isOpen onClose={onClose} />);

    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Phone Number'), '0123456789');
    await user.type(screen.getByLabelText('Project Description'), 'Build a site');

    await user.click(screen.getByRole('button', { name: /send project request/i }));

    const contactCall = await waitFor(() =>
      global.fetch.mock.calls.find(([url]) => url === '/api/contact'),
    );
    const [, init] = contactCall;
    const payload = JSON.parse(init.body);

    expect(payload).toEqual(
      expect.objectContaining({
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '0123456789',
        description: 'Build a site',
        form_type: 'Project Discussion Request',
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

    render(<ProjectModal isOpen onClose={() => {}} />);

    await user.type(screen.getByLabelText('Full Name'), 'Jane Doe');
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Phone Number'), '0123456789');
    await user.type(screen.getByLabelText('Project Description'), 'Build a site');

    await user.click(screen.getByRole('button', { name: /send project request/i }));
    await screen.findByText(/error submitting your request/i);
  });
});

