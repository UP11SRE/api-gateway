const axios = require('axios');

const retry = async (fn, retries = 0, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries >= 3) { // Adjust retry attempts as needed
      throw error;
    }
    console.warn(`Retry attempt ${retries + 1} after ${delay}ms...`);
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries + 1, delay * 2); // Exponential backoff
  }
};

const wrappedAxios = axios.create();

wrappedAxios.interceptors.response.use(
  response => response,
  async error => {
    if (error.config && !error.config.__isRetry) {
      error.config.__isRetry = true; // Mark request as retried
      return retry(wrappedAxios.request, null, 1000); // Retry once with 1s delay
    }
    return Promise.reject(error);
  }
);

module.exports = wrappedAxios;
