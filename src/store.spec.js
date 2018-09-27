import {mutations} from './store'

let initialState

beforeEach(() => {
  initialState = {
    todos: []
  }
})

describe('TodoStore', () => {
  it('addTodo', () => {
    const testTodo = {
      text: 'addTodoTest',
      checked: true,
      createdAt: new Date()
    }
    mutations.addTodo(initialState, testTodo)

    expect(initialState).toEqual({
      todos: [
        testTodo
      ]
    })
  })
})
