


const navbar = $(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Unit Summaries</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Units
        </a>
        <ul class="dropdown-menu"></ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Other Useful Links</a>
      </li>
    </ul>
    <div class="d-flex justify-content-end colormode-toggle"></div>
  </div>
</div>
</nav>`)

$("div.viewport").prepend(navbar);