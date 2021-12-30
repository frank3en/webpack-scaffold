import nav from "./nav";
import { top, bottom } from "./footer";
import { makeColor } from "./button-styles";
import makeButton from "./button";

const button = makeButton("First button");
button.style = makeColor("pink");
document.body.appendChild(button);

console.log(nav, top, bottom, makeColor("cyan"));
