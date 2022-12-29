import * as yup from 'yup'
import { ICreateUser } from '../../interfaces/user'

const userSchema: yup.SchemaOf<ICreateUser> = yup.object().shape({
    name: yup
        .string()
        .max(60, "O nome não pode ter mais de 60 caracteres")
        .required("O nome é obrigatório"),
    username: yup
        .string()
        .max(60, "O nome de usuário não pode ter mais de 60 caracteres")
        .required("O nome de usuário é obrigatório"),
    email: yup
        .string()
        .required("O email é obrigatório"),
    password: yup
        .string()
        .max(60, "A senha não pode ter mais de 60 caracteres")
        .min(3, "A senha deve ter no mínimo 3 caracteres")
        .required("A senha é obrigatória"),
})

export { userSchema }