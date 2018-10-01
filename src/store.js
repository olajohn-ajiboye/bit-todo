import Vue from 'vue'
import Vuex from 'vuex'
import iziToast from 'izitoast'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'store',
  storage: localStorage
})

export const mutations = {
  addTodo: (state, payload) => {
    state.todos.unshift(payload)

    iziToast.success({
      message: 'Note added Successfully!',
      position: 'topRight',
      timeout: 1500
    })
  },
  updateTodo: (state, payload) => {
    iziToast.success({
      message: 'Note updated Successfully!',
      position: 'topRight',
      timeout: 1500
    })
  },
  removeTodo: (state, payload) => {
    const todos = state.todos
    const index = todos.indexOf(payload)
    todos.splice(index, 1)
    iziToast.success({
      position: 'topRight',
      message: 'Note deleted forever!',
      timeout: 1500,
      messageColor: 'red'
    })
  }
}

export const getters = {
  orderedTodo: (state) => {
    const todos = state.todos

    // sort by created time after sorting by checked/unchecked todo
    let checkedTodo = todos.filter(todo => todo.checked)
    checkedTodo = checkedTodo.sort((a, b) => b.createdAt - a.createdAt)

    let UncheckedTodo = todos.filter(todo => !todo.checked)
    UncheckedTodo = UncheckedTodo.sort((a, b) => b.createdAt - a.createdAt)
    return UncheckedTodo.concat(checkedTodo)
  }
}
export const actions = {
  addTodo: ({commit}, payload) => {
    commit('addTodo', payload)
  },
  updateTodo: ({commit}, payload) => {
    commit('updateTodo', payload)
  },
  removeTodo: ({commit}, payload) => {
    commit('removeTodo', payload)
  }
}

export const defaultState = {
  todos: [
    {
      text: 'Think real hard about whats for lunch',
      checked: false,
      createdAt: new Date(Date.now() - 3600),
      editing: false
    },
    {
      text: 'Buy some Pantos and start looking for Lambos',
      checked: false,
      createdAt: new Date(Date.now() - 7200),
      editing: false
    }
  ]
}

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
  getters,
  plugins: [vuexPersist.plugin]
})
