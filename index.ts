import Gun from "gun";
const program = require('commander');

program
    .option('-p, --port <number>', 'port number', 3000)
    .parse(process.argv);

const port = program.port;

console.log(`Port number: ${port}`);
// Local imports
import { app } from "./app"



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Start Gunconst { program } = require('commander');

