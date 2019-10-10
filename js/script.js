var linkfeedback = document.querySelector(".feedback"); // кнопка Напишите нам
var popupfeedback = document.querySelector(".modal-feedback"); // Модалка с формой
var closefeedbackPopup = popupfeedback.querySelector(".modal-close"); // Кнопка закрытm

var linkMap = document.querySelector(".map"); // кнопка Контакты
var popupMap = document.querySelector(".modal-map"); // модалка карты
var closeMapPopup = popupMap.querySelector(".modal-close"); // Кнопка закрытm

var feedbackSubmit = popupfeedback.querySelector(".submit") 

var feedbackForm = popupfeedback.querySelector(".feedback-form")
var feedbackName = popupfeedback.querySelector(".feedback-name");
var feedbackEmail = popupfeedback.querySelector(".feedback-email");
var feedbackText = popupfeedback.querySelector(".feedback-text");


var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("feedback");
} catch (err) {
  isStorageSupport = false;
}

linkfeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.add("modal-show");
  feedbackName.focus();
});

closefeedbackPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupfeedback.classList.remove("modal-show");
  popupfeedback.classList.remove("wrong-input");  
});

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMapPopup.addEventListener("click", function(evt) {
  popupMap.classList.remove("modal-show");
})

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value  || !feedbackText.value) {
    evt.preventDefault();
    popupfeedback.classList.remove("wrong-input");
    popupfeedback.classList.add("wrong-input");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popupfeedback.classList.contains("modal-show") || popupMap.classList.contains("modal-show")) {
      popupfeedback.classList.remove("modal-show");
      popupMap.classList.remove("modal-show");
      popupfeedback.classList.remove("wrong-input");  
    }
  }
});
