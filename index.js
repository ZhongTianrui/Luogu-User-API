const https = require('https');
url = 'https://www.luogu.com.cn/paste/s7ia0ta9'
var JSONcode;
decodeURI = ''
https.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // console.log(data.substring(data.search('decodeURIComponent') + 20, data.search('feConfigVersion') - 12));
    decodeURI = data.substring(data.search('decodeURIComponent') + 20, data.search('feConfigVersion') - 12)
    // console.log(unescape(decodeURI));
    JSONcode = JSON.parse(decodeURIComponent(unescape(decodeURI)));
    console.log(JSONcode.code);
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});