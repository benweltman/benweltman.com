// Mobile menu icon switch

function menuSwitcher() {
    $('.menu-icon').toggleClass('d-block d-none');
    $('.close-icon').toggleClass('d-none d-block');
}

// Light & Dark Mode switch
function modeSwitcher() {

    var light = localStorage.getItem('light');

    if (light === 'True') {
      localStorage.setItem('light', 'False');
      $('html').attr('data-bs-theme', 'dark');
      $('.bg-light').removeClass('bg-light').addClass('bg-dark');
      $('.btn-light').removeClass('btn-light').addClass('btn-dark');
      $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
      $('.border-dark').removeClass('border-dark').addClass('border-light');      
      $('.switch-icon').text('light_mode');
      $('.text-white').removeClass('text-white').addClass('text-dark');      
    } else {
      localStorage.setItem('light', 'True');
      $('html').attr('data-bs-theme', 'light');
      $('.bg-dark').removeClass('bg-dark').addClass('bg-light');
      $('.btn-dark').removeClass('btn-dark').addClass('btn-light');
      $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
      $('.border-light').removeClass('border-light').addClass('border-dark');
      $('.switch-icon').text('dark_mode');
      $('.text-dark').removeClass('text-dark').addClass('text-white');
    }

}

// Colour palette stuff
function getPrimaryColor() {
    let input = document.querySelector('#primary')
    let colorP = HexToHSL(input.value)

    console.log('hsl(' + colorP.h + ', ' + colorP.s + '%, ' + colorP.l + '%)')

    $(':root').get(0).style.setProperty('--primary', 'hsl(' + colorP.h + ', ' + colorP.s + '%, ' + colorP.l + '%)');
    $(':root').get(0).style.setProperty('--primary-h', colorP.h);
    $(':root').get(0).style.setProperty('--primary-s', colorP.s + '%');
    $(':root').get(0).style.setProperty('--primary-l', colorP.l + '%');

    checkColours();
}

// Check colours for black & white
function checkColours() {

    if ($('#primary').val() === '#ffffff') {
      $('body').addClass('white-primary');
    } else {
      $('body').removeClass('white-primary'); 
    }

    if ($('#primary').val() === '#000000') {
      $('body').addClass('black-primary');
    } else {
      $('body').removeClass('black-primary'); 
    }
}

// More colour stuff
function HexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return { h, s, l };
}
