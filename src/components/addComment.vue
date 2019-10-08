<template lang="pug">
    .add
        .row.add__title
            .col
                span(@click="returnToAllComments")
                    font-awesome-icon(icon="arrow-left")
                h3.text-center Оценить
        .form
            .row
                .col
                    p.form__stars.text-center
                        font-awesome-icon.muted(
                            v-for="(n, index) in 5"
                            :key="index"
                            :icon="['fas', 'star']"
                            @mouseover="mouseOver"
                            @mouseleave="mouseLeave"
                            @click="selectMark"
                            )
            .row.mt-3
                .col.text-center
                    input.form-control(
                        v-model="name"
                        type="text"
                        placeholder="Укажите ваш никнейм"
                        )
            .row.mt-3
                .col.message
                    textarea.form-control(
                        v-model="message"
                        placeholder="Расскажите, что можно улучшить?"
                        rows="5"
                        )
                    p.subtext(
                        v-show="calcLenghtMessage"
                    )
                        | Минимум 20 символов
            .row.mt-3
                .col.text-center
                    button.btn.btn-block.mx-auto(
                        @click="sendComment"
                        :class="{'btn-secondary': !valid, 'btn-primary': valid}"
                        )
                        | Отправить
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            name: '',
            mark: null,
            message: ''
        }
    },
    computed: {
        calcLenghtMessage() {
            if (this.message.length < 20) return true
        },
        valid() {
            if (this.name != 0 && this.mark !== null && !this.calcLenghtMessage) return true
        }
    },
    mounted() {
        let starLine = document.querySelector('.form__stars')
    },
    methods: {
        ...mapMutations(["addComment"]),
        sendComment() {
            if (this.valid) {
                let today = new Date();
                let resultToday =   today.getDay() + '.' +
                                    (today.getMonth() + 1) + '.' +
                                    today.getFullYear();
                this.addComment({
                    type: 'comments',
                    item: {
                        name: this.name,
                        mark: this.mark,
                        message: this.message,
                        date: resultToday
                    }
                });
                this.returnToAllComments();
            } else return false

        },
        returnToAllComments() {
            this.$emit('all-comments');
        },
        mouseOver(event) {
            if (!$(event.target).is('.superActive')) {
                $(event.target).prevAll('svg').addClass('active').removeClass('muted')
                $(event.target).filter('svg').addClass('active').removeClass('muted superActive')
            }
        },
        mouseLeave(event) {
            $(event.target).filter('svg').removeClass('active').addClass('muted')
            $(event.target).prevAll('svg').removeClass('active').addClass('muted')
        },
        selectMark(event) {
            if ($(event.target).parent('svg')) {
                let allSuperActiveStar = document.querySelectorAll('.superActive');
                let selectedIndex = $(allSuperActiveStar).index($(event.target).parent('svg'));
                allSuperActiveStar.forEach((star, index) => {
                    if (selectedIndex < index) $(star).removeClass('superActive')
                })
            }
            let allActiveStar = document.querySelectorAll('svg.active');
            allActiveStar.forEach(star => {
                $(star).addClass('superActive')
            })
            this.mark = allActiveStar.length;
            
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .add__title
        position relative
        span
            position absolute
            cursor pointer
            svg 
                font-size: 22px
        h3
            font-size: 18px
            font-weight: bold
            line-height: 22px
    .form__stars
        svg
            font-size: 24px
            cursor pointer
        .active
            color: #F56A3F
        .muted
            color: #C4C4C4
        .superActive
            color: #F56A3F !important
    .form
        input
            heigth: 32px
        button
            max-width: 320px
            padding: 15px
            font-weight: bold
        .message
            position relative
            .subtext
                position absolute
                right: 30px
                bottom: 0
                font-size: 16px
                color: #F56A3F
</style>