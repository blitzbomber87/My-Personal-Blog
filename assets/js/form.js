const username = document.getElementById('username');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const submitButton = document.getElementById('submitButton');

let postsArray = []

function init() {
    const savedPosts = JSON.parse(localStorage.getItem('postsArray'));
    if (savedPosts !== null) {
        postsArray = savedPosts;
    }   
}

function savePosts() {
    localStorage.setItem('postsArray', JSON.stringify(postsArray))
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  //console.log('test')
    
    const blogPost = {
        username: username.value.trim(),
        blogTitle: blogTitle.value.trim(),
        blogContent: blogContent.value.trim(),
    };

    if (username.value === '' || blogTitle.value === '' || blogContent.value === ''){alert('Input username, blog title or blog content to continue.')
        return false;
    }
    else{
        postsArray.push(blogPost)
        console.log(postsArray)
        username.value = '';
        blogTitle.value = '';
        blogContent.value = '';
    }

    savePosts();

    location.href='/blog.html';
});

function darkMode() {
    let element = document.body;
    element.classList.toggle('darkMode');
}

init()