### Markdor example

1. Install markdor

```bash
pnpm add @withspek/markdor
# or
npm install @withspek/markdor
# or
yarn add @withpspek/markdor
```

2. Code Example

````javascript
import md from "@withspek/markdor";

var syntaxTree = md.ReactMarkdown({ source: "hello ```js hello world```" });

// pretty-print this with 4-space indentation:
console.log(JSON.stringify(syntaxTree, null, 4));
````
