angular.module('video-player')

  .component('search', {

    bindings: {
      updateVideos: '<'
    },

    controller: function($window, youTube) {

      this.search = (input) => {
        var params = {
          key: $window.YOUTUBE_API_KEY,
          maxResults: 5,
          query: input
        };

        youTube.searchYouTube(params, this.updateVideos);
      };
    },

    templateUrl: 'src/templates/search.html'
  });
