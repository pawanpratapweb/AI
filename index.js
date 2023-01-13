const brain = require("brain.js");
const fs = require("fs");

const net = new brain.recurrent.LSTM();

const trainData = [
    {input: 'how are you', output: ('i am fine')},
    {input: 'who are you', output: ('i am chatbot')},
    {input: 'what is your age', output: ('40 years')},
    {input: 'favourate company', output: ('google')},
]
  
net.train(trainData, {iterations: 20000, log:true});

const json = net.toJSON();
console.log(net.run("who are you"))
