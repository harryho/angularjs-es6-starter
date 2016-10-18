import angular from 'angular';
import jquery from 'jquery';

class DashboardController {
    constructor() {
        this.greeting = 'Welcome to ng1.5 webpack es6 starter';
        this.subject = 'It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.';
    }
}

export default angular.module('dashboard', []).controller('DashboardController', DashboardController).name;