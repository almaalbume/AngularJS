(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController)

    AppController.$inject = ['$location', 'AppFactory'];

    function AppController($location, AppFactory) {
        var self = this;

        self.id = null;
        self.nombre = null;
        self.nombresList = [];

        ////////////////

        self.init = init;
        self.holaMundo = holaMundo;

        ////////////////

        init();

        function init() {
            self.nombresList = AppFactory.getData();
        }


        function holaMundo() {
            var objInstance = {
                id: self.id,
                nombre: self.nombre
            };

            self.nombresList.push(objInstance);
            cleanFields();
        }

        function cleanFields() {
            self.id = null;
            self.nombre = null;
        }



    }
})();