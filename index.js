const brain = require("brain.js");
const traindata = require("./traindata.json")
const fs = require("fs");
const net = new brain.recurrent.LSTM();

net.train(
  traindata,
  { log: true, iterations: 50 }
);

const json = net.toJSON();
fs.writeFileSync("network_state.json",  JSON.stringify(json), "utf-8");

console.log(net.run("what is capital of india"));
