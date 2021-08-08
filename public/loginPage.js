"use strict";
const userForm = new UserForm();
userForm.loginFormCallback((data) => {
    ApiConnector.login = loginFormAction(data);
        if (ApiConnector.login) {
            location.reload();
        } else {
            setLoginErrorMessage(message)
        }
});

userForm.registerFormCallback((data) => {
    ApiConnector.login = ({data}, registerFormAction(data));
        if (ApiConnector.login) {
            location.reload();
        } else {
            setRegisterErrorMessage(`Пользователь с логином ${login} и указанным паролем не найден`)
            if (ApiConnector.login) {
                logout(callback)
            };
        }
});