import reply from "@/utils/line/reply";

export async function GET(request: Request) {
  return new Response("Hello, INK13 !");
}

export async function POST(request: Request) {
  // get body
  const body = await request.json();
  console.log("check body ---> ", body);

  const evnet = body.events[0];
  const replyToken = evnet.replyToken;
  if (evnet.type === "message") {
    console.log("check msg ---> ", body.events[0].message);
    await reply(replyToken, evnet.message.text);
    console.log("done");
  }
  return new Response("Hello, INK13 POST !");
}
