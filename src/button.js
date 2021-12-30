const makeButton = (buttonName) => {
  const label = `Button: ${buttonName}`;
  const button = document.createElement("button");
  button.innerText = label;
  return button;
};

module.exports = makeButton;
