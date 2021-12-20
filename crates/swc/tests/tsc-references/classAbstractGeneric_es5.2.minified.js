function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
        } catch (e) {
            return !1;
        }
    }();
    return function() {
        var obj, self, call, result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    };
}
var A = function() {
    "use strict";
    _classCallCheck(this, A);
}, B = function(A1) {
    "use strict";
    _inherits(B, A1);
    var _super = _createSuper(B);
    function B() {
        return _classCallCheck(this, B), _super.apply(this, arguments);
    }
    return B;
}(A), C = function(A2) {
    "use strict";
    _inherits(C, A2);
    var _super = _createSuper(C);
    function C() {
        return _classCallCheck(this, C), _super.apply(this, arguments);
    }
    return C;
}(A), D = function(A3) {
    "use strict";
    _inherits(D, A3);
    var _super = _createSuper(D);
    function D() {
        return _classCallCheck(this, D), _super.apply(this, arguments);
    }
    return D;
}(A), E = function(A4) {
    "use strict";
    _inherits(E, A4);
    var _super = _createSuper(E);
    function E() {
        return _classCallCheck(this, E), _super.apply(this, arguments);
    }
    return _createClass(E, [
        {
            key: "foo",
            value: function() {
                return this.t;
            }
        }
    ]), E;
}(A), F = function(A5) {
    "use strict";
    _inherits(F, A5);
    var _super = _createSuper(F);
    function F() {
        return _classCallCheck(this, F), _super.apply(this, arguments);
    }
    return _createClass(F, [
        {
            key: "bar",
            value: function(t) {
            }
        }
    ]), F;
}(A), G = function(A6) {
    "use strict";
    _inherits(G, A6);
    var _super = _createSuper(G);
    function G() {
        return _classCallCheck(this, G), _super.apply(this, arguments);
    }
    return _createClass(G, [
        {
            key: "foo",
            value: function() {
                return this.t;
            }
        },
        {
            key: "bar",
            value: function(t) {
            }
        }
    ]), G;
}(A);