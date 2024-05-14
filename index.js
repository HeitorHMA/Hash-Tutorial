//Create Hash class//
class HashMap{
    constructor(key,value){
        this.key = key;
        this.value = value;
    };
    hash(key){
        let chave = this.key.charCodeAt(0)
        return chave;
    }
};


const escola = new HashMap("toninho","tornado");
console.log(escola.hash())