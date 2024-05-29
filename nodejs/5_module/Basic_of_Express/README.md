# Creating and Updating an Express Application with `nodemon`

This guide will walk you through setting up a simple Express application, updating it, and using `nodemon` to ensure that your server restarts automatically after code changes.

## Step 1: Initialize Your Project

First, you need to initialize your project. This will create a `package.json` file.

```bash
npm init
```

Follow the prompts to enter information about your project.

## Step 2: Install Express

Install the `Express` framework:

```bash
npm install express
```

## Step 3: Create Your Initial Express Application

Create a file named `index.js` and add the following code:

```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
```

## Step 4: Update Your Express Application

Update your `index.js` file to include an additional route:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About description here');
});

app.listen(3000, () => console.log('listening on port 3000'));
```

## Step 5: Install `nodemon`

To automatically restart your server whenever you update your code, install `nodemon`:

```bash
npm install nodemon
```

## Step 6: Use `nodemon` to Start Your Server

Start your server using `nodemon` to ensure it restarts after any code changes:

```bash
nodemon index.js
```

If you encounter any issues, you can try running:

```bash
npx nodemon index.js
```

## How `nodemon` Works

`nodemon` monitors your project files and automatically restarts the server when it detects any changes. This is especially useful during development, as it saves you from having to manually restart the server each time you make an update.

## Summary

1. **Initialize your project:**
    ```bash
    npm init
    ```

2. **Install Express:**
    ```bash
    npm install express
    ```

3. **Create your initial Express application (`index.js`):**
    ```js
    const express = require('express');
    const app = express();

    app.get('/', function (req, res) {
      res.send('Hello World');
    });

    app.listen(3000);
    ```

4. **Update your Express application to include more routes:**
    ```js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.get('/about', (req, res) => {
      res.send('About description here');
    });

    app.listen(3000, () => console.log('listening on port 3000'));
    ```

5. **Install `nodemon`:**
    ```bash
    npm install nodemon
    ```

6. **Start your server with `nodemon`:**
    ```bash
    nodemon index.js
    ```

    If you encounter any issues, try:
    ```bash
    npx nodemon index.js
    ```

Using `nodemon` helps streamline the development process by automatically restarting your server when changes are made, allowing for a more efficient workflow.


> This Markdown document provides a comprehensive guide to creating and updating an Express application, and explains how to use `nodemon` to automatically restart the server after code changes.