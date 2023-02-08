const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const noteFound = notes.find((note) => {
    return note.title === title;
  });

  if (!noteFound) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.yellow.inverse("Note title alredy taken..!!"));
  }
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

const listNotes = () => {
  console.log(chalk.green.inverse("Your Notes.."));

  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(chalk.yellow.inverse(note.title));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();

  const noteFound = notes.find((note) => {
    return (note.title === title);
  });

  if (noteFound) {
    console.log(chalk.inverse(noteFound.title), noteFound.body);
  } else {
    console.log(chalk.red.inverse(`No note found with title ${title}`));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
