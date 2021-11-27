console.log('Task 15\n\n');


function Card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        return `${this.from},${this.to}`;
    }
}

c1 = new Card('Екатеринбург','Москва');
console.log(c1.show());
