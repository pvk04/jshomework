export async function serverArr(key){
    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json();
    let res = [];
    let ids = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].owner == key){
            res.push(data[i]);
            ids.push(data[i].id);
        }
    }
    return {
        res,
        ids
    }
}