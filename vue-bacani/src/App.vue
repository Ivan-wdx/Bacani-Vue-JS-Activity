<script setup lang="ts"> import ProductCard from './components/ProductCard.vue' </script> <template> <div class="container my-5"> <header class="mb-4"> <h1 class="fw-bold text-dark">Our Products</h1> <p class="text-secondary"> Demonstrating component reuse and props configuration. </p> </header>
<div class="row g-3">
  <div class="col-md-4">
    <ProductCard
      title="Mechanical Keyboard"
      price="89.99"
      description="Hot-swappable RGB wireless mechanical keyboard."
    />
  </div>

  <div class="col-md-4">
    <ProductCard
      title="Ergonomic Mouse"
      price="49.99"
      description="Vertical wireless mouse designed for comfort."
    />
  </div>

  <div class="col-md-4">
    <ProductCard
      title="Ultrawide Monitor"
      price="349.99"
      description="34-inch curved QHD display for multitasking."
    />
  </div>
</div>

</div> </template>
