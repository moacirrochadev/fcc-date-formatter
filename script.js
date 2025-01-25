const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the 'new' operator.
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

//Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable.
currentDateParagraph.textContent = formattedDate;

// const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
// console.log(exampleSentence);
//In JavaScript, the change event is used to detect when the value of an HTML element has changed: element.addEventListener("change", () => {});
dateOptionsSelectElement.addEventListener("change", () => {})

switch (dateOptionsSelectElement.value) {
    case 'yyyy-mm-dd':
        currentDateParagraph.textContent = formattedDate
          .split("-")
          .reverse()
          .join("-");
        break;
    case 'mm-dd-yyyy-h-mm':
        currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
    default:
        currentDateParagraph.textContent = formattedDate;
}