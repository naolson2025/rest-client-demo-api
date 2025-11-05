import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { auth } from './lib/auth';
import { bookRoutes } from './routes/books.routes';

const app = new Hono();

app.use('*', logger());

app
  .on(['POST', 'GET'], '/api/auth/**', (c) => auth.handler(c.req.raw))
  .route('/api/books', bookRoutes)
  .get('/api/health', (c) => {
    return c.json({ status: 'healthy!! 🔥' });
  });

export default app;
