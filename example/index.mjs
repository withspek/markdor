import md from "@withspek/markdor";

var syntaxTree = md.ReactMarkdown({ source: "hello ```js hello world```" });

// pretty-print this with 4-space indentation:
console.log(JSON.stringify(syntaxTree, null, 4));
