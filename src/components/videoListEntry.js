angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<',
      index: '<'
    },

    controller: function() {

      this.$onInit = () => {
        this.thumbnailImage = this.video.snippet.thumbnails.default.url;
        this.title = this.video.snippet.title;
        this.description = this.video.snippet.description;
      };
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
