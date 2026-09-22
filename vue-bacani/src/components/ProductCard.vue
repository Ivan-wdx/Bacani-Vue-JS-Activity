<script setup lang="ts">
// Declare incoming arguments (props) and their expected data types
defineProps({
  title: String,
  price: String,
  description: String
})
</script>

<template>
  <div class="card shadow-sm h-100">
    <div class="card-body">
      <!-- Interpolate prop variables using double curly braces -->
      <h5 class="card-title text-primary">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${{ price }}</h6>
      <p class="card-text">{{ description }}</p>

      <button class="btn btn-outline-primary btn-sm">
        View Details
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 8px;
}
</style>
