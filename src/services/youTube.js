angular.module('video-player')
  .service('youTube', function($http) {

    this.searchYouTube = function(options, callback) {
      return $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.maxResults}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`
      }).then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('unsuccessful request', response);
      });
    };  
  });
