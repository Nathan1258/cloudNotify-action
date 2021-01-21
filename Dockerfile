FROM node:10.11.0-alpine

COPY ./app /app

ENTRYPOINT ["/app/entrypoint.sh"]

LABEL "com.github.actions.name"="Cloud Notify - Send push notifications to your devices"
LABEL "com.github.actions.description"="Receive push notifications on your iOS device via this GitHub action to notify you of the progress of your builds."
LABEL "com.github.actions.icon"="send"
LABEL "com.github.actions.color"="red"
LABEL "repository"="http://github.com/nathan1258/cloudNotify-github-action"
LABEL "homepage"="https://ellisn.com/"
LABEL "maintainer"="nathan@ellisn.com"
