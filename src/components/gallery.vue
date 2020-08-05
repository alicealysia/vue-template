<template>
    <container class="gallery">
        <h1 v-if="title"> {{title}} </h1>
        <div class="slideshow">
            <transition v-on:after-enter="start = false;" name="fade" type="animation">
                <fill v-if="start" :style="{backgroundImage: images[previous]}" />
            </transition>
            <fill :style="{ backgroundImage: images[current]}" />
            <span v-if="text"> {{text}} </span>
            <button class="round-big top" @click="fullscreen()"> <img src="../assets/fullscreen.png" /> </button>
        </div>
        <div class="line" />
        <row>
            <img v-for="(item, index) in images" :key="index" @click="switchItem(index)" :src="item" />
        </row>
    </container>
</template>

<script>
export default {
    props: {
        items: Array || Object
    },
    data () {
        return {
            start: false,
            current: 0,
            previous: 0,
            links: undefined,
            images: this.items.images || this.items.map(item => item.image),
            title: this.items.title || this.items[0].title,
            text: this.items.text || this.items[0].text
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
        switchItem (index) {
            this.previous = this.current;
            this.start = true;
            this.current = index;
        },
        link () {
            if (this.links[this.current]) {
                this.$router.push(this.links[this.current]);
            }
        },
        fullscreen () {
            this.$store.commit('setImage', this.images[this.current]);
            this.$store.commit('setFullscreen', true);
        }
    }
}
</script>

<style scoped>
    .gallery {
        background-color:rgb(49, 49, 52);
        border-radius: 0.25em; 
        padding-top: 2px;
        background-image: url('../assets/fabric.png');
    }
    .line {
        background-color: #afafaf;
        height: 1px;
        margin: 10px;
    }
    .slideshow {
        position: relative;
        width:100%;
        margin: auto;
    }
    .slideshow div {
        /* transition: opacity ease-in-out 0.3s; */
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
    button img {
        width: 50%;
        height: 50%;
    }
    .row {
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        margin: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-wrap: nowrap;
    }
    .row img {
        height: 100%;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 0.25em;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    }
    .row img:hover {
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75);
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
            top:10%;
            bottom: 0;
        }
        .row {
            height:8em
        }
    }
    @media (orientation: portrait), (max-width: 1280px) {
        .slideshow {
            padding-top: 100%;
        }
        button {
            position: absolute;
            bottom: 0;
            margin: 10px;
        }
        button.top {
            position: absolute;
            left: 0;
            top: 0;
        }
        .row {
            height:3em;
        }
    }
</style>
