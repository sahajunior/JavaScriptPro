const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
  try {
    const response = await fetch(BASE_URL);
    const posts = await response.json();
    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = posts.map((post) => createPost(post)).join('');
  } catch (e) {
    console.log('Error occured in getting posts from the API.', e);
  }
}

async function addPost(e) {
  e.preventDefault();
  const title = document.getElementById('new-post-title').value;
  const body = document.getElementById('new-post-body').value;
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-type': 'application/json' },
    });

    const newPost = await response.json();
    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = createPost(newPost) + postContainer.innerHTML;
    document.getElementById('new-post-title').value = '';
    document.getElementById('new-post-body').value = '';
  } catch (error) {
    console.error('Error while adding post.', error);
  }
}

function createPost(post) {
  return `<div class="post">
        <div class="post-content">
          <div class="post-title">${post.title}</div>
          <div class="post-body">${post.body}</div>
        </div>
      </div>`;
}

document.getElementById('post-form').addEventListener('submit', addPost);

getPosts();
