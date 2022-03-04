const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const _passwordLanguageRegExp = /^[A-z\d]+$/;
const _passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/;

export const REQUIRED_FIELD = "Заполните обязательные поля";
const WRONG_MIN_LENGTH = (min: number) =>
  `Ограничение на ввод менее ${min} символов`;
const WRONG_MAX_LENGTH = (max: number) =>
  `Ограничение на ввод более ${max} символов`;
const WRONG_NAME = "Имя должно быть не больше 60 символов";
const ENTER_EMAIL = "Введите почту";
const WRONG_EMAIL_LANGUAGE = "Почта должна содержать только латинские буквы";
const WRONG_EMAIL = "Почта должна содержать специальный символ @ и домен";
const WRONG_EMAIL_LENGTH = "Ограничение на ввод более 40 символов";
const ENTER_PASSWORD = "Введите пароль";
const ENTER_REPEATED_PASSWORD = "Повторите пароль";
const WRONG_PASSWORD_LANGUAGE =
  "Пароль должен состоять только из цифр и латинских букв";
const WRONG_PASSWORD_FORMAT =
  "Пароль должен содержать не менее 1 цифры, 1 прописной и 1 строчной буквы";
const WRONG_PASSWORD_LENGTH =
  "Пароль должен содержать не менее 8 символов и не более 30 символов";
const WRONG_REPEATED_PASSWORD = "Пароли не совпадают";

const NOT_ERROR = "";

class ValidationService {
  public validateRequired(value: string): string {
    if (!value) {
      return REQUIRED_FIELD;
    }

    return NOT_ERROR;
  }

  public validateLength(value: string, max?: number, min?: number): string {
    if (!value) {
      return REQUIRED_FIELD;
    }

    if (max !== undefined) {
      return value.length > max ? WRONG_MAX_LENGTH(max) : NOT_ERROR;
    }

    if (min !== undefined) {
      return value.length < min ? WRONG_MIN_LENGTH(min) : NOT_ERROR;
    }

    return NOT_ERROR;
  }

  public validateName(name: string): string {
    if (!name) {
      return REQUIRED_FIELD;
    }

    if (name.length > 60) {
      return WRONG_NAME;
    }

    return NOT_ERROR;
  }

  public validateEmail(email: string): string {
    if (!email) {
      return ENTER_EMAIL;
    }

    if (!_emailLanguageRegExp.test(email)) {
      return WRONG_EMAIL_LANGUAGE;
    }

    if (!_emailRegExp.test(email)) {
      return WRONG_EMAIL;
    }

    return NOT_ERROR;
  }

  public validatePassword(password: string): string {
    if (!password) {
      return ENTER_PASSWORD;
    }

    if (!_passwordLanguageRegExp.test(password)) {
      return WRONG_PASSWORD_LANGUAGE;
    }

    if (!_passwordRegExp.test(password)) {
      return WRONG_PASSWORD_FORMAT;
    }

    if (password.length < 8) {
      return WRONG_PASSWORD_LENGTH;
    }

    if (password.length > 30) {
      return WRONG_PASSWORD_LENGTH;
    }

    return NOT_ERROR;
  }

  public validateRepeatedPassword(
    password: string,
    repeatedPassword: string
  ): string {
    if (!password) {
      return NOT_ERROR;
    }

    if (!repeatedPassword) {
      return ENTER_REPEATED_PASSWORD;
    }

    if (password !== repeatedPassword) {
      return WRONG_REPEATED_PASSWORD;
    }

    return NOT_ERROR;
  }
}

export const validationService = new ValidationService();
