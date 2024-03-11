const cardBookmark = document.querySelector('[data-js="card-bookmark"]');
console.log(cardBookmark);
const answerButton = document.querySelector('[data-js="show-answer"]');
console.log(answerButton);
const answerText = document.querySelector('[data-js="answer-text"]');
console.log(answerText);

function switchbookmarkblack() {
  cardBookmark.innerHTML =
    '<img class="bookmark-img" src="./img/blackheart.png" alt="heart icon" />';
}

function switchbookmarklight() {
  cardBookmark.innerHTML =
    '<img class="bookmark-img" src="./img/heart.png" alt="heart icon" />';
}

cardBookmark.addEventListener("click", () => {
  if(cardBookmark.innerHTML === '<img class="bookmark-img" src="./img/heart.png" alt="heart icon" />'){
    switchbookmarkblack();
  }
});

/*
cardBookmark.addEventListener("click", () => {
cardBookmark.classList.toggle("cardBookmark-clicked");

});
*/

answerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");
    if (answerButton.textContent === "show answer"){
        answerButton.textContent = "hide answer";
    } else {
        answerButton.textContent = "show answer";
    }
});