export function renderPost(post) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const content = document.createElement('p');
    const contact = document.createElement('p');
    div.classList.add('post');


    title.textContent = post.title;
    content.textContent = post.content;
    contact.textContent = post.contact;

    contact.classList.add('contact');

    div.append(title, content, contact);

    return div;
}
