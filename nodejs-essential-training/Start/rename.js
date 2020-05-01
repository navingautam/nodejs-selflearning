const fs = require("fs");

fs.renameSync("./assets/colors2.json", "./assets/colorData.json");

fs.rename("./assets/notes2.md", "./storage-files/notes2.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./assets/gekko2.png");
}, 4000);