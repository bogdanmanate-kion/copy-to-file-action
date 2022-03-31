const core = require('@actions/core');
const path = require('path');
const fs = require('fs');

try {
    const content = core.getInput('content');
    const filename = core.getInput('filename');
    const workDirectory = core.getInput('work-directory');
    const runnerTempDirectory = process.env['RUNNER_TEMP']; // Using process.env until the core libs are updated
    const filePath = (workDirectory) ? path.join(workDirectory, filename) : path.join(runnerTempDirectory, filename);

    console.log(`Saving content to file: ${filePath}`);
    fs.writeFileSync(filePath, content);
} catch (error) {
    core.setFailed(error.message);
}
