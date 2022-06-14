(function(){
    let url = new URL(location.href)
    let page = ''
    console.log(url)
    console.log(isNaN((url.searchParams).get('page')))
    if (!isNaN((url.searchParams).get('page'))){
        page = `${(url.searchParams).get('page')}`
    }
    else{
        page = ''
    }

    function renderTitles(page = ''){
        if (page == ''){
            
        }
        fetch(`https://gorest.co.in/public-api/posts?page${page}`)
        .then((responce) => {
            return responce.json();
        })
        .then((data) => {
            console.log(data)
            const container = document.querySelector('.container')
            const ul = document.createElement('ul')
            for (let item in data.data){
                const li = document.createElement('li')
                const a = document.createElement('a')
                a.href = 'article.html'
                a.id = data.data[item].id
                a.textContent = data.data[item].title
                a.addEventListener('click', ()=>{
                    localStorage.setItem('article', JSON.stringify(data.data[item]))
                })
                li.append(a)
                ul.append(li)
            }
            container.append(ul)

            const footer = document.createElement('div')
            footer.className = 'footer'
            const pages = document.createElement('div')
            pages.className = 'pages'
            for(let num = 0; num < 5; num++){
                const p = document.createElement('a')
                p.id = num
                switch(num){
                    case 0:
                        if (page != ''){
                            p.textContent = Number(page)-1
                            p.href = `./index.html?page=${page-1}`
                        }
                        break
                    case 1:
                        if (page != ''){
                            p.textContent = page
                        }
                        else{
                            p.textContent = 1
                        }
                        break
                    case 2:
                        if (page != ''){
                            p.textContent = Number(page)+1
                            p.href = `./index.html?page=${page+1}`
                        }
                        else{
                            p.textContent = 2
                            p.href = `./index.html?page=${2}`
                        }
                        break
                    case 3:
                        p.textContent = '...'
                        break
                    case 4:
                        p.textContent = data.meta.pagination.pages
                        break
                }
                pages.append(p)
            }
            footer.append(pages)
            container.append(footer)
        })
    };
    renderTitles(page);
})();