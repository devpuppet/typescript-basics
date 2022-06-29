// solution 1
// const userInput = <HTMLInputElement>document.getElementById('user-input'); 

// solution 2, exclamation mark tells TS that the document.getElementById('user-input') won't be null
const userInput = document.getElementById('user-input')! as HTMLInputElement; 

userInput.value = 'User input message';