var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      input: placeholder };

    _this.onChange = _this.onChange.bind(_this);return _this;
  }

  // allows for user input
  _createClass(App, [{ key: 'onChange', value: function onChange(event) {
      this.setState({
        input: event.target.value });

    }

    // enters markup
  } /*, { key: 'markUp', value: function markUp() {
      var md = marked(this.state.input);
      return { __html: md };
    } } */
                     
                     , { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('h1', { id: 'header', className: 'text-center' }, React.createElement('u', null, 'Markdown Previewer')),
          React.createElement('div', { className: 'row' },
            React.createElement(Editor, { input: this.state.input, onChange: this.onChange }),
            React.createElement('div', { className: 'col-md-1' }),
            React.createElement(Preview, { input: this.state.input })),

          React.createElement(Footer, null)));


    } }]);return App;}(React.Component);



// used to change text that will show
var Editor = function Editor(props) {
  return (
    React.createElement('textarea', { id: 'editor', className: 'col-md-5', onChange: props.onChange, value: props.input }));
};


// displays text as markup
var Preview = function Preview(props) {
  return (
    React.createElement('div', { id: 'preview', className: 'col-md-5', dangerouslySetInnerHTML: { __html: marked(props.input) } }));

};


// small end credit
var Footer = function Footer() {
  return React.createElement('div', { className: 'footer text-center' }, 'A pen by \xA9Tom Nicholson');
};

// initial text displayed and marked up
var placeholder = '# Welcome to my _Markdown Previewer_!\n\n## I hope you find it useful.\n\nI have made other projects too. [Take a look](https://codepen.io/tomnpython)!\n\nI have written lots of `<p>code</p>` since I started learning in early 2018.\n\n```\n// Some of it is even on multiple lines:\n\nfunction likeThisOne(for, example) {\nif (for == example) {\nreturn true;\n};\n}\n```\n\nI have used many resources to help me learn, such as: \n- FreeCodeCamp\n- Codecademy\n- Youtube\n\n> I still have **lots** to learn, but I\'m getting there.\n\n![WorkingHard](https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b934f71d8055c9013853b2fe286d66f0&auto=format&fit=crop&w=250&q=80)\n\n';






























ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
