import ToDoList from '../ToDoList.vue'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

describe('ToDoItem', () => {
  let wrapper, mockStore, actions, state, dateNow

  beforeEach(() => {
    dateNow = Date.now()
    actions = {
      removeTodo: jest.fn(),
      addTodo: jest.fn()
    }
    state = {
      todos: [
        {
          text: 'Text1',
          checked: true,
          createdAt: new Date(dateNow - 3000)
        },
        {
          text: 'Text2',
          checked: false,
          createdAt: new Date(dateNow - 4000)
        },
        {
          text: 'Text3',
          checked: true,
          createdAt: new Date(dateNow - 5000)
        },
        {
          text: 'Text4',
          checked: false,
          createdAt: new Date(dateNow - 6000)
        }
      ]
    }
    mockStore = new Vuex.Store({
      state,
      actions
    })
    wrapper = shallowMount(ToDoList, {
      store: mockStore,
      state
    })
  })

  it('should has corrected name', () => {
    expect(wrapper.name()).toBe('ToDoList')
  })

  describe('computed', () => {
    it('orderedTodo should return correct', () => {
      const expected = [
        {
          text: 'Text2',
          checked: false,
          createdAt: new Date(dateNow - 4000)
        },
        {
          text: 'Text4',
          checked: false,
          createdAt: new Date(dateNow - 6000)
        },
        {
          text: 'Text1',
          checked: true,
          createdAt: new Date(dateNow - 3000)
        },
        {
          text: 'Text3',
          checked: true,
          createdAt: new Date(dateNow - 5000)
        }
      ]
      expect(wrapper.vm.orderedTodo).toEqual(expected)
    })
  })
})
