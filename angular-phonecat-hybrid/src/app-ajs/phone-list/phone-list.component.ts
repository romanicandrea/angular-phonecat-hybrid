'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  template: `<ng-include src="'src/app-ajs/phone-list/phone-list.template.html'"></ng-include>`,
  controller: [
    'Phone',
    function PhoneListController(this: any, Phone) {
      this.phones = Phone.query();
      this.orderProp = 'age';
    },
  ],
});
