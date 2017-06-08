(function(){
    "use strict";

    angular
        .module('selectExampleApp', ['angular-select'])
        .controller('demoSelectCtrl', demoSelectCtrl);

    demoSelectCtrl.$inject = ['$scope'];
    function demoSelectCtrl ($scope) {

        $scope.formData = {};
        $scope.callbackResult = null;

        $scope.countries = {
            title: 'Nazione',
            items : [
                {label: 'France', value: 'FR'},
                {label: 'Inghilterra', value: 'UK'},
                {label: 'Germania', value: 'DE'}
            ]
        };

        $scope.countriesCallback = function (index) {
            $scope.callbackResult = index;
        }


    };
})();