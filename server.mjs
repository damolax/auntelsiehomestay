import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css'};
http.createServer(async(req,res)=>{try{const file=req.url==='/'?'index.html':req.url.slice(1);const target=['app.js','styles.css'].includes(file)?file:'index.html';const data=await readFile(target);res.writeHead(200,{'content-type':types[extname(target)]||'text/plain'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(4173,()=>console.log('Preview: http://localhost:4173'));
