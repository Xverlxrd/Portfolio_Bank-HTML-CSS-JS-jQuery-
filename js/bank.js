$(document).ready(function(){
    $('.menu__link').mouseover(function(e) { 
        $(this).css('color', 'red');
        $(this).css('border-bottom', 'solid');
    });
    $('.menu__link').mouseout(function(){  //Сделать это в сss через :hover с добавлением времени
        $(this).css('color', 'black');
        $(this).css('border-bottom', '0px');
    })
    
    //links
    $('.menu__link').click(function() {
        let offset = 0;
         $('html, body').animate({ 
              scrollTop: $('.form__main').offset().top - offset 
         }, 2000);
         return false; //переделать
    })
    
    //Comebeacker
    var element_position = $('.footer');
    var counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = element_position.offset().top;
        if(scroll > offset && counter == 0){
            counter++;
            $('.comebeak').css({'display' : 'block'});
            $('.header').css({'opacity' : '0.2'});
            $('.main').css({'opacity' : '0.2'});
            $('.footer').css({'opacity' : '0.2'});
            $('body').css({'background' : 'rgba(0,0,0, 0.5)'})
        }
        
    })

    $('.screen__close').click(function() {
            $('.comebeak').css({'display' : 'none'});
            $('.header').css({'opacity' : '1'});
            $('.main').css({'opacity' : '1'});
            $('.footer').css({'opacity' : '1'});
            $('body').css({'background' : 'none'})
    })

    $('.feedback__send').click(function() {
        $('.feedback__sends').hide(1000);
        if($('.comebeak input[type=text]').val().length > 1 && $('.feedback__mobile').val().length > 1){
            
            $('.screen__feedback').fadeOut(2000);
            $('.screen__credit').css({'grid-column':'2/2'});
            
            $('.feedback__sendbox').css({'display':'block'});
            $('.feedback__sends').show(1000);
        }
    })

    //Credit form
    $('.input__range').hover( function() {
        console.log($(this).val());
    })

    $('.input__range').change(function() {
        let range = $('.input__range').val();
        console.log(typeof range)
        $('.input__money').attr('value', range);
        $('.input__h1').text('Credit amount: ' + range);
        $('.input__money').val(range);
        
    });

    $('.input__money').keyup(function() {
        $('.input__h1').text('Credit amount: ' + $('.input__money').val());
        let monthCredit = Math.floor($('.input__money').val() / (12 * $('.data__input').val()));
        $('.date__pay').text(monthCredit);
    })

    $('input[type=text]').click(function() {
        $(this).animate({'font-size': '20px'}, 1000);
    })
    $('input[type=text]').change(function() {
        $(this).animate({'font-size': '15px'}, 1000);
    })
    //Credit расчёт
    $('.data__range').mousemove(function() {
        let range = $('.data__range').val();
        console.log(typeof range)
        $('.data__input').attr('value', range);
        let monthCredit = Math.floor($('.input__money').val() / (12 * $('.data__input').val()));
        $('.date__pay').text(monthCredit);
        $('.data__input').val(range);
        
    });
    $('.data__input').keyup(function() {
        let monthCredit = Math.floor($('.input__money').val() / (12 * $('.data__input').val()));
        $('.date__pay').text(monthCredit);
    })

    //Regist form 
    $('.regist__city').ready(function() {
        if($('.regist__city').css('opacity', '0')){
            $('.regist__city').css({'pointer-events' : 'none'})

        }
    })
    $('.regist__street').ready(function() {
        if($('.regist__street').css('opacity', '0')){
            $('.regist__street').css({'pointer-events' : 'none'})

        }
    })
    $('.regist__flat_date > *').ready(function() {
        if($('.regist__flat_date > *').css('opacity', '0')){
            $('.regist__flat_date > *').css({'pointer-events' : 'none'})

        }
    })
    


    
    $('.regist__region').change(function() {
        if($(this).val() != ''){
            $('.regist__city').animate({opacity: "1"}, 2000, 'linear');
            $('.regist__city').css({'pointer-events' : 'all'})
        }
    })
    $('.regist__city').change(function() {
        
        if($(this).val() != ''){
            $('.regist__street').animate({opacity: "1"}, 2000, 'linear');
            $('.regist__street').css({'pointer-events' : 'all'})
        }
    })
    $('.regist__street').change(function() {
       
        if($(this).val() != ''){
            $('.regist__flat_date > *').animate({opacity: "1"}, 2000, 'linear');
            $('.regist__flat_date > *').css({'pointer-events' : 'all'})
        }
    })

    //Кнопка вперед
    $('.regist__send').click(function() {
        let count = 0;
        let flag = false;
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach( ipt => {
        if(ipt.value.length > 0) ++count
       })
        if(count == 17){
           //при нажатии на кнопку
           $('.send__text').hide(1000);
           $('.form__main').css({'display':'none'});
           $('.send__form').css({'display':'block'});
           $('.main').animate({'grid-template': 'minmax(668px,auto) 252px minmax(557px, auto) minmax(500px, auto) 174px minmax(476px,auto)/ 1fr'}, 3000)
           $('.main__form').animate({'grid-template': '174px 200px / 1fr'}, 3000)
           $('.send__text').show(500);
           

        }
        else{
        }

        // if(($('#form').val()).length > 1 ){
        //     console.log(2)
        // }
    })


    //Slider 

    $('.slider__button_right').click(function(){
        let mainSlide = $('.img__slider.ready');
        let mainSlideIndex = mainSlide.index();
        let nextSlide = mainSlide.next();
        let nextSlideIndex = mainSlideIndex + 1;

        mainSlide.fadeOut(2000).removeClass('ready');
        if(nextSlideIndex === ($('.img__slider:last').index()+1)){
            $('.img__slider:first').fadeIn(2000).addClass('ready');
        }else{
            nextSlide.fadeIn(2000).addClass('ready');
        }
    })

    $('.slider__button_left').click(function(){
        let mainSlide = $('.img__slider.ready');
        let mainSlideIndex = mainSlide.index();
        let prevSlide = mainSlide.prev();
        let prevSlideIndex = mainSlideIndex - 1;

        mainSlide.fadeOut(2000).removeClass('ready');

        if(prevSlideIndex === ($('.img__slider:first').index()-1)){
            $('.img__slider:last').fadeIn(2000).addClass('ready');
        }else{
            prevSlide.fadeIn(2000).addClass('ready');
        }
    })
});



