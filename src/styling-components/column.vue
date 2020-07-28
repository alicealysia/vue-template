<template>
    <div class='column' :style="{width: widthString}">
        <slot>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'container',
    props: {
        width: Number
    },
    data () {
        return {
            widthString: this.width > 1? `${this.width}%` : `${this.width*100}%`
        }
    }
}
</script>
<style>
    .column {
        display: flex;
        flex-direction: column;
    }
    @media (orientation: portrait), (max-width: 1280px) {
        .column {
            width: 100% !important
        }
    }
</style>