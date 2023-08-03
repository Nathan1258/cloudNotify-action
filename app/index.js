const request = require("request");
const fs = require("fs");

const API_URL = `https://cloud-notify.ellisn.com/api/notify?`;

const { GITHUB_EVENT_PATH, MESSAGE, TITLE, TOKEN, USERID, GITHUB_REPOSITORY, LINK } = process.env;

let eventPayload;
try {
  eventPayload = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, "utf8"));
} catch (err) {
  console.error("Error reading event payload:", err);
  process.exit(1);
}

const message = {
  body: MESSAGE || "No message specified",
  title: TITLE || `GitHub Notification from ${GITHUB_REPOSITORY}`,
};

if (!TOKEN) {
  console.error("CLOUD_NOTIFY_API_TOKEN is missing");
  process.exit(1);
}

if (!USERID) {
  console.error("CLOUD_NOTIFY_USERID_KEY is missing");
  process.exit(1);
}

let newURL = `${API_URL}userID=${USERID}&token=${TOKEN}&title=${encodeURIComponent(message.title)}&body=${encodeURIComponent(message.body)}`;

newURL += LINK ? `&link=${encodeURIComponent(LINK)}` : '';

request({ url: newURL, method: "GET" }, (err, response) => {
  if (err) {
    console.error(err.toString());
  } else {
    console.log("Notification sent! Response from server:", response.body);
  }
});
