export function renderPost(post) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const content = document.createElement('p');
    const contact = document.createElement('p');

    title.textContent = post.title;
    content.textContent = post.content;
    contact.textContent = post.contact;

    contact.classList.add('post');

    div.append(title, content, contact);

    return div;
}
