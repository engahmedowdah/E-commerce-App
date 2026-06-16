import rateLimit from "express-rate-limit";
const LoginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts, try again later"
});
export default LoginRateLimiter;
