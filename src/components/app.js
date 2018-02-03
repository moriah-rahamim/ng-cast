angular.module('video-player')
  .component('app', {

    controller: function($scope, $window) {
      this.videos = $window.exampleVideoData;
      this.onClick = (index) => {
        this.video = this.videos[index];
      };
      this.video = this.videos[0];
    },

    templateUrl: 'src/templates/app.html'
  });
