// use import in ts. As fas as I can tell, require does not import the types correctly.
import { program } from 'commander';

/**
 * Throw an error if port is not provided.
 * parse() without passing in "process.argv" is impicit and auto-detects falgs.
 * to add a default value to port, pass an additional argument as string with the
 * value at the end.
 * eg: program.requiredOption('-p, --port <number>', 'port number', '3000).parse();
 */
program.option('-p, --port <number>', 'port number', "3000").parse();

/**
 * parse the provided port as a number
 */
const port: number = parseInt(program.opts().port, 10);

/**
 * If provided port is not a number, exit with error
 */
if (isNaN(port)) {
    console.error('Invalid port provided');
    process.exit(1);
}

console.log(`Port number: ${port}`);
// Local imports
import { app } from './app';

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Start Gunconst { program } = require('commander');
