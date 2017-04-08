const inquirer = require('inquirer')
const fsp = require('fs-promise')
const { resolve } = require('path')
const chalk = require('chalk')

const COMPONENTS_PATH = resolve(__dirname, `../src/shared/components`)

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What component name?',
    filter: val => val[0].toUpperCase() + val.slice(1)
  }
])
.then(createComponentFiles)
.catch(console.log)

function isComponentExist ({ name }) {
  const filePath = resolve(COMPONENTS_PATH, name)
  const isExist = fsp.existsSync(filePath)
  if (isExist) console.log('Component %s already exist', chalk.red(filePath))
  return isExist
}

function createComponentFiles (answers) {
  if (isComponentExist(answers)) return false

  return Promise.all([
    createIndexFile,
    createComponentFile,
    createDocsFile
  ].map(f => f(answers)))
}

function createIndexFile ({ name }) {
  const template = `import ${name} from './${name}'\n\nexport default ${name}\n`
  const filePath = resolve(COMPONENTS_PATH, name, 'index.js')
  console.log('Created index file: ', chalk.blue(filePath))
  return fsp.outputFile(filePath, template)
}

function createComponentFile ({ name }) {
  const template = `import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

/**
 * A ${name} component.
 */
function ${name} (props) {
  const {
    children,
    classes
  } = props

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

${name}.displayName = '${name}'

${name}.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Classes from JSS
   */
  classes: PropTypes.object.isRequired
}

${name}.defaultProps = {}

const styles = {
  root: {
    display: 'flex'
  }
}

export default injectSheet(styles)(${name})
`
  const filePath = resolve(COMPONENTS_PATH, name, `${name}.js`)

  console.log('Created component file: ', chalk.blue(filePath))
  return fsp.outputFile(filePath, template)
}

function createDocsFile ({ name }) {
  const template = `A standard ${name}.

${'```'}example
<${name} />
${'```'}
  `
  const filePath = resolve(COMPONENTS_PATH, name, `${name}.md`)

  console.log('Created docs file: ', chalk.blue(filePath))
  return fsp.outputFile(filePath, template)
}
