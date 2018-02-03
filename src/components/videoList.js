angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },

    controller: function() {
      // debugger;
      // this.onClick = () => {};

      // this.$onInit = function() {
      //   console.log('foo');
      //   // debugger;
      //   console.log('bar');
      // };
    },


    templateUrl: 'src/templates/videoList.html'
  });
