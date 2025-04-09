const unauthorized_error_handler = (error, req, res, next) => {
    if (error.name === 'UnauthorizedError') {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access. Please provide valid credentials.',
        });
    }
    next(error);
};

export default unauthorized_error_handler;
