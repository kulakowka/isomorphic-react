const { resolve } = require('path')

module.exports = {
  title: 'UI Kit',
  // getComponentPathLine (componentPath) {
  //   const name = basename(componentPath, '.js')
  //   const dir = dirname(componentPath).replace(/^src\/components/, 'netology-ui-kit/lib')
  //   return `import ${name} from '${dir}'`
  // },
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md')
  },
  webpackConfig: require('../webpack/development.js'),
  highlightTheme: 'material',
  serverHost: 'localhost',
  showSidebar: true,
  serverPort: 6060,
  showCode: false,
  sections: [
    {
      name: 'Components',
      components: resolve(__dirname, '../../src/shared/components/**/[A-Z]*.js')
    }
  ],
  styleguideDir: resolve(__dirname, '../../build/static/styleguide'),
  skipComponentsWithoutExample: true,
  styles: {
    Markdown: {
      blockquote: {
        margin: '1em 0',
        background: '#F8F8F9',
        padding: '1em 1.5em',
        lineHeight: '1.4285em',
        color: 'rgba(0,0,0,.87)',
        transition: 'opacity .1s ease,color .1s ease,background .1s ease,box-shadow .1s ease',
        borderRadius: '3px'
      },
      h5: {
        color: '#222',
        fontWeight: 700
      }
    },
    Playground: {
      root: {
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(45deg,#efefef 25%,transparent 0,transparent 75%,#efefef 0,#efefef),linear-gradient(45deg,#efefef 25%,transparent 0,transparent 75%,#efefef 0,#efefef)',
        backgroundPosition: '0 0,10px 10px',
        backgroundSize: '21px 21px'
      }
    },
    StyleGuide: {
      root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      }
    }
  }
}
