$(document).ready(function() {
    $(function() {
      $('#slides').slidesjs({
        width: 782,
        height: 400,
        navigation: false,
        play:{
            auto:true,
            interval: 5000
        }
      });
    });
});