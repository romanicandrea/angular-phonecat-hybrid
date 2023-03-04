'use strict';
// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
  template: `<ng-include src="'src/app-ajs/phone-detail/phone-detail.template.html'"></ng-include>`,
  controller: [
    '$routeParams',
    'Phone',
    function PhoneDetailController(this: any, $routeParams, Phone) {
      var self = this;
      self.phone = Phone.get(
        { phoneId: $routeParams.phoneId },
        function (phone: any) {
          self.setImage(phone.images[0]);
        }
      );

      self.setImage = function setImage(imageUrl: any) {
        self.mainImageUrl = imageUrl;
      };
    },
  ],
});