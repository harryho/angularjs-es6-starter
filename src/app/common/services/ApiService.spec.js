import ApiService from './ApiService';

describe('Service: ApiService', () => {
    let $compile;

    beforeEach(inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });
});