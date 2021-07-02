import Vue from 'vue'

const miMixin = {
    computed : {
    isWinner() {
            return this.$store.state.message === 'You Picked Right!'
        },    
    },
}

Vue.mixin(miMixin)