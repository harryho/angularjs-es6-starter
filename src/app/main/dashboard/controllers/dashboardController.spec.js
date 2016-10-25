import dashboardController from './dashboardController';


describe('Controller: DashboardController', () => {
    let ctrl;

    beforeEach(() => {
        angular.mock.module(dashboardController);

        angular.mock.inject(($controller) => {
            ctrl = $controller('DashboardController', {});
        });
    });

    it('DashboardController should contain the greeting ', () => {
        expect(ctrl.greeting).toBe('Welcome to ng1.5 webpack es6 starter');
    });


    it('DashboardController should contain the subject ', () => {
        expect(ctrl.subject !== null).toBe(true);
    });
});