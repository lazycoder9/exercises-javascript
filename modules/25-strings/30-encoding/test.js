const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim().replace(/\n/g, '');
console.log(content);
const expected = '~^%';
assert.strictEqual(content, expected);
