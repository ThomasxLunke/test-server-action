/* eslint-disable @typescript-eslint/no-require-imports */
const { mockServerClient } = require('mockserver-client');

const verifyRequest = async ({ method, path, body, times = 1 }) => {
  try {
    await mockServerClient('localhost', 5287).verify({
      method: method,
      path: path,
      body: {
        type: 'JSON',
        json: JSON.stringify(body),
        matchType: 'STRICT'
      }
    }, times);
    return { verified: true };
  } catch (error) {
    console.error('Verification failed:', error);
    return { verified: false, error: error.message };
  }
}

const setupResponse = ({ path, body, statusCode }) => {
  return mockServerClient('localhost', 5287).mockSimpleResponse(path, body, statusCode);
};

module.exports = { verifyRequest, setupResponse };