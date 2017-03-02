(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["capital_campaign_calculator"] = factory(require("react"));
	else
		root["capital_campaign_calculator"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Calculator = __webpack_require__(1);
	
	module.exports = Calculator;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Resource = __webpack_require__(3);
	var Dollar = __webpack_require__(5);
	
	var _require = __webpack_require__(7),
	    getFullAmount = _require.getFullAmount;
	
	var Calculator = React.createClass({
	  displayName: 'Calculator',
	
	  propTypes: {
	    resources: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      resources: this ? this.props.resources : [],
	      checked: {}
	    };
	  },
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      'div',
	      { className: 'ccc' },
	      React.createElement(
	        'h2',
	        null,
	        'Look at One Family\u2019s Plan for Creative Giving'
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement('th', null),
	            React.createElement(
	              'th',
	              null,
	              'Potential Resources'
	            ),
	            React.createElement(
	              'th',
	              null,
	              'Weekly'
	            ),
	            React.createElement(
	              'th',
	              null,
	              'Yearly'
	            ),
	            React.createElement(
	              'th',
	              null,
	              '3 Years'
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          this.state.resources.map(function (resource) {
	            return React.createElement(Resource, {
	              key: resource.desc,
	              resource: resource,
	              checked: _this.state.checked[resource.desc],
	              onCheck: _this.handleCheckResource.bind(_this, resource),
	              onChange: _this.handleChangeResource.bind(_this, resource)
	            });
	          }),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement('td', null),
	            React.createElement(
	              'td',
	              null,
	              React.createElement(
	                'h3',
	                null,
	                'Three Year Total'
	              )
	            ),
	            React.createElement('td', null),
	            React.createElement('td', null),
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Dollar, { amount: this.getTotal() })
	            )
	          )
	        )
	      )
	    );
	  },
	  getTotal: function getTotal() {
	    var _this2 = this;
	
	    var total = 0;
	    this.state.resources.forEach(function (resource) {
	      if (_this2.state.checked[resource.desc]) {
	        total += getFullAmount(resource) || 0;
	      }
	    });
	    return total;
	  },
	  handleCheckResource: function handleCheckResource(resource, checked) {
	    var newObj = this.state.checked;
	    newObj[resource.desc] = checked;
	    this.setState({ checked: newObj });
	  },
	  handleChangeResource: function handleChangeResource(resource, newResource) {
	    var index = this.state.resources.indexOf(resource);
	    var newResources = this.state.resources.slice(0, index).concat(newResource).concat(this.state.resources.slice(index + 1));
	    this.setState({ resources: newResources });
	  }
	});
	
	module.exports = Calculator;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var objectAssign = __webpack_require__(4);
	var Dollar = __webpack_require__(5);
	
	var _require = __webpack_require__(7),
	    getFullAmount = _require.getFullAmount,
	    getYearlyAmount = _require.getYearlyAmount,
	    getWeeklyAmount = _require.getWeeklyAmount;
	
	var Resource = React.createClass({
	  displayName: 'Resource',
	
	  propTypes: {
	    resource: React.PropTypes.shape({
	      desc: React.PropTypes.string.isRequired,
	      type: React.PropTypes.string.isRequired
	    }).isRequired,
	    checked: React.PropTypes.bool,
	    onCheck: React.PropTypes.func.isRequired,
	    onChange: React.PropTypes.func.isRequired
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      'tr',
	      { className: this.getClassName() },
	      React.createElement(
	        'td',
	        { className: 'checkbox-column' },
	        React.createElement('input', {
	          id: this.getId(),
	          type: 'checkbox',
	          checked: this.props.checked || false,
	          onClick: function onClick(e) {
	            return _this.props.onCheck(e.target.checked);
	          }
	        })
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'label',
	          { htmlFor: this.getId() },
	          this.props.resource.desc
	        )
	      ),
	      React.createElement(
	        'td',
	        { className: 'amount' },
	        React.createElement(Dollar, {
	          amount: getWeeklyAmount(this.props.resource) || null,
	          editable: this.props.checked && this.props.resource.type === 'weekly',
	          onChange: this.handleChange.bind(this, 'weekly')
	        })
	      ),
	      React.createElement(
	        'td',
	        { className: 'amount' },
	        React.createElement(Dollar, {
	          amount: getYearlyAmount(this.props.resource) || null,
	          editable: this.props.checked && this.props.resource.type === 'yearly',
	          onChange: this.handleChange.bind(this, 'yearly')
	        })
	      ),
	      React.createElement(
	        'td',
	        { className: 'amount' },
	        React.createElement(Dollar, {
	          amount: getFullAmount(this.props.resource) || null,
	          editable: this.props.checked && this.props.resource.type === 'full',
	          onChange: this.handleChange.bind(this, 'full')
	        })
	      )
	    );
	  },
	  handleChange: function handleChange(attr, value) {
	    var resource = objectAssign({}, this.props.resource);
	    resource[attr] = value;
	    this.props.onChange(resource);
	  },
	  getId: function getId() {
	    return this.props.resource.desc.replace(/[^a-z]/, '');
	  },
	  getClassName: function getClassName() {
	    return this.props.checked ? 'enabled' : 'disabled';
	  }
	});
	
	module.exports = Resource;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var React = __webpack_require__(2);
	
	var Dollar = function Dollar(props) {
	  if (!props.amount && !props.editable) return React.createElement("span", null);
	  return React.createElement(
	    "span",
	    { className: "amount-input" },
	    React.createElement(
	      "span",
	      { className: "dollar-sign" },
	      "$"
	    ),
	    props.editable ? React.createElement("input", { value: props.amount || '', onChange: function onChange(e) {
	        return props.onChange(e.target.value);
	      } }) : React.createElement(
	      "span",
	      { className: "amount" },
	      props.amount.toLocaleString()
	    )
	  );
	};
	
	process.env.NODE_ENV !== "production" ? Dollar.propTypes = {
	  amount: React.PropTypes.number,
	  onChange: React.PropTypes.func,
	  editable: React.PropTypes.bool
	} : void 0;
	
	module.exports = Dollar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports.getWeeklyAmount = function (resource) {
	  if (resource.weekly) {
	    return parseInt(resource.weekly, 10);
	  }
	};
	
	exports.getYearlyAmount = function (resource) {
	  if (resource.yearly) {
	    return parseInt(resource.yearly, 10);
	  } else if (resource.weekly) {
	    return parseInt(resource.weekly, 10) * 52;
	  }
	};
	
	exports.getFullAmount = function (resource) {
	  if (resource.full) {
	    return parseInt(resource.full, 10);
	  } else if (resource.yearly) {
	    return parseInt(resource.yearly, 10) * 3;
	  } else if (resource.weekly) {
	    return parseInt(resource.weekly, 10) * 52 * 3;
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=capital_campaign_calculator.js.map