const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);

  console.log("Note added");
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();

    return JSON.parse(dataString);
  } catch (err) {
    return [];
  }
};

const removeNote = (title) => {
  const noteJSON = loadNotes();

  const updatedNotes = noteJSON.filter((note) => {
    return note.title !== title;
  });

  if (updatedNotes.length >= noteJSON.length) {
    console.log(chalk.bgRed(`No note found with title ${title}`));
  } else {
    fs.writeFileSync("notes.json", JSON.stringify(updatedNotes));

    console.log(chalk.bgGreen(`note removed with title ${title}`));
  }
};

// [
//     { "title": "reminder", "body": "learn node.js" },
//     { "title": "buy", "body": "purchased watch of 2000rs" },
//     { "title": "sample", "body": "ssssss" }
//   ]

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
