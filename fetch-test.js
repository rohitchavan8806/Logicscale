import https from 'https';

https.get('https://logicscale.in/assets/screenshot-1-B0MAxLL0.png', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Body length:', data.length);
    console.log('Body preview:', data.substring(0, 200));
  });
}).on('error', (e) => {
  console.error(e);
});
