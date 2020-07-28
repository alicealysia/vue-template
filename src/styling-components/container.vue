<template>
    <div class='container'>
        <slot>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'container'
}
</script>
<style>
@media (orientation: landscape) and (min-width: 1281px) {
    .container {
        width:80%;
        position:relative;
        margin:auto;
    }
}
@media (orientation: portrait), (max-width: 1280px) {
    .container {
        max-width:100%;
        position:relative;
    }
}
</style>