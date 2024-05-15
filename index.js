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
        return hashCode
    }
};


const escola = new HashMap("toninho","tornado");
console.log(escola.hash("heitor"))