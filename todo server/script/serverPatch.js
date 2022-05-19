export function serverPatch(id, status){
    fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            done: status
        })
    })
}