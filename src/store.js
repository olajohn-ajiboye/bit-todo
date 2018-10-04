import Vue from 'vue'
import Vuex from 'vuex'
import iziToast from 'izitoast'

Vue.use(Vuex)

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
      message: 'Note removed Successfully!',
      timeout: 1500,
      messageColor: 'red'
    })
  }
}

export const actions = {
  addTodo: ({
    commit
  }, payload) => {
    commit('addTodo', payload)
  },
  updateTodo: ({
    commit
  }, payload) => {
    commit('updateTodo', payload)
  },
  removeTodo: ({
    commit
  }, payload) => {
    commit('removeTodo', payload)
  }
}

export const defaultState = {
  todos: [{
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
  actions
})
