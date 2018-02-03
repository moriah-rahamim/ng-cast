angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },

    controller: function() {
      this.$onInit = () => {
        this.videoId = this.video.id.videoId;
        this.url = 'https://www.youtube.com/embed/' + this.videoId;
        this.title = this.video.snippet.title;
        this.description = this.video.snippet.description;
      };
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });
