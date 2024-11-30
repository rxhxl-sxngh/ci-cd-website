//function to open navigation bar between pages
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").classList.add("open");
  document.getElementById("main").style.marginRight = "250px";
}

//function to open navigation bar between pages
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("open");
  document.getElementById("main").style.marginRight = "0";
}

function toggleStyleSheet() {
  // Task 1
  // Steps
  // 1 (a) Get style element by ID (hint: getElementById)
  var styleElement = document.getElementById("mainStyleSheet");

  // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
  var currentStylesheet = styleElement.getAttribute("href");

  // 1 (c) Determine new stylesheet file name
  var newStylesheet =
    currentStylesheet === "styles.css" ? "newStyles.css" : "styles.css";

  // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
  styleElement.setAttribute("href", newStylesheet);

  // TASK 2
  // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
  // hint: localStorage.setItem(name, value)
  localStorage.setItem("stylesheet", newStylesheet);
}

window.onload = function () {
  // 2 (a) get stylesheet name from local storage
  var savedStylesheet = localStorage.getItem("stylesheet");

  // If there is a saved stylesheet, apply it
  if (savedStylesheet) {
    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", savedStylesheet);
  }

  // Call the function to create the project navigation bar
  createProjectNavBar();

  // Load the first project
  loadProject(0);
};

// Array of projects
var projects = [
  {
    title: "Convolutional Neural Network",
    description:
      "This is a project I am currently working on to dip my toe into the field of deep learning and familiarize myself with the concepts of neural networks. I am coding a neural network comprised of four layers including two hidden layers for identifying a handwritten digit in 28 by 28 pixel image. It utilizes a sigmoidal activation function to determine the activations in the output layer and will use backpropagation and stochastic gradient descent in order to minimize the cost function of the neural network. I utilized the Keras library to load and preprocess the tens of thousands of labeled training images in the MNIST database that will be used for training; however, I am trying to code this neural network from scratch and limit my use of existing libraries in completing this project so I can better understand the concepts involved with neural networks. This project was inspired by a youtube series done explaining the topic by one of my favorite youtubers, 3Blue1Brown.",
    image: "images/neuralNetwork.jpg",
  },
  {
    title: "Python Script for Directory Management",
    description:
      "This Python script I developed is a directory management system that helps me keep my files organized by moving them from my Downloads folder to specific destination folders within my C:\\Documents\\TAMU directory. The organization is based on predefined keywords associated with different courses. My hope is that fellow aggies use this script to help themselves save time, because I know I do as my TAMU folder has grown incredibly large as CS student. The script has been integrated with my Task Scheduler to run constantly and automatically update my Downloads folder as soon as files are renamed or added by shooting them into the desired folder. I still use this script today.",
    image: "images/engrSorter.jpg",
  },
];

// Function to load a project
function loadProject(index) {
  // Get the div where the project details will be loaded
  var projectDiv = document.getElementById("projectDiv");

  // Clear the current content
  projectDiv.innerHTML = "";

  // Check the project title
  var projectTitleHTML = "";
  if (projects[index].title === "Convolutional Neural Network") {
    // Add a hyperlink on the title
    projectTitleHTML =
      "<h2 class='project-title'><a href='https://en.wikipedia.org/wiki/Convolutional_neural_network' target='_blank'>" +
      projects[index].title +
      "</a></h2>";
  } else if (projects[index].title === "Python Script for Directory Management") {
    // Add a hyperlink on the title
    projectTitleHTML =
      "<h2 class='project-title'><a href='https://github.com/rxhxl-sxngh/TAMU_engr_sorter' target='_blank'>" +
      projects[index].title +
      "</a></h2>";
  } else {
    // Leave the title as is
    projectTitleHTML =
      "<h2 class='project-title'>" + projects[index].title + "</h2>";
  }

  // Add the formatted title to the project details
  projectDiv.innerHTML += projectTitleHTML;

  // Add the project description and image
  projectDiv.innerHTML +=
    "<div class='project-details'>" +
    "<p class='project-description'>" +
    projects[index].description +
    "</p>" +
    "<img class='project-image' src='" +
    projects[index].image +
    "' alt='" +
    projects[index].title +
    "'>" +
    "</div>";
}

// Function to create the project navigation bar
function createProjectNavBar() {
  // Get the div where the navigation bar will be loaded
  var navBarDiv = document.getElementById("projectNavBar");

  // Create a new label element
  var label = document.createElement("Label");
  // Add "Projects: " text to the label
  label.innerHTML = "Projects: ";
  // Change the color of the label to white
  label.style.color = "white";
  // Append the label to the navigation bar
  navBarDiv.appendChild(label);

  // Add a button for each project
  for (let i = 0; i < projects.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = projects[i].title;
    button.onclick = function () {
      loadProject(i);
    };
    navBarDiv.appendChild(button);
  }
}


