var helloState = {
    name: 'hello-world',
    url: '/hello-world',
    templateUrl: 'hello-world/hello-world.template.html'
};

var peopleState = {
    name: 'people',
    url: '/people',
    component: 'people',
    resolve: {
        phones: function ($http, $injector) {
            return $http.get('phones/' + 'phones.json').then(function (response) {
                return response.data;
            });
        }
    }
};