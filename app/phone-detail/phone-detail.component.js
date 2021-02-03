'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phonecatApp').component('phoneDetail', {
  bindings: { phone: '<' },
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: function () {
    var self = this;

    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };
  }
});
