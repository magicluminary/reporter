$(document).ready(function() {

    $('.mob-menu-icon').on('click', function() {
        $('.mob-menu-window').addClass('showed')
        $('body,html').addClass('fixed_position')
        $('.mob-menu-window').after('<div class="menu-overlay"></div>')
    })
    $(document).on('click', '.menu-overlay', function() {
        $('.mob-menu-window').removeClass('showed')
        $('body,html').removeClass('fixed_position')
        $('.menu-overlay').remove()
    })
    $('.mob-button').on('click', function() {
        $('.header-search form').addClass('showed')
    });
    $('.header-search').on('click', '.back-icon', function() {
        $('.header-search form').removeClass('showed')
    })
    var m = $('.header-links').clone()
    var n = $('.header-menu').clone()

    $('.mob-menu-window').append(m).append(n)


    $('.pgwSlider').pgwSlider({});
    var slide = 0;
    var pgwSlideshow;

    $('.gallery-item img').on('click', function() {
        $('#gallery').addClass('modal')
        $('body').append('<div class="modal_bg"></div>')
        if (!slide) {
            pgwSlideshow = $('.pgwSlideshow').pgwSlideshow({
                transitionEffect: 'fading'
            });
        }
        slide = 1;
    })
    $(document).on('click', '.modal_bg, #gallery .close_modal', function() {
        $('#gallery').removeClass('modal')
        $('.modal_bg').remove()
    })

$('.last-list.block .title span').on('click', function() {
    $(this).addClass('active');
            $(this).siblings().removeClass('active');
        if($(this).hasClass('most')){

            $('.last-list.most-list').show()
            $('.last-list.popular-list').hide()
        } else{
            $('.last-list.most-list').hide()
            $('.last-list.popular-list').show()
        }
    })
    
})