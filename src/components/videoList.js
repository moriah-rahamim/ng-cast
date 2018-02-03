angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<'
    },

    controller: function() {
      // debugger;

      this.$onInit = function() {
        console.log('foo');
        // debugger;
        console.log('bar');
      };
    },


    templateUrl: 'src/templates/videoList.html'
  });
