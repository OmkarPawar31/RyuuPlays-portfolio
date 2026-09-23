import https from 'https';
import fs from 'fs';

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
    const entries = xml.split('<entry>').slice(1);
    const results = entries.map(entry => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || '';
      const title = entry.match(/<title>(.*?)<\/title>/)?.[1] || '';
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] || '';
      const views = entry.match(/<media:statistics views="(\d+)"/)?.[1] || '0';
      const thumbnail = entry.match(/<media:thumbnail url="(.*?)"/)?.[1] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      const desc = entry.match(/<media:description>(.*?)<\/media:description>/s)?.[1] || '';
      
      // Clean title and format date
      const cleanTitle = title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
      const dateObj = new Date(published);
      const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      return {
        videoId,
        title: cleanTitle,
        rawViews: parseInt(views, 10),
        views: parseInt(views, 10) > 1000 ? (parseInt(views, 10) / 1000).toFixed(1) + 'K' : views,
        published: formattedDate,
        publishTimestamp: dateObj.getTime(),
        thumbnail,
        description: desc.slice(0, 180).trim().replace(/\n+/g, ' ') + '...'
      };
    });

    console.log(JSON.stringify(results, null, 2));
    fs.writeFileSync('parsed_videos.json', JSON.stringify(results, null, 2));
  } catch (err) {
    console.error(err);
  }
}

run();
