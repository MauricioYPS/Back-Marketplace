import joi from "joi";

const userIdParamSchema = joi.object({
    id: joi.string().trim().length(24).hex().required().messages({
        'string.length': 'El id debe tener 24 caracteres',
        'string.hex': 'El id debe ser un ObjectId valido',
        'any.required': 'El id es requerido'
    })
}).options({ abortEarly: false, stripUnknown: true });

const userEmailParamSchema = joi.object({
    email: joi.string().trim().lowercase().email().required().messages({
        'string.email': 'El email no tiene un formato valido',
        'any.required': 'El email es requerido'
    })
}).options({ abortEarly: false, stripUnknown: true });

export { userIdParamSchema, userEmailParamSchema };
