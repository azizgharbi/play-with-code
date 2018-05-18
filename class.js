class animalsClass{
    constructor(voice){
        this.voice = voice;
    }

    getVoice(){
        console.log("My voice is: " + this.voice);
    }
}

class happyAnimalsClass extends animalsClass {

    constructor(happyVoice,voice){
        super(voice);
        this.happyVoice = happyVoice;
    }

    getHappyVoice(){
        console.log("Your happy voice is: " + this.happyVoice);
    }
}

const dog = new animalsClass("hop hop");

const happyDog = new happyAnimalsClass("happy hop hop","not a hapy voice");

happyDog.getVoice();
happyDog.getHappyVoice();

//dog.getVoice();

//console.log(dog instanceof animalsClass);