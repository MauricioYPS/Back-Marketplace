import joi from "joi"; 

const schema = joi.object({   
    email: joi.string().required().trim().email().messages({
        'any.required': 'Email is required',
        'string.empty': 'Email cannot be empty',
        'string.email': 'Invalid email format'
    }),
    password: joi.string().required().min(8).max(100).messages({
        'any.required': 'Password is required',
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must be at least 8 characters long',
        'string.max': 'Password cannot exceed 100 characters'
    }),
    photo: joi.string().required().trim().uri({
        scheme: ['http', 'https']
    }).messages({
        'any.required': 'Photo is required',
        'string.empty': 'Photo URL cannot be empty',
        'string.uri': 'Invalid photo URL. Must start with http:// or https://'
    }),
    role: joi.number().required().integer().min(1).max(10).messages({
        'any.required': 'Role is required',
        'number.base': 'Role must be a number',
        'number.integer': 'Role must be an integer',
        'number.min': 'Role must be at least 1',
        'number.max': 'Role cannot exceed 10'
    }),
    online: joi.boolean().required().messages({
        'any.required': 'Online status is required',
        'boolean.base': 'Online must be a boolean value (true or false)'
    }), 
    
    
    online: joi.boolean()
})

export default schema