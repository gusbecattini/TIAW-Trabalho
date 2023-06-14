// Define o conteúdo do cabeçalho
var headerContent = `
  <!--Cabeçalho nav-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <img src="../images/logo_nbg.png" width="140px">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-3" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sobre.html">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="postagens.html">Categorias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Login.html">Sign in</a>
                </li>
            </ul>
            <div style="display:flex;">
                <form class="col-10 d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn btn-outline-dark" type="submit">Search</button>
                </form>
                <a href="profile.html" style="color:#31313b;"><i class="bi bi-person m-3" style="font-size:25px;"></i></a>
            </div>
        </div>
    </div>
    </nav>
`;

// Adiciona o conteúdo do cabeçalho à página
var header = document.getElementById("header");
header.innerHTML = headerContent;