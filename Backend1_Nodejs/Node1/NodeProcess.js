//TOPIC 3: Process

//using command line terminal
//>node
//console.log(process.argv);
//>process.version
//>process.release
//process.cwd();
//>process.argv
//>.exit

//USING VS CODE
console.log(process.log);

//using Windows commandLine to run the code in vs code
// C:\Users\Anjali\Desktop\PRACTICE\Web\Node.js>node script.js
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Anjali\\Desktop\\PRACTICE\\Web\\Node.js\\script.js'
// ]

let args = process.argv;
for(let i=2;i<args.length; i++){
    console.log("hello to", args[i]);
}

// C:\Users\Anjali\Desktop\PRACTICE\Web\Node.js>node script.js hello bye
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Anjali\\Desktop\\PRACTICE\\Web\\Node.js\\script.js',
//   'hello',
//   'bye'
// ]

// C:\Users\Anjali\Desktop\PRACTICE\Web\Node.js>node script.js anjali chiky ajay anita
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Anjali\\Desktop\\PRACTICE\\Web\\Node.js\\script.js',
//     'anjali',
//     'chiky',
//     'ajay',
//     'anita'
//   ]
//   hello to anjali
//   hello to chiky
//   hello to ajay
//   hello to anita
  

