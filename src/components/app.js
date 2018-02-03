angular.module('video-player')
  .component('app', {

    controller: function($scope, $window, youTube) {
      this.videos = $window.exampleVideoData;
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.updateVideos = (data) => {
        this.videos = data.items;
        this.selectVideo(0);
      };
      this.updateVideos = this.updateVideos.bind(this);
      this.currentVideo = this.videos[0];
    },

    templateUrl: 'src/templates/app.html'
  });
