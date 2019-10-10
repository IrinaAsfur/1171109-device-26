var linkfeedback = document.querySelector(".feedback");
var popupfeedback = document.querySelector(".modal-feedback");
var closefeedbackPopup = popupfeedback.querySelector(".modal-close");

var linkMap = document.querySelector(".map");
var popupMap = document.querySelector(".modal-map");
var closeMapPopup = popupMap.querySelector(".modal-close");

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
