const invalid_json_error_handler = (error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return res.status(400).json({
            success: false,
            message: 'Invalid JSON payload.',
        });
    }
    next(error);
};

export default invalid_json_error_handler;
