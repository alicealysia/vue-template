<template>
    <div class="fill">
        <slot />
    </div>
</template>

<style scoped>
    .fill {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;   
    }
</style>