//simple neural network
//with visual 

//multilayer perceptron

//activation

//hidden

//resulting layers

let activation = [100]
let hidden = [16,16]
let resulting = [10]







//sigmoid for weighted sum
//s(x) = 1/1 + e(-x)
function sigmoid(t) {
    return (1 / ( 1 + Math.pow(Math.E, -t)))
}