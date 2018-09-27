import ToDoItem from '../ToDoItem.vue'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import moment from 'moment'

Vue.use(Vuex)

describe('ToDoItem', () => {
  let wrapper, mockStore, actions
  beforeEach(() => {
    actions = {
      removeTodo: jest.fn(),
      editTodo: jest.fn(),
      updateTodo: jest.fn()
    }
    mockStore = new Vuex.Store({
      state: {},
      actions
    })
    wrapper = shallowMount(ToDoItem, {
      propsData: {
        todo: {
          createdAt: moment()
        }
      },
      store: mockStore
    })
  })

  it('should has corrected name', () => {
    expect(wrapper.name()).toBe('ToDotodo')
  })

  it('sets the correct default data', () => {
    expect(wrapper.vm.$data).toEqual({
      edit: false,
      text: ' ',
      timeAgo: 'a few seconds ago'
    })
  })

  describe('computed', () => {
    it('timeAgo should return correct', () => {
      const expected = moment(wrapper.vm.todo.createdAt).fromNow()
      expect(wrapper.vm.timeAgo).toEqual(expected)
    })
  })

  describe('methods', () => {
    it('delete-button on click should dispatch removeTodo', () => {
      const deleteButton = wrapper.find('.delete-button')
      deleteButton.trigger('click')
      expect(actions.removeTodo).toHaveBeenCalled()
    })

    it('done-button on click should dispatch updateTodo', () => {
      wrapper.setProps({
        todo: {
          editing: true
        }
      })

      const doneButton = wrapper.find('.js-done-button')
      doneButton.trigger('click')
      expect(actions.updateTodo).toHaveBeenCalled()
    })

    it('edit-button on click should dispatch updateTodo', () => {
      wrapper.setProps({
        todo: {
          editing: false
        }
      })

      const editButton = wrapper.find('.js-edit-button')
      editButton.trigger('click')
      expect(wrapper.vm.todo.editing).toEqual(true)
    })
  })
})
