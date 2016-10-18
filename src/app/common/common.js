import angular from 'angular';
import UtilService from './services/UtilService';
import ApiService from './services/ApiService';

export default angular.module('common', [])
    .factory('UtilService', UtilService)
    .factory('ApiService', ApiService)
    .name;