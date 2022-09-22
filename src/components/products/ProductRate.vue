<template>
  <div class="rating max-w-[76px] relative">
    <div class="all-star font-bold text-lg text-gray-300">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>
    <div class="star-rate text-yellow-500 font-bold text-lg overflow-hidden absolute z-10 top-0 left-0" :style="{width: rating}">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>
</div>
</template>

<script>
export default {
    props: ['rate'],
    computed: {
        rating() {
            return [this.rate / 5] * 100 + '%';
        }
    }
}
</script>

<style>

</style>