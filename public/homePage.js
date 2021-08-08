const logoutButton = new LogoutButton();
const ratesBoard = new RatesBoard();
const moneyManager = new MoneyManager();

logoutButton.action((logout) => {
        if (action(logout)) {
            location.reload();
    }
    if (current(callback)) {
        ProfileWidget.showProfile;
    }
});

ratesBoard.getCourses = () => ApiConnector.getStocks((response) => {
    if (ApiConnector.getStocks(response)) {
        ApiConnector.getStocks(clearTable) && ApiConnector.getStocks(fillTable);
    };
    setTimeout(() => {
        ApiConnector.getStocks(response)
    }, 60000)
});

// moneyManager.addMoneyCallback = (data) => ApiConnector.addMoney({currency, amount}, callback) { Первая строка неверна , не пойму как правильно, понимаю что дальше будет тоже самое
//     if (ApiConnector.addMoney()) { И надо ли здесь через try catch???
//         showProfile;
//     } else {
//         setMessage(isSuccess, message);
//     }
// }