# Fetcher

Fetcher is a NodeJS application for dealing with Close.com API and fetching pipelines, and opportunities for this pipelines

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all dependencies and setup “Fetcher”.

From root directory run command:
```bash
npm install
```

## Running
### From src directory run the following command

```node
npm start
```

## Approach

I used **express** library to make a requests to Close.com API.
Authentication which I’ve used - Basic using **base64 encoded** api key which was generated in Close.com dashboard.
There are to requests.
1. **/pipeline** - to fetch all pipelines.
1.  **/opportunity/_:pipelineId_** - fetch all opportunities with specific pipeline Id.