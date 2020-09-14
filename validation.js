import Joi from "@hapi/joi";

const schema = Joi.object({
	username: Joi.string().min(3).required(),
	password: Joi.string().min(8).required(),
});

// Register Validation
export const registerValidation = (data) => {
	return schema.validate(data);
};

export const loginValidation = (data) => {
	return schema.validate(data);
};
