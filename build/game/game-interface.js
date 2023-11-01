var game = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.2.0";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          __name(getIteratorFn, "getIteratorFn");
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          __name(setExtraStackFrame, "setExtraStackFrame");
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          __name(warn, "warn");
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          __name(error, "error");
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          __name(printWarning, "printWarning");
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          __name(warnNoop, "warnNoop");
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          __name(Component, "Component");
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = /* @__PURE__ */ __name(function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            }, "defineDeprecationWarning");
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          __name(ComponentDummy, "ComponentDummy");
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          __name(PureComponent, "PureComponent");
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          __name(createRef, "createRef");
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          __name(isArray, "isArray");
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          __name(typeName, "typeName");
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          __name(willCoercionThrow, "willCoercionThrow");
          function testStringCoercion(value) {
            return "" + value;
          }
          __name(testStringCoercion, "testStringCoercion");
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          __name(checkKeyStringCoercion, "checkKeyStringCoercion");
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          __name(getWrappedName, "getWrappedName");
          function getContextName(type) {
            return type.displayName || "Context";
          }
          __name(getContextName, "getContextName");
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          __name(getComponentNameFromType, "getComponentNameFromType");
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          __name(hasValidRef, "hasValidRef");
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          __name(hasValidKey, "hasValidKey");
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = /* @__PURE__ */ __name(function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            }, "warnAboutAccessingKey");
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = /* @__PURE__ */ __name(function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            }, "warnAboutAccessingRef");
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          __name(defineRefPropWarningGetter, "defineRefPropWarningGetter");
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          __name(warnIfStringRefCannotBeAutoConverted, "warnIfStringRefCannotBeAutoConverted");
          var ReactElement = /* @__PURE__ */ __name(function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          }, "ReactElement");
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          __name(createElement, "createElement");
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          __name(cloneAndReplaceKey, "cloneAndReplaceKey");
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          __name(cloneElement, "cloneElement");
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          __name(isValidElement, "isValidElement");
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          __name(escape, "escape");
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          __name(escapeUserProvidedKey, "escapeUserProvidedKey");
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          __name(getElementKey, "getElementKey");
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          __name(mapIntoArray, "mapIntoArray");
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          __name(mapChildren, "mapChildren");
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          __name(countChildren, "countChildren");
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          __name(forEachChildren, "forEachChildren");
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          __name(toArray, "toArray");
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          __name(onlyChild, "onlyChild");
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          __name(createContext, "createContext");
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          __name(lazyInitializer, "lazyInitializer");
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          __name(lazy, "lazy");
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          __name(forwardRef, "forwardRef");
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          __name(isValidElementType, "isValidElementType");
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          __name(memo, "memo");
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          __name(resolveDispatcher, "resolveDispatcher");
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          __name(useContext, "useContext");
          function useState(initialState2) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState2);
          }
          __name(useState, "useState");
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          __name(useReducer, "useReducer");
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          __name(useRef, "useRef");
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          __name(useEffect, "useEffect");
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          __name(useInsertionEffect, "useInsertionEffect");
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          __name(useLayoutEffect, "useLayoutEffect");
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          __name(useCallback, "useCallback");
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          __name(useMemo, "useMemo");
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          __name(useImperativeHandle, "useImperativeHandle");
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          __name(useDebugValue, "useDebugValue");
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          __name(useTransition, "useTransition");
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          __name(useDeferredValue, "useDeferredValue");
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          __name(useId, "useId");
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          __name(useSyncExternalStore, "useSyncExternalStore");
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          __name(disabledLog, "disabledLog");
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          __name(disableLogs, "disableLogs");
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          __name(reenableLogs, "reenableLogs");
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = /* @__PURE__ */ __name(function() {
                  throw Error();
                }, "Fake");
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          __name(describeNativeComponentFrame, "describeNativeComponentFrame");
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          __name(describeFunctionComponentFrame, "describeFunctionComponentFrame");
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          __name(shouldConstruct, "shouldConstruct");
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          __name(describeUnknownElementTypeFrameInDEV, "describeUnknownElementTypeFrameInDEV");
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          __name(setCurrentlyValidatingElement, "setCurrentlyValidatingElement");
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          __name(checkPropTypes, "checkPropTypes");
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          __name(setCurrentlyValidatingElement$1, "setCurrentlyValidatingElement$1");
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          __name(getDeclarationErrorAddendum, "getDeclarationErrorAddendum");
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          __name(getSourceInfoErrorAddendum, "getSourceInfoErrorAddendum");
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          __name(getSourceInfoErrorAddendumForProps, "getSourceInfoErrorAddendumForProps");
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          __name(getCurrentComponentErrorInfo, "getCurrentComponentErrorInfo");
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          __name(validateExplicitKey, "validateExplicitKey");
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          __name(validateChildKeys, "validateChildKeys");
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          __name(validatePropTypes, "validatePropTypes");
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          __name(validateFragmentProps, "validateFragmentProps");
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          __name(createElementWithValidation, "createElementWithValidation");
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          __name(createFactoryWithValidation, "createFactoryWithValidation");
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          __name(cloneElementWithValidation, "cloneElementWithValidation");
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          __name(startTransition, "startTransition");
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = /* @__PURE__ */ __name(function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                }, "enqueueTaskImpl");
              }
            }
            return enqueueTaskImpl(task);
          }
          __name(enqueueTask, "enqueueTask");
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve2, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve2, reject);
                      } else {
                        resolve2(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve2, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                      } else {
                        resolve2(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve2, reject) {
                      resolve2(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          __name(act, "act");
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          __name(popActScope, "popActScope");
          function recursivelyFlushAsyncActWork(returnValue, resolve2, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve2(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve2(returnValue);
              }
            }
          }
          __name(recursivelyFlushAsyncActWork, "recursivelyFlushAsyncActWork");
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          __name(flushActQueue, "flushActQueue");
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // ../boardzilla-core/node_modules/json-stringify-safe/stringify.js
  var require_stringify = __commonJS({
    "../boardzilla-core/node_modules/json-stringify-safe/stringify.js"(exports, module) {
      exports = module.exports = stringify;
      exports.getSerialize = serializer;
      function stringify(obj, replacer, spaces, cycleReplacer) {
        return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
      }
      __name(stringify, "stringify");
      function serializer(replacer, cycleReplacer) {
        var stack = [], keys = [];
        if (cycleReplacer == null)
          cycleReplacer = /* @__PURE__ */ __name(function(key, value) {
            if (stack[0] === value)
              return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
          }, "cycleReplacer");
        return function(key, value) {
          if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
              value = cycleReplacer.call(this, key, value);
          } else
            stack.push(value);
          return replacer == null ? value : replacer.call(this, key, value);
        };
      }
      __name(serializer, "serializer");
    }
  });

  // ../boardzilla-core/node_modules/random-seed/index.js
  var require_random_seed = __commonJS({
    "../boardzilla-core/node_modules/random-seed/index.js"(exports, module) {
      "use strict";
      var stringify = require_stringify();
      var Mash = /* @__PURE__ */ __name(function() {
        var n = 4022871197;
        var mash = /* @__PURE__ */ __name(function(data) {
          if (data) {
            data = data.toString();
            for (var i = 0; i < data.length; i++) {
              n += data.charCodeAt(i);
              var h = 0.02519603282416938 * n;
              n = h >>> 0;
              h -= n;
              h *= n;
              n = h >>> 0;
              h -= n;
              n += h * 4294967296;
            }
            return (n >>> 0) * 23283064365386963e-26;
          } else {
            n = 4022871197;
          }
        }, "mash");
        return mash;
      }, "Mash");
      var uheprng = /* @__PURE__ */ __name(function(seed) {
        return function() {
          var o = 48;
          var c = 1;
          var p = o;
          var s = new Array(o);
          var i;
          var j;
          var k = 0;
          var mash = new Mash();
          for (i = 0; i < o; i++) {
            s[i] = mash(Math.random());
          }
          var rawprng = /* @__PURE__ */ __name(function() {
            if (++p >= o) {
              p = 0;
            }
            var t = 1768863 * s[p] + c * 23283064365386963e-26;
            return s[p] = t - (c = t | 0);
          }, "rawprng");
          var random3 = /* @__PURE__ */ __name(function(range2) {
            return Math.floor(range2 * (rawprng() + (rawprng() * 2097152 | 0) * 11102230246251565e-32));
          }, "random");
          random3.string = function(count) {
            var i2;
            var s2 = "";
            for (i2 = 0; i2 < count; i2++) {
              s2 += String.fromCharCode(33 + random3(94));
            }
            return s2;
          };
          var hash = /* @__PURE__ */ __name(function() {
            var args = Array.prototype.slice.call(arguments);
            for (i = 0; i < args.length; i++) {
              for (j = 0; j < o; j++) {
                s[j] -= mash(args[i]);
                if (s[j] < 0) {
                  s[j] += 1;
                }
              }
            }
          }, "hash");
          random3.cleanString = function(inStr) {
            inStr = inStr.replace(/(^\s*)|(\s*$)/gi, "");
            inStr = inStr.replace(/[\x00-\x1F]/gi, "");
            inStr = inStr.replace(/\n /, "\n");
            return inStr;
          };
          random3.hashString = function(inStr) {
            inStr = random3.cleanString(inStr);
            mash(inStr);
            for (i = 0; i < inStr.length; i++) {
              k = inStr.charCodeAt(i);
              for (j = 0; j < o; j++) {
                s[j] -= mash(k);
                if (s[j] < 0) {
                  s[j] += 1;
                }
              }
            }
          };
          random3.seed = function(seed2) {
            if (typeof seed2 === "undefined" || seed2 === null) {
              seed2 = Math.random();
            }
            if (typeof seed2 !== "string") {
              seed2 = stringify(seed2, function(key, value) {
                if (typeof value === "function") {
                  return value.toString();
                }
                return value;
              });
            }
            random3.initState();
            random3.hashString(seed2);
          };
          random3.addEntropy = function() {
            var args = [];
            for (i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            hash(k++ + (/* @__PURE__ */ new Date()).getTime() + args.join("") + Math.random());
          };
          random3.initState = function() {
            mash();
            for (i = 0; i < o; i++) {
              s[i] = mash(" ");
            }
            c = 1;
            p = o;
          };
          random3.done = function() {
            mash = null;
          };
          if (typeof seed !== "undefined") {
            random3.seed(seed);
          }
          random3.range = function(range2) {
            return random3(range2);
          };
          random3.random = function() {
            return random3(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
          };
          random3.floatBetween = function(min, max) {
            return random3.random() * (max - min) + min;
          };
          random3.intBetween = function(min, max) {
            return Math.floor(random3.random() * (max - min + 1)) + min;
          };
          return random3;
        }();
      }, "uheprng");
      uheprng.create = function(seed) {
        return new uheprng(seed);
      };
      module.exports = uheprng;
    }
  });

  // ../boardzilla-core/node_modules/graphology/dist/graphology.umd.min.js
  var require_graphology_umd_min = __commonJS({
    "../boardzilla-core/node_modules/graphology/dist/graphology.umd.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).graphology = e();
      }(exports, function() {
        "use strict";
        function t(e2) {
          return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, t(e2);
        }
        __name(t, "t");
        function e(t2, e2) {
          t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, r(t2, e2);
        }
        __name(e, "e");
        function n(t2) {
          return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, n(t2);
        }
        __name(n, "n");
        function r(t2, e2) {
          return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, r(t2, e2);
        }
        __name(r, "r");
        function i() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t2) {
            return false;
          }
        }
        __name(i, "i");
        function o(t2, e2, n2) {
          return o = i() ? Reflect.construct.bind() : function(t3, e3, n3) {
            var i2 = [null];
            i2.push.apply(i2, e3);
            var o2 = new (Function.bind.apply(t3, i2))();
            return n3 && r(o2, n3.prototype), o2;
          }, o.apply(null, arguments);
        }
        __name(o, "o");
        function a(t2) {
          var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return a = /* @__PURE__ */ __name(function(t3) {
            if (null === t3 || (i2 = t3, -1 === Function.toString.call(i2).indexOf("[native code]")))
              return t3;
            var i2;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e2) {
              if (e2.has(t3))
                return e2.get(t3);
              e2.set(t3, a2);
            }
            function a2() {
              return o(t3, arguments, n(this).constructor);
            }
            __name(a2, "a");
            return a2.prototype = Object.create(t3.prototype, { constructor: { value: a2, enumerable: false, writable: true, configurable: true } }), r(a2, t3);
          }, "a"), a(t2);
        }
        __name(a, "a");
        function c(t2) {
          if (void 0 === t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        __name(c, "c");
        var u = /* @__PURE__ */ __name(function() {
          for (var t2 = arguments[0], e2 = 1, n2 = arguments.length; e2 < n2; e2++)
            if (arguments[e2])
              for (var r2 in arguments[e2])
                t2[r2] = arguments[e2][r2];
          return t2;
        }, "u");
        function d(t2, e2, n2, r2) {
          var i2 = t2._nodes.get(e2), o2 = null;
          return i2 ? o2 = "mixed" === r2 ? i2.out && i2.out[n2] || i2.undirected && i2.undirected[n2] : "directed" === r2 ? i2.out && i2.out[n2] : i2.undirected && i2.undirected[n2] : o2;
        }
        __name(d, "d");
        function s(e2) {
          return "object" === t(e2) && null !== e2;
        }
        __name(s, "s");
        function h(t2) {
          var e2;
          for (e2 in t2)
            return false;
          return true;
        }
        __name(h, "h");
        function p(t2, e2, n2) {
          Object.defineProperty(t2, e2, { enumerable: false, configurable: false, writable: true, value: n2 });
        }
        __name(p, "p");
        function f(t2, e2, n2) {
          var r2 = { enumerable: true, configurable: true };
          "function" == typeof n2 ? r2.get = n2 : (r2.value = n2, r2.writable = false), Object.defineProperty(t2, e2, r2);
        }
        __name(f, "f");
        function l(t2) {
          return !!s(t2) && !(t2.attributes && !Array.isArray(t2.attributes));
        }
        __name(l, "l");
        "function" == typeof Object.assign && (u = Object.assign);
        var g, y = { exports: {} }, w = "object" == typeof Reflect ? Reflect : null, v = w && "function" == typeof w.apply ? w.apply : function(t2, e2, n2) {
          return Function.prototype.apply.call(t2, e2, n2);
        };
        g = w && "function" == typeof w.ownKeys ? w.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
          return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
        } : function(t2) {
          return Object.getOwnPropertyNames(t2);
        };
        var b = Number.isNaN || function(t2) {
          return t2 != t2;
        };
        function m() {
          m.init.call(this);
        }
        __name(m, "m");
        y.exports = m, y.exports.once = function(t2, e2) {
          return new Promise(function(n2, r2) {
            function i2(n3) {
              t2.removeListener(e2, o2), r2(n3);
            }
            __name(i2, "i");
            function o2() {
              "function" == typeof t2.removeListener && t2.removeListener("error", i2), n2([].slice.call(arguments));
            }
            __name(o2, "o");
            U(t2, e2, o2, { once: true }), "error" !== e2 && function(t3, e3, n3) {
              "function" == typeof t3.on && U(t3, "error", e3, n3);
            }(t2, i2, { once: true });
          });
        }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
        var k = 10;
        function _(t2) {
          if ("function" != typeof t2)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
        }
        __name(_, "_");
        function G(t2) {
          return void 0 === t2._maxListeners ? m.defaultMaxListeners : t2._maxListeners;
        }
        __name(G, "G");
        function x(t2, e2, n2, r2) {
          var i2, o2, a2, c2;
          if (_(n2), void 0 === (o2 = t2._events) ? (o2 = t2._events = /* @__PURE__ */ Object.create(null), t2._eventsCount = 0) : (void 0 !== o2.newListener && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), o2 = t2._events), a2 = o2[e2]), void 0 === a2)
            a2 = o2[e2] = n2, ++t2._eventsCount;
          else if ("function" == typeof a2 ? a2 = o2[e2] = r2 ? [n2, a2] : [a2, n2] : r2 ? a2.unshift(n2) : a2.push(n2), (i2 = G(t2)) > 0 && a2.length > i2 && !a2.warned) {
            a2.warned = true;
            var u2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a2.length, c2 = u2, console && console.warn && console.warn(c2);
          }
          return t2;
        }
        __name(x, "x");
        function E() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        __name(E, "E");
        function A(t2, e2, n2) {
          var r2 = { fired: false, wrapFn: void 0, target: t2, type: e2, listener: n2 }, i2 = E.bind(r2);
          return i2.listener = n2, r2.wrapFn = i2, i2;
        }
        __name(A, "A");
        function L(t2, e2, n2) {
          var r2 = t2._events;
          if (void 0 === r2)
            return [];
          var i2 = r2[e2];
          return void 0 === i2 ? [] : "function" == typeof i2 ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(t3) {
            for (var e3 = new Array(t3.length), n3 = 0; n3 < e3.length; ++n3)
              e3[n3] = t3[n3].listener || t3[n3];
            return e3;
          }(i2) : D(i2, i2.length);
        }
        __name(L, "L");
        function S(t2) {
          var e2 = this._events;
          if (void 0 !== e2) {
            var n2 = e2[t2];
            if ("function" == typeof n2)
              return 1;
            if (void 0 !== n2)
              return n2.length;
          }
          return 0;
        }
        __name(S, "S");
        function D(t2, e2) {
          for (var n2 = new Array(e2), r2 = 0; r2 < e2; ++r2)
            n2[r2] = t2[r2];
          return n2;
        }
        __name(D, "D");
        function U(t2, e2, n2, r2) {
          if ("function" == typeof t2.on)
            r2.once ? t2.once(e2, n2) : t2.on(e2, n2);
          else {
            if ("function" != typeof t2.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
            t2.addEventListener(e2, /* @__PURE__ */ __name(function i2(o2) {
              r2.once && t2.removeEventListener(e2, i2), n2(o2);
            }, "i"));
          }
        }
        __name(U, "U");
        function N(t2) {
          if ("function" != typeof t2)
            throw new Error("obliterator/iterator: expecting a function!");
          this.next = t2;
        }
        __name(N, "N");
        Object.defineProperty(m, "defaultMaxListeners", { enumerable: true, get: function() {
          return k;
        }, set: function(t2) {
          if ("number" != typeof t2 || t2 < 0 || b(t2))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          k = t2;
        } }), m.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, m.prototype.setMaxListeners = function(t2) {
          if ("number" != typeof t2 || t2 < 0 || b(t2))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          return this._maxListeners = t2, this;
        }, m.prototype.getMaxListeners = function() {
          return G(this);
        }, m.prototype.emit = function(t2) {
          for (var e2 = [], n2 = 1; n2 < arguments.length; n2++)
            e2.push(arguments[n2]);
          var r2 = "error" === t2, i2 = this._events;
          if (void 0 !== i2)
            r2 = r2 && void 0 === i2.error;
          else if (!r2)
            return false;
          if (r2) {
            var o2;
            if (e2.length > 0 && (o2 = e2[0]), o2 instanceof Error)
              throw o2;
            var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
            throw a2.context = o2, a2;
          }
          var c2 = i2[t2];
          if (void 0 === c2)
            return false;
          if ("function" == typeof c2)
            v(c2, this, e2);
          else {
            var u2 = c2.length, d2 = D(c2, u2);
            for (n2 = 0; n2 < u2; ++n2)
              v(d2[n2], this, e2);
          }
          return true;
        }, m.prototype.addListener = function(t2, e2) {
          return x(this, t2, e2, false);
        }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(t2, e2) {
          return x(this, t2, e2, true);
        }, m.prototype.once = function(t2, e2) {
          return _(e2), this.on(t2, A(this, t2, e2)), this;
        }, m.prototype.prependOnceListener = function(t2, e2) {
          return _(e2), this.prependListener(t2, A(this, t2, e2)), this;
        }, m.prototype.removeListener = function(t2, e2) {
          var n2, r2, i2, o2, a2;
          if (_(e2), void 0 === (r2 = this._events))
            return this;
          if (void 0 === (n2 = r2[t2]))
            return this;
          if (n2 === e2 || n2.listener === e2)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
          else if ("function" != typeof n2) {
            for (i2 = -1, o2 = n2.length - 1; o2 >= 0; o2--)
              if (n2[o2] === e2 || n2[o2].listener === e2) {
                a2 = n2[o2].listener, i2 = o2;
                break;
              }
            if (i2 < 0)
              return this;
            0 === i2 ? n2.shift() : function(t3, e3) {
              for (; e3 + 1 < t3.length; e3++)
                t3[e3] = t3[e3 + 1];
              t3.pop();
            }(n2, i2), 1 === n2.length && (r2[t2] = n2[0]), void 0 !== r2.removeListener && this.emit("removeListener", t2, a2 || e2);
          }
          return this;
        }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(t2) {
          var e2, n2, r2;
          if (void 0 === (n2 = this._events))
            return this;
          if (void 0 === n2.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[t2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[t2]), this;
          if (0 === arguments.length) {
            var i2, o2 = Object.keys(n2);
            for (r2 = 0; r2 < o2.length; ++r2)
              "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e2 = n2[t2]))
            this.removeListener(t2, e2);
          else if (void 0 !== e2)
            for (r2 = e2.length - 1; r2 >= 0; r2--)
              this.removeListener(t2, e2[r2]);
          return this;
        }, m.prototype.listeners = function(t2) {
          return L(this, t2, true);
        }, m.prototype.rawListeners = function(t2) {
          return L(this, t2, false);
        }, m.listenerCount = function(t2, e2) {
          return "function" == typeof t2.listenerCount ? t2.listenerCount(e2) : S.call(t2, e2);
        }, m.prototype.listenerCount = S, m.prototype.eventNames = function() {
          return this._eventsCount > 0 ? g(this._events) : [];
        }, "undefined" != typeof Symbol && (N.prototype[Symbol.iterator] = function() {
          return this;
        }), N.of = function() {
          var t2 = arguments, e2 = t2.length, n2 = 0;
          return new N(function() {
            return n2 >= e2 ? { done: true } : { done: false, value: t2[n2++] };
          });
        }, N.empty = function() {
          return new N(function() {
            return { done: true };
          });
        }, N.fromSequence = function(t2) {
          var e2 = 0, n2 = t2.length;
          return new N(function() {
            return e2 >= n2 ? { done: true } : { done: false, value: t2[e2++] };
          });
        }, N.is = function(t2) {
          return t2 instanceof N || "object" == typeof t2 && null !== t2 && "function" == typeof t2.next;
        };
        var O = N, j = {};
        j.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
        var C = O, M = j, z = M.ARRAY_BUFFER_SUPPORT, W = M.SYMBOL_SUPPORT;
        var P = /* @__PURE__ */ __name(function(t2) {
          var e2 = function(t3) {
            return "string" == typeof t3 || Array.isArray(t3) || z && ArrayBuffer.isView(t3) ? C.fromSequence(t3) : "object" != typeof t3 || null === t3 ? null : W && "function" == typeof t3[Symbol.iterator] ? t3[Symbol.iterator]() : "function" == typeof t3.next ? t3 : null;
          }(t2);
          if (!e2)
            throw new Error("obliterator: target is not iterable nor a valid iterator.");
          return e2;
        }, "P"), R = P, K = /* @__PURE__ */ __name(function(t2, e2) {
          for (var n2, r2 = arguments.length > 1 ? e2 : 1 / 0, i2 = r2 !== 1 / 0 ? new Array(r2) : [], o2 = 0, a2 = R(t2); ; ) {
            if (o2 === r2)
              return i2;
            if ((n2 = a2.next()).done)
              return o2 !== e2 && (i2.length = o2), i2;
            i2[o2++] = n2.value;
          }
        }, "K"), T = function(t2) {
          function n2(e2) {
            var n3;
            return (n3 = t2.call(this) || this).name = "GraphError", n3.message = e2, n3;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(a(Error)), B = function(t2) {
          function n2(e2) {
            var r2;
            return (r2 = t2.call(this, e2) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(T), F = function(t2) {
          function n2(e2) {
            var r2;
            return (r2 = t2.call(this, e2) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(T), I = function(t2) {
          function n2(e2) {
            var r2;
            return (r2 = t2.call(this, e2) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(T);
        function Y(t2, e2) {
          this.key = t2, this.attributes = e2, this.clear();
        }
        __name(Y, "Y");
        function q(t2, e2) {
          this.key = t2, this.attributes = e2, this.clear();
        }
        __name(q, "q");
        function J(t2, e2) {
          this.key = t2, this.attributes = e2, this.clear();
        }
        __name(J, "J");
        function V(t2, e2, n2, r2, i2) {
          this.key = e2, this.attributes = i2, this.undirected = t2, this.source = n2, this.target = r2;
        }
        __name(V, "V");
        Y.prototype.clear = function() {
          this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
        }, q.prototype.clear = function() {
          this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
        }, J.prototype.clear = function() {
          this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
        }, V.prototype.attach = function() {
          var t2 = "out", e2 = "in";
          this.undirected && (t2 = e2 = "undirected");
          var n2 = this.source.key, r2 = this.target.key;
          this.source[t2][r2] = this, this.undirected && n2 === r2 || (this.target[e2][n2] = this);
        }, V.prototype.attachMulti = function() {
          var t2 = "out", e2 = "in", n2 = this.source.key, r2 = this.target.key;
          this.undirected && (t2 = e2 = "undirected");
          var i2 = this.source[t2], o2 = i2[r2];
          if (void 0 === o2)
            return i2[r2] = this, void (this.undirected && n2 === r2 || (this.target[e2][n2] = this));
          o2.previous = this, this.next = o2, i2[r2] = this, this.target[e2][n2] = this;
        }, V.prototype.detach = function() {
          var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
          this.undirected && (n2 = r2 = "undirected"), delete this.source[n2][e2], delete this.target[r2][t2];
        }, V.prototype.detachMulti = function() {
          var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
          this.undirected && (n2 = r2 = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n2][e2], delete this.target[r2][t2]) : (this.next.previous = void 0, this.source[n2][e2] = this.next, this.target[r2][t2] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
        };
        function H(t2, e2, n2, r2, i2, o2, a2) {
          var c2, u2, d2, s2;
          if (r2 = "" + r2, 0 === n2) {
            if (!(c2 = t2._nodes.get(r2)))
              throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" node in the graph.'));
            d2 = i2, s2 = o2;
          } else if (3 === n2) {
            if (i2 = "" + i2, !(u2 = t2._edges.get(i2)))
              throw new F("Graph.".concat(e2, ': could not find the "').concat(i2, '" edge in the graph.'));
            var h2 = u2.source.key, p2 = u2.target.key;
            if (r2 === h2)
              c2 = u2.target;
            else {
              if (r2 !== p2)
                throw new F("Graph.".concat(e2, ': the "').concat(r2, '" node is not attached to the "').concat(i2, '" edge (').concat(h2, ", ").concat(p2, ")."));
              c2 = u2.source;
            }
            d2 = o2, s2 = a2;
          } else {
            if (!(u2 = t2._edges.get(r2)))
              throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" edge in the graph.'));
            c2 = 1 === n2 ? u2.source : u2.target, d2 = i2, s2 = o2;
          }
          return [c2, d2, s2];
        }
        __name(H, "H");
        var Q = [{ name: function(t2) {
          return "get".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            return a2.attributes[c2];
          };
        } }, { name: function(t2) {
          return "get".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            return H(this, e2, n2, t3, r2)[0].attributes;
          };
        } }, { name: function(t2) {
          return "has".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            return a2.attributes.hasOwnProperty(c2);
          };
        } }, { name: function(t2) {
          return "set".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2, o2) {
            var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
            return c2.attributes[u2] = d2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
          };
        } }, { name: function(t2) {
          return "update".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2, o2) {
            var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
            if ("function" != typeof d2)
              throw new B("Graph.".concat(e2, ": updater should be a function."));
            var s2 = c2.attributes, h2 = d2(s2[u2]);
            return s2[u2] = h2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
          };
        } }, { name: function(t2) {
          return "remove".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            return delete a2.attributes[c2], this.emit("nodeAttributesUpdated", { key: a2.key, type: "remove", attributes: a2.attributes, name: c2 }), this;
          };
        } }, { name: function(t2) {
          return "replace".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            if (!s(c2))
              throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
            return a2.attributes = c2, this.emit("nodeAttributesUpdated", { key: a2.key, type: "replace", attributes: a2.attributes }), this;
          };
        } }, { name: function(t2) {
          return "merge".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            if (!s(c2))
              throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
            return u(a2.attributes, c2), this.emit("nodeAttributesUpdated", { key: a2.key, type: "merge", attributes: a2.attributes, data: c2 }), this;
          };
        } }, { name: function(t2) {
          return "update".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
            if ("function" != typeof c2)
              throw new B("Graph.".concat(e2, ": provided updater is not a function."));
            return a2.attributes = c2(a2.attributes), this.emit("nodeAttributesUpdated", { key: a2.key, type: "update", attributes: a2.attributes }), this;
          };
        } }];
        var X = [{ name: function(t2) {
          return "get".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            return i2.attributes[r2];
          };
        } }, { name: function(t2) {
          return "get".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3) {
            var r2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 1) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var i2 = "" + t3, o2 = "" + arguments[1];
              if (!(r2 = d(this, i2, o2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(i2, '" - "').concat(o2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(r2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            return r2.attributes;
          };
        } }, { name: function(t2) {
          return "has".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            return i2.attributes.hasOwnProperty(r2);
          };
        } }, { name: function(t2) {
          return "set".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 3) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var a2 = "" + t3, c2 = "" + r2;
              if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(o2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            return o2.attributes[r2] = i2, this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
          };
        } }, { name: function(t2) {
          return "update".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2, i2) {
            var o2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 3) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var a2 = "" + t3, c2 = "" + r2;
              if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(o2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            if ("function" != typeof i2)
              throw new B("Graph.".concat(e2, ": updater should be a function."));
            return o2.attributes[r2] = i2(o2.attributes[r2]), this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
          };
        } }, { name: function(t2) {
          return "remove".concat(t2, "Attribute");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            return delete i2.attributes[r2], this.emit("edgeAttributesUpdated", { key: i2.key, type: "remove", attributes: i2.attributes, name: r2 }), this;
          };
        } }, { name: function(t2) {
          return "replace".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            if (!s(r2))
              throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
            return i2.attributes = r2, this.emit("edgeAttributesUpdated", { key: i2.key, type: "replace", attributes: i2.attributes }), this;
          };
        } }, { name: function(t2) {
          return "merge".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            if (!s(r2))
              throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
            return u(i2.attributes, r2), this.emit("edgeAttributesUpdated", { key: i2.key, type: "merge", attributes: i2.attributes, data: r2 }), this;
          };
        } }, { name: function(t2) {
          return "update".concat(t2, "Attributes");
        }, attacher: function(t2, e2, n2) {
          t2.prototype[e2] = function(t3, r2) {
            var i2;
            if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type)
              throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
            if (arguments.length > 2) {
              if (this.multi)
                throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
              var o2 = "" + t3, a2 = "" + r2;
              if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
                throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
            } else {
              if ("mixed" !== n2)
                throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
              if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
                throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
            }
            if ("function" != typeof r2)
              throw new B("Graph.".concat(e2, ": provided updater is not a function."));
            return i2.attributes = r2(i2.attributes), this.emit("edgeAttributesUpdated", { key: i2.key, type: "update", attributes: i2.attributes }), this;
          };
        } }];
        var Z = O, $ = P, tt = /* @__PURE__ */ __name(function() {
          var t2 = arguments, e2 = null, n2 = -1;
          return new Z(function() {
            for (var r2 = null; ; ) {
              if (null === e2) {
                if (++n2 >= t2.length)
                  return { done: true };
                e2 = $(t2[n2]);
              }
              if (true !== (r2 = e2.next()).done)
                break;
              e2 = null;
            }
            return r2;
          });
        }, "tt"), et = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
        function nt(t2, e2, n2, r2) {
          var i2 = false;
          for (var o2 in e2)
            if (o2 !== r2) {
              var a2 = e2[o2];
              if (i2 = n2(a2.key, a2.attributes, a2.source.key, a2.target.key, a2.source.attributes, a2.target.attributes, a2.undirected), t2 && i2)
                return a2.key;
            }
        }
        __name(nt, "nt");
        function rt(t2, e2, n2, r2) {
          var i2, o2, a2, c2 = false;
          for (var u2 in e2)
            if (u2 !== r2) {
              i2 = e2[u2];
              do {
                if (o2 = i2.source, a2 = i2.target, c2 = n2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected), t2 && c2)
                  return i2.key;
                i2 = i2.next;
              } while (void 0 !== i2);
            }
        }
        __name(rt, "rt");
        function it(t2, e2) {
          var n2, r2 = Object.keys(t2), i2 = r2.length, o2 = 0;
          return new O(function() {
            do {
              if (n2)
                n2 = n2.next;
              else {
                if (o2 >= i2)
                  return { done: true };
                var a2 = r2[o2++];
                if (a2 === e2) {
                  n2 = void 0;
                  continue;
                }
                n2 = t2[a2];
              }
            } while (!n2);
            return { done: false, value: { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected } };
          });
        }
        __name(it, "it");
        function ot(t2, e2, n2, r2) {
          var i2 = e2[n2];
          if (i2) {
            var o2 = i2.source, a2 = i2.target;
            return r2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected) && t2 ? i2.key : void 0;
          }
        }
        __name(ot, "ot");
        function at(t2, e2, n2, r2) {
          var i2 = e2[n2];
          if (i2) {
            var o2 = false;
            do {
              if (o2 = r2(i2.key, i2.attributes, i2.source.key, i2.target.key, i2.source.attributes, i2.target.attributes, i2.undirected), t2 && o2)
                return i2.key;
              i2 = i2.next;
            } while (void 0 !== i2);
          }
        }
        __name(at, "at");
        function ct(t2, e2) {
          var n2 = t2[e2];
          return void 0 !== n2.next ? new O(function() {
            if (!n2)
              return { done: true };
            var t3 = { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected };
            return n2 = n2.next, { done: false, value: t3 };
          }) : O.of({ edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected });
        }
        __name(ct, "ct");
        function ut(t2, e2) {
          if (0 === t2.size)
            return [];
          if ("mixed" === e2 || e2 === t2.type)
            return "function" == typeof Array.from ? Array.from(t2._edges.keys()) : K(t2._edges.keys(), t2._edges.size);
          for (var n2, r2, i2 = "undirected" === e2 ? t2.undirectedSize : t2.directedSize, o2 = new Array(i2), a2 = "undirected" === e2, c2 = t2._edges.values(), u2 = 0; true !== (n2 = c2.next()).done; )
            (r2 = n2.value).undirected === a2 && (o2[u2++] = r2.key);
          return o2;
        }
        __name(ut, "ut");
        function dt(t2, e2, n2, r2) {
          if (0 !== e2.size) {
            for (var i2, o2, a2 = "mixed" !== n2 && n2 !== e2.type, c2 = "undirected" === n2, u2 = false, d2 = e2._edges.values(); true !== (i2 = d2.next()).done; )
              if (o2 = i2.value, !a2 || o2.undirected === c2) {
                var s2 = o2, h2 = s2.key, p2 = s2.attributes, f2 = s2.source, l2 = s2.target;
                if (u2 = r2(h2, p2, f2.key, l2.key, f2.attributes, l2.attributes, o2.undirected), t2 && u2)
                  return h2;
              }
          }
        }
        __name(dt, "dt");
        function st(t2, e2) {
          if (0 === t2.size)
            return O.empty();
          var n2 = "mixed" !== e2 && e2 !== t2.type, r2 = "undirected" === e2, i2 = t2._edges.values();
          return new O(function() {
            for (var t3, e3; ; ) {
              if ((t3 = i2.next()).done)
                return t3;
              if (e3 = t3.value, !n2 || e3.undirected === r2)
                break;
            }
            return { value: { edge: e3.key, attributes: e3.attributes, source: e3.source.key, target: e3.target.key, sourceAttributes: e3.source.attributes, targetAttributes: e3.target.attributes, undirected: e3.undirected }, done: false };
          });
        }
        __name(st, "st");
        function ht(t2, e2, n2, r2, i2, o2) {
          var a2, c2 = e2 ? rt : nt;
          if ("undirected" !== n2) {
            if ("out" !== r2 && (a2 = c2(t2, i2.in, o2), t2 && a2))
              return a2;
            if ("in" !== r2 && (a2 = c2(t2, i2.out, o2, r2 ? void 0 : i2.key), t2 && a2))
              return a2;
          }
          if ("directed" !== n2 && (a2 = c2(t2, i2.undirected, o2), t2 && a2))
            return a2;
        }
        __name(ht, "ht");
        function pt(t2, e2, n2, r2) {
          var i2 = [];
          return ht(false, t2, e2, n2, r2, function(t3) {
            i2.push(t3);
          }), i2;
        }
        __name(pt, "pt");
        function ft(t2, e2, n2) {
          var r2 = O.empty();
          return "undirected" !== t2 && ("out" !== e2 && void 0 !== n2.in && (r2 = tt(r2, it(n2.in))), "in" !== e2 && void 0 !== n2.out && (r2 = tt(r2, it(n2.out, e2 ? void 0 : n2.key)))), "directed" !== t2 && void 0 !== n2.undirected && (r2 = tt(r2, it(n2.undirected))), r2;
        }
        __name(ft, "ft");
        function lt(t2, e2, n2, r2, i2, o2, a2) {
          var c2, u2 = n2 ? at : ot;
          if ("undirected" !== e2) {
            if (void 0 !== i2.in && "out" !== r2 && (c2 = u2(t2, i2.in, o2, a2), t2 && c2))
              return c2;
            if (void 0 !== i2.out && "in" !== r2 && (r2 || i2.key !== o2) && (c2 = u2(t2, i2.out, o2, a2), t2 && c2))
              return c2;
          }
          if ("directed" !== e2 && void 0 !== i2.undirected && (c2 = u2(t2, i2.undirected, o2, a2), t2 && c2))
            return c2;
        }
        __name(lt, "lt");
        function gt(t2, e2, n2, r2, i2) {
          var o2 = [];
          return lt(false, t2, e2, n2, r2, i2, function(t3) {
            o2.push(t3);
          }), o2;
        }
        __name(gt, "gt");
        function yt(t2, e2, n2, r2) {
          var i2 = O.empty();
          return "undirected" !== t2 && (void 0 !== n2.in && "out" !== e2 && r2 in n2.in && (i2 = tt(i2, ct(n2.in, r2))), void 0 !== n2.out && "in" !== e2 && r2 in n2.out && (e2 || n2.key !== r2) && (i2 = tt(i2, ct(n2.out, r2)))), "directed" !== t2 && void 0 !== n2.undirected && r2 in n2.undirected && (i2 = tt(i2, ct(n2.undirected, r2))), i2;
        }
        __name(yt, "yt");
        var wt = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
        function vt() {
          this.A = null, this.B = null;
        }
        __name(vt, "vt");
        function bt(t2, e2, n2, r2, i2) {
          for (var o2 in r2) {
            var a2 = r2[o2], c2 = a2.source, u2 = a2.target, d2 = c2 === n2 ? u2 : c2;
            if (!e2 || !e2.has(d2.key)) {
              var s2 = i2(d2.key, d2.attributes);
              if (t2 && s2)
                return d2.key;
            }
          }
        }
        __name(bt, "bt");
        function mt(t2, e2, n2, r2, i2) {
          if ("mixed" !== e2) {
            if ("undirected" === e2)
              return bt(t2, null, r2, r2.undirected, i2);
            if ("string" == typeof n2)
              return bt(t2, null, r2, r2[n2], i2);
          }
          var o2, a2 = new vt();
          if ("undirected" !== e2) {
            if ("out" !== n2) {
              if (o2 = bt(t2, null, r2, r2.in, i2), t2 && o2)
                return o2;
              a2.wrap(r2.in);
            }
            if ("in" !== n2) {
              if (o2 = bt(t2, a2, r2, r2.out, i2), t2 && o2)
                return o2;
              a2.wrap(r2.out);
            }
          }
          if ("directed" !== e2 && (o2 = bt(t2, a2, r2, r2.undirected, i2), t2 && o2))
            return o2;
        }
        __name(mt, "mt");
        function kt(t2, e2, n2) {
          var r2 = Object.keys(n2), i2 = r2.length, o2 = 0;
          return new O(function() {
            var a2 = null;
            do {
              if (o2 >= i2)
                return t2 && t2.wrap(n2), { done: true };
              var c2 = n2[r2[o2++]], u2 = c2.source, d2 = c2.target;
              a2 = u2 === e2 ? d2 : u2, t2 && t2.has(a2.key) && (a2 = null);
            } while (null === a2);
            return { done: false, value: { neighbor: a2.key, attributes: a2.attributes } };
          });
        }
        __name(kt, "kt");
        function _t(t2, e2) {
          var n2 = e2.name, r2 = e2.type, i2 = e2.direction;
          t2.prototype[n2] = function(t3) {
            if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type)
              return [];
            t3 = "" + t3;
            var e3 = this._nodes.get(t3);
            if (void 0 === e3)
              throw new F("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
            return function(t4, e4, n3) {
              if ("mixed" !== t4) {
                if ("undirected" === t4)
                  return Object.keys(n3.undirected);
                if ("string" == typeof e4)
                  return Object.keys(n3[e4]);
              }
              var r3 = [];
              return mt(false, t4, e4, n3, function(t5) {
                r3.push(t5);
              }), r3;
            }("mixed" === r2 ? this.type : r2, i2, e3);
          };
        }
        __name(_t, "_t");
        function Gt(t2, e2) {
          var n2 = e2.name, r2 = e2.type, i2 = e2.direction, o2 = n2.slice(0, -1) + "Entries";
          t2.prototype[o2] = function(t3) {
            if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type)
              return O.empty();
            t3 = "" + t3;
            var e3 = this._nodes.get(t3);
            if (void 0 === e3)
              throw new F("Graph.".concat(o2, ': could not find the "').concat(t3, '" node in the graph.'));
            return function(t4, e4, n3) {
              if ("mixed" !== t4) {
                if ("undirected" === t4)
                  return kt(null, n3, n3.undirected);
                if ("string" == typeof e4)
                  return kt(null, n3, n3[e4]);
              }
              var r3 = O.empty(), i3 = new vt();
              return "undirected" !== t4 && ("out" !== e4 && (r3 = tt(r3, kt(i3, n3, n3.in))), "in" !== e4 && (r3 = tt(r3, kt(i3, n3, n3.out)))), "directed" !== t4 && (r3 = tt(r3, kt(i3, n3, n3.undirected))), r3;
            }("mixed" === r2 ? this.type : r2, i2, e3);
          };
        }
        __name(Gt, "Gt");
        function xt(t2, e2, n2, r2, i2) {
          for (var o2, a2, c2, u2, d2, s2, h2, p2 = r2._nodes.values(), f2 = r2.type; true !== (o2 = p2.next()).done; ) {
            var l2 = false;
            if (a2 = o2.value, "undirected" !== f2)
              for (c2 in u2 = a2.out) {
                d2 = u2[c2];
                do {
                  if (s2 = d2.target, l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2)
                    return d2;
                  d2 = d2.next;
                } while (d2);
              }
            if ("directed" !== f2) {
              for (c2 in u2 = a2.undirected)
                if (!(e2 && a2.key > c2)) {
                  d2 = u2[c2];
                  do {
                    if ((s2 = d2.target).key !== c2 && (s2 = d2.source), l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2)
                      return d2;
                    d2 = d2.next;
                  } while (d2);
                }
            }
            if (n2 && !l2 && (h2 = i2(a2.key, null, a2.attributes, null, null, null, null), t2 && h2))
              return null;
          }
        }
        __name(xt, "xt");
        function Et(t2) {
          if (!s(t2))
            throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
          if (!("key" in t2))
            throw new B("Graph.import: serialized node is missing its key.");
          if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes))
            throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        }
        __name(Et, "Et");
        function At(t2) {
          if (!s(t2))
            throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
          if (!("source" in t2))
            throw new B("Graph.import: serialized edge is missing its source.");
          if (!("target" in t2))
            throw new B("Graph.import: serialized edge is missing its target.");
          if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes))
            throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
          if ("undirected" in t2 && "boolean" != typeof t2.undirected)
            throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
        }
        __name(At, "At");
        vt.prototype.wrap = function(t2) {
          null === this.A ? this.A = t2 : null === this.B && (this.B = t2);
        }, vt.prototype.has = function(t2) {
          return null !== this.A && t2 in this.A || null !== this.B && t2 in this.B;
        };
        var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
          return Lt++;
        }), Dt = /* @__PURE__ */ new Set(["directed", "undirected", "mixed"]), Ut = /* @__PURE__ */ new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), Nt = { allowSelfLoops: true, multi: false, type: "mixed" };
        function Ot(t2, e2, n2) {
          var r2 = new t2.NodeDataClass(e2, n2);
          return t2._nodes.set(e2, r2), t2.emit("nodeAdded", { key: e2, attributes: n2 }), r2;
        }
        __name(Ot, "Ot");
        function jt(t2, e2, n2, r2, i2, o2, a2, c2) {
          if (!r2 && "undirected" === t2.type)
            throw new I("Graph.".concat(e2, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
          if (r2 && "directed" === t2.type)
            throw new I("Graph.".concat(e2, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
          if (c2 && !s(c2))
            throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
          if (o2 = "" + o2, a2 = "" + a2, c2 = c2 || {}, !t2.allowSelfLoops && o2 === a2)
            throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
          var u2 = t2._nodes.get(o2), d2 = t2._nodes.get(a2);
          if (!u2)
            throw new F("Graph.".concat(e2, ': source node "').concat(o2, '" not found.'));
          if (!d2)
            throw new F("Graph.".concat(e2, ': target node "').concat(a2, '" not found.'));
          var h2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
          if (n2)
            i2 = t2._edgeKeyGenerator();
          else if (i2 = "" + i2, t2._edges.has(i2))
            throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
          if (!t2.multi && (r2 ? void 0 !== u2.undirected[a2] : void 0 !== u2.out[a2]))
            throw new I("Graph.".concat(e2, ': an edge linking "').concat(o2, '" to "').concat(a2, `" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`));
          var p2 = new V(r2, i2, u2, d2, c2);
          t2._edges.set(i2, p2);
          var f2 = o2 === a2;
          return r2 ? (u2.undirectedDegree++, d2.undirectedDegree++, f2 && (u2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (u2.outDegree++, d2.inDegree++, f2 && (u2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, h2.key = i2, t2.emit("edgeAdded", h2), i2;
        }
        __name(jt, "jt");
        function Ct(t2, e2, n2, r2, i2, o2, a2, c2, d2) {
          if (!r2 && "undirected" === t2.type)
            throw new I("Graph.".concat(e2, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
          if (r2 && "directed" === t2.type)
            throw new I("Graph.".concat(e2, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
          if (c2) {
            if (d2) {
              if ("function" != typeof c2)
                throw new B("Graph.".concat(e2, ': invalid updater function. Expecting a function but got "').concat(c2, '"'));
            } else if (!s(c2))
              throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
          }
          var h2;
          if (o2 = "" + o2, a2 = "" + a2, d2 && (h2 = c2, c2 = void 0), !t2.allowSelfLoops && o2 === a2)
            throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
          var p2, f2, l2 = t2._nodes.get(o2), g2 = t2._nodes.get(a2);
          if (!n2 && (p2 = t2._edges.get(i2))) {
            if (!(p2.source.key === o2 && p2.target.key === a2 || r2 && p2.source.key === a2 && p2.target.key === o2))
              throw new I("Graph.".concat(e2, ': inconsistency detected when attempting to merge the "').concat(i2, '" edge with "').concat(o2, '" source & "').concat(a2, '" target vs. ("').concat(p2.source.key, '", "').concat(p2.target.key, '").'));
            f2 = p2;
          }
          if (f2 || t2.multi || !l2 || (f2 = r2 ? l2.undirected[a2] : l2.out[a2]), f2) {
            var y2 = [f2.key, false, false, false];
            if (d2 ? !h2 : !c2)
              return y2;
            if (d2) {
              var w2 = f2.attributes;
              f2.attributes = h2(w2), t2.emit("edgeAttributesUpdated", { type: "replace", key: f2.key, attributes: f2.attributes });
            } else
              u(f2.attributes, c2), t2.emit("edgeAttributesUpdated", { type: "merge", key: f2.key, attributes: f2.attributes, data: c2 });
            return y2;
          }
          c2 = c2 || {}, d2 && h2 && (c2 = h2(c2));
          var v2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
          if (n2)
            i2 = t2._edgeKeyGenerator();
          else if (i2 = "" + i2, t2._edges.has(i2))
            throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
          var b2 = false, m2 = false;
          l2 || (l2 = Ot(t2, o2, {}), b2 = true, o2 === a2 && (g2 = l2, m2 = true)), g2 || (g2 = Ot(t2, a2, {}), m2 = true), p2 = new V(r2, i2, l2, g2, c2), t2._edges.set(i2, p2);
          var k2 = o2 === a2;
          return r2 ? (l2.undirectedDegree++, g2.undirectedDegree++, k2 && (l2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (l2.outDegree++, g2.inDegree++, k2 && (l2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, v2.key = i2, t2.emit("edgeAdded", v2), [i2, true, b2, m2];
        }
        __name(Ct, "Ct");
        function Mt(t2, e2) {
          t2._edges.delete(e2.key);
          var n2 = e2.source, r2 = e2.target, i2 = e2.attributes, o2 = e2.undirected, a2 = n2 === r2;
          o2 ? (n2.undirectedDegree--, r2.undirectedDegree--, a2 && (n2.undirectedLoops--, t2._undirectedSelfLoopCount--)) : (n2.outDegree--, r2.inDegree--, a2 && (n2.directedLoops--, t2._directedSelfLoopCount--)), t2.multi ? e2.detachMulti() : e2.detach(), o2 ? t2._undirectedSize-- : t2._directedSize--, t2.emit("edgeDropped", { key: e2.key, attributes: i2, source: n2.key, target: r2.key, undirected: o2 });
        }
        __name(Mt, "Mt");
        var zt = function(n2) {
          function r2(t2) {
            var e2;
            if (e2 = n2.call(this) || this, "boolean" != typeof (t2 = u({}, Nt, t2)).multi)
              throw new B(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "`.concat(t2.multi, '".'));
            if (!Dt.has(t2.type))
              throw new B(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "`.concat(t2.type, '".'));
            if ("boolean" != typeof t2.allowSelfLoops)
              throw new B(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "`.concat(t2.allowSelfLoops, '".'));
            var r3 = "mixed" === t2.type ? Y : "directed" === t2.type ? q : J;
            p(c(e2), "NodeDataClass", r3);
            var i3 = "geid_" + St() + "_", o2 = 0;
            return p(c(e2), "_attributes", {}), p(c(e2), "_nodes", /* @__PURE__ */ new Map()), p(c(e2), "_edges", /* @__PURE__ */ new Map()), p(c(e2), "_directedSize", 0), p(c(e2), "_undirectedSize", 0), p(c(e2), "_directedSelfLoopCount", 0), p(c(e2), "_undirectedSelfLoopCount", 0), p(c(e2), "_edgeKeyGenerator", function() {
              var t3;
              do {
                t3 = i3 + o2++;
              } while (e2._edges.has(t3));
              return t3;
            }), p(c(e2), "_options", t2), Ut.forEach(function(t3) {
              return p(c(e2), t3, e2[t3]);
            }), f(c(e2), "order", function() {
              return e2._nodes.size;
            }), f(c(e2), "size", function() {
              return e2._edges.size;
            }), f(c(e2), "directedSize", function() {
              return e2._directedSize;
            }), f(c(e2), "undirectedSize", function() {
              return e2._undirectedSize;
            }), f(c(e2), "selfLoopCount", function() {
              return e2._directedSelfLoopCount + e2._undirectedSelfLoopCount;
            }), f(c(e2), "directedSelfLoopCount", function() {
              return e2._directedSelfLoopCount;
            }), f(c(e2), "undirectedSelfLoopCount", function() {
              return e2._undirectedSelfLoopCount;
            }), f(c(e2), "multi", e2._options.multi), f(c(e2), "type", e2._options.type), f(c(e2), "allowSelfLoops", e2._options.allowSelfLoops), f(c(e2), "implementation", function() {
              return "graphology";
            }), e2;
          }
          __name(r2, "r");
          e(r2, n2);
          var i2 = r2.prototype;
          return i2._resetInstanceCounters = function() {
            this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
          }, i2.hasNode = function(t2) {
            return this._nodes.has("" + t2);
          }, i2.hasDirectedEdge = function(t2, e2) {
            if ("undirected" === this.type)
              return false;
            if (1 === arguments.length) {
              var n3 = "" + t2, r3 = this._edges.get(n3);
              return !!r3 && !r3.undirected;
            }
            if (2 === arguments.length) {
              t2 = "" + t2, e2 = "" + e2;
              var i3 = this._nodes.get(t2);
              return !!i3 && i3.out.hasOwnProperty(e2);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
          }, i2.hasUndirectedEdge = function(t2, e2) {
            if ("directed" === this.type)
              return false;
            if (1 === arguments.length) {
              var n3 = "" + t2, r3 = this._edges.get(n3);
              return !!r3 && r3.undirected;
            }
            if (2 === arguments.length) {
              t2 = "" + t2, e2 = "" + e2;
              var i3 = this._nodes.get(t2);
              return !!i3 && i3.undirected.hasOwnProperty(e2);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
          }, i2.hasEdge = function(t2, e2) {
            if (1 === arguments.length) {
              var n3 = "" + t2;
              return this._edges.has(n3);
            }
            if (2 === arguments.length) {
              t2 = "" + t2, e2 = "" + e2;
              var r3 = this._nodes.get(t2);
              return !!r3 && (void 0 !== r3.out && r3.out.hasOwnProperty(e2) || void 0 !== r3.undirected && r3.undirected.hasOwnProperty(e2));
            }
            throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
          }, i2.directedEdge = function(t2, e2) {
            if ("undirected" !== this.type) {
              if (t2 = "" + t2, e2 = "" + e2, this.multi)
                throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
              var n3 = this._nodes.get(t2);
              if (!n3)
                throw new F('Graph.directedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
              if (!this._nodes.has(e2))
                throw new F('Graph.directedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
              var r3 = n3.out && n3.out[e2] || void 0;
              return r3 ? r3.key : void 0;
            }
          }, i2.undirectedEdge = function(t2, e2) {
            if ("directed" !== this.type) {
              if (t2 = "" + t2, e2 = "" + e2, this.multi)
                throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
              var n3 = this._nodes.get(t2);
              if (!n3)
                throw new F('Graph.undirectedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
              if (!this._nodes.has(e2))
                throw new F('Graph.undirectedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
              var r3 = n3.undirected && n3.undirected[e2] || void 0;
              return r3 ? r3.key : void 0;
            }
          }, i2.edge = function(t2, e2) {
            if (this.multi)
              throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.edge: could not find the "'.concat(t2, '" source node in the graph.'));
            if (!this._nodes.has(e2))
              throw new F('Graph.edge: could not find the "'.concat(e2, '" target node in the graph.'));
            var r3 = n3.out && n3.out[e2] || n3.undirected && n3.undirected[e2] || void 0;
            if (r3)
              return r3.key;
          }, i2.areDirectedNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out);
          }, i2.areOutNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areOutNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && e2 in n3.out;
          }, i2.areInNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areInNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && e2 in n3.in;
          }, i2.areUndirectedNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "directed" !== this.type && e2 in n3.undirected;
          }, i2.areNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out) || "directed" !== this.type && e2 in n3.undirected;
          }, i2.areInboundNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && e2 in n3.in || "directed" !== this.type && e2 in n3.undirected;
          }, i2.areOutboundNeighbors = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" !== this.type && e2 in n3.out || "directed" !== this.type && e2 in n3.undirected;
          }, i2.inDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.inDegree: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.inDegree;
          }, i2.outDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.outDegree: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.outDegree;
          }, i2.directedDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.directedDegree: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree;
          }, i2.undirectedDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.undirectedDegree: could not find the "'.concat(t2, '" node in the graph.'));
            return "directed" === this.type ? 0 : e2.undirectedDegree;
          }, i2.inboundDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.inboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree), n3;
          }, i2.outboundDegree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.outboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.outDegree), n3;
          }, i2.degree = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.degree: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree), n3;
          }, i2.inDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.inDegree - e2.directedLoops;
          }, i2.outDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.outDegree - e2.directedLoops;
          }, i2.directedDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree - 2 * e2.directedLoops;
          }, i2.undirectedDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            return "directed" === this.type ? 0 : e2.undirectedDegree - 2 * e2.undirectedLoops;
          }, i2.inboundDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0, r3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree, r3 += e2.directedLoops), n3 - r3;
          }, i2.outboundDegreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0, r3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.outDegree, r3 += e2.directedLoops), n3 - r3;
          }, i2.degreeWithoutSelfLoops = function(t2) {
            t2 = "" + t2;
            var e2 = this._nodes.get(t2);
            if (!e2)
              throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
            var n3 = 0, r3 = 0;
            return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree, r3 += 2 * e2.directedLoops), n3 - r3;
          }, i2.source = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.source: could not find the "'.concat(t2, '" edge in the graph.'));
            return e2.source.key;
          }, i2.target = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.target: could not find the "'.concat(t2, '" edge in the graph.'));
            return e2.target.key;
          }, i2.extremities = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.extremities: could not find the "'.concat(t2, '" edge in the graph.'));
            return [e2.source.key, e2.target.key];
          }, i2.opposite = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._edges.get(e2);
            if (!n3)
              throw new F('Graph.opposite: could not find the "'.concat(e2, '" edge in the graph.'));
            var r3 = n3.source.key, i3 = n3.target.key;
            if (t2 === r3)
              return i3;
            if (t2 === i3)
              return r3;
            throw new F('Graph.opposite: the "'.concat(t2, '" node is not attached to the "').concat(e2, '" edge (').concat(r3, ", ").concat(i3, ")."));
          }, i2.hasExtremity = function(t2, e2) {
            t2 = "" + t2, e2 = "" + e2;
            var n3 = this._edges.get(t2);
            if (!n3)
              throw new F('Graph.hasExtremity: could not find the "'.concat(t2, '" edge in the graph.'));
            return n3.source.key === e2 || n3.target.key === e2;
          }, i2.isUndirected = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.isUndirected: could not find the "'.concat(t2, '" edge in the graph.'));
            return e2.undirected;
          }, i2.isDirected = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.isDirected: could not find the "'.concat(t2, '" edge in the graph.'));
            return !e2.undirected;
          }, i2.isSelfLoop = function(t2) {
            t2 = "" + t2;
            var e2 = this._edges.get(t2);
            if (!e2)
              throw new F('Graph.isSelfLoop: could not find the "'.concat(t2, '" edge in the graph.'));
            return e2.source === e2.target;
          }, i2.addNode = function(t2, e2) {
            var n3 = function(t3, e3, n4) {
              if (n4 && !s(n4))
                throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n4, '"'));
              if (e3 = "" + e3, n4 = n4 || {}, t3._nodes.has(e3))
                throw new I('Graph.addNode: the "'.concat(e3, '" node already exist in the graph.'));
              var r3 = new t3.NodeDataClass(e3, n4);
              return t3._nodes.set(e3, r3), t3.emit("nodeAdded", { key: e3, attributes: n4 }), r3;
            }(this, t2, e2);
            return n3.key;
          }, i2.mergeNode = function(t2, e2) {
            if (e2 && !s(e2))
              throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e2, '"'));
            t2 = "" + t2, e2 = e2 || {};
            var n3 = this._nodes.get(t2);
            return n3 ? (e2 && (u(n3.attributes, e2), this.emit("nodeAttributesUpdated", { type: "merge", key: t2, attributes: n3.attributes, data: e2 })), [t2, false]) : (n3 = new this.NodeDataClass(t2, e2), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: e2 }), [t2, true]);
          }, i2.updateNode = function(t2, e2) {
            if (e2 && "function" != typeof e2)
              throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e2, '"'));
            t2 = "" + t2;
            var n3 = this._nodes.get(t2);
            if (n3) {
              if (e2) {
                var r3 = n3.attributes;
                n3.attributes = e2(r3), this.emit("nodeAttributesUpdated", { type: "replace", key: t2, attributes: n3.attributes });
              }
              return [t2, false];
            }
            var i3 = e2 ? e2({}) : {};
            return n3 = new this.NodeDataClass(t2, i3), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: i3 }), [t2, true];
          }, i2.dropNode = function(t2) {
            t2 = "" + t2;
            var e2, n3 = this._nodes.get(t2);
            if (!n3)
              throw new F('Graph.dropNode: could not find the "'.concat(t2, '" node in the graph.'));
            if ("undirected" !== this.type) {
              for (var r3 in n3.out) {
                e2 = n3.out[r3];
                do {
                  Mt(this, e2), e2 = e2.next;
                } while (e2);
              }
              for (var i3 in n3.in) {
                e2 = n3.in[i3];
                do {
                  Mt(this, e2), e2 = e2.next;
                } while (e2);
              }
            }
            if ("directed" !== this.type)
              for (var o2 in n3.undirected) {
                e2 = n3.undirected[o2];
                do {
                  Mt(this, e2), e2 = e2.next;
                } while (e2);
              }
            this._nodes.delete(t2), this.emit("nodeDropped", { key: t2, attributes: n3.attributes });
          }, i2.dropEdge = function(t2) {
            var e2;
            if (arguments.length > 1) {
              var n3 = "" + arguments[0], r3 = "" + arguments[1];
              if (!(e2 = d(this, n3, r3, this.type)))
                throw new F('Graph.dropEdge: could not find the "'.concat(n3, '" -> "').concat(r3, '" edge in the graph.'));
            } else if (t2 = "" + t2, !(e2 = this._edges.get(t2)))
              throw new F('Graph.dropEdge: could not find the "'.concat(t2, '" edge in the graph.'));
            return Mt(this, e2), this;
          }, i2.dropDirectedEdge = function(t2, e2) {
            if (arguments.length < 2)
              throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi)
              throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n3 = d(this, t2 = "" + t2, e2 = "" + e2, "directed");
            if (!n3)
              throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
            return Mt(this, n3), this;
          }, i2.dropUndirectedEdge = function(t2, e2) {
            if (arguments.length < 2)
              throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi)
              throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n3 = d(this, t2, e2, "undirected");
            if (!n3)
              throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
            return Mt(this, n3), this;
          }, i2.clear = function() {
            this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
          }, i2.clearEdges = function() {
            for (var t2, e2 = this._nodes.values(); true !== (t2 = e2.next()).done; )
              t2.value.clear();
            this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
          }, i2.getAttribute = function(t2) {
            return this._attributes[t2];
          }, i2.getAttributes = function() {
            return this._attributes;
          }, i2.hasAttribute = function(t2) {
            return this._attributes.hasOwnProperty(t2);
          }, i2.setAttribute = function(t2, e2) {
            return this._attributes[t2] = e2, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
          }, i2.updateAttribute = function(t2, e2) {
            if ("function" != typeof e2)
              throw new B("Graph.updateAttribute: updater should be a function.");
            var n3 = this._attributes[t2];
            return this._attributes[t2] = e2(n3), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
          }, i2.removeAttribute = function(t2) {
            return delete this._attributes[t2], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t2 }), this;
          }, i2.replaceAttributes = function(t2) {
            if (!s(t2))
              throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
            return this._attributes = t2, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
          }, i2.mergeAttributes = function(t2) {
            if (!s(t2))
              throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
            return u(this._attributes, t2), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t2 }), this;
          }, i2.updateAttributes = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.updateAttributes: provided updater is not a function.");
            return this._attributes = t2(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
          }, i2.updateEachNodeAttributes = function(t2, e2) {
            if ("function" != typeof t2)
              throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
            if (e2 && !l(e2))
              throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for (var n3, r3, i3 = this._nodes.values(); true !== (n3 = i3.next()).done; )
              (r3 = n3.value).attributes = t2(r3.key, r3.attributes);
            this.emit("eachNodeAttributesUpdated", { hints: e2 || null });
          }, i2.updateEachEdgeAttributes = function(t2, e2) {
            if ("function" != typeof t2)
              throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
            if (e2 && !l(e2))
              throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for (var n3, r3, i3, o2, a2 = this._edges.values(); true !== (n3 = a2.next()).done; )
              i3 = (r3 = n3.value).source, o2 = r3.target, r3.attributes = t2(r3.key, r3.attributes, i3.key, o2.key, i3.attributes, o2.attributes, r3.undirected);
            this.emit("eachEdgeAttributesUpdated", { hints: e2 || null });
          }, i2.forEachAdjacencyEntry = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
            xt(false, false, false, this, t2);
          }, i2.forEachAdjacencyEntryWithOrphans = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
            xt(false, false, true, this, t2);
          }, i2.forEachAssymetricAdjacencyEntry = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
            xt(false, true, false, this, t2);
          }, i2.forEachAssymetricAdjacencyEntryWithOrphans = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
            xt(false, true, true, this, t2);
          }, i2.nodes = function() {
            return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
          }, i2.forEachNode = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.forEachNode: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; )
              t2((n3 = e2.value).key, n3.attributes);
          }, i2.findNode = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.findNode: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; )
              if (t2((n3 = e2.value).key, n3.attributes))
                return n3.key;
          }, i2.mapNodes = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.mapNode: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(), i3 = new Array(this.order), o2 = 0; true !== (e2 = r3.next()).done; )
              n3 = e2.value, i3[o2++] = t2(n3.key, n3.attributes);
            return i3;
          }, i2.someNode = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.someNode: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; )
              if (t2((n3 = e2.value).key, n3.attributes))
                return true;
            return false;
          }, i2.everyNode = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.everyNode: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; )
              if (!t2((n3 = e2.value).key, n3.attributes))
                return false;
            return true;
          }, i2.filterNodes = function(t2) {
            if ("function" != typeof t2)
              throw new B("Graph.filterNodes: expecting a callback.");
            for (var e2, n3, r3 = this._nodes.values(), i3 = []; true !== (e2 = r3.next()).done; )
              t2((n3 = e2.value).key, n3.attributes) && i3.push(n3.key);
            return i3;
          }, i2.reduceNodes = function(t2, e2) {
            if ("function" != typeof t2)
              throw new B("Graph.reduceNodes: expecting a callback.");
            if (arguments.length < 2)
              throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
            for (var n3, r3, i3 = e2, o2 = this._nodes.values(); true !== (n3 = o2.next()).done; )
              i3 = t2(i3, (r3 = n3.value).key, r3.attributes);
            return i3;
          }, i2.nodeEntries = function() {
            var t2 = this._nodes.values();
            return new O(function() {
              var e2 = t2.next();
              if (e2.done)
                return e2;
              var n3 = e2.value;
              return { value: { node: n3.key, attributes: n3.attributes }, done: false };
            });
          }, i2.export = function() {
            var t2 = this, e2 = new Array(this._nodes.size), n3 = 0;
            this._nodes.forEach(function(t3, r4) {
              e2[n3++] = function(t4, e3) {
                var n4 = { key: t4 };
                return h(e3.attributes) || (n4.attributes = u({}, e3.attributes)), n4;
              }(r4, t3);
            });
            var r3 = new Array(this._edges.size);
            return n3 = 0, this._edges.forEach(function(e3, i3) {
              r3[n3++] = function(t3, e4, n4) {
                var r4 = { key: e4, source: n4.source.key, target: n4.target.key };
                return h(n4.attributes) || (r4.attributes = u({}, n4.attributes)), "mixed" === t3 && n4.undirected && (r4.undirected = true), r4;
              }(t2.type, i3, e3);
            }), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e2, edges: r3 };
          }, i2.import = function(t2) {
            var e2, n3, i3, o2, a2, c2 = this, u2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t2 instanceof r2)
              return t2.forEachNode(function(t3, e3) {
                u2 ? c2.mergeNode(t3, e3) : c2.addNode(t3, e3);
              }), t2.forEachEdge(function(t3, e3, n4, r3, i4, o3, a3) {
                u2 ? a3 ? c2.mergeUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.mergeDirectedEdgeWithKey(t3, n4, r3, e3) : a3 ? c2.addUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.addDirectedEdgeWithKey(t3, n4, r3, e3);
              }), this;
            if (!s(t2))
              throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
            if (t2.attributes) {
              if (!s(t2.attributes))
                throw new B("Graph.import: invalid attributes. Expecting a plain object.");
              u2 ? this.mergeAttributes(t2.attributes) : this.replaceAttributes(t2.attributes);
            }
            if (t2.nodes) {
              if (i3 = t2.nodes, !Array.isArray(i3))
                throw new B("Graph.import: invalid nodes. Expecting an array.");
              for (e2 = 0, n3 = i3.length; e2 < n3; e2++) {
                Et(o2 = i3[e2]);
                var d2 = o2, h2 = d2.key, p2 = d2.attributes;
                u2 ? this.mergeNode(h2, p2) : this.addNode(h2, p2);
              }
            }
            if (t2.edges) {
              var f2 = false;
              if ("undirected" === this.type && (f2 = true), i3 = t2.edges, !Array.isArray(i3))
                throw new B("Graph.import: invalid edges. Expecting an array.");
              for (e2 = 0, n3 = i3.length; e2 < n3; e2++) {
                At(a2 = i3[e2]);
                var l2 = a2, g2 = l2.source, y2 = l2.target, w2 = l2.attributes, v2 = l2.undirected, b2 = void 0 === v2 ? f2 : v2;
                "key" in a2 ? (u2 ? b2 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b2 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a2.key, g2, y2, w2) : (u2 ? b2 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b2 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g2, y2, w2);
              }
            }
            return this;
          }, i2.nullCopy = function(t2) {
            var e2 = new r2(u({}, this._options, t2));
            return e2.replaceAttributes(u({}, this.getAttributes())), e2;
          }, i2.emptyCopy = function(t2) {
            var e2 = this.nullCopy(t2);
            return this._nodes.forEach(function(t3, n3) {
              var r3 = u({}, t3.attributes);
              t3 = new e2.NodeDataClass(n3, r3), e2._nodes.set(n3, t3);
            }), e2;
          }, i2.copy = function(t2) {
            if ("string" == typeof (t2 = t2 || {}).type && t2.type !== this.type && "mixed" !== t2.type)
              throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t2.type, '" because this would mean losing information about the current graph.'));
            if ("boolean" == typeof t2.multi && t2.multi !== this.multi && true !== t2.multi)
              throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
            if ("boolean" == typeof t2.allowSelfLoops && t2.allowSelfLoops !== this.allowSelfLoops && true !== t2.allowSelfLoops)
              throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
            for (var e2, n3, r3 = this.emptyCopy(t2), i3 = this._edges.values(); true !== (e2 = i3.next()).done; )
              jt(r3, "copy", false, (n3 = e2.value).undirected, n3.key, n3.source.key, n3.target.key, u({}, n3.attributes));
            return r3;
          }, i2.toJSON = function() {
            return this.export();
          }, i2.toString = function() {
            return "[object Graph]";
          }, i2.inspect = function() {
            var e2 = this, n3 = {};
            this._nodes.forEach(function(t2, e3) {
              n3[e3] = t2.attributes;
            });
            var r3 = {}, i3 = {};
            this._edges.forEach(function(t2, n4) {
              var o3, a3 = t2.undirected ? "--" : "->", c2 = "", u2 = t2.source.key, d2 = t2.target.key;
              t2.undirected && u2 > d2 && (o3 = u2, u2 = d2, d2 = o3);
              var s2 = "(".concat(u2, ")").concat(a3, "(").concat(d2, ")");
              n4.startsWith("geid_") ? e2.multi && (void 0 === i3[s2] ? i3[s2] = 0 : i3[s2]++, c2 += "".concat(i3[s2], ". ")) : c2 += "[".concat(n4, "]: "), r3[c2 += s2] = t2.attributes;
            });
            var o2 = {};
            for (var a2 in this)
              this.hasOwnProperty(a2) && !Ut.has(a2) && "function" != typeof this[a2] && "symbol" !== t(a2) && (o2[a2] = this[a2]);
            return o2.attributes = this._attributes, o2.nodes = n3, o2.edges = r3, p(o2, "constructor", this.constructor), o2;
          }, r2;
        }(y.exports.EventEmitter);
        "undefined" != typeof Symbol && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{ name: function(t2) {
          return "".concat(t2, "Edge");
        }, generateKey: true }, { name: function(t2) {
          return "".concat(t2, "DirectedEdge");
        }, generateKey: true, type: "directed" }, { name: function(t2) {
          return "".concat(t2, "UndirectedEdge");
        }, generateKey: true, type: "undirected" }, { name: function(t2) {
          return "".concat(t2, "EdgeWithKey");
        } }, { name: function(t2) {
          return "".concat(t2, "DirectedEdgeWithKey");
        }, type: "directed" }, { name: function(t2) {
          return "".concat(t2, "UndirectedEdgeWithKey");
        }, type: "undirected" }].forEach(function(t2) {
          ["add", "merge", "update"].forEach(function(e2) {
            var n2 = t2.name(e2), r2 = "add" === e2 ? jt : Ct;
            t2.generateKey ? zt.prototype[n2] = function(i2, o2, a2) {
              return r2(this, n2, true, "undirected" === (t2.type || this.type), null, i2, o2, a2, "update" === e2);
            } : zt.prototype[n2] = function(i2, o2, a2, c2) {
              return r2(this, n2, false, "undirected" === (t2.type || this.type), i2, o2, a2, c2, "update" === e2);
            };
          });
        }), function(t2) {
          Q.forEach(function(e2) {
            var n2 = e2.name, r2 = e2.attacher;
            r2(t2, n2("Node"), 0), r2(t2, n2("Source"), 1), r2(t2, n2("Target"), 2), r2(t2, n2("Opposite"), 3);
          });
        }(zt), function(t2) {
          X.forEach(function(e2) {
            var n2 = e2.name, r2 = e2.attacher;
            r2(t2, n2("Edge"), "mixed"), r2(t2, n2("DirectedEdge"), "directed"), r2(t2, n2("UndirectedEdge"), "undirected");
          });
        }(zt), function(t2) {
          et.forEach(function(e2) {
            !function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction;
              t3.prototype[n2] = function(t4, e4) {
                if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type)
                  return [];
                if (!arguments.length)
                  return ut(this, r2);
                if (1 === arguments.length) {
                  t4 = "" + t4;
                  var o2 = this._nodes.get(t4);
                  if (void 0 === o2)
                    throw new F("Graph.".concat(n2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return pt(this.multi, "mixed" === r2 ? this.type : r2, i2, o2);
                }
                if (2 === arguments.length) {
                  t4 = "" + t4, e4 = "" + e4;
                  var a2 = this._nodes.get(t4);
                  if (!a2)
                    throw new F("Graph.".concat(n2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                  if (!this._nodes.has(e4))
                    throw new F("Graph.".concat(n2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                  return gt(r2, this.multi, i2, a2, e4);
                }
                throw new B("Graph.".concat(n2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
              };
            }(t2, e2), function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
              t3.prototype[o2] = function(t4, e4, n3) {
                if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                  if (1 === arguments.length)
                    return dt(false, this, r2, n3 = t4);
                  if (2 === arguments.length) {
                    t4 = "" + t4, n3 = e4;
                    var a3 = this._nodes.get(t4);
                    if (void 0 === a3)
                      throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                    return ht(false, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
                  }
                  if (3 === arguments.length) {
                    t4 = "" + t4, e4 = "" + e4;
                    var c3 = this._nodes.get(t4);
                    if (!c3)
                      throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                    if (!this._nodes.has(e4))
                      throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                    return lt(false, r2, this.multi, i2, c3, e4, n3);
                  }
                  throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                }
              };
              var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[a2] = function() {
                var t4, e4 = Array.prototype.slice.call(arguments), n3 = e4.pop();
                if (0 === e4.length) {
                  var i3 = 0;
                  "directed" !== r2 && (i3 += this.undirectedSize), "undirected" !== r2 && (i3 += this.directedSize), t4 = new Array(i3);
                  var a3 = 0;
                  e4.push(function(e5, r3, i4, o3, c3, u3, d2) {
                    t4[a3++] = n3(e5, r3, i4, o3, c3, u3, d2);
                  });
                } else
                  t4 = [], e4.push(function(e5, r3, i4, o3, a4, c3, u3) {
                    t4.push(n3(e5, r3, i4, o3, a4, c3, u3));
                  });
                return this[o2].apply(this, e4), t4;
              };
              var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[c2] = function() {
                var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop(), n3 = [];
                return t4.push(function(t5, r3, i3, o3, a3, c3, u3) {
                  e4(t5, r3, i3, o3, a3, c3, u3) && n3.push(t5);
                }), this[o2].apply(this, t4), n3;
              };
              var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[u2] = function() {
                var t4, e4, n3 = Array.prototype.slice.call(arguments);
                if (n3.length < 2 || n3.length > 4)
                  throw new B("Graph.".concat(u2, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n3.length, ")."));
                if ("function" == typeof n3[n3.length - 1] && "function" != typeof n3[n3.length - 2])
                  throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                2 === n3.length ? (t4 = n3[0], e4 = n3[1], n3 = []) : 3 === n3.length ? (t4 = n3[1], e4 = n3[2], n3 = [n3[0]]) : 4 === n3.length && (t4 = n3[2], e4 = n3[3], n3 = [n3[0], n3[1]]);
                var r3 = e4;
                return n3.push(function(e5, n4, i3, o3, a3, c3, u3) {
                  r3 = t4(r3, e5, n4, i3, o3, a3, c3, u3);
                }), this[o2].apply(this, n3), r3;
              };
            }(t2, e2), function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "find" + n2[0].toUpperCase() + n2.slice(1, -1);
              t3.prototype[o2] = function(t4, e4, n3) {
                if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type)
                  return false;
                if (1 === arguments.length)
                  return dt(true, this, r2, n3 = t4);
                if (2 === arguments.length) {
                  t4 = "" + t4, n3 = e4;
                  var a3 = this._nodes.get(t4);
                  if (void 0 === a3)
                    throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return ht(true, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
                }
                if (3 === arguments.length) {
                  t4 = "" + t4, e4 = "" + e4;
                  var c3 = this._nodes.get(t4);
                  if (!c3)
                    throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                  if (!this._nodes.has(e4))
                    throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                  return lt(true, r2, this.multi, i2, c3, e4, n3);
                }
                throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
              };
              var a2 = "some" + n2[0].toUpperCase() + n2.slice(1, -1);
              t3.prototype[a2] = function() {
                var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
                return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
                  return e4(t5, n3, r3, i3, o3, a3, c3);
                }), !!this[o2].apply(this, t4);
              };
              var c2 = "every" + n2[0].toUpperCase() + n2.slice(1, -1);
              t3.prototype[c2] = function() {
                var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
                return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
                  return !e4(t5, n3, r3, i3, o3, a3, c3);
                }), !this[o2].apply(this, t4);
              };
            }(t2, e2), function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = n2.slice(0, -1) + "Entries";
              t3.prototype[o2] = function(t4, e4) {
                if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type)
                  return O.empty();
                if (!arguments.length)
                  return st(this, r2);
                if (1 === arguments.length) {
                  t4 = "" + t4;
                  var n3 = this._nodes.get(t4);
                  if (!n3)
                    throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return ft(r2, i2, n3);
                }
                if (2 === arguments.length) {
                  t4 = "" + t4, e4 = "" + e4;
                  var a2 = this._nodes.get(t4);
                  if (!a2)
                    throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                  if (!this._nodes.has(e4))
                    throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                  return yt(r2, i2, a2, e4);
                }
                throw new B("Graph.".concat(o2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
              };
            }(t2, e2);
          });
        }(zt), function(t2) {
          wt.forEach(function(e2) {
            _t(t2, e2), function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
              t3.prototype[o2] = function(t4, e4) {
                if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                  t4 = "" + t4;
                  var n3 = this._nodes.get(t4);
                  if (void 0 === n3)
                    throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                  mt(false, "mixed" === r2 ? this.type : r2, i2, n3, e4);
                }
              };
              var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[a2] = function(t4, e4) {
                var n3 = [];
                return this[o2](t4, function(t5, r3) {
                  n3.push(e4(t5, r3));
                }), n3;
              };
              var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[c2] = function(t4, e4) {
                var n3 = [];
                return this[o2](t4, function(t5, r3) {
                  e4(t5, r3) && n3.push(t5);
                }), n3;
              };
              var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
              t3.prototype[u2] = function(t4, e4, n3) {
                if (arguments.length < 3)
                  throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                var r3 = n3;
                return this[o2](t4, function(t5, n4) {
                  r3 = e4(r3, t5, n4);
                }), r3;
              };
            }(t2, e2), function(t3, e3) {
              var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = n2[0].toUpperCase() + n2.slice(1, -1), a2 = "find" + o2;
              t3.prototype[a2] = function(t4, e4) {
                if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                  t4 = "" + t4;
                  var n3 = this._nodes.get(t4);
                  if (void 0 === n3)
                    throw new F("Graph.".concat(a2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return mt(true, "mixed" === r2 ? this.type : r2, i2, n3, e4);
                }
              };
              var c2 = "some" + o2;
              t3.prototype[c2] = function(t4, e4) {
                return !!this[a2](t4, e4);
              };
              var u2 = "every" + o2;
              t3.prototype[u2] = function(t4, e4) {
                return !this[a2](t4, function(t5, n3) {
                  return !e4(t5, n3);
                });
              };
            }(t2, e2), Gt(t2, e2);
          });
        }(zt);
        var Wt = function(t2) {
          function n2(e2) {
            var n3 = u({ type: "directed" }, e2);
            if ("multi" in n3 && false !== n3.multi)
              throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("directed" !== n3.type)
              throw new B('DirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
            return t2.call(this, n3) || this;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(zt), Pt = function(t2) {
          function n2(e2) {
            var n3 = u({ type: "undirected" }, e2);
            if ("multi" in n3 && false !== n3.multi)
              throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("undirected" !== n3.type)
              throw new B('UndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
            return t2.call(this, n3) || this;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(zt), Rt = function(t2) {
          function n2(e2) {
            var n3 = u({ multi: true }, e2);
            if ("multi" in n3 && true !== n3.multi)
              throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
            return t2.call(this, n3) || this;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(zt), Kt = function(t2) {
          function n2(e2) {
            var n3 = u({ type: "directed", multi: true }, e2);
            if ("multi" in n3 && true !== n3.multi)
              throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("directed" !== n3.type)
              throw new B('MultiDirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
            return t2.call(this, n3) || this;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(zt), Tt = function(t2) {
          function n2(e2) {
            var n3 = u({ type: "undirected", multi: true }, e2);
            if ("multi" in n3 && true !== n3.multi)
              throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("undirected" !== n3.type)
              throw new B('MultiUndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
            return t2.call(this, n3) || this;
          }
          __name(n2, "n");
          return e(n2, t2), n2;
        }(zt);
        function Bt(t2) {
          t2.from = function(e2, n2) {
            var r2 = u({}, e2.options, n2), i2 = new t2(r2);
            return i2.import(e2), i2;
          };
        }
        __name(Bt, "Bt");
        return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
      });
    }
  });

  // ../boardzilla-core/node_modules/graphology-utils/is-graph.js
  var require_is_graph = __commonJS({
    "../boardzilla-core/node_modules/graphology-utils/is-graph.js"(exports, module) {
      module.exports = /* @__PURE__ */ __name(function isGraph(value) {
        return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
      }, "isGraph");
    }
  });

  // ../boardzilla-core/node_modules/obliterator/iterator.js
  var require_iterator = __commonJS({
    "../boardzilla-core/node_modules/obliterator/iterator.js"(exports, module) {
      function Iterator(next) {
        if (typeof next !== "function")
          throw new Error("obliterator/iterator: expecting a function!");
        this.next = next;
      }
      __name(Iterator, "Iterator");
      if (typeof Symbol !== "undefined")
        Iterator.prototype[Symbol.iterator] = function() {
          return this;
        };
      Iterator.of = function() {
        var args = arguments, l = args.length, i = 0;
        return new Iterator(function() {
          if (i >= l)
            return { done: true };
          return { done: false, value: args[i++] };
        });
      };
      Iterator.empty = function() {
        var iterator = new Iterator(function() {
          return { done: true };
        });
        return iterator;
      };
      Iterator.fromSequence = function(sequence) {
        var i = 0, l = sequence.length;
        return new Iterator(function() {
          if (i >= l)
            return { done: true };
          return { done: false, value: sequence[i++] };
        });
      };
      Iterator.is = function(value) {
        if (value instanceof Iterator)
          return true;
        return typeof value === "object" && value !== null && typeof value.next === "function";
      };
      module.exports = Iterator;
    }
  });

  // ../boardzilla-core/node_modules/obliterator/support.js
  var require_support = __commonJS({
    "../boardzilla-core/node_modules/obliterator/support.js"(exports) {
      exports.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
      exports.SYMBOL_SUPPORT = typeof Symbol !== "undefined";
    }
  });

  // ../boardzilla-core/node_modules/obliterator/foreach.js
  var require_foreach = __commonJS({
    "../boardzilla-core/node_modules/obliterator/foreach.js"(exports, module) {
      var support = require_support();
      var ARRAY_BUFFER_SUPPORT = support.ARRAY_BUFFER_SUPPORT;
      var SYMBOL_SUPPORT = support.SYMBOL_SUPPORT;
      module.exports = /* @__PURE__ */ __name(function forEach2(iterable, callback) {
        var iterator, k, i, l, s;
        if (!iterable)
          throw new Error("obliterator/forEach: invalid iterable.");
        if (typeof callback !== "function")
          throw new Error("obliterator/forEach: expecting a callback.");
        if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
          for (i = 0, l = iterable.length; i < l; i++)
            callback(iterable[i], i);
          return;
        }
        if (typeof iterable.forEach === "function") {
          iterable.forEach(callback);
          return;
        }
        if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
          iterable = iterable[Symbol.iterator]();
        }
        if (typeof iterable.next === "function") {
          iterator = iterable;
          i = 0;
          while (s = iterator.next(), s.done !== true) {
            callback(s.value, i);
            i++;
          }
          return;
        }
        for (k in iterable) {
          if (iterable.hasOwnProperty(k)) {
            callback(iterable[k], k);
          }
        }
        return;
      }, "forEach");
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/queue.js
  var require_queue = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/queue.js"(exports, module) {
      var Iterator = require_iterator();
      var forEach2 = require_foreach();
      function Queue() {
        this.clear();
      }
      __name(Queue, "Queue");
      Queue.prototype.clear = function() {
        this.items = [];
        this.offset = 0;
        this.size = 0;
      };
      Queue.prototype.enqueue = function(item) {
        this.items.push(item);
        return ++this.size;
      };
      Queue.prototype.dequeue = function() {
        if (!this.size)
          return;
        var item = this.items[this.offset];
        if (++this.offset * 2 >= this.items.length) {
          this.items = this.items.slice(this.offset);
          this.offset = 0;
        }
        this.size--;
        return item;
      };
      Queue.prototype.peek = function() {
        if (!this.size)
          return;
        return this.items[this.offset];
      };
      Queue.prototype.forEach = function(callback, scope) {
        scope = arguments.length > 1 ? scope : this;
        for (var i = this.offset, j = 0, l = this.items.length; i < l; i++, j++)
          callback.call(scope, this.items[i], j, this);
      };
      Queue.prototype.toArray = function() {
        return this.items.slice(this.offset);
      };
      Queue.prototype.values = function() {
        var items = this.items, i = this.offset;
        return new Iterator(function() {
          if (i >= items.length)
            return {
              done: true
            };
          var value = items[i];
          i++;
          return {
            value,
            done: false
          };
        });
      };
      Queue.prototype.entries = function() {
        var items = this.items, i = this.offset, j = 0;
        return new Iterator(function() {
          if (i >= items.length)
            return {
              done: true
            };
          var value = items[i];
          i++;
          return {
            value: [j++, value],
            done: false
          };
        });
      };
      if (typeof Symbol !== "undefined")
        Queue.prototype[Symbol.iterator] = Queue.prototype.values;
      Queue.prototype.toString = function() {
        return this.toArray().join(",");
      };
      Queue.prototype.toJSON = function() {
        return this.toArray();
      };
      Queue.prototype.inspect = function() {
        var array = this.toArray();
        Object.defineProperty(array, "constructor", {
          value: Queue,
          enumerable: false
        });
        return array;
      };
      if (typeof Symbol !== "undefined")
        Queue.prototype[Symbol.for("nodejs.util.inspect.custom")] = Queue.prototype.inspect;
      Queue.from = function(iterable) {
        var queue = new Queue();
        forEach2(iterable, function(value) {
          queue.enqueue(value);
        });
        return queue;
      };
      Queue.of = function() {
        return Queue.from(arguments);
      };
      module.exports = Queue;
    }
  });

  // ../boardzilla-core/node_modules/@yomguithereal/helpers/extend.js
  var require_extend = __commonJS({
    "../boardzilla-core/node_modules/@yomguithereal/helpers/extend.js"(exports, module) {
      module.exports = /* @__PURE__ */ __name(function extend(array, values) {
        var l2 = values.length;
        if (l2 === 0)
          return;
        var l1 = array.length;
        array.length += l2;
        for (var i = 0; i < l2; i++)
          array[l1 + i] = values[i];
      }, "extend");
    }
  });

  // ../boardzilla-core/node_modules/graphology-shortest-path/unweighted.js
  var require_unweighted = __commonJS({
    "../boardzilla-core/node_modules/graphology-shortest-path/unweighted.js"(exports) {
      var isGraph = require_is_graph();
      var Queue = require_queue();
      var extend = require_extend();
      function bidirectional(graph, source, target) {
        if (!isGraph(graph))
          throw new Error("graphology-shortest-path: invalid graphology instance.");
        if (arguments.length < 3)
          throw new Error(
            "graphology-shortest-path: invalid number of arguments. Expecting at least 3."
          );
        if (!graph.hasNode(source))
          throw new Error(
            'graphology-shortest-path: the "' + source + '" source node does not exist in the given graph.'
          );
        if (!graph.hasNode(target))
          throw new Error(
            'graphology-shortest-path: the "' + target + '" target node does not exist in the given graph.'
          );
        source = "" + source;
        target = "" + target;
        if (source === target) {
          return [source];
        }
        var getPredecessors = graph.inboundNeighbors.bind(graph), getSuccessors = graph.outboundNeighbors.bind(graph);
        var predecessor = {}, successor = {};
        predecessor[source] = null;
        successor[target] = null;
        var forwardFringe = [source], reverseFringe = [target], currentFringe, node, neighbors, neighbor, i, j, l, m;
        var found = false;
        outer:
          while (forwardFringe.length && reverseFringe.length) {
            if (forwardFringe.length <= reverseFringe.length) {
              currentFringe = forwardFringe;
              forwardFringe = [];
              for (i = 0, l = currentFringe.length; i < l; i++) {
                node = currentFringe[i];
                neighbors = getSuccessors(node);
                for (j = 0, m = neighbors.length; j < m; j++) {
                  neighbor = neighbors[j];
                  if (!(neighbor in predecessor)) {
                    forwardFringe.push(neighbor);
                    predecessor[neighbor] = node;
                  }
                  if (neighbor in successor) {
                    found = true;
                    break outer;
                  }
                }
              }
            } else {
              currentFringe = reverseFringe;
              reverseFringe = [];
              for (i = 0, l = currentFringe.length; i < l; i++) {
                node = currentFringe[i];
                neighbors = getPredecessors(node);
                for (j = 0, m = neighbors.length; j < m; j++) {
                  neighbor = neighbors[j];
                  if (!(neighbor in successor)) {
                    reverseFringe.push(neighbor);
                    successor[neighbor] = node;
                  }
                  if (neighbor in predecessor) {
                    found = true;
                    break outer;
                  }
                }
              }
            }
          }
        if (!found)
          return null;
        var path = [];
        while (neighbor) {
          path.unshift(neighbor);
          neighbor = predecessor[neighbor];
        }
        neighbor = successor[path[path.length - 1]];
        while (neighbor) {
          path.push(neighbor);
          neighbor = successor[neighbor];
        }
        return path.length ? path : null;
      }
      __name(bidirectional, "bidirectional");
      function singleSource(graph, source) {
        if (!isGraph(graph))
          throw new Error("graphology-shortest-path: invalid graphology instance.");
        if (arguments.length < 2)
          throw new Error(
            "graphology-shortest-path: invalid number of arguments. Expecting at least 2."
          );
        if (!graph.hasNode(source))
          throw new Error(
            'graphology-shortest-path: the "' + source + '" source node does not exist in the given graph.'
          );
        source = "" + source;
        var nextLevel = {}, paths = {}, currentLevel, neighbors, v, w, i, l;
        nextLevel[source] = true;
        paths[source] = [source];
        while (Object.keys(nextLevel).length) {
          currentLevel = nextLevel;
          nextLevel = {};
          for (v in currentLevel) {
            neighbors = graph.outboundNeighbors(v);
            for (i = 0, l = neighbors.length; i < l; i++) {
              w = neighbors[i];
              if (!paths[w]) {
                paths[w] = paths[v].concat(w);
                nextLevel[w] = true;
              }
            }
          }
        }
        return paths;
      }
      __name(singleSource, "singleSource");
      function asbtractSingleSourceLength(method, graph, source) {
        if (!isGraph(graph))
          throw new Error("graphology-shortest-path: invalid graphology instance.");
        if (!graph.hasNode(source))
          throw new Error(
            'graphology-shortest-path: the "' + source + '" source node does not exist in the given graph.'
          );
        source = "" + source;
        var seen = /* @__PURE__ */ new Set();
        var lengths = {}, level = 0;
        lengths[source] = 0;
        var currentLevel = [source];
        var i, l, node;
        while (currentLevel.length !== 0) {
          var nextLevel = [];
          for (i = 0, l = currentLevel.length; i < l; i++) {
            node = currentLevel[i];
            if (seen.has(node))
              continue;
            seen.add(node);
            extend(nextLevel, graph[method](node));
            lengths[node] = level;
          }
          level++;
          currentLevel = nextLevel;
        }
        return lengths;
      }
      __name(asbtractSingleSourceLength, "asbtractSingleSourceLength");
      var singleSourceLength = asbtractSingleSourceLength.bind(
        null,
        "outboundNeighbors"
      );
      var undirectedSingleSourceLength = asbtractSingleSourceLength.bind(
        null,
        "neighbors"
      );
      function brandes(graph, source) {
        source = "" + source;
        var S = [], P = {}, sigma = {};
        var nodes = graph.nodes(), Dv, sigmav, neighbors, v, w, i, j, l, m;
        for (i = 0, l = nodes.length; i < l; i++) {
          v = nodes[i];
          P[v] = [];
          sigma[v] = 0;
        }
        var D = {};
        sigma[source] = 1;
        D[source] = 0;
        var queue = Queue.of(source);
        while (queue.size) {
          v = queue.dequeue();
          S.push(v);
          Dv = D[v];
          sigmav = sigma[v];
          neighbors = graph.outboundNeighbors(v);
          for (j = 0, m = neighbors.length; j < m; j++) {
            w = neighbors[j];
            if (!(w in D)) {
              queue.enqueue(w);
              D[w] = Dv + 1;
            }
            if (D[w] === Dv + 1) {
              sigma[w] += sigmav;
              P[w].push(v);
            }
          }
        }
        return [S, P, sigma];
      }
      __name(brandes, "brandes");
      exports.bidirectional = bidirectional;
      exports.singleSource = singleSource;
      exports.singleSourceLength = singleSourceLength;
      exports.undirectedSingleSourceLength = undirectedSingleSourceLength;
      exports.brandes = brandes;
    }
  });

  // ../boardzilla-core/node_modules/graphology-shortest-path/utils.js
  var require_utils = __commonJS({
    "../boardzilla-core/node_modules/graphology-shortest-path/utils.js"(exports) {
      var returnTrue = /* @__PURE__ */ __name(function() {
        return true;
      }, "returnTrue");
      exports.edgePathFromNodePath = function(graph, nodePath) {
        var l = nodePath.length;
        var i, source, target, edge;
        if (l < 2) {
          source = nodePath[0];
          edge = graph.multi ? graph.findEdge(source, source, returnTrue) : graph.edge(source, source);
          if (edge)
            return [edge];
          return [];
        }
        l--;
        var edgePath = new Array(l);
        for (i = 0; i < l; i++) {
          source = nodePath[i];
          target = nodePath[i + 1];
          edge = graph.multi ? graph.findOutboundEdge(source, target, returnTrue) : graph.edge(source, target);
          if (edge === void 0)
            throw new Error(
              "graphology-shortest-path: given path is impossible in given graph."
            );
          edgePath[i] = edge;
        }
        return edgePath;
      };
    }
  });

  // ../boardzilla-core/node_modules/graphology-utils/getters.js
  var require_getters = __commonJS({
    "../boardzilla-core/node_modules/graphology-utils/getters.js"(exports) {
      function coerceWeight(value) {
        if (typeof value !== "number" || isNaN(value))
          return 1;
        return value;
      }
      __name(coerceWeight, "coerceWeight");
      function createNodeValueGetter(nameOrFunction, defaultValue) {
        var getter = {};
        var coerceToDefault = /* @__PURE__ */ __name(function(v) {
          if (typeof v === "undefined")
            return defaultValue;
          return v;
        }, "coerceToDefault");
        if (typeof defaultValue === "function")
          coerceToDefault = defaultValue;
        var get = /* @__PURE__ */ __name(function(attributes) {
          return coerceToDefault(attributes[nameOrFunction]);
        }, "get");
        var returnDefault = /* @__PURE__ */ __name(function() {
          return coerceToDefault(void 0);
        }, "returnDefault");
        if (typeof nameOrFunction === "string") {
          getter.fromAttributes = get;
          getter.fromGraph = function(graph, node) {
            return get(graph.getNodeAttributes(node));
          };
          getter.fromEntry = function(node, attributes) {
            return get(attributes);
          };
        } else if (typeof nameOrFunction === "function") {
          getter.fromAttributes = function() {
            throw new Error(
              "graphology-utils/getters/createNodeValueGetter: irrelevant usage."
            );
          };
          getter.fromGraph = function(graph, node) {
            return coerceToDefault(
              nameOrFunction(node, graph.getNodeAttributes(node))
            );
          };
          getter.fromEntry = function(node, attributes) {
            return coerceToDefault(nameOrFunction(node, attributes));
          };
        } else {
          getter.fromAttributes = returnDefault;
          getter.fromGraph = returnDefault;
          getter.fromEntry = returnDefault;
        }
        return getter;
      }
      __name(createNodeValueGetter, "createNodeValueGetter");
      function createEdgeValueGetter(nameOrFunction, defaultValue) {
        var getter = {};
        var coerceToDefault = /* @__PURE__ */ __name(function(v) {
          if (typeof v === "undefined")
            return defaultValue;
          return v;
        }, "coerceToDefault");
        if (typeof defaultValue === "function")
          coerceToDefault = defaultValue;
        var get = /* @__PURE__ */ __name(function(attributes) {
          return coerceToDefault(attributes[nameOrFunction]);
        }, "get");
        var returnDefault = /* @__PURE__ */ __name(function() {
          return coerceToDefault(void 0);
        }, "returnDefault");
        if (typeof nameOrFunction === "string") {
          getter.fromAttributes = get;
          getter.fromGraph = function(graph, edge) {
            return get(graph.getEdgeAttributes(edge));
          };
          getter.fromEntry = function(edge, attributes) {
            return get(attributes);
          };
          getter.fromPartialEntry = getter.fromEntry;
          getter.fromMinimalEntry = getter.fromEntry;
        } else if (typeof nameOrFunction === "function") {
          getter.fromAttributes = function() {
            throw new Error(
              "graphology-utils/getters/createEdgeValueGetter: irrelevant usage."
            );
          };
          getter.fromGraph = function(graph, edge) {
            var extremities = graph.extremities(edge);
            return coerceToDefault(
              nameOrFunction(
                edge,
                graph.getEdgeAttributes(edge),
                extremities[0],
                extremities[1],
                graph.getNodeAttributes(extremities[0]),
                graph.getNodeAttributes(extremities[1]),
                graph.isUndirected(edge)
              )
            );
          };
          getter.fromEntry = function(e, a, s, t, sa, ta, u) {
            return coerceToDefault(nameOrFunction(e, a, s, t, sa, ta, u));
          };
          getter.fromPartialEntry = function(e, a, s, t) {
            return coerceToDefault(nameOrFunction(e, a, s, t));
          };
          getter.fromMinimalEntry = function(e, a) {
            return coerceToDefault(nameOrFunction(e, a));
          };
        } else {
          getter.fromAttributes = returnDefault;
          getter.fromGraph = returnDefault;
          getter.fromEntry = returnDefault;
          getter.fromMinimalEntry = returnDefault;
        }
        return getter;
      }
      __name(createEdgeValueGetter, "createEdgeValueGetter");
      exports.createNodeValueGetter = createNodeValueGetter;
      exports.createEdgeValueGetter = createEdgeValueGetter;
      exports.createEdgeWeightGetter = function(name) {
        return createEdgeValueGetter(name, coerceWeight);
      };
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/utils/comparators.js
  var require_comparators = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/utils/comparators.js"(exports) {
      var DEFAULT_COMPARATOR = /* @__PURE__ */ __name(function(a, b) {
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      }, "DEFAULT_COMPARATOR");
      var DEFAULT_REVERSE_COMPARATOR = /* @__PURE__ */ __name(function(a, b) {
        if (a < b)
          return 1;
        if (a > b)
          return -1;
        return 0;
      }, "DEFAULT_REVERSE_COMPARATOR");
      function reverseComparator(comparator) {
        return function(a, b) {
          return comparator(b, a);
        };
      }
      __name(reverseComparator, "reverseComparator");
      function createTupleComparator(size) {
        if (size === 2) {
          return function(a, b) {
            if (a[0] < b[0])
              return -1;
            if (a[0] > b[0])
              return 1;
            if (a[1] < b[1])
              return -1;
            if (a[1] > b[1])
              return 1;
            return 0;
          };
        }
        return function(a, b) {
          var i = 0;
          while (i < size) {
            if (a[i] < b[i])
              return -1;
            if (a[i] > b[i])
              return 1;
            i++;
          }
          return 0;
        };
      }
      __name(createTupleComparator, "createTupleComparator");
      exports.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR;
      exports.DEFAULT_REVERSE_COMPARATOR = DEFAULT_REVERSE_COMPARATOR;
      exports.reverseComparator = reverseComparator;
      exports.createTupleComparator = createTupleComparator;
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/utils/typed-arrays.js
  var require_typed_arrays = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/utils/typed-arrays.js"(exports) {
      var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
      var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
      var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
      var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
      var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
      var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
      exports.getPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_8BIT_INTEGER)
          return Uint8Array;
        if (maxIndex <= MAX_16BIT_INTEGER)
          return Uint16Array;
        if (maxIndex <= MAX_32BIT_INTEGER)
          return Uint32Array;
        throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
      };
      exports.getSignedPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
          return Int8Array;
        if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
          return Int16Array;
        if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
          return Int32Array;
        return Float64Array;
      };
      exports.getNumberType = function(value) {
        if (value === (value | 0)) {
          if (Math.sign(value) === -1) {
            if (value <= 127 && value >= -128)
              return Int8Array;
            if (value <= 32767 && value >= -32768)
              return Int16Array;
            return Int32Array;
          } else {
            if (value <= 255)
              return Uint8Array;
            if (value <= 65535)
              return Uint16Array;
            return Uint32Array;
          }
        }
        return Float64Array;
      };
      var TYPE_PRIORITY = {
        Uint8Array: 1,
        Int8Array: 2,
        Uint16Array: 3,
        Int16Array: 4,
        Uint32Array: 5,
        Int32Array: 6,
        Float32Array: 7,
        Float64Array: 8
      };
      exports.getMinimalRepresentation = function(array, getter) {
        var maxType = null, maxPriority = 0, p, t, v, i, l;
        for (i = 0, l = array.length; i < l; i++) {
          v = getter ? getter(array[i]) : array[i];
          t = exports.getNumberType(v);
          p = TYPE_PRIORITY[t.name];
          if (p > maxPriority) {
            maxPriority = p;
            maxType = t;
          }
        }
        return maxType;
      };
      exports.isTypedArray = function(value) {
        return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
      };
      exports.concat = function() {
        var length = 0, i, o, l;
        for (i = 0, l = arguments.length; i < l; i++)
          length += arguments[i].length;
        var array = new arguments[0].constructor(length);
        for (i = 0, o = 0; i < l; i++) {
          array.set(arguments[i], o);
          o += arguments[i].length;
        }
        return array;
      };
      exports.indices = function(length) {
        var PointerArray = exports.getPointerArray(length);
        var array = new PointerArray(length);
        for (var i = 0; i < length; i++)
          array[i] = i;
        return array;
      };
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/utils/iterables.js
  var require_iterables = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/utils/iterables.js"(exports) {
      var forEach2 = require_foreach();
      var typed = require_typed_arrays();
      function isArrayLike(target) {
        return Array.isArray(target) || typed.isTypedArray(target);
      }
      __name(isArrayLike, "isArrayLike");
      function guessLength(target) {
        if (typeof target.length === "number")
          return target.length;
        if (typeof target.size === "number")
          return target.size;
        return;
      }
      __name(guessLength, "guessLength");
      function toArray(target) {
        var l = guessLength(target);
        var array = typeof l === "number" ? new Array(l) : [];
        var i = 0;
        forEach2(target, function(value) {
          array[i++] = value;
        });
        return array;
      }
      __name(toArray, "toArray");
      function toArrayWithIndices(target) {
        var l = guessLength(target);
        var IndexArray = typeof l === "number" ? typed.getPointerArray(l) : Array;
        var array = typeof l === "number" ? new Array(l) : [];
        var indices = typeof l === "number" ? new IndexArray(l) : [];
        var i = 0;
        forEach2(target, function(value) {
          array[i] = value;
          indices[i] = i++;
        });
        return [array, indices];
      }
      __name(toArrayWithIndices, "toArrayWithIndices");
      exports.isArrayLike = isArrayLike;
      exports.guessLength = guessLength;
      exports.toArray = toArray;
      exports.toArrayWithIndices = toArrayWithIndices;
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/heap.js
  var require_heap = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/heap.js"(exports, module) {
      var forEach2 = require_foreach();
      var comparators = require_comparators();
      var iterables = require_iterables();
      var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR;
      var reverseComparator = comparators.reverseComparator;
      function siftDown(compare, heap, startIndex, i) {
        var item = heap[i], parentIndex, parent;
        while (i > startIndex) {
          parentIndex = i - 1 >> 1;
          parent = heap[parentIndex];
          if (compare(item, parent) < 0) {
            heap[i] = parent;
            i = parentIndex;
            continue;
          }
          break;
        }
        heap[i] = item;
      }
      __name(siftDown, "siftDown");
      function siftUp(compare, heap, i) {
        var endIndex = heap.length, startIndex = i, item = heap[i], childIndex = 2 * i + 1, rightIndex;
        while (childIndex < endIndex) {
          rightIndex = childIndex + 1;
          if (rightIndex < endIndex && compare(heap[childIndex], heap[rightIndex]) >= 0) {
            childIndex = rightIndex;
          }
          heap[i] = heap[childIndex];
          i = childIndex;
          childIndex = 2 * i + 1;
        }
        heap[i] = item;
        siftDown(compare, heap, startIndex, i);
      }
      __name(siftUp, "siftUp");
      function push(compare, heap, item) {
        heap.push(item);
        siftDown(compare, heap, 0, heap.length - 1);
      }
      __name(push, "push");
      function pop(compare, heap) {
        var lastItem = heap.pop();
        if (heap.length !== 0) {
          var item = heap[0];
          heap[0] = lastItem;
          siftUp(compare, heap, 0);
          return item;
        }
        return lastItem;
      }
      __name(pop, "pop");
      function replace(compare, heap, item) {
        if (heap.length === 0)
          throw new Error("mnemonist/heap.replace: cannot pop an empty heap.");
        var popped = heap[0];
        heap[0] = item;
        siftUp(compare, heap, 0);
        return popped;
      }
      __name(replace, "replace");
      function pushpop(compare, heap, item) {
        var tmp;
        if (heap.length !== 0 && compare(heap[0], item) < 0) {
          tmp = heap[0];
          heap[0] = item;
          item = tmp;
          siftUp(compare, heap, 0);
        }
        return item;
      }
      __name(pushpop, "pushpop");
      function heapify(compare, array) {
        var n = array.length, l = n >> 1, i = l;
        while (--i >= 0)
          siftUp(compare, array, i);
      }
      __name(heapify, "heapify");
      function consume(compare, heap) {
        var l = heap.length, i = 0;
        var array = new Array(l);
        while (i < l)
          array[i++] = pop(compare, heap);
        return array;
      }
      __name(consume, "consume");
      function nsmallest(compare, n, iterable) {
        if (arguments.length === 2) {
          iterable = n;
          n = compare;
          compare = DEFAULT_COMPARATOR;
        }
        var reverseCompare = reverseComparator(compare);
        var i, l, v;
        var min = Infinity;
        var result;
        if (n === 1) {
          if (iterables.isArrayLike(iterable)) {
            for (i = 0, l = iterable.length; i < l; i++) {
              v = iterable[i];
              if (min === Infinity || compare(v, min) < 0)
                min = v;
            }
            result = new iterable.constructor(1);
            result[0] = min;
            return result;
          }
          forEach2(iterable, function(value) {
            if (min === Infinity || compare(value, min) < 0)
              min = value;
          });
          return [min];
        }
        if (iterables.isArrayLike(iterable)) {
          if (n >= iterable.length)
            return iterable.slice().sort(compare);
          result = iterable.slice(0, n);
          heapify(reverseCompare, result);
          for (i = n, l = iterable.length; i < l; i++)
            if (reverseCompare(iterable[i], result[0]) > 0)
              replace(reverseCompare, result, iterable[i]);
          return result.sort(compare);
        }
        var size = iterables.guessLength(iterable);
        if (size !== null && size < n)
          n = size;
        result = new Array(n);
        i = 0;
        forEach2(iterable, function(value) {
          if (i < n) {
            result[i] = value;
          } else {
            if (i === n)
              heapify(reverseCompare, result);
            if (reverseCompare(value, result[0]) > 0)
              replace(reverseCompare, result, value);
          }
          i++;
        });
        if (result.length > i)
          result.length = i;
        return result.sort(compare);
      }
      __name(nsmallest, "nsmallest");
      function nlargest(compare, n, iterable) {
        if (arguments.length === 2) {
          iterable = n;
          n = compare;
          compare = DEFAULT_COMPARATOR;
        }
        var reverseCompare = reverseComparator(compare);
        var i, l, v;
        var max = -Infinity;
        var result;
        if (n === 1) {
          if (iterables.isArrayLike(iterable)) {
            for (i = 0, l = iterable.length; i < l; i++) {
              v = iterable[i];
              if (max === -Infinity || compare(v, max) > 0)
                max = v;
            }
            result = new iterable.constructor(1);
            result[0] = max;
            return result;
          }
          forEach2(iterable, function(value) {
            if (max === -Infinity || compare(value, max) > 0)
              max = value;
          });
          return [max];
        }
        if (iterables.isArrayLike(iterable)) {
          if (n >= iterable.length)
            return iterable.slice().sort(reverseCompare);
          result = iterable.slice(0, n);
          heapify(compare, result);
          for (i = n, l = iterable.length; i < l; i++)
            if (compare(iterable[i], result[0]) > 0)
              replace(compare, result, iterable[i]);
          return result.sort(reverseCompare);
        }
        var size = iterables.guessLength(iterable);
        if (size !== null && size < n)
          n = size;
        result = new Array(n);
        i = 0;
        forEach2(iterable, function(value) {
          if (i < n) {
            result[i] = value;
          } else {
            if (i === n)
              heapify(compare, result);
            if (compare(value, result[0]) > 0)
              replace(compare, result, value);
          }
          i++;
        });
        if (result.length > i)
          result.length = i;
        return result.sort(reverseCompare);
      }
      __name(nlargest, "nlargest");
      function Heap(comparator) {
        this.clear();
        this.comparator = comparator || DEFAULT_COMPARATOR;
        if (typeof this.comparator !== "function")
          throw new Error("mnemonist/Heap.constructor: given comparator should be a function.");
      }
      __name(Heap, "Heap");
      Heap.prototype.clear = function() {
        this.items = [];
        this.size = 0;
      };
      Heap.prototype.push = function(item) {
        push(this.comparator, this.items, item);
        return ++this.size;
      };
      Heap.prototype.peek = function() {
        return this.items[0];
      };
      Heap.prototype.pop = function() {
        if (this.size !== 0)
          this.size--;
        return pop(this.comparator, this.items);
      };
      Heap.prototype.replace = function(item) {
        return replace(this.comparator, this.items, item);
      };
      Heap.prototype.pushpop = function(item) {
        return pushpop(this.comparator, this.items, item);
      };
      Heap.prototype.consume = function() {
        this.size = 0;
        return consume(this.comparator, this.items);
      };
      Heap.prototype.toArray = function() {
        return consume(this.comparator, this.items.slice());
      };
      Heap.prototype.inspect = function() {
        var proxy = this.toArray();
        Object.defineProperty(proxy, "constructor", {
          value: Heap,
          enumerable: false
        });
        return proxy;
      };
      if (typeof Symbol !== "undefined")
        Heap.prototype[Symbol.for("nodejs.util.inspect.custom")] = Heap.prototype.inspect;
      function MaxHeap(comparator) {
        this.clear();
        this.comparator = comparator || DEFAULT_COMPARATOR;
        if (typeof this.comparator !== "function")
          throw new Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
        this.comparator = reverseComparator(this.comparator);
      }
      __name(MaxHeap, "MaxHeap");
      MaxHeap.prototype = Heap.prototype;
      Heap.from = function(iterable, comparator) {
        var heap = new Heap(comparator);
        var items;
        if (iterables.isArrayLike(iterable))
          items = iterable.slice();
        else
          items = iterables.toArray(iterable);
        heapify(heap.comparator, items);
        heap.items = items;
        heap.size = items.length;
        return heap;
      };
      MaxHeap.from = function(iterable, comparator) {
        var heap = new MaxHeap(comparator);
        var items;
        if (iterables.isArrayLike(iterable))
          items = iterable.slice();
        else
          items = iterables.toArray(iterable);
        heapify(heap.comparator, items);
        heap.items = items;
        heap.size = items.length;
        return heap;
      };
      Heap.siftUp = siftUp;
      Heap.siftDown = siftDown;
      Heap.push = push;
      Heap.pop = pop;
      Heap.replace = replace;
      Heap.pushpop = pushpop;
      Heap.heapify = heapify;
      Heap.consume = consume;
      Heap.nsmallest = nsmallest;
      Heap.nlargest = nlargest;
      Heap.MinHeap = Heap;
      Heap.MaxHeap = MaxHeap;
      module.exports = Heap;
    }
  });

  // ../boardzilla-core/node_modules/graphology-shortest-path/dijkstra.js
  var require_dijkstra = __commonJS({
    "../boardzilla-core/node_modules/graphology-shortest-path/dijkstra.js"(exports) {
      var isGraph = require_is_graph();
      var createEdgeWeightGetter = require_getters().createEdgeWeightGetter;
      var Heap = require_heap();
      var DEFAULT_WEIGHT_ATTRIBUTE = "weight";
      function DIJKSTRA_HEAP_COMPARATOR(a, b) {
        if (a[0] > b[0])
          return 1;
        if (a[0] < b[0])
          return -1;
        if (a[1] > b[1])
          return 1;
        if (a[1] < b[1])
          return -1;
        if (a[2] > b[2])
          return 1;
        if (a[2] < b[2])
          return -1;
        return 0;
      }
      __name(DIJKSTRA_HEAP_COMPARATOR, "DIJKSTRA_HEAP_COMPARATOR");
      function BRANDES_DIJKSTRA_HEAP_COMPARATOR(a, b) {
        if (a[0] > b[0])
          return 1;
        if (a[0] < b[0])
          return -1;
        if (a[1] > b[1])
          return 1;
        if (a[1] < b[1])
          return -1;
        if (a[2] > b[2])
          return 1;
        if (a[2] < b[2])
          return -1;
        if (a[3] > b[3])
          return 1;
        if (a[3] < b[3])
          return -1;
        return 0;
      }
      __name(BRANDES_DIJKSTRA_HEAP_COMPARATOR, "BRANDES_DIJKSTRA_HEAP_COMPARATOR");
      function abstractBidirectionalDijkstra(graph, source, target, getEdgeWeight) {
        source = "" + source;
        target = "" + target;
        if (!isGraph(graph))
          throw new Error(
            "graphology-shortest-path/dijkstra: invalid graphology instance."
          );
        if (source && !graph.hasNode(source))
          throw new Error(
            'graphology-shortest-path/dijkstra: the "' + source + '" source node does not exist in the given graph.'
          );
        if (target && !graph.hasNode(target))
          throw new Error(
            'graphology-shortest-path/dijkstra: the "' + target + '" target node does not exist in the given graph.'
          );
        getEdgeWeight = createEdgeWeightGetter(
          getEdgeWeight || DEFAULT_WEIGHT_ATTRIBUTE
        ).fromMinimalEntry;
        if (source === target)
          return [0, [source]];
        var distances = [{}, {}], paths = [{}, {}], fringe = [
          new Heap(DIJKSTRA_HEAP_COMPARATOR),
          new Heap(DIJKSTRA_HEAP_COMPARATOR)
        ], seen = [{}, {}];
        paths[0][source] = [source];
        paths[1][target] = [target];
        seen[0][source] = 0;
        seen[1][target] = 0;
        var finalPath = [], finalDistance = Infinity;
        var count = 0, dir = 1, item, edges, cost, d, v, u, e, i, l;
        fringe[0].push([0, count++, source]);
        fringe[1].push([0, count++, target]);
        while (fringe[0].size && fringe[1].size) {
          dir = 1 - dir;
          item = fringe[dir].pop();
          d = item[0];
          v = item[2];
          if (v in distances[dir])
            continue;
          distances[dir][v] = d;
          if (v in distances[1 - dir])
            return [finalDistance, finalPath];
          edges = dir === 1 ? graph.inboundEdges(v) : graph.outboundEdges(v);
          for (i = 0, l = edges.length; i < l; i++) {
            e = edges[i];
            u = graph.opposite(v, e);
            cost = distances[dir][v] + getEdgeWeight(e, graph.getEdgeAttributes(e));
            if (u in distances[dir] && cost < distances[dir][u]) {
              throw Error(
                "graphology-shortest-path/dijkstra: contradictory paths found. Do some of your edges have a negative weight?"
              );
            } else if (!(u in seen[dir]) || cost < seen[dir][u]) {
              seen[dir][u] = cost;
              fringe[dir].push([cost, count++, u]);
              paths[dir][u] = paths[dir][v].concat(u);
              if (u in seen[0] && u in seen[1]) {
                d = seen[0][u] + seen[1][u];
                if (finalPath.length === 0 || finalDistance > d) {
                  finalDistance = d;
                  finalPath = paths[0][u].concat(paths[1][u].slice(0, -1).reverse());
                }
              }
            }
          }
        }
        return [Infinity, null];
      }
      __name(abstractBidirectionalDijkstra, "abstractBidirectionalDijkstra");
      function abstractDijkstraMultisource(graph, sources, getEdgeWeight, cutoff, target, paths) {
        if (!isGraph(graph))
          throw new Error(
            "graphology-shortest-path/dijkstra: invalid graphology instance."
          );
        if (target && !graph.hasNode(target))
          throw new Error(
            'graphology-shortest-path/dijkstra: the "' + target + '" target node does not exist in the given graph.'
          );
        getEdgeWeight = createEdgeWeightGetter(
          getEdgeWeight || DEFAULT_WEIGHT_ATTRIBUTE
        ).fromMinimalEntry;
        var distances = {}, seen = {}, fringe = new Heap(DIJKSTRA_HEAP_COMPARATOR);
        var count = 0, edges, item, cost, v, u, e, d, i, j, l, m;
        for (i = 0, l = sources.length; i < l; i++) {
          v = sources[i];
          seen[v] = 0;
          fringe.push([0, count++, v]);
          if (paths)
            paths[v] = [v];
        }
        while (fringe.size) {
          item = fringe.pop();
          d = item[0];
          v = item[2];
          if (v in distances)
            continue;
          distances[v] = d;
          if (v === target)
            break;
          edges = graph.outboundEdges(v);
          for (j = 0, m = edges.length; j < m; j++) {
            e = edges[j];
            u = graph.opposite(v, e);
            cost = getEdgeWeight(e, graph.getEdgeAttributes(e)) + distances[v];
            if (cutoff && cost > cutoff)
              continue;
            if (u in distances && cost < distances[u]) {
              throw Error(
                "graphology-shortest-path/dijkstra: contradictory paths found. Do some of your edges have a negative weight?"
              );
            } else if (!(u in seen) || cost < seen[u]) {
              seen[u] = cost;
              fringe.push([cost, count++, u]);
              if (paths)
                paths[u] = paths[v].concat(u);
            }
          }
        }
        return distances;
      }
      __name(abstractDijkstraMultisource, "abstractDijkstraMultisource");
      function singleSourceDijkstra(graph, source, getEdgeWeight) {
        var paths = {};
        abstractDijkstraMultisource(graph, [source], getEdgeWeight, 0, null, paths);
        return paths;
      }
      __name(singleSourceDijkstra, "singleSourceDijkstra");
      function bidirectionalDijkstra(graph, source, target, getEdgeWeight) {
        return abstractBidirectionalDijkstra(graph, source, target, getEdgeWeight)[1];
      }
      __name(bidirectionalDijkstra, "bidirectionalDijkstra");
      function brandes(graph, source, getEdgeWeight) {
        source = "" + source;
        getEdgeWeight = createEdgeWeightGetter(
          getEdgeWeight || DEFAULT_WEIGHT_ATTRIBUTE
        ).fromMinimalEntry;
        var S = [], P = {}, sigma = {};
        var nodes = graph.nodes(), edges, item, pred, dist, cost, v, w, e, i, l;
        for (i = 0, l = nodes.length; i < l; i++) {
          v = nodes[i];
          P[v] = [];
          sigma[v] = 0;
        }
        var D = {};
        sigma[source] = 1;
        var seen = {};
        seen[source] = 0;
        var count = 0;
        var Q = new Heap(BRANDES_DIJKSTRA_HEAP_COMPARATOR);
        Q.push([0, count++, source, source]);
        while (Q.size) {
          item = Q.pop();
          dist = item[0];
          pred = item[2];
          v = item[3];
          if (v in D)
            continue;
          sigma[v] += sigma[pred];
          S.push(v);
          D[v] = dist;
          edges = graph.outboundEdges(v);
          for (i = 0, l = edges.length; i < l; i++) {
            e = edges[i];
            w = graph.opposite(v, e);
            cost = dist + getEdgeWeight(e, graph.getEdgeAttributes(e));
            if (!(w in D) && (!(w in seen) || cost < seen[w])) {
              seen[w] = cost;
              Q.push([cost, count++, v, w]);
              sigma[w] = 0;
              P[w] = [v];
            } else if (cost === seen[w]) {
              sigma[w] += sigma[v];
              P[w].push(v);
            }
          }
        }
        return [S, P, sigma];
      }
      __name(brandes, "brandes");
      exports.bidirectional = bidirectionalDijkstra;
      exports.singleSource = singleSourceDijkstra;
      exports.brandes = brandes;
    }
  });

  // ../boardzilla-core/node_modules/graphology-shortest-path/index.js
  var require_graphology_shortest_path = __commonJS({
    "../boardzilla-core/node_modules/graphology-shortest-path/index.js"(exports) {
      var unweighted = require_unweighted();
      var utils = require_utils();
      exports.unweighted = unweighted;
      exports.dijkstra = require_dijkstra();
      exports.bidirectional = unweighted.bidirectional;
      exports.singleSource = unweighted.singleSource;
      exports.singleSourceLength = unweighted.singleSourceLength;
      exports.undirectedSingleSourceLength = unweighted.undirectedSingleSourceLength;
      exports.brandes = unweighted.brandes;
      exports.edgePathFromNodePath = utils.edgePathFromNodePath;
    }
  });

  // ../boardzilla-core/node_modules/mnemonist/fixed-deque.js
  var require_fixed_deque = __commonJS({
    "../boardzilla-core/node_modules/mnemonist/fixed-deque.js"(exports, module) {
      var iterables = require_iterables();
      var Iterator = require_iterator();
      function FixedDeque(ArrayClass, capacity) {
        if (arguments.length < 2)
          throw new Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
        if (typeof capacity !== "number" || capacity <= 0)
          throw new Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
        this.ArrayClass = ArrayClass;
        this.capacity = capacity;
        this.items = new ArrayClass(this.capacity);
        this.clear();
      }
      __name(FixedDeque, "FixedDeque");
      FixedDeque.prototype.clear = function() {
        this.start = 0;
        this.size = 0;
      };
      FixedDeque.prototype.push = function(item) {
        if (this.size === this.capacity)
          throw new Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
        var index = (this.start + this.size) % this.capacity;
        this.items[index] = item;
        return ++this.size;
      };
      FixedDeque.prototype.unshift = function(item) {
        if (this.size === this.capacity)
          throw new Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
        var index = this.start - 1;
        if (this.start === 0)
          index = this.capacity - 1;
        this.items[index] = item;
        this.start = index;
        return ++this.size;
      };
      FixedDeque.prototype.pop = function() {
        if (this.size === 0)
          return;
        const index = (this.start + this.size - 1) % this.capacity;
        this.size--;
        return this.items[index];
      };
      FixedDeque.prototype.shift = function() {
        if (this.size === 0)
          return;
        var index = this.start;
        this.size--;
        this.start++;
        if (this.start === this.capacity)
          this.start = 0;
        return this.items[index];
      };
      FixedDeque.prototype.peekFirst = function() {
        if (this.size === 0)
          return;
        return this.items[this.start];
      };
      FixedDeque.prototype.peekLast = function() {
        if (this.size === 0)
          return;
        var index = this.start + this.size - 1;
        if (index > this.capacity)
          index -= this.capacity;
        return this.items[index];
      };
      FixedDeque.prototype.get = function(index) {
        if (this.size === 0)
          return;
        index = this.start + index;
        if (index > this.capacity)
          index -= this.capacity;
        return this.items[index];
      };
      FixedDeque.prototype.forEach = function(callback, scope) {
        scope = arguments.length > 1 ? scope : this;
        var c = this.capacity, l = this.size, i = this.start, j = 0;
        while (j < l) {
          callback.call(scope, this.items[i], j, this);
          i++;
          j++;
          if (i === c)
            i = 0;
        }
      };
      FixedDeque.prototype.toArray = function() {
        var offset = this.start + this.size;
        if (offset < this.capacity)
          return this.items.slice(this.start, offset);
        var array = new this.ArrayClass(this.size), c = this.capacity, l = this.size, i = this.start, j = 0;
        while (j < l) {
          array[j] = this.items[i];
          i++;
          j++;
          if (i === c)
            i = 0;
        }
        return array;
      };
      FixedDeque.prototype.values = function() {
        var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
        return new Iterator(function() {
          if (j >= l)
            return {
              done: true
            };
          var value = items[i];
          i++;
          j++;
          if (i === c)
            i = 0;
          return {
            value,
            done: false
          };
        });
      };
      FixedDeque.prototype.entries = function() {
        var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
        return new Iterator(function() {
          if (j >= l)
            return {
              done: true
            };
          var value = items[i];
          i++;
          if (i === c)
            i = 0;
          return {
            value: [j++, value],
            done: false
          };
        });
      };
      if (typeof Symbol !== "undefined")
        FixedDeque.prototype[Symbol.iterator] = FixedDeque.prototype.values;
      FixedDeque.prototype.inspect = function() {
        var array = this.toArray();
        array.type = this.ArrayClass.name;
        array.capacity = this.capacity;
        Object.defineProperty(array, "constructor", {
          value: FixedDeque,
          enumerable: false
        });
        return array;
      };
      if (typeof Symbol !== "undefined")
        FixedDeque.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedDeque.prototype.inspect;
      FixedDeque.from = function(iterable, ArrayClass, capacity) {
        if (arguments.length < 3) {
          capacity = iterables.guessLength(iterable);
          if (typeof capacity !== "number")
            throw new Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
        }
        var deque = new FixedDeque(ArrayClass, capacity);
        if (iterables.isArrayLike(iterable)) {
          var i, l;
          for (i = 0, l = iterable.length; i < l; i++)
            deque.items[i] = iterable[i];
          deque.size = l;
          return deque;
        }
        iterables.forEach(iterable, function(value) {
          deque.push(value);
        });
        return deque;
      };
      module.exports = FixedDeque;
    }
  });

  // ../boardzilla-core/node_modules/graphology-indices/bfs-queue.js
  var require_bfs_queue = __commonJS({
    "../boardzilla-core/node_modules/graphology-indices/bfs-queue.js"(exports, module) {
      var FixedDeque = require_fixed_deque();
      function BFSQueue(graph) {
        this.graph = graph;
        this.queue = new FixedDeque(Array, graph.order);
        this.seen = /* @__PURE__ */ new Set();
        this.size = 0;
      }
      __name(BFSQueue, "BFSQueue");
      BFSQueue.prototype.hasAlreadySeenEverything = function() {
        return this.seen.size === this.graph.order;
      };
      BFSQueue.prototype.countUnseenNodes = function() {
        return this.graph.order - this.seen.size;
      };
      BFSQueue.prototype.forEachNodeYetUnseen = function(callback) {
        var seen = this.seen;
        var graph = this.graph;
        graph.someNode(function(node, attr) {
          if (seen.size === graph.order)
            return true;
          if (seen.has(node))
            return false;
          var shouldBreak = callback(node, attr);
          if (shouldBreak)
            return true;
          return false;
        });
      };
      BFSQueue.prototype.has = function(node) {
        return this.seen.has(node);
      };
      BFSQueue.prototype.push = function(node) {
        var seenSizeBefore = this.seen.size;
        this.seen.add(node);
        if (seenSizeBefore === this.seen.size)
          return false;
        this.queue.push(node);
        this.size++;
        return true;
      };
      BFSQueue.prototype.pushWith = function(node, item) {
        var seenSizeBefore = this.seen.size;
        this.seen.add(node);
        if (seenSizeBefore === this.seen.size)
          return false;
        this.queue.push(item);
        this.size++;
        return true;
      };
      BFSQueue.prototype.shift = function() {
        var item = this.queue.shift();
        this.size = this.queue.size;
        return item;
      };
      module.exports = BFSQueue;
    }
  });

  // ../boardzilla-core/node_modules/graphology-traversal/utils.js
  var require_utils2 = __commonJS({
    "../boardzilla-core/node_modules/graphology-traversal/utils.js"(exports) {
      function TraversalRecord(node, attr, depth) {
        this.node = node;
        this.attributes = attr;
        this.depth = depth;
      }
      __name(TraversalRecord, "TraversalRecord");
      function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
      }
      __name(capitalize, "capitalize");
      exports.TraversalRecord = TraversalRecord;
      exports.capitalize = capitalize;
    }
  });

  // ../boardzilla-core/node_modules/graphology-traversal/bfs.js
  var require_bfs = __commonJS({
    "../boardzilla-core/node_modules/graphology-traversal/bfs.js"(exports) {
      var isGraph = require_is_graph();
      var BFSQueue = require_bfs_queue();
      var utils = require_utils2();
      var TraversalRecord = utils.TraversalRecord;
      var capitalize = utils.capitalize;
      function abstractBfs(graph, startingNode, callback, options) {
        options = options || {};
        if (!isGraph(graph))
          throw new Error(
            "graphology-traversal/bfs: expecting a graphology instance."
          );
        if (typeof callback !== "function")
          throw new Error(
            "graphology-traversal/bfs: given callback is not a function."
          );
        if (graph.order === 0)
          return;
        var queue = new BFSQueue(graph);
        var forEachNeighbor = graph["forEach" + capitalize(options.mode || "outbound") + "Neighbor"].bind(
          graph
        );
        var forEachNode;
        if (startingNode === null) {
          forEachNode = queue.forEachNodeYetUnseen.bind(queue);
        } else {
          forEachNode = /* @__PURE__ */ __name(function(fn) {
            startingNode = "" + startingNode;
            fn(startingNode, graph.getNodeAttributes(startingNode));
          }, "forEachNode");
        }
        var record, stop;
        function visit(neighbor, attr) {
          queue.pushWith(
            neighbor,
            new TraversalRecord(neighbor, attr, record.depth + 1)
          );
        }
        __name(visit, "visit");
        forEachNode(function(node, attr) {
          queue.pushWith(node, new TraversalRecord(node, attr, 0));
          while (queue.size !== 0) {
            record = queue.shift();
            stop = callback(record.node, record.attributes, record.depth);
            if (stop === true)
              continue;
            forEachNeighbor(record.node, visit);
          }
        });
      }
      __name(abstractBfs, "abstractBfs");
      exports.bfs = function(graph, callback, options) {
        return abstractBfs(graph, null, callback, options);
      };
      exports.bfsFromNode = abstractBfs;
    }
  });

  // ../boardzilla-core/node_modules/graphology-indices/dfs-stack.js
  var require_dfs_stack = __commonJS({
    "../boardzilla-core/node_modules/graphology-indices/dfs-stack.js"(exports, module) {
      function DFSStack(graph) {
        this.graph = graph;
        this.stack = new Array(graph.order);
        this.seen = /* @__PURE__ */ new Set();
        this.size = 0;
      }
      __name(DFSStack, "DFSStack");
      DFSStack.prototype.hasAlreadySeenEverything = function() {
        return this.seen.size === this.graph.order;
      };
      DFSStack.prototype.countUnseenNodes = function() {
        return this.graph.order - this.seen.size;
      };
      DFSStack.prototype.forEachNodeYetUnseen = function(callback) {
        var seen = this.seen;
        var graph = this.graph;
        graph.someNode(function(node, attr) {
          if (seen.size === graph.order)
            return true;
          if (seen.has(node))
            return false;
          var shouldBreak = callback(node, attr);
          if (shouldBreak)
            return true;
          return false;
        });
      };
      DFSStack.prototype.has = function(node) {
        return this.seen.has(node);
      };
      DFSStack.prototype.push = function(node) {
        var seenSizeBefore = this.seen.size;
        this.seen.add(node);
        if (seenSizeBefore === this.seen.size)
          return false;
        this.stack[this.size++] = node;
        return true;
      };
      DFSStack.prototype.pushWith = function(node, item) {
        var seenSizeBefore = this.seen.size;
        this.seen.add(node);
        if (seenSizeBefore === this.seen.size)
          return false;
        this.stack[this.size++] = item;
        return true;
      };
      DFSStack.prototype.pop = function() {
        if (this.size === 0)
          return;
        return this.stack[--this.size];
      };
      module.exports = DFSStack;
    }
  });

  // ../boardzilla-core/node_modules/graphology-traversal/dfs.js
  var require_dfs = __commonJS({
    "../boardzilla-core/node_modules/graphology-traversal/dfs.js"(exports) {
      var isGraph = require_is_graph();
      var DFSStack = require_dfs_stack();
      var utils = require_utils2();
      var TraversalRecord = utils.TraversalRecord;
      var capitalize = utils.capitalize;
      function abstractDfs(graph, startingNode, callback, options) {
        options = options || {};
        if (!isGraph(graph))
          throw new Error(
            "graphology-traversal/dfs: expecting a graphology instance."
          );
        if (typeof callback !== "function")
          throw new Error(
            "graphology-traversal/dfs: given callback is not a function."
          );
        if (graph.order === 0)
          return;
        var stack = new DFSStack(graph);
        var forEachNeighbor = graph["forEach" + capitalize(options.mode || "outbound") + "Neighbor"].bind(
          graph
        );
        var forEachNode;
        if (startingNode === null) {
          forEachNode = stack.forEachNodeYetUnseen.bind(stack);
        } else {
          forEachNode = /* @__PURE__ */ __name(function(fn) {
            startingNode = "" + startingNode;
            fn(startingNode, graph.getNodeAttributes(startingNode));
          }, "forEachNode");
        }
        var record, stop;
        function visit(neighbor, attr) {
          stack.pushWith(
            neighbor,
            new TraversalRecord(neighbor, attr, record.depth + 1)
          );
        }
        __name(visit, "visit");
        forEachNode(function(node, attr) {
          stack.pushWith(node, new TraversalRecord(node, attr, 0));
          while (stack.size !== 0) {
            record = stack.pop();
            stop = callback(record.node, record.attributes, record.depth);
            if (stop === true)
              continue;
            forEachNeighbor(record.node, visit);
          }
        });
      }
      __name(abstractDfs, "abstractDfs");
      exports.dfs = function(graph, callback, options) {
        return abstractDfs(graph, null, callback, options);
      };
      exports.dfsFromNode = abstractDfs;
    }
  });

  // ../boardzilla-core/node_modules/graphology-traversal/index.js
  var require_graphology_traversal = __commonJS({
    "../boardzilla-core/node_modules/graphology-traversal/index.js"(exports) {
      var bfsModule = require_bfs();
      var dfsModule = require_dfs();
      exports.bfs = bfsModule.bfs;
      exports.bfsFromNode = bfsModule.bfsFromNode;
      exports.dfs = dfsModule.dfs;
      exports.dfsFromNode = dfsModule.dfsFromNode;
    }
  });

  // ../boardzilla-core/node_modules/react/cjs/react.development.js
  var require_react_development2 = __commonJS({
    "../boardzilla-core/node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.2.0";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          __name(getIteratorFn, "getIteratorFn");
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          __name(setExtraStackFrame, "setExtraStackFrame");
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          __name(warn, "warn");
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          __name(error, "error");
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          __name(printWarning, "printWarning");
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          __name(warnNoop, "warnNoop");
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          __name(Component, "Component");
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = /* @__PURE__ */ __name(function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            }, "defineDeprecationWarning");
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          __name(ComponentDummy, "ComponentDummy");
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          __name(PureComponent, "PureComponent");
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          __name(createRef, "createRef");
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          __name(isArray, "isArray");
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          __name(typeName, "typeName");
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          __name(willCoercionThrow, "willCoercionThrow");
          function testStringCoercion(value) {
            return "" + value;
          }
          __name(testStringCoercion, "testStringCoercion");
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          __name(checkKeyStringCoercion, "checkKeyStringCoercion");
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          __name(getWrappedName, "getWrappedName");
          function getContextName(type) {
            return type.displayName || "Context";
          }
          __name(getContextName, "getContextName");
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          __name(getComponentNameFromType, "getComponentNameFromType");
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          __name(hasValidRef, "hasValidRef");
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          __name(hasValidKey, "hasValidKey");
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = /* @__PURE__ */ __name(function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            }, "warnAboutAccessingKey");
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = /* @__PURE__ */ __name(function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            }, "warnAboutAccessingRef");
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          __name(defineRefPropWarningGetter, "defineRefPropWarningGetter");
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          __name(warnIfStringRefCannotBeAutoConverted, "warnIfStringRefCannotBeAutoConverted");
          var ReactElement = /* @__PURE__ */ __name(function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          }, "ReactElement");
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          __name(createElement, "createElement");
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          __name(cloneAndReplaceKey, "cloneAndReplaceKey");
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          __name(cloneElement, "cloneElement");
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          __name(isValidElement, "isValidElement");
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          __name(escape, "escape");
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          __name(escapeUserProvidedKey, "escapeUserProvidedKey");
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          __name(getElementKey, "getElementKey");
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          __name(mapIntoArray, "mapIntoArray");
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          __name(mapChildren, "mapChildren");
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          __name(countChildren, "countChildren");
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          __name(forEachChildren, "forEachChildren");
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          __name(toArray, "toArray");
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          __name(onlyChild, "onlyChild");
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          __name(createContext, "createContext");
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          __name(lazyInitializer, "lazyInitializer");
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          __name(lazy, "lazy");
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          __name(forwardRef, "forwardRef");
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          __name(isValidElementType, "isValidElementType");
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          __name(memo, "memo");
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          __name(resolveDispatcher, "resolveDispatcher");
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          __name(useContext, "useContext");
          function useState(initialState2) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState2);
          }
          __name(useState, "useState");
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          __name(useReducer, "useReducer");
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          __name(useRef, "useRef");
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          __name(useEffect, "useEffect");
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          __name(useInsertionEffect, "useInsertionEffect");
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          __name(useLayoutEffect, "useLayoutEffect");
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          __name(useCallback, "useCallback");
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          __name(useMemo, "useMemo");
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          __name(useImperativeHandle, "useImperativeHandle");
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          __name(useDebugValue, "useDebugValue");
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          __name(useTransition, "useTransition");
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          __name(useDeferredValue, "useDeferredValue");
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          __name(useId, "useId");
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          __name(useSyncExternalStore, "useSyncExternalStore");
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          __name(disabledLog, "disabledLog");
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          __name(disableLogs, "disableLogs");
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          __name(reenableLogs, "reenableLogs");
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = /* @__PURE__ */ __name(function() {
                  throw Error();
                }, "Fake");
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          __name(describeNativeComponentFrame, "describeNativeComponentFrame");
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          __name(describeFunctionComponentFrame, "describeFunctionComponentFrame");
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          __name(shouldConstruct, "shouldConstruct");
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          __name(describeUnknownElementTypeFrameInDEV, "describeUnknownElementTypeFrameInDEV");
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          __name(setCurrentlyValidatingElement, "setCurrentlyValidatingElement");
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          __name(checkPropTypes, "checkPropTypes");
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          __name(setCurrentlyValidatingElement$1, "setCurrentlyValidatingElement$1");
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          __name(getDeclarationErrorAddendum, "getDeclarationErrorAddendum");
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          __name(getSourceInfoErrorAddendum, "getSourceInfoErrorAddendum");
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          __name(getSourceInfoErrorAddendumForProps, "getSourceInfoErrorAddendumForProps");
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          __name(getCurrentComponentErrorInfo, "getCurrentComponentErrorInfo");
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          __name(validateExplicitKey, "validateExplicitKey");
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          __name(validateChildKeys, "validateChildKeys");
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          __name(validatePropTypes, "validatePropTypes");
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          __name(validateFragmentProps, "validateFragmentProps");
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          __name(createElementWithValidation, "createElementWithValidation");
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          __name(createFactoryWithValidation, "createFactoryWithValidation");
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          __name(cloneElementWithValidation, "cloneElementWithValidation");
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          __name(startTransition, "startTransition");
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = /* @__PURE__ */ __name(function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                }, "enqueueTaskImpl");
              }
            }
            return enqueueTaskImpl(task);
          }
          __name(enqueueTask, "enqueueTask");
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve2, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve2, reject);
                      } else {
                        resolve2(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve2, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                      } else {
                        resolve2(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve2, reject) {
                      resolve2(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          __name(act, "act");
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          __name(popActScope, "popActScope");
          function recursivelyFlushAsyncActWork(returnValue, resolve2, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve2(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve2(returnValue);
              }
            }
          }
          __name(recursivelyFlushAsyncActWork, "recursivelyFlushAsyncActWork");
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          __name(flushActQueue, "flushActQueue");
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // ../boardzilla-core/node_modules/react/index.js
  var require_react2 = __commonJS({
    "../boardzilla-core/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development2();
      }
    }
  });

  // src/game/game-interface.ts
  var game_interface_exports = {};
  __export(game_interface_exports, {
    getPlayerState: () => getPlayerState,
    initialState: () => initialState,
    processMove: () => processMove
  });

  // src/game/index.tsx
  var import_react8 = __toESM(require_react());

  // ../boardzilla-core/game/player/player.ts
  var Player = class {
    static {
      __name(this, "Player");
    }
    toJSON() {
      let { ...attrs } = this;
      attrs = Object.fromEntries(Object.entries(attrs).filter(
        ([, value]) => typeof value !== "function"
      ));
      return attrs;
    }
  };

  // ../boardzilla-core/game/player/collection.ts
  var PlayerCollection = class extends Array {
    static {
      __name(this, "PlayerCollection");
    }
    addPlayer(attrs) {
      const player = new this.className(attrs);
      Object.assign(player, attrs);
      this.push(player);
    }
    atPosition(position) {
      return this.find((p) => p.position === position);
    }
    setTurnMode(mode = true) {
      this.currentPosition = mode ? this.currentPosition || 1 : void 0;
    }
    current() {
      if (this.currentPosition === void 0)
        throw Error("Calling players.current() when not taking turns");
      return this.atPosition(this.currentPosition);
    }
    notCurrent() {
      return this.filter((p) => p.position !== this.currentPosition);
    }
    inPositionOrder() {
      return this.sort((p1, p2) => p1.position > p2.position ? 1 : -1);
    }
    setCurrent(player) {
      if (typeof player !== "number")
        player = player.position;
      if (!player || player > this.length || player < 1) {
        throw Error(`No such player ${player}`);
      }
      this.currentPosition = player;
      return this.current();
    }
    next() {
      if (this.currentPosition === void 0) {
        this.currentPosition = this[0].position;
      } else {
        this.currentPosition = this.after(this.currentPosition).position;
      }
      return this.current();
    }
    after(player) {
      return this[this.turnOrderOf(player) % this.length];
    }
    // Turn order of player, starting with 1. Note that this is not the same as player position and can change
    turnOrderOf(player) {
      if (typeof player !== "number")
        player = player.position;
      const index = this.findIndex((p) => p.position === player);
      if (index === -1)
        throw Error("No such player");
      return index + 1;
    }
    sortBy(key, direction) {
      const rank = /* @__PURE__ */ __name((p, k) => typeof k === "function" ? k(p) : p[k], "rank");
      const [up, down] = direction === "desc" ? [-1, 1] : [1, -1];
      return this.sort((a, b) => {
        const keys = key instanceof Array ? key : [key];
        for (const k of keys) {
          const r1 = rank(a, k);
          const r2 = rank(b, k);
          if (r1 > r2)
            return up;
          if (r1 < r2)
            return down;
        }
        return 0;
      });
    }
    sortedBy(key, direction = "asc") {
      return this.slice(0, this.length).sortBy(key, direction);
    }
    sum(key) {
      return this.reduce((sum, n) => sum + (typeof key === "function" ? key(n) : n[key]), 0);
    }
    withHighest(...attributes) {
      return this.sortedBy(attributes, "desc")[0];
    }
    withLowest(...attributes) {
      return this.sortedBy(attributes, "asc")[0];
    }
    shuffle() {
      shuffleArray(this, this.game?.random || Math.random);
    }
    max(key) {
      return this.sortedBy(key, "desc")[0][key];
    }
    min(key) {
      return this.sortedBy(key, "asc")[0][key];
    }
    fromJSON(players) {
      this.splice(0, this.length);
      this.currentPosition = void 0;
      for (const p of players) {
        this.addPlayer(p);
      }
    }
  };

  // ../boardzilla-core/game/board/element-collection.ts
  var ElementCollection = class _ElementCollection extends Array {
    static {
      __name(this, "ElementCollection");
    }
    slice(...a) {
      return super.slice(...a);
    }
    all(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, {}, className, ...finders);
      }
      return this._finder(className, {}, ...finders);
    }
    /** @internal */
    _finder(className, options, ...finders) {
      const fns = finders.map((finder) => {
        if (typeof finder === "object") {
          const attrs = finder;
          return (el) => Object.entries(attrs).every(([k1, v1]) => {
            let kvpairs = Object.entries(el);
            if ("mine" in attrs) {
              if (!el._ctx.player)
                throw Error('Using "mine" in a non-player context');
              kvpairs = kvpairs.concat([["mine", el.mine]]);
            }
            if ("empty" in attrs) {
              kvpairs = kvpairs.concat([["empty", el.isEmpty()]]);
            }
            return kvpairs.find(([k2, v2]) => k1 === k2 && v1 === v2);
          });
        }
        if (typeof finder === "string") {
          const name = finder;
          return (el) => el.name === name;
        }
        return finder;
      });
      const coll = new _ElementCollection();
      const finderFn = /* @__PURE__ */ __name((el, order) => {
        if (el instanceof className && fns.every((fn) => fn(el))) {
          if (order === "asc") {
            coll.push(el);
          } else {
            coll.unshift(el);
          }
        }
        if (options.limit !== void 0) {
          coll.push(...el._t.children._finder(className, { limit: options.limit - coll.length, order: options.order }, ...finders));
        } else {
          coll.push(...el._t.children._finder(className, {}, ...finders));
        }
      }, "finderFn");
      if (options.order === "desc") {
        for (let e = this.length - 1; e >= 0; e--) {
          const el = this[e];
          if (options.limit !== void 0 && coll.length >= options.limit)
            break;
          finderFn(el, "desc");
        }
      } else {
        for (const el of this) {
          if (options.limit !== void 0 && coll.length >= options.limit)
            break;
          finderFn(el, "asc");
        }
        ;
      }
      return coll;
    }
    first(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: 1 }, className, ...finders)[0];
      }
      return this._finder(className, { limit: 1 }, ...finders)[0];
    }
    firstN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: n }, className, ...finders);
      }
      return this._finder(className, { limit: n }, ...finders);
    }
    last(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: 1, order: "desc" }, className, ...finders)[0];
      }
      return this._finder(className, { limit: 1, order: "desc" }, ...finders)[0];
    }
    lastN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: n, order: "desc" }, className, ...finders);
      }
      return this._finder(className, { limit: n, order: "desc" }, ...finders);
    }
    top(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: 1 }, className, ...finders)[0];
      }
      return this._finder(className, { limit: 1 }, ...finders)[0];
    }
    topN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: n }, className, ...finders);
      }
      return this._finder(className, { limit: n }, ...finders);
    }
    bottom(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: 1, order: "desc" }, className, ...finders)[0];
      }
      return this._finder(className, { limit: 1, order: "desc" }, ...finders)[0];
    }
    bottomN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._finder(GameElement, { limit: n, order: "desc" }, className, ...finders);
      }
      return this._finder(className, { limit: n, order: "desc" }, ...finders);
    }
    /**
     * Sorts this collection by some {@link Sorter}.
     * @category Structure
     */
    sortBy(key, direction) {
      const rank = /* @__PURE__ */ __name((e, k) => typeof k === "function" ? k(e) : e[k], "rank");
      const [up, down] = direction === "desc" ? [-1, 1] : [1, -1];
      return this.sort((a, b) => {
        const keys = key instanceof Array ? key : [key];
        for (const k of keys) {
          const r1 = rank(a, k);
          const r2 = rank(b, k);
          if (r1 > r2)
            return up;
          if (r1 < r2)
            return down;
        }
        return 0;
      });
    }
    /**
     * Returns a copy of this collection sorted by some {@link Sorter}.
     * @category Structure
     */
    sortedBy(key, direction = "asc") {
      return this.slice(0, this.length).sortBy(key, direction);
    }
    /**
     * Returns the sum of all elements in this collection measured by a provided key
     * @category Queries
     *
     * @example
     * deck.create(Card, '2', { pips: 2 });
     * deck.create(Card, '3', { pips: 3 });
     * deck.all(Card).sum('pips'); // => 5
     */
    sum(key) {
      return this.reduce((sum, n) => sum + (typeof key === "function" ? key(n) : n[key]), 0);
    }
    /**
     * Returns the element in this collection with the highest value of the
     * provided key(s).
     * @category Queries
     *
     * @param attributes - any number of {@link Sorter | Sorter's} used for
     * comparing. If multiple are provided, subsequent ones are used to break ties
     * on earlier ones.
     *
     * @example
     * army.create(Soldier, 'a', { strength: 2, initiative: 3 });
     * army.create(Soldier, 'b', { strength: 3, initiative: 1 });
     * army.create(Soldier, 'c', { strength: 3, initiative: 2 });
     * army.all(Solider).withHighest('strength', 'initiative'); // => Soldier 'c'
     */
    withHighest(...attributes) {
      return this.sortedBy(attributes, "desc")[0];
    }
    /**
     * Returns the element in this collection with the lowest value of the
     * provided key(s).
     * @category Queries
     *
     * @param attributes - any number of {@link Sorter | Sorter's} used for
     * comparing. If multiple are provided, subsequent ones are used to break ties
     * on earlier ones.
     *
     * @example
     * army.create(Soldier, 'a', { strength: 2, initiative: 3 });
     * army.create(Soldier, 'b', { strength: 3, initiative: 1 });
     * army.create(Soldier, 'c', { strength: 2, initiative: 2 });
     * army.all(Solider).withLowest('strength', 'initiative'); // => Soldier 'c'
     */
    withLowest(...attributes) {
      return this.sortedBy(attributes, "asc")[0];
    }
    max(key) {
      const el = this.sortedBy(key, "desc")[0];
      return el && el[key];
    }
    min(key) {
      const el = this.sortedBy(key, "asc")[0];
      return el && el[key];
    }
    areAllEqual(key) {
      if (this.length === 0)
        return true;
      return this.every((el) => el[key] === this[0][key]);
    }
    remove() {
      for (const el of this) {
        if (!(el instanceof Piece))
          throw Error("cannot move Space");
        el.remove();
      }
    }
    putInto(to, options) {
      for (const el of this) {
        if (!(el instanceof Piece))
          throw Error("cannot move Space");
        el.putInto(to, options);
      }
    }
    // UI
    layout(applyTo, attributes) {
      for (const el of this)
        el.layout(applyTo, attributes);
    }
    appearance(appearance) {
      for (const el of this)
        el.appearance(appearance);
    }
  };

  // ../boardzilla-core/game/board/utils.ts
  function translate(original, transform) {
    return shift(
      scale(original, { x: transform.width / 100, y: transform.height / 100 }),
      { x: transform.left, y: transform.top }
    );
  }
  __name(translate, "translate");
  function scale(a, v) {
    return {
      left: a.left * v.x,
      top: a.top * v.y,
      width: a.width * v.x,
      height: a.height * v.y
    };
  }
  __name(scale, "scale");
  function shift(a, v) {
    return {
      left: a.left + v.x,
      top: a.top + v.y,
      width: a.width,
      height: a.height
    };
  }
  __name(shift, "shift");
  function cellSizeForArea(rows, columns, area, gap, offsetColumn, offsetRow) {
    let width;
    let height;
    if (offsetColumn === void 0) {
      width = (area.width - (gap.x || 0) * (columns - 1)) / columns;
      height = (area.height - (gap.y || 0) * (rows - 1)) / rows;
    } else {
      width = area.width / ((rows - 1) * Math.abs(offsetColumn.x / 100) + 1 + (columns - 1) * Math.abs(offsetRow.x / 100));
      height = area.height / ((columns - 1) * Math.abs(offsetRow.y / 100) + 1 + (rows - 1) * Math.abs(offsetColumn.y / 100));
    }
    return { width, height };
  }
  __name(cellSizeForArea, "cellSizeForArea");

  // ../boardzilla-core/game/board/element.ts
  var import_random_seed = __toESM(require_random_seed());
  var GameElement = class _GameElement {
    /**
     * Do not use the constructor directly. Instead Call {@link
     * GameElement#create} or {@link GameElement#createMany} on the element in
     * which you want to create a new element.
     * @category Structure
     */
    constructor(ctx) {
      /**
       * UI
       */
      /** @internal */
      this._ui = {
        layouts: [],
        appearance: {}
      };
      this._ctx = ctx;
      if (!ctx.top) {
        this._ctx.top = this;
        this._ctx.sequence = 0;
      }
      this._t = {
        children: new ElementCollection(),
        id: this._ctx.sequence++,
        setId: (id) => {
          if (id !== void 0) {
            this._t.id = id;
            if (this._ctx.sequence < id)
              this._ctx.sequence = id;
          }
        }
      };
      Object.getPrototypeOf(this).top = this.first;
      Object.getPrototypeOf(this).topN = this.firstN;
      Object.getPrototypeOf(this).bottom = this.last;
      Object.getPrototypeOf(this).bottomN = this.lastN;
    }
    static {
      __name(this, "GameElement");
    }
    static {
      /** @internal */
      this.isGameElement = true;
    }
    static {
      /** @internal */
      this.hiddenAttributes = ["name"];
    }
    all(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children.all(_GameElement, className, ...finders);
      }
      return this._t.children.all(className, ...finders);
    }
    first(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: 1 }, className, ...finders)[0];
      }
      return this._t.children.all(className, ...finders)[0];
    }
    firstN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: n }, className, ...finders);
      }
      return this._t.children._finder(className, { limit: n }, ...finders);
    }
    last(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: 1, order: "desc" }, className, ...finders)[0];
      }
      return this._t.children._finder(className, { limit: 1, order: "desc" }, ...finders)[0];
    }
    lastN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: n, order: "desc" }, className, ...finders);
      }
      return this._t.children._finder(className, { limit: n, order: "desc" }, ...finders);
    }
    top(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: 1 }, className, ...finders)[0];
      }
      return this._t.children.all(className, ...finders)[0];
    }
    topN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: n }, className, ...finders);
      }
      return this._t.children._finder(className, { limit: n }, ...finders);
    }
    bottom(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: 1, order: "desc" }, className, ...finders)[0];
      }
      return this._t.children._finder(className, { limit: 1, order: "desc" }, ...finders)[0];
    }
    bottomN(n, className, ...finders) {
      if (typeof n !== "number")
        throw Error("first argument must be number of matches");
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return this._t.children._finder(_GameElement, { limit: n, order: "desc" }, className, ...finders);
      }
      return this._t.children._finder(className, { limit: n, order: "desc" }, ...finders);
    }
    others(className, ...finders) {
      if (!this._t.parent)
        new ElementCollection();
      if (typeof className !== "function" || !("isGameElement" in className)) {
        const otherFinder2 = this._otherFinder([className, ...finders]);
        return this._t.parent._t.children._finder(_GameElement, {}, otherFinder2, className, ...finders);
      }
      const otherFinder = this._otherFinder(finders);
      return this._t.parent._t.children._finder(className, {}, otherFinder, ...finders);
    }
    has(className, ...finders) {
      if (typeof className !== "function" || !("isGameElement" in className)) {
        return !!this.first(className, ...finders);
      } else {
        return !!this.first(className, ...finders);
      }
    }
    /** @internal */
    _otherFinder(finders) {
      return (el) => el !== this;
    }
    /**
     * Set this class to use a different ordering style.
     * @category Structure
     * @param order - ordering style
     * - "normal": Elements placed into this element are put at the end of the list (default)
     * - "stacking": Elements placed into this element are put at the beginning of the list. This is prefered for elements that stack. E.g. when placing a card into a stack of cards, if `order` is set to `stacking` the {@link first} method will return the card just placed, i.e. it will be considered to be on the top of the stack
     */
    setOrder(order) {
      this._t.order = order;
    }
    /**
     * Returns this elements parent.
     * @category Queries
     * @param className - If provided, searches up the parent tree to find the first
     * matching element. E.g. if a Token is placed on a Card in a players
     * Tableau. calling `token.container(Tableau)` can be used to find the
     * grandparent.
     */
    container(className) {
      if (!className)
        return this._t.parent;
      if (this._t.parent)
        return isA(this._t.parent, className) ? this._t.parent : this._t.parent.container(className);
    }
    /**
     * Returns whether this element has any elements placed within it.
     * @category Structure
     */
    isEmpty() {
      return !this._t.children.length;
    }
    /**
     * Sorts the elements directly contained within this element by some {@link Sorter}.
     * @category Structure
     */
    sortBy(key, direction) {
      return this._t.children.sortBy(key, direction);
    }
    /**
     * Re-orders the elements directly contained within this element randomly.
     * @category Structure
     */
    shuffle() {
      shuffleArray(this._t.children, this._ctx.game?.random || Math.random);
    }
    /**
     * Returns the player that owns this element, or the first element that
     * contains this element searching up through the parent hierarchy. This is
     * related to, but different than {@link player}. E.g. if a common card is in
     * a player's hand, typically the `hand.player` will be assigned to that
     * player but the card does not have a `player`. The card.owner() will return
     * the player in whose hand the card is placed. Similarly, if an army is in
     * another player's country, the `army.owner()` will be the player controlling
     * that army (i.e. same as `army.player`) rather than the player who owns the
     * country in which it's placed.
     * @category Structure
     */
    owner() {
      return this.player !== void 0 ? this.player : this._t.parent?.player;
    }
    /**
     * Returns whether this element belongs to the "current" player. A player is
     * considered the current player if this is called in the context of an action
     * taken by a given player, or if this is called from a given player's view of
     * the board. It is an error to call this method when not in a player
     * context. When querying for elements using {@link ElementFinder} such as
     * {@link all} and {@link first}, {@link mine} is available as a search key
     * that accepts a value of true/false
     * @category Queries
     */
    get mine() {
      if (!this._ctx.player)
        return false;
      return this.owner() === this._ctx.player;
    }
    /**
     * Show this element to all players
     * @category Visibility
     */
    showToAll() {
      delete this._visible;
    }
    /**
     * Show this element only to the given player
     * @category Visibility
     */
    showOnlyTo(player) {
      if (typeof player !== "number")
        player = player.position;
      this._visible = {
        default: false,
        except: [player]
      };
    }
    /**
     * Show this element to the given players without changing it's visibility to
     * any other players.
     * @category Visibility
     */
    showTo(...player) {
      if (typeof player[0] !== "number")
        player = player.map((p) => p.position);
      if (this._visible === void 0)
        return;
      if (this._visible.default) {
        if (!this._visible.except)
          return;
        this._visible.except = this._visible.except.filter((i) => !player.includes(i));
      } else {
        this._visible.except = Array.from(/* @__PURE__ */ new Set([...this._visible.except instanceof Array ? this._visible.except : [], ...player]));
      }
    }
    /**
     * Hide this element only to the given player
     * @category Visibility
     */
    hideFromAll() {
      this._visible = { default: false };
    }
    /**
     * Hide this element from the given players without changing it's visibility to
     * any other players.
     * @category Visibility
     */
    hideFrom(...player) {
      if (typeof player[0] !== "number")
        player = player.map((p) => p.position);
      if (this._visible?.default === false && !this._visible.except)
        return;
      if (this._visible === void 0 || this._visible.default === true) {
        this._visible = {
          default: true,
          except: Array.from(/* @__PURE__ */ new Set([...this._visible?.except instanceof Array ? this._visible.except : [], ...player]))
        };
      } else {
        if (!this._visible.except)
          return;
        this._visible.except = this._visible.except.filter((i) => !player.includes(i));
      }
    }
    /**
     * Returns whether this element is visible to the given player
     * @category Visibility
     */
    isVisibleTo(player) {
      if (typeof player !== "number")
        player = player.position;
      if (this._visible === void 0)
        return true;
      if (this._visible.default) {
        return !this._visible.except || !this._visible.except.includes(player);
      } else {
        return this._visible.except?.includes(player) || false;
      }
    }
    /**
     * Returns whether this element is visible to the current player. Can only be
     * called when in a player context, during an action taken by a player or
     * while the board is viewed by a given player.
     * @category Visibility
     */
    isVisible() {
      if (!this._ctx.player)
        throw Error("Cannot use isVisible outside of a player context");
      return this.isVisibleTo(this._ctx.player.position);
    }
    /**
     * Provide list of attributes that are obscured when instances of this element
     * class are hidden. E.g. In a game with multiple card decks with different
     * backs, the identity of the card is hiddem, but the deck it belongs to is
     * not. In this case, Card may have attributes: suit; pip; deck and calling:
     * `Card.hide('suit', 'pip')` will cause suit and pip to be invisible when the
     * card is flipped, while still revealing which deck it is.
     * @category Visibility
     */
    static hide(...attrs) {
      this.hiddenAttributes = attrs;
    }
    // unused?
    /** @internal */
    hidden() {
      return Object.create(
        Object.getPrototypeOf(this),
        Object.fromEntries(
          Object.entries(
            Object.getOwnPropertyDescriptors(this)
          ).filter(
            ([attr]) => !this.constructor.hiddenAttributes.includes(attr)
          )
        )
      );
    }
    /**
     * Create an element inside this element. This can only be called during the
     * game setup (see {@link createGame}. Any game elements that are required
     * must be created before the game starts. Elements that only appear later in
     * the game can be created inside the {@link Board#pile} or made invisible.
     * @category Structure
     *
     * @param className - Class to create. This class must be included in the `elementClasses` in {@link createGame}.
     * @param name - Sets {@link GameElement#name | name}
     * @param attributes - Sets any attributes of the class that are defined in
     * your own class that extend {@link Space}, {@link Piece}, or {@link
     * Board}. Can also include {@link player}.
     *
     * @example
     * deck.create(Card, 'ace-of-hearts', { suit: 'H', value: '1' });
     */
    create(className, name, attributes) {
      if (this._ctx.game?.phase === "started")
        throw Error("Board elements cannot be created once game has started.");
      const el = this.createElement(className, name, attributes);
      el._t.parent = this;
      if (this._t.order === "stacking") {
        this._t.children.unshift(el);
      } else {
        this._t.children.push(el);
      }
      return el;
    }
    /**
     * Create n identical elements inside this element. This can only be called
     * during the game setup (see {@link createGame}. Any game elements that are
     * required must be created before the game starts. Elements that only appear
     * later in the game can be created inside the {@link Board#pile} or made
     * invisible.
     * @category Structure
     *
     * @param n - Number to create
     * @param className - Class to create. This class must be included in the `elementClasses` in {@link createGame}.
     * @param name - Sets {@link GameElement#name | name}
     * @param attributes - Sets any attributes of the class that are defined in
     * your own class that extend {@link Space}, {@link Piece}, or {@link
     * Board}. Can also include {@link player}.
     */
    createMany(n, className, name, attributes) {
      return new ElementCollection(...times(n, () => this.create(className, name, attributes)));
    }
    /**
     * Base element creation method
     * @internal
     */
    createElement(className, name, attrs) {
      if (!this._ctx.classRegistry.includes(className)) {
        const classNameBasedOnName = this._ctx.classRegistry.find((c) => c.name === className.name);
        if (!classNameBasedOnName)
          throw Error(`No class found ${className.name}. Declare any classes in \`game.defineBoard\``);
        className = classNameBasedOnName;
      }
      const el = new className(this._ctx);
      el.board = this.board;
      el.name = name;
      Object.assign(el, attrs);
      return el;
    }
    /**
     * Returns a string identifying the tree position of the element suitable for
     * anonymous reference
     * @internal
     */
    branch() {
      const branches = [];
      let node = this;
      while (node._t.parent) {
        branches.unshift(node._t.parent._t.children.indexOf(node));
        node = node._t.parent;
      }
      branches.unshift(this._ctx.removed._t.children.indexOf(node) >= 0 ? 1 : 0);
      return branches.join("/");
    }
    /**
     * Returns the element at the given position returned by {@link branch}
     * @internal
     */
    atBranch(b) {
      let branch = b.split("/");
      let index = parseInt(branch[0]);
      let node = index === 0 ? this._ctx.top : this._ctx.removed._t.children[index - 1];
      branch.shift();
      while (branch[0] !== void 0) {
        node = node._t.children[parseInt(branch[0])];
        branch.shift();
      }
      return node;
    }
    /**
     * Returns the element for the given id
     * @internal
     */
    atID(id) {
      return this._t.children.find((c) => c._t.id === id) || this._t.children.find((c) => c.atID(id))?.atID(id);
    }
    /**
     * Whether this element has the given element in its parent hierarchy
     * @category Structure
     */
    isDescendantOf(el) {
      return this._t.parent === el || !!this._t.parent?.isDescendantOf(el);
    }
    /**
     * JSON representation
     * @param seenBy - optional player position viewing the board
     * @internal
     */
    toJSON(seenBy) {
      let attrs;
      ({ ...attrs } = this);
      for (const attr of ["_t", "_ctx", "_ui", "board", "pile", "_eventHandlers", "players", "finish", "message"])
        delete attrs[attr];
      attrs = Object.fromEntries(Object.entries(attrs).filter(
        ([, value]) => typeof value !== "function"
      ));
      if (seenBy !== void 0 && !this.isVisibleTo(seenBy)) {
        attrs = Object.fromEntries(Object.entries(attrs).filter(
          ([attr]) => !this.constructor.hiddenAttributes.includes(attr)
        ));
      }
      const json = Object.assign(serializeObject(attrs, seenBy !== void 0), { className: this.constructor.name });
      if (seenBy === void 0 || "isSpace" in this)
        json._id = this._t.id;
      if (this._t.children.length)
        json.children = Array.from(this._t.children.map((c) => c.toJSON(seenBy)));
      if (this._t.order)
        json.order = this._t.order;
      if (this._t.was)
        json.was = this._t.was;
      return json;
    }
    /** @internal */
    createChildrenFromJSON(childrenJSON, branch) {
      const spaces = this._t.children.filter((c) => "isSpace" in c);
      this._t.children = new ElementCollection();
      for (let i = 0; i !== childrenJSON.length; i++) {
        const json = childrenJSON[i];
        let { className, children, was, _id, name, order, ...rest } = json;
        if (this._ctx.game)
          rest = deserializeObject({ ...rest }, this._ctx.game);
        let child = void 0;
        if (_id !== void 0) {
          child = spaces.find((c) => c._t.id === _id);
          if (child) {
            for (const key of Object.keys(child)) {
              if (!["_ctx", "_t", "_ui", "_eventHandlers", "board", "name"].includes(key) && !(key in rest))
                rest[key] = void 0;
            }
            Object.assign(child, rest);
          }
        }
        if (!child) {
          const elementClass = this._ctx.classRegistry.find((c) => c.name === className);
          if (!elementClass)
            throw Error(`No class found ${className}. Declare any classes in \`game.defineBoard\``);
          child = this.createElement(elementClass, name, rest);
          child._t.setId(_id);
          child._t.parent = this;
          child._t.order = order;
          child._t.was = was;
          if (this._ctx.trackMovement)
            child._t.was = branch + "/" + i;
        }
        this._t.children.push(child);
        child.createChildrenFromJSON(children || [], branch + "/" + i);
      }
      ;
    }
    /** @internal */
    resetUI() {
      this._ui.layouts = [{
        applyTo: _GameElement,
        attributes: {
          margin: 0,
          scaling: "none",
          alignment: "center",
          gap: 0,
          direction: "square"
        }
      }];
      this._ui.appearance = {};
      this._ui.computedStyle = void 0;
      for (const child of this._t.children)
        child.resetUI();
    }
    /**
     * Viewport relative to a square perfectly containing the board. The `left`
     * and `top` values are from 0-100. The x and y values in this method are on
     * the same scale, unlike {@link relativeTransformToBoard}.
     * @category UI
     */
    absoluteTransform() {
      return this.board._ui.frame ? translate(this.relativeTransformToBoard(), this.board._ui.frame) : this.relativeTransformToBoard();
    }
    /**
     * Viewport relative to the board. The `left` and `top` values are percentages
     * from 0-100, where `left: 100` is the right edge of the board and `top: 100`
     * the bottom. The x and y values in this method are therefore not necessarily
     * on the same scale, unlike {@link absoluteTransform}.
     * @category UI
     */
    relativeTransformToBoard() {
      let transform = this._ui.computedStyle || { left: 0, top: 0, width: 100, height: 100 };
      let parent = this._t.parent;
      while (parent?._ui.computedStyle) {
        transform = translate(transform, parent._ui.computedStyle);
        parent = parent._t.parent;
      }
      return transform;
    }
    /**
     * Apply a layout to some of the elements directly contained within this element
     * @category UI
     *
     * @param applyTo - Which elements this layout applies to. Provided value can be:
     * - A specific {@link GameElement}
     * - The name of an element
     * - A specific set of elements ({@link ElementCollection})
     * - A class of elements
     *
     * If multiple layout declarations would apply to the same element, only one
     * will be used. The order of specificity is as above. If a class is used and
     * mutiple apply, the more specific class will be used.
     *
     * @param {Object} attributes - A list of attributes describing the
     * layout. All units of measurement are percentages of this elements width and
     * height from 0-100, unless otherwise noted (`margin` and `gap`)
     *
     * @param {Box} attributes.area - A box defining the layout's bounds within
     * this element. If unspecified, the entire area is used, i.e. `{ left: 0,
     * top: 0, width: 100, height: 100 }`
     *
     * @param attributes.margin - Instead of providing `area`, providing a
     * `margin` defines the bounding box in terms of a margin around the edges of
     * this element. This value is an absolute percentage of the board's size so
     * that margins specified on different layouts with the same value will exactly match
     *
     * @param attributes.rows - The number of rows to allot for placing elements
     * in this layout. If a number is provided, this is fixed. If min/max values
     * are provided, the layout will allot at least `min` and up to `max` as
     * needed. If `min` is omitted, a minimum of 1 is implied. If `max` is
     * omitted, as many are used as needed. Default is `{min: 1, max: Infinity}`.
     *
     * @param attributes.columns - Columns, as per `rows`
     *
     * @param attributes.slots - If supplied, this overrides all other attributes
     * to define a set of strictly defined boxes for placing each element. Any
     * elements that exceed the number of slots provided are not displayed.
     *
     * @param attributes.size - Size alloted for each element placed in this
     * layout. Unless `scaling` is `"none"`, a `size` provided here will be used
     * only to define an aspect ratio but may scale up or down to fit as
     * needed. As such, when using any `scaling` other than `"none"`, providing an
     * `aspectRatio` instead is sufficient.
     *
     * @param attributes.aspectRatio - Aspect ratio for each element placed in
     * this layout. This value is a ratio of width over height. Elements will
     * adhere to this ratio unless they have their own specified `aspectRatio` in
     * their {@link appearance}. This value is ignored is `size` is provided.
     *
     * @param attributes.scaling - Scaling strategy for the elements placed in this layout.
     * - *none*: Elements use the `size` value and do not scale. If no `size` is provided, this behaves like `fit` (default)
     * - *fit*: elements scale up or down to fit within the area alloted without squshing
     * - *fill*: elements scale up or down to completely fill the area, squishing themselves together as needed along one dimension.
     *
     * @param attributes.gap - If provided, this places a gap between elements. If
     * scaling is 'fill', this is considered a maximum but may shrink or even
     * become negative in order to fill the area. This value is an absolute
     * percentage of the board's size so that gaps specified on different layouts
     * with the same value will exactly match
     *
     * @param attributes.alignment - If more room is provided than needed, this
     * determines how the elements will align themselves within.
     *
     * @param attributes.offsetColumn - Instead of `gap`, providing an
     * `offsetColumn`/`offsetRow` specifies that the contained elements must
     * offset one another by a specified amount as a percentage of the elements
     * size, i.e. `offsetColumn=100` is equivalent to a `gap` of 0. This allows
     * non-orthogonal grids like hex or diamond. If one of
     * `offsetColumn`/`offsetRow` is provided but not the other, the unspecified
     * one will be 90° to the one specified. Like `gap`, if `scaling` is set to
     * `fill`, these offsets may squish to fill space.
     *
     * @param attributes.offsetRow - As above
     *
     * @param attributes.direction - Specifies the direction in which elements
     * placed here should fill up the rows and columns of the layout. Rows or
     * columns will increase to their specified maximum as needed. Therefore if,
     * for example, `direction` is `"ltr"` and `columns` has no maximum, there will
     * never be a second row added. Values are:
     * - *square*: fill rows and columns equally to maintain as square a grid as possible (default)
     * - *ltr*: fill columns left to right, then rows top to bottom once maximum columns reached
     * - *rtl*: fill columns right to left, then rows top to bottom once maximum columns reached
     * - *ltr-btt*: fill columns left to right, then rows bottom to top once maximum columns reached
     * - *rtl-btt*: fill columns right to left, then rows bottom to top once maximum columns reached
     * - *ttb*: fill rows top to bottom, then columns left to right once maximum rows reached
     * - *btt*: fill rows bottom to top, then columns left to right once maximum rows reached
     * - *ttb-rtl*: fill rows top to bottom, then columns right to left once maximum rows reached
     * - *btt-rtl*: fill rows bottom to top, then columns right to left once maximum rows reached
     *
     * @param attributes.limit - If specified, no more than `limit` items will be
     * visible. This is useful for displaying e.g. decks of cards where showing
     * only 2 or 3 cards provides a deck-like appearance without needed to render
     * more cards underneath that aren't visible.
     *
     * @param attributes.haphazardly - A number specifying an amount of randomness
     * added to the layout to provide a more natural looking placement
     */
    layout(applyTo, attributes) {
      const { area, margin, size, aspectRatio, scaling, gap, offsetColumn, offsetRow } = attributes;
      if (this._ui.layouts.length === 0)
        this.resetUI();
      if (area && margin)
        console.warn("Both `area` and `margin` supplied in layout. `margin` is ignored");
      if (size && aspectRatio)
        console.warn("Both `size` and `aspectRatio` supplied in layout. `aspectRatio` is ignored");
      if (gap && (offsetColumn || offsetRow))
        console.warn("Both `gap` and `offset` supplied in layout. `gap` is ignored");
      if (!size) {
        if (scaling === "none" && aspectRatio)
          throw Error("Layout `scaling` must be 'fit' or 'fill' for `aspectRatio` and no `size`");
        if (!scaling)
          attributes.scaling = "fit";
      }
      if (!margin && !area)
        attributes.margin = 0;
      this._ui.layouts.push({ applyTo, attributes: Object.assign({ scaling: "none", alignment: "center", direction: "square" }, attributes) });
      this._ui.layouts.sort((a, b) => {
        let aVal = 0, bVal = 0;
        if (a.applyTo instanceof _GameElement)
          aVal = 3;
        if (b.applyTo instanceof _GameElement)
          bVal = 3;
        if (typeof a.applyTo === "string")
          aVal = 2;
        if (typeof b.applyTo === "string")
          bVal = 2;
        if (a.applyTo instanceof Array)
          aVal = 1;
        if (b.applyTo instanceof Array)
          bVal = 1;
        if (aVal !== 0 || bVal !== 0)
          return aVal - bVal;
        const ac = a.applyTo;
        const bc = b.applyTo;
        return ac.prototype instanceof bc ? 1 : bc.prototype instanceof ac ? -1 : 0;
      });
      for (const child of this._t.children)
        child._ui.computedStyle = void 0;
    }
    /**
     * recalc all elements computedStyle
     * @category UI
     * @internal
     */
    applyLayouts(force = false) {
      if (this._ui.appearance.render === false)
        return;
      if (!this._ui.computedStyle) {
        force = true;
        this._ui.computedStyle = { left: 0, top: 0, width: 100, height: 100 };
      }
      const layoutItems = this.getLayoutItems();
      const absoluteTransform = this.absoluteTransform();
      for (let l = this._ui.layouts.length - 1; l >= 0; l--) {
        const { attributes } = this._ui.layouts[l];
        let children = layoutItems[l];
        if (!children)
          continue;
        let cellBox;
        let cell;
        const { slots, direction, gap, scaling, alignment, limit } = attributes;
        let { size, aspectRatio, offsetColumn, offsetRow, haphazardly } = attributes;
        const area = this.getArea(attributes);
        if (limit)
          children = children.slice(0, limit);
        if (slots) {
          cellBox = /* @__PURE__ */ __name((n) => n < slots.length ? slots[n] : void 0, "cellBox");
        } else {
          const minRows = typeof attributes.rows === "number" ? attributes.rows : attributes.rows?.min || 1;
          const minColumns = typeof attributes.columns === "number" ? attributes.columns : attributes.columns?.min || 1;
          const maxRows = typeof attributes.rows === "number" ? attributes.rows : attributes.rows?.max || Infinity;
          const maxColumns = typeof attributes.columns === "number" ? attributes.columns : attributes.columns?.max || Infinity;
          let rows = minRows;
          let columns = minColumns;
          const alignOffset = {
            left: alignment.includes("left") ? 0 : alignment.includes("right") ? 1 : 0.5,
            top: alignment.includes("top") ? 0 : alignment.includes("bottom") ? 1 : 0.5
          };
          if (rows * columns < children.length) {
            if (["ltr", "ltr-btt", "rtl", "rtl-btt"].includes(direction)) {
              columns = Math.max(columns, Math.min(maxColumns, Math.ceil(children.length / rows)));
              rows = Math.max(rows, Math.min(maxRows, Math.ceil(children.length / columns)));
            }
            if (["ttb", "btt", "ttb-rtl", "btt-rtl"].includes(direction)) {
              rows = Math.max(rows, Math.min(maxRows, Math.ceil(children.length / columns)));
              columns = Math.max(columns, Math.min(maxColumns, Math.ceil(children.length / rows)));
            }
          }
          if (direction === "ltr")
            cell = /* @__PURE__ */ __name((n) => ({ column: n % columns, row: Math.floor(n / columns) }), "cell");
          else if (direction === "ltr-btt")
            cell = /* @__PURE__ */ __name((n) => ({ column: n % columns, row: rows - 1 - Math.floor(n / columns) }), "cell");
          else if (direction === "rtl")
            cell = /* @__PURE__ */ __name((n) => ({ column: columns - 1 - n % columns, row: Math.floor(n / columns) }), "cell");
          else if (direction === "rtl-btt")
            cell = /* @__PURE__ */ __name((n) => ({ column: columns - 1 - n % columns, row: rows - 1 - Math.floor(n / columns) }), "cell");
          else if (direction === "ttb")
            cell = /* @__PURE__ */ __name((n) => ({ column: Math.floor(n / rows), row: n % rows }), "cell");
          else if (direction === "btt")
            cell = /* @__PURE__ */ __name((n) => ({ column: Math.floor(n / rows), row: rows - 1 - n % rows }), "cell");
          else if (direction === "ttb-rtl")
            cell = /* @__PURE__ */ __name((n) => ({ column: columns - 1 - Math.floor(n / rows), row: n % rows }), "cell");
          else if (direction === "btt-rtl")
            cell = /* @__PURE__ */ __name((n) => ({ column: columns - 1 - Math.floor(n / rows), row: rows - 1 - n % rows }), "cell");
          else {
            let vColumns = Math.ceil(Math.sqrt(children.length));
            let vRows = Math.ceil(children.length / vColumns);
            if (vColumns > maxColumns) {
              vColumns = maxColumns;
              vRows = Math.ceil(children.length / vColumns);
            }
            if (vRows > maxRows) {
              vRows = maxRows;
              vColumns = Math.min(maxColumns, Math.ceil(children.length / vRows));
            }
            if (vRows > rows)
              rows = vRows;
            if (vColumns > columns)
              columns = vColumns;
            cell = /* @__PURE__ */ __name((n) => ({
              column: (alignOffset.left === 1 ? vColumns - 1 - n % vColumns : n % vColumns) + alignOffset.left * (columns - vColumns),
              row: (alignOffset.top === 1 ? vRows - 1 - Math.floor(n / vColumns) : Math.floor(n / vColumns)) + alignOffset.top * (rows - vRows)
            }), "cell");
          }
          let cellGap = void 0;
          if (offsetColumn || offsetRow) {
            if (!offsetRow)
              offsetRow = { x: -offsetColumn.y, y: offsetColumn.x };
            if (!offsetColumn)
              offsetColumn = { x: offsetRow.y, y: -offsetRow.x };
          } else {
            cellGap = {
              x: (gap && (typeof gap === "number" ? gap : gap.x) || 0) / absoluteTransform.width * 100,
              y: (gap && (typeof gap === "number" ? gap : gap.y) || 0) / absoluteTransform.height * 100
            };
          }
          if (!size) {
            size = cellSizeForArea(rows, columns, area, cellGap, offsetColumn, offsetRow);
            if (!aspectRatio) {
              let minRatio = Infinity;
              let maxRatio = 0;
              for (const c of children) {
                const r = c._ui.appearance.aspectRatio;
                if (r !== void 0) {
                  if (r < minRatio)
                    minRatio = r;
                  if (r > maxRatio)
                    maxRatio = r;
                }
              }
              if (minRatio < Infinity || maxRatio > 0) {
                if (maxRatio > 1 && minRatio < 1)
                  aspectRatio = 1;
                else if (minRatio > 1)
                  aspectRatio = minRatio;
                else
                  aspectRatio = maxRatio;
              }
            }
            if (aspectRatio) {
              aspectRatio *= absoluteTransform.height / absoluteTransform.width;
              if (aspectRatio > 1) {
                size.height = size.width / aspectRatio;
              } else {
                size.width = aspectRatio * size.height;
              }
            }
          }
          if (haphazardly) {
            haphazardly *= 0.2 + Math.max(0, cellGap ? cellGap.x / size.width + cellGap.y / size.height : (Math.abs(offsetColumn.x) + Math.abs(offsetColumn.y) + Math.abs(offsetRow.y) + Math.abs(offsetColumn.y) - 200) / 100);
          } else {
            haphazardly = 0;
          }
          const startingOffset = { x: 0, y: 0 };
          const cellBoxRC = /* @__PURE__ */ __name(({ row, column }) => {
            if (column > maxColumns || row > maxRows)
              return;
            return {
              left: area.left + startingOffset.x + (cellGap ? column * (size.width + cellGap.x) : size.width * (column * offsetColumn.x + row * offsetRow.x) / 100),
              top: area.top + startingOffset.y + (cellGap ? row * (size.height + cellGap.y) : size.height * (row * offsetRow.y + column * offsetColumn.y) / 100),
              width: size.width,
              height: size.height
            };
          }, "cellBoxRC");
          const getTotalArea = /* @__PURE__ */ __name(() => {
            const boxes = [
              cellBoxRC({ row: 0, column: 0 }),
              cellBoxRC({ row: rows - 1, column: 0 }),
              cellBoxRC({ row: rows - 1, column: columns - 1 }),
              cellBoxRC({ row: 0, column: columns - 1 })
            ];
            const cellArea = {
              top: Math.min(...boxes.map((b) => b.top)),
              bottom: Math.max(...boxes.map((b) => b.top + b.height)),
              left: Math.min(...boxes.map((b) => b.left)),
              right: Math.max(...boxes.map((b) => b.left + b.width))
            };
            return {
              width: cellArea.right - cellArea.left,
              height: cellArea.bottom - cellArea.top,
              left: cellArea.left,
              top: cellArea.top
            };
          }, "getTotalArea");
          let totalAreaNeeded = getTotalArea();
          let scale2 = { x: 1, y: 1 };
          if (scaling === "fill") {
            const s = Math.max(area.width / totalAreaNeeded.width, area.height / totalAreaNeeded.height);
            scale2 = { x: s, y: s };
          } else if (scaling === "fit") {
            const s = Math.min(area.width / totalAreaNeeded.width, area.height / totalAreaNeeded.height);
            scale2 = { x: s, y: s };
          }
          const largestCellSize = cellSizeForArea(minRows, minColumns, area, cellGap, offsetColumn, offsetRow);
          if (size.width * scale2.x > largestCellSize.width) {
            const reduction = largestCellSize.width / size.width / scale2.x;
            scale2.x *= reduction;
            scale2.y *= reduction;
          }
          if (size.height * scale2.y > largestCellSize.height) {
            const reduction = largestCellSize.height / size.height / scale2.y;
            scale2.x *= reduction;
            scale2.y *= reduction;
          }
          size.width *= scale2.x;
          size.height *= scale2.y;
          if (!cellGap) {
            if (scaling === "fill") {
              if (area.width * scale2.x / totalAreaNeeded.width > area.height * scale2.y / totalAreaNeeded.height) {
                const offsetScale = (area.height - size.height) / (totalAreaNeeded.height * scale2.y - size.height);
                if (offsetScale < 1) {
                  scale2.y = area.height / totalAreaNeeded.height;
                  offsetColumn.y *= offsetScale;
                  offsetRow.y *= offsetScale;
                }
              } else {
                const offsetScale = (area.width - size.width) / (totalAreaNeeded.width * scale2.x - size.width);
                if (offsetScale < 1) {
                  scale2.x = area.width / totalAreaNeeded.width;
                  offsetColumn.x *= offsetScale;
                  offsetRow.x *= offsetScale;
                }
              }
              totalAreaNeeded = getTotalArea();
            }
            startingOffset.x += area.left - totalAreaNeeded.left + alignOffset.left * (area.width - totalAreaNeeded.width);
            startingOffset.y += area.top - totalAreaNeeded.top + alignOffset.top * (area.height - totalAreaNeeded.height);
          } else {
            if (scaling === "fill") {
              if (rows > 1)
                cellGap.y = Math.min(cellGap.y || 0, (area.height - rows * size.height) / (rows - 1));
              if (columns > 1)
                cellGap.x = Math.min(cellGap.x || 0, (area.width - columns * size.width) / (columns - 1));
            }
            const newWidth = columns * (size.width + cellGap.x) - cellGap.x;
            startingOffset.x += alignOffset.left * (area.width - newWidth);
            const newHeight = rows * (size.height + cellGap.y) - cellGap.y;
            startingOffset.y += alignOffset.top * (area.height - newHeight);
          }
          cellBox = /* @__PURE__ */ __name((n) => cellBoxRC(cell(n)), "cellBox");
        }
        const prandom = import_random_seed.default.create("ge" + this.name).random;
        for (let i = 0; i !== children.length; i++) {
          const box = cellBox(i);
          if (!box)
            continue;
          const child = children[i];
          let aspectRatio2 = child._ui.appearance.aspectRatio;
          if (aspectRatio2)
            aspectRatio2 *= absoluteTransform.height / absoluteTransform.width;
          let { width, height } = box;
          if (aspectRatio2 && aspectRatio2 !== width / height) {
            if (aspectRatio2 > width / height) {
              height = width / aspectRatio2;
            } else {
              width = aspectRatio2 * height;
            }
          }
          let left = box.left + (box.width - width) / 2;
          let top = box.top + (box.height - height) / 2;
          if (haphazardly) {
            let wiggle = { x: 0, y: 0 };
            let overlap = Infinity;
            for (let tries = 0; tries < 10; tries++) {
              const rx = prandom();
              const ry = prandom();
              const w = {
                x: haphazardly ? Math.min(
                  area.left + area.width - left - width,
                  Math.max(area.left - left, (rx - ((left - area.left) / (area.width - width) - 0.5) / 2 - 0.5) * haphazardly * (size.width + size.height))
                ) : 0,
                y: haphazardly ? Math.min(
                  area.top + area.height - top - height,
                  Math.max(area.top - top, (ry - ((top - area.top) / (area.height - height) - 0.5) / 2 - 0.5) * haphazardly * (size.width + size.height))
                ) : 0
              };
              let worstOverlapThisTry = Infinity;
              if (children.every((c) => {
                if (!c._ui.computedStyle)
                  return true;
                const cbox = c._ui.computedStyle;
                const childOverlap = Math.min(
                  Math.max(0, cbox.left + cbox.width - left - w.x),
                  Math.max(0, cbox.top + cbox.height - top - w.y),
                  Math.max(0, left + width + w.x - cbox.left),
                  Math.max(0, top + height + w.y - cbox.top)
                );
                if (childOverlap === 0)
                  return true;
                worstOverlapThisTry = Math.min(childOverlap, worstOverlapThisTry);
              })) {
                wiggle = w;
                break;
              }
              if (worstOverlapThisTry < overlap) {
                overlap = worstOverlapThisTry;
                wiggle = w;
              }
            }
            left += wiggle.x;
            top += wiggle.y;
          }
          child._ui.computedStyle = { width, height, left, top };
          child.applyLayouts(force);
        }
      }
    }
    /** @internal */
    getLayoutItems() {
      const layoutItems = [];
      for (const child of this._t.children) {
        for (let l = this._ui.layouts.length - 1; l >= 0; l--) {
          const { applyTo } = this._ui.layouts[l];
          if (typeof applyTo === "function" && child instanceof applyTo || typeof applyTo === "string" && child.name === applyTo || child === applyTo || applyTo instanceof ElementCollection && applyTo.includes(child)) {
            layoutItems[l] = layoutItems[l] ? layoutItems[l].concat([child]) : [child];
            break;
          }
        }
      }
      return layoutItems;
    }
    /**
     * calculate working area
     * @internal
     */
    getArea(attributes) {
      let { area, margin } = attributes;
      if (area)
        return area;
      if (!margin)
        return { left: 0, top: 0, width: 100, height: 100 };
      const absoluteTransform = this.absoluteTransform();
      const transform = {
        x: absoluteTransform.width / 100,
        y: absoluteTransform.height / 100
      };
      margin = typeof margin === "number" ? { left: margin, right: margin, top: margin, bottom: margin } : { ...margin };
      margin.left /= transform.x;
      margin.right /= transform.x;
      margin.top /= transform.y;
      margin.bottom /= transform.y;
      return {
        left: margin.left,
        top: margin.top,
        width: 100 - margin.left - margin.right,
        height: 100 - margin.top - margin.bottom
      };
    }
    /**
     * Define the appearance of this element. Any values provided override previous ones.
     * @category UI
     *
     * @param appearance - Possible values are:
     * @param appearance.className - A class name to add to the dom element
     *
     * @param appearance.render - A function that takes this element as its only
     * argument and returns JSX for the element. See {@link /styling.md} for more
     * on usage.
     *
     * @param appearance.aspectRatio - The aspect ratio for this element. This
     * value is a ratio of width over height. All layouts defined in {@link
     * layout} will respect this aspect ratio.
     *
     * @param appearance.connections - If the elements immediately within this
     * element are connected using {@link Space#connectTo}, this makes those
     * connections visible as connecting lines. Providing a `label` will place a
     * label over top of this line by calling the provided function with the
     * distance of the connection specified in {@link Space#connectTo} and using
     * the retured JSX. If `labelScale` is provided, the label is scaled by this
     * amount.
     */
    appearance(appearance) {
      Object.assign(this._ui.appearance, appearance);
    }
    /** @internal */
    getMoveTransform() {
      if (!this._ui.computedStyle || !this._t.was || this._t.was === this.branch())
        return;
      const previousPosition = this.board._ui.previousStyles[this._t.was];
      if (!previousPosition)
        return;
      const newPosition = this.relativeTransformToBoard();
      return {
        scaleX: previousPosition.width / newPosition.width,
        scaleY: previousPosition.height / newPosition.height,
        translateX: (previousPosition.left - newPosition.left) / newPosition.width * 100,
        translateY: (previousPosition.top - newPosition.top) / newPosition.height * 100
      };
    }
    /** @internal */
    doneMoving() {
      const branch = this.branch();
      this._t.was = branch;
      if (this._ui.computedStyle) {
        this.board._ui.previousStyles[branch] = this.relativeTransformToBoard();
      }
    }
  };

  // ../boardzilla-core/game/board/space.ts
  var import_graphology = __toESM(require_graphology_umd_min());
  var import_graphology_shortest_path = __toESM(require_graphology_shortest_path());
  var import_graphology_traversal = __toESM(require_graphology_traversal());
  var Space = class _Space extends GameElement {
    constructor() {
      super(...arguments);
      this._eventHandlers = { enter: [] };
    }
    static {
      __name(this, "Space");
    }
    /** internal */
    isSpace() {
      return true;
    }
    /** internal */
    createElement(className, name, attrs) {
      const el = super.createElement(className, name, attrs);
      this.triggerEvent("enter", el);
      return el;
    }
    /** internal */
    addEventHandler(type, handler) {
      this._eventHandlers[type].push(handler);
    }
    /**
     * Attach a callback to this space for every element that enters or is created
     * within.
     * @category Structure
     *
     * @param type - the class of element that will trigger this callback
     * @param callback - Callback will be called each time an element enters, with
     * the entering element as the only argument.
     *
     * @example
     * deck.onEnter(Card, card => card.hideFromAll()) // card placed in the deck are automatically turned face down
     */
    onEnter(type, callback) {
      this.addEventHandler("enter", { callback, type });
    }
    /** internal */
    triggerEvent(event, entering) {
      for (const handler of this._eventHandlers[event]) {
        if (event === "enter" && !isA(entering, handler.type))
          continue;
        handler.callback(entering);
      }
    }
    /**
     * Make this space adjacent with another space for the purposes of adjacency
     * and path-finding functions.
     * @category Structure
     *
     * @param space - {@link Space} to connect to
     * @param distance - Add a custom distance to this connection for the purposes
     * of distance-measuring.
     */
    connectTo(space, distance = 1) {
      if (!this._t.parent || this._t.parent !== space._t.parent)
        throw Error("Cannot connect two spaces that are not in the same parent space");
      if (!this._t.parent._t.graph) {
        this._t.parent._t.graph = new import_graphology.UndirectedGraph();
      }
      const graph = this._t.parent._t.graph;
      if (!graph.hasNode(this._t.id))
        graph.addNode(this._t.id, { space: this });
      if (!graph.hasNode(space._t.id))
        graph.addNode(space._t.id, { space });
      graph.addEdge(this._t.id, space._t.id, { distance });
      return this;
    }
    /**
     * If this space is adjacent to another space
     * @category Structure
     */
    adjacentTo(space) {
      if (!this._t.parent?._t.graph)
        return false;
      return this._t.parent._t.graph.areNeighbors(this._t.id, space._t.id);
    }
    /**
     * Finds the shortest distance to another space, traveling thru multiple
     * connections
     * @category Structure
     *
     * @param space - {@link Space} to measure distance to
     * @returns shortest distance measured by the `distance` values added to each
     * connection in {@link connectTo}
     */
    distanceTo(space) {
      if (!this._t.parent?._t.graph)
        return void 0;
      try {
        const graph = this._t.parent._t.graph;
        const path = import_graphology_shortest_path.dijkstra.bidirectional(graph, this._t.id, space._t.id, "distance");
        let distance = 0;
        for (let n = 1; n != path.length; n++) {
          distance += graph.getEdgeAttributes(graph.edge(path[n - 1], path[n])).distance;
        }
        return distance;
      } catch (e) {
        return void 0;
      }
    }
    closest(className, ...finders) {
      let classToSearch = _Space;
      if (typeof className !== "function" || !("isGameElement" in className)) {
        if (className)
          finders = [className, ...finders];
      } else {
        classToSearch = className;
      }
      if (!this._t.parent?._t.graph)
        return void 0;
      const others = this.others(classToSearch, ...finders);
      return others.sortBy((el) => {
        const distance = this.distanceTo(el);
        return distance === void 0 ? Infinity : distance;
      })[0];
    }
    /**
     * Finds all spaces connected to this space by a distance no more than
     * `distance`
     *
     * @category Queries
     */
    withinDistance(distance) {
      const c = new ElementCollection();
      try {
        const graph = this._t.parent._t.graph;
        (0, import_graphology_traversal.bfs)(graph, (node) => {
          const el = graph.getNodeAttributes(node).element;
          const d = this.distanceTo(el);
          if (d === void 0)
            return false;
          if (d > distance)
            return true;
          if (el !== this)
            c.push(el);
        });
      } catch (e) {
      }
      return c;
    }
    /** internal */
    _otherFinder(finders) {
      let otherFinder = /* @__PURE__ */ __name((el) => el !== this, "otherFinder");
      for (const finder of finders) {
        if (typeof finder === "object") {
          if (finder.adjacent !== void 0) {
            const adj = finder.adjacent;
            otherFinder = /* @__PURE__ */ __name((el) => this.adjacentTo(el) === adj && el !== this, "otherFinder");
            delete finder.adjacent;
          }
          if (finder.withinDistance !== void 0) {
            const distance = finder.withinDistance;
            otherFinder = /* @__PURE__ */ __name((el) => {
              const d = this.distanceTo(el);
              if (d === void 0)
                return false;
              return d <= distance && el !== this;
            }, "otherFinder");
            delete finder.withinDistance;
          }
        }
      }
      return otherFinder;
    }
  };

  // ../boardzilla-core/game/board/piece.ts
  var Piece = class extends GameElement {
    static {
      __name(this, "Piece");
    }
    /**
     * Move this piece into another element. This triggers any {@link
     * Space#onEnter | onEnter} callbacks in the destination.
     * @category Structure
     *
     * @param to - Destination element
     * @param options.position - Place the piece into a specific numbered position
     * relative to the other elements in this space. Positive numbers count from
     * the beginning. Negative numbers count from the end.
     * @param options.fromTop - Place the piece into a specific numbered position counting
     * from the first element
     * @param options.fromBottom - Place the piece into a specific numbered position
     * counting from the last element
     */
    putInto(to, options) {
      if (to.isDescendantOf(this))
        throw Error(`Cannot put ${this} into itself`);
      let pos = to._t.order === "stacking" ? 0 : to._t.children.length;
      if (options?.position !== void 0)
        pos = options.position >= 0 ? options.position : to._t.children.length + options.position + 1;
      if (options?.fromTop !== void 0)
        pos = options.fromTop;
      if (options?.fromBottom !== void 0)
        pos = to._t.children.length - options.fromBottom;
      const previousParent = this._t.parent;
      const position = this._t.parent._t.children.indexOf(this);
      this._t.parent._t.children.splice(position, 1);
      this._t.parent = to;
      to._t.children.splice(pos, 0, this);
      if (to instanceof Space && previousParent !== to)
        to.triggerEvent("enter", this);
    }
    /**
     * Remove this piece from the playing area and place it into {@link
     * Board#pile}
     * @category Structure
     */
    remove() {
      return this.putInto(this._ctx.removed);
    }
  };

  // ../boardzilla-core/game/board/board.ts
  var Board = class extends Space {
    constructor(ctx) {
      super({ ...ctx, trackMovement: false });
      this._ctx.removed = this.createElement(Space, "removed"), this.board = this;
      this.pile = this._ctx.removed;
    }
    static {
      __name(this, "Board");
    }
    get players() {
      return this._ctx.game.players;
    }
    message(message, ...args) {
      return this._ctx.game.message(message, ...args);
    }
    finish(winner) {
      return this._ctx.game.finish(winner);
    }
    // also gets removed elements
    allJSON(seenBy) {
      return [this.toJSON(seenBy)].concat(
        this._ctx.removed._t.children.map((el) => el.toJSON(seenBy))
      );
    }
    fromJSON(boardJSON) {
      let { className, children, _id, order, ...rest } = boardJSON[0];
      if (this._ctx.game)
        rest = deserializeObject({ ...rest }, this._ctx.game);
      if (this.constructor.name !== className)
        throw Error(`Cannot create board from JSON. ${className} must equal ${this.constructor.name}`);
      for (const key of Object.keys(this)) {
        if (!["_ctx", "_t", "_ui", "_eventHandlers", "board", "game", "pile"].includes(key) && !(key in rest))
          rest[key] = void 0;
      }
      Object.assign(this, { ...rest });
      if (children)
        this.createChildrenFromJSON(children, "0");
      if (order)
        this._t.order = order;
      this._ctx.removed.createChildrenFromJSON(boardJSON.slice(1), "1");
      this._ui.layoutsSet = false;
    }
    // restore default layout rules before running setupLayout
    resetUI() {
      super.resetUI();
      this._ui.stepLayouts = { "step:out-of-turn": { element: this, top: 0, left: 0 } };
      this._ui.previousStyles ||= {};
    }
    setBreakpoint(breakpoint) {
      if (breakpoint !== this._ui.breakpoint) {
        if (this._ui.breakpoint)
          this._ui.layoutsSet = false;
        this._ui.breakpoint = breakpoint;
      }
    }
    getBreakpoint(aspectRatio) {
      return this._ui.breakpoints && this._ui.breakpoints(aspectRatio) || "_default";
    }
    applyLayouts(force = false) {
      if (!this._ui.breakpoint)
        this.setBreakpoint("_default");
      if (!this._ui.layoutsSet) {
        this.resetUI();
        if (this._ui.setupLayout)
          this._ui.setupLayout(this, this._ui.breakpoint);
        this._ui.layoutsSet = true;
      }
      const aspectRatio = this._ui.appearance.aspectRatio;
      if (aspectRatio) {
        this._ui.frame = {
          left: 0,
          top: 0,
          width: aspectRatio < 1 ? aspectRatio * 100 : 100,
          height: aspectRatio > 1 ? 100 / aspectRatio : 100
        };
      }
      return super.applyLayouts(force);
    }
    layoutStep(step, attributes) {
      if (step !== "out-of-turn" && !this._ctx.game.flow.getStep(step))
        throw Error(`No such step: ${step}`);
      this._ui.stepLayouts["step:" + step] = attributes;
    }
    layoutAction(action2, attributes) {
      this._ui.stepLayouts["action:" + action2] = attributes;
    }
    disableDefaultAppearance() {
      this._ui.disabledDefaultAppearance = true;
    }
  };

  // ../boardzilla-core/game/action/utils.ts
  var humanizeArg = /* @__PURE__ */ __name((arg) => {
    if (arg instanceof Player)
      return arg.name;
    if (arg instanceof GameElement)
      return arg.name || `$el[${arg.branch()}]`;
    return arg.toString();
  }, "humanizeArg");
  var serializeArg = /* @__PURE__ */ __name((arg, forPlayer = true) => {
    if (arg instanceof Array)
      return arg.map((a) => serializeSingleArg(a, forPlayer));
    return serializeSingleArg(arg, forPlayer);
  }, "serializeArg");
  var serializeSingleArg = /* @__PURE__ */ __name((arg, forPlayer = true) => {
    if (arg instanceof Player)
      return `$p[${arg.position}]`;
    if (arg instanceof GameElement)
      return forPlayer ? `$el[${arg.branch()}]` : `$eid[${arg._t.id}]`;
    return arg;
  }, "serializeSingleArg");
  var deserializeArg = /* @__PURE__ */ __name((arg, game) => {
    if (arg instanceof Array)
      return arg.map((a) => deserializeSingleArg(a, game));
    return deserializeSingleArg(arg, game);
  }, "deserializeArg");
  var deserializeSingleArg = /* @__PURE__ */ __name((arg, game) => {
    if (typeof arg === "number" || typeof arg === "boolean")
      return arg;
    let deser;
    if (arg.slice(0, 3) === "$p[") {
      deser = game.players.atPosition(parseInt(arg.slice(3, -1)));
    } else if (arg.slice(0, 4) === "$el[") {
      deser = game.board.atBranch(arg.slice(4, -1));
    } else if (arg.slice(0, 5) === "$eid[") {
      deser = game.board.atID(parseInt(arg.slice(5, -1)));
    } else {
      return arg;
    }
    if (!deser)
      debugger;
    if (!deser)
      throw Error(`Unable to find arg: ${arg}`);
    return deser;
  }, "deserializeSingleArg");
  var serializeObject = /* @__PURE__ */ __name((obj, forPlayer = true) => {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, serialize(v, forPlayer)]));
  }, "serializeObject");
  var deserializeObject = /* @__PURE__ */ __name((obj, game) => {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deserialize(v, game)]));
  }, "deserializeObject");
  var serialize = /* @__PURE__ */ __name((arg, forPlayer = true) => {
    if (arg === void 0)
      return void 0;
    if (arg === null)
      return null;
    if (arg instanceof Array)
      return arg.map((a) => serialize(a, forPlayer));
    if (arg instanceof Player || arg instanceof GameElement)
      return serializeSingleArg(arg, forPlayer);
    if (typeof arg === "object")
      return serializeObject(arg, forPlayer);
    if (typeof arg === "number" || typeof arg === "string" || typeof arg === "boolean")
      return serializeSingleArg(arg, forPlayer);
    throw Error(`unable to serialize ${arg}`);
  }, "serialize");
  var deserialize = /* @__PURE__ */ __name((arg, game) => {
    if (arg === void 0)
      return void 0;
    if (arg === null)
      return null;
    if (arg instanceof Array)
      return arg.map((a) => deserialize(a, game));
    if (typeof arg === "object")
      return deserializeObject(arg, game);
    if (typeof arg === "number" || typeof arg === "string" || typeof arg === "boolean")
      return deserializeSingleArg(arg, game);
    throw Error(`unable to deserialize ${arg}`);
  }, "deserialize");
  var escapeArgument = /* @__PURE__ */ __name((arg) => {
    if (arg instanceof Array) {
      const escapees = arg.map(escapeArgument);
      return escapees.slice(0, -1).join(", ") + (escapees.length > 1 ? " and " : "") + (escapees[escapees.length - 1] || "");
    }
    if (typeof arg === "object")
      return `[[${serializeSingleArg(arg)}|${humanizeArg(arg)}]]`;
    return String(arg);
  }, "escapeArgument");
  var combinations = /* @__PURE__ */ __name((set, min, max) => {
    const combos = [];
    const poss = /* @__PURE__ */ __name((curr, i) => {
      if (set.length - i < min - curr.length)
        return;
      if (curr.length >= min)
        combos.push(curr);
      if (curr.length < max) {
        for (let j = i; j !== set.length; j++) {
          poss(curr.concat([set[j]]), j + 1);
        }
      }
    }, "poss");
    poss([], 0);
    return combos;
  }, "combinations");

  // ../boardzilla-core/game/utils.ts
  var createInteface = /* @__PURE__ */ __name((setup) => {
    return {
      initialState: (state) => setup(state, { start: true }).getUpdate(),
      processMove: (previousState, move, trackMovement = true) => {
        console.time("processMove");
        let cachedGame = void 0;
        if (globalThis.window && window.board && window.lastGame > /* @__PURE__ */ new Date() - 10 && window.json === JSON.stringify(previousState))
          cachedGame = window.board.game;
        const game = cachedGame || setup(previousState, {
          currentPlayerPosition: previousState.currentPlayers.length === 1 ? previousState.currentPlayers[0] : void 0,
          start: true,
          trackMovement
        });
        console.timeLog("processMove", cachedGame ? "restore cached game" : "setup");
        const error = game.processMove({
          player: game.players.atPosition(move.position),
          action: move.data.action,
          args: move.data.args.map((a) => deserializeArg(a, game))
        });
        console.timeLog("processMove", "process");
        if (error) {
          throw Error(`Unable to process move: ${error}`);
        }
        game.play();
        if (globalThis.window)
          window.board = game.board;
        const update = game.getUpdate();
        console.timeLog("processMove", "update");
        if (globalThis.window) {
          window.json = JSON.stringify(update.game);
          window.lastGame = /* @__PURE__ */ new Date();
        }
        console.timeEnd("processMove");
        return update;
      },
      getPlayerState: (state, position) => {
        if (!position)
          throw Error("getPlayerState without position");
        console.log("getPlayerState", position);
        const game = setup(state);
        if (state.phase === "started") {
          return {
            ...game.getState(position),
            phase: state.phase,
            currentPlayers: state.currentPlayers
          };
        }
        return {
          ...game.getState(position),
          phase: "finished",
          winners: game.winner.map((p) => p.position)
        };
      }
    };
  }, "createInteface");
  var isA = /* @__PURE__ */ __name((el, el2) => el instanceof el2, "isA");
  var shuffleArray = /* @__PURE__ */ __name((array, random3) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random3() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }, "shuffleArray");
  var times = /* @__PURE__ */ __name((n, fn) => Array.from(Array(n)).map((_, i) => fn(i + 1)), "times");
  var range = /* @__PURE__ */ __name((min, max, step = 1) => times(Math.floor((max - min) / step) + 1, (i) => (i - 1) * step + min), "range");

  // ../boardzilla-core/game/action/selection.ts
  var Selection = class _Selection {
    constructor(s) {
      // additional meta info that describes the context for this selection
      this.skipIfOnlyOne = true;
      this.expand = false;
      if (s instanceof _Selection) {
        this.type = s.type;
        this.skipIfOnlyOne = s.skipIfOnlyOne;
        this.expand = s.expand;
        this.choices = s.choices;
        this.boardChoices = s.boardChoices;
        this.min = s.min;
        this.max = s.max;
        this.initial = s.initial;
        this.regexp = s.regexp;
        this.value = s.value;
        this.clientContext = s.clientContext;
      } else {
        if (s.selectFromChoices) {
          this.type = "choices";
          this.choices = s.selectFromChoices.choices;
          this.initial = s.selectFromChoices.initial;
        } else if (s.selectOnBoard) {
          this.type = "board";
          this.boardChoices = s.selectOnBoard.chooseFrom;
          if (s.selectOnBoard.number !== void 0) {
            this.min = s.selectOnBoard.number;
            this.max = s.selectOnBoard.number;
          }
          this.min ??= s.selectOnBoard.min;
          this.max ??= s.selectOnBoard.max;
        } else if (s.selectNumber) {
          this.type = "number";
          this.min = s.selectNumber.min;
          this.max = s.selectNumber.max;
          this.initial = s.selectNumber.min === void 0 ? s.selectNumber.initial : s.selectNumber.min;
        } else if (s.enterText) {
          this.type = "text";
          this.regexp = s.enterText.regexp;
          this.initial = s.enterText.initial;
        } else {
          this.type = "button";
          this.value = s.value;
          this.skipIfOnlyOne ??= true;
        }
      }
      this.prompt = s.prompt;
      if ("skipIfOnlyOne" in s)
        this.skipIfOnlyOne = s.skipIfOnlyOne ?? true;
      if ("skipIf" in s)
        this.skipIf = s.skipIf;
      if ("expand" in s)
        this.expand = s.expand ?? false;
      this.clientContext = s.clientContext;
    }
    static {
      __name(this, "Selection");
    }
    /**
     * check specific selection with a given arg. evaluates within the context of
     * previous args, so any selection elements that have previous-arg-function
     * forms are here evaluated with the previous args. returns new selection and
     * error if any
     */
    validate(arg, previousArgs) {
      const s = this.resolve(...previousArgs);
      if (s.skipIf === true)
        return;
      if (s.type === "choices" && s.choices) {
        if (arg instanceof Array)
          return "multi-choice stil unsupported";
        return (s.choices instanceof Array ? s.choices : Object.keys(s.choices)).includes(arg) ? void 0 : "Not a valid choice";
      }
      if (s.type === "board" && s.boardChoices) {
        const results = s.boardChoices;
        if (!results)
          console.warn("Attempted to validate an impossible move", s);
        if (this.isMulti()) {
          if (!(arg instanceof Array))
            throw Error("Required multi select");
          if (results && arg.some((a) => !results.includes(a)))
            return "Selected elements are not valid";
          if (s.min !== void 0 && arg.length < s.min)
            return "Below minimum";
          if (s.max !== void 0 && arg.length > s.max)
            return "Above maximum";
        } else {
          return results && results.includes(arg) ? void 0 : "Selected element is not valid";
        }
      }
      if (s.type === "text") {
        return typeof arg === "string" && (!s.regexp || arg.match(s.regexp)) ? void 0 : "Not a string";
      }
      if (s.type === "number") {
        if (typeof arg !== "number")
          return "Not a number";
        if (s.min !== void 0 && arg < s.min)
          return "Below minimum";
        if (s.max !== void 0 && arg > s.max)
          return "Above maximum";
        return void 0;
      }
      return void 0;
    }
    // All possible valid Arguments to this selection. Have to make some assumptions here to tree shake possible moves
    options() {
      if (this.isUnbounded())
        return [];
      if (this.type === "number")
        return range(this.min ?? 1, this.max);
      const choices = this.choices && (this.choices instanceof Array ? this.choices : Object.keys(this.choices));
      if (this.isMulti())
        return combinations(this.boardChoices || choices || [], this.min ?? 1, this.max ?? Infinity);
      if (this.boardChoices)
        return this.boardChoices;
      if (this.choices)
        return this.choices instanceof Array ? this.choices : Object.keys(this.choices);
      return [];
    }
    isUnbounded() {
      if (this.type === "number")
        return this.max === void 0 || this.max - (this.min ?? 1) > 100;
      return this.type === "text" || this.type === "button";
    }
    isResolved() {
      return typeof this.prompt !== "function" && typeof this.min !== "function" && typeof this.max !== "function" && typeof this.initial !== "function" && typeof this.skipIf !== "function" && typeof this.choices !== "function" && typeof this.boardChoices !== "function";
    }
    isMulti() {
      return this.min !== void 0 || this.max !== void 0;
    }
    resolve(...args) {
      if (this.isResolved())
        return this;
      const resolved = new _Selection(this);
      if (typeof this.prompt === "function")
        resolved.prompt = this.prompt(...args);
      if (typeof this.min === "function")
        resolved.min = this.min(...args);
      if (typeof this.max === "function")
        resolved.max = this.max(...args);
      if (typeof this.initial === "function")
        resolved.initial = this.initial(...args);
      if (typeof this.skipIf === "function")
        resolved.skipIf = this.skipIf(...args);
      if (typeof this.choices === "function")
        resolved.choices = this.choices(...args);
      if (typeof this.boardChoices === "string")
        throw Error("not impl");
      if (typeof this.boardChoices === "function")
        resolved.boardChoices = this.boardChoices(...args);
      return resolved;
    }
    isPossible() {
      if (this.type === "choices" && this.choices)
        return (this.choices instanceof Array ? this.choices : Object.keys(this.choices)).length > 0;
      const isInBounds = this.max !== void 0 ? (this.min ?? 1) <= this.max : true;
      if (this.type === "board" && this.boardChoices)
        return isInBounds && this.boardChoices.length >= (this.min ?? 1);
      if (this.type === "number")
        return isInBounds;
      return true;
    }
    isForced() {
      if (this.skipIfOnlyOne !== true)
        return;
      if (this.type === "button") {
        return this.value;
      } else if (this.boardChoices?.length === 1 && !this.isMulti()) {
        return this.boardChoices[0];
      } else if (this.boardChoices && this.boardChoices.length === this.min && this.min === this.max) {
        return this.boardChoices;
      } else if (this.type === "number" && this.min !== void 0 && this.min === this.max) {
        return this.min;
      } else if (this.type === "choices" && this.choices) {
        const choices = this.choices instanceof Array ? this.choices : Object.keys(this.choices);
        if (choices.length === 1)
          return choices[0];
      }
    }
    overrideOptions(options) {
      if (this.type === "board") {
        this.boardChoices = options;
        return this;
      }
      return new _Selection({
        selectFromChoices: {
          choices: options
          //min: selection.min, TODO
          //max: selection.max
        }
      });
    }
  };

  // ../boardzilla-core/game/action/action.ts
  var Action = class {
    constructor({ prompt, condition }) {
      this._cfg = {
        selections: [],
        moves: [],
        messages: []
      };
      this.prompt = prompt;
      this._cfg.condition = condition;
    }
    static {
      __name(this, "Action");
    }
    isPossible() {
      return typeof this._cfg.condition === "function" ? this._cfg.condition() : this._cfg.condition ?? true;
    }
    // given a set of args, return sub-selections possible trying each possible next arg
    // return undefined if these args are impossible
    // skipping/expanding is very complex
    // skippable options will still appear in order to present the choices to the user to select that tree. This will be the final selection or the first board choice
    _getResolvedSelections(...args) {
      const selection = this._nextSelection(...args);
      if (!selection)
        return [];
      const move = {
        action: this.name,
        args,
        selection
      };
      if (!selection.isPossible())
        return;
      if (selection.isUnbounded())
        return [move];
      let possibleOptions = [];
      let pruned = false;
      let resolvedSelections = [];
      let mayExpand = selection.expand;
      for (const option of selection.options()) {
        const submoves = this._getResolvedSelections(...args, option);
        if (submoves === void 0) {
          pruned = true;
        } else {
          possibleOptions.push(option);
          if (selection.expand && submoves.length === 0)
            mayExpand = false;
          resolvedSelections = resolvedSelections.concat(submoves);
        }
      }
      if (!possibleOptions.length)
        return void 0;
      if (pruned && !selection.isMulti())
        selection.overrideOptions(possibleOptions);
      if (!resolvedSelections.length || move.selection.type === "board")
        return [move];
      if (mayExpand)
        return resolvedSelections;
      if (selection.skipIfOnlyOne && possibleOptions.length === 1)
        return resolvedSelections;
      return [move];
    }
    /**
     * given a partial arg list, returns a selection object for continuation if one exists.
     */
    _nextSelection(...args) {
      let argsLeft = args.length;
      let i = 0;
      if (!this._cfg.selections.length)
        return;
      do {
        const selection2 = this._cfg.selections[i].resolve(...args);
        if (selection2.skipIf !== true)
          argsLeft--;
        if (argsLeft >= 0)
          i++;
      } while (argsLeft >= 0 && i < this._cfg.selections.length);
      const selection = this._cfg.selections[i];
      if (selection) {
        selection.prompt ??= [...this._cfg.selections.slice(0, args.length)].reverse().find((s) => s.prompt)?.prompt || this.prompt;
        return selection.resolve(...args);
      }
    }
    /**
     * process this action with supplied args. returns error if any
     */
    _process(...args) {
      let error = void 0;
      for (let i = 0; i !== this._cfg.selections.length && i !== args.length; i++) {
        error = this._cfg.selections[i].validate(args[i], args.slice(0, i));
        if (error) {
          console.error("invalid arg", args[i], i, error);
          args = args.slice(0, i);
          break;
        }
      }
      const resolvedSelections = this._getResolvedSelections(...args);
      if (!resolvedSelections) {
        console.error("could not resolve this args", this.name, args);
        return error || "unknown error during action._process";
      }
      if (resolvedSelections.length) {
        return error || "incomplete action";
      }
      try {
        for (const move of this._cfg.moves)
          move(...args);
      } catch (e) {
        console.error(e);
        return e.message;
      }
    }
    do(move) {
      this._cfg.moves.push(move);
      return this;
    }
    message(message) {
      this._cfg.messages.push(message);
      return this;
    }
    chooseFrom({ choices, prompt, initial, skipIfOnlyOne, skipIf, expand }) {
      this._cfg.selections.push(new Selection({ prompt, skipIfOnlyOne, skipIf, expand, selectFromChoices: { choices, initial } }));
      return this;
    }
    enterText({ prompt, regexp, initial }) {
      this._cfg.selections.push(new Selection({ prompt, enterText: { regexp, initial } }));
      return this;
    }
    confirm(prompt) {
      this._cfg.selections.push(new Selection({ prompt, skipIfOnlyOne: false, value: true }));
      return this;
    }
    chooseNumber({ min, max, prompt, initial, skipIfOnlyOne, skipIf, expand }) {
      this._cfg.selections.push(new Selection({ prompt, skipIfOnlyOne, skipIf, expand, selectNumber: { min, max, initial } }));
      return this;
    }
    chooseOnBoard({ choices, prompt, min, max, number, skipIfOnlyOne, skipIf, expand }) {
      this._cfg.selections.push(new Selection({ prompt, skipIfOnlyOne, skipIf, expand, selectOnBoard: { chooseFrom: choices, min, max, number } }));
      if (min !== void 0 || max !== void 0 || number !== void 0) {
        return this;
      }
      return this;
    }
    move({ piece, into, choosePiece, chooseInto, prompt, promptInto }) {
      const numberOfPriorSelections = this._cfg.selections.length;
      if (choosePiece) {
        this._cfg.selections.push(new Selection({
          prompt,
          skipIfOnlyOne: false,
          selectOnBoard: { chooseFrom: choosePiece },
          clientContext: { dragInto: chooseInto || into }
        }));
      }
      if (chooseInto) {
        this._cfg.selections.push(new Selection({
          prompt: promptInto || prompt,
          selectOnBoard: { chooseFrom: chooseInto },
          clientContext: { dragFrom: choosePiece || piece }
        }));
      }
      if (!choosePiece && !chooseInto) {
        this._cfg.moves.push(() => resolve(piece).putInto(resolve(into)));
      }
      if (choosePiece && !chooseInto) {
        this._cfg.moves.push((...args) => args[numberOfPriorSelections].putInto(resolve(into)));
      }
      if (!choosePiece && chooseInto) {
        this._cfg.moves.push((...args) => resolve(piece).putInto(args[numberOfPriorSelections]));
      }
      if (choosePiece && chooseInto) {
        this._cfg.moves.push((...args) => args[numberOfPriorSelections].putInto(args[numberOfPriorSelections + 1]));
      }
      return this;
    }
  };
  var resolve = /* @__PURE__ */ __name((q, ...args) => {
    if (typeof q === "string")
      throw Error("not impl");
    return typeof q === "function" ? q(...args) : q;
  }, "resolve");

  // ../boardzilla-core/game/action/index.ts
  var action = /* @__PURE__ */ __name((definition) => new Action(definition), "action");

  // ../boardzilla-core/game/flow/flow.ts
  var Flow = class _Flow {
    constructor({ name, do: block }) {
      // if block is an array, indicates the index of execution
      this.type = "sequence";
      this.name = name;
      this.block = block;
      this.top = this;
    }
    static {
      __name(this, "Flow");
    }
    validateNoDuplicate() {
      const name = this.name;
      this.name = void 0;
      if (name && this.getStep(name))
        throw Error(`Duplicate flow name: ${name}`);
      this.name = name;
    }
    flowStepArgs() {
      const args = {};
      let flow = this.top;
      while (flow instanceof _Flow) {
        if ("position" in flow && flow.position) {
          if (flow.type === "action" && "action" in flow.position && "args" in flow.position) {
            args[flow.position.action] = flow.position.args;
          }
          if ("value" in flow.position && flow.name) {
            args[flow.name] = flow.position.value;
          }
        }
        flow = flow.step;
      }
      return args;
    }
    branchJSON(forPlayer = true) {
      if (this.position === void 0 && this.sequence === void 0)
        return [];
      let branch = {
        type: this.type
      };
      if (this.name)
        branch.name = this.name;
      if (this.position !== void 0)
        branch.position = this.toJSON(forPlayer);
      if (this.sequence !== void 0 && this.currentBlock() instanceof Array)
        branch.sequence = this.sequence;
      const thisBranch = branch;
      if (this.step instanceof _Flow)
        return [thisBranch].concat(this.step.branchJSON(forPlayer));
      return [thisBranch];
    }
    setBranchFromJSON(branch) {
      const node = branch[0];
      if (!node)
        throw Error(`Insufficient position elements sent to flow for ${this.name}`);
      if (node.type !== this.type || node.name !== this.name) {
        throw Error(`Flow mismatch. Trying to set ${node.type}:${node.name} on ${this.type}:${this.name}`);
      }
      this.setPositionFromJSON(node.position, node.sequence);
      if (this.step instanceof _Flow) {
        this.step.setBranchFromJSON(branch.slice(1));
      }
    }
    setPosition(position, sequence, reset = true) {
      this.position = position;
      const block = this.currentBlock();
      if (!block) {
        this.step = void 0;
      } else if (block instanceof Array) {
        if (sequence === void 0)
          sequence = 0;
        this.sequence = sequence;
        if (!block[sequence])
          throw Error(`Invalid sequence for ${this.type}:${this.name} ${sequence}/${block.length}`);
        this.step = block[sequence];
      } else {
        this.step = block;
      }
      if (this.step instanceof _Flow) {
        this.step.game = this.game;
        this.step.top = this.top;
        this.step.parent = this;
        if (reset)
          this.step.reset();
      }
    }
    setPositionFromJSON(positionJSON, sequence) {
      this.setPosition(this.fromJSON(positionJSON), sequence, false);
    }
    currentFlow() {
      return !this.step || typeof this.step === "function" || typeof this.step === "string" ? this : this.step.currentFlow();
    }
    actionNeeded() {
      const flow = this.currentFlow();
      if ("awaitingAction" in flow) {
        const actions = flow.awaitingAction();
        if (actions)
          return {
            step: flow.name,
            prompt: flow.prompt,
            actions,
            skipIfOnlyOne: flow.skipIfOnlyOne,
            expand: flow.expand
          };
      }
    }
    processMove(move) {
      const step = this.currentFlow();
      if (!step || step.type !== "action")
        throw Error(`Cannot process action currently ${JSON.stringify(this.branchJSON())}`);
      return step.processMove(move);
    }
    getStep(name) {
      if (this.name === name) {
        this.validateNoDuplicate();
        return this;
      }
      const steps = this.allSteps();
      if (!steps)
        return;
      for (const step of steps instanceof Array ? steps : [steps]) {
        if (step instanceof _Flow) {
          const found = step.getStep(name);
          if (found)
            return found;
        }
      }
    }
    /**
     * Advance flow one step and return FlowControl.complete if complete,
     * FlowControl.ok if can continue, Do to interupted the current
     * loop. Return a list of actions if now waiting for player input. override
     * for self-contained flows that do not have subflows.
     */
    playOneStep() {
      const step = this.step;
      let result = "COMPLETE" /* complete */;
      if (step instanceof Function) {
        result = step(this.flowStepArgs()) || "COMPLETE" /* complete */;
      } else if (typeof step === "string") {
        result = step;
      } else if (step instanceof _Flow) {
        const actions = step.actionNeeded();
        if (actions?.actions)
          return actions.actions;
        result = step.playOneStep();
      }
      if (result === "OK" /* ok */ || result instanceof Array)
        return result;
      if (result !== "COMPLETE" /* complete */) {
        if ("advance" in this && typeof this.advance === "function" && result === "CONTINUE" /* continue */)
          return this.advance();
        if ("repeat" in this && typeof this.repeat === "function" && result === "REPEAT" /* repeat */)
          return this.repeat();
        if ("exit" in this && typeof this.exit === "function" && result === "BREAK" /* break */)
          return this.exit();
        return result;
      }
      const block = this.currentBlock();
      if (block instanceof Array) {
        if (this.sequence !== void 0) {
          if (this.sequence + 1 !== block.length) {
            this.setPosition(this.position, this.sequence + 1);
            return "OK" /* ok */;
          }
        }
      }
      return this.advance();
    }
    // play until action required (returns list) or game over
    play() {
      let step;
      do {
        step = this.playOneStep();
      } while (step === "OK" /* ok */ && this.game.phase !== "finished");
      if (step === "CONTINUE" /* continue */ || step === "REPEAT" /* repeat */ || step === "BREAK" /* break */)
        throw Error("Cannot skip/repeat/break when not in a loop");
      if (step !== "COMPLETE" /* complete */ && step !== "OK" /* ok */)
        return step;
    }
    // must override. reset runs any logic needed and call setPosition. Must not modify state.
    reset() {
      this.setPosition(null);
    }
    // must override. must rely solely on this.position
    currentBlock() {
      return this.block;
    }
    // override if position contains objects that need serialization
    toJSON(forPlayer = true) {
      return this.position;
    }
    // override if position contains objects that need deserialization
    fromJSON(json) {
      return json;
    }
    // override for steps that advance through their subflows. call setPosition if needed. return ok/complete
    advance() {
      return "COMPLETE" /* complete */;
    }
    // override return all subflows
    allSteps() {
      return this.block ?? null;
    }
    toString() {
      return "";
    }
  };

  // ../boardzilla-core/game/game.ts
  var import_random_seed2 = __toESM(require_random_seed());
  var Game = class {
    constructor() {
      this.players = new PlayerCollection();
      this.phase = "define";
      this.messages = [];
      this.godMode = false;
      this.winner = [];
    }
    static {
      __name(this, "Game");
    }
    /**
     * configuration functions
     */
    defineFlow(flowDefinition) {
      if (this.phase !== "define")
        throw Error("cannot call defineFlow once started");
      this.flowDefinition = flowDefinition;
    }
    defineActions(actions) {
      if (this.phase !== "define")
        throw Error("cannot call defineActions once started");
      this.actions = actions;
    }
    defineBoard(className, classRegistry) {
      if (this.phase !== "define")
        throw Error("cannot call defineBoard once started");
      this.board = new className({ game: this, classRegistry: [GameElement, Space, Piece, ...classRegistry] });
      return this.board;
    }
    definePlayers(className) {
      if (this.phase !== "define")
        throw Error("cannot call definePlayer once started");
      this.players = new PlayerCollection();
      this.players.game = this;
      this.players.className = className;
      return this.players;
    }
    setSettings(settings) {
      this.settings = settings;
    }
    setRandomSeed(rseed) {
      this.rseed = rseed;
      this.random = import_random_seed2.default.create(rseed).random;
    }
    /**
     * flow functions
     */
    start() {
      if (this.phase === "started")
        throw Error("cannot call start once started");
      if (!this.players.length) {
        throw Error("No players");
      }
      this.phase = "started";
      this.buildFlow();
      this.flow.reset();
    }
    finish(winner) {
      this.phase = "finished";
      if (winner)
        this.winner = winner instanceof Array ? winner : [winner];
    }
    buildFlow() {
      const flow = this.flowDefinition(this.board);
      this.flow = new Flow({ do: flow });
      this.flow.game = this;
    }
    /**
     * state management functions
     */
    setState(state) {
      this.players.fromJSON(state.players);
      this.setSettings(state.settings);
      this.board.fromJSON(state.board);
      this.buildFlow();
      this.flow.setBranchFromJSON(state.position);
      this.setRandomSeed(state.rseed);
    }
    // state variables for server updates. does not includes phase, current player or winners.
    getState(forPlayer) {
      return {
        players: this.players.map((p) => p.toJSON()),
        // TODO scrub
        settings: this.settings,
        position: this.flow.branchJSON(!!forPlayer),
        board: this.board.allJSON(forPlayer),
        rseed: this.rseed
      };
    }
    getPlayerStates() {
      return this.players.map((p) => ({
        position: p.position,
        state: this.getState(p.position)
      }));
    }
    getUpdate() {
      if (this.phase === "started") {
        return {
          game: {
            ...this.getState(),
            currentPlayers: this.players.currentPosition ? [this.players.currentPosition] : [],
            phase: this.phase
          },
          players: this.getPlayerStates(),
          messages: this.messages
        };
      }
      if (this.phase === "finished") {
        return {
          game: {
            ...this.getState(),
            winners: this.winner.map((p) => p.position),
            phase: this.phase
          },
          players: this.getPlayerStates(),
          messages: this.messages
        };
      }
      throw Error("unable to initialize game");
    }
    contextualizeBoardToPlayer(player) {
      const prev = this.board._ctx.player;
      this.board._ctx.player = player;
      return prev;
    }
    inContextOfPlayer(player, fn) {
      const prev = this.contextualizeBoardToPlayer(player);
      const results = fn();
      this.contextualizeBoardToPlayer(prev);
      return results;
    }
    trackMovement(track = true) {
      this.board._ctx.trackMovement = track;
    }
    /**
     * action functions
     */
    action(name, player) {
      if (this.godMode) {
        const godModeAction = this.godModeActions()[name];
        if (godModeAction) {
          godModeAction.name = name;
          return godModeAction;
        }
      }
      return this.inContextOfPlayer(player, () => {
        const playerAction = this.actions(this.board, action, player)[name];
        if (!playerAction)
          throw Error(`No such action ${name}`);
        playerAction.name = name;
        return playerAction;
      });
    }
    godModeActions() {
      if (this.phase !== "started")
        throw Error("cannot call god mode actions until started");
      return {
        _godMove: action({
          prompt: "Move"
        }).move({
          choosePiece: this.board.all(Piece),
          chooseInto: this.board.all(GameElement)
        }),
        _godEdit: action({
          prompt: "Change"
        }).chooseOnBoard({
          choices: this.board.all(GameElement)
        }).chooseFrom({
          prompt: "Change property",
          choices: (el) => Object.keys(el).filter((a) => !["_t", "_ctx", "_ui", "_eventHandlers", "_visible", "mine", "board", "game", "pile", "mine"].includes(a))
        }).enterText({
          prompt: (_, prop) => `Change ${prop}`,
          initial: (el, attr) => String(el[attr])
        }).do((el, attr, value) => {
          if (value === "true") {
            value = true;
          } else if (value === "false") {
            value = false;
          } else if (parseInt(value).toString() === value) {
            value = parseInt(value);
          }
          if (attr !== "mine")
            el[attr] = value;
        })
      };
    }
    play() {
      if (this.phase !== "started")
        throw Error("cannot call play until started");
      return this.flow.play();
    }
    // given a player's move (minimum a selected action), attempts to process
    // it. if not, returns next selection for that player, plus any implied partial
    // moves
    processMove({ player, action: action2, args }) {
      let error;
      this.messages = [];
      return this.inContextOfPlayer(player, () => {
        if (this.godMode && this.godModeActions()[action2]) {
          const godModeAction = this.godModeActions()[action2];
          error = godModeAction._process(...args);
        } else {
          error = this.flow.processMove({
            action: action2,
            player: player.position,
            args
          });
        }
        if (error)
          return error;
      });
    }
    allowedActions(player) {
      const allowedActions = this.godMode ? Object.keys(this.godModeActions()) : [];
      if (this.players.currentPosition && player !== this.players.current())
        return {
          actions: allowedActions,
          skipIfOnlyOne: true,
          expand: true
        };
      return this.inContextOfPlayer(player, () => {
        const actionStep = this.flow.actionNeeded();
        if (actionStep) {
          return {
            step: actionStep.step,
            prompt: actionStep.prompt,
            skipIfOnlyOne: actionStep.skipIfOnlyOne,
            expand: actionStep.expand,
            actions: allowedActions.concat(actionStep.actions?.filter((a) => this.action(a, player).isPossible()) || [])
          };
        }
        return {
          skipIfOnlyOne: true,
          expand: true,
          actions: []
        };
      });
    }
    getResolvedSelections(player, action2, ...args) {
      const allowedActions = this.allowedActions(player);
      if (!allowedActions.actions.length)
        return;
      const { step, prompt, actions, skipIfOnlyOne, expand } = allowedActions;
      if (!action2) {
        let possibleActions = [];
        let resolvedSelections = [];
        for (const action3 of actions) {
          const playerAction = this.action(action3, player);
          let submoves = playerAction._getResolvedSelections();
          if (submoves !== void 0) {
            possibleActions.push(action3);
            if (expand && submoves.length === 0) {
              submoves = [{
                action: action3,
                args: [],
                selection: new Selection({ prompt: playerAction.prompt, value: action3 }).resolve()
              }];
            }
            resolvedSelections = resolvedSelections.concat(submoves);
          }
        }
        if (!possibleActions.length)
          return void 0;
        if (skipIfOnlyOne && possibleActions.length === 1)
          return { step, prompt, moves: resolvedSelections };
        if (expand && resolvedSelections.length)
          return { step, prompt, moves: resolvedSelections };
        return {
          step,
          prompt,
          moves: [{
            action: "/",
            args: [],
            selection: new Selection({ prompt, selectFromChoices: { choices: actions } }).resolve()
          }]
        };
      } else {
        const moves = this.action(action2, player)?._getResolvedSelections(...args);
        if (moves)
          return { step, prompt, moves };
      }
    }
    message(message, ...args) {
      let replacements = {};
      if (args.length) {
        const lastArg = args[args.length - 1];
        if (typeof lastArg === "object" && !(lastArg instanceof Array) && !(lastArg instanceof Player) && !(lastArg instanceof GameElement)) {
          replacements = Object.fromEntries(Object.entries(lastArg).map(([k, v]) => [k, escapeArgument(v)]));
          ;
          args = args.slice(0, -1);
        }
      }
      for (let i = 0; i !== args.length; i++) {
        replacements[i + 1] = escapeArgument(args[i]);
      }
      Object.entries(replacements).forEach(([k, v]) => {
        message = message.replace(new RegExp(`\\$${k}\\b`), v);
      });
      this.messages.push({ body: message });
    }
  };

  // ../boardzilla-core/game/settingComponents.tsx
  var import_react = __toESM(require_react2());
  var toggleSetting = /* @__PURE__ */ __name((label) => ({ name, settings, updateKey }) => /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", null, label, ": "), /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", value: settings && settings[name], onChange: (e) => updateKey(name, e.target.checked) })), "toggleSetting");
  var choiceSetting = /* @__PURE__ */ __name((label, choices) => ({ name, settings, updateKey }) => /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", null, label, ": "), /* @__PURE__ */ import_react.default.createElement("select", { value: settings ? settings[name] || "" : "", onChange: (e) => updateKey(name, e.target.value) }, Object.entries(choices).map(([value, name2]) => /* @__PURE__ */ import_react.default.createElement("option", { key: value, value }, name2)))), "choiceSetting");
  var textSetting = /* @__PURE__ */ __name((label) => ({ name, settings, updateKey }) => /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", null, label, ": "), /* @__PURE__ */ import_react.default.createElement("input", { value: settings ? settings[name] || "" : "", onChange: (e) => updateKey(name, e.target.value) })), "textSetting");
  var numberSetting = /* @__PURE__ */ __name((label, min, max) => ({ name, settings, updateKey }) => /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", null, label, ": "), /* @__PURE__ */ import_react.default.createElement("input", { type: "number", min, max, value: settings ? settings[name] || "" : "", onChange: (e) => updateKey(name, e.target.value) })), "numberSetting");

  // ../boardzilla-core/game/flow/action-step.ts
  var ActionStep = class extends Flow {
    constructor({ name, player, actions, prompt, expand, skipIfOnlyOne }) {
      super({ name });
      this.type = "action";
      this.actions = actions;
      this.prompt = prompt;
      this.expand = expand ?? true;
      this.skipIfOnlyOne = skipIfOnlyOne ?? false;
      this.player = player;
    }
    static {
      __name(this, "ActionStep");
    }
    reset() {
      if (this.player)
        this.game.players.setCurrent(this.player(this.flowStepArgs()));
      this.position = {};
    }
    currentBlock() {
      if (!this.position.action)
        return;
      const step = this.actions[this.position.action];
      if (step)
        return step;
    }
    awaitingAction() {
      if (!this.position.action) {
        return Object.keys(this.actions);
      }
    }
    processMove(move) {
      if (!(move.action in this.actions))
        throw Error(`No action ${move.action} available at this point. Waiting for ${Object.keys(this.actions).join(", ")}`);
      const game = this.game;
      if (game.players.currentPosition && move.player !== game.players.currentPosition) {
        throw Error(`move ${move.action} from player #${move.player} not allowed. player #${game.players.currentPosition} turn`);
      }
      const player = game.players.atPosition(move.player);
      const gameAction = game.action(move.action, player);
      const error = gameAction._process(...move.args);
      if (error) {
        return error;
      } else {
        this.setPosition(move);
        for (const message of gameAction._cfg.messages) {
          if (typeof message === "function") {
            game.message(message(...move.args));
          } else {
            game.message(message, ...move.args, { player });
          }
        }
      }
    }
    toJSON(forPlayer = true) {
      if (!this.position?.action)
        return {};
      return {
        player: this.position.player,
        action: this.position.action,
        args: this.position.args?.map((a) => serializeArg(a, forPlayer))
      };
    }
    fromJSON(position) {
      return {
        player: position.player,
        action: position.action,
        args: position.args?.map((a) => deserializeArg(a, this.game))
      };
    }
    allSteps() {
      return Object.values(this.actions).reduce((a, f) => a.concat(f), []);
    }
    toString() {
      return `step${this.name ? ":" + this.name : ""} (${Object.keys(this.actions).join(", ")})`;
    }
  };

  // ../boardzilla-core/game/flow/while-loop.ts
  var WhileLoop = class extends Flow {
    constructor({ do: block, while: whileCondition }) {
      super({ do: block });
      this.type = "loop";
      this.while = whileCondition;
    }
    static {
      __name(this, "WhileLoop");
    }
    reset() {
      const position = { index: 0 };
      this.setPosition(position);
      if (!this.while(this.flowStepArgs()))
        this.setPosition({ ...position, index: -1 });
    }
    currentBlock() {
      if (this.position.index !== -1)
        return this.block;
    }
    advance() {
      const position = { index: this.position.index + 1 };
      this.setPosition(position);
      if (!this.while(this.flowStepArgs()))
        return this.exit();
      return "OK" /* ok */;
    }
    repeat() {
      this.setPosition(this.position);
      if (!this.while(this.flowStepArgs()))
        return this.exit();
      return "OK" /* ok */;
    }
    exit() {
      this.setPosition({ ...this.position, index: -1 });
      return "COMPLETE" /* complete */;
    }
    allSteps() {
      return this.block;
    }
    toString() {
      return `loop${this.name ? ":" + this.name : ""} (index: ${this.position.index})$`;
    }
  };

  // ../boardzilla-core/game/flow/for-loop.ts
  var ForLoop = class extends Flow {
    constructor({ name, initial, next, do: block, while: whileCondition }) {
      super({ name, do: block });
      this.type = "loop";
      this.initial = initial;
      this.next = next;
      this.while = whileCondition;
    }
    static {
      __name(this, "ForLoop");
    }
    reset() {
      const position = {
        index: 0,
        value: this.initial instanceof Function ? this.initial(this.flowStepArgs()) : this.initial
      };
      this.setPosition(position);
      if (!this.while(position.value))
        this.setPosition({ ...position, index: -1 });
    }
    currentBlock() {
      if (this.position.index !== -1)
        return this.block;
    }
    advance() {
      if (this.position.index === -1)
        return "COMPLETE" /* complete */;
      const position = { ...this.position, index: this.position.index + 1 };
      if (this.next && this.position.value !== void 0)
        position.value = this.next(this.position.value);
      this.setPosition(position);
      if (!this.while(position.value))
        return this.exit();
      return "OK" /* ok */;
    }
    repeat() {
      this.setPosition(this.position);
      if (!this.while(this.position.value))
        return this.exit();
      return "OK" /* ok */;
    }
    exit() {
      this.setPosition({ ...this.position, index: -1 });
      return "COMPLETE" /* complete */;
    }
    toString() {
      return `loop${this.name ? ":" + this.name : ""} (index: ${this.position.index}, value: ${this.position.value})$`;
    }
  };

  // ../boardzilla-core/game/flow/each-player.ts
  var EachPlayer = class extends ForLoop {
    static {
      __name(this, "EachPlayer");
    }
    constructor({ name, startingPlayer, nextPlayer, turns, continueUntil, do: block }) {
      let initial;
      if (startingPlayer) {
        initial = /* @__PURE__ */ __name(() => startingPlayer instanceof Function ? startingPlayer(this.flowStepArgs()) : startingPlayer, "initial");
      } else {
        initial = /* @__PURE__ */ __name(() => {
          this.game.players.setTurnMode();
          return this.game.players.current();
        }, "initial");
      }
      let next = /* @__PURE__ */ __name((player) => nextPlayer ? nextPlayer(player) : this.game.players.after(player), "next");
      super({
        name,
        initial,
        next,
        while: (player) => continueUntil !== void 0 ? !continueUntil(player) : this.position.index < this.game.players.length * (turns || 1),
        do: block
      });
    }
    setPosition(position, sequence, reset = true) {
      super.setPosition(position, sequence, reset);
      if (this.position.value) {
        this.game.players.setCurrent(this.position.value);
        this.game.contextualizeBoardToPlayer(this.position.value);
      }
    }
    toJSON() {
      return {
        index: this.position.index,
        value: this.position.value ? serializeSingleArg(this.position.value) : void 0
      };
    }
    fromJSON(position) {
      return {
        index: position.index,
        value: position.value ? deserializeSingleArg(position.value, this.game) : void 0
      };
    }
    allSteps() {
      return this.block;
    }
    toString() {
      return `each-player${this.name ? ":" + this.name : ""} (player: ${this.position?.value?.position}`;
    }
  };

  // ../boardzilla-core/game/flow/switch-case.ts
  var SwitchCase = class extends Flow {
    constructor({ name, switch: switchExpr, cases, default: def }) {
      super({ name });
      this.type = "switch-case";
      this.switch = switchExpr;
      this.cases = cases;
      this.default = def;
    }
    static {
      __name(this, "SwitchCase");
    }
    reset() {
      const test = typeof this.switch === "function" ? this.switch(this.flowStepArgs()) : this.switch;
      let position = { index: -1, value: test };
      for (let c = 0; c != this.cases.length; c += 1) {
        const ca = this.cases[c];
        if ("test" in ca && ca.test(test) || "eq" in ca && ca.eq === test) {
          position.index = c;
          break;
        }
      }
      if (position.index === -1 && this.default)
        position.default = true;
      this.setPosition(position);
    }
    currentBlock() {
      if (this.position.default)
        return this.default;
      if (this.position.index !== void 0 && this.position.index >= 0) {
        return this.cases[this.position.index].do;
      }
    }
    toJSON(forPlayer = true) {
      return {
        index: this.position.index,
        value: serialize(this.position.value, forPlayer),
        default: !!this.position.default
      };
    }
    fromJSON(position) {
      return {
        index: position.index,
        value: deserialize(position.value, this.game),
        default: position.default
      };
    }
    allSteps() {
      const cases = this.cases.reduce((a, f) => a.concat(f.do ? f.do instanceof Array ? f.do : [f.do] : []), []);
      const defaultExpr = this.default ? this.default instanceof Array ? this.default : [this.default] : [];
      return cases.concat(defaultExpr);
    }
    toString() {
      return `switch-case${this.name ? ":" + this.name : ""} (${this.position.index})`;
    }
  };

  // ../boardzilla-core/game/flow/if-else.ts
  var If = class extends SwitchCase {
    static {
      __name(this, "If");
    }
    constructor({ name, if: test, do: doExpr, else: elseExpr }) {
      super({ name, switch: test, cases: [{ eq: true, do: doExpr }], default: elseExpr });
    }
    toString() {
      return `if-else${this.name ? ":" + this.name : ""} (${this.position.index})`;
    }
  };

  // ../boardzilla-core/game/flow/index.ts
  var playerActions = /* @__PURE__ */ __name((options) => new ActionStep(options), "playerActions");
  var whileLoop = /* @__PURE__ */ __name((options) => new WhileLoop(options), "whileLoop");
  var eachPlayer = /* @__PURE__ */ __name((options) => new EachPlayer(options), "eachPlayer");
  var ifElse = /* @__PURE__ */ __name((options) => new If(options), "ifElse");

  // ../boardzilla-core/game/index.ts
  var boardClasses = /* @__PURE__ */ __name((_) => ({
    GameElement,
    Board,
    Space,
    Piece
  }), "boardClasses");
  var createGame = /* @__PURE__ */ __name(({ playerClass, boardClass, elementClasses, settings, setup, flow, actions, breakpoints, layout }) => (state, options) => {
    console.time("setup");
    const game = new Game();
    let rseed = "";
    if (state && "rseed" in state) {
      rseed = state.rseed;
    } else {
      if (globalThis.window?.sessionStorage) {
        rseed = sessionStorage.getItem("rseed");
        if (!rseed) {
          rseed = String(Math.random());
          sessionStorage.setItem("rseed", rseed);
        }
      }
    }
    game.setRandomSeed(rseed);
    game.setupComponents = settings;
    game.definePlayers(playerClass);
    game.defineBoard(boardClass, elementClasses || []);
    game.defineFlow(flow);
    game.defineActions(actions);
    if (state)
      game.setSettings(state.settings);
    if (state) {
      if (!("board" in state)) {
        game.players.fromJSON(state.players);
        if (options?.start) {
          if (setup)
            setup(game.board);
          game.start();
        }
      } else {
        game.players.fromJSON(state.players);
        if (options?.start) {
          if (setup)
            setup(game.board);
        }
        if (options?.trackMovement)
          game.trackMovement(true);
        game.phase = "started";
        game.setState(state);
      }
    } else {
      game.phase = "new";
    }
    if (options?.start) {
      if (game.phase !== "finished")
        game.play();
      if (options?.currentPlayerPosition)
        game.players.setCurrent(options?.currentPlayerPosition);
    }
    game.board._ui.breakpoints = breakpoints;
    game.board._ui.setupLayout = layout;
    console.timeEnd("setup");
    return game;
  }, "createGame");

  // src/ui/components/elektro-svg.tsx
  var import_react2 = __toESM(require_react());
  var elektro_svg_default = /* @__PURE__ */ __name(({ amount }) => /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100.1",
      x: "0",
      y: "0",
      className: "elektro",
      version: "1.1",
      viewBox: "0 0 100 100.1",
      xmlSpace: "preserve"
    },
    /* @__PURE__ */ import_react2.default.createElement("defs", null, /* @__PURE__ */ import_react2.default.createElement("path", { id: "rect1", d: "M145.075 80.331H336.71V268.461H145.075z" })),
    /* @__PURE__ */ import_react2.default.createElement("g", { fillOpacity: "1", transform: "translate(-40.605)" }, /* @__PURE__ */ import_react2.default.createElement("g", { fill: "#25275e", transform: "translate(40.605)" }, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "#25275e",
        fillOpacity: "1",
        d: "M98.3 63c.1-.5.2-.9.3-1.4.1-.3.1-.6.2-.8l.3-1.2c.1-.4.1-.7.2-1.1.1-.4.1-.7.2-1.1.1-.5.1-.9.2-1.4 0-.3.1-.6.1-.8.2-1.6.2-3.3.2-5 0-1.7-.1-3.4-.2-5 0-.3-.1-.6-.1-.8-.1-.5-.1-1-.2-1.4-.1-.4-.1-.7-.2-1.1-.1-.4-.1-.7-.2-1.1l-.3-1.2c-.1-.3-.1-.6-.2-.8-.1-.5-.2-.9-.3-1.4 0-.1-.1-.2-.1-.3-1.8-6.4-4.8-12.4-8.8-17.5l-.1-.1c-2.5-3.2-5.3-6-8.5-8.5l-.1-.1c-5.1-4-11-7-17.5-8.8-.1 0-.2-.1-.3-.1-.5-.1-.9-.2-1.4-.3-.3-.1-.6-.1-.8-.2l-1.2-.3c-.4-.1-.7-.1-1.1-.2-.4-.1-.7-.1-1.1-.2-.5-.1-.9-.1-1.4-.2-.3 0-.6-.1-.8-.1C53.4.1 51.7 0 50 0c-1.7 0-3.4.1-5 .2-.3 0-.6.1-.8.1-.5.1-1 .1-1.4.2-.4.1-.7.1-1.1.2-.4.1-.7.1-1.1.2l-1.2.3c-.3.1-.6.1-.8.2-.6.1-1.1.2-1.6.3-.1 0-.2.1-.3.1-2.5.7-4.9 1.6-7.3 2.6-3.7 1.7-7.1 3.7-10.2 6.2l-.1.1c-3.2 2.5-6 5.3-8.5 8.5l-.1.1c-.4.5-.8 1-1.2 1.6-3.4 4.8-6 10.1-7.6 15.9 0 .1-.1.2-.1.3-.1.5-.2.9-.3 1.4-.1.3-.1.6-.2.8l-.3 1.2c-.1.4-.1.7-.2 1.1-.1.4-.1.7-.2 1.1-.1.5-.1.9-.2 1.4 0 .3-.1.6-.1.8 0 1.7-.1 3.4-.1 5.1 0 1.7.1 3.4.2 5 0 .3.1.6.1.8.1.5.1 1 .2 1.4.1.4.1.7.2 1.1.1.4.1.7.2 1.1l.3 1.2c.1.3.1.6.2.8.1.6.2 1.1.3 1.6 0 .1.1.2.1.3.7 2.5 1.6 4.9 2.6 7.3 1.7 3.7 3.7 7.1 6.2 10.2l.1.1c2.5 3.2 5.3 6 8.5 8.5l.1.1c3.1 2.5 6.6 4.5 10.2 6.2 2.3 1.1 4.8 1.9 7.3 2.6.1 0 .2.1.3.1.5.1.9.2 1.4.3.3.1.6.1.8.2l1.2.3c.4.1.7.1 1.1.2.4.1.7.1 1.1.2.5.1.9.1 1.4.2.3 0 .6.1.8.1 1.6.2 3.3.2 5 .2 1.7 0 3.4-.1 5-.2.3 0 .6-.1.8-.1.5-.1 1-.1 1.4-.2.4-.1.7-.1 1.1-.2.4-.1.7-.1 1.1-.2l1.2-.3c.3-.1.6-.1.8-.2.5-.1.9-.2 1.4-.3.1 0 .2-.1.3-.1 6.5-1.8 12.4-4.8 17.5-8.8l.1-.1c3.2-2.5 6-5.3 8.5-8.5l.1-.1c2.5-3.1 4.5-6.6 6.2-10.2 1.1-2.3 1.9-4.8 2.6-7.3.2-.1.3-.2.3-.3zm.7-13c0 1.7-.1 3.4-.3 5h-9.1c.2-1.6.3-3.3.3-5 0-1.7-.1-3.4-.3-5h9.1c.2 1.6.3 3.3.3 5zM65.5 86.9c3.1-1.3 6-3 8.7-5l4.5 7.8c-2.7 2-5.6 3.6-8.7 5zM50 89c-21.5 0-39-17.5-39-39s17.5-39 39-39 39 17.5 39 39-17.5 39-39 39zM70 5.3c3.1 1.4 6 3.1 8.7 5l-4.5 7.8c-2.6-2-5.6-3.7-8.7-5zm19.7 16c2 2.7 3.6 5.6 5 8.7l-7.8 4.5c-1.3-3.1-3-6-5-8.7zM50 1c1.7 0 3.4.1 5 .3v9.1c-1.6-.2-3.3-.3-5-.3-1.7 0-3.4.1-5 .3V1.3c1.6-.2 3.3-.3 5-.3zM34.5 13.1c-3.1 1.3-6 3-8.7 5l-4.5-7.8c2.7-2 5.6-3.6 8.7-5zM18.1 25.8c-2 2.6-3.7 5.5-5 8.7L5.3 30c1.4-3.1 3.1-6 5-8.7zM1 50c0-1.7.1-3.4.3-5h9.1c-.2 1.6-.3 3.3-.3 5 0 1.7.1 3.4.3 5H1.3c-.2-1.6-.3-3.3-.3-5zm12.1 15.5c1.3 3.1 3 6 5 8.7l-7.8 4.5c-2-2.7-3.6-5.6-5-8.7zm8.2 24.2l4.5-7.8c2.6 2 5.6 3.7 8.7 5L30 94.7c-3.1-1.4-6-3.1-8.7-5zM50 99c-1.7 0-3.4-.1-5-.3v-9.1c1.6.2 3.3.3 5 .3 1.7 0 3.4-.1 5-.3v9.1c-1.6.2-3.3.3-5 .3zm39.7-20.3l-7.8-4.5c2-2.6 3.7-5.6 5-8.7l7.8 4.5c-1.4 3.1-3.1 6-5 8.7z"
      }
    )), /* @__PURE__ */ import_react2.default.createElement("g", { transform: "matrix(.97512 0 0 .97512 41.7 -.007)" }, /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "15.067",
        cy: "51.034",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "28.515",
        cy: "33.04",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(18)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "35.744",
        cy: "11.771",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(36)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "36.047",
        cy: "-10.69",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(54)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "29.394",
        cy: "-32.146",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(72)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "16.249",
        cy: "-50.454",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(90)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-1.723",
        cy: "-63.846",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(108)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-22.953",
        cy: "-71.029",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(126)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-45.364",
        cy: "-71.299",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(144)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-66.762",
        cy: "-64.631",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(162)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-85.239",
        cy: "-51.636",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "scale(-1)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-98.609",
        cy: "-33.608",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-162)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-105.753",
        cy: "-12.331",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-144)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-105.973",
        cy: "10.112",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-126)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-99.247",
        cy: "31.524",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-108)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-86.421",
        cy: "49.852",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-90)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-68.371",
        cy: "63.278",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-72)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-47.056",
        cy: "70.469",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-54)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-24.562",
        cy: "70.721",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-36)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "circle",
      {
        cx: "-3.091",
        cy: "64.01",
        r: "2.862",
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeDasharray: "none",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        transform: "rotate(-18)"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "none",
        fillRule: "evenodd",
        stroke: "#25275e",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "2.217",
        d: "M79.722 51.354a29.559 29.559 0 01-29.559 29.558 29.559 29.559 0 01-29.558-29.558 29.559 29.559 0 0129.558-29.56 29.559 29.559 0 0129.559 29.56z"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "text",
      {
        x: "24.32",
        y: "0",
        textAnchor: "middle",
        fill: "#000",
        stroke: "none",
        strokeWidth: "10.56",
        display: "inline",
        fontFamily: "Din Condensed Web",
        fontSize: "58.083",
        fontStretch: "condensed",
        fontWeight: "bold",
        transform: "matrix(.38041 0 0 .38504 -41.963 -5.243)",
        xmlSpace: "preserve"
      },
      /* @__PURE__ */ import_react2.default.createElement("tspan", { x: "242", y: "195.032" }, /* @__PURE__ */ import_react2.default.createElement("tspan", { fontSize: "134.956" }, amount))
    )))
  ), "default");

  // src/ui/components/lightning-svg.tsx
  var import_react3 = __toESM(require_react());
  var lightning_svg_default = /* @__PURE__ */ __name(({ amount }) => /* @__PURE__ */ import_react3.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "539.335",
      height: "684.46",
      className: "lightning",
      version: "1.1",
      viewBox: "0 0 142.699 181.097"
    },
    /* @__PURE__ */ import_react3.default.createElement("defs", null, /* @__PURE__ */ import_react3.default.createElement("path", { id: "rect1", d: "M145.075 80.331H336.71V268.461H145.075z" })),
    /* @__PURE__ */ import_react3.default.createElement("g", { fillOpacity: "1", transform: "translate(-37.764 -54.286)" }, /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        fill: "#f1ff20",
        stroke: "#000",
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: "1",
        strokeWidth: "5.08",
        d: "M62.21 70.893l-21.906 36.983 21.225-5.59-11.366 41.934 20.771-6.662-11.984 37.931 36.777-9.364-17.65 43.503 18.607-7.75-6.946 17.757 16.564-5.506-6.351 18.714 49.715-48.925-32.237 8.73 52.801-72.726-25.639 8.313 27.454-46.327-15.284 3.527 21.163-28.61z"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "text",
      {
        x: "24.32",
        y: "0",
        fill: "#000",
        textAnchor: "middle",
        stroke: "none",
        strokeWidth: "10.56",
        display: "inline",
        fontFamily: "Din Condensed Web",
        fontSize: "58.083",
        fontStretch: "condensed",
        fontWeight: "bold",
        transform: "matrix(.68696 0 0 .69532 -61.273 15.655)",
        xmlSpace: "preserve",
        style: {
          textAlign: "center",
          whiteSpace: "pre"
        }
      },
      /* @__PURE__ */ import_react3.default.createElement("tspan", { x: "242", y: "195.032" }, /* @__PURE__ */ import_react3.default.createElement("tspan", { fontSize: "134.956" }, amount))
    ))
  ), "default");

  // src/ui/assets/gavel.svg
  var gavel_default = "./assets/gavel-GPRUFX2F.svg";

  // src/ui/assets/germany2.svg
  var germany2_default = "./assets/germany2-PYIVH6AU.svg";

  // src/ui/components/city-svg.tsx
  var import_react4 = __toESM(require_react());
  var city_svg_default = /* @__PURE__ */ __name(({ name }) => /* @__PURE__ */ import_react4.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 737.302 682.142",
      xmlSpace: "preserve"
    },
    /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M-32.542 689.898H640V820.067H-32.542z" }), /* @__PURE__ */ import_react4.default.createElement("clipPath", { id: "clipPath40", clipPathUnits: "userSpaceOnUse" }, /* @__PURE__ */ import_react4.default.createElement(
      "circle",
      {
        cx: "251.746",
        cy: "208.356",
        r: "304.065",
        fill: "#000",
        fillOpacity: "1",
        stroke: "none",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "16.32"
      }
    ))),
    /* @__PURE__ */ import_react4.default.createElement(
      "circle",
      {
        cx: "358.725",
        cy: "312.244",
        r: "304.065",
        fill: "white",
        stroke: "#000",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "16.358"
      }
    ),
    /* @__PURE__ */ import_react4.default.createElement("g", { clipPath: "url(#clipPath40)", transform: "translate(106.98 103.888)" }, /* @__PURE__ */ import_react4.default.createElement("g", null, /* @__PURE__ */ import_react4.default.createElement("g", null, /* @__PURE__ */ import_react4.default.createElement("path", { d: "M493.933 92.867h-17.067v-25.6c0-5.12-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533v25.6h-17.067c-5.12 0-8.533 3.413-8.533 8.533v136.533h-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533H357.4v-8.533c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v8.533H331.8c-5.12 0-8.533 3.413-8.533 8.533v25.6h-25.6V67.267c0-5.12-3.413-8.533-8.533-8.533h-25.6v-51.2C263.533 2.413 260.12-1 255-1H152.6c-5.12 0-8.533 3.413-8.533 8.533v51.2h-25.6c-5.12 0-8.533 3.413-8.533 8.533v221.867H92.867v-25.6c0-5.12-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533v25.6h-8.533c-5.12 0-8.533 3.413-8.533 8.533v204.8c0 5.12 3.413 8.533 8.533 8.533H493.935c5.12 0 8.533-3.413 8.533-8.533V101.4c-.001-5.12-3.415-8.533-8.535-8.533zM425.667 75.8H459.8v17.067h-34.133zm-85.334 145.067H357.4v17.067h-17.067zM127 75.8h25.6c5.12 0 8.533-3.413 8.533-8.533v-51.2h85.333v51.2c0 5.12 3.413 8.533 8.533 8.533h25.6v162.133h-17.067V101.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v136.533H229.4V101.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v136.533h-17.067V101.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.534 3.413-8.534 8.533v187.734h-17.067V101.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v187.733H127zM41.667 272.067H75.8v17.067H41.667zM24.6 306.2H178.2v17.067h-59.733c-5.12 0-8.533 3.413-8.533 8.533v162.133H24.6zM127 340.333h51.2V357.4h-25.6c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h25.6v17.067h-25.6c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h25.6v17.067h-25.6c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h25.6V459.8h-25.6c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h25.6v17.067H127zm68.267-8.533V255H383v238.933h-17.067V280.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333H331.8V280.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333h-17.067V280.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333h-17.067V280.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333H229.4V280.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333h-17.067zM485.4 493.933h-85.333v-384H485.4z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 331.8c-5.12 0-8.533 3.413-8.533 8.533V357.4c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 383c-5.12 0-8.533 3.413-8.533 8.533V408.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 434.2c-5.12 0-8.533 3.413-8.533 8.533V459.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 280.6c-5.12 0-8.533 3.413-8.533 8.533V306.2c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 127c-5.12 0-8.533 3.413-8.533 8.533V152.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 178.2c-5.12 0-8.533 3.413-8.533 8.533V203.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M425.667 229.4c-5.12 0-8.533 3.413-8.533 8.533V255c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 331.8c-5.12 0-8.533 3.413-8.533 8.533V357.4c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 434.2c-5.12 0-8.533 3.413-8.533 8.533V459.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 178.2c-5.12 0-8.533 3.413-8.533 8.533V203.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 127c-5.12 0-8.533 3.413-8.533 8.533V152.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 280.6c-5.12 0-8.533 3.413-8.533 8.533V306.2c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 383c-5.12 0-8.533 3.413-8.533 8.533V408.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M459.8 229.4c-5.12 0-8.533 3.413-8.533 8.533V255c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M50.2 425.667c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V434.2c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M50.2 323.267c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V331.8c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M50.2 374.467c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V383c0-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M84.333 374.467c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V383c.001-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M84.333 425.667c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V434.2c.001-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M84.333 323.267c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533V331.8c.001-5.12-3.413-8.533-8.533-8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M186.733 75.8c5.12 0 8.533-3.413 8.533-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v25.6c0 5.12 3.413 8.533 8.533 8.533z" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M220.867 75.8c5.12 0 8.533-3.413 8.533-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v25.6c-.001 5.12 3.413 8.533 8.533 8.533z" })))),
    /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        fill: "#fcfcfc",
        fillOpacity: "1",
        stroke: "#000",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "19.2",
        d: "M9.6 494.644H727.702V672.542H9.6z"
      }
    ),
    /* @__PURE__ */ import_react4.default.createElement(
      "text",
      {
        xmlSpace: "preserve",
        style: {
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal"
        },
        x: "76.242",
        y: "610.659",
        fill: "#000",
        fillOpacity: "1",
        stroke: "none",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "249.395",
        fontFamily: "Din Condensed Web",
        fontSize: "155.873",
        fontStretch: "condensed",
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "bold",
        transform: "scale(.95786 1.044)",
        textAnchor: "middle"
      },
      /* @__PURE__ */ import_react4.default.createElement("tspan", { x: "385", y: "610.659", strokeWidth: "249.395" }, name)
    )
  ), "default");

  // src/ui/components/building-svg.tsx
  var import_react5 = __toESM(require_react());
  var building_svg_default = /* @__PURE__ */ __name((building) => /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      version: "1.1",
      viewBox: "0 0 431.37 326.937",
      className: building.board.firstN(building.player?.cities || 0, Building, { player: building.player }).includes(building) ? "powered" : ""
    },
    /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        fill: "#fff",
        fillOpacity: "1",
        stroke: "#000",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "10.56",
        d: "M6.307 249.454l-1.006-44.98 16.422-45.783 23.35-2.031 2.03-38.163 53.342-15.229-.701-48.172L218.058 5.714l115.994 47.533-.296 51.299 52.702 10.757 2.67 39.44 23.349 1.393 13.246 47.253.339 45.182-208.536 72.78z"
      }
    ),
    /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        fill: building.player?.color,
        d: "M116.751 277.589l-98.735-34.174-.946-37.722 11.235-40.255 26.75-1.297 1.309-39.106 54.94-14.18-.058-49.617 105.809-44.795 105.428 44.858.322 49.554 54.94 14.18 1.31 39.106 26.75 1.297 11.25 40.434-1.482 37.91-199.018 66.585zm86.413-93.39l-77.11-1.053.366 39.575 72.885 10.625 3.75.097zm56.64 45.711l3.25-.558v-44.96l-31.5.551-.535 48.5h2.525zm-203.25-20.967l-31-4v14.962l31.556 8.345zm243 15.186l8-1.191.543-39.557-24.542.562-.047 41.238 4.271.717 11.776-1.769zm94.916-1.292l.317-15.891-12.232 1.01-.586 16.773zM110.735 182.72l-18.726-.276.292 34.989 19.254 2.511zm257.07 31.25l-.271-17.78-44.714 4.623-.099 18.964zm44.472 4.652l.278-14.678-11.36 1.545-.14 15.234zM81.102 182.706l-15.201-.509-.346 31.746 16.028 2.054zm-24.547-.763l-26.177-.804-4.573 15.386 30.77 3.29zm337.29 15.86l.189-15.86h-11.48l-.08 17.179zm16.692-.898l-3.784-15.223-5.698.021.654 15.06zm-43.064-11.069l.332-17.882-44.5-1.219-.077 22.337 44.245-3.236zM80.068 137.208l-15.013 2.44v31.88l15.5-.585zm30.566 32.477l-.027-36.86-18.052 2.157-.546 35.461zm92.055-3.113l.366-49.129-77 12.159.736 39.244zm105.137-37.136l-24.011-3.153-.26 41.66 20 1.09 4-.09zm-45.271-7.493l-31.536-4.5.536 48.5 31 1zm105.938 17.5l-44.968-6.627-.474 21.418 46.004 3.21zM202.173 97.87l-.188-47.97-75.93 25.824.677 39.063zm105.923-22.137L284.305 68.7l.273 41.39 23.016 3.657zm-45.041-16.02l-30.956-9.797.706 48.264 30.25 6.263z"
      }
    )
  ), "default");

  // src/ui/assets/coal.svg
  var coal_default = "./assets/coal-W2XYPMMW.svg";

  // src/ui/assets/oil.svg
  var oil_default = "./assets/oil-RTOX7JRE.svg";

  // src/ui/assets/garbage.svg
  var garbage_default = "./assets/garbage-N2YKN4EO.svg";

  // src/ui/assets/uranium.svg
  var uranium_default = "./assets/uranium-RFWEI4N6.svg";

  // src/ui/components/building-outline-svg.tsx
  var import_react6 = __toESM(require_react());
  var building_outline_svg_default = /* @__PURE__ */ __name(({ number }) => /* @__PURE__ */ import_react6.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      version: "1.1",
      viewBox: "0 0 431.376 326.937"
    },
    /* @__PURE__ */ import_react6.default.createElement(
      "path",
      {
        fill: "#fff",
        fillOpacity: "1",
        stroke: "#000",
        strokeDasharray: "none",
        strokeOpacity: "1",
        strokeWidth: "10.56",
        d: "M6.307 249.454l-1.006-44.98 16.422-45.783 23.35-2.031 2.03-38.163 53.342-15.229-.701-48.172L218.058 5.714l115.994 47.533-.296 51.299 52.702 10.757 2.67 39.44 23.349 1.393 13.246 47.253.339 45.182-208.536 72.78z"
      }
    ),
    /* @__PURE__ */ import_react6.default.createElement(
      "text",
      {
        x: "24.32",
        y: "0",
        fill: "#000",
        fillOpacity: "1",
        stroke: "none",
        strokeWidth: "10.56",
        display: "inline",
        fontFamily: "Din Condensed Web",
        fontSize: "58.083",
        fontStretch: "condensed",
        fontWeight: "bold",
        transform: "matrix(2 0 0 2 -217.615 -149.722)",
        xmlSpace: "preserve",
        style: {
          textAlign: "center",
          whiteSpace: "pre"
        }
      },
      /* @__PURE__ */ import_react6.default.createElement("tspan", { x: "188.452", y: "214.25" }, /* @__PURE__ */ import_react6.default.createElement("tspan", { display: "inline", fontSize: "160" }, number))
    )
  ), "default");

  // src/ui/assets/coal-outline.svg
  var coal_outline_default = "./assets/coal-outline-ZJOE3CDE.svg";

  // src/ui/assets/oil-outline.svg
  var oil_outline_default = "./assets/oil-outline-WFWSP2JO.svg";

  // src/ui/assets/garbage-outline.svg
  var garbage_outline_default = "./assets/garbage-outline-MVW3VFQD.svg";

  // src/ui/assets/uranium-outline.svg
  var uranium_outline_default = "./assets/uranium-outline-PTIAH4I3.svg";

  // src/ui/assets/hybrid-outline.svg
  var hybrid_outline_default = "./assets/hybrid-outline-YF6RFO75.svg";

  // src/ui/assets/arrow.svg
  var arrow_default = "./assets/arrow-2UMRVL3J.svg";

  // src/ui/assets/powerplant.svg
  var powerplant_default = "./assets/powerplant-L3AYLGYJ.svg";

  // src/ui/components/power-label-svg.tsx
  var import_react7 = __toESM(require_react());
  var power_label_svg_default = /* @__PURE__ */ __name((cost) => {
    const color = cost >= 10 ? "#fbff89" : "white";
    if (cost === 0)
      return null;
    return /* @__PURE__ */ import_react7.default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        viewBox: "0 0 139.729 139.729"
      },
      /* @__PURE__ */ import_react7.default.createElement("defs", null, /* @__PURE__ */ import_react7.default.createElement("path", { id: "rect1", d: "M145.075 80.331H336.71V268.461H145.075z" })),
      /* @__PURE__ */ import_react7.default.createElement("g", { fillOpacity: "1", transform: "translate(-63.678 -67.174)" }, /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          stroke: "#000",
          strokeLinejoin: "round",
          strokeWidth: "3",
          d: "M188.466 137.064a54.91 54.91 0 01-54.91 54.91 54.91 54.91 0 01-54.91-54.91 54.91 54.91 0 0154.91-54.91 54.91 54.91 0 0154.91 54.91z"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          d: "M78.949 130.176l-13.77 2.797v7.531l13.555 3.443"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "86.067",
          cy: "136.631",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "121.931",
          cy: "88.68",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(18)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "141.222",
          cy: "31.993",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(36)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "142.051",
          cy: "-27.88",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(54)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "124.339",
          cy: "-85.08",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(72)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          d: "M140.405 82.445l-2.797-13.771h-7.53l-3.444 13.555"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "89.563",
          cy: "-133.95",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(90)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "41.641",
          cy: "-169.738",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(108)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-14.994",
          cy: "-188.966",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(126)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-74.799",
          cy: "-189.752",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(144)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-131.919",
          cy: "-172.019",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(162)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          d: "M188.137 143.9l13.77-2.796v-7.531l-13.555-3.443"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-181.019",
          cy: "-137.446",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "scale(-1)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-216.777",
          cy: "-89.449",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-162)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-235.953",
          cy: "-32.751",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-144)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-236.67",
          cy: "27.098",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-126)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-218.858",
          cy: "84.239",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-108)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          d: "M126.68 191.632l2.798 13.771h7.53l3.443-13.555"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-184.514",
          cy: "133.135",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-90)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-136.487",
          cy: "168.97",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-72)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-79.738",
          cy: "188.209",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-54)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "-19.82",
          cy: "188.97",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-36)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "circle",
        {
          cx: "37.4",
          cy: "171.178",
          r: "3.873",
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeDasharray: "none",
          strokeLinejoin: "round",
          strokeOpacity: "1",
          strokeWidth: "3",
          transform: "rotate(-18)"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          stroke: "#000",
          strokeLinejoin: "round",
          strokeWidth: "3",
          d: "M173.553 137.064a39.996 39.996 0 01-39.997 39.996 39.996 39.996 0 01-39.996-39.996 39.996 39.996 0 0139.996-39.997 39.996 39.996 0 0139.997 39.997z"
        }
      ), /* @__PURE__ */ import_react7.default.createElement(
        "text",
        {
          x: "24.32",
          y: "0",
          textAnchor: "middle",
          fill: "#000",
          stroke: "none",
          strokeWidth: "10.56",
          display: "inline",
          fontFamily: "Din Condensed Web",
          fontSize: "58.083",
          fontStretch: "condensed",
          fontWeight: "bold",
          transform: "matrix(.51475 0 0 .521 8.898 60.482)",
          xmlSpace: "preserve",
          style: {
            textAlign: "center",
            whiteSpace: "pre"
          }
        },
        /* @__PURE__ */ import_react7.default.createElement("tspan", { x: "240.688", y: "195.032" }, /* @__PURE__ */ import_react7.default.createElement("tspan", { fontSize: "134.956" }, cost))
      ))
    );
  }, "default");

  // src/game/cards.ts
  var cards = {
    "oil-03": {
      cost: 3,
      resourceType: "oil",
      resources: 2,
      power: 1
    },
    "oil-07": {
      cost: 7,
      resourceType: "oil",
      resources: 3,
      power: 2
    },
    "oil-09": {
      cost: 9,
      resourceType: "oil",
      resources: 1,
      power: 1
    },
    "oil-16": {
      cost: 16,
      resourceType: "oil",
      resources: 2,
      power: 3
    },
    "oil-26": {
      cost: 26,
      resourceType: "oil",
      resources: 2,
      power: 5
    },
    "oil-32": {
      cost: 32,
      resourceType: "oil",
      resources: 3,
      power: 6
    },
    "oil-35": {
      cost: 35,
      resourceType: "oil",
      resources: 1,
      power: 5
    },
    "oil-40": {
      cost: 40,
      resourceType: "oil",
      resources: 2,
      power: 6
    },
    "clean-50": {
      cost: 50,
      resourceType: "clean",
      resources: 0,
      power: 6
    },
    "coal-04": {
      cost: 4,
      resourceType: "coal",
      resources: 2,
      power: 1
    },
    "coal-08": {
      cost: 8,
      resourceType: "coal",
      resources: 3,
      power: 2
    },
    "coal-10": {
      cost: 10,
      resourceType: "coal",
      resources: 2,
      power: 2
    },
    "coal-15": {
      cost: 15,
      resourceType: "coal",
      resources: 2,
      power: 3
    },
    "coal-20": {
      cost: 20,
      resourceType: "coal",
      resources: 3,
      power: 5
    },
    "coal-25": {
      cost: 25,
      resourceType: "coal",
      resources: 2,
      power: 5
    },
    "coal-31": {
      cost: 31,
      resourceType: "coal",
      resources: 3,
      power: 6
    },
    "coal-36": {
      cost: 36,
      resourceType: "coal",
      resources: 3,
      power: 7
    },
    "coal-42": {
      cost: 42,
      resourceType: "coal",
      resources: 2,
      power: 6
    },
    "garbage-06": {
      cost: 6,
      resourceType: "garbage",
      resources: 1,
      power: 1
    },
    "garbage-14": {
      cost: 14,
      resourceType: "garbage",
      resources: 2,
      power: 2
    },
    "garbage-19": {
      cost: 19,
      resourceType: "garbage",
      resources: 2,
      power: 3
    },
    "garbage-24": {
      cost: 24,
      resourceType: "garbage",
      resources: 2,
      power: 4
    },
    "garbage-30": {
      cost: 30,
      resourceType: "garbage",
      resources: 3,
      power: 6
    },
    "garbage-38": {
      cost: 38,
      resourceType: "garbage",
      resources: 3,
      power: 7
    },
    "hybrid-05": {
      cost: 5,
      resourceType: "hybrid",
      resources: 2,
      power: 1
    },
    "hybrid-12": {
      cost: 12,
      resourceType: "hybrid",
      resources: 2,
      power: 2
    },
    "hybrid-29": {
      cost: 29,
      resourceType: "hybrid",
      resources: 1,
      power: 4
    },
    "hybrid-46": {
      cost: 46,
      resourceType: "hybrid",
      resources: 3,
      power: 7
    },
    "hybrid-21": {
      cost: 21,
      resourceType: "hybrid",
      resources: 2,
      power: 4
    },
    "nuclear-11": {
      cost: 11,
      resourceType: "uranium",
      resources: 1,
      power: 2
    },
    "nuclear-17": {
      cost: 17,
      resourceType: "uranium",
      resources: 1,
      power: 2
    },
    "nuclear-23": {
      cost: 23,
      resourceType: "uranium",
      resources: 1,
      power: 3
    },
    "nuclear-28": {
      cost: 28,
      resourceType: "uranium",
      resources: 1,
      power: 4
    },
    "nuclear-34": {
      cost: 34,
      resourceType: "uranium",
      resources: 1,
      power: 5
    },
    "nuclear-39": {
      cost: 39,
      resourceType: "uranium",
      resources: 1,
      power: 6
    },
    "step-3": {
      cost: 99
    },
    "wind-13": {
      cost: 13,
      resourceType: "clean",
      resources: 0,
      power: 1
    },
    "wind-18": {
      cost: 18,
      resourceType: "clean",
      resources: 0,
      power: 2
    },
    "wind-22": {
      cost: 22,
      resourceType: "clean",
      resources: 0,
      power: 2
    },
    "wind-27": {
      cost: 27,
      resourceType: "clean",
      resources: 0,
      power: 3
    },
    "wind-33": {
      cost: 33,
      resourceType: "clean",
      resources: 0,
      power: 4
    },
    "wind-37": {
      cost: 37,
      resourceType: "clean",
      resources: 0,
      power: 4
    },
    "wind-44": {
      cost: 44,
      resourceType: "clean",
      resources: 0,
      power: 5
    }
  };

  // src/game/index.tsx
  var PowergridPlayer = class extends Player {
    constructor() {
      super(...arguments);
      this.score = 0;
      this.elektro = 50;
      this.cities = 0;
      this.passedThisAuction = false;
      this.havePassedAuctionPhase = false;
    }
    static {
      __name(this, "PowergridPlayer");
    }
  };
  var {
    Board: Board3,
    Space: Space2,
    Piece: Piece2
  } = boardClasses(PowergridPlayer);
  var resourceTypes = ["coal", "oil", "garbage", "uranium"];
  var PowergridBoard = class extends Board3 {
    constructor() {
      super(...arguments);
      this.step = 1;
      this.turn = 0;
      this.noMoreUranium = false;
    }
    static {
      __name(this, "PowergridBoard");
    }
    checkStepTriggers() {
      let advanceToStep2 = false;
      let advanceToStep3 = false;
      const powerplants = this.first("powerplants");
      const step2Score = this.players.length < 6 ? 7 : 6;
      if (this.step === 1 && this.players.max("score") >= step2Score)
        advanceToStep2 = true;
      if (powerplants.has("step-3"))
        advanceToStep3 = true;
      if (advanceToStep2) {
        this.message("Now in step 2");
        this.step = 2;
        powerplants.first(Card)?.remove();
        this.first("deck").top(Card)?.putInto(powerplants);
      }
      if (advanceToStep3) {
        this.message("Now in step 3");
        this.step = 3;
      }
    }
    sortPlayers(direction) {
      this.players.sortBy([
        "score",
        (player) => this.all(Card, { player }).max("cost") || 0
      ], direction);
    }
    applyMinimumRule() {
      const powerplants = this.first("powerplants");
      for (const card of powerplants.all(Card)) {
        if (card.cost <= this.players.max("score")) {
          card.remove();
          this.first("deck").top(Card)?.putInto(powerplants);
        }
      }
    }
    refillResources(resource, amount) {
      if (resource === "uranium" && this.noMoreUranium)
        return;
      for (const space of this.lastN(amount, ResourceSpace, { resource, empty: true })) {
        this.pile.first(Resource, resource)?.putInto(space);
      }
      ;
    }
  };
  var Card = class extends Piece2 {
    constructor() {
      super(...arguments);
      this.auction = false;
      this.discount = false;
      this.powered = false;
      this.purchaseCost = () => this.discount ? 1 : this.cost;
    }
    static {
      __name(this, "Card");
    }
    spaceFor(resource) {
      if (this.resourceType === resource || this.resourceType === "hybrid" && ["oil", "coal"].includes(resource)) {
        return this.resources * 2 - this.all(Resource).length;
      }
      return 0;
    }
    resourcesAvailableToPower() {
      const availableResources = this.all(Resource);
      if (availableResources.length >= this.resources)
        return availableResources;
    }
  };
  Card.hide("name", "cost", "resourceType", "resources", "power");
  var Resource = class extends Piece2 {
    static {
      __name(this, "Resource");
    }
  };
  var ResourceSpace = class extends Space2 {
    static {
      __name(this, "ResourceSpace");
    }
  };
  var City = class _City extends Space2 {
    constructor() {
      super(...arguments);
      this.owners = [];
    }
    static {
      __name(this, "City");
    }
    costToBuild() {
      const closestCity = this.closest(_City, (city) => !!city.first(Building, { mine: true }));
      return [10, 15, 20][this.owners.length] + (closestCity ? this.distanceTo(closestCity) : 0);
    }
    canBuild() {
      return this.owners.length < this.board.step;
    }
    canBuildFor(elektro) {
      return this.canBuild() && elektro >= this.costToBuild();
    }
  };
  var PlayerMat = class extends Space2 {
    static {
      __name(this, "PlayerMat");
    }
  };
  var Building = class extends Piece2 {
    static {
      __name(this, "Building");
    }
  };
  var refill = {
    coal: [
      [3, 4, 3],
      [3, 4, 3],
      [4, 5, 3],
      [5, 6, 4],
      [5, 7, 5],
      [7, 9, 6]
    ],
    oil: [
      [2, 2, 4],
      [2, 2, 4],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 7]
    ],
    garbage: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [2, 3, 4],
      [3, 3, 5],
      [3, 5, 6]
    ],
    uranium: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 2, 2],
      [2, 3, 2],
      [2, 3, 3]
    ]
  };
  var income = [10, 22, 33, 44, 54, 64, 73, 82, 90, 98, 105, 112, 118, 124, 129, 134, 138, 142, 145, 148, 150];
  var victory = [18, 17, 17, 15, 14];
  var game_default = createGame({
    playerClass: PowergridPlayer,
    boardClass: PowergridBoard,
    elementClasses: [
      Card,
      Resource,
      ResourceSpace,
      City,
      Building,
      PlayerMat
    ],
    settings: {
      a: textSetting("a value"),
      d: choiceSetting("pick one", { a: "type a", b: "type b" }),
      b: numberSetting("a number", 1, 5),
      c: toggleSetting("a toggle")
    },
    setup: (board) => {
      const map = board.create(Space2, "germany");
      const cuxhaven = map.create(City, "Cuxhaven", { zone: "green" });
      const bremen = map.create(City, "Bremen", { zone: "green" }).connectTo(cuxhaven, 8);
      const hannover = map.create(City, "Hannover", { zone: "green" }).connectTo(bremen, 10);
      const hamburg = map.create(City, "Hamburg", { zone: "green" }).connectTo(cuxhaven, 11).connectTo(bremen, 11).connectTo(hannover, 17);
      const kiel = map.create(City, "Kiel", { zone: "green" }).connectTo(hamburg, 8);
      map.create(City, "Flensburg", { zone: "green" }).connectTo(kiel, 4);
      const wilhelmshaven = map.create(City, "Wilhelmshaven", { zone: "green" }).connectTo(bremen, 11);
      const osnabruck = map.create(City, "Osnabruck", { zone: "red" }).connectTo(wilhelmshaven, 14).connectTo(bremen, 11).connectTo(hannover, 16);
      const munster = map.create(City, "M\xFCnster", { zone: "red" }).connectTo(osnabruck, 7);
      const essen = map.create(City, "Essen", { zone: "red" }).connectTo(munster, 6);
      map.create(City, "Duisberg", { zone: "red" }).connectTo(essen, 0);
      const dusseldorf = map.create(City, "Dusseldorf", { zone: "red" }).connectTo(essen, 2);
      const dortmund = map.create(City, "Dortmund", { zone: "red" }).connectTo(essen, 4).connectTo(munster, 2);
      const kassel = map.create(City, "Kassel", { zone: "red" }).connectTo(hannover, 15).connectTo(osnabruck, 20).connectTo(dortmund, 18);
      const lubeck = map.create(City, "L\xFCbeck", { zone: "brown" }).connectTo(kiel, 4).connectTo(hamburg, 6);
      const schwerin = map.create(City, "Schwerin", { zone: "brown" }).connectTo(lubeck, 6).connectTo(hamburg, 8).connectTo(hannover, 19);
      const rostock = map.create(City, "Rostock", { zone: "brown" }).connectTo(schwerin, 6);
      const torgelow = map.create(City, "Torgelow", { zone: "brown" }).connectTo(rostock, 19).connectTo(schwerin, 19);
      const berlin = map.create(City, "Berlin", { zone: "brown" }).connectTo(schwerin, 18).connectTo(torgelow, 15);
      const magdeburg = map.create(City, "Magdeburg", { zone: "brown" }).connectTo(schwerin, 16).connectTo(hannover, 15).connectTo(berlin, 10);
      const frankfurto = map.create(City, "Frankfurt-O", { zone: "brown" }).connectTo(berlin, 6);
      const halle = map.create(City, "Halle", { zone: "yellow" }).connectTo(magdeburg, 11).connectTo(berlin, 17);
      const leipzig = map.create(City, "Leipzig", { zone: "yellow" }).connectTo(halle, 0).connectTo(frankfurto, 21);
      const dresden = map.create(City, "Dresden", { zone: "yellow" }).connectTo(leipzig, 13).connectTo(frankfurto, 16);
      const erfurt = map.create(City, "Erfurt", { zone: "yellow" }).connectTo(halle, 6).connectTo(hannover, 19).connectTo(kassel, 15).connectTo(dresden, 19);
      const fulda = map.create(City, "Fulda", { zone: "yellow" }).connectTo(kassel, 8).connectTo(erfurt, 13);
      const wurzburg = map.create(City, "Wurzburg", { zone: "yellow" }).connectTo(fulda, 11);
      const nurnberg = map.create(City, "Nurnberg", { zone: "yellow" }).connectTo(wurzburg, 8).connectTo(erfurt, 21);
      const koln = map.create(City, "Koln", { zone: "blue" }).connectTo(dusseldorf, 4).connectTo(dortmund, 10);
      const aachen = map.create(City, "Aachen", { zone: "blue" }).connectTo(dusseldorf, 9).connectTo(koln, 7);
      const trier = map.create(City, "Trier", { zone: "blue" }).connectTo(aachen, 19).connectTo(koln, 20);
      const wiesbaden = map.create(City, "Wiesbaden", { zone: "blue" }).connectTo(koln, 21).connectTo(trier, 18);
      map.create(City, "Frankfurt-M", { zone: "blue" }).connectTo(dortmund, 20).connectTo(kassel, 13).connectTo(fulda, 8).connectTo(wiesbaden, 0).connectTo(wurzburg, 13);
      const saarbrucken = map.create(City, "Saarbrucken", { zone: "blue" }).connectTo(trier, 11).connectTo(wiesbaden, 10);
      const mannheim = map.create(City, "Mannheim", { zone: "blue" }).connectTo(wiesbaden, 11).connectTo(saarbrucken, 11).connectTo(wurzburg, 10);
      const stuttgart = map.create(City, "Stuttgart", { zone: "purple" }).connectTo(saarbrucken, 17).connectTo(mannheim, 6).connectTo(wurzburg, 12);
      const freiburg = map.create(City, "Freiburg", { zone: "purple" }).connectTo(stuttgart, 16);
      const konstanz = map.create(City, "Konstanz", { zone: "purple" }).connectTo(freiburg, 14).connectTo(stuttgart, 16);
      const augsburg = map.create(City, "Augsburg", { zone: "purple" }).connectTo(stuttgart, 15).connectTo(konstanz, 17).connectTo(wurzburg, 19).connectTo(nurnberg, 18);
      const regensburg = map.create(City, "Regensburg", { zone: "purple" }).connectTo(nurnberg, 12).connectTo(augsburg, 13);
      const munchen = map.create(City, "Munchen", { zone: "purple" }).connectTo(augsburg, 6).connectTo(regensburg, 10);
      map.create(City, "Passau", { zone: "purple" }).connectTo(regensburg, 12).connectTo(munchen, 14);
      const resources = board.create(Space2, "resources");
      for (let cost = 1; cost <= 8; cost++) {
        resources.createMany(3, ResourceSpace, `coal-${cost}`, { cost, resource: "coal" });
        resources.createMany(3, ResourceSpace, `oil-${cost}`, { cost, resource: "oil" });
        resources.createMany(3, ResourceSpace, `garbage-${cost}`, { cost, resource: "garbage" });
        resources.create(ResourceSpace, `uranium-${cost}`, { cost, resource: "uranium" });
      }
      ;
      resources.create(ResourceSpace, "uranium-10", { cost: 10, resource: "uranium" });
      resources.create(ResourceSpace, "uranium-12", { cost: 12, resource: "uranium" });
      resources.create(ResourceSpace, "uranium-14", { cost: 14, resource: "uranium" });
      resources.create(ResourceSpace, "uranium-16", { cost: 16, resource: "uranium" });
      const powerplants = board.create(Space2, "powerplants");
      powerplants.onEnter(Card, (c) => {
        c.showToAll();
        board.applyMinimumRule();
        powerplants.sortBy("cost");
        const discount = powerplants.first(Card, { discount: true });
        if (discount && powerplants.first(Card) !== discount) {
          powerplants.first(Card).remove();
          discount.discount = false;
          deck.top(Card)?.putInto(powerplants);
        }
      });
      const deck = board.create(Space2, "deck");
      deck.setOrder("stacking");
      deck.onEnter(Card, (c) => c.hideFromAll());
      for (const [name, attrs] of Object.entries(cards))
        deck.create(Card, name, attrs);
      board.pile.createMany(24, Resource, "coal", { type: "coal" });
      board.pile.createMany(24, Resource, "oil", { type: "oil" });
      board.pile.createMany(24, Resource, "garbage", { type: "garbage" });
      board.pile.createMany(12, Resource, "uranium", { type: "uranium" });
      for (const player of board.players) {
        const mat = board.create(PlayerMat, "player-mat", { player });
        mat.createMany(22, Building, "building", { player });
        mat.onEnter(Card, (c) => {
          c.auction = false;
          c.discount = false;
          if (c.name === "nuclear-39" && map.name === "germany")
            board.noMoreUranium = true;
        });
      }
      ;
      deck.shuffle();
      deck.topN(8, Card, (card) => card.cost <= 15).putInto(powerplants);
      let removals = 0;
      if (board.players.length === 4)
        removals = 1;
      if (board.players.length === 3)
        removals = 2;
      if (board.players.length === 2)
        removals = 1;
      deck.topN(removals, Card, (card) => card.cost <= 15).remove();
      removals = 0;
      if (board.players.length === 4)
        removals = 3;
      if (board.players.length === 3)
        removals = 6;
      if (board.players.length === 2)
        removals = 5;
      deck.topN(removals, Card, (card) => !!card.resourceType && card.cost > 15).remove();
      deck.top(Card, (card) => card.cost <= 15).putInto(deck);
      deck.first(Card, "step-3")?.putInto(deck, { fromBottom: 0 });
      board.refillResources("coal", 24);
      board.refillResources("oil", 18);
      board.refillResources("garbage", 9);
      board.refillResources("uranium", 2);
      board.players.shuffle();
    },
    actions: (board, action2, player) => {
      const map = board.first(Space2);
      const powerplants = board.first(Space2, "powerplants");
      const resources = board.first(Space2, "resources");
      const costOf = /* @__PURE__ */ __name((resource, amount) => {
        if (amount > resources.all(resource).length)
          return Infinity;
        return resources.firstN(amount, resource).sum((resource2) => resource2.container(ResourceSpace).cost);
      }, "costOf");
      return {
        auction: action2({
          prompt: "Choose a factory for auction",
          condition: !board.first(Card, { auction: true })
        }).chooseOnBoard({
          choices: powerplants.firstN(board.step === 3 ? 8 : 4, Card)
        }).do(
          (card) => card.auction = true
        ).message(
          (card) => `${player} put ${card} up for auction`
        ),
        bid: action2({
          prompt: "Bid",
          condition: !player.passedThisAuction
        }).chooseNumber({
          min: board.lastBid ? board.lastBid + 1 : board.first(Card, { auction: true })?.purchaseCost(),
          max: player.elektro
        }).do((bid) => {
          board.lastBid = bid;
          board.playerWithHighestBid = player;
        }),
        passAuction: action2({
          prompt: "Pass",
          condition: board.turn > 1
        }).do(
          () => player.havePassedAuctionPhase = true
        ),
        passBid: action2({
          prompt: "Pass",
          condition: board.lastBid !== void 0
        }).do(
          () => player.passedThisAuction = true
        ),
        scrap: action2({
          prompt: "You must scrap one of your powerplants"
        }).chooseOnBoard({
          choices: board.first(PlayerMat, { player }).all(Card)
        }).do(
          (card) => {
            for (const resource of card.all(Resource)) {
              const other = resource.container(Card).first(Card, (other2) => other2 !== card && other2.spaceFor(resource.type) > 0);
              if (other)
                resource.putInto(other);
            }
            card.remove();
          }
        ),
        pass: action2({ prompt: "Pass" }),
        build: action2({
          prompt: "Select cities for building"
        }).move({
          piece: board.first(PlayerMat, { mine: true }).first(Building),
          chooseInto: map.all(City, (city) => city.canBuildFor(player.elektro))
        }).do((city) => {
          player.elektro -= city.costToBuild();
          city.owners.push(player);
          player.score = map.all(Building, { mine: true }).length;
          board.checkStepTriggers();
          board.applyMinimumRule();
        }),
        arrangeResources: action2({
          prompt: "Arrange resources"
        }).move({
          promptInto: "to where",
          choosePiece: board.first(PlayerMat, { mine: true }).all(Resource),
          chooseInto: (resource) => resource.container(Card).others(Card, (card) => card.spaceFor(resource.type) > 0)
        }),
        power: action2({
          prompt: "Power your plants",
          condition: !!map.first(Building, { player })
        }).chooseOnBoard({
          prompt: "Select plant to power",
          choices: board.all(Card, { mine: true, powered: false }, (c) => !!c.resourcesAvailableToPower())
        }).chooseOnBoard({
          prompt: "Select resources for power",
          skipIf: (card) => card.resourcesAvailableToPower().areAllEqual("type") || card.resourcesAvailableToPower().length === card.resources,
          choices: (card) => card.resourcesAvailableToPower(),
          number: (card) => card.resources
        }).do(
          (card, resources2) => {
            card.powered = true;
            if (!resources2)
              resources2 = card.firstN(card.resources, Resource);
            for (const resource of resources2)
              resource.remove();
          }
        ),
        buyResource: action2({
          prompt: "Buy resources"
        }).chooseFrom({
          expand: true,
          choices: resourceTypes.filter((type) => costOf(type, 1) <= player.elektro && !!board.first(Card, { mine: true }, (card) => card.spaceFor(type) > 0))
        }).chooseNumber({
          prompt: (resource) => `Buy ${resource}`,
          skipIfOnlyOne: false,
          min: 1,
          max: (type) => {
            let max = 0;
            while (costOf(type, max) <= player.elektro)
              max++;
            const plants = board.all(Card, { mine: true }, (c) => c.resources !== 0);
            let totalSpace = plants.sum((card) => card.spaceFor(type));
            return Math.min(max, totalSpace);
          }
        }).confirm(
          (type, amount) => `Buy ${amount} ${type} for ${costOf(type, amount)} Elektro?`
        ).do((type, amount) => {
          player.elektro -= costOf(type, amount);
          const plants = board.all(Card, { mine: true }, (c) => c.resources !== 0);
          for (const resource of resources.firstN(amount, Resource, { type })) {
            resource.putInto(plants.first(Card, (card) => card.spaceFor(resource.type) > 0));
          }
        })
      };
    },
    flow: (board) => {
      const map = board.first(Space2);
      const deck = board.first(Space2, "deck");
      const powerplants = board.first(Space2, "powerplants");
      return whileLoop({
        while: () => true,
        do: [
          () => {
            board.players.sortBy("score", "desc");
            board.turn += 1;
            for (const player of board.players)
              player.havePassedAuctionPhase = false;
            powerplants.first(Card).discount = true;
          },
          eachPlayer({
            name: "auctionPlayer",
            startingPlayer: () => board.players[0],
            continueUntil: () => board.players.every((p) => p.havePassedAuctionPhase),
            do: ifElse({
              name: "mayAuction",
              if: ({ auctionPlayer }) => !auctionPlayer.havePassedAuctionPhase,
              do: playerActions({
                name: "auction",
                actions: {
                  auction: [
                    ({ auctionPlayer }) => {
                      for (const player of board.players)
                        player.passedThisAuction = player.havePassedAuctionPhase;
                      board.playerWithHighestBid = auctionPlayer;
                    },
                    eachPlayer({
                      name: "biddingPlayer",
                      startingPlayer: ({ auctionPlayer }) => auctionPlayer,
                      continueUntil: () => board.lastBid !== void 0 && board.players.filter((p) => !p.passedThisAuction).length === 1,
                      do: ifElse({
                        name: "mayBid",
                        if: ({ biddingPlayer }) => !biddingPlayer.passedThisAuction,
                        do: playerActions({ name: "bid", actions: { bid: null, passBid: null } })
                      })
                    }),
                    ifElse({
                      if: () => board.first(PlayerMat, { player: board.playerWithHighestBid }).all(Card).length >= 3,
                      do: playerActions({
                        player: () => board.playerWithHighestBid,
                        name: "scrap",
                        actions: { scrap: null }
                      })
                    }),
                    ({ auctionPlayer }) => {
                      const winner = board.playerWithHighestBid;
                      board.message("$1 won the bid with $2", winner.name, board.lastBid);
                      winner.elektro -= board.lastBid;
                      board.lastBid = void 0;
                      powerplants.first(Card, { auction: true }).putInto(board.first(PlayerMat, { player: winner }));
                      deck.top(Card)?.putInto(powerplants);
                      winner.havePassedAuctionPhase = true;
                      if (winner !== auctionPlayer)
                        return "REPEAT" /* repeat */;
                    }
                  ],
                  passAuction: null
                }
              })
            })
          }),
          () => {
            board.players.sortBy("score", "asc");
            const discount = powerplants.first(Card, { discount: true });
            if (discount) {
              discount.remove();
              deck.top(Card)?.putInto(powerplants);
            }
          },
          eachPlayer({
            name: "purchasePlayer",
            do: playerActions({
              name: "purchaseResources",
              actions: {
                buyResource: "REPEAT" /* repeat */,
                pass: null
              }
            })
          }),
          eachPlayer({
            name: "buildPlayer",
            do: playerActions({
              name: "build",
              skipIfOnlyOne: true,
              actions: {
                build: "REPEAT" /* repeat */,
                pass: null
              }
            })
          }),
          () => {
            if (board.players.max("score") >= victory[board.players.length - 2]) {
              board.message("Final power phase!");
            }
          },
          eachPlayer({
            name: "powerPlayer",
            do: [
              playerActions({
                name: "power",
                prompt: "Arrange resources and power your plants",
                skipIfOnlyOne: true,
                actions: {
                  power: "REPEAT" /* repeat */,
                  arrangeResources: "REPEAT" /* repeat */,
                  pass: null
                }
              }),
              ({ powerPlayer }) => {
                for (const building of map.all(Building, { mine: true, powered: true }))
                  building.powered = false;
                powerPlayer.cities = Math.min(
                  board.all(Card, { mine: true, powered: true }).sum("power"),
                  map.all(Building, { mine: true }).length,
                  income.length - 1
                );
                if (board.players.max("score") < victory[board.players.length - 2]) {
                  const rev = income[powerPlayer.cities];
                  powerPlayer.elektro += rev;
                  board.message(`${powerPlayer.name} earned ${rev} elektro for ${powerPlayer.cities} ${powerPlayer.cities === 1 ? "city" : "cities"}`);
                  powerPlayer.cities = 0;
                  for (const card of board.all(Card, { mine: true, powered: true })) {
                    card.powered = false;
                  }
                }
              }
            ]
          }),
          () => {
            if (board.players.max("score") >= victory[board.players.length - 2]) {
              const winner = board.players.withHighest("cities", "elektro");
              board.message("$1 wins with $2 cities!", winner, winner.cities);
              board.finish(winner);
            } else {
              for (const r of resourceTypes) {
                board.refillResources(r, refill[r][board.players.length - 1][board.step - 1]);
              }
              if (board.step === 3) {
                powerplants.first(Card)?.remove();
              } else {
                powerplants.last(Card)?.putInto(deck, { fromBottom: 0 });
              }
              deck.top(Card)?.putInto(powerplants);
            }
          }
        ]
      });
    },
    breakpoints: (aspectRatio) => aspectRatio < 4 / 5 ? "vertical" : "default",
    layout: (board, breakpoint) => {
      const map = board.first(Space2);
      const deck = board.first(Space2, "deck");
      const resources = board.first(Space2, "resources");
      const powerplants = board.first(Space2, "powerplants");
      const resourceSvgs = {
        coal: coal_outline_default,
        oil: oil_outline_default,
        garbage: garbage_outline_default,
        uranium: uranium_outline_default,
        hybrid: hybrid_outline_default,
        clean: null
      };
      if (breakpoint !== "vertical") {
        board.appearance({ aspectRatio: 8 / 5 });
        board.layout(map, {
          area: { left: 3, top: -10, width: 45, height: 120 }
        });
        board.layout(board.all(PlayerMat, { mine: false }), {
          area: { left: 50, top: 0, width: 50, height: 20 }
        });
        board.layout(powerplants, {
          area: { left: 50, top: 20, width: 40, height: 20 }
        });
        board.layout(deck, {
          area: { left: 90, top: 20, width: 10, height: 20 }
        });
        board.layout(resources, {
          area: { left: 50, top: 40, width: 50, height: 40 }
        });
        board.layout(board.all(PlayerMat, { mine: true }), {
          area: { left: 50, top: 80, width: 50, height: 20 }
        });
      } else {
        board.appearance({ aspectRatio: 1 / 2 });
        board.layout(map, {
          area: { left: 0, top: 9, width: 100, height: 76 }
        });
        board.layout(board.all(PlayerMat, { mine: false }), {
          area: { left: 0, top: 0, width: 100, height: 15 }
        });
        board.layout(powerplants, {
          area: { left: 0, top: 15, width: 30, height: 8 }
        });
        board.layout(deck, {
          area: { left: 90, top: 15, width: 10, height: 5 }
        });
        board.layout(resources, {
          area: { left: 0, top: 78, width: 100, height: 7 }
        });
        board.layout(board.all(PlayerMat, { mine: true }), {
          area: { left: 0, top: 85, width: 100, height: 15 }
        });
      }
      map.layout(City, {
        slots: [
          { top: 20, left: 28, width: 8, height: 8 },
          { top: 27, left: 31, width: 8, height: 8 },
          { top: 34, left: 43, width: 8, height: 8 },
          { top: 22, left: 41, width: 8, height: 8 },
          { top: 14.5, left: 40, width: 8, height: 8 },
          { top: 8, left: 35, width: 8, height: 8 },
          { top: 24, left: 18, width: 8, height: 8 },
          { top: 32, left: 24, width: 8, height: 8 },
          { top: 39.5, left: 22, width: 8, height: 8 },
          { top: 41, left: 11, width: 8, height: 8 },
          { top: 40, left: 4, width: 8, height: 8 },
          { top: 47, left: 6, width: 8, height: 8 },
          { top: 47, left: 24, width: 8, height: 8 },
          { top: 44.5, left: 36, width: 8, height: 8 },
          { top: 17, left: 51, width: 8, height: 8 },
          { top: 23, left: 58, width: 8, height: 8 },
          { top: 16, left: 63, width: 8, height: 8 },
          { top: 23, left: 80, width: 8, height: 8 },
          { top: 33, left: 76, width: 8, height: 8 },
          { top: 35.5, left: 60, width: 8, height: 8 },
          { top: 35, left: 87, width: 8, height: 8 },
          { top: 43, left: 63, width: 8, height: 8 },
          { top: 45, left: 70, width: 8, height: 8 },
          { top: 49, left: 85, width: 8, height: 8 },
          { top: 51.5, left: 57, width: 8, height: 8 },
          { top: 54, left: 44, width: 8, height: 8 },
          { top: 62, left: 45, width: 8, height: 8 },
          { top: 65, left: 57, width: 8, height: 8 },
          { top: 52.5, left: 13, width: 8, height: 8 },
          { top: 53.5, left: 2.5, width: 8, height: 8 },
          { top: 62, left: 6, width: 8, height: 8 },
          { top: 58, left: 22, width: 8, height: 8 },
          { top: 57, left: 28.4, width: 8, height: 8 },
          { top: 69, left: 14, width: 8, height: 8 },
          { top: 68, left: 27, width: 8, height: 8 },
          { top: 74, left: 31, width: 8, height: 8 },
          { top: 79, left: 20, width: 8, height: 8 },
          { top: 83, left: 31, width: 8, height: 8 },
          { top: 77, left: 47, width: 8, height: 8 },
          { top: 71, left: 63, width: 8, height: 8 },
          { top: 81, left: 60, width: 8, height: 8 },
          { top: 74, left: 78, width: 8, height: 8 }
        ]
      });
      board.all(City).layout(Building, {
        slots: [
          { top: 5, left: 30, width: 40, height: 40 },
          { top: 50, left: 5, width: 40, height: 40 },
          { top: 50, left: 55, width: 40, height: 40 }
        ]
      });
      if (breakpoint !== "vertical") {
        powerplants.layout(Card, {
          direction: "ltr",
          rows: 2,
          columns: 4,
          gap: 0.5,
          margin: { left: 18, right: 1, top: 1, bottom: 1 },
          alignment: "left"
        });
        resources.layout(ResourceSpace, {
          gap: 0.5,
          margin: { left: 18, right: 1, top: 1, bottom: 1 },
          alignment: "left",
          rows: 10,
          direction: "ttb"
        });
      } else {
        powerplants.layout(Card, {
          direction: "ltr",
          rows: 2,
          columns: 4,
          alignment: "top right"
        });
        resources.layout(resources.all(ResourceSpace, { resource: "oil" }), {
          area: { left: 0, top: 0, width: 100, height: 25 },
          alignment: "left",
          columns: 24,
          direction: "ltr",
          gap: 0.5
        });
        resources.layout(resources.all(ResourceSpace, { resource: "coal" }), {
          area: { left: 0, top: 25, width: 100, height: 25 },
          alignment: "left",
          columns: 24,
          direction: "ltr",
          gap: 0.5
        });
        resources.layout(resources.all(ResourceSpace, { resource: "garbage" }), {
          area: { left: 0, top: 50, width: 100, height: 25 },
          alignment: "left",
          columns: 24,
          direction: "ltr",
          gap: 0.5
        });
        resources.layout(resources.all(ResourceSpace, { resource: "uranium" }), {
          area: { left: 0, top: 75, width: 100, height: 25 },
          alignment: "left",
          columns: 24,
          direction: "ltr",
          gap: 0.5
        });
      }
      board.all(PlayerMat, { mine: false }).layout(Card, {
        area: { top: 10, left: 22, width: 85, height: 64 },
        gap: 0.5,
        columns: 4,
        direction: "ltr"
      });
      board.all(PlayerMat, { mine: true }).layout(Card, {
        area: { top: 22, left: 22, width: 85, height: 64 },
        gap: 0.5,
        columns: 4,
        direction: "ltr"
      });
      deck.layout(Card, {
        direction: "ltr",
        offsetColumn: { x: 10, y: 10 },
        alignment: "top right",
        margin: 1,
        rows: 1,
        limit: 3
      });
      board.all(Card).layout(Resource, {
        area: { left: 10, top: 25, width: 80, height: 50 },
        gap: 0.5
      });
      board.disableDefaultAppearance();
      board.all(PlayerMat).appearance({
        render: (mat) => /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(elektro_svg_default, { amount: mat.player.elektro }), /* @__PURE__ */ import_react8.default.createElement(lightning_svg_default, { amount: mat.player.score }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "name", style: { background: mat.player.color } }, mat.player.name, /* @__PURE__ */ import_react8.default.createElement("br", null)), mat.mine || /* @__PURE__ */ import_react8.default.createElement("div", { className: "divider", style: { background: mat.player.color } }))
      });
      map.appearance({
        render: () => /* @__PURE__ */ import_react8.default.createElement("img", { id: "germany", src: germany2_default }),
        connections: {
          thickness: 0.2,
          color: "black",
          style: "double",
          fill: "white",
          label: power_label_svg_default,
          labelScale: 0.045
        }
      });
      board.all(ResourceSpace).appearance({
        render: (s) => /* @__PURE__ */ import_react8.default.createElement("div", { className: "cost" + (s.isEmpty() ? " empty" : "") }, s.cost)
      });
      board.all(Resource).appearance({ aspectRatio: 1 });
      board.all(Resource, { type: "coal" }).appearance({ render: () => /* @__PURE__ */ import_react8.default.createElement("img", { src: coal_default }) });
      board.all(Resource, { type: "oil" }).appearance({ render: () => /* @__PURE__ */ import_react8.default.createElement("img", { src: oil_default }) });
      board.all(Resource, { type: "garbage" }).appearance({ render: () => /* @__PURE__ */ import_react8.default.createElement("img", { src: garbage_default }) });
      board.all(Resource, { type: "uranium" }).appearance({ render: () => /* @__PURE__ */ import_react8.default.createElement("img", { src: uranium_default }) });
      board.all(City).appearance({ aspectRatio: 1, zoomable: true, render: city_svg_default });
      board.all(Building).appearance({ aspectRatio: 1, render: building_svg_default });
      board.all(PlayerMat).all(Building).appearance({ render: false });
      deck.appearance({
        render: (deck2) => /* @__PURE__ */ import_react8.default.createElement("div", { className: "count" }, deck2.all(Card).length)
      });
      board.all(Card).appearance({
        aspectRatio: 1,
        zoomable: (card) => card.isVisible(),
        render: (card) => /* @__PURE__ */ import_react8.default.createElement("div", { className: "outer" }, card.isVisible() && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("img", { className: "background", src: powerplant_default }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "inner" }, card.name === "step-3" && /* @__PURE__ */ import_react8.default.createElement("div", { className: "step-3" }, "PHASE 3"), card.cost && card.name !== "step-3" && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "cost" }, card.discount ? /* @__PURE__ */ import_react8.default.createElement("span", null, /* @__PURE__ */ import_react8.default.createElement("span", { className: "old-cost" }, String(card.cost + 100).slice(-2)), /* @__PURE__ */ import_react8.default.createElement("span", { className: "new-cost" }, " 01")) : String(card.cost + 100).slice(-2)), /* @__PURE__ */ import_react8.default.createElement("div", { className: "production " + card.resourceType }, card.resourceType === "hybrid" && /* @__PURE__ */ import_react8.default.createElement("div", { className: "hybrid2" }), times(card.resources, (i) => /* @__PURE__ */ import_react8.default.createElement("img", { key: i, src: resourceSvgs[card.resourceType] })), /* @__PURE__ */ import_react8.default.createElement("img", { src: arrow_default }), /* @__PURE__ */ import_react8.default.createElement(building_outline_svg_default, { number: card.resources }))), card.auction && /* @__PURE__ */ import_react8.default.createElement("img", { src: gavel_default }))))
      });
      if (breakpoint !== "vertical") {
        board.layoutStep("auction", {
          element: powerplants,
          right: 60,
          top: 10,
          width: 35
        });
        board.layoutStep("bid", {
          element: powerplants,
          right: 60,
          top: 10,
          width: 35
        });
        board.layoutStep("purchaseResources", {
          element: resources,
          right: 66.6,
          top: 6,
          width: 30
        });
        board.layoutStep("build", {
          element: board,
          top: 2,
          left: 1.25
        });
        board.layoutStep("power", {
          element: board.first(PlayerMat, { mine: true }),
          bottom: 100,
          left: 2,
          width: 32
        });
        board.layoutStep("scrap", {
          element: board.first(PlayerMat, { mine: true }),
          bottom: 100,
          left: 2,
          width: 32
        });
        board.layoutStep("out-of-turn", {
          element: board,
          top: 2,
          left: 1.25
        });
      } else {
        board.layoutStep("auction", {
          element: powerplants,
          left: 0,
          top: 100,
          width: 100
        });
      }
    }
  });

  // src/game/game-interface.ts
  var { initialState, processMove, getPlayerState } = createInteface(game_default);
  return __toCommonJS(game_interface_exports);
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
