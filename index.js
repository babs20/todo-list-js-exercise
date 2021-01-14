// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed.`);
    },
    completeTask(task) {
      this.complete = true;
    }
  };
  return task
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'Clean it out please.');
const task2 = newTask("Do Laundry", 'Just do you laundry already.');

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed
