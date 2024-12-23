import { object, string, ref } from 'yup';

export const channelNamesShema = (channelNames) => object({
  name: string()
    .trim()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .notOneOf(channelNames, 'Должно быть уникальным')
    .required('Обязательное поле'),
});

export const signUpShema = () => object({
  username: string()
    .trim()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
  password: string()
    .trim()
    .min(6, 'Не менее 6 символов')
    .required('Обязательное поле'),
  confirmPassword: string()
    .trim()
    .oneOf([ref('password')], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});
