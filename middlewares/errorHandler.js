export const errorHandler = (err, req, res) => {
    console.error(err.stack);
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    } else if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value entered';
    } else if (err.name === 'CastError') {
        statusCode = 404;
        message = `Resource not found with id of ${err.value}`;
    }
    res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};
