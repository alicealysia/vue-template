<template>
    <div>
    </div>
</template>
<script>
export default {
    name: 'container'
}
</script>
<style scoped>
    div {
        width: 100%;
    }
    @media (orientation: landscape) and (min-width: 1281px) {
        div {
            height: calc(60px + 1.68rem);
        }
    }
    @media (orientation: portrait), (max-width: 1280px) {
        div {
            height: 3em;
        }
    }
</style>