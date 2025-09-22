import joi from "joi";

const phoneSchema = joi.alternatives()
    .try(
        joi.string().trim().pattern(/^\+?[0-9]{7,15}$/),
        joi.number().integer().min(1000000).max(999999999999999)
    )
    .messages({
        'alternatives.match': 'El telefono solo puede contener numeros y un signo + inicial'
    });

const userUpdateSchema = joi.object({
    name: joi.string().trim().min(2).max(50).messages({
        'string.base': 'El nombre debe ser un texto',
        'string.min': 'El nombre debe tener al menos 2 caracteres',
        'string.max': 'El nombre no puede superar los 50 caracteres'
    }),
    lastName: joi.string().trim().min(2).max(50).messages({
        'string.base': 'El apellido debe ser un texto',
        'string.min': 'El apellido debe tener al menos 2 caracteres',
        'string.max': 'El apellido no puede superar los 50 caracteres'
    }),
    email: joi.string().trim().lowercase().email().messages({
        'string.email': 'El email no tiene un formato valido'
    }),
    password: joi.string().min(8).max(100).messages({
        'string.min': 'La contrasena debe tener al menos 8 caracteres',
        'string.max': 'La contrasena no puede superar los 100 caracteres'
    }),
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://'
    }),
    age: joi.number().integer().min(13).max(120).messages({
        'number.base': 'La edad debe ser un numero entero',
        'number.min': 'La edad minima permitida es 13 anos',
        'number.max': 'La edad maxima permitida es 120 anos'
    }),
    phone: phoneSchema.messages({
        'number.base': 'El telefono debe ser un numero',
        'number.min': 'El telefono debe tener al menos 7 digitos'
    }),
    role: joi.number().integer().min(0).max(10).messages({
        'number.base': 'El rol debe ser un numero entero',
        'number.min': 'El rol minimo permitido es 0',
        'number.max': 'El rol maximo permitido es 10'
    }),
    online: joi.boolean().messages({
        'boolean.base': 'Online debe ser un valor booleano'
    })
}).min(1).options({ abortEarly: false, stripUnknown: true }).messages({
    'object.min': 'Debes enviar al menos un campo para actualizar'
});

export default userUpdateSchema;
