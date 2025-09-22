import joi from "joi";

const buildValidator = (schema, segment, { allowUnknown = false, stripUnknown = false } = {}) => {
    return (req, res, next) => {
        const data = req[segment];
        const { value, error } = schema.validate(data, {
            abortEarly: false,
            allowUnknown,
            stripUnknown,
            convert: true,
        });

        if (error) {
            error.name = 'ValidationError';
            error.errors = {};
            (error.details || []).forEach((detail) => {
                const key = detail.path.join('.') || segment;
                error.errors[key] = { message: detail.message };
            });
            return next(error);
        }

        req[segment] = value;
        return next();
    };
};

const validateBody = (schema) => buildValidator(schema, 'body', { allowUnknown: true, stripUnknown: true });
const validateParams = (schema) => buildValidator(schema, 'params');
const validateQuery = (schema) => buildValidator(schema, 'query', { allowUnknown: true, stripUnknown: true });

export { validateBody, validateParams, validateQuery };
