import React from 'react'

import Main from './Main'

import 'typeface-roboto'
import 'material-design-icons/iconfont/material-icons.css'
import '../../../style/main.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Main
          {...this.props}
        />
      </div>
    )
  }
}

export default App
