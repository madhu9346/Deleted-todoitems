import './index.css'

const TodoItem = props => {
  const {todoItem, deletedTodoItem} = props
  const {id, title} = todoItem

  const deleteItem = () => {
    deletedTodoItem(id)
  }

  return (
    <li className="sub1">
      <p className="head1">{title}</p>

      <button type="button" className="btn" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
