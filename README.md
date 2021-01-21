# Cloud Notify GitHub Action Documentation

Receive push notifications on your iOS device via this GitHub action to notify you of the progress of your builds.
This runs sequentially, as a result, place the below code anywhere in your workflow where you'd like to get notified of an particular event.
A popular example of this would be to place the code below at the end of your Workflow file do you can get notified upon build completion.
You can also use this to get notified of any errors in your build throughout your workflow (which will require you to place this code more than once around the workflow).
This is currently only iOS supported.

## Pre-requisites

To run this action you'll need:

- An API token from the app.
- An USERID key, also from the app.

## Setup

1. Inside one of your GitHub projects in an existing workflow create an event.
2. Name and bring in the action code into your worflow file (.yml file):

```
- name: Cloud Notify push notification
  uses: nathan1258/cloudNotify-action@master
```

3. Add a new secret `CLOUD_NOTIFY_API_TOKEN` and `CLOUD_NOTIFY_USERID_KEY` (both found in the app).
4. Commit your update .yml file.

## Example Workflow

```yaml
name: Notify on every commit

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Cloud Notify push notification
        uses: nathan1258/cloudNotify-action@master
        env:
          TOKEN: ${{ secrets.CLOUD_NOTIFY_API_TOKEN }}
          USERID: ${{ secrets.CLOUD_NOTIFY_USERID_KEY }}
          TITLE: `New GitHub commit on ${process.env.GITHUB_REPOSITORY} 🎉`
          MESSAGE: "There is a new commit!"
```

## TODO

### - Add Link support enabling the user to be directed to a specified link on tap of notification

### - More developer tools in one app

### - Android support

## Support

Support, Bugs and Ideas can be requested [here.](mailto:nathan@ellisn.com)
