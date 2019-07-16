// First, get the form element; when event 'submit' occurs, function
// handelFeedbackSubmission runs /* --- form submission handler registration --- */
// create an array containing three default comments:
let commentArray = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2019",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so Ican really enjoy myself!How can someone be so good"
  },
  {
    name: "Theodore Duncun",
    date: "11/15/2019",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];


let formEl = document.querySelector(".homepage__comments--input");
formEl.addEventListener("submit", handleFeedbackSubmission);

// declare the function; parameter eventObject contains detailed info about the
// form element; note how we assigned name attribute to input and use eventObject.target. to
// get its value;

function handleFeedbackSubmission(eventObject) {
  eventObject.preventDefault();

  //   store entered values in variables:they are strings
  let name = eventObject.target.userName.value;
  let comment = eventObject.target.userComment.value;

  let today = new Date();
// using .unshift to add the new object which contains entered name and comment to the beginning of the array:
commentArray.unshift(
  {
    name: name, 
    date: today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    comment: comment
  }
  );

  // calling createComment function
  createComment();
}

// *****************************************
// get the parent element, then need to append new divs
let mainContainer = document.querySelector(".homepage__comments--default");
let commentDefault = document.querySelector(".homepage__comments--default");

function createComment() {
  // this clears three comments:
  commentDefault.innerHTML = "";

for(i=0; i<commentArray.length; i++) {

  // create first div here
  let commentContainer = document.createElement("div");
  commentContainer.className = "default-comment";
  mainContainer.appendChild(commentContainer);

  let commentImage = document.createElement("div");
  commentImage.className = "default-comment__img";
  commentContainer.appendChild(commentImage);

  let commentSubContainer = document.createElement("div");
  commentSubContainer.className = "container";
  commentContainer.appendChild(commentSubContainer);

  let commentTitle = document.createElement("div");
  commentTitle.classList = "title";
  commentSubContainer.appendChild(commentTitle);

  let titleName = document.createElement("div");
  titleName.className = "title__name";
  commentTitle.appendChild(titleName);
  titleName.innerHTML = commentArray[i].name;

  // get current date
  // let today = new Date();
  // let date =
  //   today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  let titleDate = document.createElement("div");
  titleDate.className = "title__date";
  commentTitle.appendChild(titleDate);
  titleDate.innerHTML = commentArray[i].date;

  let newComment = document.createElement("div");
  newComment.className = "title__comment";
  commentSubContainer.appendChild(newComment);
  newComment.innerHTML = commentArray[i].comment;
}


// clear input after submitting 
document.querySelectorAll('.textArea')[0].value = "";
document.querySelectorAll('.textArea')[1].value = "";
}
