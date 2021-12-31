// import style from "./styles.css";
const style = require("./styles.css");
require("./footer.scss");
console.log(style, "css-loader");

const footer = document.createElement("footer");

const top = document.createElement("div");
top.innerText = "top";
const bottom = document.createElement("div");
bottom.innerText = "bottom";

footer.appendChild(top);
footer.appendChild(bottom);

exports.top = top;
exports.bottom = bottom;
exports.footer = footer;
