import app from './index'; // This is your Express app
import serverless from 'serverless-http';

export const handler = serverless(app);
