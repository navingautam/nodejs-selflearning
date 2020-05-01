//console.log(process.pid);
//console.log(process.versions.node);
//console.log(process.argv);
//const [, , firstName, lastName] = process.argv;

//console.log(`Your name is ${firstName} ${lastName}`);
const grab = flag => {
    let indexAterfFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAterfFlag];
}
const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)