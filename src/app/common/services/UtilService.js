/**
 * Util Service is a factory style service.  
 * @module common
 * @see common
 *  */
const UtilService = () => {
    'ngInject';

    class UtilService {
        static getName() {
            return 'UtilService';
        }
    }

    return {
        getName: UtilService.getName
    };
};


export default UtilService;