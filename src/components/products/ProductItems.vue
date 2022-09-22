<template>
 
  <div class="product-items p-3 bg-white shadow-md hover:shadow-lg hover:border hover:border-orange-300 relative">
    <router-link :to="productLink">
        <div class="p-4 max-h-[250px] min-h-[250px] relative flex justify-center items-center">
            <img class="max-h-[200px] w-auto" :src="image" alt="" />
        </div>
        <div class="details">
            <p class="title font-bold min-h-[48px]">{{ title }}</p>
            <p class="text-orange-500 text-lg font-semibold py-1">$ {{ price }}</p>
            <div class="grid grid-cols-2 items-center">
                <product-rating :rate="rate"></product-rating>
                <p class="text-sm text-zinc-500 text-right">({{ count }})</p>
            </div>
        </div>
    </router-link>
    <base-button class="absolute top-0 right-0" @click="deleteProduct">
        <img class="invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEMSURBVDiNlZIxbgJBDEWfw0qpQmhT5wKpIopcgYLcKidBlFE6GppUuQIFdKAgEIgqAtYp9g9rllXIWrLGY397vsfG3YkKZMAI2FR0BGRVfAZgZrfAA4U8A3fAE+cyAF7N7Ev3ubv/pFcngDfUyYkBMAReaCafAObumFkL6DUs8OHux9SCAQdR2wMz2StgLXuqmAtr7k78/YWCY6Av+03q8o1lL1LeTaC01NmmGBuUH4Z87Qr2rMC3zk4oEGWjWMTWMvhPgT8Z3APbmgJbxa4yaAE5Ze/IzhW7ygCKVd6F+06+C2wWnMtgP1LMPFHey3eJDXvQpRxbWpijNPoc6J7yQgED3kP/dZoLYynvF+X3sugAF9P/AAAAAElFTkSuQmCC" alt="">
    </base-button>
  </div>


</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import ProductRating from './ProductRate.vue'

export default {
    emits: ['delete-product'],
    components: {
        ProductRating,
        BaseButton,
    },
    props: ['id','title','price', 'image', 'rate', 'count'],
    computed: {
        productLink() {
            return this.$route.path + '/' + this.id;
        }
    },
    methods: {
        deleteProduct() {
            this.$store.dispatch('deleteProducts', this.id);
            this.$emit('delete-product')
        }
    }
}
</script>

<style scoped>
.title {
    display: -webkit-box;
    max-width: 100%;
    margin: 0 auto;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.product-items:hover {
    scale: 1.01;
}
</style>