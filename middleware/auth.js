export function apiKeyAuth(_, res, next) {
    const key = process.env.API_KEY;
    if (!key || key !== process.env.API_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
}
