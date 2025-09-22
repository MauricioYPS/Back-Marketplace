import joi from "joi";

const phoneSchema = joi.alternatives()
    .try(
        joi.string().trim().pattern(/^\+?[0-9]{7,15}$/),
        joi.number().integer().min(1000000).max(999999999999999)
    )
    .messages({
        'alternatives.match': 'El telefono solo puede contener numeros y un signo + inicial'
    });

const userCreateSchema = joi.object({
    name: joi.string().trim().min(2).max(50).required().messages({
        'string.base': 'El nombre debe ser un texto',
        'string.empty': 'El nombre es requerido',
        'string.min': 'El nombre debe tener al menos 2 caracteres',
        'string.max': 'El nombre no puede superar los 50 caracteres',
        'any.required': 'El nombre es requerido'
    }),
    lastName: joi.string().trim().min(2).max(50).required().messages({
        'string.base': 'El apellido debe ser un texto',
        'string.empty': 'El apellido es requerido',
        'string.min': 'El apellido debe tener al menos 2 caracteres',
        'string.max': 'El apellido no puede superar los 50 caracteres',
        'any.required': 'El apellido es requerido'
    }),
    email: joi.string().trim().lowercase().email().required().messages({
        'string.email': 'El email no tiene un formato valido',
        'string.empty': 'El email es requerido',
        'any.required': 'El email es requerido'
    }),
    password: joi.string().min(8).max(100).required().messages({
        'string.min': 'La contrasena debe tener al menos 8 caracteres',
        'string.max': 'La contrasena no puede superar los 100 caracteres',
        'string.empty': 'La contrasena es requerida',
        'any.required': 'La contrasena es requerida'
    }),
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).required().messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://',
        'string.empty': 'La URL de la foto es requerida',
        'any.required': 'La URL de la foto es requerida'
    }),
    age: joi.number().integer().min(13).max(120).required().messages({
        'number.base': 'La edad debe ser un numero entero',
        'number.min': 'La edad minima permitida es 13 anos',
        'number.max': 'La edad maxima permitida es 120 anos',
        'any.required': 'La edad es requerida'
    }),
    phone: phoneSchema.required().messages({
        'any.required': 'El telefono es requerido',
        'number.base': 'El telefono debe ser un numero',
        'number.min': 'El telefono debe tener al menos 7 digitos'
    }),
    role: joi.number().integer().min(0).max(10).optional().messages({
        'number.base': 'El rol debe ser un numero entero',
        'number.min': 'El rol minimo permitido es 0',
        'number.max': 'El rol maximo permitido es 10'
    }),
    online: joi.boolean().optional().messages({
        'boolean.base': 'Online debe ser un valor booleano'
    })
})

export default userCreateSchema;
