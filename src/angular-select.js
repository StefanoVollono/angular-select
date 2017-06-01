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
                                '<span class="svgIconWrap--arrow-big" data-svg-icon="arrow"></span>' +
                            '</div>' +
                            '<ul class="customSelect__options">' +
                                '<li ' +
                                    'class="customSelect__options-items"' +
                                    'ng-click="so.updateParent($index)"' +
                                    'data-val="{{selectoptionElement.value}}"' +
                                    'ng-repeat="selectoptionElement in selectoptionElements.items">{{selectoptionElement.label}}</li>' +
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
            link: function (scope, element, attrs) {}
        }

    };

}());
