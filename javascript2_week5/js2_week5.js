//Task 1

let numbers = [1, 2, 3, 4];

var oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("The odd numbers of the array are: ", oddNumbers);

const doubledNumbers = oddNumbers.map(x => x * 2);

console.log("After being doubled, the odd numbers become: " , doubledNumbers);


//Task 2

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);
console.log(tasks);


//1. Collect two days' worth of tasks
let MondayTasks = monday.map(monday => monday.name);
console.log("The Monday tasks are: ", MondayTasks);

let TuesdayTasks = tuesday.map(tuesday => tuesday.name);
console.log("The Tuesday tasks are: ", TuesdayTasks);

let bothDaysTasks = MondayTasks + TuesdayTasks;

console.log("The tasks for Monday and Tuesday are: ",  bothDaysTasks);


//2. Convert the task durations to hours, instead of minutes

allTasksInHours = (task) => task.duration /= 60;
tasks.map(allTasksInHours);
console.log(tasks);


//3. Filter out everything that took two hours or more (remove from the collection)
let smallDurationTasks = tasks.filter(task => task.duration < 2);
console.log(smallDurationTasks);


//4. Multiply each duration by a per-hour rate for billing and sum it all up
let salary = tasks.map(bill => bill.duration * 30);
console.log(salary);

var sum = 0;
salary.forEach(allTheMoney);

function allTheMoney(bill){
    sum += bill;
}

console.log(sum);


//5. Output a formatted Euro amount

console.log("The total amount of money earned is", sum + "€");
