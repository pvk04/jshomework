export function serverPost(obj, key){
    fetch("http://localhost:3000/api/todos", {
        method: 'POST',
        body: JSON.stringify({
            owner: key,
            name: obj.name,
            done: false
        })
    })
}