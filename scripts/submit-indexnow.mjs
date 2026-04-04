// Usage: node scripts/submit-indexnow.mjs [url1] [url2] ...
// Or: node scripts/submit-indexnow.mjs --sitemap (submits all URLs from sitemap)

const INDEXNOW_KEY = 'tml2026indexnow';
const HOST = 'townmedialabs.ca';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function submitUrls(urls) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls.slice(0, 10000), // IndexNow limit
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  console.log(`Submitted ${urls.length} URLs. Status: ${response.status}`);
  return response.status;
}

// Parse args
const args = process.argv.slice(2);
if (args[0] === '--sitemap') {
  // Fetch sitemap and extract URLs
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`Found ${urls.length} URLs in sitemap`);
  await submitUrls(urls);
} else if (args.length > 0) {
  await submitUrls(args);
} else {
  console.log('Usage: node scripts/submit-indexnow.mjs --sitemap');
  console.log('   or: node scripts/submit-indexnow.mjs https://townmedialabs.ca/page1 https://townmedialabs.ca/page2');
}
