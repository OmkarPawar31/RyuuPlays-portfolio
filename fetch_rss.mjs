import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const xml = await fetchUrl('https://www.youtube.com/feeds/videos.xml?channel_id=UCqK93soGub3-dTgDye19_1g');
    console.log('--- RSS XML ---');
    console.log(xml);
  } catch (err) {
    console.error(err);
  }
}

run();
