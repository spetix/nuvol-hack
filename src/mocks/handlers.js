import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const { username, password } = await request.json();

    if (username === 'admin' && password === 'admin') {
      return HttpResponse.json({ token: 'fake-token-123' });
    }

    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),
];