let aDiv, atext, aImage, closeSpan;
class Animal {
  constructor(pX, pY) {
    aDiv = document.createElement("div");
    closeSpan = document.createElement("span");
    closeSpan.innerHTML = "&#10005;";
    closeSpan.style.position = "absolute";
    closeSpan.style.right = "0";
    closeSpan.className = "delete_animal";
    aDiv.style.position = "fixed";
    aDiv.style.top = pX + "px";
    aDiv.style.left = pY + "px";
    atext = document.createElement("p");
    aImage = document.createElement("img");
    const delete_element = document.querySelector(".delete_animal");
    closeSpan.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
}
class Penguin extends Animal {
  constructor(pX, pY, pSwimmingSpeed) {
    super(pX, pY);
    atext.innerHTML =
      "The Penguin swimming speed is: " + pSwimmingSpeed + " kmh";
    aImage.src = "./images/img03.jpg";
    aDiv.className = "penguin";
    aDiv.appendChild(closeSpan);
    aDiv.appendChild(aImage);
    aDiv.appendChild(atext);
    document.body.appendChild(aDiv);
  }
}
class Elephant extends Animal {
  constructor(pX, pY, eWeight) {
    super(pX, pY);
    atext.innerHTML = "The Elephant Weight is: " + eWeight + " kg";
    aImage.src = "./images/img01.jpg";
    aDiv.className = "elephant";
    aDiv.appendChild(closeSpan);
    aDiv.appendChild(aImage);
    aDiv.appendChild(atext);
    document.body.appendChild(aDiv);
  }
}

class Rabbit extends Animal {
  constructor(pX, pY, rSpeed) {
    super(pX, pY);
    atext.innerHTML = "The Rabbit speed is: " + rSpeed + " kmh";
    aImage.src = "./images/img02.jpg";
    aDiv.className = "rabbit";
    aDiv.appendChild(closeSpan);
    aDiv.appendChild(aImage);
    aDiv.appendChild(atext);
    document.body.appendChild(aDiv);
  }
}
class AnimalsList {
  constructor(arr) {
    arr.forEach((animal) => {
      switch (animal.type) {
        case "elephant":
          new Elephant(animal.locX, animal.locY, animal.weight);
          break;
        case "rabbit":
          new Rabbit(animal.locX, animal.locY, animal.speed);
          break;
        case "penguin":
          new Penguin(animal.locX, animal.locY, animal.swimmingSpeed);
          break;
      }
    });
  }
}
let aData = [
  { locX: 220, locY: 40, type: "elephant", weight: 660 },
  { locX: 20, locY: 240, type: "rabbit", speed: 44 },
  { locX: 410, locY: 40, type: "penguin", swimmingSpeed: 660 },
  { locX: 20, locY: 440, type: "elephant", weight: 660 },
  { locX: 20, locY: 440, type: "penguin", swimmingSpeed: 660 },
];
new AnimalsList(aData);

// new Animal(10, 10, "elephant", 660);
// new Animal(220, 120, "penguin", 660);
// new Animal(320, 420, "penguin", 660);
// new Animal(220, 120, "penguin", 660);
// new Animal(440, 140, "rabbit", 660);
//Selecotrs
const divs = document.querySelectorAll("div");
const hide_penguin_btn = document.querySelector(".hide_penguin_btn");
const show_penguin_btn = document.querySelector(".show_penguin_btn");
//Functions
const hide_penguin_div = () => {
  divs.forEach((e) => {
    if (e.className == "penguin") {
      e.style.visibility = "hidden";
    }
  });
};
const show_penguin_div = () => {
  divs.forEach((e) => {
    if (e.className == "penguin") {
      e.style.visibility = "visible";
    }
  });
};

//Events
hide_penguin_btn.addEventListener("click", hide_penguin_div);
show_penguin_btn.addEventListener("click", show_penguin_div);

//EXTRA
const add_animal_btn = document.querySelector(".add_animal_btn");
const pop_up = document.querySelector(".pop_up");
const type_of_animal = document.querySelector(".type_of_animal");
const property_type = document.querySelector(".property_type");
const property_input = document.querySelector(".property_input");
const on_submit = document.querySelector(".on_submit");
const cancel = document.querySelector(".cancel");
const x_position = document.querySelector(".x_position");
const y_position = document.querySelector(".y_position");
add_animal_btn.addEventListener("click", () => {
  pop_up.style.visibility = "visible";
});
cancel.addEventListener("click", () => {
  pop_up.style.visibility = "hidden";
});
type_of_animal.addEventListener("click", () => {
  console.log(type_of_animal.value);
  switch (type_of_animal.value) {
    case "elephant":
      property_type.innerHTML = "What is the wight of the elephant?";
      break;

    case "penguin":
      property_type.innerHTML = "What is the swimming speed of the penguin?";
      break;
    case "rabbit":
      property_type.innerHTML = "What is the speed of the rabbit?";
      break;
  }
});
on_submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (x_position.value && y_position.value && property_input.value) {
    switch (type_of_animal.value) {
      case "penguin":
        new Penguin(x_position.value, y_position.value, property_input.value);
        break;
      case "elephant":
        new Elephant(x_position.value, y_position.value, property_input.value);
        break;
      case "rabbit":
        new Rabbit(x_position.value, y_position.value, property_input.value);
        break;
    }
    pop_up.style.visibility = "hidden";
  }
});
