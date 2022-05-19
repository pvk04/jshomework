export function serverDelete(id){
    fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE'
    })
}