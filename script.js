const texts = ["View work"];
let word = 0;
let letterIndex = 0;
let currentText = "";
let letter = "";

// (function type() {
//   if (word == texts.length) {
//     word = 0;
//   }

//   currentText = texts[word];
//   letter = currentText.slice(0, ++letterIndex);
//   document.querySelector("#typing").textContent = letter;

//   if (letter.length == currentText.length) {
//     word++;
//     letterIndex = 0;
//   }

//   setTimeout(type, 300);
// })();
// link van de code is: https://codepen.io/WhosMonica/pen/gOoLjze

//New page directory link: https://www.w3schools.com/howto/howto_js_full_page_tabs.asp

function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  // elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

