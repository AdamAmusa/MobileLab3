var Tasks = /** @class */ (function () {
    function Tasks() {
        this.words = ["Apples", "Bannana", "Orange", "Melon"];
    }
    Tasks.prototype.addTask = function (task) {
        this.words.push(task);
        console.log("The word " + task + " has been added to the array");
        return this.words.length;
        ;
    };
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.words.length; i++) {
            console.log(this.words[i]);
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.words.indexOf(task);
        this.words.splice(index, 1);
        return this.words.length;
    };
    return Tasks;
}());
var myTasks = new Tasks();
myTasks.addTask("Potatoe");
myTasks.listAllTasks();
myTasks.deleteTask("Apples");
myTasks.listAllTasks();
