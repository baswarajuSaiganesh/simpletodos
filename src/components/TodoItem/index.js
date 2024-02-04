// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onGetTodoId} = props
  const {id, title} = details

  const onClickDelete = () => {
    onGetTodoId(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button type="button" onClick={onClickDelete} className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
