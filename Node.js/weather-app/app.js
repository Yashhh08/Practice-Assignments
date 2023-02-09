const fetchMapData = require("./utils/weather");
const process = require("process");
const yargs = require("yargs");

yargs.command({
  command: "weather",
  describe: "get weather of given location",
  builder: {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    fetchMapData(argv.title)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
});

yargs.parse();
