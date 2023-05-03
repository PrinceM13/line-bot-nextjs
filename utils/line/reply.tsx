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
      },
      {
        type: "flex",
        altText: "this is a flex message",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "hello"
              },
              {
                type: "text",
                text: "world"
              }
            ]
          }
        }
      },
      {
        type: "template",
        altText: "this is a image carousel template",
        template: {
          type: "image_carousel",
          columns: [
            {
              imageUrl: "https://example.com/bot/images/item1.jpg",
              action: {
                type: "postback",
                label: "Buy",
                data: "action=buy&itemid=111"
              }
            },
            {
              imageUrl: "https://example.com/bot/images/item2.jpg",
              action: {
                type: "message",
                label: "Yes",
                text: "yes"
              }
            },
            {
              imageUrl: "https://example.com/bot/images/item3.jpg",
              action: {
                type: "uri",
                label: "View detail",
                uri: "http://example.com/page/222"
              }
            }
          ]
        }
      }
    ]
  };
  await axios.post("https://api.line.me/v2/bot/message/reply", body, config);
}
