<template>
    <div id="register_form" class="container py-5 register_form__container">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre</label>
        <select id="name" class="form-select">
          <option selected>Escoger...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="championship" class="form-label">Campeonato</label>
        <select id="championship" class="form-select">
          <option selected>Escoger...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="category" class="form-label">Categoría</label>
        <select id="category" class="form-select">
          <option selected>Escoger...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="time" class="form-label">Tiempo total competición</label>
        <div class="input-group mb-3">
          <span class="input-group-text">MM:</span>
          <input type="number" class="form-control" aria-label="minutes">
          <span class="input-group-text">SS:</span>
          <input type="number" class="form-control" aria-label="seconds">
        </div>
      </div>
      <div class="col-md-6">
        <label for="golden" class="form-label fw-semibold">Si hubo tiempo de Golden Score, presione aquí:</label>
        <div>
          <p>
            <button class="btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
              Golden Score
            </button>
          </p>
          <div>
            <div class="collapse" id="collapseWidthExample">
              <div class="input-group mb-3">
                <span class="input-group-text">MM:</span>
                <input type="number" class="form-control" aria-label="minutes">
                <span class="input-group-text">SS:</span>
                <input type="number" class="form-control" aria-label="seconds">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 text-center mb-3">
      <button class="btn btn-primary btn-large col-12 col-md-6">
      <a href="javascript:void(0)" class="mx-5 text-white text-decoration-none">
          Siguiente
          </a>
          </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.register_form__container{
    min-height: 100vh;
}


</style>