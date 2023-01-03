import * as yup from 'yup'

const updatePostSchema = yup.object().shape({
    text: yup
        .string()
        .max(124, "O texto não pode ter mais de 60 caracteres")
        .notRequired(),
    like: yup
        .number()
        .notRequired()
})

export { updatePostSchema }