angular.module('video-player')
  .component('app', {

    controller: function($scope, $window) {
      this.videos = $window.exampleVideoData;
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.currentVideo = this.videos[0];
    },

    templateUrl: 'src/templates/app.html'
  });
