//Create Bucket List array//

let bucketList = [ "","","","","","","","","","","","","","","","",]
let bucketSize = 16;

//Create HashMapclass//

class HashMap{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }};

// Create hash() function//

 function hash(key){
        let hashCode = 0;
        const primeNumber = 11;
        for(let i = 0 ; i < key.length ; i++ ){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode
    };

// Create set() function//

function set(key,value){
        let hashCode = hash(key)
        const hashIndex = hashCode % bucketSize
        const index = hashIndex
        bucketList.splice(index,1)
        bucketList = [
            ...bucketList.slice(0, index),
            value,
            ...bucketList.slice(index)
        ];
        return bucketList
    };

// Create get() function//

function get(key){
    let hashCode = hash(key);
    let index = hashCode % bucketSize;
    if(index < 0 || index > bucketSize)
    {
        return "this index is out of bounds"
    }
    else if(bucketList[index])
    {
        return bucketList[index];
    }
    else
    {
        return null
    }
};

// Create has(key) function//

function has(key){
    let testKey = hash(key);
    let index = testKey % bucketSize;
    if(bucketList[index]){
        return true
    };
    return false

};

// Create remove(key) function//

function remove(key){
    const removeCode = hash(key);
    const removeIndex = removeCode % bucketSize
    if(bucketList[removeIndex]){
        bucketList.splice(removeIndex,1);
        bucketList = [
            ...bucketList.slice(0, removeIndex),
            "",
            ...bucketList.slice(removeIndex)
        ];
        return true;
    }
    return false

}
// Test Area//

const escola = new HashMap("toninho","tornado");
console.log(set(escola.key,escola.value));
console.log(remove("toninho"));
console.log(bucketList)
console.log(set("bolsonaro","alfa"))
console.log(set("bolsonaro","beta"))
console.log(remove("bolsonaro"))
console.log(bucketList)