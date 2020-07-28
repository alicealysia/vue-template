<template>
    <div class="background">
        <slot />
    </div>
</template>
<style scoped>
    .background {
        position: absolute;
        left: -0.5%;
        width: 101%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>