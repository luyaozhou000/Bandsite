
// First, get the form element; when event 'submit' occurs, function
// handelFeedbackSubmission runs /* --- form submission handler registration --- */
let formEl = document.querySelector('.homepage__comments--input');
formEl.addEventListener('submit', handleFeedbackSubmission);


// define the function; parameter eventObject contains detailed info about the
// form element; note how we assigned name attribute to input and use eventObject.target. to
// get its value;
function handleFeedbackSubmission(eventObject) {
  eventObject.preventDefault();

//   store entered values in variables:they are strings
let name = eventObject.target.userName.value;
let comment = eventObject.target.userComment.value;

//   console.log(eventObject.target.userName.value);
//   console.log(eventObject.target.userComment.value);

    createComment(name, comment)
}

// get the parent element, need to append newly created divs 
let mainContainer = document.querySelector('.homepage__comments--default');

// let array = [{name:'Josh', comments: 'comments'}, {name: 'luyao'}];
// need to try this later

function createComment (name, comment) {
    // create first div here
    let commentContainer = document.createElement('div');
    commentContainer.className = "default-comment";
    // commentContainer.innerHTML = name; 
    mainContainer.appendChild(commentContainer);

    let commentImage = document.createElement('div');
    commentImage.className = "default-comment__img";
    commentContainer.appendChild(commentImage);

    let commentSubContainer = document.createElement('div');
    commentSubContainer.className = 'container';
    commentContainer.appendChild(commentSubContainer);

    let commentTitle = document.createElement('div');
    commentTitle.classList = 'title';
    commentSubContainer.appendChild(commentTitle);

    let titleName = document.createElement('div');
    titleName.className = 'title__name';
    commentTitle.appendChild(titleName);
    titleName.innerHTML = name;

    let titleDate = document.createElement('div');
    titleDate.className = 'title__date';
    commentTitle.appendChild(titleDate);
    titleDate.innerHTML = "new Date()";

    let newComment = document.createElement('div');
    newComment.className = "title__comment";
    commentSubContainer.appendChild(newComment);
    newComment.innerHTML = comment;
}

