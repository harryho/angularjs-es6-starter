const Config = ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) => {
    'ngInject';

    $logProvider.debugEnabled(true); /** Turn debug mode on/off */
    $locationProvider.html5Mode(true); /** Turn html5 mode on */
    $urlRouterProvider.otherwise('/dashboard'); /** If current route not in routes then redirect to home */

    /**
     * Url processing.
     * @param {Object} $injector - Ability to inject providers.
     * @param {Object} $location - Current location.
     */
    $urlRouterProvider.rule(($injector, $location) => {
        const path = $location.path();
        /** If route like as /dashboard/ then /dashboard */
        $location.path(path[path.length - 1] === '/' ? path.slice(0, -1) : path).replace();
    });


    $stateProvider /** Describe our states */
        .state('dashboard', {
            url: "/dashboard",
            template: require('./main/dashboard/views/dashboard-view.html'),
            controller: 'DashboardController',
            controllerAs: 'vm',
            data: { pageTitle: 'Dashboard' }
        });
};

/** Export our config */
export default Config;