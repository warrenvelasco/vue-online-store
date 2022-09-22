<template>
   <base-card>
   <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
    <h1 class="text-2xl text-orange-600 font-semibold">Categories</h1>
      <slot></slot>
   </div>
    <div class="filters mt-5 grow">
        <div class="filter-options mb-1">
        <input class="invisible" type="checkbox" id="electronics" checked @change="setFilter">
        <label class="cursor-pointer select-none ml-5 uppercase" for="electronics">Electronics</label>
        </div>
        <div class="filter-options mb-1">
          <input class="invisible" type="checkbox" id="jewelry" checked @change="setFilter">
          <label class="cursor-pointer select-none ml-5 uppercase" for="jewelry">Jewelry</label>
        </div>
        <div class="filter-options mb-1">
          <input class="invisible" type="checkbox" id="mensClothing" checked @change="setFilter">
          <label class="cursor-pointer select-none ml-5 uppercase" for="mensClothing">Men's Clothing</label>
        </div>
        <div class="filter-options mb-1">
          <input class="invisible" type="checkbox" id="womensClothing" checked @change="setFilter" />
          <label class="cursor-pointer select-none ml-5 uppercase" for="womensClothing">Women's Clothing</label>
        </div>
    </div>
   </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        electronics: true,
        jewelry: true,
        mensClothing: true,
        womensClothing: true,
      },
    }
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      }
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style>
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(170px,1fr));
}
label {
  position: relative;
}
input[type="checkbox"] + label::before {
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 1px;
  left: -30px;
  border-radius: 2px;
  border: 1px solid #ea580c;
}
input[type="checkbox"] + label::after {
  content: '✓';
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  top: 1px;
  left: -30px;
  border-radius: 2px;
  background: #ea580c;
  color: #fff;
  border: 1px solid #ea580c;
  text-align: center;
  line-height: 1;
  display: none;
}
input:checked + label::after {
  display: block;
}
</style>