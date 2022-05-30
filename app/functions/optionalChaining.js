var _a, _b;
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
console.log("Data without job: " + ((_a = userDataWithoutJob === null || userDataWithoutJob === void 0 ? void 0 : userDataWithoutJob.job) === null || _a === void 0 ? void 0 : _a.title));
console.log("Data with job: " + ((_b = userDataWithJob === null || userDataWithJob === void 0 ? void 0 : userDataWithJob.job) === null || _b === void 0 ? void 0 : _b.title));
//# sourceMappingURL=optionalChaining.js.map