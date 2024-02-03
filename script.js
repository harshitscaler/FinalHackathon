let ticketArray = [];
if(localStorage.getItem('tickets')){
    ticketArray = JSON.parse(localStorage.getItem('tickets'));
    displayTickets(ticketArray);
    for(let i=0;i<ticketArray.length;i++){
        ticketArray[i].id = i;
        ticketArray[i].isDone = false;
        ticketArray[i].isEditing = false;
    }
}


const postBtn = document.querySelector('.post-btn');
const feedSection = document.querySelector('.feed');
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
      <img src="./assets/edit.png">
      <img class="delete-comment" src="./assets/delete.png">
    </div>
    <div class="feed-content">
      <p>${commentText}</p>
    </div>
    <div class="feed-footer">
      <img class="like" src="assets/heart.png">
      <img class="comment" src="assets/comment.png">
    </div>
  `;
  feedSection.appendChild(newFeedSection);
  textarea.value = '';
  const deleteBtn = newFeedSection.querySelector('.delete-comment');
  deleteBtn.addEventListener('click', () => {
    newFeedSection.remove();
  });
  

  let likeBtn = newFeedSection.querySelector('.like');
  likeBtn.addEventListener('click', () => {
        likeBtn.src = "assets/state_clicked.png";
  });
});

const editBtn = newFeedSection.querySelector('.feed-content');
editBtn.addEventListener('click', () => {
  const feedContent = newFeedSection.querySelector('.feed-content');
  const pElement = feedContent.querySelector('p');
  const newText = prompt('Edit your comment:', pElement.textContent);
  if (newText !== null) {
    pElement.textContent = newText;
  }
});












  

