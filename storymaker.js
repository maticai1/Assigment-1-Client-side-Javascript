/* Variables
-------------------------------------------------- */
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

/* Functions to handle events
-------------------------------------------------- */
// Displays a word from each category when its button is clicked
function noun1_on_click() {
    const selected = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenNoun1.textContent = selected; 
}

function verb_on_click() {
    const selected = verbs[Math.floor(Math.random() * verbs.length)];
    choosenVerb.textContent = selected;
}

function adjective_on_click() {
    const selected = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenAdjective.textContent = selected;
}

function noun2_on_click() {
    const selected = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenNoun2.textContent = selected;
}

function setting_on_click() {
    const selected = settings[Math.floor(Math.random() * settings.length)];
    choosenSetting.textContent = selected;
}

// Generates and displays the story based on selected words
function playback_on_click() {
    
    if (!choosenNoun1.textContent || !choosenVerb.textContent || !choosenAdjective.textContent || !choosenNoun2.textContent || !choosenSetting.textContent) {
        storyDisplay.textContent = "Please select all categories to create your story!";
        return;
    }

    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    storyDisplay.textContent = story;
}

// Generates a random complete story
function random_on_click() {
    const randomStory = `${nouns1[Math.floor(Math.random() * nouns1.length)]} 
                         ${verbs[Math.floor(Math.random() * verbs.length)]} 
                         ${adjectives[Math.floor(Math.random() * adjectives.length)]} 
                         ${nouns2[Math.floor(Math.random() * nouns2.length)]} 
                         ${settings[Math.floor(Math.random() * settings.length)]}.`;
    storyDisplay.textContent = randomStory;
}

// Displays the student ID
function showStudentId() {
    const studentId = "1277165";
    document.getElementById("studentId").textContent = `Student ID: ${studentId}`;
}

/* Assigning events to buttons
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);
document.getElementById("showIdButton").addEventListener("click", showStudentId);
