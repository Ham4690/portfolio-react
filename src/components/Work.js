import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isModalOpen: false}
  }

  handleClickLesson() {
    this.setState({isModalOpen: true})
  }

  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  render() {
    let modal
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <img src={this.props.introduction_image} />
              <p>{this.props.introduction}</p>
            </div>
            <Fab 
              color="secondary"
              onClick={() => {this.handleClickClose()}}
            >
              <CloseIcon/>
            </Fab>
          </div>
        </div>
      )
    }

    return(
      <Card className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickLesson()}}
        >
          <CardHeader
            title={this.props.name}
          />
          <img src={this.props.image} />
        </div>
        {modal}
      </Card>
    ) 
  }
}

export default Work