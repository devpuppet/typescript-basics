// lodash is a JS library (not TS) and Typescript compiler emits an error here.
// We have to make Typescript understand that this is JS library and that it can be used
// We have to install @types/lodash. It contains .d.ts files which are declaration files (kind of translation from JS to TS)
// .d.ts files don't contain any logic, they only define types
// @types/* are taken from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
// It is a huge repo where all kinds of @types with declarations files are stored
// Some libraries are shipped with .d.ts files, some are not. Lodash is not so you need to install types yourself.
import _ from '../../node_modules/lodash';

declare var GLOBAL: string; // This is taken from index.html, with this line, typescript compiler won't complain

console.log(_.shuffle([1,2,3,4,5]));

console.log(GLOBAL);