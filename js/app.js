$(document).ready(function() {
  /*Parallax function for images background*/
  $(window).scroll(function() {
    var barra = $(window).scrollTop();
    /*Move speeds*/
    var mov1 = barra * 0.10;
    var mov2 = barra * 0.25;
    var mov3 = barra * 0.40;
    /*background images movement*/
    $('#img1').css({
      'background-position': '0 -' + mov1 + 'px'
    });
    $('#img2').css({
      'background-position': '0 -' + mov2 + 'px'
    });
    $('#img3').css({
      'background-position': '0 -' + mov3 + 'px'
    });
  });
  /*Load text on title*/
  var kaos = new Vue({
  el: '#texto',
  data: {
    message1: 'ENCHANTED', message2: 'FOREST'
  },
  methods: {
    reverseMessage: function () {
      /*invert the words*/
      this.message1 = this.message1.split('').reverse().join(''),
      this.message2 = this.message2.split('').reverse().join('')
      }
    }

  });
});
