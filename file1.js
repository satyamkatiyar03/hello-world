
const names = ["Jack","Ana","Sam","Tim","Julia","jill"];
const ch = 'A';
let name1 = names.find(function(name){
    return isString(name,ch);
});
console.log("Find",name1);
let index = names.findIndex(function(name){
    return isString(name,ch);
});
console.log("Index",index);
let arr = names.filter(function(name){
    return isString(name,ch);
});
console.log("Filter",arr);
function isString(name,start){
    return name[0]==start;
}