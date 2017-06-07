;(function() {
    'use strict';

    /**
     * Angular Select
     * @name angular-select.js
     * @description Select directive for angular 1.x
     * @author Karim Abdelcadir - Stefano Vollono
     * @version 1.0.0
     * @license MIT
     * @example
     */

    angular
        .module('angular-select', [])
        .directive('selectOption', selectOption);

    selectOption.$inject = ['$timeout', '$filter'];

    function selectOption($timeout, $filter) {

        return {
            template:   '<div class="customSelect" ng-class="{\'customSelect--disabled\': !selectoptionElements.items.length}">' +
                            '<div class="customSelect__selected" ng-class="{\'customSelect__selected--choosed\': selectoptionModel}">' +
                                '<p ng-if="!selectoptionElements.items.length">Nessun elemento</p>' +
                                '<p ng-if="selectoptionElements.items.length">{{selectoptionElements.title}}</p>' +
                                '<span class="customSelect__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="18px" height="18px"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" /></g></svg></span>' +
                            '</div>' +
                            '<ul class="customSelect__options">' +
                                '<li ' +
                                    'class="customSelect__options-items"' +
                                    'ng-click="so.updateParent($index)"' +
                                    'data-val="{{selectoptionElement.value}}"' +
                                    'ng-repeat="selectoptionElement in selectoptionElements.items"><span>{{selectoptionElement.label}}</span></li>' +
                            '</ul>' +
                            '<input style="display:none" type="text" name="{{selectoptionName}}" ng-model="selectoptionModel" ng-required="selectoptionRequired" />' +
                        '</div>',
            replace: true,
            restrict: 'E',
            scope: {
                selectoptionName: "@?",
                selectoptionModel: "=",
                selectoptionElements: "=",
                selectoptionCallback: "&",
                selectoptionRequired: "=?",
                selectoptionOrderby: "@?"
            },
            link: function (scope, element, attrs) {

                var $list = element.find(".customSelect__options");
                var $selected = element.find(".customSelect__selected");
                var $document = angular.element(document);

                $document.click(function() {
                    //Hide the menus if visible
                    if($list.is(":visible")) {
                        $list.hide();
                    }
                });

                $selected.click(function(event){
                    event.stopPropagation();

                    // chiudo le altre tendine eventualmente aperte
                    $('.customSelect__options').hide();

                    // apro e chiudo il corrente
                    if($list.is(":visible")) {
                        $list.hide();
                    } else {
                        $list.show();
                    }
                });

            }
        }

    };

}());
