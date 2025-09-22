import joi from "joi";

const itemUpdateSchema = joi.object({
    name: joi.string().trim().min(2).max(80).messages({
        'string.base': 'El nombre debe ser un texto',
        'string.min': 'El nombre debe tener al menos 2 caracteres',
        'string.max': 'El nombre no puede superar los 80 caracteres'
    }),
    description: joi.string().trim().min(10).max(500).messages({
        'string.base': 'La descripcion debe ser un texto',
        'string.min': 'La descripcion debe tener al menos 10 caracteres',
        'string.max': 'La descripcion no puede superar los 500 caracteres'
    }),
    price: joi.number().precision(2).positive().messages({
        'number.base': 'El precio debe ser un numero',
        'number.positive': 'El precio debe ser mayor a 0'
    }),
    stock: joi.number().integer().min(0).messages({
        'number.base': 'El stock debe ser un numero entero',
        'number.min': 'El stock no puede ser negativo'
    }),
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://'
    }),
    category: joi.string().trim().min(2).max(50).messages({
        'string.base': 'La categoria debe ser un texto',
        'string.min': 'La categoria debe tener al menos 2 caracteres',
        'string.max': 'La categoria no puede superar los 50 caracteres'
    }),
    userId: joi.string().trim().length(24).hex().messages({
        'string.length': 'El userId debe tener 24 caracteres',
        'string.hex': 'El userId debe ser un ObjectId valido'
    }),
    storeId: joi.string().trim().length(24).hex().messages({
        'string.length': 'El storeId debe tener 24 caracteres',
        'string.hex': 'El storeId debe ser un ObjectId valido'
    })
}).min(1).options({ abortEarly: false, stripUnknown: true }).messages({
    'object.min': 'Debes enviar al menos un campo para actualizar'
});

export default itemUpdateSchema;
