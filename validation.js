import Joi from "@hapi/joi";

// Register Validation
export const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(3).required(),
		password: Joi.string().min(8).required(),
		passwordConfirm: Joi.string().equal(Joi.ref("password")).required(),
		userType: Joi.string().allow(""),
	});
	return schema.validate(data);
};

export const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(3).required(),
		password: Joi.string().min(8).required(),
	});
	return schema.validate(data);
};
