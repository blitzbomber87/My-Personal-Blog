document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    
    if (!username || !title || !content) {
        document.getElementById('form-message').textContent = "Please fill out all fields.";
        return;
    }

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    const newPost = { username, title, content };
    blogPosts.push(newPost);
    
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    window.location.href = 'blog.html';
});