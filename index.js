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
        let hashBucket = new HashMap(key,value)
        const hashIndex = hashCode % bucketSize
        const index = hashIndex
        bucketList.splice(index,1)
        bucketList = [
            ...bucketList.slice(0, index),
            hashBucket,
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

//Create length() function//

function length(Array){
    let arrayLength = 0;
    for(i = 0 ; i < Array.length ; i++){
        if(Array[i] !== ""){
            arrayLength++
        };
    };
    return arrayLength
};

//Create clear() function//

function clear(Array){
    for(let i = 0; i < Array.length; i++)
    {
        Array[i] = "";
    }
    return Array;
};

//Create keys() function//

function keys(Array){
    const onlyKeys = [];
    for(let i = 0; i < Array.length; i++)
    {
       if(Array[i] !== ""){
        const key = Array[i]
         onlyKeys.push(key.key)
       }
    }
    return onlyKeys
}

//Create keyCodes() function//

function keyCodes(Array){
    const onlyKeys = [];
    for(let i = 0; i < Array.length; i++)
    {
       if(Array[i] !== ""){
        const key = Array[i]
         onlyKeys.push(hash(key.key))
       }
    }
    return onlyKeys
}

//Create values() function//

function values(Array){
    const onlyValues = [];
    for(let i = 0; i < Array.length; i++)
    {
       if(Array[i] !== ""){
        const value = Array[i]
         onlyValues.push((value.value))
       }
    }
    return onlyValues
}

//Create entries() function//

function entries(Array){
    const allEntries = [];
    for(let i = 0; i < Array.length; i++)
    {
       if(Array[i] !== ""){
        const entry = Array[i]
        allEntries.push((`${entry.key},${entry.value}`))
       }
    }
    return allEntries
};

// Test Area//

const escola = new HashMap("toninho","tornado");
console.log(set("ht","ml"))
console.log(set("c","ss"))
console.log(set("java","script"))
console.log(bucketList)
console.log(keys(bucketList))
console.log(values(bucketList))
console.log(entries(bucketList))