export async function onRequestGet(ctx) {
  const requestUrl = new URL(ctx.request.url);
  const path = requestUrl.pathname.replace("/artifacts/", "");

  const referrer = ctx.request.headers.get("Referer");

  // Define your primary custom domain
  const primaryDomain = "https://thelastdata.com/";

  // Define the base of your Cloudflare Pages development domain
  const pagesDevDomainSuffix = ".thelastofwebsites.pages.dev/"; // Use a suffix check for flexibility with dynamic subdomain

  // Check if the referrer is valid
  let isAllowedReferrer = false;
  if (!referrer) {
    console.log(`Blocked request for ${requestUrl.pathname}: No Referrer header.`);
    return new Response("Unauthorized access. Content can only be accessed from specified domains.", { status: 403 });
  }

  if (referrer.startsWith(primaryDomain)) {
    isAllowedReferrer = true;
  }

  if (referrer.includes(pagesDevDomainSuffix) && referrer.endsWith(pagesDevDomainSuffix)) {
      const parts = new URL(referrer).hostname.split('.');
      if (
          parts.length >= 3 &&
          parts[parts.length - 1] === 'dev' &&
          parts[parts.length - 2] === 'pages' &&
          parts[parts.length - 3] === 'thelastofwebsites'
      ) {
          isAllowedReferrer = true;
      }
  }

  // If the referrer is not allowed after all checks, block the request
  if (!isAllowedReferrer) {
    console.log(`Blocked request for ${requestUrl.pathname} from referrer: ${referrer}`);
    return new Response("Unauthorized access. Content can only be accessed from specified domains.", { status: 403 });
  }

  // If referrer is valid, proceed to fetch the file from R2
  const file = await ctx.env.thelastdataartifacts.get(path);

  if (!file) {
    return new Response(null, { status: 404 });
  }

  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}