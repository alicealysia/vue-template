<template>
    <div class="background">
        <slot />
    </div>
</template>
<style scoped>
    .background {
        position: absolute;
        left: -8px;
        right: -8px;
        top:-8px;
        bottom:-8px;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>