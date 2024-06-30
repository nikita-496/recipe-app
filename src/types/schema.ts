import * as yup from "yup"

const stringRequired = yup.string().required()
const numberRequired = yup.number().required()
const stringEmail = yup.string().email()
const stringPassword = yup.string() .min(8, 'Password is too short - should be 8 chars minimum.')
.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

export const recomendationSchema = yup.object().shape({
    email: stringEmail,
})

export const createRecipeSchema = yup.object().shape({
    recipeTitle: stringRequired.max(50),
    recipeDescription: stringRequired.max(160),
    recipeIngredietns: stringRequired.max(100),
    recipeInstractions: stringRequired.max(160),
    recipeServings: numberRequired.max(10),
    recipeHours: numberRequired.max(24),
    recipeMinutes: numberRequired.max(60),
})

export const profileSchema = yup.object().shape({
    fullname: yup.string().max(50),
    username: yup.string().max(15),
    email: stringEmail,
    password: stringPassword,
    facebookAccount: yup.string().max(50),
    googleAccount: stringEmail
})

export const loginSchema = yup.object().shape({
    email: stringEmail.required(),
    password: stringPassword.required()
})

export const signUpSchema = yup.object().shape({
    fullname: yup.string().max(50).required(),
    email: stringEmail.required(),
    password: stringPassword.required()
})