$(document).ready(function() {
    $('.turning').fadeOut('slow', function(){});
    $('.finish_him').fadeIn('fast', function(){});
    $('.featured_game .text').fadeOut('slow', function(){});
    $('#hidden').slideDown('slow', function(){});
    $('#news_container').css('bottom','154px');
    $('#games_footer').css('bottom','157px');

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','audio/finish_him.mp3');
    audioElement.setAttribute('autoplay','autoplay');
    audioElement.addEventListener('load', function(){
        audioElement.play();
    }, true);

    $(window).tlou(function(){
        $('.news').empty();
        $('.news').css('background','url(images/wallpaper_bg.jpg) no-repeat');

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src','audio/finished.mp3');
        audioElement.setAttribute('autoplay','autoplay');
        audioElement.addEventListener('load', function(){
            audioElement.play();
        }, true);

        $('.news').html('<table id="wallpapers"> <tbody> <tr> <th>Widescreen</th> <th>Standard</th> <th>Handheld</th> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_2880x1800.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>2880x1800</a></td> <td><a href="images/Wallpapers/TurningWallpaper_1600X1200.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1600x1200</a></td> <td><a href="images/Wallpapers/TurningWallpaper_PSP.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>PSP</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_2560x1600.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>2560x1600</a></td> <td><a href="images/Wallpapers/TurningWallpaper_1280x1024.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1280x1024</a></td> <td><a href="images/Wallpapers/TurningWallpaper_PSVita.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Vita</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1920x1200.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1920x1200</a></td> <td><a href="images/Wallpapers/TurningWallpaper_1024x768.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1024x768</a></td> <td><a href="images/Wallpapers/TurningWallpaper_iPad.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>iPad</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1920x1080.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1920x1080</a></td> <td><a href="images/Wallpapers/TurningWallpaper_800x600.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>800x600</a></td> <td><a href="images/Wallpapers/TurningWallpaper_iPhone5.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>iPhone 5</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1680x1050.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1680x1050</a></td> <td></td> <td><a href="images/Wallpapers/TurningWallpaper_Nexus5.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Nexus 5</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1600x900.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1600x900</a></td> <th>Social Media</th> <td><a href="images/Wallpapers/TurningWallpaper_iPhone4.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>iPhone 4</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1440x900.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1440x900</a></td> <td><a href="images/Wallpapers/TurningWallpaper_FacebookCoverPhoto.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Facebook Cover</a></td> <td><a href="images/Wallpapers/TurningWallpaper_iPhone.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>iPhone</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1366x768.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1366x768</a></td> <td><a href="images/Wallpapers/TurningWallpaper_TwitterHeader.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Twitter</a></td> <td><a href="images/Wallpapers/TurningWallpaper_BlackberryStorm.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Blackberry Storm</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1280x800.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1280x800</a></td> <td><a href="images/Wallpapers/TurningWallpaper_GooglePlus.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Google Plus</a></td> <td><a href="images/Wallpapers/TurningWallpaper_BlackberryBold.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Blackberry Bold</a></td> </tr> <tr> <td><a href="images/Wallpapers/TurningWallpaper_1280x720.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>1280x720</a></td> <td></td> <td><a href="images/Wallpapers/TurningWallpaper_BlackberryPearl.jpg" onclick="pageTracker._trackEvent("image","click","wallpapers");>Blackberry Pearl</a></td> </tr> </tbody> </table>');
    });
});
