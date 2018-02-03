angular.module('video-player')
  .service('youTube', function($http) {

    this.searchYouTube = function(params, callback) {
      return $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params.maxResults}&q=${params.query}&type=video&videoEmbeddable=true&key=${params.key}`
      }).then(function successCallback(response) {
        callback(response.data);
      }, function errorCallback(response) {
        console.log('unsuccessful request', response);
      });
    };  
  });
