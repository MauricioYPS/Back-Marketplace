
const error_timeout_handler = (error, req, res, next) => {
    if (error.name === 'TimeoutError') {
        return res.status(504).json({
            success: false,
            message: 'The request took too long to respond. Try again.',
        });
    }
    next(error);
};

export default error_timeout_handler;