<template>
    <div class='row' :style="`${justifyConverted} ${alignConverted} ${directionConverted}`">
        <slot>
        </slot>
    </div>
</template>
<script>

const Justify = {
  start: 'justify-content: flex-start;',
  end: 'justify-content: flex-end;',
  center: 'justify-content: center;',
  between: 'justify-content: space-between;',
  around: 'justify-content: space-around;',
  even: 'justify-content: space-evenly;'
}

const Align = {
  start: 'align-items: flex-start;',
  end: 'align-items: flex-end;',
  center: 'align-items: center;',
  baseline: 'align-items: baseline;',
  stretch: 'align-items: stretch;'
}

const Direction = {
    right: 'flex-direction: row',
    left: 'flex-direction: row-reverse',
    down: 'flex-direction: column',
    up: 'flex-direction: column-reverse'
}

export default {
    name: 'container',
    props: {
        justify: {
            type: String,
            required: false,
            default: 'around'
        },
        align: {
            type: String,
            required: false,
            default: 'start'
        },
        direction: {
            type: String,
            required: false,
            default: 'right'
        }
    },
    data () {
        return {
            justifyConverted: Justify[this.justify],
            alignConverted: Align[this.align],
            directionConverted: Direction[this.direction]
        }
    }
}
</script>
<style>
    .row {
        display: flex;
        flex-wrap: wrap;
    }
</style>