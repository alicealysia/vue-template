<template>
    <div class="background">
        <slot />
    </div>
</template>
<style scoped>
    .background {
        position: absolute;
        left: -8px;
        width: calc(100% + 8px);
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>