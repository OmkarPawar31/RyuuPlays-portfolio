import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
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
    const html = await fetchUrl('https://www.youtube.com/@RyuuPlaysYT/videos');
    const match = html.match(/var ytInitialData = ({.*?});<\/script>/s) || html.match(/ytInitialData\s*=\s*({.+?});/);
    if (!match) {
      console.log('No ytInitialData match found. Checking meta tags...');
      const titleMatch = html.match(/<meta property="og:title" content="([^"]+)">/);
      const descMatch = html.match(/<meta property="og:description" content="([^"]+)">/);
      console.log('Title:', titleMatch ? titleMatch[1] : 'None');
      console.log('Desc:', descMatch ? descMatch[1] : 'None');
      return;
    }

    const data = JSON.parse(match[1]);
    console.log('Successfully extracted ytInitialData');

    // Traverse and find all videoRenderers
    const videos = [];
    function traverse(obj) {
      if (!obj || typeof obj !== 'object') return;
      if (obj.videoRenderer) {
        const vr = obj.videoRenderer;
        videos.push({
          videoId: vr.videoId,
          title: vr.title?.runs?.map(r => r.text).join('') || vr.title?.simpleText || '',
          viewCount: vr.viewCountText?.simpleText || vr.viewCountText?.runs?.map(r => r.text).join('') || '',
          publishedTime: vr.publishedTimeText?.simpleText || '',
          lengthText: vr.lengthText?.simpleText || '',
          thumbnail: vr.thumbnail?.thumbnails?.[vr.thumbnail.thumbnails.length - 1]?.url || '',
          descriptionSnippet: vr.descriptionSnippet?.runs?.map(r => r.text).join('') || ''
        });
      }
      for (const key of Object.keys(obj)) {
        traverse(obj[key]);
      }
    }

    traverse(data);
    console.log('Found ' + videos.length + ' videos:');
    console.log(JSON.stringify(videos, null, 2));

    // Also look for channel metadata
    const metadata = data?.metadata?.channelMetadataRenderer;
    if (metadata) {
      console.log('Channel Metadata:', JSON.stringify(metadata, null, 2));
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
