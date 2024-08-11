//import asset lib
const assert = require('assert');
//import ganace - local ether env\local running env
const ganache = require('ganache');
//import web3 lib
const { Web3 } = require('web3');
//provider is the communication channel between our code to Web3
const web3 = new Web3(ganache.provider());

class Car{

    park(){
        return "STOP";
    }

    drive(){
        return "START";
    }
}

let car;

// beforeEach(()=> {
//     car = new Car();
// })
// describe ('Car', ()=>{
//     it('Park Car Test', ()=> {
//         assert.equal(car.park(), 'STOP');
//     })

//     it('Drive Car Test', ()=> {
//         assert.equal(car.drive(), 'START');
//     })
// })