
const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['Color: Red', 'Size: M', 'Material: Cotton'],
            reviews: []
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            if(this.cart.length > 0) {
                console.log(this.cart.length);

                this.cart = this.cart.filter(item => item !== id);
            }
        }
    }
})
