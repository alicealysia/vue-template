<template>
    <div class="slideshow">
        <fill :class="displayToggle ? 'hide' : 'show'" :style="{ 'background-image': displayToggle? `url(${items[prevItem].image})`:`url(${items[nextItem].image})`}" />
        <fill :class="displayToggle ? 'show' : 'hide'" :style="{ 'background-image': displayToggle? `url(${items[nextItem].image})`:`url(${items[prevItem].image})`}" />
        <h3 @click="link()" v-if="items[nextItem].title"> {{items[nextItem].title}} </h3>
        <span v-if="items[nextItem].text"> {{items[nextItem].text}} </span>
        <button class="round-big left" @click="nextItem = switchItem(nextItem, -1)"> &lt; </button>
        <button class="round-big right" @click="nextItem = switchItem(nextItem, 1)"> &gt; </button>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    },
    data () {
        return {
            displayToggle: false,
            nextItem: 0,
            prevItem: 0,
        }
    },
    methods: {
        switchItem (item, index) {
            this.prevItem = item;
            this.displayToggle = !this.displayToggle;
            if (item + index >= this.items.length) {
                return 0;
            }
            if (this.nextItem + index < 0) {
                return this.items.length -1;
            }
            return item + index;
        },
        link () {
            if (this.items[this.nextItem].link) {
                this.$router.push(this.items[this.nextItem].link);
            }
        },
        fullscreen () {
            this.$store.commit('setImage', `url(${this.items[this.nextItem].image})`);
            this.$store.commit('setFullscreen', true);
        }
    }
}
</script>

<style scoped>
    .slideshow {
        position: relative;
        width:101%;
        left: -0.5%;
    }
    .slideshow div {
        transition: opacity ease-in-out 0.3s;
        background-repeat: no-repeat;
        background-position:center;
        background-size: cover;
    }
    h3 {
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
    }
    span {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 10%;
        right: 10%;
        padding: 10px;
        border-radius:5px;
        background-color: rgba(0, 0, 0, 0.7);
    }
    div.hide {
        opacity: 0;
    }
    div.show {
        opacity: 1;
    }
    button img {
        width: 50%;
        height: 50%;
    }
    button.left {
        position: absolute;
        left: 0px;
    }
    button.right {
        position: absolute;
        right: 0px;
    }
    @media (orientation: landscape) and (min-width: 1281px) {
        .slideshow {
            padding-top: 40%;
        }
        button {
            transform: translateY(-50%);
            top: 50%;
            margin: 10px;
        }
        button.top {
            position: absolute;
            left: 0;
            top:90%;
            bottom: 0;
        }
    }
    @media (orientation: portrait), (max-width: 1280px) {
        .slideshow {
            padding-top: 150%;
        }
        button {
            position: absolute;
            bottom: 0;
            margin: 10px;
        }
        button.top {
        position: absolute;
        left: 0;
        top: 1em;
    }
    }
</style>
