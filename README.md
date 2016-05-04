```
 ___ ___  _    ___ ___ _____
| _ ) _ \/_\ /  __|_ _|_   _|
| _ \   / _ \| (_ || |  | |  
|___/_|_\/ \ \\___|___| |_|
            \_\ Show it off
```

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/websemantics/semanti/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/websemantics/semanti.svg)](https://github.com/websemantics/semanti/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/semanti.svg)](https://github.com/websemantics/semanti/stargazers)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/websemantics/semanti.svg)](http://isitmaintained.com/project/websemantics/semanti "Percentage of issues still open") [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Display your Github repositories stats in style using Semantic-ui labeled buttons

> Working with [Semantic-ui labeled buttons](http://semantic-ui.com/elements/button.html#labeled) to represent Github buttons (Stars, Forks, Watchers, Issues, Download and Contributors), this jQuery library requests a Github repository information and updates the associated buttons accordingly.

#### Try [Demo](http://websemantics.github.io/bragit/)

## What is it

An eforetless way to present Github stats buttons of your repositories while not compromise on style using the amazing Semantic-ui framework.

## How To

1- Include the library in your page.

```
<script type="text/javascript" src="https://cdn.rawgit.com/websemantics/bragit/0.1.0/bragit.js"></script>
```

2- Insert a labeled button as specified in [Semantic-ui documentation](http://semantic-ui.com/elements/button.html#labeled). Add a custom class name for the Github button you desire following a basic convention `github-{username}-{repo}-{action}` where action `stars`, `forks`, `watchers`, `issues`, `download` and `contributors`. For example, to show the `stars` buttons of this repository `Bragit`, the class name would be `github-websemantics-bragit-stars`.

```
<a class="ui labeled tiny button github-websemantics-bragit-stars">
  <div class="ui brand tiny button">
    <i class="star icon"></i> Stars
  </div>
  <div class="ui basic brand left pointing label">
    <i class="spinner loading icon"></i>
  </div>
</a>
```

## License

[MIT](LICENSE)
Copyright (c) Web Semantics, Inc.
