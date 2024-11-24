#!/usr/bin/env node
import { subProcess, subProcessSync } from 'subspawn';
import waitOn from 'wait-on';
const cwd = process.cwd();

// automatically start the mock
subProcess('test-runner', 'npm run start-mock', true);
await waitOn({ resources: ['tcp:localhost:5287'], log: true }, undefined);

// start the SUT
process.chdir('../../src/YourApplicationRoot');
subProcess('test-runner', 'make run', true);
await waitOn({ resources: ['http://localhost:3000'] }, undefined);

// run the tests
process.chdir(cwd);
subProcessSync("npm run cy:run", true);

// automatically stop the mock
subProcess('test-runner', 'npm run stop-mock', true);

process.exit(0);