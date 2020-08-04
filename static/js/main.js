//slider
$(document).ready(function () {
	$('.carousel__inner').slick({
		dots:true,
		arrows:false,
		adaptiveHeight:true,
		autoplay: true,
    autoplaySpeed: 3000
	});
});

$(document).ready(function () {
	$('.carousel__inner_brand').slick({
		arrows:false,
		adaptiveHeight:true,
		cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    centerMode: true,
    speed: 1500,
    variableWidth: true
	});
});


function openbox(blog_button){
	display = document.getElementById('blog-button').style.display;
	
	if(display=='none'){
		document.getElementById('blog-button').style.display='flex';
	} else{
		document.getElementById('blog-button').style.display='none';
	}
}

//выпадающий список
var dropdown = document.getElementsByClassName("header-nav__dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//Сортировка товаров
$('.filter-checkbox__dop').click(function(){
    var $that = $(this),
        chbx = $that.next(':checkbox');
    $that.toggleClass('filter-attribute__active');
    chbx.prop('checked', !chbx.prop('checked'));
});


//прибавить/убавить товар в корзине
let customer = document.querySelectorAll('.customer-main__sum--body');

customer.forEach( function(i) {
  var buttonPlus = i.querySelector('.js-button-plus');
  var buttonMinus = i.querySelector('.js-button-minus');
  var numberPosition = i.querySelector('.js-number-position');

  buttonPlus.addEventListener('click', function() {
    numberPosition.innerHTML = parseInt(numberPosition.innerHTML) + 1;
  });

  buttonMinus.addEventListener('click', function() {
    if (numberPosition.innerHTML > 0) {
      numberPosition.innerHTML = parseInt(numberPosition.innerHTML) - 1;
    }
  });

});

  //Открыть/закрыть мобильное меню
  $('.js-mob-menu-open').on('click', function(){
    $('#js-menu-overlay').fadeToggle(250);
    $('#js-mob-menu-btn').add($('#js-mob-menu')).toggleClass('open');
    $('#js-wrapper').toggleClass('drop-left');
  });

  //Открыть/закрыть мобильный фильтр
  $('.js-filter-open').on('click', function(){
    $('#js-filter-overlay').fadeToggle(250);
    $('#js-filter').toggleClass('open');
    $('#js-wrapper').toggleClass('drop-right');
  });

  
//раскрытие Информация в моб. версии

  $('.topmenu-info.footer-link__btn').on('click',() => {
    $('.submenu-footer').stop().fadeToggle();
    $(".dropdown-arrow__footer").toggleClass("mob-menu-rotate");
    return false;
  });

  $('.topmenu-info.topmenu-link__btn').on('click',() => {
    $('.mob-submenu').stop().fadeToggle();
    $(".mob-dropdown-arrow").toggleClass("mob-menu-rotate");
    return false;
  });


  let menuInfo = document.querySelectorAll('.topmenu-info');


//раскрытие сертификатов и материалов

  $(function(){
    $('#doc-sertificate').click(function(){
      $('.document-sertificate').toggle();
    });
  });

  $(function(){
    $('#doc-material').click(function(){
      $('.document-material').toggle();
    });
  });





