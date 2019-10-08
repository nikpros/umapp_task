<template lang="pug">
    .all
        h1.all__title Отзывы магазина
        p.add__write.text-center(
            @click="$emit('add-comment')")
            | Написать отзыв
        hr
        comment-component(
            v-for="(comment, index) in allComments"
            :key="index"
            :name="comment.name"
            :msg="comment.message"
            :mark="comment.mark"
            :date="comment.date"
        )

</template>

<script>

import Comment from './Comment.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'


export default {
    components: {
        'comment-component': Comment
    },
    computed: {
        ...mapGetters(["allComments"])
    },
    methods: {
        
    }
}
</script>

<style lang="stylus" scoped>
.all
    h1.all__title
        font-size: 18px
        font-weight: bold
        color: #F56A3F
        margin-bottom: 30px
    p.add__write
        font-size: 18px
        font-weight: bold
        border: 1px solid #D9D9D9
        border-radius: 8px
        padding: 15px 0
        cursor: pointer
        background-color: white



</style>