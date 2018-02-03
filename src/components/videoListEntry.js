angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      vid: '<'
    },

    controller: function() {

      this.$onInit = () => {
        this.thumbnailImage = this.vid.snippet.thumbnails.default.url;
      };
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
