<template>
    <div class="expand-box" @click="expand()">
        <h3> {{title}} </h3>
        <ul :class="currentIndex === thisIndex? 'expanded' : 'minified'">
            <li v-for="(item, index) in items" :key="index">
                {{item}}
            </li>
        </ul>
        <div :class="currentIndex === thisIndex? 'hidden' : 'read-more'" v-if="items.length > 5">
            Read More
        </div>
        <div v-if="items.length <= 5" />
    </div>    
</template>

<script>
export default {
    name: 'expandBox',
    props: {
        title: String,
        currentIndex: Number,
        thisIndex: Number,
        items: Array
    },
    methods: {
        expand() {
            this.$emit('expand', this.currentIndex === this.thisIndex? -1 : this.thisIndex);
        }
    }
}
</script>

<style scoped>
    .expand-box {
        border-radius: 0.25em;
        background-color: rgba(248,249,250,0.8);
        color: rgb(25,25,25);
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: 600;
    }
    .expand-box:hover {
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.75);
    }
    .expand-box h3 {
        background-color: rgba(248,249,250,0.5);
        width: 100%;
        line-height: 2em;
        margin: 0;
    }
    .expand-box div {
        height:2em;
    }
    .read-more {
        border-top-style: solid;
        border-top-color: white;
        border-top-width: 1px;
        cursor: pointer;
        transition: 0.6s;
    }
    .hidden {
        opacity: 0;
        transform: 0.6s;
    }
    .expanded {
        min-height: 7.5em;
        max-height: 17em;
        transition: 1s;
        margin-bottom: 0;
        text-align: left;
        overflow: hidden;
    }
    .minified {
        max-height: 7.5em;
        min-height: 7.5em;
        overflow: hidden;
        margin-bottom: 0;
        transition: 1s;
        text-align: left;
    }
</style>
