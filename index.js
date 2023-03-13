const https = require('https');
const fs = require("fs");
const express = require("express");
url = 'https://www.luogu.com.cn/paste/'
var JSONcode;
decodeURI = ''
const app= express();

app.get('/api/url', (req, res)=>{
  url = 'https://www.luogu.com.cn/paste/' + req.query.url;
  keycode = req.query.keycode;
  // JSONtt = ''
  console.log(url);
  https.get(url, (ress) => {
    let data = '';
    
    ress.on('data', (chunk) => {
      data += chunk;
    });
  
  
    ress.on('end', () => {
      // console.log(data.substring(data.search('decodeURIComponent') + 20, data.search('feConfigVersion') - 12));
      decodeURI = data.substring(data.search('decodeURIComponent') + 20, data.search('feConfigVersion') - 12)
      // console.log(unescape(decodeURI));
      JSONcode = JSON.parse(decodeURIComponent(unescape(decodeURI)));
      console.log(JSONcode.currentData.paste.user);
      // console.log(keycode);
      // console.log(JSONcode.currentData.paste.data);
      if (keycode == JSONcode.currentData.paste.data) res.send(JSONcode.currentData.paste.user);
      else res.send({'isOK' : false});
      
    });
  }).on('error', (err) => {
    console.log('Error: ', err.message);
  });
  
  
  
});


app.listen(8084, ()=>{
  console.log('Server is running at http://localhost:8084')
})
