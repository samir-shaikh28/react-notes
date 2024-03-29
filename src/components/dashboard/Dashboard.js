import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { projects } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m7">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m4 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
