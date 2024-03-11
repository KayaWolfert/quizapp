const cardBookmark = document.querySelector('[data-js="card-bookmark"]');
const answerButton = document.querySelector('[data-js="show-answer"]');
const answerText = document.querySelector('[data-js="answer-text"]');





cardBookmark.addEventListener("click", () => {
cardBookmark.classList.toggle("cardBookmark-clicked");

});

answerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");
    if (answerButton.textContent === "show answer"){
        answerButton.textContent = "hide answer";
    } else {
        answerButton.textContent = "show answer";
    }
});