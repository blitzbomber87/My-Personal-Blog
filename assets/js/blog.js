const postList = document.querySelector('#bPosts');
const backButton = document.querySelector('#backButton')

let posts = []

function renderPosts() {
    postList.textcontent = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const li = document.createElement('li');
        li.textContent = post[i];

        const h2 = document.createElement('h2');
        h2.innerText = post.title;

        const p = document.createElement('p');
        p.textContent = post.content;

        const h3 = document.createElement('h3');
        h3.innerText = post.usrname;

        postList.append(li);
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(h3);
    }
}

function init() {
    const savedPosts = JSON.parse
    (localStorage.getItem('postsArray'));

    if (savedPosts !== null) {
        posts = savedPosts;
    }
    renderPosts();
}

function savePosts() {
    localStorage.setItem('posts', JSON.stringify(postsArray))
}

function darkMode(){
    let element = document.body;
    element.classList.toggle('darkMode')
}

init()