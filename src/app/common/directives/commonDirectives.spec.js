import angular from 'angular';
import jquery from 'jquery';
import commonDirectives from './commonDirectives';

describe('Module: CommonDirectives', () => {
    let $compile;

    beforeEach(inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });

});