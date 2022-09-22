<template>
  <base-card>
    <div v-if="isLoading" class="grid">
       <animated-plate width="auto" height="300px"></animated-plate>
        <div class="bg-white p-4 shadow-sm pl-8">
            <animated-plate class="mb-5" width="100%" height="100px"></animated-plate>
            <animated-plate class="mb-5" width="100%" height="30px"></animated-plate>
            <animated-plate class="mb-5" width="100%" height="30px"></animated-plate>
            <animated-plate width="100%" height="40px"></animated-plate>
        </div>
        <button></button>
    </div>
    <div v-else>
        <div class="grid">
            <div class="bg-white p-2 shadow-sm">
                <img class="max-h-[300px] w-auto h-auto block mx-auto" :src="image" alt="">
            </div>
            <div class="bg-white p-4 shadow-sm pl-8">
                <p class="text-orange-600 text-2xl mb-5 font-bold">{{ title }}</p>
                <p class="text-gray-700 text-md mb-5">{{description}}</p>
                <div class="flex mb-5">
                    <product-rate :rate="rate"></product-rate>
                    <p class="text-gray-500 relative top-[2px] left-3">({{count}})</p>
                </div>
                <p class="text-orange-600 text-4xl font-bold">$ {{price}}</p>
            </div>
        </div>
        <!-- <div class="flex justify-end mt-3">
            <base-button class="mr-3" @click="deleteProduct">Delete this product</base-button>
            <base-button @click="updateProduct">Update this product</base-button>
        </div> -->
    </div>

  </base-card>
</template>

<script>
import ProductRate from './ProductRate.vue';
import AnimatedPlate from '../ui/AnimatedPlate.vue';
export default {
    components: {
        ProductRate,
        AnimatedPlate
    },
    props: ['id'],
    data() {
        return {
            error: false,
            isLoading: false,
            selectedProduct: null,
        }
    },
    computed: {
        title() {
            return this.selectedProduct.title;
        },
        description() {
            return this.selectedProduct.description;
        },
        count() {
            return this.selectedProduct.rating.count;
        },
        price() {
            return this.selectedProduct.price;
        },
        rate() {
            return this.selectedProduct.rating.rate;
        },
        image() {
            return this.selectedProduct.image;
        }
    },
    created() {
        this.loadsSelectedProduct();
    },
    methods: {
        async loadsSelectedProduct () {
            this.isLoading = true;
            const response = await fetch(`https://fakestoreapi.com/products/${this.id}`);
            const responseData = await response.json();

            if (!response.ok) {
              // error
            }

            this.selectedProduct = responseData;
            this.isLoading = false
        },
    }
}
</script>

<style scoped>
.grid {
    grid-template-columns: 300px auto;
    grid-column-gap: 20px;
}
</style>