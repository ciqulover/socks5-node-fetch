const HTTPAgent = require('socks5-http-client')
const HTTPsAgent = require('socks5-https-client')
const fetch = require('node-fetch')

module.exports = function (options) {

  options = options || {}

  const setting = {
    socksHost: options.socksHost || 'localhost',
    socksPort: options.socksPort || '1080'
  }

  const httpAgent = new HTTPAgent(setting)
  const httpsAgent = new HTTPsAgent(setting)

  return function (url, options) {
    options = options || {}
    if (url.startsWith('http://')) options.agent = httpAgent
    if (url.startsWith('https://')) options.agent = httpsAgent
    return fetch(url, options)
  }

}
