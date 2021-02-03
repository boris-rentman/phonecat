'use strict';
//UI-Router approach

angular.module("phonecatApp",["ui.router", "core.phone"])
    .config(function ($stateProvider) {

        var routes = [
            {
                name: 'home',
                url: '/',
                component: 'phoneList',
                resolve: {
                    phones: function ($injector) {
                        var PhoneService = $injector.get('Phone');

                        return PhoneService.getAllPhones().then(function (response) {
                            return response;
                        });
                    }
                }
            },

            {
                name: 'phoneList',
                url: '/phones',
                component: 'phoneList',
                resolve: {
                    phones: function ($injector) {
                        var PhoneService = $injector.get('Phone');

                        return PhoneService.getAllPhones().then(function (response) {
                            return response;
                        });
                    }
                }
            },

            {
                name: 'phoneDetail',
                url: '/phones/{phoneId}',
                component: 'phoneDetail',
                resolve: {
                    phone: function ($transition$, $injector) {
                        var PhoneService = $injector.get('Phone');

                        return PhoneService.getPhoneById($transition$.params().phoneId).then(function (response) {
                            return response;
                        });
                    }
                }
            }
        ];

        routes.forEach(route => $stateProvider.state(route));
    });
