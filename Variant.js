var React = require('react-native');
import PropTypes from "prop-types";
var createReactClass = require("create-react-class");
var Variant = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  },

  render() {
    return this.props.children;
  },

  isVariant: true
});

module.exports = Variant;
