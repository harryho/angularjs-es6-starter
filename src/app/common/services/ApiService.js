/**
 * Api service is a factory style service.  
 * @module common
 * @see common
 */
const ApiService = () => {
    'ngInject';

    class ApiService {
        static getName() {
            return 'ApiService';
        }
    }

    return {
        getName: ApiService.getName
    };
};

export default ApiService;