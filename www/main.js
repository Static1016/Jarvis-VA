$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect: "bounceOut",
        },
    });

    //Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios",
        speed: "0.30",
        autostart: true
      });

    //Siri Message Animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "fadeInUP",
            sync: true,
        },
        out:{
            effect: "fadeOutUp",
            sync: true,
        },
    });
});