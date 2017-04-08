export default function getAssetsPath () {
  if (process.env.NODE_ENV === 'production') {
    const manifest = require('../static/manifest.json')
    return `<script src="/static/${manifest['vendor.js']}"></script>
    <script src="/static/${manifest['main.js']}"></script>`
  }
  return '<script src="/static/bundle.js"></script>'
}
