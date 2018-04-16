(function () {
    'use strict';

    angular
        .module('app')
        .factory('AppFactory', AppFactory)

    AppFactory.$inject = ['$http'];

    function AppFactory($http) {
        var self = this;
        self.nombresList = [
            {
                id: 1,
                nombre: "Pedro"
            },
            { id: 3, nombre: 'Carlos' }
        ];

        return {
            getData: getData
        };

        function getData() {
            return self.nombresList;
        }
    }
})();