'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page not found!</h1>
        <p>Oops, the resource you're looking for doesn't exist.</p>
        <a><Link to="app">Return home</Link></a>
      </div>
    );
  }
})

module.exports = NotFoundPage;