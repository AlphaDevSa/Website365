import { describe, expect, it, vi } from 'vitest';
import { submitForm } from '../src/utils/formSubmit';

describe('submitForm', () => {
  it('returns success with message when response is ok', async () => {
    global.fetch = vi.fn(async () => ({
      ok: true,
      json: async () => ({ message: 'ok' }),
    }));

    const result = await submitForm({ a: 1 });

    expect(result).toEqual({ success: true, message: 'ok' });
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ a: 1 }),
      }),
    );
  });

  it('returns error from server when response is not ok', async () => {
    global.fetch = vi.fn(async () => ({
      ok: false,
      json: async () => ({ error: 'Nope' }),
    }));

    const result = await submitForm({ a: 1 });

    expect(result).toEqual({ success: false, error: 'Nope' });
  });

  it('returns fallback error when response json is invalid', async () => {
    global.fetch = vi.fn(async () => ({
      ok: false,
      json: async () => {
        throw new Error('invalid json');
      },
    }));

    const result = await submitForm({ a: 1 });

    expect(result).toEqual({ success: false, error: 'Submission failed' });
  });

  it('returns network error message when fetch throws', async () => {
    global.fetch = vi.fn(async () => {
      throw new Error('Network down');
    });

    const result = await submitForm({ a: 1 });

    expect(result).toEqual({ success: false, error: 'Network down' });
  });
});
