# Testing task for YOK

## Purpose of the task

The main purpose of the task is the developing of Video React component to
show video ads.

### Main Tasks

- Please use Typescript & React, additional libraries may be utilized for the test

- All of the components should be developed in the functional style, utilizing hooks
API

- The video ad component should be placed instead of the ad placeholder

- Video shouldn’t autoplay when website is loaded

- The video shall start playing only when it is at least 50% in the viewport of the
browser – and stop if it’s less than 50% of the video is in the viewport

- Display a message on the browser console when the video has started, has
played through 25%, 50%, 75% and 100% of the full video length

- In accordance with the IAB/MRC viewability standards, please display an
additional message in the browser console, after the ad has been in the viewport
of the browser with 50% of it viewable for 2 seconds in total

- Write tests to check the main functionality

- Browser compatibility: your test result must work either on Android or on iOS;
please tell us which environment you have tested against

## Installation and run

After the clone of repository invoke
```bash
npm install
```

to run tests:
```bash
npm run test
```

to start application:
```bash
npm start
```
thw application will be available on [localhost](http://localhost:3000)

## Browsers that checked against:

- Linux Ubuntu 18.04 Chrome

- Linux Ubuntu 18.04 Firefox

- iPhone iOS 10 Chrome

- iPhone iOS 10 Safari

- Android MIUI 12 Chrome

- Android MIUI 12 Firefox
