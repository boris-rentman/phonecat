'use strict';

angular.module('phonecatApp').component('phoneList', {
  bindings: { phones: '<' },
  templateUrl: 'phone-list/phone-list.template.html',
})