const logoutButton = new LogoutButton();
const ratesBoard = new RatesBoard();
const moneyManager = new MoneyManager();
const favoritesWidget = new FavoritesWidget();

logoutButton.action = (logoutCallback => {
    ApiConnector.logout(logoutCallback, logoutClick => {
        if (logoutClick) {
            location.reload();
        }
    });
});

ApiConnector.current((response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

ratesBoard.getCourses = () => ApiConnector.getStocks((response) => {
    if (response.success) {
        clearTable() && fillTable(data);
    };
    setTimeout(() => {
        ApiConnector.getStocks(response)
    }, 60000)
});



moneyManager.addMoneyCallback = (data => {
    ApiConnector.addMoney(data, response => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
});
moneyManager.conversionMoneyCallback = (data => {
    ApiConnector.convertMoney(data, response => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
});

moneyManager.sendMoneyCallback = (data => {
    ApiConnector.transferMoney(data, response => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(false, response.error);
        }
    })
});

favoritesWidget.favoritesTableBody = (data => {
    ApiConnector.getFavorites(data, response => {
        if (response.success) {
            clearTable() && fillTable(data) && updateUsersList(data);
        }
    });
});
favoritesWidget.addUserCallback = (data => {
    ApiConnector.addUserToFavorites(data, response => {
        if (response.success) {
            clearTable() && fillTable(data) && updateUsersList(data);
        } else {
            favoritesWidget.setMessage(false, response.error);
        }
    });
});

favoritesWidget.removeUserCallback = (data => {
    ApiConnector.removeUserFromFavorites(data, response => {
        if (response.success) {
            clearTable() && fillTable(data) && updateUsersList(data);
        } else {
            favoritesWidget.setMessage(false, response.error);
        }
    });
});