export class Ingredient {
    public name : string;
    public amount : number;

    constructor(name : string , amount : number){
        this.name = name;
        this.amount = amount; 
    }


}


//FOR SHORTCUT WE CAN WRITE THE SAME CODE IN THIS MANNER.

// export class Ingredient1 {
//     constructor ( public name1 : string , public amount1 : number){

//     }
// }