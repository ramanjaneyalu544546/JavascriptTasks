function asyncTask(name, delay, shouldReject) {
    return new Promise((resolve, reject) => {
       try{
       setTimeout(() => {
            if (shouldReject) {
                reject(`Task [${name}] failed`);
            } else {
                resolve(`Task [${name}] completed`);
            }
        }, delay);
   
} catch (error) {
    reject(new Error(`Task [${name}] encountered an error: ${error.message}`));
}
});
}


asyncTask("1", 1000,false)
    .then(message => console.log(message))
    .catch(error => console.error(error));

asyncTask(" 2",2000, true)
    .then(message => console.log(message))
    .catch(error => console.error(error));



const task1 = asyncTask("Task 1", 1000, true);
const task2 = asyncTask("Task 2", 2000, false);
const task3 = asyncTask("Task 3", 3000, false);

// Run all tasks simultaneously using Promise.all
Promise.all([task1, task2, task3])
    .then(results => {
        console.log("All tasks completed successfully:");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.error("One or more tasks failed:");
        console.error(error);
    });
//promise allsettled
    Promise.allSettled([task1, task2, task3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Task ${index + 1} succeeded with: ${result.value}`);
            } else {
                console.error(`Task ${index + 1} failed with: ${result.reason}`);
            }
        });
    });