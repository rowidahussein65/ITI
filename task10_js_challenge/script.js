// Create and Manipulate a Product Object

let product = {
  name: "Smartphone",
  inStock: true,
};

console.log(product.name); // Log the name

product.price = 19.99; // Add price
product.category = "Electronics"; // Add category
delete product.inStock; // Delete inStock

console.log(product); // Final object

//////////////////////////////////////////////////////////

// User Profile with Method and this

let userProfile = {
  firstName: "Rowida",
  lastName: "Hussein",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function () {
    console.log("Hello, " + this.getFullName() + "!");
  },
};

userProfile.greet(); // Logs: Hello, Rowida Hussein!

//////////////////////////////////////////////////////////////////

// Object Destructuring for Configuration

const config = {
  apiURL: "/api/v1",
  timeout: 5000,
  maxRetries: 3,
  debugMode: true,
};

const {
  apiURL,
  timeout,
  debugMode: isDebug,
  loggingEnabled = false,
  ...restConfig
} = config;

console.log(apiURL); // "/api/v1"
console.log(timeout); // 5000
console.log(isDebug); // true
console.log(loggingEnabled); // false
console.log(restConfig); // { maxRetries: 3 }
//////////////////////////////////////////////////////////////////////////////

// Merging User Data with Spread

const baseUser = { id: 101, username: "user1", role: "guest" };
const newDetails = {
  username: "proUser",
  email: "user1@example.com",
  role: "admin",
};

const finalUser = { ...baseUser, ...newDetails };

console.log(finalUser);
// Output: { id: 101, username: "proUser", role: "admin", email: "user1@example.com" }
///////////////////////////////////////////////////////////////////////////////////////////////

// Random Dice Roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice()); // Random number between 1 and 6
//////////////////////////////////////////////////////////////////////////////////////

// Format Date for Display

let currentDate = new Date();
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(currentDate.toLocaleDateString("en-US", options));
///////////////////////////////////////////////////////////////////////////////////

//Clean and Shorten Text

let articleText =
  "   JavaScript is a versatile language. It's fun to learn!   ";
let cleaned = articleText.trim().slice(0, 20).toUpperCase();

console.log(cleaned); // "JAVASCRIPT IS A VER"
//////////////////////////////////////////////////////////////////////////////////

// Check File Extension

function checkImageExtension(filename) {
  const ext = filename.toLowerCase();
  return ext.endsWith(".jpg") || ext.endsWith(".png") || ext.endsWith(".gif");
}

console.log(checkImageExtension("photo.JPG")); // true

///////////////////////////////////////////////////////////////////////////////////////

// Challenges 9 – DOM Selection & Manipulation

//1. Select and Modify Main Heading
document.querySelector("h1").textContent = "DOM Manipulation Rocks!";

////////////////////////////////////////////////////////////////////////////////////

//2. Highlight Veggies

const vegList = document.querySelector("#veg-list");
const vegItems = vegList.querySelectorAll("li");

vegItems.forEach((item) => {
  item.classList.add("highlight");
});

////////////////////////////////////////////////////////////////////

// 3. Get All Intro Paragraphs

// Using getElementsByClassName
const introParas1 = document.getElementsByClassName("intro");
for (let para of introParas1) {
  console.log(para.textContent);
}

// Using querySelectorAll
const introParas2 = document.querySelectorAll(".intro");
introParas2.forEach((para) => console.log(para.textContent));

/////////////////////////////////////////////////////////////////////////

// 4. Find Specific Item in Fruit List and Change Color

const fruitList = document.getElementById("fruit-list");
const banana = fruitList.querySelectorAll("li")[1]; // Target 2nd item (Banana)
banana.style.color = "blue";
//////////////////////////////////////////////////////////////////////////////

//Set 2 – DOM Traversal

// 1. Find the Grandparent of "Oranges"

const orangeItem = document.querySelector("#shopping-list .special");
const grandparent = orangeItem.parentElement.parentElement;
console.log(grandparent.id); // "container"

//////////////////////////////////////////////////////////////////////////

// 2. Log All Fruit Names in the List
const shoppingList = document.getElementById("shopping-list");
Array.from(shoppingList.children).forEach((item) => {
  console.log(item.textContent);
});
////////////////////////////////////////////////////////////////////////////
// 3. Navigate to Previous Sibling of Paragraph

const endPara = document.querySelector("p");
const prevSibling = endPara.previousElementSibling;
console.log(prevSibling.id); // Should log "shopping-list"
//////////////////////////////////////////////////////////////////////////////

//Challenges 10 – DOM Add/Remove/Replace

//1. Add New Paragraph

const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically!";
document.getElementById("container").appendChild(newPara);
//////////////////////////////////////////////////////////////////////////////

//2. Remove the First Paragraph

const firstPara = document.getElementById("first-para");
firstPara.remove();
////////////////////////////////////////////////////////////////////////////
//3. Replace "Item D" with a Warning

const itemD = document.getElementById("item4");
const warningItem = document.createElement("li");
warningItem.textContent = "ITEM REPLACED: DANGER!";
warningItem.classList.add("warning");
itemD.replaceWith(warningItem);
///////////////////////////////////////////////////////////////////////

//4. Add a Title to Footer

const h3 = document.createElement("h3");
h3.textContent = "Quick Links";
const footer = document.querySelector("footer");
footer.insertBefore(h3, footer.firstChild);
////////////////////////////////////////////////////////////////////////

//5. Change Page Title Style
const pageTitle = document.getElementById("pageTitle");
pageTitle.textContent = "My Dynamic Web Page";
pageTitle.style.color = "red";
pageTitle.style.fontFamily = "sans-serif";
////////////////////////////////////////////////////////////////////////////

// 6. Toggle Highlight on Fruits

const fruitItems = document.querySelectorAll("#fruit-list li");
fruitItems.forEach((item) => {
item.classList.toggle("highlight");
});
////////////////////////////////////////////////////////////////////////////

//7. Update Footer Link

const link = document.getElementById("myLink");
link.href = "https://google.com";
link.target = "_blank";
link.textContent = "Go to Google";
////////////////////////////////////////////////////////////////////////////////

// 8. Display Data Attribute Info

const firstFruit = document.querySelector("#fruit-list li");
const category = firstFruit.dataset.category;
console.log("The category of this item is: " + category);
