/**
 * Semanti : Display your Github repositories stats in style using Semantic-ui labeled buttons
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jQuery'],
      function (jQuery) {
        return (root.Semanti = factory(jQuery))
      })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jQuery'))
  } else {
    root.Semanti = factory(root.jQuery)
  }
}(this, function ($) {
  var root = this || global
  var me = {VERSION: '0.1.1'}
  var base_uri = 'https://api.github.com/repos/'

  /* Library defaults, can be changed using the 'defaults' member method,

    - delimiter (string), used to glue / unglue classes

    - cls (string), prefix for the class names used to inject github stats / urls etc,

    - actions (object), list of all supported actions with Github buttons, the 'url' attribute
                        is used to modify the link element while the 'property' name is used to
                        access the information returned for the repository (for example,
                        stargazers_count will give a number of repo stars)
  */

  var defaults = {
    delimiter: '-',
    cls: 'github',
    actions: {forks: {
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
  }

  // -------------------------------------------------------------------------
  // Public methods

  /*
    Override class defaults

      Parameters:
      - opts (object): name value pairs

  */

  me.defaults = function (opts) {
    if (typeof opts === 'object' && opts !== null) {
      for (var prop in opts) {
        if (opts.hasOwnProperty(prop)) {
          defaults[prop] = opts[prop]
        }
      }
    }
    return JSON.parse(JSON.stringify(defaults))
  }

  /*
    Setup the buttons, scan the documents for classes with repo information
    i.e. github-websemantics-semanti-stars

  */

  me.init = function () {
    /* an associative array of all github repos used in the doc  */
    var repos = { /* username-repo : { username: name, repo : repo } */ }

    /* prepare the selector, i.e. github- */
    var selector = defaults.cls + defaults.delimiter

    /* get all classes with the default selector (i.e. github) */
    $('a[class*=' + selector).each(function (index, elem) {
      var cls = $(elem).attr('class') /* get element class */

      /* extract the github information from the element class string,  .. results in
         an array ['username', 'repo name', 'function'], i.e. ["websemantics", "semanti", "stars"] */
      var action = cls.slice(cls.indexOf(selector) + selector.length , cls.length)
        .split(' ')[0].split(defaults.delimiter)

      /* if an action has at least two parts, username/repo add to list of uris */
      if (action.length > 1) {
        repos[action[0] + defaults.delimiter + action[1]] = {username: action[0], repo: action[1]}
      }
    })

    /* request information of all repositories mentioned in the document,
       and make necessary changes to html code (update stats, urls), .. fun fun! */
    for (var i in repos) {
      get(repos[i], function (repo, data) {
        for (var action in defaults.actions) {
          var cls = [defaults.cls, repo.username, repo.repo, action].join(defaults.delimiter)
          $('.' + cls).attr('href', data['html_url'] + defaults.actions[action].uri)
          if (defaults.actions[action].property) {
            $('.' + cls + ' .label').text(data[defaults.actions[action].property] || 0)
          }
        }
      })
    }
  }

  /*
    HTTP Get

      Parameters:
      - repo (object): contains github username and repo
      - cb (function): callback function

  */

  function get (repo, cb) {
    $.ajax({
      url: base_uri + repo.username + '/' + repo.repo,
      complete: function (xhr) {
        cb.call(null, repo, xhr.responseJSON)
      }
    })
  }

  if (typeof $ === 'undefined') {
    console.error('Please install the latest jQuery!')
  } else {
    me.init()
  }

  return me
}))
