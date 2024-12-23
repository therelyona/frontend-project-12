import { object, string } from 'yup';

const channelNamesShema = (channelNames) => object({
  name: string()
    .trim()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .notOneOf(channelNames, 'Должно быть уникальным')
    .required('Обязательное поле'),
});

export default channelNamesShema;
