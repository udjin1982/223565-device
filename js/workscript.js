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
    /* open */
    var openPopup = document.getElementById('js_popup_open');
    openPopup.addEventListener('click', function(event){
        event.preventDefault();
        var popup = document.querySelector('.popup');
        popup.style.display = 'block';
    });
    /* close */
    var closePopup = document.getElementById('js_popup_close');
    closePopup.addEventListener('click', function(event){
        var popup = document.querySelector('.popup');
        popup.style.display = '';
    });

/* ================ Popup-map ================ */
/* open */
var openPopupMap = document.querySelector('.contacts_map');
openPopupMap.addEventListener('click', function(event){
    event.preventDefault();
    var popupMap = document.querySelector('.paranja');
    popupMap.style.display = 'block';
});
/* close */
var paranja = document.querySelector('.paranja');
paranja.addEventListener('click', function(event){
    paranja.style.display = '';
});