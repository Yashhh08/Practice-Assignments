const fs = require("fs");

const getFile = fs.readFileSync("1-json.json");

const getFileToString = getFile.toString();

const getJson = JSON.parse(getFileToString);

getJson.name="Yash Yerunkar";
getJson.age=23;

fs.writeFileSync("1-json.json", JSON.stringify(getJson));
