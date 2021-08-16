"use strict";
const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(`Произошла ошибка: ${response.success}`);
            return response.data;
        }
    })
};

userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        if (response.success) {
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(`Пользователь с логином ${login} и указанным паролем не найден`);
            return response.data;
        }
    });
}