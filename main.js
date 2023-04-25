const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://www.sheknows.com/wp-content/uploads/2018/08/ecvtznlbtoqnxnopm81r.jpeg?w=2048",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://cdn.shopify.com/s/files/1/0344/6469/files/black_cat_copy.jpg?v=1538930222"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://jimmysfarm.com/wp-content/uploads/2023/01/Untitled-design-13.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i.insider.com/5d8cdcdb2e22af02db6a2b7f?width=700"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://i0.wp.com/www.urbandognyc.com/wp-content/uploads/2017/12/santas-little-helper-simpsons-dog-character-800x566.jpg?fit=800%2C566&ssl=1"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://thumbs.dreamstime.com/z/fun-dinosaur-64700880.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://preview.redd.it/my-name-is-muffin-v0-heo1lir74fea1.jpg?width=640&crop=smart&auto=webp&s=b8d148ccc667285454f80f32795318e28ea545ea"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://previews.123rf.com/images/ledokolua/ledokolua1901/ledokolua190100059/126096035-dinosaur-playing-electric-guitar-tyrannosaurus-or-t-rex-comic-style-vector-illustration.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://cdn.shopify.com/s/files/1/0344/6469/files/mark-taylor-black-kitten-in-defensive-witch-s-cat-display-with-back-arched-and-hair-standing-up_a-G-10575361-14258389_grande.jpg?v=1507059577"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/originals/aa/7c/20/aa7c20e9d32ba1d39a8d43cd738b5e1c.png"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://www.petplace.com/static/a8d9493514016bb093e4b5459cf717c8/c85e8/shutterstock_731444602.png"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://d.newsweek.com/en/full/2066422/howling-dog.jpg?w=790&f=70c8b3c9fe2e25e7e8944a1ed6509c52"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfFNPOItXl-8WCouzMpO_ripaBdh9F-k__Q&usqp=CAU"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://as2.ftcdn.net/v2/jpg/03/93/20/83/1000_F_393208301_KY1mpQQvOrrb0QaeNHsXrGVzeYfnP5KZ.jpg"
    }
  ];

//   const targetingApp = document.querySelector("#app");
//   console.log(targetingApp);

//   let domString = "";
//   for (const pet of pets) {
//     domString += `<div class="card" style="width: 18rem;">
//     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
//   <div class="card-body">
//     <h5 class="card-title">${pet.name}</h5>
//     <p class="card-text">${pet.color}</p>
//     <p class="card-text">${pet.specialSkill}</p>
//     <p class="card-text">${pet.type}</p>
//   </div>
// </div>`;
// }

// console.log("domString", domString);
// targetingApp.innerHTML = domString;

// console.log("Everything is working!");

// Event listener exercise below:

// This function takes a specified div ID and renders the html for it:
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  // This variable tells the function to find all of the instances within the HTML of the specified ID passed through it:
  selectedDiv.innerHTML = htmlToRender;
  // This statement takes the variable/method above and assigns the innerHTML method to it which enables the selected div to be assigned the html
};

// // get the cards on the DOM
const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    if (pet.type === "cat") {
      domString += `<div class="cats" style="width: 18rem;">
     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">${pet.type}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
    } else if (pet.type === "dog")  {
      domString += `<div class="dog" style="width: 18rem;">
     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
     <h5 class="card-title">${pet.name}</h5>
     <p class="card-text">${pet.color}</p>
     <p class="card-text">${pet.specialSkill}</p>
     <p class="card-text">${pet.type}</p>
     <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
    } else if (pet.type === "dino") {
      domString += `<div class="dino" style="width: 18rem;">
     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
     <h5 class="card-title">${pet.name}</h5>
     <p class="card-text">${pet.color}</p>
     <p class="card-text">${pet.specialSkill}</p>
     <p class="card-text">${pet.type}</p>
     <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
    } else {
      domString += `<div class="card" style="width: 18rem;">
     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
     <h5 class="card-title">${pet.name}</h5>
     <p class="card-text">${pet.color}</p>
     <p class="card-text">${pet.specialSkill}</p>
     <p class="card-text">${pet.type}</p>
     <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
    }
  }
  renderToDom("#app", domString);
};
cardsOnDom(pets);
console.log(pets);

// // function to filter pets by type
const filter = (array,typeString) => {
  const typeArray = [];
 
  for (const pet of array) {
    if (pet.type === typeString) {
      typeArray.push(pet);
    }
  }

  return typeArray;
};

const showCats = document.querySelector("#show-cats");
const showDogs = document.querySelector("#show-dogs");
const showDinos = document.querySelector("#show-dinos");
const showAll = document.querySelector("#all-pets");

showCats.addEventListener("click", () => {
  const cats = filter(pets, "cat");
  cardsOnDom(cats);
});

showDogs.addEventListener("click", () => {
  const dogs = filter(pets, "dog");
  cardsOnDom(dogs);
});

showDinos.addEventListener("click", () => {
  const dinos = filter(pets, "dino");
  cardsOnDom(dinos);
});

showAll.addEventListener("click", () => {
  cardsOnDom(pets);
});

// Create Pets Form 4/22:
// 1. select/target the form on the DOM
const form = document.querySelector('form');

// 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new pet.
const createPet = (e) => {
  e.preventDefault();
  const newPetObj = {
    id: pets.length +1,
    name: document.querySelector("#petName").value,
    color: document.querySelector("#petColor").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#petType").value,
    // ******************Below are attempts to get the radio buttons working***************
    // I followed multiple instructions including those at youtube address (https://www.youtube.com/watch?v=cSuEAD-Tnd4) and it is still unclear how to connect things so the buttons are assigned the DOM doesnt break. At minimum the MVP is working so may need to just stop here.
    // type: document.querySelector('#radioTypeCat, #radioTypeDog, #radioTypeDino').value,
    // type: document.querySelector('input[name="radioButtons"]:checked')
    // <input class="form-check-input" type="radio" value="cat" name="radioButtons" id="radioTypeCat">;
    // {/* type: document.querySelector('input["radioButtons"]:checked'); */}
    // {/* document.form.radioButtons */}
    imageUrl: document.querySelector("#imageURL").value,
  }

  console.log(document.querySelector("#imageURL").value,);

  // Attempt #4 at resolving broken radio buttons - still not working ->
  // document.querySelector('input[name="radioButtons"]:checked').value
  //   <input class="form-check-input" type="radio" value="cat" name="radioButtons" id="radioTypeCat">;
  
  {/* document.querySelector('input[name="radioButtons"]:checked').value */}


  {/* // document.getElementByName('radioButtons')
  //     .forEach(radio => { */}
  //       if (radio.checked) {
  //           console.log(radio.value);
  //       }
  //     });

// Another attempt at hooking up the radio buttons with answers from github discussion ticket:
// var radioButtons = document.getElementsByName('radioButtons');

// for (var i = 0; i < radio.length; i ++) {
//   radio[i].addEventListener('change', function() {
//     console.log(this.value);
//   });
// };

  // Below is another attempt to get radio buttons hooked up:
  // const radioButtons = document.querySelectorAll('input[name="radioPetType"]');

  // radioButtons.forEach(function(radioButton) {
  //   radioButton.addEventListener('change', function() {
  //     // Code to execute when the radio button is clicked
  //     if (radioButton.value === "Cat") {
  //       petType.push(cat);
  //     } else if (radioButton.value === "Dog") {
  //       petType.push(dog);
  //     } else (radioButton.value === "Dino") {
  //       petType.push(dino);
  //     }
  //   });
  // });

  // Below is an attempt to fix the broken radio buttons, but Im not clear on the methods to resolve - may need follow-up.
  // document.querySelector('input[name="pet-type"]:checked')
  //   <input class="form-check-input" type="radio" value="cat" name="radioPetType" id="petType">

  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener('submit', createPet);

// ******************** //
// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div
// 2. Add an event listener to capture clicks
// 3. check e.target.id includes "delete"
// 4. add logic to remove from array
// 5. Repaint the DOM with the updated array
// 6. Organize code so that everything is in a function except selectors

// 1. Target the app div
// 2. Add an event listener to capture clicks
const app = document.querySelector("#app");

app.addEventListener('click', (e) => {
  // console.log(e.target.id);
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    const [, id] = e.target.id.split("--");

// 4. add logic to remove from array
    // .findIndex is an array method
    const index = pets.findIndex(e => e.id === Number(id));
    console.log("index", index);
    // .splice modifies the original array
    pets.splice(index, 1)

// 5. Repaint the DOM with the updated array
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
}

startApp();
