<template>
  <div class="placeholder">
    &nbsp;
  </div>
</template>

<script>
export default {
    props: ['height','width']
}
</script>

<style scoped>
.placeholder {
    width: v-bind(width);
    height: v-bind(height);
    background-image: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
    background-size: 200% 100%;
    animation: pulse-bg 1.2s linear infinite;
}
@keyframes pulse-bg {
    0% {
        background-postion: 50% 0;
    }
    100% {
        background-position: -150% 0;
    }
}
</style>