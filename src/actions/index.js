let nextUserId = 0
export const addTodo = userDeatils => ({
  type: 'ADD_TODO',
  id: nextUserId++,
  userDeatils
})