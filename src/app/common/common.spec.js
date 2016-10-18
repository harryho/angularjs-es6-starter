import common from './common';

// describe('Common', () => {

describe('UtilService', () => {
    let ctrl;
    let utilSvc;
    let apiSvc;
    beforeEach(() => {
        angular.mock.module(common);

        angular.mock.inject(($injector) => {
            utilSvc = $injector.get('UtilService');
            apiSvc = $injector.get('ApiService');
        });
    });

    it('UtilService should contain the name ', () => {
        expect(utilSvc.getName()).toBe('UtilService');
    });


    it('ApiService should contain the name ', () => {
        expect(apiSvc.getName()).toBe('ApiService');
    });

});