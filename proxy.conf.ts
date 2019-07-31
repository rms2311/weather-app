const HttpsProxyAgent = require('https-proxy-agent');

const PROXY_URL = 'http://brus.proxy.corp.ssg:8080';
const PROXY_CONFIG = {
	'/weather/*': {
		target: 'http://api.openweathermap.org/data/2.5/forecast',
		secure: false,
		changeOrigin: true,
		cookieDomainRewrite: '',
		agent: new HttpsProxyAgent(PROXY_URL),
		pathRewrite: {
			'^/weather': ''
		}
	},
}
module.exports = PROXY_CONFIG;