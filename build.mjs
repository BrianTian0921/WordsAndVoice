import fs from 'node:fs';
fs.mkdirSync('dist/server',{recursive:true});
fs.writeFileSync('dist/server/html.mjs','export default '+JSON.stringify(fs.readFileSync('src/index.html','utf8'))+';');
fs.copyFileSync('src/worker.mjs','dist/server/index.js');
