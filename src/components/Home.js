import React from 'react'
import Button from '@material-ui/core/Button'


class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>Home Page!</h1>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    ) 
  }
}

 
export default Home