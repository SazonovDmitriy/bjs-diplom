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

// userForm.registerFormCallback((data) => {
//     ApiConnector.login = ({data}, loginFormAction(data));
//         if (ApiConnector.login) {
//             location.reload();
//         } else {
//             setMessage(isSuccess, "Ошибка")
//         }
// });