import { checkAuth, createPost, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
    location.replace('/');
});

const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postForm);
    console.log(data);
    await createPost({
        title: data.get('title'),
        content: data.get('content'),
        contact: data.get('contact'),
    });
    location.replace('/bulletin');
});
