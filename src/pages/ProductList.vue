<template>
  <product-category @change-filter="setFilters">
    <input v-model.trim="query" class="md:col-start-4 sm:col-start-auto mt-2 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
  </product-category>
 
  <base-card>
    <div class="grid grid-cols-1 gap-10">
        <div class="container mx-auto">
            <div v-if="isLoading">
                <base-skeleton></base-skeleton>
            </div>
            <div v-else-if="hasProducts" class="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-3 gap-y-5">
                <product-items
                    v-for="item in filteredProductItems"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :price="item.price"
                    :image="item.image"
                    :rate="item.rate"
                    :count="item.count">
                </product-items>
            </div>
            <div v-else class="">
                <p class="text-center">{{ error + " (Something wrong with the api provider)" || "No products found!" }}</p>
            </div>
            <!-- <div v-if="searchResult" class="">
                <p class="text-center">No products found!</p>
            </div> -->
        </div>
    </div>
  </base-card>
</template>

<script>
import BaseSkeleton from '@/components/ui/BaseSkeleton.vue'
import ProductCategory from '../components/products/ProductCategory.vue'
import ProductItems from '../components/products/ProductItems.vue'

export default {
    components: {
        ProductCategory,
        ProductItems,
        BaseSkeleton,
    },
    data() {
        return {
            query: null,
            noItemFound: false,
            error: null,
            isLoading: false,
            activefilters: {
                electronics: true,
                jewelry: true,
                mensClothing: true,
                womensClothing: true,
            },
        }
    },
    computed: {
        deleteItem() {
             const deleted =this.$store.getters.deletedProduct;
             return deleted || 0;
        },
        filteredProductItems() {
            const products = this.$store.getters.products;
            if (this.query) {
                return products.filter(product => {
                    if (product.title.toLowerCase().includes(this.query.toLowerCase())) {
                        return true;
                    }
                })
            } else {
                return products.filter(product => {
                if (this.activefilters.electronics && product.category === 'electronics') {
                    return true;
                }
                if (this.activefilters.jewelry && product.category === 'jewelery') {
                    return true;
                }
                if (this.activefilters.mensClothing && product.category === "men's clothing") {
                    return true;
                }
                if (this.activefilters.womensClothing && product.category === "women's clothing") {
                    return true;
                }
                return false;
            });
            }
            
        },
        hasProducts() {
            return !this.isLoading && this.$store.getters.hasProducts;
        },
    },
    created() {
        this.loadProducts()
    },
    methods: {
        async loadProducts() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('loadProducts');
            } catch(error) {
                this.error = error.message || "Something went wrong!"
            }
            this.isLoading = false;
        },
        setFilters(updatedFilters) {
            this.activefilters = updatedFilters;
        },
    }
}
</script>

<style scoped>
.divider {
    grid-template-columns: 22% auto;
}
ul li {
    display: inline-block;
    padding: 10px;
    text-align: left;
    text-transform: capitalize;
    margin-right: 20px;
    text-align: center;
}
.router-link-exact-active {
    border-bottom: 2px solid b-;
}
</style>