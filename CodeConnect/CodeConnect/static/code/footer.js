// Define o conteúdo do rodapé
var footerContent = `
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 my-5 px-5">
          <img src="../images/icone.png" width="100px">
        </div>

        <div class="col-md-4 my-5">
          <p>Acompanhe-nos!</p>
          <i class="bi bi-instagram m-1" style="font-size: 25px;"></i>
          <i class="bi bi-twitter m-1" style="font-size: 25px;"></i>
          <i class="bi bi-facebook m-1" style="font-size: 25px;"></i>
          <i class="bi bi-youtube m-1" style="font-size: 25px;"></i>
          <i class="bi bi-github m-1" style="font-size: 25px;"></i>
        </div>

        <div class="col-md-4 my-5 d">
          <p>Assine nossa <b>NewsLetter</b></p>
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <div class="row">
            <div class="col-12 d-flex">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style="max-width: fit-content;">
              <button type="button" class="btn btn-light mx-2" style="left: 0;">Inscreva-se</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

// Adiciona o conteúdo do rodapé à página
var footer = document.getElementById("footer");
footer.innerHTML = footerContent;
