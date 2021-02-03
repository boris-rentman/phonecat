'use strict';

angular.module('core.phone')
    .factory('Phone', ['$http',
        function ($http) {
            return {
                getAllPhones: function () {
                    return $http.get('phones/phones.json').then(function (response) {
                        return response.data;
                    });
                },

                getPhoneById: function (phoneId) {
                    return $http.get(`phones/${phoneId}.json`).then(function (response) {
                        return response.data;
                    });
                }
            };
        }
    ]);
