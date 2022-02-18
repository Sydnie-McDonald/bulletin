import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render.js';

const bulletinBoard = document.getElementById('bulletin-board');
const loginButton = document.getElementById('login');
const postButton = document.getElementById('post');

// if user currently logged in, redirect
window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) {
        loginButton.addEventListener('click', logout);
        loginButton.textContent = 'Logout';
    } else {
        loginButton.addEventListener('click', () => {
            location.replace('/authenticate');
        });
        loginButton.textContent = 'Login';
    }

    postButton.addEventListener('click', () => {
        location.replace('/post');
    });

    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPost(post);
        bulletinBoard.append(postDiv);
    }
});
