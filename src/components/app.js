angular.module('video-player')
  .component('app', {
    controller: function($scope, $window) {
      this.videos = $window.exampleVideoData;
    },

    templateUrl: 'src/templates/app.html'
  });
