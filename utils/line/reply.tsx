import axios from "axios";

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

export default async function reply(replyToken: string, msg: string) {
  const config = {
    headers: { "Content-Type": "application/json", Authorization: `Bearer {${channelAccessToken}}` }
  };
  const body = {
    replyToken,
    messages: [
      {
        type: "text",
        text: "Hello, user"
      },
      {
        type: "text",
        text: `Do you need help on ${msg} ?`
      }
    ]
  };
  await axios.post("https://api.line.me/v2/bot/message/reply", body, config);
}
