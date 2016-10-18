import jquery from 'jquery';
import angular from 'angular';

class AppUiCtrl {
    constructor() {
        this.url = 'https://github.com/harryho/ng1.x-webpack-es6-starter.git';
        this.headerTitle = 'Dashboard';
    }
}


class AppUiDirective {
    constructor() {
        this.require = 'ngModel';
        this.controller = AppUiCtrl;
        this.controllerAs = 'vm';
        this.transclude = true;
    }

    compile(scope, elem) {}
    link(scope, elem) {}
}

class SideBarDirective extends AppUiDirective {

    constructor() {
        super();
        this.template = require('../views/sidebar-view.html');
    }
}

class TopBarDirective extends AppUiDirective {

    constructor() {
        super();
        this.template = require('../views/topbar-view.html');
    }
}

class HeaderDirective extends AppUiDirective {

    constructor() {
        super();
        this.template = require('../views/header-view.html');
    }
}

class FooterDirective extends AppUiDirective {

    constructor() {
        super();
        this.template = require('../views/footer-view.html');
    }
}


export default angular.module('appUi.directives', [])
    .controller('AppUiCtrl', AppUiCtrl)
    .directive('sidebar', () => new SideBarDirective())
    .directive('topbar', () => new TopBarDirective())
    .directive('header', () => new HeaderDirective())
    .directive('footer', () => new FooterDirective()).name;