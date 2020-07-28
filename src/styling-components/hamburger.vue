<template>
    <div @click="clicked()" id='hamburger'>
        <div />
        <div />
        <div />
    </div>
</template>
<script>
export default {
    name: 'hamburger',
    methods: {
        clicked () {
            this.$emit('hamburgerClicked');
        }
    }
}
</script>
<style scoped>
@media (orientation: landscape) and (min-width: 1281px) {
    #hamburger {
        display:none;
    }
}
@media (orientation: portrait), (max-width: 1280px) {
    #hamburger {
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        width: 2.5em;
    }
    #hamburger div {
        position: relative;
        width: 2em;
        height: 0.28em;
        background-color:white;
    }
    #hamburger:hover {
        border-style: solid;
        border-radius: 3px;
        border-width: 1px;
        border-color: white;
    }
}
</style>