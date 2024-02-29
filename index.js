// const container  = document.getElementById('root');
// const title      = document.createElement('h1');
// title.innerText = "Learn Web Development";
// const para1 = document.createElement("p");
// para1.innerText = "Welcome to the MND learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.";
// container.append(title,para1);

const title = React.createElement('h1',{id:'heading'},'Learn Web Development');
const para1 = React.createElement('p',{id:'myPara'},"Welcome to the MND learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");
const para2 = React.createElement('span',{id:'mySpan'},"The aim of this area of MND is not to take you from \"beginner\" to \"expert\" but to take you from \"beginner\" to \"confortable.\" From there, you should be able to start making your way, learning from ");
const link  = React.createElement('a', {href:'#', id:"link"},"the rest of MDN");
const para3 = React.createElement('span',{id:'mySpan'},", and other intermediate to advanced resources that assume a lot of previous knowldge.");
const para4 = React.createElement('p',{id:'myPara'},"If you are  a complete beginner, web development can be challenging -- we will hold yout hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home weather you are a student learning web development (on your own or as part of as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
ReactDOM.render(React.createElement('div', {id:'main'}, [title,para1,para2,link,para3,para4]),document.getElementById('root'));

console.log("Hello World!");