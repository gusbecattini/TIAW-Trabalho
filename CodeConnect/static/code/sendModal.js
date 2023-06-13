function GetModal(event) {
    event.preventDefault();
    var textareaValue = document.getElementById('myTextarea1').value;
    localStorage.setItem('textareaValue1', textareaValue);
    if(textareaValue !== null) {
      var modalPostElement = document.getElementById('modalPost');
      modalPostElement.textContent = textareaValue;
    }
    var modalElement = document.getElementById('modal');
    modalElement.style.display = 'block';
    window.location.href = 'postagens.html';
  } document.getElementById('modalPost').addEventListener('submit', GetPost);
