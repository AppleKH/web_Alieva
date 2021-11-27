let city1 = {};
city1.name = 'ГородN';
city1.population = 10**6;
city1.getName = getName,
city1.exportStr = exportStr,
city1.getCity = getObj;

let city2 = {
    name: 'ГородM',
    population: 1e6,
    getName: getName,
    exportStr: exportStr,
    getCity: getObj,
}

function getObj(){
    return this;
}
function getName(){
    return this.name;
}
function exportStr(){
    s = '';
        for (let key in this){
            if (typeof this[key] != 'function'){
                s += key + '=' + this[key] + '\\';
            }
        }
        s+='n';
        return s;
}

console.log('Task 3\n\n');
console.log(city1.getName(), city2.getName());
console.log('Task 4\n\n');
console.log(city1.exportStr(), city2.exportStr());
console.log('Task 5\n\n');
console.log(city1.getCity(), city2.getCity());
