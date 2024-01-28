//Get current page name
var path = window.location.pathname;
var page = path.split("/").pop();

//Outputs/Submit connections
let sayHelloOutput = document.getElementById("sayHelloOutput");

let addingOutput = document.getElementById("addingOutput");

let askingQuestionsOutput = document.getElementById("askingQuestionsOutput");

let greaterOrLessOutput = document.getElementById("greaterOrLessOutput");

let madlibOutput = document.getElementById("madlibOutput");

let oddOrEvenOutput = document.getElementById("oddOrEvenOutput");

let reverseIt_alphaNumeric_Output = document.getElementById("reverseIt(alphaNumeric)Output");

let reverseIt_numbersOnly_Output = document.getElementById("reverseIt(numbersOnly)Output");

let magic8BallOutput = document.getElementById("magic8BallOutput");

let restaurantPickerOutput = document.getElementById("restaurantPickerOutput");

let Submit = document.getElementById("Submit");


//Functions
const SayHello = async (name) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/SayHello/Name/${name}`);
    const data = await promise.text();
    sayHelloOutput.innerText = data;
}

const Add = async (num1, num2) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/AddNumbers/AddNumbers/${num1}/${num2}`);
    const data = await promise.text();
    addingOutput.innerText = data;
}

const AskQ = async (name, time) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Sentence/AboutYou/${name}/${time}`);
    const data = await promise.text();
    askingQuestionsOutput.innerText = data;
}

const Compare = async (num1, num2) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Comparing/CompareNums/${num1}/${num2}`);
    const data = await promise.text();
    greaterOrLessOutput.innerText = data;
}

const Story = async (i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Madlib/LibGenerator/${i1}/${i2}/${i3}/${i4}/${i5}/${i6}/${i7}/${i8}/${i9}/${i10}`);
    const data = await promise.text();
    madlibOutput.innerText = data;
}

const OddOrEven = async (num) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/OddOrEven/NumberType/${num}`);
    const data = await promise.text();
    oddOrEvenOutput.innerText = data;
}

const AlphaNumeric = async (input) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/ReverseIt_Alphanumeric/ReverseChars/${input}`);
    const data = await promise.text();
    reverseIt_alphaNumeric_Output.innerText = data;
}

const NumbersOnly = async (num) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/ReverseIt_NumbersOnly/ReverseNums/${num}`);
    const data = await promise.text();
    reverseIt_numbersOnly_Output.innerText = data;
}

const Question = async (input) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/Magic8Ball/RandAns/${input}`);
    const data = await promise.text();
    magic8BallOutput.innerText = data;
}

const PickRestaurant = async (input) => {
    const promise = await fetch(`https://rosalesjallforone.azurewebsites.net/RestaurantPicker/PickRestaurant/${input}`);
    const data = await promise.text();
    restaurantPickerOutput.innerText = data;
}


//Will only run specified code when on specific pages
Submit.addEventListener('click', async () => {
    switch (page) {
        case "SayHello.html":
            var sayHelloInput = document.getElementById("sayHelloInput").value;
            SayHello(sayHelloInput);
            break;
        case "Adding.html":
            var addingInput1 = document.getElementById("addingInput1").value;
            var addingInput2 = document.getElementById("addingInput2").value;
            Add(addingInput1, addingInput2);
            break;
        case "AskingQuestions.html":
            let askingQuestionsInput1 = document.getElementById("askingQuestionsInput1").value;
            let askingQuestionsInput2 = document.getElementById("askingQuestionsInput2").value;
            AskQ(askingQuestionsInput1, askingQuestionsInput2);
            break;
        case "GreaterOrLess.html":
            let greaterOrLessInput1 = document.getElementById("greaterOrLessInput1").value;
            let greaterOrLessInput2 = document.getElementById("greaterOrLessInput2").value;
            Compare(greaterOrLessInput1, greaterOrLessInput2);
            break;
        case "Madlib.html":
            let madlibInput1 = document.getElementById("madlibInput1").value;
            let madlibInput2 = document.getElementById("madlibInput2").value;
            let madlibInput3 = document.getElementById("madlibInput3").value;
            let madlibInput4 = document.getElementById("madlibInput4").value;
            let madlibInput5 = document.getElementById("madlibInput5").value;
            let madlibInput6 = document.getElementById("madlibInput6").value;
            let madlibInput7 = document.getElementById("madlibInput7").value;
            let madlibInput8 = document.getElementById("madlibInput8").value;
            let madlibInput9 = document.getElementById("madlibInput9").value;
            let madlibInput10 = document.getElementById("madlibInput10").value;
            Story(madlibInput1, madlibInput2, madlibInput3, madlibInput4, madlibInput5, madlibInput6, madlibInput7, madlibInput8, madlibInput9, madlibInput10);
            break;
        case "OddOrEven.html":
            let oddOrEvenInput = document.getElementById("oddOrEvenInput").value;
            OddOrEven(oddOrEvenInput);
            break;
        case "ReverseIt(alphaNumeric).html":
            let reverseIt_alphaNumeric_Input = document.getElementById("reverseIt(alphaNumeric)Input").value;
            AlphaNumeric(reverseIt_alphaNumeric_Input);
            break;
        case "ReverseIt(numbersOnly).html":
            let reverseIt_numbersOnly_Input = document.getElementById("reverseIt(numbersOnly)Input").value;
            NumbersOnly(reverseIt_numbersOnly_Input);
            break;
        case "Magic8Ball.html":
            let magic8BallInput = document.getElementById("magic8BallInput").value;
            Question(magic8BallInput);
            break;
        case "RestaurantPicker.html":
            let restaurantPickerInput = document.getElementById("restaurantPickerInput").value;
            PickRestaurant(restaurantPickerInput);
            break;
    }
})