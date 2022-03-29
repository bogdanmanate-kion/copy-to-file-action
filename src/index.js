const core = require('@actions/core');
const path = require('path');
const fs = require('fs');

try {
    const content = core.getInput('content');
    const filename = core.getInput('filename');
    console.log(`Saving content to file: ${filename}`);
    const runnerTempDirectory = process.env['RUNNER_TEMP']; // Using process.env until the core libs are updated
    const filePath = path.join(runnerTempDirectory, filename);
    core.debug(`Writing contents to ${filePath}`);
    fs.writeFileSync(filePath, content);
} catch (error) {
    core.setFailed(error.message);
}
