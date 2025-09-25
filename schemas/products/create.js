import joi from "joi";

const productCreateSchema = joi.object({
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
    price: joi.number().precision(2).positive().required().messages({
        'number.base': 'El precio debe ser un numero',
        'number.positive': 'El precio debe ser mayor a 0',
        'any.required': 'El precio es requerido'
    }),
    stock: joi.number().integer().min(0).required().messages({
        'number.base': 'El stock debe ser un numero entero',
        'number.min': 'El stock no puede ser negativo',
        'any.required': 'El stock es requerido'
    }),
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).required().messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://',
        'string.empty': 'La URL de la foto es requerida',
        'any.required': 'La URL de la foto es requerida'
    }),
    category: joi.string().trim().min(2).max(50).required().messages({
        'string.base': 'La categoria debe ser un texto',
        'string.empty': 'La categoria es requerida',
        'string.min': 'La categoria debe tener al menos 2 caracteres',
        'string.max': 'La categoria no puede superar los 50 caracteres',
        'any.required': 'La categoria es requerida'
    }),
    userId: joi.string().trim().length(24).hex().required().messages({
        'string.length': 'El userId debe tener 24 caracteres',
        'string.hex': 'El userId debe ser un ObjectId valido',
        'any.required': 'El userId es requerido'
    }),
    tipe: joi.string().trim().min(2).max(50).required().messages({
        'string.base': 'El tipe debe ser un texto',
        'string.empty': 'El tipe es requerido',
        'string.min': 'El tipe debe tener al menos 2 caracteres',
        'string.max': 'El tipe no puede superar los 50 caracteres',
        'any.required': 'El tipe es requerido'
    })
}).options({ abortEarly: false, stripUnknown: true });

export default productCreateSchema;
