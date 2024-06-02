const username = document.getElementById('username');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const submitButton = document.getElementById('submitButton');

let postsArray = []

// Function to initialize 
function init() {
    const savedPosts = JSON.parse(localStorage.getItem('postsArray'));
    if (savedPosts !== null) {
        postsArray = savedPosts;
    }   
}

// Function for storing posts to local storage
function savePosts() {
    localStorage.setItem('postsArray', JSON.stringify(postsArray))
}

// Function for submit button event listener
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

// Function for dark mode toggle
function darkMode() {
    let element = document.body;
    element.classList.toggle('darkMode');
}

init()