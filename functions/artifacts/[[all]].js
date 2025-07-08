export async function onRequestGet(ctx) {
  const requestUrl = new URL(ctx.request.url);
  const path = requestUrl.pathname.replace("/artifacts/", "");

  const referrer = ctx.request.headers.get("Referer");
  const primaryDomain = "https://thelastdata.com/";
  const pagesDevDomainSuffix = ".thelastofwebsites.pages.dev/";

  let isAllowedReferrer = false;
  if (!referrer) {
    console.log(`Blocked request for ${requestUrl.pathname}: No Referrer header.`);
    return new Response("Unauthorized access. Content can only be accessed from specified domains.", { status: 403 });
  }

  if (referrer.startsWith(primaryDomain)) {
    isAllowedReferrer = true;
  }

  if (referrer.includes(pagesDevDomainSuffix)) {
      try {
          const referrerHost = new URL(referrer).hostname;
          const parts = referrerHost.split('.');
          if (
              parts.length >= 3 &&
              parts[parts.length - 1] === 'dev' &&
              parts[parts.length - 2] === 'pages' &&
              parts[parts.length - 3] === 'thelastofwebsites'
          ) {
              isAllowedReferrer = true;
          }
      } catch (e) {
          console.error("Error parsing referrer URL:", referrer, e);
          isAllowedReferrer = false;
      }
  }

  if (!isAllowedReferrer) {
    console.log(`Blocked request for ${requestUrl.pathname} from referrer: ${referrer}`);
    return new Response("Unauthorized access. Content can only be accessed from specified domains.", { status: 403 });
  }

  // cache
  const cache = caches.default;
  const cacheKey = new Request(requestUrl.toString(), ctx.request);

  let response = await cache.match(cacheKey);

  if (response) {
    console.log(`Cache HIT for: ${path}`);
    return response; // Serve cached response immediately
  }

  console.log(`Cache MISS for: ${path}. Fetching from R2.`);
  const file = await ctx.env.thelastdataartifacts.get(path);

  if (!file) {
    return new Response(null, { status: 404 });
  }

  const headers = new Headers();
  file.writeHttpMetadata(headers); 
  headers.set('ETag', file.httpEtag); 

  const CACHE_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
  headers.set('Cache-Control', `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`);

  response = new Response(file.body, { headers });

  ctx.waitUntil(cache.put(cacheKey, response.clone()));

  return response;
}