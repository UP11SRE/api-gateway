const rateLimit = require('express-rate-limit');

const productRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,                 // Limit requests per window
    message: {
        code: 429,
        message: 'Too many requests, please try again later'
    }
});

module.exports = productRateLimiter;

