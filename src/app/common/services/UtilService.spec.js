import UtilService from './UtilService';

describe('Service: UtilService', () => {
    let $compile;

    beforeEach(inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });
});