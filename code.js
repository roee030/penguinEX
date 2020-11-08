class Animal {
  constructor(pX, pY, type, property) {
    let aDiv = document.createElement("div");
    aDiv.style.position = "fixed";
    aDiv.style.top = pX + "px";
    aDiv.style.left = pY + "px";
    let atext = document.createElement("p");
    switch (type) {
      case "elephant":
        aDiv.className = "elephant";
        atext.innerHTML = "The Elephant Weight is:" + property + "kg";
        let eImage = document.createElement("img");
        eImage.src = "./images/img01.jpg";
        aDiv.appendChild(eImage);
        aDiv.appendChild(atext);
        break;
      case "rabbit":
        aDiv.className = "rabbit";
        atext.innerHTML = "The Rabbit speed is:" + property + "kph";
        let rImage = document.createElement("img");
        rImage.src = "./images/img02.jpg";
        aDiv.appendChild(rImage);
        aDiv.appendChild(atext);
        break;
      case "penguin":
        aDiv.className = "penguin";
        atext.innerHTML = "The Penguin swimming speed is:" + property + "kph";
        let pImage = document.createElement("img");
        pImage.src = "./images/img03.jpg";
        aDiv.appendChild(pImage);
        aDiv.appendChild(atext);
        break;
    }
    document.body.appendChild(aDiv);
  }
}

new Animal(10, 10, "elephant", 660);
new Animal(220, 120, "penguin", 660);
new Animal(440, 140, "rabbit", 660);
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
