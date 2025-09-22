import joi from "joi";

const phoneSchema = joi.alternatives()
    .try(
        joi.string().trim().pattern(/^\+?[0-9]{7,15}$/),
        joi.number().integer().min(1000000).max(999999999999999)
    )
    .messages({
        'alternatives.match': 'El telefono solo puede contener numeros y un signo + inicial'
    });

const storeCreateSchema = joi.object({
    userId: joi.string().trim().length(24).hex().required().messages({
        'string.length': 'El userId debe tener 24 caracteres',
        'string.hex': 'El userId debe ser un ObjectId valido',
        'any.required': 'El userId es requerido'
    }),
    name: joi.string().trim().min(2).max(80).required().messages({
        'string.base': 'El nombre debe ser un texto',
        'string.empty': 'El nombre es requerido',
        'string.min': 'El nombre debe tener al menos 2 caracteres',
        'string.max': 'El nombre no puede superar los 80 caracteres',
        'any.required': 'El nombre es requerido'
    }),
    description: joi.string().trim().min(10).max(500).required().messages({
        'string.base': 'La descripcion debe ser un texto',
        'string.empty': 'La descripcion es requerida',
        'string.min': 'La descripcion debe tener al menos 10 caracteres',
        'string.max': 'La descripcion no puede superar los 500 caracteres',
        'any.required': 'La descripcion es requerida'
    }),
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).required().messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://',
        'string.empty': 'La URL de la foto es requerida',
        'any.required': 'La URL de la foto es requerida'
    }),
    address: joi.string().trim().min(5).max(120).required().messages({
        'string.base': 'La direccion debe ser un texto',
        'string.empty': 'La direccion es requerida',
        'string.min': 'La direccion debe tener al menos 5 caracteres',
        'string.max': 'La direccion no puede superar los 120 caracteres',
        'any.required': 'La direccion es requerida'
    }),
    phone: phoneSchema.required().messages({
        'any.required': 'El telefono es requerido',
        'number.base': 'El telefono debe ser un numero',
        'number.min': 'El telefono debe tener al menos 7 digitos'
    })
}).options({ abortEarly: false, stripUnknown: true });

export default storeCreateSchema;
