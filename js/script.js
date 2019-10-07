
var link = document.querySelector(".feedback"); // кнопка Напишите нам
var popup = document.querySelector(".modal-feedback"); // Модалка с формой

var close = popup.querySelector(".modal-close"); // Кнопка закрытm


var formName = popup.querySelector("[name=name]"); // поле Имя
var formEmail = popup.querySelector("[name=email]"); // поле почта

var text = popup.querySelector("[name=modal-text]"); // поле текст??
 
var form = popup.querySelector("form");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
    formName.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }else {
    if (isStorageSupport) {
      localStorage.setItem("name", formName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});




  var mapLink = document.querySelector(".map"); // кнопка Контакты

  var mapPopup = document.querySelector(".modal-map"); // модалка карты
  var mapClose = mapPopup.querySelector(".modal-close"); // закрыть

  mapLink.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
  	evt.preventDefault();
  	if (evt.keyCode === 27) {
  		if (mapPopup.classList.contains("modal-show")) {
  			mapPopup.classList.remove("modal-show");
  		}
  	}
  });
