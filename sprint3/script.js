// First, get the form element; when event 'submit' occurs, function
// handelFeedbackSubmission runs /* --- form submission handler registration --- */
// create an array containing three default comments:
// let commentArray = [
//   {
//     name: "Micheal Lyons",
//     date: "12/18/2018",
//     comment:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
//   },
//   {
//     name: "Gary Wong",
//     date: "12/12/2019",
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so Ican really enjoy myself!How can someone be so good"
//   },
//   {
//     name: "Theodore Duncun",
//     date: "11/15/2019",
//     comment:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
//   }
// ];
// ******************** retrive comments from URL and display on the page
// we declare a function to run  Axios:
function getAxios() {
axios
  .get("https://project-1-api.herokuapp.com/comments?api_key=luyao")
  .then(response => {
    console.log(response);
    // fetch array and store it in commentArray:
    let commentArray = response.data;
    console.log(commentArray);
    
    createComment(commentArray);
  
  })
  .catch(err => {
    alert('Server Error:' + err.message);
    console.error(err);
  });
}

getAxios();


let formEl = document.querySelector(".homepage__comments--input");
formEl.addEventListener("submit", handleFeedbackSubmission);

// declare the function; parameter eventObject contains detailed info about the
// form element; note how we assigned name attribute to input and use eventObject.target. to
// get its value;

function handleFeedbackSubmission(eventObject) {
  eventObject.preventDefault();

  // store entered values in variables:they are strings
  let name = eventObject.target.userName.value;
  let comment = eventObject.target.userComment.value;
  let today = new Date();

// using .unshift to add the new object which contains entered name and comment to the beginning of the array:
// let newArray = [];
// newArray.unshift(
//   {
//     name: name, 
//     date: today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
//     comment: comment
//   }
//   );

// ************* Axios .POST ----sending new comments to the server
  axios.post("https://project-1-api.herokuapp.com/comments?api_key=luyao", {
    name: name, 
    // date: today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    comment: comment
  })
  .then( request => {
    getAxios();
  });
 
}

// **************************************** display comments on the page:
// get the parent element, then need to append new divs
let mainContainer = document.querySelector(".homepage__comments--default");
let commentDefault = document.querySelector(".homepage__comments--default");

function createComment(array) {
  // this clears three comments:
  commentDefault.innerHTML = "";

for(i=array.length - 1; i >=0; i = i -1) {

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
  titleName.innerHTML = array[i].name;

  // get current date
  // let today = new Date();
  // let date =
  // today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();


  let titleDate = document.createElement("div");
  titleDate.className = "title__date";
  commentTitle.appendChild(titleDate);

  
  let d = new Date(array[i].timestamp);
  console.log(d);
  let date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

  titleDate.innerHTML = date;

  let newComment = document.createElement("div");
  newComment.className = "title__comment";
  commentSubContainer.appendChild(newComment);
  newComment.innerHTML = array[i].comment;
}


// clear input after submitting 
document.querySelectorAll('.textArea')[0].value = "";
document.querySelectorAll('.textArea')[1].value = "";
}













// ***********************Axios
// / axios
    //  .get("https://project-1-api.herokuapp.com/comments?api_key=EYTDH")
//   .then(axioResponse => {
//     // console.log (axioResponse.data);
//     let res = axioResponse.data;
//    console.log(res);
//     console.log(res.map(item => item.name));
//   })
//   .catch (err => {
//     alert('this is an error:'+ err.message);
//   });


















// function getData(){
//   axios
//   .get("https://project-1-api.herokuapp.com/comments?api_key=luyao")
//   .then(response => {
//     let comment = response.data;

//   })

// }






// getData();

// function postData (comment) {
//     axios
//     .post(url, comment)
//     .then(result => {
//         getData(result)
//     })
//     .catch (err => {
//         alert('this is an error:'+ err.message);
//       })
// }