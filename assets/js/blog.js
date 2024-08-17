document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);
        
        const postAuthor = document.createElement('p');
        postAuthor.textContent = `By: ${post.username}`;
        postElement.appendChild(postAuthor);
        
        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);
        
        postsContainer.appendChild(postElement);
    });
    
    document.getElementById('toggle-theme').addEventListener('click', function() {
        document.body.classList.toggle('darkMode');
    });
    
    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});