<template>
    <container class="gallery">
        <h3 v-if="items[nextItem].title || items[0].title"> {{items[nextItem].title || items[0].title}} </h3>
        <div class="slideshow">
            <fill :class="displayToggle ? 'hide' : 'show'" :style="{ 'background-image': displayToggle? `url(${images[prevItem]})`:`url(${images[nextItem]})`}" />
            <fill :class="displayToggle ? 'show' : 'hide'" :style="{ 'background-image': displayToggle? `url(${images[nextItem]})`:`url(${images[prevItem]})`}" />
            <span v-if="items[nextItem].text"> {{items[nextItem].text}} </span>
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
        items: Array
    },
    data () {
        return {
            displayToggle: false,
            nextItem: 0,
            prevItem: 0,
            images: this.items.map(item => item.image)
        }
    },
    methods: {
        switchItem (index) {
            this.prevItem = this.nextItem;
            this.displayToggle = !this.displayToggle;
            this.nextItem = index;
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
        transition: opacity ease-in-out 0.3s;
        background-repeat: no-repeat;
        background-position:center;
        background-size: cover;
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
