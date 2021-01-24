const router = require("./routes")
const server = require('./server');

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`Server is ON at localhost: ${PORT}`))