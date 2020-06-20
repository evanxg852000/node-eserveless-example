//http function
function API(req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

//cron function
function Ticker(envs) {
    console.log(`Ticker ticked at ${Date.now()} ${envs}`);
}

module.exports = {
    API, 
    UserEvent,
    Ticker
}
