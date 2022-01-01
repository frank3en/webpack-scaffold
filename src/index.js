import nav from "./nav";
import { footer } from "./footer.js";
import { makeColor } from "./button-styles";
import makeButton from "./button";
import {makeImage} from './image'

const button = makeButton("First button");
button.style = makeColor("pink");

const img = makeImage()
document.body.appendChild(button);

document.body.appendChild(img)

document.body.appendChild(footer);

console.log(nav, makeColor("cyan"));
