const fs = require("fs");

// Read text file
const text = fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    console.log("\n\n\n------Reading text file--------")
    console.log("file contents read");
    console.log(text);
});

// Read binary file
const img = fs.readFile("./assets/gekko.png", (err, img) => {
    console.log("\n\n\n------Reading binary file--------")
    if (err) {
        console.log(`An error has occured: ${err.message}`)
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});