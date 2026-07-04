//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page

//Helper functions
import { createHeader, createElement } from "./utilityRenderFunctions.js";

//Renders home page
const renderHomePage = () => {
  //Gets main element
  const main = document.querySelector("main");
  main.innerHTML = "";

  //Creates header element
  const header = createHeader("h1", "Study Night", "home_header");

  //Creates subheader element
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World",
  );

  //Container for elements
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  homeContainer.append(header, subHeading);
  main.append(homeContainer);
};

export { renderHomePage };
