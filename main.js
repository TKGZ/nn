//simple neural network
//with visual 

//multilayer perceptron

//activation

//hidden

//resulting layers

let activation = [100]
let hidden = [16,16]
let resulting = [10]





function neuron() {
    this.value = 0;
    this.bias = 0;
    
    this.weights = [];
}


//sigmoid for weighted sum
//s(x) = 1/1 + e(-x)
function sigmoid(t)
{
    return (1 / ( 1 + Math.pow(Math.E, -t)))
}

//calculate the activation of a neuron (value from 0 to 1)
function act(weights, values, bias = 0)
{
    sum = bias;
    for (i = 0; i < weights.length; i++){
        sum += weights[i] * values[i]
    }
    return (sigmoid(sum))
}
