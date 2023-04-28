export async function GET(request: Request) {
  return new Response("Hello, INK13 !");
}

export async function POST(request: Request) {
  // get body
  const body = await request.json();
  console.log("check body ---> ", body);
  if (body.events[0].type === "message") {
    console.log("check body ---> ", body.events[0].message[0]);
  }
  return new Response("Hello, INK13 POST !");
}
