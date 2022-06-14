function renderPage(){
    fetch(`https://gorest.co.in/public-api/comments?post_id=${JSON.parse(localStorage.getItem('article')).id}`)
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {
        console.log(data)
        const title = document.createElement('div')
        const titleName = document.createElement('h1')
        console.log(JSON.parse(localStorage.getItem('article')))
        titleName.textContent = JSON.parse(localStorage.getItem('article')).title
        title.append(titleName)
        document.body.append(title)
    
        const container = document.createElement('div')
        const contText = document.createElement('p')
        const comments = document.createElement('div')
        const commentsName = document.createElement('h2')
        if (data.data.length != 0){
            commentsName.textContent = 'Комментарии: '
            comments.append(commentsName)
        }

        contText.textContent = JSON.parse(localStorage.getItem('article')).body
        for (let item in data.data){
            const commentName = document.createElement('p')
            const commentText = document.createElement('p')
            commentName.textContent = data.data[item].name + ":"
            commentText.textContent = data.data[item].body
            comments.append(commentName)
            comments.append(commentText)
        }
        container.append(contText)
        container.append(comments)
        document.body.append(container)
    })
}

renderPage()