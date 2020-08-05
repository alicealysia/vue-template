<template>
    <div class="slideshow">
        <transition v-on:after-enter="start = false;" name="fade" type="animation">
            <fill v-if="start" :style="{backgroundImage: images[previous]}" />
        </transition>
        <fill :style="{ backgroundImage: images[current]}" />
        <div class="words">
            <h1 @click="link()" v-if="title"> {{title}} </h1>
            <span v-if="text"> {{text}} </span>
        </div>
        <button v-if="buttons" class="round-big left" @click="current = switchItem(current, -1)"> &lt; </button>
        <button v-if="buttons" class="round-big right" @click="current = switchItem(current, 1)"> &gt; </button>
    </div>
</template>

<script>
export default {
    props: {
        items: Array || Object,
        buttons: Boolean
    },
    data () {
        return {
            start: false,
            current: 0,
            previous: 0,
            links: undefined,
            images: this.items.images || this.items.map(item => item.image),
            title: this.items.title || this.items[0].title,
            text: this.items.text || this.items[0].text,
            autoRefresh: undefined
        }
    },
    watch: {
        current: function(val) {
            if (!this.items.images) {
                this.title = this.items[val].title;
                this.text = this.items[val].text;
            }
        }
    },
    methods: {
        switchItem (item, index) {
            console.log(item);
            this.previous = item;
            this.start = true;
            if (item + index >= this.images.length) {
                return 0;
            }
            if (this.current + index < 0) {
                return this.images.length -1;
            }
            return item + index;
        },
        link () {
            if (this.links[this.current]) {
                this.$router.push(this.links[this.current]);
            }
        }
    },
    mounted () {
        if (!this.buttons) {
            setInterval( () => {this.current = this.switchItem(this.current, 1)}, 6000);
        }
    }
}
</script>

<style scoped>
    .slideshow {
        position: relative;
    }
    .slideshow div {
        background-repeat: no-repeat;
        background-position:center;
        background-size: cover;
        background-attachment: fixed;
    }
    .fade-enter-active {
        animation: fadeIn 0.5s;
        z-index: 1;
    }
    @keyframes fadeIn {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    div.words {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 10%;
        right: 10%;
        padding: 10px;
        border-radius:5px;
        color: rgb(236, 236, 236);
        text-shadow: 1px 0px 8px #000000, -1px 0px 8px #000000, 0px 1px 8px #000000, 0px -1px 8px #000000;
        text-align:center;
        z-index:2;
    }
    button.left {
        position: absolute;
        left: 0px;
        z-index:2;
    }
    button.right {
        position: absolute;
        right: 0px;
        z-index:2;
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
    }
</style>
