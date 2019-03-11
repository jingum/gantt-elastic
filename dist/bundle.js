!(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = (installedModules[moduleId] = { i: moduleId, l: !1, exports: {} });
    return (
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
      (module.l = !0),
      module.exports
    );
  }
  (__webpack_require__.m = modules),
    (__webpack_require__.c = installedModules),
    (__webpack_require__.d = function(exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: !0, get: getter });
    }),
    (__webpack_require__.r = function(exports) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 });
    }),
    (__webpack_require__.t = function(value, mode) {
      if ((1 & mode && (value = __webpack_require__(value)), 8 & mode)) return value;
      if (4 & mode && 'object' == typeof value && value && value.__esModule) return value;
      var ns = Object.create(null);
      if (
        (__webpack_require__.r(ns),
        Object.defineProperty(ns, 'default', { enumerable: !0, value: value }),
        2 & mode && 'string' != typeof value)
      )
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      return ns;
    }),
    (__webpack_require__.n = function(module) {
      var getter =
        module && module.__esModule
          ? function() {
              return module.default;
            }
          : function() {
              return module;
            };
      return __webpack_require__.d(getter, 'a', getter), getter;
    }),
    (__webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }),
    (__webpack_require__.p = ''),
    __webpack_require__((__webpack_require__.s = 14));
})([
  function(module, exports, __webpack_require__) {
    module.exports = (function() {
      'use strict';
      var t = 'millisecond',
        n = 'second',
        e = 'minute',
        i = 'hour',
        r = 'day',
        s = 'week',
        u = 'month',
        o = 'year',
        a = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        h = /\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        c = function(t, n, e) {
          var i = String(t);
          return !i || i.length >= n ? t : '' + Array(n + 1 - i.length).join(e) + t;
        },
        f = {
          s: c,
          z: function(t) {
            var n = -t.utcOffset(),
              e = Math.abs(n),
              i = Math.floor(e / 60),
              r = e % 60;
            return (n <= 0 ? '+' : '-') + c(i, 2, '0') + ':' + c(r, 2, '0');
          },
          m: function(t, n) {
            var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              i = t.clone().add(e, u),
              r = n - i < 0,
              s = t.clone().add(e + (r ? -1 : 1), u);
            return Number(-(e + (n - i) / (r ? i - s : s - i)) || 0);
          },
          a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function(a) {
            return (
              { M: u, y: o, w: s, d: r, h: i, m: e, s: n, ms: t }[a] ||
              String(a || '')
                .toLowerCase()
                .replace(/s$/, '')
            );
          },
          u: function(t) {
            return void 0 === t;
          }
        },
        d = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
        },
        $ = 'en',
        l = {};
      l[$] = d;
      var m = function(t) {
          return t instanceof S;
        },
        y = function(t, n, e) {
          var i;
          if (!t) return null;
          if ('string' == typeof t) l[t] && (i = t), n && ((l[t] = n), (i = t));
          else {
            var r = t.name;
            (l[r] = t), (i = r);
          }
          return e || ($ = i), i;
        },
        M = function(t, n, e) {
          if (m(t)) return t.clone();
          var i = n ? ('string' == typeof n ? { format: n, pl: e } : n) : {};
          return (i.date = t), new S(i);
        },
        D = f;
      (D.l = y),
        (D.i = m),
        (D.w = function(t, n) {
          return M(t, { locale: n.$L, utc: n.$u });
        });
      var S = (function() {
        function c(t) {
          (this.$L = this.$L || y(t.locale, null, !0) || $), this.parse(t);
        }
        var f = c.prototype;
        return (
          (f.parse = function(t) {
            (this.$d = (function(t) {
              var n = t.date,
                e = t.utc;
              if (null === n) return new Date(NaN);
              if (D.u(n)) return new Date();
              if (n instanceof Date) return new Date(n);
              if ('string' == typeof n && !/Z$/i.test(n)) {
                var i = n.match(a);
                if (i)
                  return e
                    ? new Date(Date.UTC(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0))
                    : new Date(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0);
              }
              return new Date(n);
            })(t)),
              this.init();
          }),
          (f.init = function() {
            var t = this.$d;
            (this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds());
          }),
          (f.$utils = function() {
            return D;
          }),
          (f.isValid = function() {
            return !('Invalid Date' === this.$d.toString());
          }),
          (f.isSame = function(t, n) {
            var e = M(t);
            return this.startOf(n) <= e && e <= this.endOf(n);
          }),
          (f.isAfter = function(t, n) {
            return M(t) < this.startOf(n);
          }),
          (f.isBefore = function(t, n) {
            return this.endOf(n) < M(t);
          }),
          (f.year = function() {
            return this.$y;
          }),
          (f.month = function() {
            return this.$M;
          }),
          (f.day = function() {
            return this.$W;
          }),
          (f.date = function() {
            return this.$D;
          }),
          (f.hour = function() {
            return this.$H;
          }),
          (f.minute = function() {
            return this.$m;
          }),
          (f.second = function() {
            return this.$s;
          }),
          (f.millisecond = function() {
            return this.$ms;
          }),
          (f.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (f.valueOf = function() {
            return this.$d.getTime();
          }),
          (f.startOf = function(t, a) {
            var h = this,
              c = !!D.u(a) || a,
              f = D.p(t),
              d = function(t, n) {
                var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
                return c ? e : e.endOf(r);
              },
              $ = function(t, n) {
                return D.w(h.toDate()[t].apply(h.toDate(), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
              },
              l = this.$W,
              m = this.$M,
              y = this.$D,
              M = 'set' + (this.$u ? 'UTC' : '');
            switch (f) {
              case o:
                return c ? d(1, 0) : d(31, 11);
              case u:
                return c ? d(1, m) : d(0, m + 1);
              case s:
                var S = this.$locale().weekStart || 0,
                  g = (l < S ? l + 7 : l) - S;
                return d(c ? y - g : y + (6 - g), m);
              case r:
              case 'date':
                return $(M + 'Hours', 0);
              case i:
                return $(M + 'Minutes', 1);
              case e:
                return $(M + 'Seconds', 2);
              case n:
                return $(M + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (f.endOf = function(t) {
            return this.startOf(t, !1);
          }),
          (f.$set = function(s, a) {
            var h,
              c = D.p(s),
              f = 'set' + (this.$u ? 'UTC' : ''),
              d = ((h = {}),
              (h[r] = f + 'Date'),
              (h.date = f + 'Date'),
              (h[u] = f + 'Month'),
              (h[o] = f + 'FullYear'),
              (h[i] = f + 'Hours'),
              (h[e] = f + 'Minutes'),
              (h[n] = f + 'Seconds'),
              (h[t] = f + 'Milliseconds'),
              h)[c],
              $ = c === r ? this.$D + (a - this.$W) : a;
            return this.$d[d] && this.$d[d]($), this.init(), this;
          }),
          (f.set = function(t, n) {
            return this.clone().$set(t, n);
          }),
          (f.add = function(t, a) {
            var h,
              c = this;
            t = Number(t);
            var f = D.p(a),
              d = function(n, e) {
                var i = c.set('date', 1).set(n, e + t);
                return i.set('date', Math.min(c.$D, i.daysInMonth()));
              },
              $ = function(n) {
                var e = new Date(c.$d);
                return e.setDate(e.getDate() + n * t), D.w(e, c);
              };
            if (f === u) return d(u, this.$M);
            if (f === o) return d(o, this.$y);
            if (f === r) return $(1);
            if (f === s) return $(7);
            var l = ((h = {}), (h[e] = 6e4), (h[i] = 36e5), (h[n] = 1e3), h)[f] || 1,
              m = this.valueOf() + t * l;
            return D.w(m, this);
          }),
          (f.subtract = function(t, n) {
            return this.add(-1 * t, n);
          }),
          (f.format = function(t) {
            var n = this;
            if (!this.isValid()) return 'Invalid Date';
            var e = t || 'YYYY-MM-DDTHH:mm:ssZ',
              i = D.z(this),
              r = this.$locale(),
              s = r.weekdays,
              u = r.months,
              o = function(t, n, e, i) {
                return (t && t[n]) || e[n].substr(0, i);
              },
              a = function(t) {
                return D.s(n.$H % 12 || 12, t, '0');
              },
              c = {
                YY: String(this.$y).slice(-2),
                YYYY: String(this.$y),
                M: String(this.$M + 1),
                MM: D.s(this.$M + 1, 2, '0'),
                MMM: o(r.monthsShort, this.$M, u, 3),
                MMMM: u[this.$M],
                D: String(this.$D),
                DD: D.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: o(r.weekdaysMin, this.$W, s, 2),
                ddd: o(r.weekdaysShort, this.$W, s, 3),
                dddd: s[this.$W],
                H: String(this.$H),
                HH: D.s(this.$H, 2, '0'),
                h: a(1),
                hh: a(2),
                a: this.$H < 12 ? 'am' : 'pm',
                A: this.$H < 12 ? 'AM' : 'PM',
                m: String(this.$m),
                mm: D.s(this.$m, 2, '0'),
                s: String(this.$s),
                ss: D.s(this.$s, 2, '0'),
                SSS: D.s(this.$ms, 3, '0'),
                Z: i
              };
            return e.replace(h, function(t) {
              return t.indexOf('[') > -1 ? t.replace(/\[|\]/g, '') : c[t] || i.replace(':', '');
            });
          }),
          (f.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (f.diff = function(t, a, h) {
            var c,
              f = D.p(a),
              d = M(t),
              $ = 6e4 * (d.utcOffset() - this.utcOffset()),
              l = this - d,
              m = D.m(this, d);
            return (
              (m =
                ((c = {}),
                (c[o] = m / 12),
                (c[u] = m),
                (c.quarter = m / 3),
                (c[s] = (l - $) / 6048e5),
                (c[r] = (l - $) / 864e5),
                (c[i] = l / 36e5),
                (c[e] = l / 6e4),
                (c[n] = l / 1e3),
                c)[f] || l),
              h ? m : D.a(m)
            );
          }),
          (f.daysInMonth = function() {
            return this.endOf(u).$D;
          }),
          (f.$locale = function() {
            return l[this.$L];
          }),
          (f.locale = function(t, n) {
            var e = this.clone();
            return (e.$L = y(t, n, !0)), e;
          }),
          (f.clone = function() {
            return D.w(this.toDate(), this);
          }),
          (f.toDate = function() {
            return new Date(this.$d);
          }),
          (f.toArray = function() {
            return [this.$y, this.$M, this.$D, this.$H, this.$m, this.$s, this.$ms];
          }),
          (f.toJSON = function() {
            return this.toISOString();
          }),
          (f.toISOString = function() {
            return this.$d.toISOString();
          }),
          (f.toObject = function() {
            return {
              years: this.$y,
              months: this.$M,
              date: this.$D,
              hours: this.$H,
              minutes: this.$m,
              seconds: this.$s,
              milliseconds: this.$ms
            };
          }),
          (f.toString = function() {
            return this.$d.toUTCString();
          }),
          c
        );
      })();
      return (
        (M.prototype = S.prototype),
        (M.extend = function(t, n) {
          return t(n, S, M), M;
        }),
        (M.locale = y),
        (M.isDayjs = m),
        (M.unix = function(t) {
          return M(1e3 * t);
        }),
        (M.en = l[$]),
        (M.Ls = l),
        M
      );
    })();
  },
  function(module, exports, __webpack_require__) {
    var content = __webpack_require__(12);
    'string' == typeof content && (content = [[module.i, content, '']]),
      content.locals && (module.exports = content.locals);
    (0, __webpack_require__(15).default)('c3e5085c', content, !1, {});
  },
  function(module, exports) {
    module.exports = Vue;
  },
  function(module, exports) {
    module.exports = Vuex;
  },
  function(module, exports) {
    module.exports = function(useSourceMap) {
      var list = [];
      return (
        (list.toString = function() {
          return this.map(function(item) {
            var content = (function(item, useSourceMap) {
              var content = item[1] || '',
                cssMapping = item[3];
              if (!cssMapping) return content;
              if (useSourceMap && 'function' == typeof btoa) {
                var sourceMapping = ((sourceMap = cssMapping),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
                    ' */'),
                  sourceURLs = cssMapping.sources.map(function(source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                  });
                return [content]
                  .concat(sourceURLs)
                  .concat([sourceMapping])
                  .join('\n');
              }
              var sourceMap;
              return [content].join('\n');
            })(item, useSourceMap);
            return item[2] ? '@media ' + item[2] + '{' + content + '}' : content;
          }).join('');
        }),
        (list.i = function(modules, mediaQuery) {
          'string' == typeof modules && (modules = [[null, modules, '']]);
          for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
            var id = this[i][0];
            'number' == typeof id && (alreadyImportedModules[id] = !0);
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            ('number' == typeof item[0] && alreadyImportedModules[item[0]]) ||
              (mediaQuery && !item[2]
                ? (item[2] = mediaQuery)
                : mediaQuery && (item[2] = '(' + item[2] + ') and (' + mediaQuery + ')'),
              list.push(item));
          }
        }),
        list
      );
    };
  },
  function(module, exports, __webpack_require__) {
    'use strict';
    (function(global) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      function compare(a, b) {
        if (a === b) return 0;
        for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
          if (a[i] !== b[i]) {
            (x = a[i]), (y = b[i]);
            break;
          }
        return x < y ? -1 : y < x ? 1 : 0;
      }
      function isBuffer(b) {
        return global.Buffer && 'function' == typeof global.Buffer.isBuffer
          ? global.Buffer.isBuffer(b)
          : !(null == b || !b._isBuffer);
      }
      var util = __webpack_require__(7),
        hasOwn = Object.prototype.hasOwnProperty,
        pSlice = Array.prototype.slice,
        functionsHaveNames = 'foo' === function() {}.name;
      function pToString(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isView(arrbuf) {
        return (
          !isBuffer(arrbuf) &&
          ('function' == typeof global.ArrayBuffer &&
            ('function' == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(arrbuf)
              : !!arrbuf && (arrbuf instanceof DataView || !!(arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer))))
        );
      }
      var assert = (module.exports = ok),
        regex = /\s*function\s+([^\(\s]*)\s*/;
      function getName(func) {
        if (util.isFunction(func)) {
          if (functionsHaveNames) return func.name;
          var match = func.toString().match(regex);
          return match && match[1];
        }
      }
      function truncate(s, n) {
        return 'string' == typeof s ? (s.length < n ? s : s.slice(0, n)) : s;
      }
      function inspect(something) {
        if (functionsHaveNames || !util.isFunction(something)) return util.inspect(something);
        var rawname = getName(something);
        return '[Function' + (rawname ? ': ' + rawname : '') + ']';
      }
      function fail(actual, expected, message, operator, stackStartFunction) {
        throw new assert.AssertionError({
          message: message,
          actual: actual,
          expected: expected,
          operator: operator,
          stackStartFunction: stackStartFunction
        });
      }
      function ok(value, message) {
        value || fail(value, !0, message, '==', assert.ok);
      }
      function _deepEqual(actual, expected, strict, memos) {
        if (actual === expected) return !0;
        if (isBuffer(actual) && isBuffer(expected)) return 0 === compare(actual, expected);
        if (util.isDate(actual) && util.isDate(expected)) return actual.getTime() === expected.getTime();
        if (util.isRegExp(actual) && util.isRegExp(expected))
          return (
            actual.source === expected.source &&
            actual.global === expected.global &&
            actual.multiline === expected.multiline &&
            actual.lastIndex === expected.lastIndex &&
            actual.ignoreCase === expected.ignoreCase
          );
        if ((null !== actual && 'object' == typeof actual) || (null !== expected && 'object' == typeof expected)) {
          if (
            isView(actual) &&
            isView(expected) &&
            pToString(actual) === pToString(expected) &&
            !(actual instanceof Float32Array || actual instanceof Float64Array)
          )
            return 0 === compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer));
          if (isBuffer(actual) !== isBuffer(expected)) return !1;
          var actualIndex = (memos = memos || { actual: [], expected: [] }).actual.indexOf(actual);
          return (
            (-1 !== actualIndex && actualIndex === memos.expected.indexOf(expected)) ||
            (memos.actual.push(actual),
            memos.expected.push(expected),
            (function(a, b, strict, actualVisitedObjects) {
              if (null == a || null == b) return !1;
              if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
              if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return !1;
              var aIsArgs = isArguments(a),
                bIsArgs = isArguments(b);
              if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs)) return !1;
              if (aIsArgs) return (a = pSlice.call(a)), (b = pSlice.call(b)), _deepEqual(a, b, strict);
              var key,
                i,
                ka = objectKeys(a),
                kb = objectKeys(b);
              if (ka.length !== kb.length) return !1;
              for (ka.sort(), kb.sort(), i = ka.length - 1; i >= 0; i--) if (ka[i] !== kb[i]) return !1;
              for (i = ka.length - 1; i >= 0; i--)
                if (((key = ka[i]), !_deepEqual(a[key], b[key], strict, actualVisitedObjects))) return !1;
              return !0;
            })(actual, expected, strict, memos))
          );
        }
        return strict ? actual === expected : actual == expected;
      }
      function isArguments(object) {
        return '[object Arguments]' == Object.prototype.toString.call(object);
      }
      function expectedException(actual, expected) {
        if (!actual || !expected) return !1;
        if ('[object RegExp]' == Object.prototype.toString.call(expected)) return expected.test(actual);
        try {
          if (actual instanceof expected) return !0;
        } catch (e) {}
        return !Error.isPrototypeOf(expected) && !0 === expected.call({}, actual);
      }
      function _throws(shouldThrow, block, expected, message) {
        var actual;
        if ('function' != typeof block) throw new TypeError('"block" argument must be a function');
        'string' == typeof expected && ((message = expected), (expected = null)),
          (actual = (function(block) {
            var error;
            try {
              block();
            } catch (e) {
              error = e;
            }
            return error;
          })(block)),
          (message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.')),
          shouldThrow && !actual && fail(actual, expected, 'Missing expected exception' + message);
        var userProvidedMessage = 'string' == typeof message,
          isUnexpectedException = !shouldThrow && actual && !expected;
        if (
          (((!shouldThrow && util.isError(actual) && userProvidedMessage && expectedException(actual, expected)) ||
            isUnexpectedException) &&
            fail(actual, expected, 'Got unwanted exception' + message),
          (shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual))
        )
          throw actual;
      }
      (assert.AssertionError = function(options) {
        var self;
        (this.name = 'AssertionError'),
          (this.actual = options.actual),
          (this.expected = options.expected),
          (this.operator = options.operator),
          options.message
            ? ((this.message = options.message), (this.generatedMessage = !1))
            : ((this.message =
                truncate(inspect((self = this).actual), 128) +
                ' ' +
                self.operator +
                ' ' +
                truncate(inspect(self.expected), 128)),
              (this.generatedMessage = !0));
        var stackStartFunction = options.stackStartFunction || fail;
        if (Error.captureStackTrace) Error.captureStackTrace(this, stackStartFunction);
        else {
          var err = new Error();
          if (err.stack) {
            var out = err.stack,
              fn_name = getName(stackStartFunction),
              idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
              var next_line = out.indexOf('\n', idx + 1);
              out = out.substring(next_line + 1);
            }
            this.stack = out;
          }
        }
      }),
        util.inherits(assert.AssertionError, Error),
        (assert.fail = fail),
        (assert.ok = ok),
        (assert.equal = function(actual, expected, message) {
          actual != expected && fail(actual, expected, message, '==', assert.equal);
        }),
        (assert.notEqual = function(actual, expected, message) {
          actual == expected && fail(actual, expected, message, '!=', assert.notEqual);
        }),
        (assert.deepEqual = function(actual, expected, message) {
          _deepEqual(actual, expected, !1) || fail(actual, expected, message, 'deepEqual', assert.deepEqual);
        }),
        (assert.deepStrictEqual = function(actual, expected, message) {
          _deepEqual(actual, expected, !0) ||
            fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
        }),
        (assert.notDeepEqual = function(actual, expected, message) {
          _deepEqual(actual, expected, !1) && fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
        }),
        (assert.notDeepStrictEqual = function notDeepStrictEqual(actual, expected, message) {
          _deepEqual(actual, expected, !0) && fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
        }),
        (assert.strictEqual = function(actual, expected, message) {
          actual !== expected && fail(actual, expected, message, '===', assert.strictEqual);
        }),
        (assert.notStrictEqual = function(actual, expected, message) {
          actual === expected && fail(actual, expected, message, '!==', assert.notStrictEqual);
        }),
        (assert.throws = function(block, error, message) {
          _throws(!0, block, error, message);
        }),
        (assert.doesNotThrow = function(block, error, message) {
          _throws(!1, block, error, message);
        }),
        (assert.ifError = function(err) {
          if (err) throw err;
        });
      var objectKeys =
        Object.keys ||
        function(obj) {
          var keys = [];
          for (var key in obj) hasOwn.call(obj, key) && keys.push(key);
          return keys;
        };
    }.call(this, __webpack_require__(6)));
  },
  function(module, exports) {
    var g;
    g = (function() {
      return this;
    })();
    try {
      g = g || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (g = window);
    }
    module.exports = g;
  },
  function(module, exports, __webpack_require__) {
    (function(process) {
      var getOwnPropertyDescriptors =
          Object.getOwnPropertyDescriptors ||
          function(obj) {
            for (var keys = Object.keys(obj), descriptors = {}, i = 0; i < keys.length; i++)
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            return descriptors;
          },
        formatRegExp = /%[sdj%]/g;
      (exports.format = function(f) {
        if (!isString(f)) {
          for (var objects = [], i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
          return objects.join(' ');
        }
        i = 1;
        for (
          var args = arguments,
            len = args.length,
            str = String(f).replace(formatRegExp, function(x) {
              if ('%%' === x) return '%';
              if (i >= len) return x;
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                default:
                  return x;
              }
            }),
            x = args[i];
          i < len;
          x = args[++i]
        )
          isNull(x) || !isObject(x) ? (str += ' ' + x) : (str += ' ' + inspect(x));
        return str;
      }),
        (exports.deprecate = function(fn, msg) {
          if (void 0 !== process && !0 === process.noDeprecation) return fn;
          if (void 0 === process)
            return function() {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          var warned = !1;
          return function() {
            if (!warned) {
              if (process.throwDeprecation) throw new Error(msg);
              process.traceDeprecation ? console.trace(msg) : console.error(msg), (warned = !0);
            }
            return fn.apply(this, arguments);
          };
        });
      var debugEnviron,
        debugs = {};
      function inspect(obj, opts) {
        var ctx = { seen: [], stylize: stylizeNoColor };
        return (
          arguments.length >= 3 && (ctx.depth = arguments[2]),
          arguments.length >= 4 && (ctx.colors = arguments[3]),
          isBoolean(opts) ? (ctx.showHidden = opts) : opts && exports._extend(ctx, opts),
          isUndefined(ctx.showHidden) && (ctx.showHidden = !1),
          isUndefined(ctx.depth) && (ctx.depth = 2),
          isUndefined(ctx.colors) && (ctx.colors = !1),
          isUndefined(ctx.customInspect) && (ctx.customInspect = !0),
          ctx.colors && (ctx.stylize = stylizeWithColor),
          formatValue(ctx, obj, ctx.depth)
        );
      }
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        return style ? '[' + inspect.colors[style][0] + 'm' + str + '[' + inspect.colors[style][1] + 'm' : str;
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (
          ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          value.inspect !== exports.inspect &&
          (!value.constructor || value.constructor.prototype !== value)
        ) {
          var ret = value.inspect(recurseTimes, ctx);
          return isString(ret) || (ret = formatValue(ctx, ret, recurseTimes)), ret;
        }
        var primitive = (function(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple =
              "'" +
              JSON.stringify(value)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          if (isNull(value)) return ctx.stylize('null', 'null');
        })(ctx, value);
        if (primitive) return primitive;
        var keys = Object.keys(value),
          visibleKeys = (function(array) {
            var hash = {};
            return (
              array.forEach(function(val, idx) {
                hash[val] = !0;
              }),
              hash
            );
          })(keys);
        if (
          (ctx.showHidden && (keys = Object.getOwnPropertyNames(value)),
          isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0))
        )
          return formatError(value);
        if (0 === keys.length) {
          if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
          }
          if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
          if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
          if (isError(value)) return formatError(value);
        }
        var output,
          base = '',
          array = !1,
          braces = ['{', '}'];
        (isArray(value) && ((array = !0), (braces = ['[', ']'])), isFunction(value)) &&
          (base = ' [Function' + (value.name ? ': ' + value.name : '') + ']');
        return (
          isRegExp(value) && (base = ' ' + RegExp.prototype.toString.call(value)),
          isDate(value) && (base = ' ' + Date.prototype.toUTCString.call(value)),
          isError(value) && (base = ' ' + formatError(value)),
          0 !== keys.length || (array && 0 != value.length)
            ? recurseTimes < 0
              ? isRegExp(value)
                ? ctx.stylize(RegExp.prototype.toString.call(value), 'regexp')
                : ctx.stylize('[Object]', 'special')
              : (ctx.seen.push(value),
                (output = array
                  ? (function(ctx, value, recurseTimes, visibleKeys, keys) {
                      for (var output = [], i = 0, l = value.length; i < l; ++i)
                        hasOwnProperty(value, String(i))
                          ? output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), !0))
                          : output.push('');
                      return (
                        keys.forEach(function(key) {
                          key.match(/^\d+$/) ||
                            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, !0));
                        }),
                        output
                      );
                    })(ctx, value, recurseTimes, visibleKeys, keys)
                  : keys.map(function(key) {
                      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                    })),
                ctx.seen.pop(),
                (function(output, base, braces) {
                  if (
                    output.reduce(function(prev, cur) {
                      return 0, cur.indexOf('\n') >= 0 && 0, prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
                    }, 0) > 60
                  )
                    return braces[0] + ('' === base ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
                  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
                })(output, base, braces))
            : braces[0] + base + braces[1]
        );
      }
      function formatError(value) {
        return '[' + Error.prototype.toString.call(value) + ']';
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        if (
          ((desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] }).get
            ? (str = desc.set ? ctx.stylize('[Getter/Setter]', 'special') : ctx.stylize('[Getter]', 'special'))
            : desc.set && (str = ctx.stylize('[Setter]', 'special')),
          hasOwnProperty(visibleKeys, key) || (name = '[' + key + ']'),
          str ||
            (ctx.seen.indexOf(desc.value) < 0
              ? (str = isNull(recurseTimes)
                  ? formatValue(ctx, desc.value, null)
                  : formatValue(ctx, desc.value, recurseTimes - 1)).indexOf('\n') > -1 &&
                (str = array
                  ? str
                      .split('\n')
                      .map(function(line) {
                        return '  ' + line;
                      })
                      .join('\n')
                      .substr(2)
                  : '\n' +
                    str
                      .split('\n')
                      .map(function(line) {
                        return '   ' + line;
                      })
                      .join('\n'))
              : (str = ctx.stylize('[Circular]', 'special'))),
          isUndefined(name))
        ) {
          if (array && key.match(/^\d+$/)) return str;
          (name = JSON.stringify('' + key)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((name = name.substr(1, name.length - 2)), (name = ctx.stylize(name, 'name')))
            : ((name = name
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (name = ctx.stylize(name, 'string')));
        }
        return name + ': ' + str;
      }
      function isArray(ar) {
        return Array.isArray(ar);
      }
      function isBoolean(arg) {
        return 'boolean' == typeof arg;
      }
      function isNull(arg) {
        return null === arg;
      }
      function isNumber(arg) {
        return 'number' == typeof arg;
      }
      function isString(arg) {
        return 'string' == typeof arg;
      }
      function isUndefined(arg) {
        return void 0 === arg;
      }
      function isRegExp(re) {
        return isObject(re) && '[object RegExp]' === objectToString(re);
      }
      function isObject(arg) {
        return 'object' == typeof arg && null !== arg;
      }
      function isDate(d) {
        return isObject(d) && '[object Date]' === objectToString(d);
      }
      function isError(e) {
        return isObject(e) && ('[object Error]' === objectToString(e) || e instanceof Error);
      }
      function isFunction(arg) {
        return 'function' == typeof arg;
      }
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? '0' + n.toString(10) : n.toString(10);
      }
      (exports.debuglog = function(set) {
        if (
          (isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || ''),
          (set = set.toUpperCase()),
          !debugs[set])
        )
          if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = process.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error('%s %d: %s', set, pid, msg);
            };
          } else debugs[set] = function() {};
        return debugs[set];
      }),
        (exports.inspect = inspect),
        (inspect.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }),
        (inspect.styles = {
          special: 'cyan',
          number: 'yellow',
          boolean: 'yellow',
          undefined: 'grey',
          null: 'bold',
          string: 'green',
          date: 'magenta',
          regexp: 'red'
        }),
        (exports.isArray = isArray),
        (exports.isBoolean = isBoolean),
        (exports.isNull = isNull),
        (exports.isNullOrUndefined = function(arg) {
          return null == arg;
        }),
        (exports.isNumber = isNumber),
        (exports.isString = isString),
        (exports.isSymbol = function(arg) {
          return 'symbol' == typeof arg;
        }),
        (exports.isUndefined = isUndefined),
        (exports.isRegExp = isRegExp),
        (exports.isObject = isObject),
        (exports.isDate = isDate),
        (exports.isError = isError),
        (exports.isFunction = isFunction),
        (exports.isPrimitive = function(arg) {
          return (
            null === arg ||
            'boolean' == typeof arg ||
            'number' == typeof arg ||
            'string' == typeof arg ||
            'symbol' == typeof arg ||
            void 0 === arg
          );
        }),
        (exports.isBuffer = __webpack_require__(9));
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      (exports.log = function() {
        var d, time;
        console.log(
          '%s - %s',
          ((d = new Date()),
          (time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':')),
          [d.getDate(), months[d.getMonth()], time].join(' ')),
          exports.format.apply(exports, arguments)
        );
      }),
        (exports.inherits = __webpack_require__(10)),
        (exports._extend = function(origin, add) {
          if (!add || !isObject(add)) return origin;
          for (var keys = Object.keys(add), i = keys.length; i--; ) origin[keys[i]] = add[keys[i]];
          return origin;
        });
      var kCustomPromisifiedSymbol = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error('Promise was rejected with a falsy value');
          (newReason.reason = reason), (reason = newReason);
        }
        return cb(reason);
      }
      (exports.promisify = function(original) {
        if ('function' != typeof original) throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn;
          if ('function' != typeof (fn = original[kCustomPromisifiedSymbol]))
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return (
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: !1,
              writable: !1,
              configurable: !0
            }),
            fn
          );
        }
        function fn() {
          for (
            var promiseResolve,
              promiseReject,
              promise = new Promise(function(resolve, reject) {
                (promiseResolve = resolve), (promiseReject = reject);
              }),
              args = [],
              i = 0;
            i < arguments.length;
            i++
          )
            args.push(arguments[i]);
          args.push(function(err, value) {
            err ? promiseReject(err) : promiseResolve(value);
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        return (
          Object.setPrototypeOf(fn, Object.getPrototypeOf(original)),
          kCustomPromisifiedSymbol &&
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: !1,
              writable: !1,
              configurable: !0
            }),
          Object.defineProperties(fn, getOwnPropertyDescriptors(original))
        );
      }),
        (exports.promisify.custom = kCustomPromisifiedSymbol),
        (exports.callbackify = function(original) {
          if ('function' != typeof original) throw new TypeError('The "original" argument must be of type Function');
          function callbackified() {
            for (var args = [], i = 0; i < arguments.length; i++) args.push(arguments[i]);
            var maybeCb = args.pop();
            if ('function' != typeof maybeCb) throw new TypeError('The last argument must be of type Function');
            var self = this,
              cb = function() {
                return maybeCb.apply(self, arguments);
              };
            original.apply(this, args).then(
              function(ret) {
                process.nextTick(cb, null, ret);
              },
              function(rej) {
                process.nextTick(callbackifyOnRejected, rej, cb);
              }
            );
          }
          return (
            Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original)),
            Object.defineProperties(callbackified, getOwnPropertyDescriptors(original)),
            callbackified
          );
        });
    }.call(this, __webpack_require__(8)));
  },
  function(module, exports) {
    var cachedSetTimeout,
      cachedClearTimeout,
      process = (module.exports = {});
    function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
    }
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
        return (cachedSetTimeout = setTimeout), setTimeout(fun, 0);
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    !(function() {
      try {
        cachedSetTimeout = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = 'function' == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    var currentQueue,
      queue = [],
      draining = !1,
      queueIndex = -1;
    function cleanUpNextTick() {
      draining &&
        currentQueue &&
        ((draining = !1),
        currentQueue.length ? (queue = currentQueue.concat(queue)) : (queueIndex = -1),
        queue.length && drainQueue());
    }
    function drainQueue() {
      if (!draining) {
        var timeout = runTimeout(cleanUpNextTick);
        draining = !0;
        for (var len = queue.length; len; ) {
          for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
          (queueIndex = -1), (len = queue.length);
        }
        (currentQueue = null),
          (draining = !1),
          (function(marker) {
            if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
              return (cachedClearTimeout = clearTimeout), clearTimeout(marker);
            try {
              cachedClearTimeout(marker);
            } catch (e) {
              try {
                return cachedClearTimeout.call(null, marker);
              } catch (e) {
                return cachedClearTimeout.call(this, marker);
              }
            }
          })(timeout);
      }
    }
    function Item(fun, array) {
      (this.fun = fun), (this.array = array);
    }
    function noop() {}
    (process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
    }),
      (Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (process.title = 'browser'),
      (process.browser = !0),
      (process.env = {}),
      (process.argv = []),
      (process.version = ''),
      (process.versions = {}),
      (process.on = noop),
      (process.addListener = noop),
      (process.once = noop),
      (process.off = noop),
      (process.removeListener = noop),
      (process.removeAllListeners = noop),
      (process.emit = noop),
      (process.prependListener = noop),
      (process.prependOnceListener = noop),
      (process.listeners = function(name) {
        return [];
      }),
      (process.binding = function(name) {
        throw new Error('process.binding is not supported');
      }),
      (process.cwd = function() {
        return '/';
      }),
      (process.chdir = function(dir) {
        throw new Error('process.chdir is not supported');
      }),
      (process.umask = function() {
        return 0;
      });
  },
  function(module, exports) {
    module.exports = function(arg) {
      return (
        arg &&
        'object' == typeof arg &&
        'function' == typeof arg.copy &&
        'function' == typeof arg.fill &&
        'function' == typeof arg.readUInt8
      );
    };
  },
  function(module, exports) {
    'function' == typeof Object.create
      ? (module.exports = function(ctor, superCtor) {
          (ctor.super_ = superCtor),
            (ctor.prototype = Object.create(superCtor.prototype, {
              constructor: { value: ctor, enumerable: !1, writable: !0, configurable: !0 }
            }));
        })
      : (module.exports = function(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {};
          (TempCtor.prototype = superCtor.prototype),
            (ctor.prototype = new TempCtor()),
            (ctor.prototype.constructor = ctor);
        });
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      1
    );
    __webpack_require__.n(
      _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__
    ).a;
  },
  function(module, exports, __webpack_require__) {
    (exports = module.exports = __webpack_require__(4)(!1)).i(__webpack_require__(13), ''),
      exports.push([module.i, '\n', '']);
  },
  function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(4)(!1)).push([
      module.i,
      '.gantt-elastic__main-view svg{\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line, .gantt-elastic__grid-vertical-line{\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > *{\n  margin: 0px;\n}\n.gantt-elastic .p-2{\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container , .gantt-elastic__main-view-container{\n  overflow: hidden;\n  max-width:100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type{\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type{\n  border-bottom:1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container{\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value{\n  position: absolute;\n}\n',
      ''
    ]);
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    var external_Vue_ = __webpack_require__(2),
      external_Vue_default = __webpack_require__.n(external_Vue_),
      render = function() {
        var _h = this.$createElement,
          _c = this._self._c || _h;
        return _c(
          'gantt-elastic',
          { attrs: { tasks: this.tasks, options: this.options } },
          [
            _c('gantt-header', { attrs: { slot: 'header' }, slot: 'header' }),
            this._v(' '),
            _c('gantt-footer', { attrs: { slot: 'footer' }, slot: 'footer' })
          ],
          1
        );
      };
    render._withStripped = !0;
    var external_Vuex_ = __webpack_require__(3),
      external_Vuex_default = __webpack_require__.n(external_Vuex_),
      GanttElasticvue_type_template_id_02c6304c_render = function() {
        var _h = this.$createElement,
          _c = this._self._c || _h;
        return _c(
          'div',
          { staticClass: 'gantt-elastic' },
          [
            this._t('header'),
            this._v(' '),
            _c('main-view', { attrs: { tasks: this.tasks, options: this.options } }),
            this._v(' '),
            this._t('footer')
          ],
          2
        );
      };
    GanttElasticvue_type_template_id_02c6304c_render._withStripped = !0;
    var dayjs_min = __webpack_require__(0),
      dayjs_min_default = __webpack_require__.n(dayjs_min),
      MainViewvue_type_template_id_0bc4212e_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c('div', { staticClass: 'gantt-elastic__main-view', style: _vm.root.style('main-view') }, [
          _c(
            'div',
            {
              staticClass: 'gantt-elastic__main-container-wrapper',
              style: _vm.root.style('main-container-wrapper', {
                height: _vm.$store.state.GanttElastic.options.height + 'px'
              })
            },
            [
              _c(
                'div',
                {
                  ref: 'mainView',
                  staticClass: 'gantt-elastic__main-container',
                  style: _vm.root.style('main-container', {
                    width: _vm.getWidth + 'px',
                    height: _vm.$store.state.GanttElastic.options.height + 'px'
                  })
                },
                [
                  _c(
                    'div',
                    {
                      staticClass: 'gantt-elastic__container',
                      style: _vm.root.style('container'),
                      on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                    },
                    [
                      _c(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: _vm.$store.state.GanttElastic.options.taskList.display,
                              expression: '$store.state.GanttElastic.options.taskList.display'
                            }
                          ],
                          ref: 'taskList',
                          staticClass: 'gantt-elastic__task-list-container',
                          style: _vm.root.style('task-list-container', {
                            width: _vm.$store.state.GanttElastic.options.taskList.finalWidth + 'px',
                            height: _vm.$store.state.GanttElastic.options.height + 'px'
                          })
                        },
                        [_c('task-list')],
                        1
                      ),
                      _vm._v(' '),
                      _c(
                        'div',
                        {
                          ref: 'chartContainer',
                          staticClass: 'gantt-elastic__main-view-container',
                          on: {
                            mousedown: _vm.chartMouseDown,
                            touchstart: _vm.chartMouseDown,
                            mouseup: _vm.chartMouseUp,
                            touchend: _vm.chartMouseUp,
                            mousemove: function($event) {
                              return $event.preventDefault(), _vm.chartMouseMove($event);
                            },
                            touchmove: function($event) {
                              return $event.preventDefault(), _vm.chartMouseMove($event);
                            },
                            wheel: function($event) {
                              return $event.preventDefault(), _vm.chartWheel($event);
                            }
                          }
                        },
                        [_c('chart')],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(' '),
              _c(
                'div',
                {
                  ref: 'chartScrollContainerVertical',
                  staticClass: 'gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical',
                  style: _vm.root.style(
                    'chart-scroll-container',
                    'chart-scroll-container--vertical',
                    _vm.verticalStyle
                  ),
                  on: { scroll: _vm.onVerticalScroll }
                },
                [
                  _c('div', {
                    staticClass: 'gantt-elastic__chart-scroll--vertical',
                    style: { width: '1px', height: _vm.$store.state.GanttElastic.options.allVisibleTasksHeight + 'px' }
                  })
                ]
              )
            ]
          ),
          _vm._v(' '),
          _c(
            'div',
            {
              ref: 'chartScrollContainerHorizontal',
              staticClass: 'gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal',
              style: _vm.root.style('chart-scroll-container', 'chart-scroll-container--horizontal', {
                marginLeft: _vm.getMarginLeft
              }),
              on: { scroll: _vm.onHorizontalScroll }
            },
            [
              _c('div', {
                staticClass: 'gantt-elastic__chart-scroll--horizontal',
                style: { height: '1px', width: _vm.$store.state.GanttElastic.options.width + 'px' }
              })
            ]
          )
        ]);
      };
    MainViewvue_type_template_id_0bc4212e_render._withStripped = !0;
    var TaskListvue_type_template_id_6e11f12f_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'div',
        {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: _vm.$store.state.GanttElastic.options.taskList.display,
              expression: '$store.state.GanttElastic.options.taskList.display'
            }
          ],
          ref: 'taskListWrapper',
          staticClass: 'gantt-elastic__task-list-wrapper',
          style: _vm.root.style('task-list-wrapper', { width: '100%', height: '100%' })
        },
        [
          _c(
            'div',
            { ref: 'taskList', staticClass: 'gantt-elastic__task-list', style: _vm.root.style('task-list') },
            [
              _c('task-list-header'),
              _vm._v(' '),
              _c(
                'div',
                {
                  ref: 'taskListItems',
                  staticClass: 'gantt-elastic__task-list-items',
                  style: _vm.root.style('task-list-items', {
                    height: _vm.$store.state.GanttElastic.options.rowsHeight + 'px'
                  })
                },
                _vm._l(_vm.root.visibleTasks, function(task) {
                  return _c('task-list-item', {
                    key: task.id,
                    attrs: { task: task, 'expander-style': _vm.getListExpanderStyle(task) }
                  });
                }),
                1
              )
            ],
            1
          )
        ]
      );
    };
    TaskListvue_type_template_id_6e11f12f_render._withStripped = !0;
    var TaskListHeadervue_type_template_id_aefdd7c8_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'div',
        {
          staticClass: 'gantt-elastic__task-list-header',
          style: _vm.root.style('task-list-header', {
            height: _vm.$store.state.GanttElastic.options.calendar.height + 'px',
            'margin-bottom': _vm.$store.state.GanttElastic.options.calendar.gap + 'px'
          })
        },
        _vm._l(_vm.root.getTaskListColumns, function(column) {
          return _c(
            'div',
            {
              key: column._id,
              staticClass: 'gantt-elastic__task-list-header-column',
              style: _vm.root.style(
                'task-list-header-column',
                column.style['task-list-header-column'],
                _vm.getStyle(column)
              )
            },
            [
              column.expander
                ? _c('task-list-expander', {
                    attrs: { tasks: _vm.collapsible, options: _vm.$store.state.GanttElastic.options.taskList.expander }
                  })
                : _vm._e(),
              _vm._v(' '),
              _c(
                'div',
                {
                  staticClass: 'gantt-elastic__task-list-header-label',
                  style: _vm.root.style('task-list-header-label', column.style['task-list-header-label']),
                  attrs: { column: column },
                  on: { mouseup: _vm.resizerMouseUp }
                },
                [_vm._v(_vm._s(column.label))]
              ),
              _vm._v(' '),
              _c(
                'div',
                {
                  staticClass: 'gantt-elastic__task-list-header-resizer-wrapper',
                  style: _vm.root.style(
                    'task-list-header-resizer-wrapper',
                    column.style['task-list-header-resizer-wrapper']
                  ),
                  attrs: { column: column },
                  on: {
                    mousedown: function($event) {
                      return _vm.resizerMouseDown($event, column);
                    }
                  }
                },
                [
                  _c(
                    'div',
                    {
                      staticClass: 'gantt-elastic__task-list-header-resizer',
                      style: _vm.root.style('task-list-header-resizer', column.style['task-list-header-resizer'])
                    },
                    [
                      _c('div', {
                        staticClass: 'gantt-elastic__task-list-header-resizer-dot',
                        style: _vm.root.style(
                          'task-list-header-resizer-dot',
                          column.style['task-list-header-resizer-dot']
                        )
                      }),
                      _vm._v(' '),
                      _c('div', {
                        staticClass: 'gantt-elastic__task-list-header-resizer-dot',
                        style: _vm.root.style(
                          'task-list-header-resizer-dot',
                          column.style['task-list-header-resizer-dot']
                        )
                      }),
                      _vm._v(' '),
                      _c('div', {
                        staticClass: 'gantt-elastic__task-list-header-resizer-dot',
                        style: _vm.root.style(
                          'task-list-header-resizer-dot',
                          column.style['task-list-header-resizer-dot']
                        )
                      })
                    ]
                  )
                ]
              )
            ],
            1
          );
        }),
        0
      );
    };
    TaskListHeadervue_type_template_id_aefdd7c8_render._withStripped = !0;
    var Expandervue_type_template_id_09a21177_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'div',
        { class: _vm.getClassPrefix() + '-wrapper', style: this.root.style(this.getClassPrefix(!1) + '-wrapper') },
        [
          _vm.allChildren.length
            ? _c(
                'svg',
                {
                  class: _vm.getClassPrefix() + '-content',
                  style: _vm.root.style(_vm.getClassPrefix(!1) + '-content'),
                  attrs: { width: _vm.options.size, height: _vm.options.size }
                },
                [
                  _c('rect', {
                    class: _vm.getClassPrefix() + '-border',
                    style: _vm.root.style(_vm.getClassPrefix(!1) + '-border', _vm.borderStyle),
                    attrs: {
                      x: _vm.border,
                      y: _vm.border,
                      width: _vm.options.size - 2 * _vm.border,
                      height: _vm.options.size - 2 * _vm.border,
                      rx: '2',
                      ry: '2'
                    },
                    on: { click: _vm.toggle }
                  }),
                  _vm._v(' '),
                  _vm.allChildren.length
                    ? _c('line', {
                        class: _vm.getClassPrefix() + '-line',
                        style: _vm.root.style(_vm.getClassPrefix(!1) + '-line'),
                        attrs: {
                          x1: _vm.lineOffset,
                          y1: _vm.options.size / 2,
                          x2: _vm.options.size - _vm.lineOffset,
                          y2: _vm.options.size / 2
                        },
                        on: { click: _vm.toggle }
                      })
                    : _vm._e(),
                  _vm._v(' '),
                  _vm.collapsed
                    ? _c('line', {
                        class: _vm.getClassPrefix() + '-line',
                        style: _vm.root.style(_vm.getClassPrefix(!1) + '-line'),
                        attrs: {
                          x1: _vm.options.size / 2,
                          y1: _vm.lineOffset,
                          x2: _vm.options.size / 2,
                          y2: _vm.options.size - _vm.lineOffset
                        },
                        on: { click: _vm.toggle }
                      })
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      );
    };
    function normalizeComponent(
      scriptExports,
      render,
      staticRenderFns,
      functionalTemplate,
      injectStyles,
      scopeId,
      moduleIdentifier,
      shadowMode
    ) {
      var hook,
        options = 'function' == typeof scriptExports ? scriptExports.options : scriptExports;
      if (
        (render && ((options.render = render), (options.staticRenderFns = staticRenderFns), (options._compiled = !0)),
        functionalTemplate && (options.functional = !0),
        scopeId && (options._scopeId = 'data-v-' + scopeId),
        moduleIdentifier
          ? ((hook = function(context) {
              (context =
                context ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                (context = __VUE_SSR_CONTEXT__),
                injectStyles && injectStyles.call(this, context),
                context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
            }),
            (options._ssrRegister = hook))
          : injectStyles &&
            (hook = shadowMode
              ? function() {
                  injectStyles.call(this, this.$root.$options.shadowRoot);
                }
              : injectStyles),
        hook)
      )
        if (options.functional) {
          options._injectStyles = hook;
          var originalRender = options.render;
          options.render = function(h, context) {
            return hook.call(context), originalRender(h, context);
          };
        } else {
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      return { exports: scriptExports, options: options };
    }
    Expandervue_type_template_id_09a21177_render._withStripped = !0;
    var component = normalizeComponent(
      {
        inject: ['root'],
        props: ['tasks', 'options'],
        data: () => ({ border: 0.5, borderStyle: { 'stroke-width': 0.5 }, lineOffset: 5 }),
        computed: {
          allChildren() {
            const children = [];
            return (
              this.tasks.forEach(task => {
                task.children.forEach(child => {
                  children.push(child);
                });
              }),
              children
            );
          },
          collapsed() {
            if (0 === this.tasks.length) return !1;
            let collapsed = 0;
            for (let i = 0, len = this.tasks.length; i < len; i++) this.tasks[i].collapsed && collapsed++;
            return collapsed === this.tasks.length;
          }
        },
        methods: {
          getClassPrefix(full = !0) {
            return `${full ? 'gantt-elastic__' : ''}${this.options.type}-expander`;
          },
          toggle() {
            if (0 === this.allChildren.length) return;
            const collapsed = !this.collapsed;
            this.tasks.forEach(task => {
              this.$store.commit(this.root.updateTaskMut, { id: task.id, collapsed: collapsed });
            });
          }
        }
      },
      Expandervue_type_template_id_09a21177_render,
      [],
      !1,
      null,
      null,
      null
    );
    component.options.__file = 'src/components/Expander.vue';
    var Expander = component.exports,
      TaskListHeader_component = normalizeComponent(
        {
          components: { TaskListExpander: Expander },
          inject: ['root'],
          data: () => ({ resizer: { moving: !1, x: 0 } }),
          computed: {
            getStyle() {
              return column => {
                return {
                  height:
                    this.$store.state.GanttElastic.options.calendar.height +
                    this.root.style('calendar-row-rect')['border-width'] +
                    'px',
                  width: column.finalWidth + 'px'
                };
              };
            },
            collapsible() {
              return this.$store.state.GanttElastic.tasks.filter(task => task.children.length > 0);
            }
          },
          methods: {
            resizerMouseDown(event, column) {
              this.resizerMoving ||
                ((this.resizer.moving = column),
                (this.resizer.x = event.clientX),
                (this.resizer.initialWidth = column.width),
                this.root.$emit('taskList-column-width-change-start', this.resizer.moving));
            },
            resizerMouseMove(event) {
              this.resizer.moving &&
                ((this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x),
                this.resizer.moving.width < this.$store.state.GanttElastic.options.taskList.minWidth &&
                  (this.resizer.moving.width = this.$store.state.GanttElastic.options.taskList.minWidth),
                this.root.$emit('taskList-column-width-change', this.resizer.moving));
            },
            resizerMouseUp(event) {
              this.resizer.moving &&
                (this.root.$emit('taskList-column-width-change', this.resizer.moving),
                this.root.$emit('taskList-column-width-change-stop', this.resizer.moving),
                (this.resizer.moving = !1));
            }
          },
          created() {
            (this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this))),
              (this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this))),
              this.root.$on('main-view-mousemove', this.resizerMouseMove),
              this.root.$on('main-view-mouseup', this.resizerMouseUp);
          },
          beforeDestroy() {
            document.removeEventListener('mouseup', this.resizerMouseUp),
              document.removeEventListener('mousemove', this.resizerMouseMove);
          }
        },
        TaskListHeadervue_type_template_id_aefdd7c8_render,
        [],
        !1,
        null,
        null,
        null
      );
    TaskListHeader_component.options.__file = 'src/components/TaskList/TaskListHeader.vue';
    var TaskListHeader = TaskListHeader_component.exports,
      TaskListItemvue_type_template_id_9716293c_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'div',
          { staticClass: 'gantt-elastic__task-list-item', style: _vm.root.style('task-list-item') },
          _vm._l(_vm.$store.state.GanttElastic.options.taskList.columns, function(column) {
            return _c(
              'item-column',
              { key: column._id, attrs: { column: column, task: _vm.task } },
              [
                column.expander
                  ? _c('task-list-expander', {
                      style: _vm.expanderStyle,
                      attrs: { tasks: [_vm.task], options: _vm.$store.state.GanttElastic.options.taskList.expander }
                    })
                  : _vm._e()
              ],
              1
            );
          }),
          1
        );
      };
    TaskListItemvue_type_template_id_9716293c_render._withStripped = !0;
    var ItemColumnvue_type_template_id_cb5a6c96_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'div',
        {
          staticClass: 'gantt-elastic__task-list-item-column',
          style: _vm.root.style('task-list-item-column', _vm.column.style['task-list-item-column'], {
            width: _vm.column.finalWidth + 'px',
            height: _vm.column.height + 'px'
          })
        },
        [
          _c(
            'div',
            {
              staticClass: 'gantt-elastic__task-list-item-value-wrapper',
              style: _vm.root.style('task-list-item-value-wrapper', _vm.column.style['task-list-item-value-wrapper'])
            },
            [
              _vm._t('default'),
              _vm._v(' '),
              _c(
                'div',
                {
                  staticClass: 'gantt-elastic__task-list-item-value-container',
                  style: _vm.root.style(
                    'task-list-item-value-container',
                    _vm.column.style['task-list-item-value-container']
                  )
                },
                [
                  _vm.html
                    ? _vm._e()
                    : _c(
                        'div',
                        {
                          staticClass: 'gantt-elastic__task-list-item-value',
                          style: _vm.root.style('task-list-item-value', _vm.column.style['task-list-item-value'])
                        },
                        [_vm._v(_vm._s(_vm.value))]
                      ),
                  _vm._v(' '),
                  _vm.html
                    ? _c('div', {
                        staticClass: 'gantt-elastic__task-list-item-value',
                        style: _vm.root.style('task-list-item-value', _vm.column.style['task-list-item-value']),
                        domProps: { innerHTML: _vm._s(_vm.value) }
                      })
                    : _vm._e()
                ]
              )
            ],
            2
          )
        ]
      );
    };
    ItemColumnvue_type_template_id_cb5a6c96_render._withStripped = !0;
    var ItemColumn_component = normalizeComponent(
      {
        inject: ['root'],
        props: ['column', 'task'],
        data: () => ({}),
        computed: {
          html() {
            return void 0 !== this.column.html && !0 === this.column.html;
          },
          value() {
            return 'function' == typeof this.column.value ? this.column.value(this.task) : this.task[this.column.value];
          }
        }
      },
      ItemColumnvue_type_template_id_cb5a6c96_render,
      [],
      !1,
      null,
      null,
      null
    );
    ItemColumn_component.options.__file = 'src/components/TaskList/ItemColumn.vue';
    var TaskListItem_component = normalizeComponent(
      {
        components: { TaskListExpander: Expander, ItemColumn: ItemColumn_component.exports },
        inject: ['root'],
        props: ['task', 'expanderStyle'],
        data: () => ({})
      },
      TaskListItemvue_type_template_id_9716293c_render,
      [],
      !1,
      null,
      null,
      null
    );
    TaskListItem_component.options.__file = 'src/components/TaskList/TaskListItem.vue';
    var TaskList_component = normalizeComponent(
      {
        components: { TaskListHeader: TaskListHeader, TaskListItem: TaskListItem_component.exports },
        inject: ['root'],
        data: () => ({}),
        mounted() {
          this.$store.commit(this.root.updateOptionsMut, {
            refs: {
              taskListWrapper: this.$refs.taskListWrapper,
              taskList: this.$refs.taskList,
              taskListItems: this.$refs.taskListItems
            }
          });
        },
        computed: {
          getListExpanderStyle() {
            return task => {
              const options = this.$store.state.GanttElastic.options;
              return {
                'padding-left':
                  (task.parents.length - 1) * options.taskList.expander.padding +
                  options.taskList.expander.margin +
                  'px',
                margin: 'auto 0px auto 10px'
              };
            };
          }
        }
      },
      TaskListvue_type_template_id_6e11f12f_render,
      [],
      !1,
      null,
      null,
      null
    );
    TaskList_component.options.__file = 'src/components/TaskList/TaskList.vue';
    var TaskList = TaskList_component.exports,
      Chartvue_type_template_id_67c3f5cd_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'div',
          {
            ref: 'chart',
            staticClass: 'gantt-elastic__chart',
            style: _vm.root.style('chart', { width: _vm.getWidth + 'px', height: _vm.getHeight + 'px' })
          },
          [
            _c('calendar'),
            _vm._v(' '),
            _c(
              'div',
              {
                style: _vm.root.style('chart-area', {
                  width: '100%',
                  height: _vm.$store.state.GanttElastic.options.rowsHeight + 'px'
                })
              },
              [
                _c(
                  'div',
                  {
                    ref: 'chartGraph',
                    staticClass: 'gantt-elastic__chart-graph',
                    style: _vm.root.style('chart-graph', { height: '100%' })
                  },
                  [
                    _c(
                      'svg',
                      {
                        ref: 'chart',
                        staticClass: 'gantt-elastic__chart',
                        style: _vm.root.style('chart'),
                        attrs: {
                          x: '0',
                          y: '0',
                          width: _vm.getWidth + 'px',
                          height: _vm.$store.state.GanttElastic.options.allVisibleTasksHeight + 'px',
                          xmlns: 'http://www.w3.org/2000/svg'
                        }
                      },
                      [
                        _c('days-highlight'),
                        _vm._v(' '),
                        _c('grid'),
                        _vm._v(' '),
                        _c('dependency-lines', { attrs: { tasks: _vm.root.visibleTasks } }),
                        _vm._v(' '),
                        _vm._l(_vm.root.visibleTasks, function(task) {
                          return _c(
                            'g',
                            {
                              key: task.id,
                              staticClass: 'gantt-elastic__chart-row-wrapper',
                              style: _vm.root.style('chart-row-wrapper'),
                              attrs: { task: task }
                            },
                            [_c(task.type, { tag: 'component', attrs: { task: task } })],
                            1
                          );
                        })
                      ],
                      2
                    )
                  ]
                )
              ]
            )
          ],
          1
        );
      };
    Chartvue_type_template_id_67c3f5cd_render._withStripped = !0;
    var Gridvue_type_template_id_2bf979a7_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'svg',
        {
          ref: 'chart',
          staticClass: 'gantt-elastic__grid-lines-wrapper',
          style: _vm.root.style('grid-lines-wrapper'),
          attrs: {
            x: '0',
            y: '0',
            width: _vm.$store.state.GanttElastic.options.width,
            height: _vm.$store.state.GanttElastic.options.allVisibleTasksHeight,
            xmlns: 'http://www.w3.org/2000/svg'
          }
        },
        [
          _c(
            'g',
            { staticClass: 'gantt-elastic__grid-lines', style: _vm.root.style('grid-lines') },
            [
              _vm._l(_vm.horizontalLines, function(line) {
                return _c('line', {
                  key: line.key,
                  staticClass: 'gantt-elastic__grid-line-horizontal',
                  style: _vm.root.style('grid-line-horizontal'),
                  attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
                });
              }),
              _vm._v(' '),
              _vm._l(_vm.verticalLines, function(line) {
                return _c('line', {
                  key: line.key,
                  staticClass: 'gantt-elastic__grid-line-vertical',
                  style: _vm.root.style('grid-line-vertical'),
                  attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
                });
              }),
              _vm._v(' '),
              _c('line', {
                staticClass: 'gantt-elastic__grid-line-time',
                style: _vm.root.style('grid-line-time'),
                attrs: {
                  x1: _vm.timeLinePosition.x,
                  y1: _vm.timeLinePosition.y1,
                  x2: _vm.timeLinePosition.x,
                  y2: _vm.timeLinePosition.y2
                }
              })
            ],
            2
          )
        ]
      );
    };
    Gridvue_type_template_id_2bf979a7_render._withStripped = !0;
    var Grid_component = normalizeComponent(
      {
        inject: ['root'],
        data: () => ({}),
        created() {
          this.root.$on('recenterPosition', this.recenterPosition);
        },
        mounted() {
          this.$nextTick(() => {
            this.$nextTick(() => {
              this.root.scrollToTime(this.timeLinePosition.time);
            });
          });
        },
        methods: {
          recenterPosition() {
            this.root.scrollToTime(this.timeLinePosition.time);
          }
        },
        computed: {
          verticalLines() {
            let lines = [];
            const options = this.$store.state.GanttElastic.options;
            return (
              options.times.steps.forEach(step => {
                this.root.isInsideViewPort(step.offset.px, 1) &&
                  lines.push({
                    key: step.time,
                    x1: step.offset.px,
                    y1: 0,
                    x2: step.offset.px,
                    y2:
                      this.$store.state.GanttElastic.tasks.length *
                        (options.row.height + 2 * options.chart.grid.horizontal.gap) +
                      this.root.style('grid-line-vertical')['stroke-width']
                  });
              }),
              lines
            );
          },
          horizontalLines() {
            let lines = [];
            const options = this.$store.state.GanttElastic.options;
            for (let index = 0, len = this.root.visibleTasks.length; index <= len; index++) {
              const y =
                index * (options.row.height + 2 * options.chart.grid.horizontal.gap) +
                this.root.style('grid-line-vertical')['stroke-width'] / 2;
              lines.push({ key: 'hl' + index, x1: 0, y1: y, x2: '100%', y2: y });
            }
            return lines;
          },
          inViewPort() {
            return line => {
              const options = this.$store.state.GanttElastic.options;
              return line.x1 >= options.scroll.chart.left && line.x1 <= options.scroll.chart.right;
            };
          },
          timeLinePosition() {
            const d = new Date(),
              current = d.getTime(),
              currentOffset = this.root.timeToPixelOffsetX(current),
              timeLine = { x: 0, y1: 0, y2: '100%', dateTime: '', time: current };
            return (timeLine.x = currentOffset), (timeLine.dateTime = d.toLocaleDateString()), timeLine;
          }
        }
      },
      Gridvue_type_template_id_2bf979a7_render,
      [],
      !1,
      null,
      null,
      null
    );
    Grid_component.options.__file = 'src/components/Chart/Grid.vue';
    var Grid = Grid_component.exports,
      DaysHighlightvue_type_template_id_1bfe64e8_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _vm.showWorkingDays
          ? _c(
              'g',
              {
                staticClass: 'gantt-elastic__chart-days-highlight-container',
                style: _vm.root.style('chart-days-highlight-container')
              },
              _vm._l(_vm.workingDays, function(day) {
                return _c('rect', {
                  key: _vm.getKey(day),
                  staticClass: 'gantt-elastic__chart-days-highlight-rect',
                  style: _vm.root.style('chart-days-highlight-rect'),
                  attrs: { x: day.offset.px, y: '0', width: day.width.px, height: '100%' }
                });
              }),
              0
            )
          : _vm._e();
      };
    DaysHighlightvue_type_template_id_1bfe64e8_render._withStripped = !0;
    var DaysHighlight_component = normalizeComponent(
      {
        inject: ['root'],
        data: () => ({}),
        methods: { getKey: day => dayjs_min_default()(day.time).format('YYYY-MM-DD') },
        computed: {
          workingDays() {
            return this.$store.state.GanttElastic.options.times.steps.filter(
              step =>
                -1 ===
                this.$store.state.GanttElastic.options.calendar.workingDays.indexOf(
                  dayjs_min_default()(step.time).day()
                )
            );
          },
          showWorkingDays() {
            const calendar = this.$store.state.GanttElastic.options.calendar;
            return !(
              void 0 === calendar.workingDays ||
              !Array.isArray(calendar.workingDays) ||
              !calendar.workingDays.length
            );
          }
        }
      },
      DaysHighlightvue_type_template_id_1bfe64e8_render,
      [],
      !1,
      null,
      null,
      null
    );
    DaysHighlight_component.options.__file = 'src/components/Chart/DaysHighlight.vue';
    var DaysHighlight = DaysHighlight_component.exports,
      Calendarvue_type_template_id_dee108e2_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'div',
          {
            staticClass: 'gantt-elastic__calendar-wrapper',
            style: _vm.root.style('calendar-wrapper', {
              'margin-bottom': _vm.$store.state.GanttElastic.options.calendar.gap + 'px'
            })
          },
          [
            _c(
              'div',
              {
                staticClass: 'gantt-elastic__calendar',
                style: _vm.root.style('calendar', { width: _vm.getWidth + 'px' })
              },
              [
                _vm.$store.state.GanttElastic.options.calendar.month.display
                  ? _c('calendar-row', {
                      attrs: { items: _vm.$store.state.GanttElastic.options.calendar.months, which: 'month' }
                    })
                  : _vm._e(),
                _vm._v(' '),
                _vm.$store.state.GanttElastic.options.calendar.day.display
                  ? _c('calendar-row', {
                      attrs: { items: _vm.$store.state.GanttElastic.options.calendar.days, which: 'day' }
                    })
                  : _vm._e(),
                _vm._v(' '),
                _vm.$store.state.GanttElastic.options.calendar.hour.display
                  ? _c('calendar-row', {
                      attrs: { items: _vm.$store.state.GanttElastic.options.calendar.hours, which: 'hour' }
                    })
                  : _vm._e()
              ],
              1
            )
          ]
        );
      };
    Calendarvue_type_template_id_dee108e2_render._withStripped = !0;
    var CalendarRowvue_type_template_id_0daf06fb_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'div',
        {
          class: 'gantt-elastic__calendar-row gantt-elastic__calendar-row-' + _vm.which,
          style: _vm.root.style('calendar-row', 'calendar-row-' + _vm.which)
        },
        _vm._l(_vm.items, function(item) {
          return _c(
            'div',
            {
              key: item.key,
              class: 'gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--' + _vm.which,
              style: _vm.root.style('calendar-row-rect', 'calendar-row-rect--' + _vm.which, {
                width: item.width + 'px',
                height: item.height + 'px'
              })
            },
            [
              _c(
                'div',
                {
                  class: 'gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--' + _vm.which,
                  style: _vm.root.style('calendar-row-text', 'calendar-row-text--' + _vm.which, _vm.getStyle(item))
                },
                [_vm._v(_vm._s(item.label))]
              )
            ]
          );
        }),
        0
      );
    };
    CalendarRowvue_type_template_id_0daf06fb_render._withStripped = !0;
    var CalendarRow_component = normalizeComponent(
      {
        inject: ['root'],
        props: ['items', 'which'],
        data: () => ({ anchor: 'middle' }),
        computed: {
          getTextX() {
            let x = this.item.x + this.item.width / 2;
            if ('month' === this.which && this.root.isInsideViewPort(this.item.x, this.item.width, 0)) {
              this.anchor = 'start';
              let scrollWidth =
                this.$store.state.GanttElastic.options.scroll.chart.right -
                this.$store.state.GanttElastic.options.scroll.chart.left;
              (x =
                this.$store.state.GanttElastic.options.scroll.chart.left +
                scrollWidth / 2 -
                this.item.textWidth / 2 +
                2) +
                this.item.textWidth +
                2 >
              this.item.x + this.item.width
                ? (x = this.item.x + this.item.width - this.item.textWidth - 2)
                : x < this.item.x && (x = this.item.x + 2);
            }
            return x;
          },
          getTextY() {
            return this.item.y + this.item.height / 2;
          },
          getStyle() {
            return item => ({
              'line-height':
                item.height -
                2 *
                  parseFloat(this.root.style('calendar-row-rect', 'calendar-row-rect--' + this.which)['border-width']) +
                'px'
            });
          }
        }
      },
      CalendarRowvue_type_template_id_0daf06fb_render,
      [],
      !1,
      null,
      null,
      null
    );
    CalendarRow_component.options.__file = 'src/components/Calendar/CalendarRow.vue';
    var Calendar_component = normalizeComponent(
      {
        components: { CalendarRow: CalendarRow_component.exports },
        inject: ['root'],
        data: () => ({}),
        created() {
          this.root.$on('scope-change', this.regenerate),
            this.root.$on('times-timeZoom-change', this.regenerate),
            this.root.$on('tasks-updated', this.regenerate),
            this.root.$on('options-updated', this.regenerate),
            this.root.$on('calendar-recalculate', this.regenerate);
        },
        mounted() {
          this.regenerate();
        },
        methods: {
          howManyHoursFit(dayIndex) {
            const additionalSpace = 2 * parseFloat(this.root.style('calendar-row-rect')['border-width']) + 2;
            let fullCellWidth = this.$store.state.GanttElastic.options.times.steps[dayIndex].width.px,
              formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.hour.format);
            for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2))
              for (let formatName of formatNames)
                if (
                  (this.$store.state.GanttElastic.options.calendar.hour.maxWidths[formatName] + additionalSpace) *
                    hours <=
                    fullCellWidth &&
                  hours > 1
                )
                  return { count: hours, type: formatName };
            return { count: 0, type: '' };
          },
          howManyDaysFit() {
            const additionalSpace = 2 * parseFloat(this.root.style('calendar-row-rect')['border-width']) + 2;
            let fullWidth = this.$store.state.GanttElastic.options.width,
              formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.day.format);
            for (
              let days = this.$store.state.GanttElastic.options.times.steps.length;
              days > 1;
              days = Math.ceil(days / 2)
            )
              for (let formatName of formatNames)
                if (
                  (this.$store.state.GanttElastic.options.calendar.day.maxWidths[formatName] + additionalSpace) *
                    days <=
                    fullWidth &&
                  days > 1
                )
                  return { count: days, type: formatName };
            return { count: 0, type: '' };
          },
          howManyMonthsFit() {
            const additionalSpace = 2 * parseFloat(this.root.style('calendar-row-rect')['border-width']) + 2;
            let fullWidth = this.$store.state.GanttElastic.options.width,
              formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format),
              currentMonth = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime),
              previousMonth = currentMonth.clone();
            const lastTime = this.$store.state.GanttElastic.options.times.lastTime;
            let monthsCount = 1;
            for (; currentMonth.valueOf() <= lastTime; )
              (currentMonth = currentMonth.add(1, 'day')),
                previousMonth.month() !== currentMonth.month() && monthsCount++,
                (previousMonth = currentMonth.clone());
            for (let months = monthsCount; months > 1; months = Math.ceil(months / 2))
              for (let formatName of formatNames)
                if (
                  (this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + additionalSpace) *
                    months <=
                    fullWidth &&
                  months > 1
                )
                  return { count: months, type: formatName };
            return { count: 1, type: formatNames[0] };
          },
          hourTextStyle() {
            return (
              'font-family:' +
              this.$store.state.GanttElastic.options.calendar.hour.fontFamily +
              ';font-size:' +
              this.$store.state.GanttElastic.options.calendar.hour.fontSize
            );
          },
          dayTextStyle() {
            return (
              'font-family:' +
              this.$store.state.GanttElastic.options.calendar.day.fontFamily +
              ';font-size:' +
              this.$store.state.GanttElastic.options.calendar.day.fontSize
            );
          },
          generateHours() {
            let hours = [];
            if (!this.$store.state.GanttElastic.options.calendar.hour.display)
              return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours: [] } });
            for (
              let hourIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length;
              hourIndex < len;
              hourIndex++
            ) {
              const hoursCount = this.howManyHoursFit(hourIndex);
              if (0 === hoursCount.count)
                return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours: hours } });
              const hourStep = 24 / hoursCount.count,
                hourWidthPx = this.$store.state.GanttElastic.options.times.steps[hourIndex].width.px / hoursCount.count;
              for (let i = 0, len = hoursCount.count; i < len; i++) {
                const date = dayjs_min_default()(
                  this.$store.state.GanttElastic.options.times.steps[hourIndex].time
                ).add(i * hourStep, 'hour');
                let textWidth = 0;
                void 0 !== this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex] &&
                  (textWidth = this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex][hoursCount.type]);
                let x = this.$store.state.GanttElastic.options.times.steps[hourIndex].offset.px + hourWidthPx * i;
                hours.push({
                  index: hourIndex,
                  key: this.$store.state.GanttElastic.options.times.steps[hourIndex].time + 'h' + i,
                  x: x,
                  y:
                    this.$store.state.GanttElastic.options.calendar.day.height +
                    this.$store.state.GanttElastic.options.calendar.month.height,
                  width: hourWidthPx,
                  textWidth: textWidth,
                  height: this.$store.state.GanttElastic.options.calendar.hour.height,
                  label: this.$store.state.GanttElastic.options.calendar.hour.format[hoursCount.type](date),
                  type: hoursCount.type
                });
              }
            }
            return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours: hours } });
          },
          generateDays() {
            let days = [];
            if (!this.$store.state.GanttElastic.options.calendar.day.display)
              return this.$store.commit(this.root.updateOptionsMut, { calendar: { days: [] } });
            const daysCount = this.howManyDaysFit();
            if (0 === daysCount.count)
              return this.$store.commit(this.root.updateOptionsMut, { calendar: { days: days } });
            const dayStep = Math.ceil(this.$store.state.GanttElastic.options.times.steps.length / daysCount.count);
            for (
              let dayIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length;
              dayIndex < len;
              dayIndex += dayStep
            ) {
              let dayWidthPx = 0;
              for (let currentStep = 0; currentStep < dayStep; currentStep++)
                void 0 !== this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep] &&
                  (dayWidthPx += this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep].width.px);
              const date = dayjs_min_default()(this.$store.state.GanttElastic.options.times.steps[dayIndex].time);
              let textWidth = 0;
              void 0 !== this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex] &&
                (textWidth = this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex][daysCount.type]);
              let x = this.$store.state.GanttElastic.options.times.steps[dayIndex].offset.px;
              days.push({
                index: dayIndex,
                key: this.$store.state.GanttElastic.options.times.steps[dayIndex].time + 'd',
                x: x,
                y: this.$store.state.GanttElastic.options.calendar.month.height,
                width: dayWidthPx,
                textWidth: textWidth,
                height: this.$store.state.GanttElastic.options.calendar.day.height,
                label: this.$store.state.GanttElastic.options.calendar.day.format[daysCount.type](date),
                type: daysCount.type
              });
            }
            return this.$store.commit(this.root.updateOptionsMut, { calendar: { days: days } });
          },
          generateMonths() {
            let months = [];
            if (!this.$store.state.GanttElastic.options.calendar.month.display)
              return this.$store.commit(this.root.updateOptionsMut, { calendar: { months: [] } });
            const monthsCount = this.howManyMonthsFit();
            let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format),
              currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
            for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
              let monthWidth = 0,
                monthOffset = Number.MAX_SAFE_INTEGER,
                finalDate = dayjs_min_default()(currentDate)
                  .add(1, 'month')
                  .startOf('month');
              finalDate.valueOf() > this.$store.state.GanttElastic.options.times.lastTime &&
                (finalDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime));
              for (let step = 0, len = this.$store.state.GanttElastic.options.times.steps.length; step < len; step++) {
                let currentStep = this.$store.state.GanttElastic.options.times.steps[step];
                currentStep.time >= currentDate.valueOf() &&
                  currentStep.time < finalDate.valueOf() &&
                  ((monthWidth += currentStep.width.px),
                  currentStep.offset.px < monthOffset && (monthOffset = currentStep.offset.px));
              }
              let choosenFormatName,
                label = '';
              for (let formatName of formatNames)
                this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth &&
                  ((label = this.$store.state.GanttElastic.options.calendar.month.format[formatName](
                    currentDate.toDate()
                  )),
                  (choosenFormatName = formatName));
              let textWidth = 0;
              void 0 !== this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex] &&
                (textWidth = this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex][
                  choosenFormatName
                ]);
              let x = monthOffset;
              months.push({
                index: monthIndex,
                key: monthIndex + 'm',
                x: x,
                y: 0,
                width: monthWidth,
                textWidth: textWidth,
                type: choosenFormatName,
                height: this.$store.state.GanttElastic.options.calendar.month.height,
                label: label
              }),
                (currentDate = currentDate.add(1, 'month').startOf('month')).valueOf() >
                  this.$store.state.GanttElastic.options.times.lastDate &&
                  (currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastDate));
            }
            return this.$store.commit(this.root.updateOptionsMut, { calendar: { months: months } });
          },
          regenerate() {
            this.generateHours(), this.generateDays(), this.generateMonths(), this.root.calculateCalendarDimensions();
          }
        },
        computed: {
          getWidth() {
            return this.$store.state.GanttElastic.options.width;
          },
          monthsStyle() {
            return this.root.mergeDeep(
              {},
              this.$store.state.GanttElastic.options.calendar.styles.row,
              this.$store.state.GanttElastic.options.calendar.month.style
            );
          },
          daysStyle() {
            return this.root.mergeDeep(
              {},
              this.$store.state.GanttElastic.options.calendar.styles.row,
              this.$store.state.GanttElastic.options.calendar.day.style
            );
          },
          hoursStyle() {
            return this.root.mergeDeep(
              {},
              this.$store.state.GanttElastic.options.calendar.styles.row,
              this.$store.state.GanttElastic.options.calendar.hour.style
            );
          },
          getDays() {
            return this.days.filter(day => this.root.isInsideViewPort(day.x, day.width));
          },
          getHours() {
            return this.hours.filter(hour => this.root.isInsideViewPort(hour.x, hour.width));
          },
          getMonths() {
            return this.months.filter(month => this.root.isInsideViewPort(month.x, month.width));
          }
        }
      },
      Calendarvue_type_template_id_dee108e2_render,
      [],
      !1,
      null,
      null,
      null
    );
    Calendar_component.options.__file = 'src/components/Calendar/Calendar.vue';
    var Calendar = Calendar_component.exports,
      DependencyLinesvue_type_template_id_f1cbf6ba_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'svg',
          {
            staticClass: 'gantt-elastic__chart-dependency-lines-container',
            style: _vm.root.style('chart-dependency-lines-container'),
            attrs: { x: '0', y: '0', width: '100%', height: '100%' }
          },
          _vm._l(_vm.dependencyTasks, function(task) {
            return _c(
              'g',
              { key: task.id, attrs: { task: task } },
              _vm._l(task.dependencyLines, function(dependencyLine) {
                return _c('path', {
                  key: dependencyLine.id,
                  staticClass: 'gantt-elastic__chart-dependency-lines-path',
                  style: _vm.root.style('chart-dependency-lines-path', task.style['chart-dependency-lines-path']),
                  attrs: { task: task, d: dependencyLine.points }
                });
              }),
              0
            );
          }),
          0
        );
      };
    DependencyLinesvue_type_template_id_f1cbf6ba_render._withStripped = !0;
    var DependencyLines_component = normalizeComponent(
      {
        inject: ['root'],
        props: ['tasks'],
        data: () => ({}),
        methods: {
          getPoints(fromTaskId, toTaskId) {
            const fromTask = this.root.getTask(fromTaskId),
              toTask = this.root.getTask(toTaskId);
            if (
              null === fromTask ||
              null === toTask ||
              !this.root.isTaskVisible(toTask) ||
              !this.root.isTaskVisible(fromTask)
            )
              return null;
            const startX = fromTask.x + fromTask.width,
              startY = fromTask.y + fromTask.height / 2,
              stopX = toTask.x,
              stopY = toTask.y + toTask.height / 2,
              distanceX = stopX - startX;
            let distanceY,
              yMultiplier = 1;
            stopY >= startY ? (distanceY = stopY - startY) : ((distanceY = startY - stopY), (yMultiplier = -1));
            let points = `M ${startX} ${startY}\n          L ${startX + 10},${startY} `;
            return (points +=
              distanceX <= 14
                ? `Q ${startX + 10 + 4},${startY} ${startX + 10 + 4},${startY +
                    4 * yMultiplier}\n            L ${startX + 10 + 4},${startY +
                    (distanceY * yMultiplier) / 2 -
                    4 * yMultiplier}\n            Q ${startX + 10 + 4},${startY +
                    (distanceY * yMultiplier) / 2} ${startX + 10},${startY +
                    (distanceY * yMultiplier) / 2}\n            L ${startX - 10 + distanceX},${startY +
                    (distanceY * yMultiplier) / 2}\n            Q ${startX - 10 + distanceX - 4},${startY +
                    (distanceY * yMultiplier) / 2} ${startX - 10 + distanceX - 4},${startY +
                    (distanceY * yMultiplier) / 2 +
                    4 * yMultiplier}\n            L ${startX - 10 + distanceX - 4},${stopY -
                    4 * yMultiplier}\n            Q ${startX - 10 + distanceX - 4},${stopY} ${startX -
                    10 +
                    distanceX},${stopY}\n            L ${stopX},${stopY}`
                : `L ${startX + distanceX / 2 - 4},${startY}\n            Q ${startX +
                    distanceX / 2},${startY} ${startX + distanceX / 2},${startY +
                    4 * yMultiplier}\n            L ${startX + distanceX / 2},${stopY -
                    4 * yMultiplier}\n            Q ${startX + distanceX / 2},${stopY} ${startX +
                    distanceX / 2 +
                    4},${stopY}\n            L ${stopX},${stopY}`);
          }
        },
        computed: {
          dependencyTasks() {
            return this.tasks
              .filter(task => void 0 !== task.dependentOn)
              .map(task => {
                const props = { id: task.id };
                return (
                  (props.dependencyLines = task.dependentOn.map(id => ({ points: this.getPoints(id, task.id) }))),
                  this.$store.commit(this.root.updateTaskMut, props),
                  task
                );
              })
              .filter(task => null !== task.dependencyLines.points);
          }
        }
      },
      DependencyLinesvue_type_template_id_f1cbf6ba_render,
      [],
      !1,
      null,
      null,
      null
    );
    DependencyLines_component.options.__file = 'src/components/Chart/DependencyLines.vue';
    var DependencyLines = DependencyLines_component.exports,
      Taskvue_type_template_id_e9c23eca_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'g',
          {
            staticClass: 'gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper',
            style: _vm.root.style(
              'chart-row-bar-wrapper',
              'chart-row-task-wrapper',
              _vm.task.style['chart-row-bar-wrapper']
            )
          },
          [
            _vm.displayExpander
              ? _c(
                  'foreignObject',
                  {
                    staticClass: 'gantt-elastic__chart-expander gantt-elastic__chart-expander--task',
                    style: _vm.root.style('chart-expander', 'chart-expander--task', _vm.task.style['chart-expander']),
                    attrs: {
                      x:
                        _vm.task.x -
                        _vm.$store.state.GanttElastic.options.chart.expander.offset -
                        _vm.$store.state.GanttElastic.options.chart.expander.size,
                      y:
                        _vm.task.y +
                        (_vm.$store.state.GanttElastic.options.row.height -
                          _vm.$store.state.GanttElastic.options.chart.expander.size) /
                          2,
                      width: _vm.$store.state.GanttElastic.options.chart.expander.size,
                      height: _vm.$store.state.GanttElastic.options.chart.expander.size
                    }
                  },
                  [
                    _c('expander', {
                      attrs: { tasks: [_vm.task], options: _vm.$store.state.GanttElastic.options.chart.expander }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(' '),
            _c(
              'svg',
              {
                staticClass: 'gantt-elastic__chart-row-bar gantt-elastic__chart-row-task',
                style: _vm.root.style('chart-row-bar', 'chart-row-task', _vm.task.style['chart-row-bar']),
                attrs: {
                  x: _vm.task.x,
                  y: _vm.task.y,
                  width: _vm.task.width,
                  height: _vm.task.height,
                  viewBox: '0 0 ' + _vm.task.width + ' ' + _vm.task.height,
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                on: {
                  click: function($event) {
                    return _vm.emitEvent('click', $event);
                  },
                  mouseenter: function($event) {
                    return _vm.emitEvent('mouseenter', $event);
                  },
                  mouseover: function($event) {
                    return _vm.emitEvent('mouseover', $event);
                  },
                  mouseout: function($event) {
                    return _vm.emitEvent('mouseout', $event);
                  },
                  mousemove: function($event) {
                    return _vm.emitEvent('mousemove', $event);
                  },
                  mousedown: function($event) {
                    return _vm.emitEvent('mousedown', $event);
                  },
                  mouseup: function($event) {
                    return _vm.emitEvent('mouseup', $event);
                  },
                  mousewheel: function($event) {
                    return _vm.emitEvent('mousewheel', $event);
                  },
                  touchstart: function($event) {
                    return _vm.emitEvent('touchstart', $event);
                  },
                  touchmove: function($event) {
                    return _vm.emitEvent('touchmove', $event);
                  },
                  touchend: function($event) {
                    return _vm.emitEvent('touchend', $event);
                  }
                }
              },
              [
                _c('defs', [
                  _c('clipPath', { attrs: { id: _vm.clipPathId } }, [
                    _c('polygon', { attrs: { points: _vm.getPoints } })
                  ])
                ]),
                _vm._v(' '),
                _c('polygon', {
                  staticClass: 'gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon',
                  style: _vm.root.style(
                    'chart-row-bar-polygon',
                    'chart-row-task-polygon',
                    _vm.task.style.base,
                    _vm.task.style['chart-row-bar-polygon']
                  ),
                  attrs: { points: _vm.getPoints }
                }),
                _vm._v(' '),
                _c('progress-bar', { attrs: { task: _vm.task, 'clip-path': 'url(#' + _vm.clipPathId + ')' } })
              ],
              1
            ),
            _vm._v(' '),
            _vm.$store.state.GanttElastic.options.chart.text.display
              ? _c('chart-text', { attrs: { task: _vm.task } })
              : _vm._e()
          ],
          1
        );
      };
    Taskvue_type_template_id_e9c23eca_render._withStripped = !0;
    var Textvue_type_template_id_459c2fe4_render = function() {
      var _vm = this,
        _h = _vm.$createElement,
        _c = _vm._self._c || _h;
      return _c(
        'svg',
        {
          staticClass: 'gantt-elastic__chart-row-text-wrapper',
          style: _vm.root.style('chart-row-text-wrapper'),
          attrs: {
            x: _vm.task.x + _vm.task.width + _vm.$store.state.GanttElastic.options.chart.text.offset,
            y: _vm.task.y - _vm.$store.state.GanttElastic.options.chart.grid.horizontal.gap,
            width: _vm.getWidth,
            height: _vm.getHeight
          }
        },
        [
          _c('foreignObject', { attrs: { x: '0', y: '0', width: '100%', height: _vm.getHeight } }, [
            _c(
              'div',
              {
                staticClass: 'gantt-elastic__chart-row-text',
                style: _vm.root.style('chart-row-text'),
                attrs: { xmlns: 'http://www.w3.org/1999/xhtml' }
              },
              [
                _vm.html
                  ? _vm._e()
                  : _c(
                      'div',
                      {
                        staticClass:
                          'gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text',
                        style: Object.assign(
                          {},
                          _vm.root.style('chart-row-text-content', 'chart-row-text-content--text'),
                          _vm.contentStyle
                        )
                      },
                      [_c('div', [_vm._v(_vm._s(_vm.task.label))])]
                    ),
                _vm._v(' '),
                _vm.html
                  ? _c('div', {
                      staticClass: 'gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html',
                      style: Object.assign(
                        {},
                        _vm.root.style('chart-row-text-content', 'chart-row-text-content--html'),
                        _vm.contentStyle
                      ),
                      domProps: { innerHTML: _vm._s(_vm.task.label) }
                    })
                  : _vm._e()
              ]
            )
          ])
        ],
        1
      );
    };
    Textvue_type_template_id_459c2fe4_render._withStripped = !0;
    var Text_component = normalizeComponent(
      {
        inject: ['root'],
        props: ['task'],
        data: () => ({}),
        computed: {
          getWidth() {
            const textStyle = this.root.style('chart-row-text');
            return (
              (this.$store.state.GanttElastic.options.ctx.font = `${textStyle['font-weight']} ${
                textStyle['font-size']
              } ${textStyle['font-family']}`),
              this.$store.state.GanttElastic.options.ctx.measureText(this.task.label).width +
                2 * this.$store.state.GanttElastic.options.chart.text.xPadding
            );
          },
          getHeight() {
            return this.task.height + 2 * this.$store.state.GanttElastic.options.chart.grid.horizontal.gap;
          },
          contentStyle() {
            return { height: '100%', 'line-height': this.getHeight + 'px' };
          },
          html() {
            const cols = this.$store.state.GanttElastic.options.taskList.columns;
            for (let i = 0, len = cols.length; i < len; i++) {
              const col = cols[i];
              if ('label' === col.value && void 0 !== col.html && col.html) return !0;
            }
            return !1;
          }
        }
      },
      Textvue_type_template_id_459c2fe4_render,
      [],
      !1,
      null,
      null,
      null
    );
    Text_component.options.__file = 'src/components/Chart/Text.vue';
    var Text = Text_component.exports,
      ProgressBarvue_type_template_id_4bc39355_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'g',
          {
            staticClass: 'gantt-elastic__chart-row-progress-bar-wrapper',
            style: _vm.root.style('chart-row-progress-bar-wrapper', _vm.task.style['chart-row-progress-bar-wrapper'])
          },
          [
            _c('defs', [
              _c(
                'pattern',
                {
                  attrs: {
                    id: 'diagonalHatch',
                    width: _vm.$store.state.GanttElastic.options.chart.progress.width,
                    height: _vm.$store.state.GanttElastic.options.chart.progress.width,
                    patternTransform: 'rotate(45 0 0)',
                    patternUnits: 'userSpaceOnUse'
                  }
                },
                [
                  _c('line', {
                    staticClass: 'chart-row-progress-bar-line',
                    style: _vm.root.style('chart-row-progress-bar-line', _vm.task.style['chart-row-progress-bar-line']),
                    attrs: { x1: '0', y1: '0', x2: '0', y2: _vm.$store.state.GanttElastic.options.chart.progress.width }
                  })
                ]
              )
            ]),
            _vm._v(' '),
            _vm.$store.state.GanttElastic.options.chart.progress.bar
              ? _c('rect', {
                  staticClass: 'gantt-elastic__chart-row-progress-bar-solid',
                  style: _vm.root.style('chart-row-progress-bar-solid', _vm.task.style['chart-row-progress-bar-solid']),
                  attrs: { x: '0', y: '0', width: _vm.getProgressWidth }
                })
              : _vm._e(),
            _vm._v(' '),
            _vm.$store.state.GanttElastic.options.chart.progress.pattern
              ? _c('g', [
                  _c('rect', {
                    staticClass: 'gantt-elastic__chart-row-progress-bar-pattern',
                    style: _vm.root.style(
                      'chart-row-progress-bar-pattern',
                      _vm.task.style['chart-row-progress-bar-pattern']
                    ),
                    attrs: { x: _vm.getProgressWidth, y: '0', width: 100 - _vm.task.progress + '%', height: '100%' }
                  }),
                  _vm._v(' '),
                  _c('path', {
                    staticClass: 'gantt-elastic__chart-row-progress-bar-outline',
                    style: _vm.root.style(
                      'chart-row-progress-bar-outline',
                      _vm.task.style.base,
                      _vm.task.style['chart-row-progress-bar-outline']
                    ),
                    attrs: { d: _vm.getLinePoints }
                  })
                ])
              : _vm._e()
          ]
        );
      };
    ProgressBarvue_type_template_id_4bc39355_render._withStripped = !0;
    var ProgressBar_component = normalizeComponent(
      {
        inject: ['root'],
        props: ['task'],
        data: () => ({}),
        computed: {
          getProgressWidth() {
            return this.task.progress + '%';
          },
          getLinePoints() {
            const start = (this.task.width / 100) * this.task.progress;
            return `M ${start} 0 L ${start} ${this.task.height}`;
          },
          getSolidStyle() {
            return Object.assign(
              {},
              this.$store.state.GanttElastic.options.chart.progress.styles.bar.solid,
              this.task.progressBarStyle.bar
            );
          },
          getLineStyle() {
            return Object.assign(
              {},
              {
                stroke: this.$store.state.GanttElastic.options.row.styles.bar.stroke + 'a0',
                'stroke-width': this.$store.state.GanttElastic.options.row.styles.bar['stroke-width'] / 2
              },
              this.task.style
            );
          }
        }
      },
      ProgressBarvue_type_template_id_4bc39355_render,
      [],
      !1,
      null,
      null,
      null
    );
    ProgressBar_component.options.__file = 'src/components/Chart/ProgressBar.vue';
    var ProgressBar = ProgressBar_component.exports,
      Task_component = normalizeComponent(
        {
          components: { ChartText: Text, ProgressBar: ProgressBar, Expander: Expander },
          inject: ['root'],
          props: ['task'],
          data: () => ({}),
          computed: {
            clipPathId() {
              return 'gantt-elastic__task-clip-path-' + this.task.id;
            },
            getViewBox() {
              const task = this.task;
              return `0 0 ${task.width} ${task.height}`;
            },
            getGroupTransform() {
              return `translate(${this.task.x} ${this.task.y})`;
            },
            getPoints() {
              const task = this.task;
              return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
            },
            displayExpander() {
              const expander = this.$store.state.GanttElastic.options.chart.expander;
              return (
                expander.display ||
                (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
              );
            }
          },
          methods: {
            emitEvent(eventName, event) {
              this.$store.state.GanttElastic.options.scroll.scrolling ||
                this.root.$emit(`chart-${this.task.type}-${eventName}`, { event: event, data: this.task });
            }
          }
        },
        Taskvue_type_template_id_e9c23eca_render,
        [],
        !1,
        null,
        null,
        null
      );
    Task_component.options.__file = 'src/components/Chart/Row/Task.vue';
    var Task = Task_component.exports,
      Milestonevue_type_template_id_3013006c_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'g',
          {
            staticClass: 'gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-milestone-wrapper',
            style: _vm.root.style(
              'chart-row-bar-wrapper',
              'chart-row-milestone-wrapper',
              _vm.task.style['chart-row-bar-wrapper']
            )
          },
          [
            _vm.displayExpander
              ? _c(
                  'foreignObject',
                  {
                    staticClass: 'gantt-elastic__chart-expander gantt-elastic__chart-expander--milestone',
                    style: _vm.root.style(
                      'chart-expander',
                      'chart-expander--milestone',
                      _vm.task.style['chart-expander']
                    ),
                    attrs: {
                      x:
                        _vm.task.x -
                        _vm.$store.state.GanttElastic.options.chart.expander.offset -
                        _vm.$store.state.GanttElastic.options.chart.expander.size,
                      y:
                        _vm.task.y +
                        (_vm.$store.state.GanttElastic.options.row.height -
                          _vm.$store.state.GanttElastic.options.chart.expander.size) /
                          2,
                      width: _vm.$store.state.GanttElastic.options.chart.expander.size,
                      height: _vm.$store.state.GanttElastic.options.chart.expander.size
                    }
                  },
                  [
                    _c('expander', {
                      attrs: { tasks: [_vm.task], options: _vm.$store.state.GanttElastic.options.chart.expander }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(' '),
            _c(
              'svg',
              {
                staticClass: 'gantt-elastic__chart-row-bar gantt-elastic__chart-row-milestone',
                style: _vm.root.style('chart-row-bar', 'chart-row-milestone', _vm.task.style['chart-row-bar']),
                attrs: {
                  x: _vm.task.x,
                  y: _vm.task.y,
                  width: _vm.task.width,
                  height: _vm.task.height,
                  viewBox: '0 0 ' + _vm.task.width + ' ' + _vm.task.height,
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                on: {
                  click: function($event) {
                    return _vm.emitEvent('click', $event);
                  },
                  mouseenter: function($event) {
                    return _vm.emitEvent('mouseenter', $event);
                  },
                  mouseover: function($event) {
                    return _vm.emitEvent('mouseover', $event);
                  },
                  mouseout: function($event) {
                    return _vm.emitEvent('mouseout', $event);
                  },
                  mousemove: function($event) {
                    return _vm.emitEvent('mousemove', $event);
                  },
                  mousedown: function($event) {
                    return _vm.emitEvent('mousedown', $event);
                  },
                  mouseup: function($event) {
                    return _vm.emitEvent('mouseup', $event);
                  },
                  mousewheel: function($event) {
                    return _vm.emitEvent('mousewheel', $event);
                  },
                  touchstart: function($event) {
                    return _vm.emitEvent('touchstart', $event);
                  },
                  touchmove: function($event) {
                    return _vm.emitEvent('touchmove', $event);
                  },
                  touchend: function($event) {
                    return _vm.emitEvent('touchend', $event);
                  }
                }
              },
              [
                _c('defs', [
                  _c('clipPath', { attrs: { id: _vm.clipPathId } }, [
                    _c('polygon', { attrs: { points: _vm.getPoints } })
                  ])
                ]),
                _vm._v(' '),
                _c('polygon', {
                  staticClass: 'gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-milestone-polygon',
                  style: _vm.root.style(
                    'chart-row-bar-polygon',
                    'chart-row-milestone-polygon',
                    _vm.task.style.base,
                    _vm.task.style['chart-row-bar-polygon']
                  ),
                  attrs: { points: _vm.getPoints }
                }),
                _vm._v(' '),
                _c('progress-bar', { attrs: { task: _vm.task, 'clip-path': 'url(#' + _vm.clipPathId + ')' } })
              ],
              1
            ),
            _vm._v(' '),
            _vm.$store.state.GanttElastic.options.chart.text.display
              ? _c('chart-text', { attrs: { task: _vm.task } })
              : _vm._e()
          ],
          1
        );
      };
    Milestonevue_type_template_id_3013006c_render._withStripped = !0;
    var Milestone_component = normalizeComponent(
      {
        components: { ChartText: Text, ProgressBar: ProgressBar, Expander: Expander },
        inject: ['root'],
        props: ['task'],
        data: () => ({}),
        computed: {
          clipPathId() {
            return 'gantt-elastic__milestone-clip-path-' + this.task.id;
          },
          getViewBox() {
            return `0 0 ${this.task.width} ${this.task.height}`;
          },
          getGroupTransform() {
            return `translate(${this.task.x} ${this.task.y})`;
          },
          getPoints() {
            const task = this.task,
              fifty = task.height / 2;
            let offset = fifty;
            return (
              task.width / 2 - offset < 0 && (offset = task.width / 2),
              `0,${fifty}\n        ${offset},0\n        ${task.width - offset},0\n        ${
                task.width
              },${fifty}\n        ${task.width - offset},${task.height}\n        ${offset},${task.height}`
            );
          },
          displayExpander() {
            const expander = this.$store.state.GanttElastic.options.chart.expander;
            return (
              expander.display ||
              (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
            );
          }
        },
        methods: {
          emitEvent(eventName, event) {
            this.$store.state.GanttElastic.options.scroll.scrolling ||
              this.root.$emit(`chart-${this.task.type}-${eventName}`, { event: event, data: this.task });
          }
        }
      },
      Milestonevue_type_template_id_3013006c_render,
      [],
      !1,
      null,
      null,
      null
    );
    Milestone_component.options.__file = 'src/components/Chart/Row/Milestone.vue';
    var Milestone = Milestone_component.exports,
      Projectvue_type_template_id_077bbd73_render = function() {
        var _vm = this,
          _h = _vm.$createElement,
          _c = _vm._self._c || _h;
        return _c(
          'g',
          {
            staticClass: 'gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper',
            style: _vm.root.style(
              'chart-row-bar-wrapper',
              _vm.root.style('chart-row-project-wrapper'),
              _vm.task.style['chart-row-bar-wrapper']
            )
          },
          [
            _vm.displayExpander
              ? _c(
                  'foreignObject',
                  {
                    staticClass: 'gantt-elastic__chart-expander gantt-elastic__chart-expander--project',
                    style: _vm.root.style(
                      'chart-expander',
                      'chart-expander--project',
                      _vm.task.style['chart-expander']
                    ),
                    attrs: {
                      x:
                        _vm.task.x -
                        _vm.$store.state.GanttElastic.options.chart.expander.offset -
                        _vm.$store.state.GanttElastic.options.chart.expander.size,
                      y:
                        _vm.task.y +
                        (_vm.$store.state.GanttElastic.options.row.height -
                          _vm.$store.state.GanttElastic.options.chart.expander.size) /
                          2,
                      width: _vm.$store.state.GanttElastic.options.chart.expander.size,
                      height: _vm.$store.state.GanttElastic.options.chart.expander.size
                    }
                  },
                  [
                    _c('expander', {
                      attrs: { tasks: [_vm.task], options: _vm.$store.state.GanttElastic.options.chart.expander }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(' '),
            _c(
              'svg',
              {
                staticClass: 'gantt-elastic__chart-row-bar gantt-elastic__chart-row-project',
                style: _vm.root.style('chart-row-bar', 'chart-row-project', _vm.task.style['chart-row-bar']),
                attrs: {
                  x: _vm.task.x,
                  y: _vm.task.y,
                  width: _vm.task.width,
                  height: _vm.task.height,
                  viewBox: '0 0 ' + _vm.task.width + ' ' + _vm.task.height,
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                on: {
                  click: function($event) {
                    return _vm.emitEvent('click', $event);
                  },
                  mouseenter: function($event) {
                    return _vm.emitEvent('mouseenter', $event);
                  },
                  mouseover: function($event) {
                    return _vm.emitEvent('mouseover', $event);
                  },
                  mouseout: function($event) {
                    return _vm.emitEvent('mouseout', $event);
                  },
                  mousemove: function($event) {
                    return _vm.emitEvent('mousemove', $event);
                  },
                  mousedown: function($event) {
                    return _vm.emitEvent('mousedown', $event);
                  },
                  mouseup: function($event) {
                    return _vm.emitEvent('mouseup', $event);
                  },
                  mousewheel: function($event) {
                    return _vm.emitEvent('mousewheel', $event);
                  },
                  touchstart: function($event) {
                    return _vm.emitEvent('touchstart', $event);
                  },
                  touchmove: function($event) {
                    return _vm.emitEvent('touchmove', $event);
                  },
                  touchend: function($event) {
                    return _vm.emitEvent('touchend', $event);
                  }
                }
              },
              [
                _c('defs', [
                  _c('clipPath', { attrs: { id: _vm.clipPathId } }, [_c('path', { attrs: { d: _vm.getPoints } })])
                ]),
                _vm._v(' '),
                _c('path', {
                  staticClass: 'gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-project-polygon',
                  style: _vm.root.style(
                    'chart-row-bar-polygon',
                    'chart-row-project-polygon',
                    _vm.task.style.base,
                    _vm.task.style['chart-row-bar-polygon']
                  ),
                  attrs: { d: _vm.getPoints }
                }),
                _vm._v(' '),
                _c('progress-bar', { attrs: { task: _vm.task, 'clip-path': 'url(#' + _vm.clipPathId + ')' } })
              ],
              1
            ),
            _vm._v(' '),
            _vm.$store.state.GanttElastic.options.chart.text.display
              ? _c('chart-text', { attrs: { task: _vm.task } })
              : _vm._e()
          ],
          1
        );
      };
    Projectvue_type_template_id_077bbd73_render._withStripped = !0;
    var Project_component = normalizeComponent(
      {
        components: { ChartText: Text, ProgressBar: ProgressBar, Expander: Expander },
        inject: ['root'],
        props: ['task'],
        data: () => ({}),
        computed: {
          clipPathId() {
            return 'gantt-elastic__project-clip-path-' + this.task.id;
          },
          getViewBox() {
            return `0 0 ${this.task.width} ${this.task.height}`;
          },
          getGroupTransform() {
            return `translate(${this.task.x} ${this.task.y})`;
          },
          getPoints() {
            const task = this.task,
              bottom = task.height - task.height / 4,
              corner = task.height / 6,
              smallCorner = task.height / 8;
            return `M ${smallCorner},0\n                L ${task.width - smallCorner} 0\n                L ${
              task.width
            } ${smallCorner}\n                L ${task.width} ${bottom}\n                L ${task.width - corner} ${
              task.height
            }\n                L ${task.width - 2 * corner} ${bottom}\n                L ${2 *
              corner} ${bottom}\n                L ${corner} ${
              task.height
            }\n                L 0 ${bottom}\n                L 0 ${smallCorner}\n                Z\n        `;
          },
          displayExpander() {
            const expander = this.$store.state.GanttElastic.options.chart.expander;
            return (
              expander.display ||
              (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
            );
          }
        },
        methods: {
          emitEvent(eventName, event) {
            this.$store.state.GanttElastic.options.scroll.scrolling ||
              this.root.$emit(`chart-${this.task.type}-${eventName}`, { event: event, data: this.task });
          }
        }
      },
      Projectvue_type_template_id_077bbd73_render,
      [],
      !1,
      null,
      null,
      null
    );
    Project_component.options.__file = 'src/components/Chart/Row/Project.vue';
    var Chart_component = normalizeComponent(
      {
        components: {
          Grid: Grid,
          DependencyLines: DependencyLines,
          Calendar: Calendar,
          Task: Task,
          Milestone: Milestone,
          Project: Project_component.exports,
          DaysHighlight: DaysHighlight
        },
        inject: ['root'],
        data: () => ({ moving: !1 }),
        mounted() {
          this.$store.commit(this.root.updateOptionsMut, {
            refs: { chart: this.$refs.chart, chartGraph: this.$refs.chartGraph }
          });
        },
        computed: {
          getWidth() {
            return this.$store.state.GanttElastic.options.width;
          },
          getHeight() {
            return this.$store.state.GanttElastic.options.height;
          },
          getViewBox() {
            return `0 0 ${Math.round(this.getWidth)} ${this.$store.state.GanttElastic.options.allVisibleTasksHeight}`;
          }
        }
      },
      Chartvue_type_template_id_67c3f5cd_render,
      [],
      !1,
      null,
      null,
      null
    );
    Chart_component.options.__file = 'src/components/Chart/Chart.vue';
    var MainView_component = normalizeComponent(
      {
        components: { TaskList: TaskList, Chart: Chart_component.exports },
        inject: ['root'],
        props: ['tasks', 'options'],
        data: () => ({
          defs: '',
          mousePos: {
            x: 0,
            y: 0,
            movementX: 0,
            movementY: 0,
            lastX: 0,
            lastY: 0,
            positiveX: 0,
            positiveY: 0,
            currentX: 0,
            currentY: 0
          }
        }),
        mounted() {
          (this.viewBoxWidth = this.$el.clientWidth),
            this.$store.commit(this.root.updateOptionsMut, {
              refs: {
                mainView: this.$refs.mainView,
                svgChart: this.$refs.svgChart,
                chartContainer: this.$refs.chartContainer,
                taskList: this.$refs.taskList,
                chartScrollContainerHorizontal: this.$refs.chartScrollContainerHorizontal,
                chartScrollContainerVertical: this.$refs.chartScrollContainerVertical
              }
            }),
            document.addEventListener('mouseup', this.chartMouseUp.bind(this)),
            document.addEventListener('mousemove', this.chartMouseMove.bind(this)),
            document.addEventListener('touchmove', this.chartMouseMove.bind(this)),
            document.addEventListener('touchend', this.chartMouseUp.bind(this));
        },
        computed: {
          getWidth() {
            let width = this.$store.state.GanttElastic.options.clientWidth;
            return width < 0 ? 0 : width;
          },
          getMarginLeft() {
            return this.$store.state.GanttElastic.options.taskList.display
              ? this.$store.state.GanttElastic.options.taskList.finalWidth + 'px'
              : '0px';
          },
          verticalStyle() {
            return {
              width: this.$store.state.GanttElastic.options.scrollBarHeight + 'px',
              'margin-left': -this.$store.state.GanttElastic.options.scrollBarHeight + 'px',
              height: this.$store.state.GanttElastic.options.rowsHeight + 'px',
              'margin-top':
                this.$store.state.GanttElastic.options.calendar.height +
                this.$store.state.GanttElastic.options.calendar.gap +
                'px'
            };
          },
          getViewBox() {
            return this.$store.state.GanttElastic.options.clientWidth
              ? `0 0 ${this.$store.state.GanttElastic.options.clientWidth -
                  this.$store.state.GanttElastic.options.scrollBarHeight} ${
                  this.$store.state.GanttElastic.options.height
                }`
              : `0 0 0 ${this.$store.state.GanttElastic.options.height}`;
          }
        },
        methods: {
          mouseMove(event) {
            this.root.$emit('main-view-mousemove', event);
          },
          mouseUp(event) {
            this.root.$emit('main-view-mouseup', event);
          },
          onHorizontalScroll(ev) {
            this.root.$emit('chart-scroll-horizontal', ev);
          },
          onVerticalScroll(ev) {
            this.root.$emit('chart-scroll-vertical', ev);
          },
          chartWheel(ev) {
            this.root.$emit('chart-wheel', ev);
          },
          chartMouseDown(ev) {
            void 0 !== ev.touches &&
              ((this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX),
              (this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY),
              (this.mousePos.movementX = 0),
              (this.mousePos.movementY = 0),
              (this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft),
              (this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop)),
              this.$store.commit(this.root.updateOptionsMut, { scroll: { scrolling: !0 } });
          },
          chartMouseUp(ev) {
            this.$store.commit(this.root.updateOptionsMut, { scroll: { scrolling: !1 } });
          },
          chartMouseMove(ev) {
            if (this.$store.state.GanttElastic.options.scroll.scrolling) {
              ev.preventDefault(), ev.stopImmediatePropagation(), ev.stopPropagation();
              const touch = void 0 !== ev.touches;
              let movementX, movementY;
              if (touch) {
                const screenX = ev.touches[0].screenX,
                  screenY = ev.touches[0].screenY;
                (movementX = this.mousePos.x - screenX),
                  (movementY = this.mousePos.y - screenY),
                  (this.mousePos.lastX = screenX),
                  (this.mousePos.lastY = screenY);
              } else (movementX = ev.movementX), (movementY = ev.movementY);
              const horizontal = this.$refs.chartScrollContainerHorizontal,
                vertical = this.$refs.chartScrollContainerVertical;
              let x = 0,
                y = 0;
              (x = touch
                ? this.mousePos.currentX + movementX * this.$store.state.GanttElastic.options.scroll.dragXMoveMultiplier
                : horizontal.scrollLeft -
                  movementX * this.$store.state.GanttElastic.options.scroll.dragXMoveMultiplier),
                (horizontal.scrollLeft = x),
                (y = touch
                  ? this.mousePos.currentY +
                    movementY * this.$store.state.GanttElastic.options.scroll.dragYMoveMultiplier
                  : vertical.scrollTop - movementY * this.$store.state.GanttElastic.options.scroll.dragYMoveMultiplier),
                (vertical.scrollTop = y);
            }
          }
        },
        beforeDestroy() {
          document.removeEventListener('mouseup', this.chartMouseUp),
            document.removeEventListener('mousemove', this.chartMouseMove),
            document.removeEventListener('touchmove', this.chartMouseMove),
            document.removeEventListener('touchend', this.chartMouseUp);
        }
      },
      MainViewvue_type_template_id_0bc4212e_render,
      [],
      !1,
      null,
      null,
      null
    );
    MainView_component.options.__file = 'src/components/MainView.vue';
    var MainView = MainView_component.exports;
    /**
     * @fileoverview Styles for gantt-elastic
     * @license MIT
     * @author Rafal Pospiech <neuronet.io@gmail.com>
     * @package GanttElastic
     */ const fontFamily = 'Arial, sans-serif';
    var src_style = {
      '*': { 'box-sizing': 'border-box' },
      'main-view': { background: '#FFFFFF' },
      'main-container-wrapper': { overflow: 'hidden' },
      'main-container': { float: 'left', 'max-width': '100%' },
      container: { display: 'flex', 'max-width': '100%', height: '100%' },
      header: {
        'font-family': fontFamily,
        margin: '0px auto',
        background: '#f3f5f747',
        padding: '10px',
        overflow: 'hidden',
        clear: 'both',
        display: 'flex',
        'justify-content': 'space-between'
      },
      'header-title': { float: 'left' },
      'header-options': { float: 'right' },
      'header-title--text': {
        'font-size': '20px',
        'vertical-align': 'middle',
        'font-weight': '400',
        'line-height': '35px',
        'padding-left': '22px',
        'letter-spacing': '1px'
      },
      'header-title--html': {
        'font-size': '20px',
        'vertical-align': 'middle',
        'font-weight': '400',
        'line-height': '35px',
        'padding-left': '22px',
        'letter-spacing': '1px'
      },
      'header-btn-recenter': {
        background: '#95A5A6',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'white',
        'border-radius': '3px',
        'margin-right': '27px',
        'font-size': '16px',
        padding: '8px 12px'
      },
      'header-slider': {},
      'header-slider-wrapper': { display: 'inline-block', 'vertical-align': 'middle' },
      'header-slider--slider': {},
      'header-slider--process': { background: '#ccc' },
      'header-task-list-switch--label': {},
      'header-task-list-switch': { margin: '0px 15px', 'vertical-align': 'middle' },
      'header-label': {},
      'calendar-wrapper': { 'user-select': 'none' },
      calendar: { width: '100%', background: '#f3f5f7', display: 'block' },
      'calendar-row': { display: 'flex' },
      'calendar-row--month': {},
      'calendar-row--day': {},
      'calendar-row--hour': {},
      'calendar-row-rect': {
        background: 'transparent',
        'border-width': '0px',
        'border-right-width': '1px',
        'border-color': '#dadada',
        'border-style': 'solid',
        'flex-shrink': '0'
      },
      'calendar-row-text': { 'font-family': fontFamily, 'font-size': '12px', color: '#606060', 'text-align': 'center' },
      'calendar-row-rect--month': { 'border-top': '1px solid #dadada' },
      'calendar-row-text--month': {},
      'calendar-row-rect--day': {},
      'calendar-row-text--day': {},
      'calendar-row-rect--hour': { 'border-bottom': '1px solid #dadada' },
      'calendar-row-text--hour': {},
      'task-list-wrapper': {},
      'task-list': { background: 'transparent', 'border-color': '#eee' },
      'task-list-header': { display: 'flex', 'user-select': 'none', 'vertical-align': 'middle' },
      'task-list-header-column': {
        border: '1px solid #00000050',
        'border-top': 'none',
        'border-right': 'none',
        'box-sizing': 'border-box',
        display: 'flex',
        background: '#f3f5f7',
        'border-color': 'transparent'
      },
      'task-list-expander-wrapper': {
        display: 'inline-flex',
        'flex-shrink': '0',
        'box-sizing': 'border-box',
        margin: '0px 0px 0px 10px'
      },
      'task-list-expander-content': {
        display: 'inline-flex',
        cursor: 'pointer',
        margin: 'auto 0px',
        'box-sizing': 'border-box',
        'user-select': 'none'
      },
      'task-list-expander-line': {
        fill: 'transparent',
        stroke: '#000000',
        'stroke-width': '1',
        'stroke-linecap': 'round'
      },
      'task-list-expander-border': { fill: '#ffffffa0', stroke: '#000000' },
      'chart-expander-wrapper': { display: 'block', 'line-height': '1', 'box-sizing': 'border-box', margin: '0' },
      'chart-expander-content': {
        display: 'inline-flex',
        cursor: 'pointer',
        margin: 'auto 0px',
        'box-sizing': 'border-box',
        'user-select': 'none'
      },
      'chart-expander-line': { fill: 'transparent', stroke: '#000000', 'stroke-width': '1', 'stroke-linecap': 'round' },
      'chart-expander-border': { fill: '#ffffffa0', stroke: '#000000' },
      'task-list-container': {},
      'task-list-header-label': {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'font-family': fontFamily,
        'font-size': '12px',
        'box-sizing': 'border-box',
        margin: 'auto 6px',
        'flex-grow': '1',
        'vertical-align': 'middle'
      },
      'task-list-header-resizer-wrapper': {
        background: 'transparent',
        height: '100%',
        width: '6px',
        cursor: 'col-resize',
        display: 'inline-flex',
        'vertical-align': 'center'
      },
      'task-list-header-resizer': { margin: 'auto 0px' },
      'task-list-header-resizer-dot': {
        width: '3px',
        height: '3px',
        background: '#ddd',
        'border-radius': '100%',
        margin: '4px 0px'
      },
      'task-list-items': { overflow: 'hidden' },
      'task-list-item': {
        'border-top': '1px solid #eee',
        'border-right': '1px solid #eee',
        'box-sizing': 'border-box',
        display: 'flex',
        background: 'transparent'
      },
      'task-list-item-column': {
        display: 'inline-flex',
        'flex-shrink': '0',
        'border-left': '1px solid #00000050',
        'box-sizing': 'border-box',
        'border-color': '#eee'
      },
      'task-list-item-value-wrapper': { overflow: 'hidden', display: 'flex', width: '100%' },
      'task-list-item-value-container': { margin: 'auto 0px', overflow: 'hidden' },
      'task-list-item-value': {
        display: 'block',
        'flex-shrink': '100',
        'font-family': fontFamily,
        'font-size': '12px',
        'margin-top': 'auto',
        'margin-bottom': 'auto',
        'margin-left': '6px',
        'margin-right': '6px',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'line-height': '1.5em',
        'word-break': 'keep-all',
        'white-space': 'nowrap',
        color: '#606060',
        background: '#FFFFFF'
      },
      'grid-lines': {},
      'grid-line-horizontal': { stroke: '#00000010', 'stroke-width': 1 },
      'grid-line-vertical': { stroke: '#00000010', 'stroke-width': 1 },
      'grid-line-time': { stroke: '#FF000080', 'stroke-width': 1 },
      chart: { 'user-select': 'none', overflow: 'hidden' },
      'chart-area': {},
      'chart-graph': { overflow: 'hidden' },
      'chart-row-text-wrapper': {},
      'chart-row-text': {
        background: '#ffffffa0',
        'border-radius': '10px',
        'font-family': fontFamily,
        'font-size': '12px',
        'font-weight': 'normal',
        color: '#000000a0',
        height: '100%',
        display: 'inline-block'
      },
      'chart-row-text-content': { padding: '0px 6px' },
      'chart-row-text-content--text': {},
      'chart-row-text-content--html': {},
      'chart-row-wrapper': {},
      'chart-row-bar-wrapper': {},
      'chart-row-bar': {},
      'chart-row-bar-polygon': { stroke: '#E74C3C', 'stroke-width': 1, fill: '#F75C4C' },
      'chart-row-project-wrapper': {},
      'chart-row-project': {},
      'chart-row-project-polygon': {},
      'chart-row-milestone-wrapper': {},
      'chart-row-milestone': {},
      'chart-row-milestone-polygon': {},
      'chart-row-task-wrapper': {},
      'chart-row-task': {},
      'chart-row-task-polygon': {},
      'chart-row-progress-bar-wrapper': {},
      'chart-row-progress-bar': {},
      'chart-row-progress-bar-line': { stroke: '#ffffff25', 'stroke-width': 20 },
      'chart-row-progress-bar-solid': { fill: '#0EAC51', height: '20%' },
      'chart-row-progress-bar-pattern': { fill: 'url(#diagonalHatch)', transform: 'translateY(0.1) scaleY(0.8)' },
      'chart-row-progress-bar-outline': { stroke: '#E74C3C', 'stroke-width': 1 },
      'chart-dependency-lines-wrapper': {},
      'chart-dependency-lines-path': { fill: 'transparent', stroke: '#FFa00090', 'stroke-width': 2 },
      'chart-scroll-container': {},
      'chart-scroll-container--horizontal': { overflow: 'auto', 'max-width': '100%' },
      'chart-scroll-container--vertical': {
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
        'max-height': '100%',
        float: 'right'
      },
      'chart-days-highlight-rect': { fill: '#f3f5f780' },
      'slot-header-beforeOptions': { display: 'inline-block' }
    };
    const GanttElasticVuexModule = {
      state: {
        tasks: [],
        options: { scrollBarHeight: 0, allVisibleTasksHeight: 0, refs: {}, tasksById: {}, times: {} }
      },
      mutations: {
        'GanttElastic/updateTasks'(state, tasks) {
          state.tasks = tasks.map(task => mergeDeepReactive({}, task));
        },
        'GanttElastic/updateTask'(state, task) {
          for (let index = 0, len = state.tasks.length; index < len; index++) {
            state.tasks[index].id === task.id && mergeDeepReactive(state.tasks[index], task);
          }
        },
        'GanttElastic/updateOptions'(state, payload) {
          state.options = mergeDeepReactive(state.options, payload);
        }
      }
    };
    window.GanttElasticVuexModule = GanttElasticVuexModule;
    var GanttElastic_vuex = GanttElasticVuexModule;
    __webpack_require__(5);
    function isObject(item) {
      return (
        item &&
        'object' == typeof item &&
        !Array.isArray(item) &&
        !(item instanceof HTMLElement) &&
        !(item instanceof CanvasRenderingContext2D) &&
        'function' != typeof item
      );
    }
    function mergeDeep(target, ...sources) {
      if (!sources.length) return target;
      const source = sources.shift();
      if (isObject(target) && isObject(source))
        for (const key in source)
          isObject(source[key])
            ? (void 0 === target[key] && Object.assign(target, { [key]: {} }), mergeDeep(target[key], source[key]))
            : Array.isArray(source[key])
            ? (target[key] = source[key].map(item => (isObject(item) ? mergeDeep({}, item) : item)))
            : 'function' == typeof source[key]
            ? -1 === source[key].toString().indexOf('[native code]') && (target[key] = source[key])
            : Object.assign(target, { [key]: source[key] });
      return mergeDeep(target, ...sources);
    }
    function isObservable(obj) {
      return obj.hasOwnProperty('__ob__');
    }
    function mergeDeepReactive(target, ...sources) {
      if (!sources.length) return isObservable(target) ? target : Vue.observable(target);
      isObservable(target) || (target = Vue.observable(target));
      const source = sources.shift();
      if (isObject(target) && isObject(source))
        for (const key in source)
          isObject(source[key])
            ? (void 0 === target[key] && (isObservable(source[key]) ? (target[key] = source[key]) : (target[key] = {})),
              mergeDeepReactive(target[key], source[key]))
            : Array.isArray(source[key])
            ? Vue.set(target, key, source[key])
            : 'function' == typeof source[key]
            ? -1 === source[key].toString().indexOf('[native code]') && (target[key] = source[key])
            : Vue.set(target, key, source[key]);
      return mergeDeepReactive(target, ...sources);
    }
    function equalDeep(left, right) {
      if (typeof right != typeof left) return !1;
      if (Array.isArray(left)) {
        if (left.length !== right.length) return !1;
        for (let [index, value] of left.entries()) {
          if (typeof value != typeof right[index]) return !1;
          if (isObject(value) || Array.isArray(value)) {
            if (!equalDeep(value, right[index])) return !1;
          } else if (value !== right[index]) return !1;
        }
      } else
        for (let key in left) {
          if (typeof left[key] != typeof right[key]) return !1;
          if (isObject(left[key]) || Array.isArray(left[key])) {
            if (!equalDeep(left[key], right[key])) return !1;
          } else if (left[key] !== right[key]) return !1;
        }
      return !0;
    }
    function synchronizeDeep(left, right) {
      for (let key in left)
        isObject(right[key])
          ? (left[key] = synchronizeDeep(left[key], right[key]))
          : Array.isArray(right[key])
          ? (left[key] = right[key].map(
              (item, index) => (isObject(item) && (item = synchronizeDeep(mergeDeep({}, left[key][index]), item)), item)
            ))
          : (left[key] = right[key]);
      return left;
    }
    const styleCache = {};
    var src_GanttElasticvue_type_script_lang_js_ = {
        components: { MainView: MainView },
        props: ['tasks', 'options'],
        provide() {
          const provider = {},
            self = this;
          return Object.defineProperty(provider, 'root', { enumerable: !0, get: () => self }), provider;
        },
        data: () => ({
          updateTasksMut: 'GanttElastic/updateTasks',
          updateTaskMut: 'GanttElastic/updateTask',
          updateOptionsMut: 'GanttElastic/updateOptions'
        }),
        methods: {
          mergeDeep: mergeDeep,
          mergeDeepReactive: mergeDeepReactive,
          getScrollBarHeight() {
            const outer = document.createElement('div');
            (outer.style.visibility = 'hidden'),
              (outer.style.height = '100px'),
              (outer.style.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(outer);
            var noScroll = outer.offsetHeight;
            outer.style.overflow = 'scroll';
            var inner = document.createElement('div');
            (inner.style.height = '100%'), outer.appendChild(inner);
            var withScroll = inner.offsetHeight;
            return (
              outer.parentNode.removeChild(outer),
              this.$store.commit(this.updateOptionsMut, { scrollBarHeight: noScroll - withScroll })
            );
          },
          style(...mergeWith) {
            const index = JSON.stringify(mergeWith);
            if (void 0 !== styleCache[index]) return styleCache[index];
            let merged = this.$store.state.GanttElastic.options.style['*'];
            return (
              mergeWith.forEach(objOrClassName => {
                'string' == typeof objOrClassName
                  ? (merged = Object.assign({}, merged, this.$store.state.GanttElastic.options.style[objOrClassName]))
                  : 'object' == typeof objOrClassName
                  ? (merged = Object.assign({}, merged, objOrClassName))
                  : 'function' == typeof objOrClassName && (merged = Object.assign({}, objOrClassName()));
              }),
              (styleCache[index] = merged),
              merged
            );
          },
          refreshTasks: tasks =>
            (tasks = tasks.map(
              task => (
                void 0 === task.x && (task.x = 0),
                void 0 === task.y && (task.y = 0),
                void 0 === task.width && (task.width = 0),
                void 0 === task.height && (task.height = 0),
                void 0 === task.mouseOver && (task.mouseOver = !1),
                void 0 === task.collapsed && (task.collapsed = !1),
                void 0 === task.dependentOn && (task.dependentOn = []),
                void 0 === task.parentId && (task.parentId = null),
                void 0 === task.style && (task.style = {}),
                void 0 === task.children && (task.children = []),
                void 0 === task.parents && (task.parents = []),
                void 0 === task.parent && (task.parent = null),
                void 0 === task.durationMs && (task.durationMs = 1e3 * task.duration),
                task
              )
            )),
          initialize(itsUpdate = '', data = null) {
            let tasks, options;
            if ('' === itsUpdate || 'tasks' === itsUpdate) {
              (tasks = (tasks = Vue.observable(this.tasks.map(task => this.mergeDeepReactive({}, task)))).map(
                task => (
                  (task.startTime = dayjs_min_default()(task.start).valueOf()),
                  (task.durationMs = 1e3 * task.duration),
                  (task.endTime = task.startTime + task.durationMs),
                  task
                )
              )),
                (tasks = this.refreshTasks(tasks));
              const rootTask = { id: null, parent: null, root: !0, parents: [], children: [], allChildren: [] };
              (tasks = this.resetTaskTree(tasks)),
                (tasks = this.makeTaskTree(rootTask, tasks).allChildren.map(
                  taskId => tasks[tasks.findIndex(task => task.id === taskId)]
                )),
                this.$store.commit(this.updateTasksMut, tasks);
            }
            '' === itsUpdate
              ? (options = this.mergeDeep(
                  {},
                  (function(userOptions) {
                    let localeCode = 'en';
                    return (
                      void 0 !== userOptions.locale &&
                        'string' == typeof userOptions.locale.code &&
                        (localeCode = userOptions.locale.code),
                      {
                        style: src_style,
                        slots: { header: {} },
                        title: { label: 'gantt-elastic', html: !1 },
                        width: 0,
                        height: 0,
                        clientWidth: 0,
                        rowsHeight: 0,
                        allVisibleTasksHeight: 0,
                        scroll: {
                          scrolling: !1,
                          dragXMoveMultiplier: 3,
                          dragYMoveMultiplier: 2,
                          top: 0,
                          taskList: { left: 0, right: 0, top: 0, bottom: 0 },
                          chart: {
                            left: 0,
                            right: 0,
                            percent: 0,
                            timePercent: 0,
                            top: 0,
                            bottom: 0,
                            time: 0,
                            timeCenter: 0,
                            dateTime: { left: '', right: '' }
                          }
                        },
                        scope: { before: 1, after: 1 },
                        times: {
                          timeScale: 6e4,
                          timeZoom: 17,
                          timePerPixel: 0,
                          firstTime: 0,
                          lastTime: 0,
                          firstTaskTime: 0,
                          lastTaskTime: 0,
                          totalViewDurationMs: 0,
                          totalViewDurationPx: 0,
                          stepDuration: 'day',
                          steps: []
                        },
                        row: { height: 24 },
                        maxRows: 20,
                        maxHeight: 0,
                        chart: {
                          grid: { horizontal: { gap: 6 } },
                          progress: { width: 20, height: 6, pattern: !0, bar: !1 },
                          text: { offset: 0, xPadding: 10, display: !0 },
                          expander: { type: 'chart', display: !1, displayIfTaskListHidden: !0, offset: 4, size: 18 }
                        },
                        taskList: {
                          display: !0,
                          resizeAfterThreshold: !0,
                          widthThreshold: 75,
                          columns: [{ id: 0, label: 'ID', value: 'id', width: 40 }],
                          resizerWidth: 0,
                          percent: 100,
                          width: 0,
                          finalWidth: 0,
                          widthFromPercentage: 0,
                          minWidth: 18,
                          expander: {
                            type: 'task-list',
                            size: 16,
                            columnWidth: 24,
                            padding: 16,
                            margin: 10,
                            straight: !1
                          }
                        },
                        calendar: {
                          hours: [],
                          days: [],
                          months: [],
                          workingDays: [1, 2, 3, 4, 5],
                          gap: 6,
                          height: 0,
                          hour: {
                            height: 20,
                            display: !0,
                            widths: [],
                            maxWidths: {},
                            format: {
                              long: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('HH:mm'),
                              medium: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('HH:mm'),
                              short: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('HH')
                            }
                          },
                          day: {
                            height: 20,
                            display: !0,
                            widths: [],
                            maxWidths: {},
                            format: {
                              long: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('DD dddd'),
                              medium: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('DD ddd'),
                              short: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('DD')
                            }
                          },
                          month: {
                            height: 20,
                            display: !0,
                            widths: [],
                            maxWidths: {},
                            format: {
                              short: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('MM'),
                              medium: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format("MMM 'YY"),
                              long: date =>
                                dayjs_min_default()(date)
                                  .locale(localeCode)
                                  .format('MMMM YYYY')
                            }
                          }
                        },
                        locale: {
                          code: 'en',
                          Now: 'Now',
                          'X-Scale': 'Zoom-X',
                          'Y-Scale': 'Zoom-Y',
                          'Task list width': 'Task list',
                          'Before/After': 'Expand',
                          'Display task list': 'Show task list'
                        }
                      }
                    );
                  })(this.options),
                  this.options
                ))
              : 'options' === itsUpdate &&
                (options = this.mergeDeep({}, this.$store.state.GanttElastic.options, this.options)),
              ('' !== itsUpdate && 'options' !== itsUpdate) ||
                ((options.tasksById = {}),
                dayjs_min_default.a.locale(options.locale, null, !0),
                (options.taskList.columns = options.taskList.columns.map((column, index) => {
                  const columnOptions = { thresholdPercent: 100, widthFromPercentage: 0, finalWidth: 0 };
                  return (
                    void 0 === column.height && (columnOptions.height = 0),
                    void 0 === column.style && (columnOptions.style = {}),
                    (columnOptions._id = `${index}-${column.label}`),
                    this.mergeDeep({}, column, columnOptions)
                  );
                })),
                '' === itsUpdate && (options.ctx = document.createElement('canvas').getContext('2d')),
                this.$store.commit(this.updateOptionsMut, options),
                this.calculateTaskListColumnsDimensions(),
                this.getScrollBarHeight(),
                this.$store.commit(this.updateOptionsMut, {
                  outerHeight:
                    this.$store.state.GanttElastic.options.height +
                    this.$store.state.GanttElastic.options.scrollBarHeight
                })),
              this.globalOnResize();
          },
          getCalendarHeight() {
            return (
              this.$store.state.GanttElastic.options.calendar.height +
              this.style('calendar-row')['border-width'] +
              this.$store.state.GanttElastic.options.calendar.gap
            );
          },
          calculateCalendarDimensions() {
            let height = 0;
            return (
              this.$store.state.GanttElastic.options.calendar.hour.display &&
                this.$store.state.GanttElastic.options.calendar.hours.length > 0 &&
                (height += this.$store.state.GanttElastic.options.calendar.hour.height),
              this.$store.state.GanttElastic.options.calendar.day.display &&
                this.$store.state.GanttElastic.options.calendar.days.length > 0 &&
                (height += this.$store.state.GanttElastic.options.calendar.day.height),
              this.$store.state.GanttElastic.options.calendar.month.display &&
                this.$store.state.GanttElastic.options.calendar.months.length > 0 &&
                (height += this.$store.state.GanttElastic.options.calendar.month.height),
              this.$store.commit(this.updateOptionsMut, { calendar: { height: height } }),
              height
            );
          },
          getMaximalLevel() {
            let maximalLevel = 0;
            return (
              this.$store.state.GanttElastic.tasks.forEach(task => {
                task.parents.length > maximalLevel && (maximalLevel = task.parents.length);
              }),
              maximalLevel - 1
            );
          },
          getMaximalExpanderWidth() {
            return (
              this.getMaximalLevel() * this.$store.state.GanttElastic.options.taskList.expander.padding +
              this.$store.state.GanttElastic.options.taskList.expander.margin
            );
          },
          syncScrollTop() {
            if (this.$store.state.GanttElastic.options.refs.taskListItems) {
              const scrollTop = this.$store.state.GanttElastic.options.refs.chartGraph.scrollTop;
              this.$store.commit(this.updateOptionsMut, { scroll: { top: scrollTop } }),
                (this.$store.state.GanttElastic.options.refs.taskListItems.scrollTop = scrollTop),
                (this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical.scrollTop = scrollTop);
            }
          },
          calculateTaskListColumnsDimensions(columns) {
            let final = 0,
              percentage = 0;
            this.$store.state.GanttElastic.options.taskList.columns.forEach(column => {
              column.expander
                ? (column.widthFromPercentage =
                    ((this.getMaximalExpanderWidth() + column.width) / 100) *
                    this.$store.state.GanttElastic.options.taskList.percent)
                : (column.widthFromPercentage =
                    (column.width / 100) * this.$store.state.GanttElastic.options.taskList.percent),
                (percentage += column.widthFromPercentage),
                (column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100),
                (final += column.finalWidth),
                (column.height = this.getTaskHeight() - this.style('grid-line-horizontal')['stroke-width']);
            }),
              this.$store.commit(this.updateOptionsMut, {
                taskList: { widthFromPercentage: percentage, finalWidth: final }
              }),
              this.syncScrollTop();
          },
          resetTaskTree(tasks) {
            for (let i = 0, len = tasks.length; i < len; i++) {
              let task = tasks[i];
              tasks[i] = Object.assign(task, { children: [], allChildren: [], parent: null, parents: [] });
            }
            return tasks;
          },
          makeTaskTree(parent, tasks) {
            return (
              tasks.forEach(current => {
                current.parentId === parent.id &&
                  (parent.parents.length && (current.parents = parent.parents.map(parentId => parentId)),
                  void 0 === parent.root
                    ? (current.parents.push(parent.id), (current.parent = parent.id))
                    : ((current.parents = []), (current.parent = null)),
                  (current = this.makeTaskTree(current, tasks)),
                  parent.allChildren.push(current.id),
                  parent.children.push(current.id),
                  current.allChildren.forEach(childId => parent.allChildren.push(childId)));
              }),
              parent
            );
          },
          getTask(taskId) {
            for (let i = 0, len = this.$store.state.GanttElastic.tasks.length; i < len; i++) {
              const current = this.$store.state.GanttElastic.tasks[i];
              if (current.id === taskId) return current;
            }
            return null;
          },
          getChildren(taskId) {
            return this.$store.state.GanttElastic.tasks.filter(task => task.parent === taskId);
          },
          isTaskVisible(task) {
            ('number' != typeof task && 'string' != typeof task) || (task = this.getTask(task));
            for (let i = 0, len = task.parents.length; i < len; i++)
              if (this.getTask(task.parents[i]).collapsed) return !1;
            return !0;
          },
          getSVG() {
            return this.$store.state.GanttElastic.options.mainView.outerHTML;
          },
          getImage(type = 'image/png') {
            return new Promise((resolve, reject) => {
              const img = new Image();
              (img.onload = () => {
                const canvas = document.createElement('canvas');
                (canvas.width = this.$store.state.GanttElastic.options.mainView.clientWidth),
                  (canvas.height = this.$store.state.GanttElastic.options.rowsHeight),
                  canvas.getContext('2d').drawImage(img, 0, 0),
                  resolve(canvas.toDataURL(type));
              }),
                (img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG()));
            });
          },
          getHeight(visibleTasks, outer = !1) {
            let height =
              visibleTasks.length *
                (this.$store.state.GanttElastic.options.row.height +
                  2 * this.$store.state.GanttElastic.options.chart.grid.horizontal.gap) +
              this.$store.state.GanttElastic.options.calendar.height +
              2 * parseFloat(this.style('calendar-row-rect')['border-width']) +
              this.$store.state.GanttElastic.options.calendar.gap;
            return outer && (height += this.$store.state.GanttElastic.options.scrollBarHeight), height;
          },
          getTaskHeight(withStroke = !1) {
            return withStroke
              ? this.$store.state.GanttElastic.options.row.height +
                  2 * this.$store.state.GanttElastic.options.chart.grid.horizontal.gap +
                  this.style('grid-line-horizontal')['stroke-width']
              : this.$store.state.GanttElastic.options.row.height +
                  2 * this.$store.state.GanttElastic.options.chart.grid.horizontal.gap;
          },
          getTasksHeight(visibleTasks, outer = !1) {
            return visibleTasks.length * this.getTaskHeight();
          },
          timeToPixelOffsetX(ms) {
            let x = ms - this.$store.state.GanttElastic.options.times.firstTime;
            return x && (x /= this.$store.state.GanttElastic.options.times.timePerPixel), x;
          },
          pixelOffsetXToTime(pixelOffsetX) {
            return (
              (pixelOffsetX + this.style('grid-line-vertical')['stroke-width'] / 2) *
                this.$store.state.GanttElastic.options.times.timePerPixel +
              this.$store.state.GanttElastic.options.times.firstTime
            );
          },
          isInsideViewPort(x, width, buffer = 5e3) {
            return (
              (x + width + buffer >= this.$store.state.GanttElastic.options.scroll.chart.left &&
                x - buffer <= this.$store.state.GanttElastic.options.scroll.chart.right) ||
              (x - buffer <= this.$store.state.GanttElastic.options.scroll.chart.left &&
                x + width + buffer >= this.$store.state.GanttElastic.options.scroll.chart.right)
            );
          },
          onScrollChart(ev) {
            const horizontal = this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal,
              vertical = this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical;
            this._onScrollChart(horizontal.scrollLeft, vertical.scrollTop);
          },
          _onScrollChart(left, top) {
            const chartContainerWidth = this.$store.state.GanttElastic.options.refs.chartContainer.clientWidth,
              options = {
                scroll: {
                  chart: {
                    left: left,
                    right: left + chartContainerWidth,
                    percent: (left / this.$store.state.GanttElastic.options.times.totalViewDurationPx) * 100,
                    top: top,
                    time: this.pixelOffsetXToTime(left),
                    timeCenter: this.pixelOffsetXToTime(left + chartContainerWidth / 2),
                    dateTime: {
                      left: this.$store.state.GanttElastic.options.scroll.chart.time,
                      right: this.pixelOffsetXToTime(
                        left + this.$store.state.GanttElastic.options.refs.chart.clientWidth
                      )
                    }
                  }
                }
              };
            this.$store.commit(this.updateOptionsMut, options), this.scrollTo(left, top);
          },
          scrollToTime(time) {
            let pos = this.timeToPixelOffsetX(time);
            const chartContainerWidth = this.$store.state.GanttElastic.options.refs.chartContainer.clientWidth;
            (pos -= chartContainerWidth / 2) > this.$store.state.GanttElastic.options.width &&
              (pos = this.$store.state.GanttElastic.options.width - chartContainerWidth),
              this.scrollTo(pos);
          },
          scrollTo(left = null, top = null) {
            null !== left &&
              ((this.$store.state.GanttElastic.options.refs.chartContainer.scrollLeft = left),
              (this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal.scrollLeft = left),
              this.$store.commit(this.updateOptionsMut, { scroll: { left: left } })),
              null !== top &&
                ((this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical.scrollTop = top),
                (this.$store.state.GanttElastic.options.refs.chartGraph.scrollTop = top),
                (this.$store.state.GanttElastic.options.refs.taskListItems.scrollTop = top),
                this.$store.commit(this.updateOptionsMut, { scroll: { top: top } }));
          },
          fixScrollPos() {
            this.$nextTick(() => {
              this.scrollToTime(this.$store.state.GanttElastic.options.scroll.chart.timeCenter);
            });
          },
          onWheelChart(ev) {
            if (ev.shiftKey) {
              let left = this.$store.state.GanttElastic.options.scroll.left + ev.deltaY;
              const chartClientWidth = this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal
                  .clientWidth,
                scrollWidth =
                  this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal.scrollWidth -
                  chartClientWidth;
              left < 0 ? (left = 0) : left > scrollWidth && (left = scrollWidth), this.scrollTo(left);
            } else {
              let top = this.$store.state.GanttElastic.options.scroll.top + ev.deltaY;
              const chartClientHeight = this.$store.state.GanttElastic.options.rowsHeight,
                scrollHeight = this.$store.state.GanttElastic.options.refs.chartGraph.scrollHeight - chartClientHeight;
              top < 0 ? (top = 0) : top > scrollHeight && (top = scrollHeight), this.scrollTo(null, top);
            }
          },
          onTimeZoomChange(timeZoom) {
            this.$store.commit(this.updateOptionsMut, { times: { timeZoom: timeZoom } }),
              this.recalculateTimes(),
              this.calculateSteps(),
              this.calculateCalendarDimensions(),
              this.fixScrollPos();
          },
          onRowHeightChange(height) {
            this.$store.commit(this.updateOptionsMut, { row: { height: height } }),
              this.calculateTaskListColumnsDimensions();
          },
          onScopeChange(value) {
            this.$store.commit(this.updateOptionsMut, { scope: { before: value, after: value } }),
              this.initTimes(),
              this.calculateSteps(),
              this.computeCalendarWidths(),
              this.fixScrollPos();
          },
          onTaskListWidthChange(value) {
            this.$store.commit(this.updateOptionsMut, { taskList: { percent: value } }),
              this.calculateTaskListColumnsDimensions(),
              this.fixScrollPos();
          },
          onTaskListColumnWidthChange(value) {
            this.calculateTaskListColumnsDimensions(), this.fixScrollPos();
          },
          initializeEvents() {
            this.$on('chart-scroll-horizontal', this.onScrollChart),
              this.$on('chart-scroll-vertical', this.onScrollChart),
              this.$on('chart-wheel', this.onWheelChart),
              this.$on('times-timeZoom-change', this.onTimeZoomChange),
              this.$on('row-height-change', this.onRowHeightChange),
              this.$on('scope-change', this.onScopeChange),
              this.$on('taskList-width-change', this.onTaskListWidthChange),
              this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange);
          },
          recalculateTimes() {
            let steps =
                (60 * this.$store.state.GanttElastic.options.times.timeScale) /
                this.$store.state.GanttElastic.options.times.timeScale,
              percent = this.$store.state.GanttElastic.options.times.timeZoom / 100;
            const timePerPixel =
                this.$store.state.GanttElastic.options.times.timeScale * steps * percent +
                Math.pow(2, this.$store.state.GanttElastic.options.times.timeZoom),
              totalViewDurationMs = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime).diff(
                dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime),
                'milisecods'
              ),
              totalViewDurationPx = totalViewDurationMs / timePerPixel;
            this.$store.commit(this.updateOptionsMut, {
              times: {
                timePerPixel: timePerPixel,
                totalViewDurationMs: totalViewDurationMs,
                totalViewDurationPx: totalViewDurationPx
              },
              width: totalViewDurationPx + this.style('grid-line-vertical')['stroke-width']
            });
          },
          initTimes() {
            const firstTime = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTaskTime)
                .locale(this.locale)
                .startOf('day')
                .subtract(this.$store.state.GanttElastic.options.scope.before, 'days')
                .startOf('day')
                .valueOf(),
              lastTime = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTaskTime)
                .locale(this.locale)
                .endOf('day')
                .add(this.$store.state.GanttElastic.options.scope.after, 'days')
                .endOf('day')
                .valueOf();
            this.$store.commit(this.updateOptionsMut, { times: { firstTime: firstTime, lastTime: lastTime } }),
              this.recalculateTimes();
          },
          calculateSteps() {
            const steps = [],
              lastMs = this.$store.state.GanttElastic.options.times.lastTime,
              currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
            steps.push({ time: currentDate.valueOf(), offset: { ms: 0, px: 0 } });
            for (
              let currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime)
                .add(1, this.$store.state.GanttElastic.options.times.stepDuration)
                .startOf('day');
              currentDate.valueOf() <= lastMs;
              currentDate = currentDate.add(1, this.$store.state.GanttElastic.options.times.stepDuration).startOf('day')
            ) {
              const offsetMs = currentDate.diff(this.$store.state.GanttElastic.options.times.firstTime, 'milisecods'),
                offsetPx = offsetMs / this.$store.state.GanttElastic.options.times.timePerPixel,
                step = { time: currentDate.valueOf(), offset: { ms: offsetMs, px: offsetPx } },
                previousStep = steps[steps.length - 1];
              (previousStep.width = { ms: offsetMs - previousStep.offset.ms, px: offsetPx - previousStep.offset.px }),
                steps.push(step);
            }
            const lastStep = steps[steps.length - 1];
            (lastStep.width = {
              ms: this.$store.state.GanttElastic.options.times.totalViewDurationMs - lastStep.offset.ms,
              px: this.$store.state.GanttElastic.options.times.totalViewDurationPx - lastStep.offset.px
            }),
              this.$store.commit(this.updateOptionsMut, { times: { steps: steps } });
          },
          computeCalendarWidths() {
            this.computeDayWidths(), this.computeHourWidths(), this.computeMonthWidths();
          },
          computeHourWidths() {
            const options = this.$store.state.GanttElastic.options,
              newOptions = { calendar: { hour: { widths: [] } } },
              style = this.style('calendar-row-text', 'calendar-row-text--hour');
            options.ctx.font = style['font-size'] + ' ' + style['font-family'];
            let currentDate = dayjs_min_default()('2018-01-01T00:00:00'),
              maxWidths = {};
            Object.keys(options.calendar.hour.format).forEach(formatName => {
              maxWidths[formatName] = 0;
            });
            for (let hour = 0; hour < 24; hour++) {
              const widths = { hour: hour };
              Object.keys(options.calendar.hour.format).forEach(formatName => {
                widths[formatName] = options.ctx.measureText(
                  options.calendar.hour.format[formatName](currentDate.toDate())
                ).width;
              }),
                newOptions.calendar.hour.widths.push(widths),
                Object.keys(options.calendar.hour.format).forEach(formatName => {
                  widths[formatName] > maxWidths[formatName] && (maxWidths[formatName] = widths[formatName]);
                }),
                (currentDate = currentDate.add(1, 'hour'));
            }
            (newOptions.calendar.hour.maxWidths = maxWidths), this.$store.commit(this.updateOptionsMut, newOptions);
          },
          computeDayWidths() {
            const options = this.$store.state.GanttElastic.options,
              newOptions = { calendar: { day: { widths: [] } } },
              style = this.style('calendar-row-text', 'calendar-row-text--day');
            options.ctx.font = style['font-size'] + ' ' + style['font-family'];
            let currentDate = dayjs_min_default()(options.times.steps[0].date),
              maxWidths = {};
            Object.keys(options.calendar.day.format).forEach(formatName => {
              maxWidths[formatName] = 0;
            });
            for (let day = 0, daysLen = options.times.steps.length; day < daysLen; day++) {
              const widths = { day: day };
              Object.keys(options.calendar.day.format).forEach(formatName => {
                widths[formatName] = options.ctx.measureText(
                  options.calendar.day.format[formatName](currentDate.toDate())
                ).width;
              }),
                newOptions.calendar.day.widths.push(widths),
                Object.keys(options.calendar.day.format).forEach(formatName => {
                  widths[formatName] > maxWidths[formatName] && (maxWidths[formatName] = widths[formatName]);
                }),
                (currentDate = currentDate.add(1, 'day'));
            }
            (newOptions.calendar.day.maxWidths = maxWidths), this.$store.commit(this.updateOptionsMut, newOptions);
          },
          computeMonthWidths() {
            const options = this.$store.state.GanttElastic.options,
              newOptions = { calendar: { month: { widths: [] } } },
              style = this.style('calendar-row-text', 'calendar-row-text--month');
            options.ctx.font = style['font-size'] + ' ' + style['font-family'];
            let maxWidths = {};
            Object.keys(options.calendar.month.format).forEach(formatName => {
              maxWidths[formatName] = 0;
            });
            let currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
            const monthsCount = Math.ceil(
              dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime).diff(
                dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime),
                'months',
                !0
              )
            );
            for (let month = 0; month < monthsCount; month++) {
              const widths = { month: month };
              Object.keys(options.calendar.month.format).forEach(formatName => {
                widths[formatName] = options.ctx.measureText(
                  options.calendar.month.format[formatName](currentDate.toDate())
                ).width;
              }),
                newOptions.calendar.month.widths.push(widths),
                Object.keys(options.calendar.month.format).forEach(formatName => {
                  widths[formatName] > maxWidths[formatName] && (maxWidths[formatName] = widths[formatName]);
                }),
                (currentDate = currentDate.add(1, 'month'));
            }
            (newOptions.calendar.month.maxWidths = maxWidths), this.$store.commit(this.updateOptionsMut, newOptions);
          },
          prepareDates() {
            let firstTaskTime = Number.MAX_SAFE_INTEGER,
              lastTaskTime = 0;
            for (let index = 0, len = this.$store.state.GanttElastic.tasks.length; index < len; index++) {
              let task = this.$store.state.GanttElastic.tasks[index];
              const newProps = { id: task.id };
              (newProps.startTime = dayjs_min_default()(task.start).valueOf()),
                (newProps.durationMs = 1e3 * task.duration),
                task.startTime < firstTaskTime && (firstTaskTime = task.startTime),
                newProps.startTime + newProps.durationMs > lastTaskTime &&
                  (lastTaskTime = newProps.startTime + newProps.durationMs),
                this.$store.commit(this.updateTaskMut, newProps);
            }
            const firstTime = dayjs_min_default()(firstTaskTime)
                .locale(this.locale)
                .startOf('day')
                .subtract(this.$store.state.GanttElastic.options.scope.before, 'days')
                .startOf('day')
                .valueOf(),
              lastTime = dayjs_min_default()(lastTaskTime)
                .locale(this.locale)
                .endOf('day')
                .add(this.$store.state.GanttElastic.options.scope.after, 'days')
                .endOf('day')
                .valueOf();
            this.$store.commit(this.updateOptionsMut, {
              times: {
                firstTaskTime: firstTaskTime,
                lastTaskTime: lastTaskTime,
                firstTime: firstTime,
                lastTime: lastTime
              }
            });
          },
          setup(itsUpdate = '', data = null) {
            this.initialize(itsUpdate, data),
              this.prepareDates(),
              this.initTimes(),
              this.calculateSteps(),
              this.computeCalendarWidths(),
              this.$emit('calendar-recalculate');
            const width = this.$store.state.GanttElastic.options.taskList.columns.reduce(
              (prev, current) => ({ width: prev.width + current.width }),
              { width: 0 }
            ).width;
            this.$store.commit(this.updateOptionsMut, { taskList: { width: width } });
          },
          globalOnResize(ev) {
            if (void 0 === this.$el || !this.$el) return;
            const options = { clientWidth: this.$el.clientWidth, taskList: { columns: [] } };
            if (
              this.$store.state.GanttElastic.options.taskList.widthFromPercentage >
              (this.$store.state.GanttElastic.options.clientWidth / 100) *
                this.$store.state.GanttElastic.options.taskList.widthThreshold
            ) {
              let diffPercent =
                100 -
                ((this.$store.state.GanttElastic.options.taskList.widthFromPercentage -
                  (this.$store.state.GanttElastic.options.clientWidth / 100) *
                    this.$store.state.GanttElastic.options.taskList.widthThreshold) /
                  this.$store.state.GanttElastic.options.taskList.widthFromPercentage) *
                  100;
              diffPercent < 0 && (diffPercent = 0),
                (options.taskList.columns = this.$store.state.GanttElastic.options.taskList.columns.map(
                  column => ((column.thresholdPercent = diffPercent), column)
                ));
            } else
              options.taskList.columns = this.$store.state.GanttElastic.options.taskList.columns.map(
                column => ((column.thresholdPercent = 100), column)
              );
            this.$store.commit(this.updateOptionsMut, options), this.calculateTaskListColumnsDimensions();
          }
        },
        computed: {
          internalTasks() {
            return this.$store.state.GanttElastic.tasks.map(task => task);
          },
          internalOptions() {
            return mergeDeep({}, this.$store.state.GanttElastic.options);
          },
          visibleTasks() {
            const visibleTasks = this.$store.state.GanttElastic.tasks.filter(task => this.isTaskVisible(task)),
              maxRows = visibleTasks.slice(0, this.$store.state.GanttElastic.options.maxRows),
              options = {};
            options.rowsHeight = this.getTasksHeight(maxRows);
            let heightCompensation = 0;
            this.$store.state.GanttElastic.options.maxHeight &&
              options.rowsHeight > this.$store.state.GanttElastic.options.maxHeight &&
              ((heightCompensation = options.rowsHeight - this.$store.state.GanttElastic.options.maxHeight),
              (options.rowsHeight = this.$store.state.GanttElastic.options.maxHeight)),
              (options.height = this.getHeight(maxRows) - heightCompensation),
              (options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks)),
              (options.outerHeight = this.getHeight(maxRows, !0) - heightCompensation);
            let len = visibleTasks.length;
            for (let index = 0; index < len; index++) {
              let task = visibleTasks[index];
              const props = { id: task.id };
              (props.width =
                task.durationMs / this.$store.state.GanttElastic.options.times.timePerPixel -
                this.style('grid-line-vertical')['stroke-width']),
                props.width < 0 && (props.width = 0),
                (props.height = this.$store.state.GanttElastic.options.row.height),
                (props.x = this.timeToPixelOffsetX(task.startTime)),
                (props.y =
                  (this.$store.state.GanttElastic.options.row.height +
                    2 * this.$store.state.GanttElastic.options.chart.grid.horizontal.gap) *
                    index +
                  this.$store.state.GanttElastic.options.chart.grid.horizontal.gap),
                this.$store.commit(this.updateTaskMut, props);
            }
            return (
              this.$store.commit(this.updateOptionsMut, options),
              this.$nextTick(() => {
                this.syncScrollTop();
              }),
              visibleTasks
            );
          },
          getTaskListColumns() {
            return this.calculateTaskListColumnsDimensions(), this.$store.state.GanttElastic.options.taskList.columns;
          }
        },
        created() {
          this.$store.registerModule('GanttElastic', GanttElastic_vuex),
            this.$watch('internalTasks', tasks => {
              const newTasks = tasks.map(task => {
                return synchronizeDeep(mergeDeep({}, this.tasks.find(sourceTask => sourceTask.id === task.id)), task);
              });
              equalDeep(this.tasks, newTasks) || this.$emit('tasks-updated', newTasks);
            }),
            this.$watch('tasks', tasks => {
              const oldTasks = this.$store.state.GanttElastic.tasks.map((task, index) =>
                  synchronizeDeep(mergeDeep({}, this.tasks[index]), task)
                ),
                newTasks = tasks.map(task => mergeDeep({}, task));
              equalDeep(newTasks, oldTasks) || this.setup('tasks', newTasks);
            }),
            this.$watch('internalOptions', options => {
              const newOptions = synchronizeDeep(mergeDeep({}, this.options), this.$store.state.GanttElastic.options);
              equalDeep(this.options, newOptions) || this.$emit('options-updated', newOptions);
            }),
            this.$watch(
              'options',
              options => {
                const newOptions = mergeDeep({}, options);
                equalDeep(newOptions, mergeDeep({}, this.$store.state.GanttElastic.options)) ||
                  this.setup('options', newOptions);
              },
              { deep: !0 }
            ),
            this.$root.$emit('gantt-elastic-created', this),
            this.$emit('created', this),
            this.initializeEvents(),
            this.setup();
        },
        beforeMount() {
          this.$emit('before-mount', this);
        },
        mounted() {
          this.$store.commit(this.updateOptionsMut, { clientWidth: this.$el.clientWidth }),
            window.addEventListener('resize', this.globalOnResize),
            this.globalOnResize(),
            this.$root.$emit('gantt-elastic-mounted', this),
            this.$emit('mounted'),
            this.$root.$emit('gantt-elastic-ready', this);
        },
        beforeUpdate() {
          this.$emit('before-update');
        },
        updated() {
          this.$nextTick(() => {
            this.$emit('updated');
          });
        },
        beforeDestroy() {
          window.removeEventListener('resize', this.globalOnResize), this.$emit('before-destroy');
        },
        destroyed() {
          this.$emit('destroyed');
        }
      },
      GanttElastic_component = (__webpack_require__(11),
      normalizeComponent(
        src_GanttElasticvue_type_script_lang_js_,
        GanttElasticvue_type_template_id_02c6304c_render,
        [],
        !1,
        null,
        null,
        null
      ));
    GanttElastic_component.options.__file = 'src/GanttElastic.vue';
    var src_GanttElastic = GanttElastic_component.exports;
    external_Vue_default.a.use(external_Vuex_default.a);
    var GanttElastic_standalone_component = normalizeComponent(
      {
        components: {
          'gantt-header': { template: '<div></div>' },
          'gantt-elastic': src_GanttElastic,
          'gantt-footer': { template: '<div></div>' }
        },
        store: new external_Vuex_default.a.Store({}),
        props: ['header', 'footer'],
        data: { tasks: [], options: {} }
      },
      render,
      [],
      !1,
      null,
      null,
      null
    );
    GanttElastic_standalone_component.options.__file = 'src/GanttElastic.standalone.vue';
    var GanttElastic_standalone = GanttElastic_standalone_component.exports;
    /**
     * @fileoverview Bundle main entry file
     * @license MIT
     * @author Rafal Pospiech <neuronet.io@gmail.com>
     * @package GanttElasticStandalone
     */ window.GanttElastic = {
      component: GanttElastic_standalone,
      mount(config) {
        let { el: el, tasks: tasks, options: options } = config;
        const ganttElastic = GanttElastic_standalone;
        return (
          (ganttElastic.data = { tasks: tasks, options: options }),
          console.log('mounting', ganttElastic),
          new external_Vue_default.a(ganttElastic)
            .$on('gantt-elastic-ready', ganttInstance => {
              console.log(ganttInstance), 'function' == typeof config.ready && config.ready(ganttInstance);
            })
            .$mount(el)
        );
      }
    };
    __webpack_exports__.default = GanttElastic_standalone;
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    function listToStyles(parentId, list) {
      for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
        var item = list[i],
          id = item[0],
          part = { id: parentId + ':' + i, css: item[1], media: item[2], sourceMap: item[3] };
        newStyles[id] ? newStyles[id].parts.push(part) : styles.push((newStyles[id] = { id: id, parts: [part] }));
      }
      return styles;
    }
    __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, 'default', function() {
        return addStylesClient;
      });
    var hasDocument = 'undefined' != typeof document;
    if ('undefined' != typeof DEBUG && DEBUG && !hasDocument)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var stylesInDom = {},
      head = hasDocument && (document.head || document.getElementsByTagName('head')[0]),
      singletonElement = null,
      singletonCounter = 0,
      isProduction = !1,
      noop = function() {},
      options = null,
      ssrIdKey = 'data-vue-ssr-id',
      isOldIE = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function addStylesClient(parentId, list, _isProduction, _options) {
      (isProduction = _isProduction), (options = _options || {});
      var styles = listToStyles(parentId, list);
      return (
        addStylesToDom(styles),
        function(newList) {
          for (var mayRemove = [], i = 0; i < styles.length; i++) {
            var item = styles[i];
            (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle);
          }
          newList ? addStylesToDom((styles = listToStyles(parentId, newList))) : (styles = []);
          for (i = 0; i < mayRemove.length; i++) {
            var domStyle;
            if (0 === (domStyle = mayRemove[i]).refs) {
              for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
              delete stylesInDom[domStyle.id];
            }
          }
        }
      );
    }
    function addStylesToDom(styles) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i],
          domStyle = stylesInDom[item.id];
        if (domStyle) {
          domStyle.refs++;
          for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
          for (; j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
          domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
        } else {
          var parts = [];
          for (j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
          stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
        }
      }
    }
    function createStyleElement() {
      var styleElement = document.createElement('style');
      return (styleElement.type = 'text/css'), head.appendChild(styleElement), styleElement;
    }
    function addStyle(obj) {
      var update,
        remove,
        styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]');
      if (styleElement) {
        if (isProduction) return noop;
        styleElement.parentNode.removeChild(styleElement);
      }
      if (isOldIE) {
        var styleIndex = singletonCounter++;
        (styleElement = singletonElement || (singletonElement = createStyleElement())),
          (update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1)),
          (remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0));
      } else
        (styleElement = createStyleElement()),
          (update = function(styleElement, obj) {
            var css = obj.css,
              media = obj.media,
              sourceMap = obj.sourceMap;
            media && styleElement.setAttribute('media', media);
            options.ssrId && styleElement.setAttribute(ssrIdKey, obj.id);
            sourceMap &&
              ((css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'),
              (css +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
                ' */'));
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
            else {
              for (; styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
              styleElement.appendChild(document.createTextNode(css));
            }
          }.bind(null, styleElement)),
          (remove = function() {
            styleElement.parentNode.removeChild(styleElement);
          });
      return (
        update(obj),
        function(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
            update((obj = newObj));
          } else remove();
        }
      );
    }
    var textStore,
      replaceText = ((textStore = []),
      function(index, replacement) {
        return (textStore[index] = replacement), textStore.filter(Boolean).join('\n');
      });
    function applyToSingletonTag(styleElement, index, remove, obj) {
      var css = remove ? '' : obj.css;
      if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css);
      else {
        var cssNode = document.createTextNode(css),
          childNodes = styleElement.childNodes;
        childNodes[index] && styleElement.removeChild(childNodes[index]),
          childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
      }
    }
  }
]);
