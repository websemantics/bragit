/**
 * Semanti : Show your Github repositories stats in style using Semantic UI labeled buttons
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
  var me = {VERSION: '0.1.0'}
  var $ = root.$
  var uri = {}
  var cls = null

  // -------------------------------------------------------------------------
  // Public methods

  /*
    Setup the buttons

      Parameters:
      - user (string): the github account username
      - repo (string): the github repository
      - cls (string): css class ('semanti' by default)

  */

  me.init = function (user, repo, _cls) {
    cls = _cls || 'semanti'

    uri = {
      user: 'https://api.github.com/users/' + user,
      repo: 'https://api.github.com/repos/' + user + '/' + repo,
      repos: 'https://api.github.com/users/' + user + '/repos'
    }

    get(uri.repo, function (data) {
      /* Basic stuff, .. go figure .. */
      
      $('.semanti.forks').attr('href', data['html_url'] + '/network')
      $('.semanti.stars').attr('href', data['html_url'] + '/stargazers')
      $('.semanti.watchers').attr('href', data['html_url'] + '/watchers')
      $('.semanti.issues').attr('href', data['html_url'] + '/issues')
      $('.semanti.download').attr('href', data['html_url'] + '/archive/master.zip')
      $('.semanti.contributors').attr('href', data['html_url'] + '/contributors')

      $('.semanti.forks .label').text(data['forks_count'] || 0)
      $('.semanti.stars .label').text(data['stargazers_count'] || 0)
      $('.semanti.watchers .label').text(data['subscribers_count'] || 0)
      $('.semanti.issues .label').text(data['open_issues_count'] || 0)
    })
  }

  /*
    HTTP Get

      Parameters:
      - url (string): unique resource identifier
      - cb (function): callback function

  */

  function get (url, cb) {
    $.ajax({
      url: url,
      complete: function (xhr) {
        cb.call(null, xhr.responseJSON)
      }
    })
  }

  if (typeof $ === 'undefined') {
    console.error('Please install the latest jQuery!')
  }

  return me
}))
