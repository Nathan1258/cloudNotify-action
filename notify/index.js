const request = require("request");
const fs = require("fs");
const API_URL = `https://cloud-notify.ellisn.com/api/notify?`;

const eventPayload = JSON.parse(
  fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);

const message = {
  body: process.env.MESSAGE || "No message specified",
  title:
    process.env.TITLE ||
    `GitHub Notification from ${process.env.GITHUB_REPOSITORY}`,
};

if (!process.env.CLOUD_NOTIFY_API_KEY) {
  return console.error("API KEY is missing");
}

if (!process.env.CLOUD_NOTIFY_USERID) {
  return console.error("USERID KEY is missing");
}

console.log("Sending message", JSON.stringify(message));

request(
  {
    url:
      API_URL +
      ("userID=%s&token=%s&title=%s&body=%s" %
        (process.env.CLOUD_NOTIFY_API_KEY,
        process.env.CLOUD_NOTIFY_USERID,
        message.title,
        message.body)),
    method: "GET",
  },
  (err, response) => {
    if (err) {
      return console.error(err.toString());
    }
    console.log("Notification sent!", response.body);
  }
);
