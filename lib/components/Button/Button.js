'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var components_Button_style = require('./style.js');
require('@emotion/react');

/**
 * Primary UI component for user interaction
 */
const Button = (props) => {
    const { backgroundColor, label, primary, size = 'medium', ...res } = props;
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    return (jsxRuntime.jsx("button", { type: "button", css: components_Button_style.styButton, className: [`storybook-button--${size}`, mode].join(' '), style: { backgroundColor }, ...res, children: label }));
};

module.exports = Button;
