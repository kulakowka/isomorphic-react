import getAssetsPath from './getAssetsPath'

export default function renderFullPage ({ sheets, html, finalState }) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <style type="text/css" id="server-side-styles">
          ${sheets.toString()}
        </style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState)}
        </script>
        ${getAssetsPath()}
      </body>
    </html>
    `
}
