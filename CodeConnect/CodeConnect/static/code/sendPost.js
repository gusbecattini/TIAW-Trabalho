function GetPost(event) {
    event.preventDefault();
    var textareaValue = document.getElementById('textarea1').value;
    localStorage.setItem('textareaValue', textareaValue);
    window.location.href = 'profile.html';
  } document.getElementById('postUser').addEventListener('submit', GetPost);
