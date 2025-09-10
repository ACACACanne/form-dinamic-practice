const firstNameTextBox = document.getElementById("firstname");
const surNameTextBox = document.getElementById("surname");

// Function to handle changes to the first name input

const changeFName = () => {
    console.log("changeFName called");
    let firstName = document.getElementById("fname").value;
    firstNameTextBox.innerText = firstName;
}
// Function to handle changes to the surname input
const changeSName = () => {
    console.log("changeSName called");
    let surName = document.getElementById("sname").value;
    surNameTextBox.innerText = surName;
}   