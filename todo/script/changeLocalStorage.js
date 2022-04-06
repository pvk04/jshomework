export function changeLocalStorage(key) {
    let newArr = [];
    let lis = document.querySelectorAll(".li")
    for (let i = 0; i < lis.length; i++) {
        let p = lis[i].querySelector(".liText");
        if (lis[i].className.includes('item')) {
            newArr.push({ name: p.innerHTML, done: true });
        }
        else {
            newArr.push({ name: p.innerHTML, done: false });
        }
    }
    localStorage.setItem(key, JSON.stringify(newArr));
}