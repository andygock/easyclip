# easyclip

Copy string to clipboard. Just the basics. < 1kB.

## Using in JS  projects

Install using npm or yarn

    npm install easy-clip
    yarn add easy-clip

```js
import copy from 'easyclip';

// copy 'Foobar' to clipboard
const buttonHandler = () => copy('Foobar');
```

[CodeSandbox demo](https://codesandbox.io/s/easyclip-react-vn1p6)

## Using in browser (HTML + Vanilla)

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
    <script src="https://cdn.jsdelivr.net/npm/easyclip@latest/dist/easyclip.umd.js"></script>
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

[CodeSandbox demo](https://codesandbox.io/s/easyclip-vanilla-wjsm5)

## Building

Install depedencies

    yarn

Build to `dist/`

    yarn build

The npm equivalents work should perfectly fine too.
