const bad_request_error_handler = (error, req, res, next) => {
    if (error.name === 'BadRequestError') {
        return res.status(400).json({
            success: false,
            message: 'Bad request. Please check your input and try again.',
        });
    }
    next(error);
};

export default bad_request_error_handler;
