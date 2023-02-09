interface TasksInterface{
words: string[];
addTask(task:string):number;
listAllTasks();
deleteTask(task:string);
}

class Tasks implements TasksInterface{

constructor()
{

}

words: string[] = ["Apples", "Bannana", "Orange", "Melon"];
addTask(task:string):number{
    this.words.push(task);
    console.log("The word " + task + " has been added to the array");
    return this.words.length;;
}

listAllTasks() {
    for(let i = 0; i < this.words.length; i++)
    {
        console.log(this.words[i]);
    }
}

deleteTask(task:string):number
{
let index:number = this.words.indexOf(task);    
this.words.splice(index,1);

return this.words.length;



}




}

let myTasks = new Tasks();
myTasks.addTask("Potatoe")
myTasks.listAllTasks();
myTasks.deleteTask("Apples");
myTasks.listAllTasks();