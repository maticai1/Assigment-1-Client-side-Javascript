/* Variables */
// Word arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
const nouns2 = ["monkey", "fish", "cow", "frog", "bug"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass"];

// Selecting elements in the DOM
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");
const storyDisplay = document.getElementById("story");

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Assigning events to buttons
document.getElementById("noun1").addEventListener("click", () => choosenNoun1.textContent = getRandomWord(nouns1));
document.getElementById("verb").addEventListener("click", () => choosenVerb.textContent = getRandomWord(verbs));
document.getElementById("adjective").addEventListener("click", () => choosenAdjective.textContent = getRandomWord(adjectives));
document.getElementById("noun2").addEventListener("click", () => choosenNoun2.textContent = getRandomWord(nouns2));
document.getElementById("setting").addEventListener("click", () => choosenSetting.textContent = getRandomWord(settings));

// Generates and displays the story based on selected words
document.getElementById("playback").addEventListener("click", () => {
    if ([choosenNoun1, choosenVerb, choosenAdjective, choosenNoun2, choosenSetting].some(el => el.textContent === "...")) {
        storyDisplay.textContent = "Please select all categories to create your story!";
        return;
    }

    storyDisplay.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
});

// Generates a random complete story
document.getElementById("random").addEventListener("click", () => {
    storyDisplay.textContent = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}.`;
});

// Displays the student ID
document.getElementById("showIdButton").addEventListener("click", () => {
    document.getElementById("studentId").textContent = "Student ID: 1277165";
});

