<template lang="pug">
    .item
        .row.item__header.my-2
            .col
                h3 {{ name }}
            .col.text-right
                span {{ date }}
        .row.item__mark
            .col
                p
                    font-awesome-icon.active(
                        v-for="(n, index) in mark"
                        :key="index"
                        :icon="['fas', 'star']")
                    font-awesome-icon.muted(
                        v-for="(n, index) in 5 - mark"
                        :key="index"
                        :icon="['fas', 'star']")
        .row.item__body
            .col
                p {{ msg }}
        hr
</template>

<script>

    let itemMark = document.querySelector('.item__mark p');
    console.log(itemMark)

export default {
    props: {
        name: String,
        msg: String,
        mark: Number,
        date: String
    },
}
</script>

<style lang="stylus" scoped>
    .item__header
        h3
            font-size: 18px
            font-weight: bold
        span
            color: #A79595
    .active
        color: #F56A3F
    .muted
        color: #C4C4C4
</style>