const fs = require('fs');

let data = {};

let isKey = key => {
    if(typeof(key) !== 'string'){
       throw new Error('This key is not a string!');
    }
}

let keyExists = key =>{
    if(!data.hasOwnProperty(key)){
        throw new Error('This key does not exists!');
    }
}

let put = (key,value) => {
    isKey(key)
    if(data.hasOwnProperty(key)){
        throw new Error('This key already exist!');
    }
    data[key] = value;
}

let get = (key) => {
    isKey(key);
    keyExists(key);
    return data[key];
}

let getAll = () => {
    if(Object.values(data).length === 0){
        return 'No data in database!';
    }
    return data;
}

let update = (key, value) => {
    isKey(key);
    keyExists(key);
    data[key] = value;
}

let deleteItem = (key) => {
    isKey(key);
    keyExists(key);
    delete data[key];
}

let clear = () => {
    data = {};
}

let save = () => {
    fs.writeFileSync('./data.json',JSON.stringify(data),'utf8');
}

let load = () => {
    try{
        data = JSON.parse(fs.readFileSync('./data.json','utf8'))
    }catch(err){
    }finally{
    }
}

module.exports = {
    isKey,
    keyExists,
    put:put,
    get:get,
    getAll:getAll,
    update:update,
    delete:deleteItem,
    clear:clear,
    save:save,
    load:load
}