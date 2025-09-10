// const firstNameTextBox = document.getElementById("firstname");
// const surNameTextBox = document.getElementById("surname");

// // Function to handle changes to the first name input

// const changeFName = () => {
//     console.log("changeFName called");
//     let firstName = document.getElementById("fname").value;
//     firstNameTextBox.innerText = firstName;
// }
// // Function to handle changes to the surname input
// const changeSName = () => {
//     console.log("changeSName called");
//     let surName = document.getElementById("sname").value;
//     surNameTextBox.innerText = surName;
// }

// // Adding onmouseenter event listener to the field
// const changeColor = (color) => {
//     document.getElementById("mydiv").style.backgroundColor = color;
// }

// // Adding removeWelcome function to remove the welcome message
// const removeWelcome = () => {
//     document.getElementById("welcomeScreen").remove();
// }

// Adding an updateText function to update the text dynamically

const yearGroup = document.getElementById("yearGroup")

const updateText = () => {
  console.log("updateText called");
  const text = document.getElementById("age").value;

// different way to do it usig switch case

//   switch (text) {
//     case "11":
//       yearGroup.innerText = "You are in Year 7";
//       break;
//     case "12":
//       yearGroup.innerText = "You are in Year 8";
//       break;
//     case "13":
//       yearGroup.innerText = "You are in Year 9";
//       break;
//     case "14":
//       yearGroup.innerText = "You are in Year 10";
//       break;
//     case "15":
//       yearGroup.innerText = "You are in Year 11";
//       break;
//     default:
//       yearGroup.innerText = "The year group is not defined";
//   }

// using ageToYear object to map age to year group

  const ageToYear = {
    "11": "You are in Year 7",
    "12": "You are in Year 8",
    "13": "You are in Year 9",
    "14": "You are in Year 10",
    "15": "You are in Year 11"
  };

    yearGroup.innerText = ageToYear[text] || "The year group is not defined";   
}
