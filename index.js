var mainBody = document.getElementById("mainBody");

mainBody.style.backgroundColor="skyBlue"

var heading = document.createElement("h1");
heading.style.textAlign = "center"
var textNode = document.createTextNode("Survey Form");

heading.appendChild(textNode);
mainBody.appendChild(heading);


var container = document.createElement("div");
container.style.backgroundColor= "#130646"
container.style.width = "600px"
container.style.marginLeft = "358px"
var form = document.createElement("form");
form.style.fontSize = "20px"
form.style.color= "white"
form.style.marginLeft = "150px"
var name = document.createElement("p");

var nameText = document.createTextNode("Name")


form.appendChild(nameText);
container.appendChild(form);
mainBody.appendChild(container);

                            
var input =document.createElement("input");
input.placeholder = " Enter your name"
form.append(input);
input.style.display ="flex"
input.style.borderRadius ="4px"
input.style.marginTop ="5px"
input.style.width = "70%"
                            

var name = document.createElement("p");

var nameText = document.createTextNode("Email")


form.appendChild(nameText);
container.appendChild(form);
mainBody.appendChild(container);

var input =document.createElement("input");
input.placeholder = "Enter your email"
form.appendChild(input);
input.style.display ="flex"
input.style.borderRadius ="4px"
input.style.marginTop ="5px"
input.style.width = "70%"
var name = document.createElement("p");

var nameText = document.createTextNode("Age(optional)")


form.appendChild(nameText);
container.appendChild(form);
mainBody.appendChild(container);

var input =document.createElement("input");
input.placeholder = "Age"
form.appendChild(input);
input.style.display ="flex"
input.style.borderRadius ="4px"
input.style.marginTop ="5px"
input.style.width = "70%"

var para = document.createElement("p")
var textNode = document.createTextNode("Which option best describes your current role?")

para.appendChild(textNode);
form.appendChild(para);

var select = document.createElement("select");
select.placeholder = "What is your current role"

select.style.width= "70%"
form.appendChild(select);


var para = document.createElement("p")
var textNode = document.createTextNode("Would you recommend this application to a friend?")

para.appendChild(textNode);
form.appendChild(para);



var radio = document.createElement("input");

radio.type = "radio"



radio.name = "optionOne"
form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Definitely");
span.appendChild(textNode);
form.appendChild(span);



                                      
var radio = document.createElement("input");
radio.type = "radio"
radio.name = "optionOne"
form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Maybe");
span.appendChild(textNode);
form.appendChild(span);

var radio = document.createElement("input");
radio.type = "radio"
radio.name = "optionOne"
form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Not sure");
span.appendChild(textNode);
form.appendChild(span);


var para = document.createElement("p")
var textNode = document.createTextNode("Which is your favorite feature of the application?")


para.appendChild(textNode);
form.appendChild(para);
var select = document.createElement("select");
select.palceHolder = "Select an option"
select.style.width= "70%"
form.appendChild(select);

var para = document.createElement("p")
var textNode = document.createTextNode("What would you like to see improved?")


para.appendChild(textNode);
form.appendChild(para);


var radio = document.createElement("input");
radio.type = "radio"
radio.name = "option"

form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Projects");
span.appendChild(textNode);
form.appendChild(span);


var radio = document.createElement("input");
radio.type = "radio"
radio.name = "option"

form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Assessments");
span.appendChild(textNode);
form.appendChild(span);


var radio = document.createElement("input");
radio.type = "radio"
radio.name = "option"
form.appendChild(radio);
var span = document.createElement("span")
var textNode = document.createTextNode("Mentorship");
span.appendChild(textNode);
form.appendChild(span);


var para = document.createElement("p")
var textNode = document.createTextNode("Any comments or suggestions?")


para.appendChild(textNode);
form.appendChild(para);


var textArea = document.createElement("textArea");
textArea.placeholder = "Write something here......"
form.appendChild(textArea);

textArea.style.width = "70%"
var input = document.createElement("input");
input.type = "submit"
input.value = "Submit"
input.style.backgroundColor = "green"
input.style.padding = "5px"
input.style.borderRadius = "5px"
input.style.marginLeft = "150px"
input.style.marginTop = "10px"
input.style.display= "flex"

form.appendChild(input);
