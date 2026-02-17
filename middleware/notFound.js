export default function notFound(req, res, next) {
  res.status(404).json({
    connecting: false,
    message: `Route ${req.originalUrl} not found`
  });
}
