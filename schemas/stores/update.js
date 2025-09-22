import joi from "joi-oid";

const phoneSchema = joi.alternatives()
    .try(
        joi.string().trim().pattern(/^\+?[0-9]{7,15}$/),
        joi.number().integer().min(1000000).max(999999999999999)
    )
    .messages({
        'alternatives.match': 'El telefono solo puede contener numeros y un signo + inicial'
    });

const storeUpdateSchema = joi.object({
    userId: joi.string().trim().length(24).hex().messages({
        'string.length': 'El userId debe tener 24 caracteres',
        'string.hex': 'El userId debe ser un ObjectId valido'
    }),
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
    photoUrl: joi.string().trim().uri({ scheme: ['http', 'https'] }).messages({
        'string.uri': 'La URL de la foto debe comenzar con http:// o https://'
    }),
    address: joi.string().trim().min(5).max(120).messages({
        'string.base': 'La direccion debe ser un texto',
        'string.min': 'La direccion debe tener al menos 5 caracteres',
        'string.max': 'La direccion no puede superar los 120 caracteres'
    }),
    phone: phoneSchema.messages({
        'number.base': 'El telefono debe ser un numero',
        'number.min': 'El telefono debe tener al menos 7 digitos'
    })
}).min(1).options({ abortEarly: false, stripUnknown: true }).messages({
    'object.min': 'Debes enviar al menos un campo para actualizar'
});

export default storeUpdateSchema;
