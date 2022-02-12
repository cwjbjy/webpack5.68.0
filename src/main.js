import "@/assets/styles/style.css";
import "@/assets/styles/blue.scss";
import "./echart";

console.log("Intere11sting22311332");
console.log(process.env);
//在main.js添加
function getComponent() {
  // Lodash, now imported by this script
  return import("lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");

      element.innerHTML = _.join(["Hello", "webpack"], " ");

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

const button = document.createElement("button");

button.innerHTML = "Click me ";

button.onclick = () => {
  getComponent().then((component) => {
    document.body.appendChild(component);
  });
};

document.body.appendChild(button);
