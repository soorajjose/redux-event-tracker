import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = state => (
  console.log(JSON.stringify(state)),
  {
    todos: state.todos
  })

export default connect(
  mapStateToProps,
  null
)(UserList)
