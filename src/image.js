import image from "./webpack-logo.jpg";

console.log(image);

const makeImage = (height = 100, width = 100) => {
  const img = document.createElement("img");
  img.height = height;
  img.width = width;
  img.src = image;
  return img;
};

export { makeImage };
