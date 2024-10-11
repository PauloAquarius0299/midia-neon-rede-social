import {z} from 'zod';

export const signinSchema = z.object({
    email: z.string({message: 'Email é obrigatorio'}).email('Email invalido'),
    password: z.string({message: 'password é obrigatorio'}).min(4, 'Precisa ter 4 ou mais caracteries')
})