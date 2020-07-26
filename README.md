# easyclip

Copy string to clipboard. Just the basics. < 1kB.

## Using in JS  projects

[CodeSandbox demo](https://codesandbox.io/s/easyclip-react-vn1p6)

Install using npm or yarn

    npm install easy-clip
    yarn add easy-clip

```js
import copy from 'easyclip';

// copy 'Foobar' to clipboard
const buttonHandler = () => copy('Foobar');
```

## Using in browser (HTML + Vanilla)

[CodeSandbox demo](https://codesandbox.io/s/easyclip-vanilla-wjsm5)

Load script using

```html
<script src="https://cdn.jsdelivr.net/npm/easyclip@latest/dist/easyclip.min.js"></script>
```

Copy string to clipboard using function `easyclip()`

```js
easyclip("string to copy")
```

For a full example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <div><button id="button">Copy date and time to clipboard</button></div>
    <p>Paste clipboard contents into textarea to test.</p>
    <textarea
      id="textarea"
      rows="20"
      cols="80"
      placeholder="Paste text here for testing..."
    ></textarea>
    <script src="https://cdn.jsdelivr.net/npm/easyclip@latest/dist/easyclip.min.js"></script>
    <script>
      window.addEventListener("load", function() {
        // wait until DOM is loaded before running scripts
        document.getElementById("button").addEventListener("click", function() {
          // copy current date to clipboard
          easyclip(new Date() + "\n");

          // bring focus to textarea for testing
          document.getElementById("textarea").focus();
        });
      });
    </script>
  </body>
</html>

```

## Building

Install depedencies

    yarn

Build to `dist/`

    yarn build

The npm equivalents should work perfectly fine too.
