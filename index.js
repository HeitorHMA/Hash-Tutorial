//Create Bucket List array//
let bucketList = [1, 2 ,3 ,4 ,5, 6 ,7,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ]
let bucketSize = 16;
//Create Hash class//
class HashMap{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }};

 function hash(key){
        let hashCode = 0;
        const primeNumber = 11;
        for(let i = 0 ; i < key.length ; i++ ){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode
    };
// 
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
function get(key){
    let hashCode = hash(key);
    let index = hashCode % bucketSize;
    return bucketList[index];
    

}




const escola = new HashMap("toninho","tornado");
console.log(set(escola.key,escola.value));
console.log(get("toninho"));