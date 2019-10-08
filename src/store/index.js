import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: []
    },
    actions: {
        getAllCommits(ctx) {
            fetch('http://localhost:8080/server-commits.json')
            .then(response => response.json())
            .then(comments => {
                ctx.commit('updateComments', { type: 'comments', items: comments });
            })
        },
    },
    mutations: {
        updateComments(state, { type, items }) {
            state[type] = items
        },
        addComment(state, { type, item }) {
            state[type].push(item)
        }
    },
    getters: {
        allComments: state => state.comments
    }
});