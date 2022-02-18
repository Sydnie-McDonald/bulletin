import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render.js';
const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');


// if user currently logged in, redirect
window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) {
        authButton.addEventListener('click', logout);
        authButton.textContent = 'Logout';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth');
        });
        authButton.textContent = 'Login';
    }

    createButton.addEventListener('click', () => {
        location.replace('/create');
    });

    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPost(post);
        bulletin.append(postDiv);
    }
});
