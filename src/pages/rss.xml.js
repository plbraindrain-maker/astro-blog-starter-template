export async function GET(context) {
  return new Response('RSS Disabled', {
    headers: { 'Content-Type': 'application/xml' }
  });
}
