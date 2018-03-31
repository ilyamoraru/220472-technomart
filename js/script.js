var popupOverlay = document.querySelector(".modal-overlay");
var overlayClose = document.querySelector(".modal-overlay");

var activeSale = document.querySelector(".main-header-sale");

var slideRight = document.querySelector(".gallery-control-forward");
var slideLeft = document.querySelector(".gallery-control-backward");
var slide1 = document.querySelector(".catalog-slide-1");
var slide2 = document.querySelector(".catalog-slide-2");
var slide3 = document.querySelector(".gallery-slide-button-1");
var slide4 = document.querySelector(".gallery-slide-button-2")

var deliveryLeft = document.querySelector(".delivery-item");
var guaranteeLeft = document.querySelector(".guarantee-item");
var creditLeft = document.querySelector(".credit-left");
var deliveryRight = document.querySelector(".services-right-delivery");
var guaranteeRight = document.querySelector(".services-right-guarantee");
var creditRight = document.querySelector(".services-right-credit");

var linkMap = document.querySelector(".mini-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close");

var linkContacts = document.querySelector(".contacts-button");
var popupContacts = document.querySelector(".modal-contacts");
var modal = document.querySelector(".modal-form");
var contactsClose = document.querySelector(".modal-contacts-close");
var nameFocus = document.querySelector("[name=user-name]");

var linkSale = document.querySelectorAll(".hidden-button-buy");
var popupSale = document.querySelector(".modal-buy");
var saleClose = document.querySelector(".modal-button-close");
var saleContinue = document.querySelector(".modal-button-continue");
var saleBuy = document.querySelector(".modal-button-buy");

/*slider*/
if (slideLeft != null || slideRight != null) {
    slideLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        slide1.classList.toggle("show");
        slide2.classList.toggle("show");
        slide3.classList.toggle("gallery-slide-select-1");
        slide4.classList.toggle("gallery-slide-select-2");
    });

    slideRight.addEventListener("click", function(evt) {
        evt.preventDefault();
        slide1.classList.toggle("show");
        slide2.classList.toggle("show");
        slide3.classList.toggle("gallery-slide-select-1");
        slide4.classList.toggle("gallery-slide-select-2");
    })
}

/*services*/
if (deliveryLeft != null) {
    deliveryLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        deliveryLeft.classList.add("services-item-active");
        guaranteeLeft.classList.remove("services-item-active");
        creditLeft.classList.remove("services-item-active");
        deliveryRight.classList.add("show");
        guaranteeRight.classList.remove("show");
        creditRight.classList.remove("show");
    })

    guaranteeLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        deliveryLeft.classList.remove("services-item-active");
        guaranteeLeft.classList.add("services-item-active");
        creditLeft.classList.remove("services-item-active");
        deliveryRight.classList.remove("show");
        guaranteeRight.classList.add("show");
        creditRight.classList.remove("show");
    });

    creditLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        deliveryLeft.classList.remove("services-item-active");
        guaranteeLeft.classList.remove("services-item-active");
        creditLeft.classList.add("services-item-active");
        deliveryRight.classList.remove("show");
        guaranteeRight.classList.remove("show");
        creditRight.classList.add("show");
    })
}

/* modal close*/
if (linkMap != null || linkContacts != null) {
    overlayClose.addEventListener("click", function() {
        popupMap.classList.remove("modal-show");
        popupOverlay.classList.remove("modal-show");
        popupContacts.classList.remove("modal-show");
        popupSale.classList.remove("modal-show");
    });} else {
    overlayClose.addEventListener("click", function() {
        popupSale.classList.remove("modal-show"); 
        popupOverlay.classList.remove("modal-show");
    });
}

if (linkMap != null || linkContacts != null) {
        window.addEventListener("keydown", function(evt) {
            if(evt.keyCode === 27) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
            popupOverlay.classList.remove("modal-show");
            popupContacts.classList.remove("modal-show");
            popupSale.classList.remove("modal-show");
            }
        });} else {
            window.addEventListener("keydown", function(evt) {
            if(evt.keyCode === 27) {
            evt.preventDefault();
            popupOverlay.classList.remove("modal-show");
            popupSale.classList.remove("modal-show");
            }
        });
    }

/* modal-map*/
if(linkMap != null) {
    linkMap.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupMap.classList.add("modal-show");
        popupOverlay.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
        popupOverlay.classList.remove("modal-show");
    });
}

/*modal-contacts*/
if(linkContacts != null) {
    linkContacts.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupContacts.classList.add("modal-show");
        popupOverlay.classList.add("modal-show");
        nameFocus.focus();
    });

    contactsClose.addEventListener("click", function(evt) {
        evt.preventDefault;
        popupContacts.classList.remove("modal-show");
        popupOverlay.classList.remove("modal-show");
        popupContacts.classList.remove("modal-error");
    });
}


/*modal-buy*/
for (var i = 0; i < linkSale.length; i++) {
    linkSale[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        activeSale.classList.add("full");
        popupSale.classList.add("modal-show");
        popupOverlay.classList.add("modal-show");
    }); 
}

saleClose.addEventListener("click", function(evt) {
    evt.preventDefault;
    popupSale.classList.remove("modal-show");
    popupOverlay.classList.remove("modal-show");
});

saleContinue.addEventListener("click", function(evt) {
    evt.preventDefault;
    popupSale.classList.remove("modal-show");
    popupOverlay.classList.remove("modal-show");
});