<template>
    <fill v-if="$store.state.fullscreen" class="fullscreen">
        <button @click="closeFullscreen()" class="round-big">
            <img src="../assets/fullscreen.png" />
        </button>
        <fill :style="{'background-image': $store.state.image}" />
    </fill>
</template>

<script>
export default {
    name: 'fullscreen',
    methods: {
        closeFullscreen() {
            this.$store.commit('setFullscreen', false);
        }
    }
}
</script>

<style scoped>
    .fullscreen {
        position: fixed !important;
        background-color: rgba(0,0,0,0.7);
        z-index: 10000;
        animation-name: fadeIn;
        animation-duration: 0.3s;
    }

    @keyframes fadeIn {
        from {opacity: 0}
        to {opacity: 1}
    }

    .fill {
        background-repeat: no-repeat;
        background-position:center;
        background-size: contain;
    }
    button {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10001;
    }
    button img {
        width: 50%;
        height: 50%;
    }
</style>