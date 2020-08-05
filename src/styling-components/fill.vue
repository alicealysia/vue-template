<template>
    <div class="fill">
        <slot />
    </div>
</template>

<style scoped>
    .fill {
        position: absolute;
        left: -8px;
        right: -8px;
        top: 0;
        bottom: 0;   
    }
</style>