const { readTasks} = ('./tasks');
const [,, cmd] = process.argv;

if(!cmd){
    console.log('TaskMaster CLI - usa: node indexedDB.js<comando>');
    
}