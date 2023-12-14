let container = document.querySelector(".container");

let heading = React.createElement("h1",{className:"h"}, "Learn web development");

let paraOne = React.createElement("p",null,"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.")
let divOne = React.createElement("div",null,paraOne);
let anchor = React.createElement("a", {href:"#" , id:"link"}, "the rest of MDN ,");


let paraTwo = React.createElement("p",null,`The aim of this area of MDN is not to take your from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you shuold be able to start making your way, learning from `,anchor," and other intermediate to advcanced resource that assume a lot of previous knowledge.")
let divTwo = React.createElement("div",null,paraTwo);

let paraThree = React.createElement("p",null,"If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")
let divThree = React.createElement("div",null,paraThree);



ReactDOM.render([heading, divOne, divTwo, divThree], container);