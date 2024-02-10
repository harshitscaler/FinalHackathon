const postBtn = document.querySelector('.post-btn');
const feedSection = document.querySelector('.feed-section');

function saveSuper() {
  localStorage.setItem('super', JSON.stringify(document.querySelector('.feed-section').innerHTML));
}

function loadSuper() {
  if (localStorage.getItem('super')) {
    document.querySelector('.feed-section').innerHTML = JSON.parse(localStorage.getItem('super'));
  }
}

loadSuper();

postBtn.addEventListener('click', () => {
    const textarea = document.querySelector('.textarea-cont');
    const commentText = textarea.value;

    const newFeedSection = document.createElement('div');
    newFeedSection.className = 'feed-section';
    newFeedSection.innerHTML = `
        <div class="feed-heading">
            <img src="/assets/profile_image.png">
            <h4>Joanne Graham</h4>
            <p>@JoanneGraham123</p>
            <img class="edit-post-btn" src="./assets/edit.png">
            <img class="delete-comment" src="./assets/delete.png">
        </div>
        <div class="feed-content">
            <p>${commentText}</p>
        </div>
        <div class="feed-footer">
        <img class="heart" src="assets/heart.png">
            <img class="create-comment" src="assets/comment.png">
        </div>
        <div class="comment-section" style="display: none;">
            <textarea class="comment-textarea" placeholder="Write a comment"></textarea>
            <button class="comment-btn">Comment</button>
        </div>
    `;
    feedSection.appendChild(newFeedSection);
    textarea.value = '';

    saveSuper();

    const commentCreateBtn = newFeedSection.querySelector('.create-comment');
    commentCreateBtn.addEventListener('click', () => {
      if (newFeedSection.querySelector('.comment-section').style.display === 'block') {
      saveSuper();
        newFeedSection.querySelector('.comment-section').style.display = 'none';
      } else {
        newFeedSection.querySelector('.comment-section').style.display = 'block';
      }
    })


    const heartBtn = newFeedSection.querySelector('.heart');
    heartBtn.addEventListener('click', () => {
      saveSuper();
      if(heartBtn.src.endsWith('heart.png')){
          heartBtn.src = heartBtn.src.replace('heart.png', 'state_clicked.png');
        }
        else{
          heartBtn.src = heartBtn.src.replace('state_clicked.png', 'heart.png');
        }
  
    });

    const deleteBtn = newFeedSection.querySelector('.delete-comment');
    deleteBtn.addEventListener('click', () => {
      saveSuper();
      newFeedSection.remove();
    });

    const editBtn = newFeedSection.querySelector('.edit-post-btn');
    editBtn.addEventListener('click', () => {
      saveSuper();
      const feedContent = newFeedSection.querySelector('.feed-content');
        const pElement = feedContent.querySelector('p');
        const newText = prompt('Edit your comment:', pElement.textContent);
        if (newText !== null) {
            pElement.textContent = newText;
        }
    });

    const commentBtn = newFeedSection.querySelector('.comment-btn');
    commentBtn.addEventListener('click', () => {
      saveSuper();
      const commentTextarea = newFeedSection.querySelector('.comment-textarea');
        const commentText = commentTextarea.value.trim();
        if (commentText !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            newFeedSection.appendChild(newComment);
            commentTextarea.value = '';
        }
    });
});

document.addEventListener('keydown', (event) => {
  if (event.key === '\x00') {
    localStorage.clear();
    location.reload();
  }
})
