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
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>