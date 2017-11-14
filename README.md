# SOCKS5 node-fetch client #

SOCKS v5 HTTP(s) client implementation in [node-fetch](https://github.com/bitinn/node-fetch)

### install

```
npm install socks5-node-fetch --save
```

### Usage

```js
const wrappedFetch = require('socks5-node-fetch')

const fetch = wrappedFetch({
    socksHost: 'localhost',
    socksPort: '1080'
})

// fetch(url, options)

fetch('https://google.com', {
    method: 'GET',
    ...
}).then(res => {

})


```
The socks5-node-fetch automatically detects protocol so both http and https are supported.

See [node-fetch](https://github.com/bitinn/node-fetch) for more options

## License ##

MIT
