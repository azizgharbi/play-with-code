function sayMe() {
    this.name = 'aziz';
    return function hello() {
        let self = this;
        self.age = '26';
        //console.log(this.age);
        return this.name;
    };
}

function sayYou() {
    this.name = 'sam';
    return () => {
        let self = this;
        self.age = '28';
        //console.log(this.age);
        return this.name;
    };
}

const foo = sayMe()();

const bar = sayYou()();

console.log(bar);
console.log(foo);

let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound);
    },
};

dog.talk();

let talkFunction = dog.talk;

talkFunction();
