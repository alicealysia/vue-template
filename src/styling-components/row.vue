<template>
    <div class='row' :style="`${justifyConverted} ${alignConverted}`">
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
  start: 'align-items: flex-start',
  end: 'align-items: flex-end',
  center: 'align-items: center',
  baseline: 'align-items: baseline',
  stretch: 'align-items: stretch'
}

export default {
    name: 'container',
    props: {
        justify: String,
        align: String,
    },
    data () {
        return {
            justifyConverted: Justify[this.justify],
            alignConverted: Align[this.align]
        }
    }
}
</script>
<style>
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>