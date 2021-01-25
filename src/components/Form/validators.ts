import { MainFormInterface } from "./types";

const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const excludeUndefinedFromErrors = (errors: {
  [p: string]: string | undefined;
}) =>
  Object.keys(errors)
    .filter((key) => errors[key] !== undefined)
    .reduce<{
      [key: string]: string | undefined;
    }>((acc, currentKey) => {
      if (currentKey) {
        acc[currentKey] = errors[currentKey];
        return acc;
      }
      return acc;
    }, {});

export const validateEmail = (email: string): string | undefined =>
  !email
    ? "Обязательное поле"
    : !regExpEmail.test(email)
    ? "Невалидный адрес почты"
    : undefined;

export const validateFieldRequired = (
  field: string | null
): string | undefined => (!!field ? undefined : "Обязательное поле");

export const validateForm = ({
  birthdate,
  email,
  name,
  phone,
  surname
}: MainFormInterface): {
  [key: string]: string | undefined;
} => {
  const errors: {
    [key: string]: string | undefined;
  } = {
    email: validateEmail(email),
    birthdate: validateFieldRequired(birthdate),
    surname: validateFieldRequired(surname),
    name: validateFieldRequired(name),
    phone: validateFieldRequired(phone)
  };

  return excludeUndefinedFromErrors(errors);
};
