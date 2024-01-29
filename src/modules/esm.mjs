import { createServer as createServerHttp } from 'http'
import { release, version } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import './files/c.js'

const PORT = 3000;
const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', { assert: { type: 'json' } })
} else {
    unknownObject = await import('./files/b.json', { assert: { type: 'json' } })
} 
unknownObject = unknownObject.default


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
