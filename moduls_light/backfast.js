const http = require('http');
const fs = require('fs');
const path = require('path');


class backfast {
    constructor() {
        this.server = null;
    }

    start(port) {
        this.server = http.createServer((req, res) => {
            let filePath = '.' + req.url;
            if (filePath === './') {
                filePath = './index.html';
            }
        
            const extname = path.extname(filePath);
            const contentType = {
                '.html': 'text/html',
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.jpeg': 'image/jpeg',
                '.ico': 'image/x-icon',
                'wasm': 'application/wasm'
            }[extname] || 'text/plain';
        
            fs.readFile(filePath, (error, content) => {
                if (error) {
                    if(error.code === 'ENOENT') {
                        res.writeHead(404);
                        res.end('404 Not Found');
                    } else {
                        res.writeHead(500);
                        res.end('Internal server error: ' + error.code);
                    }
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            });
        });
        
        this.server.listen(port, () => {
            console.log(`Server url: http://localhost:${port}`);
        });
    }

    end() {
        this.server.close(() => {
            console.log('Server closed');
        });
    }
}

backfast = new backfast
backfast.start(3000)
setTimeout(() => {
    backfast.end()
}
, 10000)