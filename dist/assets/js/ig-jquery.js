$(document).ready(function () {
    
    //$zopim(function () {});

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });
});

// $(window).bind("load", function() {
//     $zopim(function () {
//         $zopim.livechat.hideAll();
//     });
// });



// $(document).ready(function(){
//     $("#menuico").click(function(){
//         $("#conten1").toggle();
        
//     });
// });

/*function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './assets/json/allowChatSites.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
    
                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);
    
            }
        }
        xobj.send(null);
    
    }*/