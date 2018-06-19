import React from 'react'
import PropTypes from 'prop-types'

const tableHeader = {
  slno: "Sl No", name: "Name", projectName: "Project Name", accountName: "Account Name",
  bdayDate: "Birthday Date"
}

const getTableHeaders = () => (
  <tr>
    <th>{tableHeader.slno}</th>
    <th>{tableHeader.name}</th>
    <th>{tableHeader.accountName}</th>
    <th>{tableHeader.projectName}</th>
    <th>{tableHeader.bdayDate}</th>
  </tr>
)

const getTableRows = (data) => (
  data.map((item, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{item.name}</td>
      <td>{item.accountName}</td>
      <td>{item.projectName}</td>
      <td>{item.bdayDate}</td>
    </tr>
  ))
)

const listView = ({ todos, toggleTodo }) => (
  <table className="pt-html-table pt-html-table-bordered pt-interactive">
    <thead>{getTableHeaders()}</thead>
    <tbody>{getTableRows(todos)}</tbody>
  </table>
)

listView.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    accountName: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    bdayDate: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default listView
