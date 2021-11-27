dt1 = new Date(2045, 0, 1, 0, 0, 0);

dt2 = Date.now() / 1000; 

function getDays(y, m) {
    return new Date(y,m,0).getDate();
}

console.log('Task 18\n\n');
console.log(dt1);
console.log('Task 19\n\n');
console.log(dt2 + ' s');
console.log('Task 20\n\n');
console.log(getDays(2002, 01) + ' days'); // январь
console.log(getDays(2102, 02) + ' days'); // невисокосный февраль
console.log(getDays(2008, 02) + ' days'); // високосный февраль
console.log(getDays(2023, 02) + ' days'); // обычный февраль