// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task} </li>

//     )
// }

// export default function ToDo({task, isDone, time}) {
//   if (isDone === true) {
//     return <li>Done: {task} Duration: {time}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDo({task, isDone, time=0}){
//     return isDone ? <li>Done: {task} duration: {time}</li> : <li>not done: {task}</li>
// }

// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Done: {task} Duration: {time}</li>
// }

export default function ToDo({task, isDone, time=0}){
    return isDone || <li>Not Done: {task} Duration: {time}</li>
}