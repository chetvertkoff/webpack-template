'use strict';


let idGenerator = {
    [Symbol.iterator](){
        let id =1;
        return {
            next(){
                let value = id > 100 ? false : id++;
                let done =!value;
                return {
                    value,
                    done
                }
            }
        }
    }

};
    
for (let id of idGenerator){
    console.log(id);

}


console.log(13);
