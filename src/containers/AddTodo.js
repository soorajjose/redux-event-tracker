import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { DateInput } from "@blueprintjs/datetime"
import moment from "moment"


const mapDispatchToProps = dispatch => {
  return {
    addTodo: article => dispatch(addTodo(article))
  }
}

class AddUser extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      accountName: '',
      projectName: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeProjectName = this.handleChangeProjectName.bind(this)
    this.handleChangeAccountName = this.handleChangeAccountName.bind(this)
    this.handleChangebdayDate = this.handleChangebdayDate.bind(this)
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleChangeProjectName(event) {
    this.setState({
      projectName: event.target.value
    })
  }

  handleChangeAccountName(event) {
    this.setState({
      accountName: event.target.value
    })
  }

  handleChangebdayDate(date) {
    this.setState({
      bdayDate: date
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo({
      name: this.state.name,
      accountName: this.state.accountName,
      projectName: this.state.projectName,
      bdayDate: moment(this.state.bdayDate).format('DD/MM/YYYY')
    }
    )
  }
  render() {
    return <form className="flex flex-column w-50 pa1" onSubmit={this.handleSubmit}>
      <div className="flex items-center justify-between pv1">
        <label className="">Name</label>
        <input className="pt-input pt-large"
          value={this.state.name} onChange={this.handleChangeName} placeholder={name} />
      </div>
      <div className="flex items-center justify-between pv1">
        <label className="">Account Name</label>
        <input className="pt-input pt-large"
          value={this.state.accountName} onChange={this.handleChangeAccountName} placeholder="account" />
      </div>
      <div className="flex items-center justify-between pv1">
        <label className="">Project Name</label>
        <input className="pt-input pt-large"
          value={this.state.projectName} onChange={this.handleChangeProjectName} placeholder="Project Name" />
      </div>
      <div className="flex items-center justify-between pv1">
        <label className="">DOB</label>
        <DateInput
          formatDate={date => date.toLocaleDateString()}
          parseDate={str => new Date(str)}
          placeholder={"MM/DD/YYYY"}
          closeOnSelection={true}
          onChange={this.handleChangebdayDate}
          className="pt-input-group pt-large"
          value={this.state.bdayDate}
        />
      </div>
      <button className="pt-button pt-intent-success flex self-center pv1" type="submit">Submit</button>
    </form>
  }

}

const Form = connect(null, mapDispatchToProps)(AddUser)
export default Form
