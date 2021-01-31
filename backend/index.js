const router = require("./routes")
const server = require('./server');

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server is ON at localhost: ${PORT}`))