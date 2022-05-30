interface ErrorContainer {

    [prop: string]: string;
}

const error: ErrorContainer = {
    1: 'Error occured!',
    username: 'Username not valid'
};

const emptyError: ErrorContainer = {};