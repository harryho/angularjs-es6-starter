import angular from 'angular';
import ngUiRouter from 'angular-ui-router';
import ngUiRouterStateHelper from 'angular-ui-router.statehelper';
import jquery from 'jquery';


import routes from './app.routes';
import runners from './app.runner';
import common from './common/common';
import commonDirectives from './common/directives/commonDirectives';
import appUiDirectives from './common/directives/appUiDirectives';
import dashboard from './main/dashboard/controllers/dashboardController';


import '../style/bootstrap.css';
import '../style/animate.css';
import '../style/style.css';
import '../style/app.css';


let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    };
};

class AppCtrl {
    constructor() {
        this.url = REPO_URL;
    }
}

const REPO_URL = 'https://github.com/harryho/angularjs-webpack-es6-starter.git';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
        ngUiRouter,
        common, commonDirectives, appUiDirectives, dashboard
    ])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .config(routes).run(runners);

export default MODULE_NAME;