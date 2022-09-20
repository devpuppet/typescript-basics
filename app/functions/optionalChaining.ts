const userDataWithoutJob = {
    id: "1",
    name: "Kamil"
};

const userDataWithJob = {
    id: "1",
    name: "Kamil",
    job: {
        title: "Dev"
    }
};

// console.log("Data without job: " + userDataWithoutJob?.job?.title);
console.log("Data with job: " + userDataWithJob?.job?.title);