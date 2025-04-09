const forbidden_error_handler = (error, req, res, next) => {
    if (error.name === 'ForbiddenError') {
        return res.status(403).json({
            success: false,
            message: 'Access forbidden. You do not have permission to access this resource.',
        });
    }
    next(error);
};

export default forbidden_error_handler;
