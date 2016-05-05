![Bragit](https://raw.githubusercontent.com/websemantics/bragit/master/demo/img/header.png)

> Display your Github repositories stats in style using Semantic-ui labeled buttons. Working with [Semantic-ui labeled buttons](http://semantic-ui.com/elements/button.html#labeled) to represent Github buttons (Stars, Forks, Watchers, Issues, Download and Contributors), this jQuery library requests a Github repository information and updates the associated buttons accordingly.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/websemantics/semanti/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/websemantics/semanti.svg)](https://github.com/websemantics/semanti/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/semanti.svg)](https://github.com/websemantics/semanti/stargazers)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/websemantics/semanti.svg)](http://isitmaintained.com/project/websemantics/semanti "Percentage of issues still open") [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

#### Go on .. [Try it](http://websemantics.github.io/bragit/)

## How To

1- Include the following script line into your page.

```
<script type="text/javascript" src="https://cdn.rawgit.com/websemantics/bragit/0.1.0/bragit.js"></script>
```

2- Add a labeled button as specified in [Semantic-ui documentation](http://semantic-ui.com/elements/button.html#labeled).

3- Add a custom class name for the Github button you desire following a basic convention **`github-{username}-{repo}-{action}`** where action **stars**, **forks**, **watchers**, **issues**, **download** and `contributors`.

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

The above example shows the `stars` buttons of this repository, **Bragit**. The class name constructed as `github-websemantics-bragit-stars`. other classes for this repository would be,

```
github-websemantics-bragit-stars
github-websemantics-bragit-forks
github-websemantics-bragit-watchers
github-websemantics-bragit-issues
github-websemantics-bragit-download
```

## Behind the Scenes

The library takes care of many things behind closed doors. For one thing, it makes sure that the buttons styles are loaded if the [Semantic-ui](http://semantic-ui.com/elements/button.html#labeled) framework was not detected in the loaded document.

The code will automatically inject the css files that contain the styles of three `Semantic-ui` components `button`, `icon` and `label` using a public cnd `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui`

This can be overriden if required as follows

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

### Custom Class Names

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

By changing the delimiter to say `_` and the class name **cls** to `brag`, the class name for the `stars` buttons of this repository will be `brag_websemantics_bragit_stars`.

### Actions

Bragit supports a number of `actions` or `action buttons`, **stars**, **forks**, **watchers**, **issues**, **download**. These can be re-configured or more actions added through the `defaults` function,


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
Notice how each action has two attributes, a `uri` and a `property` name. Bragit appends the `uri` value to the repository `html_url` retrieved from Github. This then will be used to set the `href` value of the labeled button link element `a`. The `property` name is used to access a named attribute of the repository information returned from Github. 

For example, using `stargazers_count` as an index to the repository data will return an number value. This number/text is then used to update the label element of the associated button. And that's how the magic happens, ladies and gents.

## License

[MIT](LICENSE)
Copyright (c) Web Semantics, Inc.
