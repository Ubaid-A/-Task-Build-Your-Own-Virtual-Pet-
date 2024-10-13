var petName = prompt("Enter your pet's name:");
var petType = prompt("What type of pet is it? (e.g., dog, cat, etc.):");
var petAge = Number(prompt("Enter your pet's age:"));

let pet = {
    name: petName,
    type: petType,
    age: petAge,
    happiness: 80,
    hunger: 50,
    
    feed: function() {
        this.hunger = this.hunger - 20 < 0 ? 0 : this.hunger - 20;
        alert(this.name + " was fed! Hunger: " + this.hunger);
    },

    play: function() {
        this.happiness = this.happiness + 20 > 100 ? 100 : this.happiness + 20;
        alert(this.name + " played! Happiness: " + this.happiness);
    },
    agePet: function() {
        this.age += 1;
        this.happiness = this.happiness - 5 < 0 ? 0 : this.happiness - 5;
        this.hunger += 10;
        alert(this.name + " is now " + this.age + " years old. Happiness: " + this.happiness + ", Hunger: " + this.hunger);
    },

    showName: function() {
        alert("Your pet's name is " + this.name);
    },

    showType: function() {
        alert("Your pet is a " + this.type);
    },

    showAge: function() {
        alert("Your pet is " + this.age + " years old");
    }
};
alert("Welcome! Your pet is a " + pet.type + " named " + pet.name + ".");
    
pet.feed();
pet.play();
pet.agePet();

