<template>
    <div id="footbar" class="relative" @click="credits()">
        <background />
        Copyright MIT Services 2020. Click Here for Attributions and Credits.
    </div>
</template>
<script>
export default {
    name: 'footbar',
    methods: {
        credits() {
            this.$router.push('/credits');
        }
    }
}
</script>
<style scoped>
    .background {
        background-color: #151516;
    }
    #footbar {
        color: rgb(236, 236, 236);
        display: inline-block;
        height: auto !important;
        right: 0 !important;
        font-size: 0.8em;
        width: 100%;
        cursor: pointer;
    }
</style>