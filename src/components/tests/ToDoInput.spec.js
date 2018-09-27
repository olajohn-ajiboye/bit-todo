import ToDoInput from '../ToDoInput.vue'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

describe('ToDoInput', () => {
  let wrapper, mockStore, actions
  beforeEach(() => {
    actions = {
      addTodo: jest.fn()
    }
    mockStore = new Vuex.Store({
      state: {},
      actions
    })
    wrapper = shallowMount(ToDoInput, {
      propsData: {
      },
      store: mockStore
    })
  })

  it('should has corrected name', () => {
    expect(wrapper.name()).toBe('ToDoInput')
  })

  it('sets the correct default data', () => {
    expect(wrapper.vm.$data).toEqual({
      text: ''
    })
  })

  describe('computed', () => {
    it('addTodoPossible should return correct', () => {
      expect(wrapper.vm.addTodoPossible).toEqual('')
    })
  })

  describe('methods', () => {
    it('submit-button on click should dispatch addTodo', () => {
      wrapper.setData({text: 'thing todo'})
      const submitButton = wrapper.find('.submit-button')
      submitButton.trigger('click')
      expect(actions.addTodo).toHaveBeenCalled()
    })
  })
})
