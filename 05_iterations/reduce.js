const myNums = [1,2,3]

const myTotal = myNums.reduce( function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},0) //0 yha initial value hai jo accumulator value lega sabse pehle phir jo acc+currval ki value aaegi acc mai 
console.log(myTotal);


const shoppingCart = [
    {itemName : "Java course",
        price : 2999
    },
    {itemName : "JavaScript course",
        price : 1999
    },
    {itemName : "web dev course",
        price : 5999
    },
    {itemName : "Python course",
        price : 2999
    },
    {itemName : "c++ course",
        price : 2999
    }
]

const PricetoPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PricetoPay);