<template lang="pug">
    .container.mt-5
        .row.card
            .col
                component(:is="currentComponent" v-on:add-comment="switchOnAddComment" v-on:all-comments="switchOnAllComment")

</template>

<script>

import addComment from './addComment.vue'
import allComments from './allComments.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'app',
    components: {
        "add-comment": addComment,
        "all-comments": allComments
    },
    data() {
        return {
            currentComponent: 'all-comments'
        }
    },
    created () {
        this.$store.dispatch('getAllCommits')
    },
    methods: {
        switchOnAddComment() {
            this.currentComponent = "add-comment";
        },
        switchOnAllComment() {
            this.currentComponent = "all-comments";
        }
    }
}
</script>

<style lang="stylus" scoped>
    .card
        background-color: #F8F8F8
        .col:first-child
            padding: 30px 15px 50px
        
</style>