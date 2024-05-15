//Create Bucket List array//
const bucketList = [1, 2 ,3 ,4 ,5, 6 ,7,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16];
//Create Hash class//
class HashMap{
    constructor(key,value){
        this.key = key;
        this.value = value;
    };
    hash(key){
        let hashCode = 0;
        const primeNumber = 11;
        for(let i = 0 ; i < key.length ; i++ ){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        const hashIndex = hashCode % 16
        const index = hashIndex
        bucketList.splice(index,1)
        const newBuckets = [
            ...bucketList.slice(0, index),
            hashCode,
            ...bucketList.slice(index)
        ];
        return newBuckets
    }
    set(key,value){
        let newHash = new HashMap (key,value)
        return newHash
    }

};


const escola = new HashMap("toninho","tornado");
console.log(escola.set("toninho","tornado"))