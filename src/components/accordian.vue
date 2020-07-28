<template>
    <div class="accordian">
        <div @click="showMe()" class="card">
            {{title}}
        </div>
        <div :class="thisIndex === currentIndex? 'active' : 'hidden'">
            <h4> {{description}} </h4>
            <row :justify="'around'" :align="'start'">
                <column :width="2/5">
                    <strong v-if="leftTitle"> {{leftTitle}} </strong>
                    <ul>
                        <li v-for="(item, index) in left" :key="index"> {{item}} </li>
                    </ul>
                </column>
                <column :width="2/5">
                    <strong v-if="rightTitle"> {{rightTitle}} </strong>
                    <ul>
                        <li v-for="(rightItem, rightIndex) in right" :key="rightIndex"> {{rightItem}} </li>
                    </ul>
                </column>
            </row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'acccordian',
    props: {
        title: String,
        description: String,
        leftTitle: String,
        rightTitle: String,
        left: Array,
        right: Array,
        thisIndex: Number,
        currentIndex: Number
    },
    methods: {
        showMe () {
            this.$emit('change', this.thisIndex !== this.currentIndex?  this.thisIndex : -1);
        }
    }
}
</script>

<style scoped>
    .card {
        border-radius: 0.25em;
        background-color: rgba(248,249,250,0.5);
        font-size: 1.2em;
        font-weight: 700;
        padding: 1em;
        border-color: #f8f9fa;
        border-style:solid;
        border-width:1px;
        text-align: center;
        cursor: pointer;
    }
    .hidden {
        overflow: hidden;
        max-height: 0;
        transition: max-height 1s;
        padding: 0 1em;
    }
    .active {
        overflow: hidden;
        max-height: 100em;
        transition: max-height 1s;
        padding: 0 1em;
    }
    .accordian {
        border-radius: 0.25em;
        background-color: rgba(248,249,250,0.8);
        color: rgb(25,25,25);
        margin:1px;
        text-align: left;
    }
</style>