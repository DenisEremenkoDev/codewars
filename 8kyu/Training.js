function animal(obj) {


    return `This ${obj.color}, ${obj.name} has ${obj.legs} legs`

}


const dog = { name: "dog", legs: 4, color: "white" };
console.log(animal(dog)); // "This white dog has 4 legs."




// Дайте вам функцию animal, примите 1 параметр: obj, например:
// {name:"dog",legs:4,color:"white"}

// и вернуть строку вроде этой

// "This white dog has 4 legs."

// «У этой белой собаки 4 ноги».