import jquery from 'jquery';
import angular from 'angular';


const MinimalizaSidebarDirective = $timeout => {

    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        link(scope) {
            scope.minimalize = function() {

                console.log(' mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ');

                let timeout;
                jquery("body").toggleClass("mini-navbar");
                if (!jquery('body').hasClass('mini-navbar') || jquery('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    jquery('#side-menu').hide();
                    // For smoothly turn on menu
                    timeout = $timeout(() => jquery('#side-menu').fadeIn(400), 200);
                } else if (jquery('body').hasClass('fixed-sidebar')) {
                    jquery('#side-menu').hide();

                    timeout = $timeout(() => jquery('#side-menu').fadeIn(400), 100);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    jquery('#side-menu').removeAttr('style');
                }
            };
        }
    };
};


export default angular.module('commonDirectives', [])
    .directive('minimalizaSidebar', MinimalizaSidebarDirective).name;