const brain = require("brain.js");
const fs = require("fs");

const net = new brain.NeuralNetwork();

const trainData = [
    {input: 'how are you', output: ('i am fine')},
    {input: 'who are you', output: ('i am chatbot')},
    {input: 'what is your age', output: ('40 years')},
    {input: 'favourate company', output: ('google')},
]
  
net.train(trainData, {iterations: 20000, log:true});

const json = net.toJSON();
// console.log(JSON.stringify(json))
fs.writeFile("net.json", JSON.stringify(json), () => {
    console.log('data written')
}) 

// fs.readFile(__dirname + "/net.json", 'utf8', (err, data) => {
//     net.fromJSON(JSON.parse(data));
//     net.run('favourate company')
//     // console.log(data);
// })
