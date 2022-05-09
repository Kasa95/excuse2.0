/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = function() {
  let who = [
    "My dog",
    "My grandmother",
    "A policeman",
    "Michael Jackson",
    "The President of the United States"
  ];
  let verb = ["ate", "destroyed", "peed on", "swallowed"];
  let what = [
    "my homework",
    "my coding assignment",
    "my car keys",
    "my driving license"
  ];
  let when = [
    "this morning",
    "three days ago",
    "just before I got here",
    "right before I came into the room"
  ];
  let consequence = [
    "and now I'm slightly depressed",
    "and now I want to cry",
    "and now I don't know what to do",
    "so I'll just go",
    "and I'm not feeling that good anymore"
  ];

  var whoIndex = Math.floor(Math.random() * who.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let consequenceIndex = Math.floor(Math.random() * consequence.length);

  return (
    who[whoIndex] +
    " " +
    verb[verbIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    " " +
    consequence[consequenceIndex] +
    "."
  );
};
