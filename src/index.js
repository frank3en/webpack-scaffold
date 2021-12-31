import nav from "./nav";
import { footer } from "./footer.js";
import { makeColor } from "./button-styles";
import makeButton from "./button";

const button = makeButton("First button");
button.style = makeColor("pink");
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(nav, makeColor("cyan"));
