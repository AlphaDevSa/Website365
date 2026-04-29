import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import app from '../app';

// Mock the db pool since we don't want to connect to a real DB for healthz check
vi.mock('@workspace/db', () => ({
  pool: {
    query: vi.fn().mockResolvedValue({ rows: [{ ok: 1 }] })
  }
}));

describe('Health Routes', () => {
  it('GET /api/healthz should return status ok', async () => {
    const response = await request(app).get('/api/healthz');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('GET /api/healthz/db should return status ok when pool is available', async () => {
    const response = await request(app).get('/api/healthz/db');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
