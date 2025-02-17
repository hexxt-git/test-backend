const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    const requestInfo = {
        method: req.method,
        headers: req.headers,
        query: req.query,
        params: req.params,
        body: req.body,
        url: req.url,
        originalUrl: req.originalUrl,
        ip: req.ip,
        protocol: req.protocol,
        secure: req.secure,
        cookies: req.cookies,
        signedCookies: req.signedCookies,
        fresh: req.fresh,
        stale: req.stale,
        xhr: req.xhr,
        hostname: req.hostname,
        subdomains: req.subdomains,
        path: req.path,
        route: req.route,
        httpVersion: req.httpVersion,
        rawHeaders: req.rawHeaders,
        trailers: req.trailers,
        connection: {
            remoteAddress: req.connection.remoteAddress,
            remotePort: req.connection.remotePort,
            localAddress: req.connection.localAddress,
            localPort: req.connection.localPort
        }
    };
    res.json(requestInfo);
});

app.get('/greet', (req, res) => {
    const name = req.query?.name ?? 'Guest';
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});