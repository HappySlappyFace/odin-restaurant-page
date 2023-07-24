import { createNavbar } from "./navbar";
import { createFooter } from "./footer";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createBook } from "./book";
import { createContact } from "./contact";
import "./style.css";
const $content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((clase) => element.classList.add(clase));
  if (content) element.textContent = content;
  return element;
}
function home() {
  $content.innerHTML = "";
  createNavbar();
  createHome();
  createFooter();
}
function menu() {
  $content.innerHTML = "";
  createNavbar();
  createMenu();
  createFooter();
}
function book() {
  $content.innerHTML = "";
  createNavbar();
  createBook();
  createFooter();
}
function contact() {
  $content.innerHTML = "";
  createNavbar();
  createContact();
  createFooter();
}
function github() {
  window.open("https://github.com/HappySlappyFace", "_blank");
}

document.addEventListener("click", (e) => {
  const target = e.target.dataset.target;
  //   console.log("wtf", event.target.dataset.target);
  if (target === "Home") home();
  if (target === "Menu") menu();
  if (target === "Book") book();
  if (target === "Contact") contact();
  if (target === "Github") github();
});
contact();
export { createHtmlElement, $content };
