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
      // {
      //   type: "template",
      //   altText: "this is a image carousel template",
      //   template: {
      //     type: "image_carousel",
      //     columns: [
      //       {
      //         imageUrl: "https://example.com/bot/images/item1.jpg",
      //         action: {
      //           type: "postback",
      //           label: "Buy",
      //           data: "action=buy&itemid=111"
      //         }
      //       },
      //       {
      //         imageUrl: "https://example.com/bot/images/item2.jpg",
      //         action: {
      //           type: "message",
      //           label: "Yes",
      //           text: "yes"
      //         }
      //       },
      //       {
      //         imageUrl: "https://example.com/bot/images/item3.jpg",
      //         action: {
      //           type: "uri",
      //           label: "View detail",
      //           uri: "http://example.com/page/222"
      //         }
      //       }
      //     ]
      //   }
      // },
      // {
      //   type: "template",
      //   altText: "This is a buttons template",
      //   template: {
      //     type: "buttons",
      //     thumbnailImageUrl: "https://example.com/bot/images/image.jpg",
      //     imageAspectRatio: "rectangle",
      //     imageSize: "cover",
      //     imageBackgroundColor: "#FFFFFF",
      //     title: "Menu",
      //     text: "Please select",
      //     defaultAction: {
      //       type: "uri",
      //       label: "View detail",
      //       uri: "http://example.com/page/123"
      //     },
      //     actions: [
      //       {
      //         type: "postback",
      //         label: "Buy",
      //         data: "action=buy&itemid=123"
      //       },
      //       {
      //         type: "postback",
      //         label: "Add to cart",
      //         data: "action=add&itemid=123"
      //       },
      //       {
      //         type: "uri",
      //         label: "View detail",
      //         uri: "http://example.com/page/123"
      //       }
      //     ]
      //   }
      // },
      {
        type: "text", // ①
        text: "Select your favorite food category or send me your location!",
        quickReply: {
          // ②
          items: [
            {
              type: "action seefoon", // ③
              imageUrl: "https://example.com/sushi.png",
              action: {
                type: "message",
                label: "Sushi",
                text: "Sushi"
              }
            },
            {
              type: "action willie",
              imageUrl: "https://example.com/tempura.png",
              action: {
                type: "message",
                label: "Tempura",
                text: "Tempura"
              }
            },
            {
              type: "action erk", // ④
              action: {
                type: "location",
                label: "Send location"
              }
            }
          ]
        }
      }
      // {
      //   type: "richmenuswitch",
      //   richMenuAliasId: "richmenu-alias-b",
      //   data: "richmenu-changed-to-b"
      // }
    ]
  };
  await axios.post("https://api.line.me/v2/bot/message/reply", body, config);
}
