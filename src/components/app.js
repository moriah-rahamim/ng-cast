angular.module('video-player')
  .component('app', {

    controller: function($scope, $window, youTube) {

      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };

      this.updateVideos = (data) => {
        this.videos = data.items;
        this.selectVideo(0);
      };
      this.updateVideos = this.updateVideos.bind(this);

      this.$onInit = () => {
        youTube.searchYouTube({
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          query: 'kittens'
        }, this.updateVideos);
      };
    },

    templateUrl: 'src/templates/app.html'
  });
