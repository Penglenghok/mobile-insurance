$(document).ready(function() {

    $('.btn-camera a').on('mouseover',function(){
        $(this).parents('.items').find('.box-title').css({'color':'#F29022'});
    });
    $('.btn-camera a').on('mouseleave',function(){
        $('.items').find('.box-title').css({'color':'black'});
    });

    $.fn.clickMenuHumberger = function(options) {
        var eThis = this;
        var setting = {
            menuAnimate: true,
            width: 89,
            obj: [],
            objHide: [],
            duration: 300,
            navbarFixed: {
                headerNav: '',
                content: ''
            }
        };
        options = $.extend(setting, options);
        return this.each(function() {
            var eachThis = $(this);
            var navH = $(options.navFixed).outerHeight();
            var windowWidth = $(window).width();
            var widthN = (windowWidth * options.width) / 100;
            eachThis.parents('body').prepend('<div id="contentLayer"></div>'); //for click hide
            $('#contentLayer').css({ 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': 0, 'z-index': 2, 'display': 'none', 'box-shadow': '-5px 0 10px rgba(0,0,0,0.4)'});
            var navH = $(options.navbarFixed.headerNav).outerHeight();
            $(options.navbarFixed.content).css({ 'margin-top': navH + 'px' });
            eachThis.on('click', function() {
                $(this).css({'margin-left':'-5%'});
                for (var i = 0; i < options.objHide.length; i++) {
                    $(options.objHide[i]).show();
                }
                for (var i = 0; i < options.obj.length; i++) {
                    $(options.obj[i]).css({
                        'position': 'relative'
                    });
                }
                if (options.menuAnimate === true) {//click hamberger menu and make menu as animation
                    var count = 1;
                    $('#header nav .menu-side-bar > li > a').each(function(){
                        $(this).addClass('animated slideInLeft');
                        var xxx = count/100;
                        var reCount = xxx+'s';
                        $(this).css({
                            'animation-duration': '0.001',
                            'animation-delay':reCount
                        });
                        count+=4;
                    });
                }
                $(this).addClass('change-hamburger-menu');
                $('#contentLayer').css({ 'right': '-' + widthN + 'px' });
                for (var i = 0; i < options.obj.length; i++) {
                    $(options.obj[i]).stop().animate({ 'right': '-' + widthN + 'px' }, options.duration, function() {
                        $('#contentLayer').show();
                    });
                }
                $('body').css({'overflow':'hidden'});
            });
           
            $('#contentLayer').on('click', function() {
                eThis.removeClass('change-hamburger-menu');
                eThis.css({'margin-left':''});
                $('#contentLayer').hide();
                for (var i = 0; i < options.obj.length; i++) {
                    $(options.obj[i]).stop().animate({ 'right': 0 }, options.duration, function() {
                        $('#contentLayer').stop().animate({ 'right': 0 });
                        for (var i = 0; i < options.objHide.length; i++) {
                            $(options.objHide[i]).hide();
                        }
                        $('body').css({'overflow':'scroll'});
                    });
                }
                
                if (options.menuAnimate === true) {//click hamberger menu and make menu as animation
                     $('#header nav .menu-side-bar > li > a').removeClass('animated fadeInLeft');
                }
            });
        });
    };
    $('#hamburger-menu').clickMenuHumberger({
        obj:['.container-cus','.container-content','.container-footer'],
        objHide:['#header nav .menu-side-bar'],
        width: 90,
        duration:300,
        navbarFixed:{
            headerNav:'.container-cus2',
            content:'.container-content'
        }
    });

    function fullHeightScreen() {
        var amountHeaderH = '';
        var windowHight = $(window).height();
        var windowWidth = $(window).width();
        var dataHeaderH = $("[data-headerh]").outerHeight();
        if (typeof dataHeaderH !== 'undefined') {
            amountHeaderH = dataHeaderH;
        } else {
            amountHeaderH = '';
        }
        $("[data-fullscreen]").each(function() {
            var imgWidth = $(this).find('img').width();
            $("[data-fullscreen]").css({ 'height': windowHight - amountHeaderH + 'px', 'width': '100%', 'overflow': 'hidden' });
        });
    }
    $(window).resize(function() {
        fullHeightScreen();
    });
    fullHeightScreen();


    // slick slider
    // $('.banner-home').slick({
    //     dots: true,
    //     dotsClass: 'dots-ecam',
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     nextArrow: '<div class="arrow-right"><i class="fa fa-angle-right"></i></div>',
    //     prevArrow: '<div class="arrow-left"><i class="fa fa-angle-left"></i></div>',
    // });
    // $('.dots-ecam li button,.dots-ecam2 li button').text('');
    $('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').remove();

    $('.partner-member').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        rows:2,
        infinite:true,
        arrows:false,
        dots:true,
        dotsClass:'partner-dot',
        autoplay:true,
        autoplaySpeed:3000
    });

    $('.partner-dot li button').text('');



    // faq click show answer
  function clickShow(){
    $('[data-parent]').each(function(){
      var styleBox = $(this).data('parent');
      var dataSign = $(this).find('[data-sign]');
      var arrSign,arrSign2;
      $(this).prepend('<input class="txt-num-sign2" type="hidden" value="1">');
      $(this).find('[data-clickshow]').wrap('<div style="cursor:pointer;position:relative;"></div>');
      if (dataSign.data('sign')) {
        arrSign = dataSign.data('sign');
        arrSign2 = arrSign.split(',');
        var paddingLeft = $(this).find('[data-clickshow]').css('paddingLeft');
        var paddingTop = $(this).find('[data-clickshow]').css('paddingTop');
        $(this).find('[data-clickshow]').append('<span class="sSign-show font-main-color" style="font-size:25px;position:absolute;right:'+paddingLeft+';top:12px;">'+arrSign2[0]+'</span>');
      }
      if ($("[data-boxcontent]")) {
        $("[data-boxcontent]").hide();
      }
      $(this).find("[data-clickshow]").on('click',function(){
        var dataParent = $(this).parents('[data-parent]');
        var dataClick = $(this).data('clickshow');
        var elementShow = dataParent.find('[data-boxcontent]');
        var dataShow = elementShow.data('boxcontent');
        var numSign = dataParent.find('.txt-num-sign2').val();
        if (arrSign2) {
          $('.sSign-show').html(arrSign2[0]);
          if (numSign == 1) {
            $('.txt-num-sign2').val(1);
            dataParent.find('.sSign-show').html(arrSign2[1]);
            dataParent.find('.txt-num-sign2').val(2);
          }else {
            dataParent.find('.sSign-show').html(arrSign2[0]);
            dataParent.find('.txt-num-sign2').val(1);
          }
        }
        if (dataParent) {//if dataParent was input in element
          if (dataShow == 'slideToggle') {//if you want to show as slide Toggle
            $('[data-boxcontent]').stop().slideUp();
            dataParent.find('[data-boxcontent]').stop().slideToggle();
          }
        }
      });
    });
  }
  clickShow();

});