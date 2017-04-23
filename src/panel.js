// Debug
import Logger from './logger'

// React
import React from 'react'
import ReactDOM from 'react-dom'

// Ace Editor
import AceEditor from 'react-ace'
import 'brace/mode/javascript'

// Style
import './style.css'

function evalInWindow(string) {
  chrome.devtools.inspectedWindow.eval(string)
}

class PanelConsole {
  log(input) {
    evalInWindow('console.log("' + input + '")')
  }
}

const logger = new Logger('panel', new PanelConsole())

logger.log('Initializing...')

try {

  ReactDOM.render(
    <AceEditor
      mode="javascript"
      onChange={newValue => logger.log(newValue)}
      name="editor"
      height="100vh"
      width="100%"
    />,
    document.getElementById('root')
  )

} catch (exception) {
  // TODO Switch to logger.error when error is implemented in logger
  logger.log('Error!')
  logger.log(exception)
}
