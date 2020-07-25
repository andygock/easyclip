# easy-clip

## Using in JS  projects

Install using npm or yarn

    npm install easy-clip
    yarn add easy-clip

```js
import copy from 'easyclip';

// copy 'Foobar' to clipboard
const buttonHandler = () => copy('Foobar);
```

See CodeSandbox example

## Using in browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>easy-clip test</title>
  </head>
  <body>
    <div><button id="button">Copy date and time to clipboard</button></div>
    <p>Paste clipboard contents into textarea to test.</p>
    <textarea
      rows="20"
      cols="80"
      placeholder="Paste text here for testing..."
    ></textarea>
    <script src="https://cdn.jsdelivr.net/npm/easyclip@latest/dist/easyclip.umd.js"></script>
    <script>
        window.addEventListener("load", function () {
        document
            .getElementById("button")
            .addEventListener("click", function () {
                if (!easyclip) return alert("easyclip missing");
                var str = new Date()
                easyclip(str + "\n");
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

The npm equivalents work should perfectly fine too.
