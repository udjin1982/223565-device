/* ================ Main slider ================ */
var mainSlider = document.querySelector('.sliders_btn');
mainSlider.addEventListener('click', function(event){
    var target = event.target;
    
    if(target.classList.contains('slider_btn') && !target.classList.contains('slider_btn_on')){
        var sliderNumber = +target.id.substr(11);
        
        var slideOff = document.querySelector('.slider_active');
        var slideOn = document.getElementById('slider_' + sliderNumber);
        slideOff.classList.remove('slider_active');
        slideOn.classList.add('slider_active');
        
        var btnOff = mainSlider.querySelector('.slider_btn_on');
        btnOff.classList.remove('slider_btn_on');
        target.classList.add('slider_btn_on');
    }
});

/* ================ Service slider ================ */
var serviceSlider = document.querySelector('.services_list');
serviceSlider.addEventListener('click', function(event){
    event.preventDefault();
    var target = event.target;
    
    if(target.classList.contains('js_service') && !target.classList.contains('service_active')){
        var sliderNumber = +target.id.substr(12);
        
        var slideOff = document.querySelector('.services_slide_active');
        var slideOn = document.getElementById('service_slide_' + sliderNumber);
        slideOff.classList.remove('services_slide_active');
        slideOn.classList.add('services_slide_active');
        
        var btnOff = serviceSlider.querySelector('.service_active');
        btnOff.classList.remove('service_active');
        target.classList.add('service_active');
    }
});

/* ================ Popup ================ */
/* open popup */
var openPopup = document.getElementById('js_popup_open');
openPopup.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.popup').classList.add('popup_show');
});

/* close popup */
var closePopup = document.getElementById('js_popup_close');
closePopup.addEventListener('click', function(event){
    var popup = document.querySelector('.popup');
    popupHide(popup);
});

/* function for close popup */
function popupHide(element){
    element.classList.add('popup_hide');
    setTimeout(function(){
        element.classList.remove('popup_show');
        element.classList.remove('popup_hide');
    }, 700);
}


/* ================ PopupMap ================ */
/* open popupMap */
var openPopupMap = document.querySelector('.contacts_map');
openPopupMap.addEventListener('click', function(event){
    event.preventDefault();
    var paranja = document.querySelector('.paranja');
    paranja.style.display = 'block';
    document.querySelector('.popup_map').classList.add('popup_map_show');
});

/* close popupMap */
var paranja = document.querySelector('.paranja');
paranja.addEventListener('click', function(event){
    var popupMap = document.querySelector('.popup_map');
    popupMapHide(popupMap);
});

/* function for close popupMap */
function popupMapHide(element){
    element.classList.add('popup_map_hide');
    setTimeout(function(){
        element.classList.remove('popup_map_show');
        element.classList.remove('popup_map_hide');
        paranja.style.display = '';
    }, 700);
}

/* keydown - escape: close popup and popupMap */
document.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
        var popup = document.querySelector('.popup');
        var popupMap = document.querySelector('.popup_map');
        if(popup.classList.contains('popup_show')){
            popupHide(popup);
        }
        if(popupMap.classList.contains('popup_map_show')){
            popupMapHide(popupMap);
        }
    }
});