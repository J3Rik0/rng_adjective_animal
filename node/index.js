// node node -f filepath -adjectives filepath -animals filepath:q
const fs = require("fs");

// First 2 items in process.argv are "node" and current file path, remove them
const args = process.argv.slice(2)

function scan(path) {
    if ( !fs.existsSync(path) ) {
        return false;
    }
}
