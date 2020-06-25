//http function
function API(req, res) {
    const ip = res.socket.remoteAddress;
    console.log(`Client ip address is ${ip}.`);
    res.writeHead(200);
    res.end('Hello, World!');
}

//cron function
function Ticker(envs) {
    console.log(envs); 
    console.log(`Ticker ticked at ${Date.now()}`);
}

module.exports = {
    API,
    Ticker
}
