var chords = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
var suffixes = ["m","7","m7"];

var temp = []
var tempSuffix = []

function validateForm() {
    let text = document.forms["chords"]["input"].value.toUpperCase(); // Get input from field
    let textArray = text.split(/[,.\s\n]/); // Create array from input
    let textArray2 = textArray.filter(Boolean); // Remove empty values


    for (index = 0; index < textArray2.length; index++) { // Loop through inputted chords
        let originalChord = textArray2[index]
        let rootChord = ""
        tempSuffix.push("");

        for (const suffix of suffixes) { // Loop through suffixes and store temporarily
            if (originalChord.toLowerCase().includes(suffix)) {
                tempSuffix[index] = suffix;
                rootChord = originalChord.slice(0, -suffix.length);
            }
        }

        if (chords.includes(originalChord)) {
            temp.push(originalChord);
        } 
        
        else if (chords.includes(rootChord)) {
            temp.push(rootChord);
        }

        else {
            alert("Please make sure the chords you enter are valid!");
            temp = [];
            break;
        }

    }
}

function transposeUp() {
    validateForm();
    let output = [];
    
    for (index = 0; index < temp.length; index++) {
        let newChord = chords.indexOf(temp[index]);
        newChord == chords.length - 1 ? newChord = 0 : newChord += 1; // Go to next chord in sequence, and wrap around if it's the last
        output.push(chords[newChord] + tempSuffix[index]);
    }

    document.forms["chords"]["input"].value = output.join(" ");
    temp = [];
    tempSuffix = [];
}

function transposeDown() {
    validateForm();
    let output = [];
    
    for (index = 0; index < temp.length; index++) {
        let newChord = chords.indexOf(temp[index]);
        newChord == 0 ? newChord = chords.length - 1 : newChord -= 1; // Go to next chord in sequence, and wrap around if it's the last
        output.push(chords[newChord] + tempSuffix[index]);
    }

    document.forms["chords"]["input"].value = output.join(" ");
    temp = [];
    tempSuffix = [];
}