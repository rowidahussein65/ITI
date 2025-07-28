//Challenge 1: Countdown Timer

let countdown = 5;

const timer = setInterval(() => {
  if (countdown > 0) {
    console.log(countdown);
    countdown--;
  } else {
    console.log("GO!");
    clearInterval(timer);
  }
}, 1000);


//Challenge 2: Async User Data Processing
// 1. Simulated API Calls
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) {
        reject(new Error("User not found."));
      } else {
        resolve({ id, name: "Rowida Hussein" });
      }
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "First Post", userId },
        { id: 2, title: "Second Post", userId }
      ]);
    }, 1500);
  });
}

function formatSummary(user, posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${user.name} has ${posts.length} posts.`);
    }, 500);
  });
}

// 2. Main async function
async function getFormattedUserPosts(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const summary = await formatSummary(user, posts);
    console.log(summary);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// ✅ Testing:
getFormattedUserPosts(1);   // Works
getFormattedUserPosts(0);   // Error

// Challenge 3: try...catch Validator – Area of a Circle

function calculateCircleArea(radius) {
  try {
    if (typeof radius !== "number" || radius <= 0) {
      throw new Error("Invalid radius. Must be a positive number.");
    }

    const area = Math.PI * radius * radius;
    console.log(`Area: ${area.toFixed(2)}`);
  } catch (error) {
    console.error(error.message);
  }
}

// ✅ Testing:
calculateCircleArea(5);    // Valid
calculateCircleArea(-2);   // Invalid
calculateCircleArea("abc"); // Invalid


// Challenge 4: Simple Photo Fetcher

async function getRandomPhoto() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Title: ${data.title}`);
    console.log(`URL: ${data.url}`);
  } catch (error) {
    console.error("Error fetching photo:", error.message);
  }
}

// ✅ Testing:
getRandomPhoto();

