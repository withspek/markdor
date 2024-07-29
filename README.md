## @withspek/markdor

markdor is a markdown-like parser designed for simplicity
and extensibility.

## Philosophy

Most markdown-like parsers aim for [speed][marked] or
[edge case handling][CommonMark].
markdor aims for extensibility and simplicity.

[marked]: https://github.com/chjj/marked
[CommonMark]: https://github.com/jgm/CommonMark

What does this mean?
Many websites using markdown-like languages have custom extensions,
such as `@`mentions or other custom things. Unfortunately, most
markdown-like parsers don't extenting the parser without making a fork of it, and can be difficult to modify even when forked. Markdor is designed to allow simple addition of
custom extensions without needing to be forked.
