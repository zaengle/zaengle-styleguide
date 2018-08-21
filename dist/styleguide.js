/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var Sticky = __webpack_require__(3);

var stuck = new Sticky('.styleguide-js-sticky');

/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+markup-templating+json+php+scss+twig&plugins=line-highlight+line-numbers+toolbar+show-language+copy-to-clipboard */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-([\w-]+)\b/i,
      t = 0,
      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler, util: { encode: function encode(e) {
        return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
      }, clone: function clone(e, t) {
        var r = n.util.type(e);switch (t = t || {}, r) {case "Object":
            if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = {};t[n.util.objId(e)] = a;for (var l in e) {
              e.hasOwnProperty(l) && (a[l] = n.util.clone(e[l], t));
            }return a;case "Array":
            if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = [];return t[n.util.objId(e)] = a, e.forEach(function (e, r) {
              a[r] = n.util.clone(e, t);
            }), a;}return e;
      } }, languages: { extend: function extend(e, t) {
        var r = n.util.clone(n.languages[e]);for (var a in t) {
          r[a] = t[a];
        }return r;
      }, insertBefore: function insertBefore(e, t, r, a) {
        a = a || n.languages;var l = a[e];if (2 == arguments.length) {
          r = arguments[1];for (var i in r) {
            r.hasOwnProperty(i) && (l[i] = r[i]);
          }return l;
        }var o = {};for (var s in l) {
          if (l.hasOwnProperty(s)) {
            if (s == t) for (var i in r) {
              r.hasOwnProperty(i) && (o[i] = r[i]);
            }o[s] = l[s];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === a[e] && t != e && (this[t] = o);
        }), a[e] = o;
      }, DFS: function DFS(e, t, r, a) {
        a = a || {};for (var l in e) {
          e.hasOwnProperty(l) && (t.call(e, l, e[l], r || l), "Object" !== n.util.type(e[l]) || a[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || a[n.util.objId(e[l])] || (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, a)) : (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, a)));
        }
      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
      n.highlightAllUnder(document, e, t);
    }, highlightAllUnder: function highlightAllUnder(e, t, r) {
      var a = { callback: r, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var l, i = a.elements || e.querySelectorAll(a.selector), o = 0; l = i[o++];) {
        n.highlightElement(l, t === !0, a.callback);
      }
    }, highlightElement: function highlightElement(t, r, a) {
      for (var l, i, o = t; o && !e.test(o.className);) {
        o = o.parentNode;
      }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l));var s = t.textContent,
          u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), r && _self.Worker) {
        var g = new Worker(n.filename);g.onmessage = function (e) {
          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
    }, highlight: function highlight(e, t, a) {
      var l = { code: e, grammar: t, language: a };return n.hooks.run("before-tokenize", l), l.tokens = n.tokenize(l.code, l.grammar), n.hooks.run("after-tokenize", l), r.stringify(n.util.encode(l.tokens), l.language);
    }, matchGrammar: function matchGrammar(e, t, r, a, l, i, o) {
      var s = n.Token;for (var u in r) {
        if (r.hasOwnProperty(u) && r[u]) {
          if (u == o) return;var g = r[u];g = "Array" === n.util.type(g) ? g : [g];for (var c = 0; c < g.length; ++c) {
            var h = g[c],
                f = h.inside,
                d = !!h.lookbehind,
                m = !!h.greedy,
                p = 0,
                y = h.alias;if (m && !h.pattern.global) {
              var v = h.pattern.toString().match(/[imuy]*$/)[0];h.pattern = RegExp(h.pattern.source, v + "g");
            }h = h.pattern || h;for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
              var w = t[b];if (t.length > e.length) return;if (!(w instanceof s)) {
                if (m && b != t.length - 1) {
                  h.lastIndex = k;var _ = h.exec(e);if (!_) break;for (var j = _.index + (d ? _[1].length : 0), P = _.index + _[0].length, A = b, x = k, O = t.length; O > A && (P > x || !t[A].type && !t[A - 1].greedy); ++A) {
                    x += t[A].length, j >= x && (++b, k = x);
                  }if (t[b] instanceof s) continue;I = A - b, w = e.slice(k, x), _.index -= k;
                } else {
                  h.lastIndex = 0;var _ = h.exec(w),
                      I = 1;
                }if (_) {
                  d && (p = _[1] ? _[1].length : 0);var j = _.index + p,
                      _ = _[0].slice(p),
                      P = j + _.length,
                      N = w.slice(0, j),
                      S = w.slice(P),
                      C = [b, I];N && (++b, k += N.length, C.push(N));var E = new s(u, f ? n.tokenize(_, f) : _, y, _, m);if (C.push(E), S && C.push(S), Array.prototype.splice.apply(t, C), 1 != I && n.matchGrammar(e, t, r, b, k, !0, u), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    }, tokenize: function tokenize(e, t) {
      var r = [e],
          a = t.rest;if (a) {
        for (var l in a) {
          t[l] = a[l];
        }delete t.rest;
      }return n.matchGrammar(e, r, t, 0, 0, !1), r;
    }, hooks: { all: {}, add: function add(e, t) {
        var r = n.hooks.all;r[e] = r[e] || [], r[e].push(t);
      }, run: function run(e, t) {
        var r = n.hooks.all[e];if (r && r.length) for (var a, l = 0; a = r[l++];) {
          a(t);
        }
      } } },
      r = n.Token = function (e, t, n, r, a) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!a;
  };if (r.stringify = function (e, t, a) {
    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
      return r.stringify(n, t, e);
    }).join("");var l = { type: e.type, content: r.stringify(e.content, t, a), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: a };if (e.alias) {
      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
    }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
      return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
  }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
    var t = JSON.parse(e.data),
        r = t.language,
        a = t.code,
        l = t.immediateClose;_self.postMessage(n.highlight(a, n.languages[r], r)), l && _self.close();
  }, !1), _self.Prism) : _self.Prism;var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return a && (n.filename = a.src, n.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^{}\s][^{};]*?(?=\s*\{)/, string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css", greedy: !0 } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(?:true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, "function": /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i, alias: "function" }, constant: /\b[A-Z][A-Z\d_]*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } } }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript", greedy: !0 } }), Prism.languages.js = Prism.languages.javascript;
Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], { buildPlaceholders: { value: function value(e, t, n, a) {
      e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function (n) {
        if ("function" == typeof a && !a(n)) return n;for (var r = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___");) {
          ++r;
        }return e.tokenStack[r] = n, "___" + t.toUpperCase() + r + "___";
      }), e.grammar = Prism.languages.markup);
    } }, tokenizePlaceholders: { value: function value(e, t) {
      if (e.language === t && e.tokenStack) {
        e.grammar = Prism.languages[t];var n = 0,
            a = Object.keys(e.tokenStack),
            r = function r(o) {
          if (!(n >= a.length)) for (var i = 0; i < o.length; i++) {
            var g = o[i];if ("string" == typeof g || g.content && "string" == typeof g.content) {
              var c = a[n],
                  s = e.tokenStack[c],
                  l = "string" == typeof g ? g : g.content,
                  p = l.indexOf("___" + t.toUpperCase() + c + "___");if (p > -1) {
                ++n;var f,
                    u = l.substring(0, p),
                    _ = new Prism.Token(t, Prism.tokenize(s, e.grammar, t), "language-" + t, s),
                    k = l.substring(p + ("___" + t.toUpperCase() + c + "___").length);if (u || k ? (f = [u, _, k].filter(function (e) {
                  return !!e;
                }), r(f)) : f = _, "string" == typeof g ? Array.prototype.splice.apply(o, [i, 1].concat(f)) : g.content = f, n >= a.length) break;
              }
            } else g.content && "string" != typeof g.content && r(g.content);
          }
        };r(e.tokens);
      }
    } } });
Prism.languages.json = { property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, number: /-?\d+\.?\d*([Ee][+-]?\d+)?/, punctuation: /[{}[\],]/, operator: /:/g, "boolean": /\b(?:true|false)\b/i, "null": /\bnull\b/i }, Prism.languages.jsonp = Prism.languages.json;
!function (e) {
  e.languages.php = e.languages.extend("clike", { keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i, constant: /\b[A-Z0-9_]{2,}\b/, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), e.languages.insertBefore("php", "string", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), e.languages.insertBefore("php", "keyword", { delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: "important" }, variable: /\$+(?:\w+\b|(?={))/i, "package": { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), e.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }), e.languages.insertBefore("php", "string", { "nowdoc-string": { pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, "heredoc-string": { pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: null } }, "single-quoted-string": { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string" }, "double-quoted-string": { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: "string", inside: { interpolation: null } } }), delete e.languages.php.string;var n = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/, lookbehind: !0, inside: { rest: e.languages.php } };e.languages.php["heredoc-string"].inside.interpolation = n, e.languages.php["double-quoted-string"].inside.interpolation = n, e.hooks.add("before-tokenize", function (n) {
    if (/(?:<\?php|<\?)/gi.test(n.code)) {
      var i = /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi;e.languages["markup-templating"].buildPlaceholders(n, "php", i);
    }
  }), e.hooks.add("after-tokenize", function (n) {
    e.languages["markup-templating"].tokenizePlaceholders(n, "php");
  });
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.scss.property = { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, "boolean": /\b(?:true|false)\b/, "null": /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.twig = { comment: /\{#[\s\S]*?#\}/, tag: { pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/, inside: { ld: { pattern: /^(?:\{\{-?|\{%-?\s*\w+)/, inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ } }, rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.*/ } }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, "boolean": /\b(?:true|false|null)\b/, number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/, operator: [{ pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: !0 }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], property: /\b[a-zA-Z_]\w*\b/, punctuation: /[()\[\]{}:.,]/ } }, other: { pattern: /\S(?:[\s\S]*\S)?/, inside: Prism.languages.markup } };
!function () {
  function e(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }function t(e, t) {
    return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1;
  }function n(e, n, i) {
    n = "string" == typeof n ? n : e.getAttribute("data-line");for (var o, l = n.replace(/\s+/g, "").split(","), a = +e.getAttribute("data-line-offset") || 0, s = r() ? parseInt : parseFloat, d = s(getComputedStyle(e).lineHeight), u = t(e, "line-numbers"), c = 0; o = l[c++];) {
      var p = o.split("-"),
          m = +p[0],
          f = +p[1] || m,
          h = e.querySelector('.line-highlight[data-range="' + o + '"]') || document.createElement("div");if (h.setAttribute("aria-hidden", "true"), h.setAttribute("data-range", o), h.className = (i || "") + " line-highlight", u && Prism.plugins.lineNumbers) {
        var g = Prism.plugins.lineNumbers.getLine(e, m),
            y = Prism.plugins.lineNumbers.getLine(e, f);g && (h.style.top = g.offsetTop + "px"), y && (h.style.height = y.offsetTop - g.offsetTop + y.offsetHeight + "px");
      } else h.setAttribute("data-start", m), f > m && h.setAttribute("data-end", f), h.style.top = (m - a - 1) * d + "px", h.textContent = new Array(f - m + 2).join(" \n");u ? e.appendChild(h) : (e.querySelector("code") || e).appendChild(h);
    }
  }function i() {
    var t = location.hash.slice(1);e(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });var i = (t.match(/\.([\d,-]+)$/) || [, ""])[1];if (i && !document.getElementById(t)) {
      var r = t.slice(0, t.lastIndexOf(".")),
          o = document.getElementById(r);o && (o.hasAttribute("data-line") || o.setAttribute("data-line", ""), n(o, i, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView());
    }
  }if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
    var r = function () {
      var e;return function () {
        if ("undefined" == typeof e) {
          var t = document.createElement("div");t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t);
        }return e;
      };
    }(),
        o = 0;Prism.hooks.add("before-sanity-check", function (t) {
      var n = t.element.parentNode,
          i = n && n.getAttribute("data-line");if (n && i && /pre/i.test(n.nodeName)) {
        var r = 0;e(".line-highlight", n).forEach(function (e) {
          r += e.textContent.length, e.parentNode.removeChild(e);
        }), r && /^( \n)+$/.test(t.code.slice(-r)) && (t.code = t.code.slice(0, -r));
      }
    }), Prism.hooks.add("complete", function l(e) {
      var r = e.element.parentNode,
          a = r && r.getAttribute("data-line");if (r && a && /pre/i.test(r.nodeName)) {
        clearTimeout(o);var s = Prism.plugins.lineNumbers,
            d = e.plugins && e.plugins.lineNumbers;t(r, "line-numbers") && s && !d ? Prism.hooks.add("line-numbers", l) : (n(r, a), o = setTimeout(i, 1));
      }
    }), window.addEventListener("hashchange", i), window.addEventListener("resize", function () {
      var e = document.querySelectorAll("pre[data-line]");Array.prototype.forEach.call(e, function (e) {
        n(e);
      });
    });
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var e = "line-numbers",
        t = /\n(?!$)/g,
        n = function n(e) {
      var n = r(e),
          s = n["white-space"];if ("pre-wrap" === s || "pre-line" === s) {
        var l = e.querySelector("code"),
            i = e.querySelector(".line-numbers-rows"),
            a = e.querySelector(".line-numbers-sizer"),
            o = l.textContent.split(t);a || (a = document.createElement("span"), a.className = "line-numbers-sizer", l.appendChild(a)), a.style.display = "block", o.forEach(function (e, t) {
          a.textContent = e || "\n";var n = a.getBoundingClientRect().height;i.children[t].style.height = n + "px";
        }), a.textContent = "", a.style.display = "none";
      }
    },
        r = function r(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    };window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n);
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var r = e.element.parentNode,
            s = /\s*\bline-numbers\b\s*/;if (r && /pre/i.test(r.nodeName) && (s.test(r.className) || s.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
          s.test(e.element.className) && (e.element.className = e.element.className.replace(s, " ")), s.test(r.className) || (r.className += " line-numbers");var l,
              i = e.code.match(t),
              a = i ? i.length + 1 : 1,
              o = new Array(a + 1);o = o.join("<span></span>"), l = document.createElement("span"), l.setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = o, r.hasAttribute("data-start") && (r.style.counterReset = "linenumber " + (parseInt(r.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), n(r), Prism.hooks.run("line-numbers", e);
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    }), Prism.plugins.lineNumbers = { getLine: function getLine(t, n) {
        if ("PRE" === t.tagName && t.classList.contains(e)) {
          var r = t.querySelector(".line-numbers-rows"),
              s = parseInt(t.getAttribute("data-start"), 10) || 1,
              l = s + (r.children.length - 1);s > n && (n = s), n > l && (n = l);var i = n - s;return r.children[i];
        }
      } };
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var t = [],
        e = {},
        n = function n() {};Prism.plugins.toolbar = {};var a = Prism.plugins.toolbar.registerButton = function (n, a) {
      var o;o = "function" == typeof a ? a : function (t) {
        var e;return "function" == typeof a.onClick ? (e = document.createElement("button"), e.type = "button", e.addEventListener("click", function () {
          a.onClick.call(this, t);
        })) : "string" == typeof a.url ? (e = document.createElement("a"), e.href = a.url) : e = document.createElement("span"), e.textContent = a.text, e;
      }, t.push(e[n] = o);
    },
        o = Prism.plugins.toolbar.hook = function (a) {
      var o = a.element.parentNode;if (o && /pre/i.test(o.nodeName) && !o.parentNode.classList.contains("code-toolbar")) {
        var r = document.createElement("div");r.classList.add("code-toolbar"), o.parentNode.insertBefore(r, o), r.appendChild(o);var i = document.createElement("div");i.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (t = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) {
          return e[t] || n;
        })), t.forEach(function (t) {
          var e = t(a);if (e) {
            var n = document.createElement("div");n.classList.add("toolbar-item"), n.appendChild(e), i.appendChild(n);
          }
        }), r.appendChild(i);
      }
    };a("label", function (t) {
      var e = t.element.parentNode;if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
        var n,
            a,
            o = e.getAttribute("data-label");try {
          a = document.querySelector("template#" + o);
        } catch (r) {}return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement("a"), n.href = e.getAttribute("data-url")) : n = document.createElement("span"), n.textContent = o), n;
      }
    }), Prism.hooks.add("complete", o);
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    if (!Prism.plugins.toolbar) return console.warn("Show Languages plugin loaded before Toolbar plugin."), void 0;var e = { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", css: "CSS", clike: "C-like", javascript: "JavaScript", abap: "ABAP", actionscript: "ActionScript", apacheconf: "Apache Configuration", apl: "APL", applescript: "AppleScript", arff: "ARFF", asciidoc: "AsciiDoc", asm6502: "6502 Assembly", aspnet: "ASP.NET (C#)", autohotkey: "AutoHotkey", autoit: "AutoIt", basic: "BASIC", csharp: "C#", cpp: "C++", coffeescript: "CoffeeScript", csp: "Content-Security-Policy", "css-extras": "CSS Extras", django: "Django/Jinja2", erb: "ERB", fsharp: "F#", gedcom: "GEDCOM", glsl: "GLSL", graphql: "GraphQL", http: "HTTP", hpkp: "HTTP Public-Key-Pins", hsts: "HTTP Strict-Transport-Security", ichigojam: "IchigoJam", inform7: "Inform 7", json: "JSON", latex: "LaTeX", livescript: "LiveScript", lolcode: "LOLCODE", "markup-templating": "Markup templating", matlab: "MATLAB", mel: "MEL", n4js: "N4JS", nasm: "NASM", nginx: "nginx", nsis: "NSIS", objectivec: "Objective-C", ocaml: "OCaml", opencl: "OpenCL", parigp: "PARI/GP", objectpascal: "Object Pascal", php: "PHP", "php-extras": "PHP Extras", plsql: "PL/SQL", powershell: "PowerShell", properties: ".properties", protobuf: "Protocol Buffers", q: "Q (kdb+ database)", jsx: "React JSX", tsx: "React TSX", renpy: "Ren'py", rest: "reST (reStructuredText)", sas: "SAS", sass: "Sass (Sass)", scss: "Sass (Scss)", sql: "SQL", soy: "Soy (Closure Template)", tap: "TAP", tt2: "Template Toolkit 2", typescript: "TypeScript", vbnet: "VB.Net", vhdl: "VHDL", vim: "vim", "visual-basic": "Visual Basic", wasm: "WebAssembly", wiki: "Wiki markup", xojo: "Xojo (REALbasic)", xquery: "XQuery", yaml: "YAML" };Prism.plugins.toolbar.registerButton("show-language", function (a) {
      var t = a.element.parentNode;if (t && /pre/i.test(t.nodeName)) {
        var s = t.getAttribute("data-language") || e[a.language] || a.language && a.language.substring(0, 1).toUpperCase() + a.language.substring(1);if (s) {
          var i = document.createElement("span");return i.textContent = s, i;
        }
      }
    });
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    if (!Prism.plugins.toolbar) return console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."), void 0;var o = window.ClipboardJS || void 0;o || "function" != "function" || (o = __webpack_require__(5));var e = [];if (!o) {
      var t = document.createElement("script"),
          n = document.querySelector("head");t.onload = function () {
        if (o = window.ClipboardJS) for (; e.length;) {
          e.pop()();
        }
      }, t.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", n.appendChild(t);
    }Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (t) {
      function n() {
        var e = new o(i, { text: function text() {
            return t.code;
          } });e.on("success", function () {
          i.textContent = "Copied!", r();
        }), e.on("error", function () {
          i.textContent = "Press Ctrl+C to copy", r();
        });
      }function r() {
        setTimeout(function () {
          i.textContent = "Copy";
        }, 5e3);
      }var i = document.createElement("a");return i.textContent = "Copy", o ? n() : e.push(n), i;
    });
  }
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var Sticky = __webpack_require__(4);

module.exports = Sticky;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sticky.js
 * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
 *
 * @version 1.2.0
 * @author Rafal Galus <biuro@rafalgalus.pl>
 * @website https://rgalus.github.io/sticky-js/
 * @repo https://github.com/rgalus/sticky-js
 * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
 */

var Sticky = function () {
  /**
   * Sticky instance constructor
   * @constructor
   * @param {string} selector - Selector which we can find elements
   * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
   */
  function Sticky() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sticky);

    this.selector = selector;
    this.elements = [];

    this.version = '1.2.0';

    this.vp = this.getViewportSize();
    this.body = document.querySelector('body');

    this.options = {
      wrap: options.wrap || false,
      marginTop: options.marginTop || 0,
      stickyFor: options.stickyFor || 0,
      stickyClass: options.stickyClass || null,
      stickyContainer: options.stickyContainer || 'body'
    };

    this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);

    this.updateScrollTopPosition();
    window.addEventListener('load', this.updateScrollTopPosition);
    window.addEventListener('scroll', this.updateScrollTopPosition);

    this.run();
  }

  /**
   * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
   * @function
   */


  Sticky.prototype.run = function run() {
    var _this = this;

    // wait for page to be fully loaded
    var pageLoaded = setInterval(function () {
      if (document.readyState === 'complete') {
        clearInterval(pageLoaded);

        var elements = document.querySelectorAll(_this.selector);
        _this.forEach(elements, function (element) {
          return _this.renderElement(element);
        });
      }
    }, 10);
  };

  /**
   * Function that assign needed variables for sticky element, that are used in future for calculations and other
   * @function
   * @param {node} element - Element to be rendered
   */


  Sticky.prototype.renderElement = function renderElement(element) {
    var _this2 = this;

    // create container for variables needed in future
    element.sticky = {};

    // set default variables
    element.sticky.active = false;

    element.sticky.marginTop = parseInt(element.getAttribute('data-margin-top')) || this.options.marginTop;
    element.sticky.stickyFor = parseInt(element.getAttribute('data-sticky-for')) || this.options.stickyFor;
    element.sticky.stickyClass = element.getAttribute('data-sticky-class') || this.options.stickyClass;
    element.sticky.wrap = element.hasAttribute('data-sticky-wrap') ? true : this.options.wrap;
    // @todo attribute for stickyContainer
    // element.sticky.stickyContainer = element.getAttribute('data-sticky-container') || this.options.stickyContainer;
    element.sticky.stickyContainer = this.options.stickyContainer;

    element.sticky.container = this.getStickyContainer(element);
    element.sticky.container.rect = this.getRectangle(element.sticky.container);

    element.sticky.rect = this.getRectangle(element);

    // fix when element is image that has not yet loaded and width, height = 0
    if (element.tagName.toLowerCase() === 'img') {
      element.onload = function () {
        return element.sticky.rect = _this2.getRectangle(element);
      };
    }

    if (element.sticky.wrap) {
      this.wrapElement(element);
    }

    // activate rendered element
    this.activate(element);
  };

  /**
   * Wraps element into placeholder element
   * @function
   * @param {node} element - Element to be wrapped
   */


  Sticky.prototype.wrapElement = function wrapElement(element) {
    element.insertAdjacentHTML('beforebegin', '<span></span>');
    element.previousSibling.appendChild(element);
  };

  /**
   * Function that activates element when specified conditions are met and then initalise events
   * @function
   * @param {node} element - Element to be activated
   */


  Sticky.prototype.activate = function activate(element) {
    if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
      element.sticky.active = true;
    }

    if (this.elements.indexOf(element) < 0) {
      this.elements.push(element);
    }

    if (!element.sticky.resizeEvent) {
      this.initResizeEvents(element);
      element.sticky.resizeEvent = true;
    }

    if (!element.sticky.scrollEvent) {
      this.initScrollEvents(element);
      element.sticky.scrollEvent = true;
    }

    this.setPosition(element);
  };

  /**
   * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
   * @function
   * @param {node} element - Element for which resize events are initialised
   */


  Sticky.prototype.initResizeEvents = function initResizeEvents(element) {
    var _this3 = this;

    element.sticky.resizeListener = function () {
      return _this3.onResizeEvents(element);
    };
    window.addEventListener('resize', element.sticky.resizeListener);
  };

  /**
   * Removes element listener from resize event
   * @function
   * @param {node} element - Element from which listener is deleted
   */


  Sticky.prototype.destroyResizeEvents = function destroyResizeEvents(element) {
    window.removeEventListener('resize', element.sticky.resizeListener);
  };

  /**
   * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
   * @function
   * @param {node} element - Element for which event function is fired
   */


  Sticky.prototype.onResizeEvents = function onResizeEvents(element) {
    this.vp = this.getViewportSize();

    element.sticky.rect = this.getRectangle(element);
    element.sticky.container.rect = this.getRectangle(element.sticky.container);

    if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
      element.sticky.active = true;
    } else if (element.sticky.rect.top + element.sticky.rect.height >= element.sticky.container.rect.top + element.sticky.container.rect.height || element.sticky.stickyFor >= this.vp.width && element.sticky.active) {
      element.sticky.active = false;
    }

    this.setPosition(element);
  };

  /**
   * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
   * @function
   * @param {node} element - Element for which scroll events are initialised
   */


  Sticky.prototype.initScrollEvents = function initScrollEvents(element) {
    var _this4 = this;

    element.sticky.scrollListener = function () {
      return _this4.onScrollEvents(element);
    };
    window.addEventListener('scroll', element.sticky.scrollListener);
  };

  /**
   * Removes element listener from scroll event
   * @function
   * @param {node} element - Element from which listener is deleted
   */


  Sticky.prototype.destroyScrollEvents = function destroyScrollEvents(element) {
    window.removeEventListener('scroll', element.sticky.scrollListener);
  };

  /**
   * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
   * @function
   * @param {node} element - Element for which event function is fired
   */


  Sticky.prototype.onScrollEvents = function onScrollEvents(element) {
    if (element.sticky.active) {
      this.setPosition(element);
    }
  };

  /**
   * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
   * @function
   * @param {node} element - Element that will be positioned if it's active
   */


  Sticky.prototype.setPosition = function setPosition(element) {
    this.css(element, { position: '', width: '', top: '', left: '' });

    if (this.vp.height < element.sticky.rect.height || !element.sticky.active) {
      return;
    }

    if (!element.sticky.rect.width) {
      element.sticky.rect = this.getRectangle(element);
    }

    if (element.sticky.wrap) {
      this.css(element.parentNode, {
        display: 'block',
        width: element.sticky.rect.width + 'px',
        height: element.sticky.rect.height + 'px'
      });
    }

    if (element.sticky.rect.top === 0 && element.sticky.container === this.body) {
      this.css(element, {
        position: 'fixed',
        top: element.sticky.rect.top + 'px',
        left: element.sticky.rect.left + 'px',
        width: element.sticky.rect.width + 'px'
      });
    } else if (this.scrollTop > element.sticky.rect.top - element.sticky.marginTop) {
      this.css(element, {
        position: 'fixed',
        width: element.sticky.rect.width + 'px',
        left: element.sticky.rect.left + 'px'
      });

      if (this.scrollTop + element.sticky.rect.height + element.sticky.marginTop > element.sticky.container.rect.top + element.sticky.container.offsetHeight) {

        if (element.sticky.stickyClass) {
          element.classList.remove(element.sticky.stickyClass);
        }

        this.css(element, {
          top: element.sticky.container.rect.top + element.sticky.container.offsetHeight - (this.scrollTop + element.sticky.rect.height) + 'px' });
      } else {
        if (element.sticky.stickyClass) {
          element.classList.add(element.sticky.stickyClass);
        }

        this.css(element, { top: element.sticky.marginTop + 'px' });
      }
    } else {
      if (element.sticky.stickyClass) {
        element.classList.remove(element.sticky.stickyClass);
      }

      this.css(element, { position: '', width: '', top: '', left: '' });

      if (element.sticky.wrap) {
        this.css(element.parentNode, { display: '', width: '', height: '' });
      }
    }
  };

  /**
   * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
   * @function
   */


  Sticky.prototype.update = function update() {
    var _this5 = this;

    this.forEach(this.elements, function (element) {
      element.sticky.rect = _this5.getRectangle(element);
      element.sticky.container.rect = _this5.getRectangle(element.sticky.container);

      _this5.activate(element);
      _this5.setPosition(element);
    });
  };

  /**
   * Destroys sticky element, remove listeners
   * @function
   */


  Sticky.prototype.destroy = function destroy() {
    var _this6 = this;

    this.forEach(this.elements, function (element) {
      _this6.destroyResizeEvents(element);
      _this6.destroyScrollEvents(element);
      delete element.sticky;
    });
  };

  /**
   * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
   * @function
   * @param {node} element - Element which sticky container are looked for
   * @return {node} element - Sticky container
   */


  Sticky.prototype.getStickyContainer = function getStickyContainer(element) {
    var container = element.parentNode;

    while (!container.hasAttribute('data-sticky-container') && !container.parentNode.querySelector(element.sticky.stickyContainer) && container !== this.body) {
      container = container.parentNode;
    }

    return container;
  };

  /**
   * Function that returns element rectangle & position (width, height, top, left)
   * @function
   * @param {node} element - Element which position & rectangle are returned
   * @return {object}
   */


  Sticky.prototype.getRectangle = function getRectangle(element) {
    this.css(element, { position: '', width: '', top: '', left: '' });

    var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
    var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);

    var top = 0;
    var left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return { top: top, left: left, width: width, height: height };
  };

  /**
   * Function that returns viewport dimensions
   * @function
   * @return {object}
   */


  Sticky.prototype.getViewportSize = function getViewportSize() {
    return {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
  };

  /**
   * Function that updates window scroll position
   * @function
   * @return {number}
   */


  Sticky.prototype.updateScrollTopPosition = function updateScrollTopPosition() {
    this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
  };

  /**
   * Helper function for loops
   * @helper
   * @param {array}
   * @param {function} callback - Callback function (no need for explanation)
   */


  Sticky.prototype.forEach = function forEach(array, callback) {
    for (var i = 0, len = array.length; i < len; i++) {
      callback(array[i]);
    }
  };

  /**
   * Helper function to add/remove css properties for specified element.
   * @helper
   * @param {node} element - DOM element
   * @param {object} properties - CSS properties that will be added/removed from specified element
   */


  Sticky.prototype.css = function css(element, properties) {
    for (var property in properties) {
      if (properties.hasOwnProperty(property)) {
        element.style[property] = properties[property];
      }
    }
  };

  return Sticky;
}();

/**
 * Export function that supports AMD, CommonJS and Plain Browser.
 */


(function (root, factory) {
  if (true) {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.Sticky = factory;
  }
})(this, Sticky);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(6);
var delegate = __webpack_require__(5);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(4);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ })
/******/ ]);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);