let words: string[] = ["Apples", "Bannana", "Orange", "Melon"];



function addTask(task:string):number
{
words.push(task);
console.log("The word " + task + " has been added to the array");
return words.length;;

}

function listAllTasks()
{
    for(let i = 0; i < words.length; i++)
    {
        console.log(words[i]);
    }

    
}

function deleteTask(task:string):number
{
let index:number = words.indexOf(task);    
words.splice(index,1);

return words.length;



}

addTask("Potatoe");
listAllTasks();
deleteTask("Apples");
listAllTasks();
