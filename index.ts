import { program } from 'commander';
program.option('-p, --port <number>', 'port number', "3000").parse();
const port: number = parseInt(program.opts().port, 10);
if (isNaN(port)) {
    console.error('Invalid port provided');
    process.exit(1);
}

// Local imports
import { app } from './app';

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

