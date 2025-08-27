// server/src/server.ts
import Fastify from 'fastify';

// 1. Create a Fastify server instance
const server = Fastify({
  logger: true, // This gives us helpful output in the console
});

// 2. Define a simple route
// This handles GET requests to the URL path "/health"
server.get('/health', async (request, reply) => {
  return { status: 'ok', message: 'Server is running!' };
});

// 3. Define the port to run on
const PORT = 3000;

// 4. Start the server
const start = async () => {
  try {
    await server.listen({ port: PORT });
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

// Run the start function
start();