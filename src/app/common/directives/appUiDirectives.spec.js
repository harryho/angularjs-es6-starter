import angular from 'angular';
import appUiDirectives from './appUiDirectives';

describe('Module: AppUiDirectives', () => {
    let $compile;

    beforeEach(inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });

});

describe('Controller: AppUiCtrl', () => {
    let ctrl;

    beforeEach(() => {

        angular.mock.module(appUiDirectives);

        angular.mock.inject(($controller) => {
            ctrl = $controller('AppUiCtrl', {});
        });

    });

    it('AppUiCtrl should contain url', () => {
        expect(ctrl.url).toBeDefined();
        expect(ctrl.url).toBe('https://github.com/harryho');

    });
});



describe('directive: header ', () => {
    var element, scope;

    beforeEach(() => {
        angular.mock.module(appUiDirectives);

        angular.mock.inject(function($rootScope, $compile) {
            scope = $rootScope.$new();

            element = '<div class="header navbar-header"> {{ vm.headerTitle }} </div>';
            scope.vm = {};
            scope.vm.headerTitle = 'Dashboard';
            element = $compile(element)(scope);
            scope.$digest();
        });
    });


    describe('with the given value', () => {

        it("should has class header ", function() {
            expect(element.attr('class')).toContain('header');

        });

        it("should has content Dashboard ", function() {
            var contents = element.contents();
            expect(contents[0].contains('Dashboard'));
        });
    });

});




describe('directive: footer ', () => {
    var element, scope;

    beforeEach(() => {
        angular.mock.module(appUiDirectives);

        angular.mock.inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            element = '<a href="{{vm.url}}"> <strong>Github Repo</strong> . </a>';
            scope.vm = {};
            scope.vm.url = 'https://github.com/harryho';
            element = $compile(element)(scope);
            scope.$digest();
        });
    });

    describe('with the given value', () => {

        it("should has url   ", function() {
            expect(element.attr('href')).toContain('https://github.com/harryho');
        });
    });

});