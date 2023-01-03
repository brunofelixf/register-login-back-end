import * as yup from 'yup'

const postSchema = yup.object().shape({
    text: yup
        .string()
        .max(124, "O texto não pode ter mais de 60 caracteres")
        .required("O texto é obrigatório"),
})

export { postSchema }