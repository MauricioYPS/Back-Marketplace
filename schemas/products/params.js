import joi from "joi";

const productIdParamSchema = joi.object({
    id: joi.string().trim().length(24).hex().required().messages({
        'string.length': 'El id debe tener 24 caracteres',
        'string.hex': 'El id debe ser un ObjectId valido',
        'any.required': 'El id es requerido'
    })
}).options({ abortEarly: false, stripUnknown: true });

export { productIdParamSchema };
