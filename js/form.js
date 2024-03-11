const form = document.querySelector('[data-js="form"]');
console.log(form);


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const newQuestion = formElements.question.value;
  const newAnswer = formElements.answer.value;
  const newTag = formElements.tag.value;
 

  console.log("question is: " + newQuestion);
  console.log("answer is: " + newAnswer);
  console.log("tag is: " + newTag);
  
  const newSection = document.createElement('section');
  newSection.classList.add('question-card');
  document.body.append(newSection);

  const newBookmark = document.createElement('button');
  newBookmark.classList.add('bookmark');
  newBookmark.innerHTML = ' <svg class ="bookmark-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>';
  newSection.append(newBookmark);

  const newQuestionText = document.createElement('h2');
  newQuestionText.textContent = newQuestion;
  newSection.append(newQuestionText);

  const newButton = document.createElement('button');
  newButton.classList.add('show-answer');
  newButton.textContent = "show answer";
  newSection.append(newButton);

  const newAnswerText = document.createElement('p');
  newAnswerText.textContent = newAnswer;
  newSection.append(newAnswerText);

  const newTagList = document.createElement('ul');
  newTagList.classList.add('tags');

  const newTagField = document.createElement('li');
  newTagField.textContent = '#' + newTag;

  newSection.append(newTagList);
  newTagList.append(newTagField);
});


