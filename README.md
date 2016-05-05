![Bragit](https://raw.githubusercontent.com/websemantics/bragit/master/demo/img/header.png)

> Display your Github repositories stats in style using Semantic-ui labeled buttons. Working with [Semantic-ui labeled buttons](http://semantic-ui.com/elements/button.html#labeled) to represent Github buttons (Stars, Forks, Watchers, Issues, Download and Contributors), this jQuery library requests a Github repository information and updates the associated buttons accordingly.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/websemantics/semanti/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/websemantics/semanti.svg)](https://github.com/websemantics/semanti/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/semanti.svg)](https://github.com/websemantics/semanti/stargazers)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/websemantics/semanti.svg)](http://isitmaintained.com/project/websemantics/semanti "Percentage of issues still open") [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

#### Use it [HERE](http://websemantics.github.io/bragit/) or follow the guide below, 

## How To

1- Include the following script in a web page. Notice the release number `0.1.0` in the url; change as needed.

```
<script type="text/javascript" src="https://cdn.rawgit.com/websemantics/bragit/0.1.0/bragit.js"></script>
```

2- Add a labeled button as specified in [Semantic-ui documentation](http://semantic-ui.com/elements/button.html#labeled).

3- Add a custom class name for the Github button you desire following a basic convention **`github-{username}-{repo}-{action}`** where action can be, **stars**, **forks**, **watchers**, **issues**, **download** or **contributors**.

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

The above example explains how to add a `stars` button of this repository, **Bragit**. The class name constructed as `github-websemantics-bragit-stars`. Following the above formula, other possible classes / buttons for this repository would be,

```
github-websemantics-bragit-stars
github-websemantics-bragit-forks
github-websemantics-bragit-watchers
github-websemantics-bragit-issues
github-websemantics-bragit-download
```

## Behind the Scenes

The library takes care of many things behind closed doors. For one thing, it makes sure that the buttons styles are loaded if the [Semantic-ui](http://semantic-ui.com/elements/button.html#labeled) framework was not detected in the loaded document.

The code will automatically inject the css files that contain the styles of three `Semantic-ui` components `button`, `icon` and `label` using a public cdn `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui`

This can be overridden if required as follows

```
<script type="text/javascript">

  Bragit.defaults({ css: {
    version: '2.1.8',
    inject: false,
    uri: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/{{version}}/components/{{module}}.min.css',
    modules: ['button', 'icon', 'label'],
    custom: null
    }});

</script>
```

Notice the `inject` flag which is responsible to force the injection of the specified components styles if set to `true`. Other modules can be added to the list of auto-loaded components and or a custom css styles by setting the `custom` attribute `custom: "css/styles.css"`

#### Custom Class Names

As explained above, **Bragit** detects the existence of a unique css class name pattern, **`github-{username}-{repo}-{action}`** to retrieve the required Github repository information and update the associated labeled buttons accordingly.

However, should the need arise, this can be changed as follows,

```
<script type="text/javascript">

  Bragit.defaults({
    delimiter: '-',
    cls: 'github'
  });

</script>
```

By changing the delimiter to say `_` and the class name **cls** to `brag`, the class name for the `stars` button of this repository will be `brag_websemantics_bragit_stars`.

#### Actions

**Bragit** supports a number of `actions` or `action buttons`, **stars**, **forks**, **watchers**, **issues**, **download** and **contributors**. These can be re-configured or more actions added through the `defaults` function,

```
<script type="text/javascript">

  Bragit.defaults({
    actions: {
      forks: {
        uri: '/network',
        property: 'forks_count'
      },stars: {
        uri: '/stargazers',
        property: 'stargazers_count'
      },watchers: {
        uri: '/watchers',
        property: 'subscribers_count'
      },issues: {
        uri: '/issues',
        property: 'open_issues_count'
      },download: {
        uri: '/archive/master.zip',
        property: null
      },contributors: {
        uri: '/contributors',
        property: null
      }
    }
  });

</script>
```
Notice how each action has two attributes, a `uri` and a `property` name. **Bragit** appends the `uri` value to the repository `html_url` retrieved from Github API. This is then used to set the `href` value of the labeled button link element `a`. The `property` name is used to access a named attribute in the repository information returned from Github API.

For example, using `stargazers_count` as an index to the repository data will return an number value. This number/text is then used to update the label element of the associated button (and that's how the magic happens, ladies and gents).

#### Using Bower

If the use of [Bower](http://bower.io/) is prefered, one can either include **Bragit** in the `bower.json` file or install from the command line,

```
Bower install bragit
```

## Bragit in the Wild

* [Image Select](https://github.com/websemantics/Image-Select), jQuery library that provides image support for Single and Multi select HTML tags to be used with [Chosen](https://harvesthq.github.io/chosen/).

* [Semantic Dojo](https://github.com/websemantics/semantic-dojo), A responsive Dojo theme that harnesses the style awesomeness of [Semantic-ui documentation](http://semantic-ui.com/elements/button.html#labeled) framework.

* [Palette Genie](https://github.com/websemantics/palette-genie), Turns color values from an Image or PhotoShop ACO file into a list of named colors, lighter and darker shades, CSS classes and a beautiful style guide.

* [Vimeo Upload](https://github.com/websemantics/vimeo-upload), Upload Vimeo videos and update their metadata directly from the browser.

* [Boxed](https://github.com/websemantics/boxed), Lightweight Boilerplate Generator that does not require the Command-line Interface (CLI) to customize software addons and packages, for the Visually-oriented Developers.

* [Oea.svg](https://github.com/websemantics/oeasvg.com), A library for building SVG interactive web applications. It provides three packages: Java.js, Draw2D.svg and Swing.svg, that makes building SVG apps a breeze.

* [Browser.js](https://github.com/websemantics/Browser.js), An implementation of MathML, HTML and SVG Layout Manager and CSS Processor (i.e. Browser) in JavaScript.

* [Hotdraw.js](https://github.com/websemantics/Hotdraw.js), a port of JHotDraw version 5.1. It is based on Erich Gamma's JHotDraw, which is copyright 1996, 1997 by IFA Informatik and Erich Gamma.


## License

[MIT](LICENSE)
Copyright (c) Web Semantics, Inc.
