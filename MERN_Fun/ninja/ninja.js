class Ninja{
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Ninja's name: " + this.name)
    }
    showStats(){
        console.log("Ninja's name: " + this.name + ". Ninja's health: " + this.health + ". Speed: " + this.speed + ". Stringth: " + this.strength )
    }
    drinkSake(){
        this.health += 10;
        console.log("you drank a shake and gained " + this.health +" on your health.")
    }

  
}  
    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();