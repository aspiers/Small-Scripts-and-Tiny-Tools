define("github/features", ["exports", "./metadata"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.isFeatureEnabled = function(e) { return n || (n = (0, t.getMetadataByName)(document, "enabled-features").split(",")), -1 !== n.indexOf(e) }; var n = void 0 }), define.register("accessibilityjs"),
    function(e, t) { if ("function" == typeof define && define.amd) define(["exports"], t);
        else if ("undefined" != typeof exports) t(exports);
        else { var n = { exports: {} };
            t(n.exports), e.accessibilityjs = n.exports } }(this, function(e) { "use strict";

        function t(e) { e.prototype = new Error, e.prototype.constructor = e }

        function n(e) { this.name = "ImageWithoutAltAttributeError", this.stack = (new Error).stack, this.element = e, this.message = "Missing alt attribute on " + f(e) }

        function r(e) { this.name = "ElementWithoutLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing text, title, or aria-label attribute on " + f(e) }

        function a(e) { this.name = "LinkWithoutLabelOrRoleError", this.stack = (new Error).stack, this.element = e, this.message = "Missing href or role=button on " + f(e) }

        function o(e) { this.name = "LabelMissingControlError", this.stack = (new Error).stack, this.element = e, this.message = "Label missing control on " + f(e) }

        function s(e) { this.name = "InputMissingLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing label for or aria-label attribute on " + f(e) }

        function i(e) { this.name = "ButtonWithoutLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing text or aria-label attribute on " + f(e) }

        function u(e, t) { this.name = "ARIAAttributeMissingError", this.stack = (new Error).stack, this.element = e, this.message = "Missing " + t + " attribute on " + f(e) }

        function l(e) { return null != e.closest('[aria-hidden="true"], [hidden], [style*="display: none"]') }

        function c(e) { return "string" == typeof e && !!e.trim() }

        function d(e) { switch (e.nodeType) {
                case Node.ELEMENT_NODE:
                    if (c(e.getAttribute("alt")) || c(e.getAttribute("aria-label")) || c(e.getAttribute("title"))) return !0; for (var t = 0; t < e.childNodes.length; t++)
                        if (d(e.childNodes[t])) return !0; break;
                case Node.TEXT_NODE:
                    return c(e.data) } }

        function f(e) { var t = e.outerHTML;
            e.innerHTML && (t = t.replace(e.innerHTML, "...")); for (var n = []; e && "BODY" !== e.nodeName && (n.push(function(e) { var t = [e.nodeName.toLowerCase()];
                    e.id && t.push("#" + e.id); if (e.classList) { var n = !0,
                            r = !1,
                            a = void 0; try { for (var o, s = e.classList[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value;
                                i.match(/^js-/) && t.push("." + i) } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } } return t.join("") }(e)), !e.id);) e = e.parentNode; return '"' + n.reverse().join(" > ") + '". \n\n' + t } Object.defineProperty(e, "__esModule", { value: !0 }), e.scanForProblems = function(e, t, c) { var f = !0,
                m = !1,
                v = void 0; try { for (var g, p = e.querySelectorAll("img")[Symbol.iterator](); !(f = (g = p.next()).done); f = !0) { var h = g.value;
                    h.hasAttribute("alt") || t(new n(h)) } } catch (e) { m = !0, v = e } finally { try {!f && p.return && p.return() } finally { if (m) throw v } } var y = !0,
                b = !1,
                j = void 0; try { for (var L, w = e.querySelectorAll("a")[Symbol.iterator](); !(y = (L = w.next()).done); y = !0) { var x = L.value;
                    x.hasAttribute("name") || l(x) || (null == x.getAttribute("href") && "button" !== x.getAttribute("role") ? t(new a(x)) : d(x) || t(new r(x))) } } catch (e) { b = !0, j = e } finally { try {!y && w.return && w.return() } finally { if (b) throw j } } var k = !0,
                E = !1,
                q = void 0; try { for (var S, T = e.querySelectorAll("button")[Symbol.iterator](); !(k = (S = T.next()).done); k = !0) { var _ = S.value;
                    l(_) || d(_) || t(new i(_)) } } catch (e) { E = !0, q = e } finally { try {!k && T.return && T.return() } finally { if (E) throw q } } var M = !0,
                A = !1,
                H = void 0; try { for (var C, I = e.querySelectorAll("label")[Symbol.iterator](); !(M = (C = I.next()).done); M = !0) { var R = C.value;
                    R.control || document.getElementById(R.getAttribute("for")) || R.querySelector("input") || l(R) || t(new o(R)) } } catch (e) { A = !0, H = e } finally { try {!M && I.return && I.return() } finally { if (A) throw H } } var F = !0,
                P = !1,
                O = void 0; try { for (var D, N = e.querySelectorAll("input[type=text], input[type=url], input[type=search], input[type=number], textarea")[Symbol.iterator](); !(F = (D = N.next()).done); F = !0) { var B = D.value;
                    (B.labels ? B.labels[0] : B.closest("label") || document.querySelector('label[for="' + B.id + '"]')) || l(B) || B.hasAttribute("aria-label") || t(new s(B)) } } catch (e) { P = !0, O = e } finally { try {!F && N.return && N.return() } finally { if (P) throw O } } if (c && c.ariaPairs)
                for (var z in c.ariaPairs) { var U = c.ariaPairs[z],
                        V = !0,
                        W = !1,
                        $ = void 0; try { for (var K, J = e.querySelectorAll(z)[Symbol.iterator](); !(V = (K = J.next()).done); V = !0) { var G = K.value,
                                Y = [],
                                X = !0,
                                Q = !1,
                                Z = void 0; try { for (var ee, te = U[Symbol.iterator](); !(X = (ee = te.next()).done); X = !0) { var ne = ee.value;
                                    G.hasAttribute(ne) || Y.push(ne) } } catch (e) { Q = !0, Z = e } finally { try {!X && te.return && te.return() } finally { if (Q) throw Z } } Y.length > 0 && t(new u(G, Y.join(", "))) } } catch (e) { W = !0, $ = e } finally { try {!V && J.return && J.return() } finally { if (W) throw $ } } } }, t(n), t(r), t(a), t(o), t(s), t(i), t(u) }), define.registerEnd(), define("github/accessibility-report", ["invariant", "./features", "./document-ready", "./failbot", "accessibilityjs"], function(e, t, n, r, a) {
        function o(e) { if (! function(e) { var t = document.body; return (0, s.default)(t, "github/accessibility-report.js:11"), t.classList.contains("zhio") || e.element.classList.contains("zh-login-status") || e.element.closest("#window-resizer-tooltip") || e.element.closest(".octotree_sidebar") || e.element.closest(".markdown-body") }(e)) { i && console.warn(e.name + ": " + e.message); var n = "Accessibility: " + e.name + "\n" + e.message;
                ((0, t.isFeatureEnabled)("ACCESSIBILITY_UI_WARNING") || window.testEnvA11yErrors) && (e.element.classList.add("accessibility-error"), window.testEnvA11yErrors || e.element.addEventListener("click", function() { alert(n + "\n\nFor more information see https://styleguide.github.com/primer/principles/accessibility\nSlack #accessibility if you need help resolving this") })), window.testEnvA11yErrors && window.testEnvA11yErrors.push(n), (0, t.isFeatureEnabled)("LOG_ACCESSIBILITY") && (0, r.reportError)(e, { bucket: "github-accessibility" }) } } var s = function(e) { return e && e.__esModule ? e : { default: e } }(e),
            i = !1,
            u = { ariaPairs: { ".js-menu-target": ["aria-expanded", "aria-haspopup"], ".js-details-target": ["aria-expanded"] } };
        n.ready.then(function() {
            ((i = null != document.querySelector(".js-header-wrapper.stats-ui-enabled")) || window.testEnvA11yErrors || (0, t.isFeatureEnabled)("ACCESSIBILITY_UI_WARNING") || (0, t.isFeatureEnabled)("LOG_ACCESSIBILITY")) && (requestIdleCallback(function() { return (0, a.scanForProblems)(document, o, u) }), document.addEventListener("pjax:end", function(e) { requestIdleCallback(function() { return (0, a.scanForProblems)(e.target, o, u) }) }), document.addEventListener("facebox:reveal", function() { var e = document.querySelector(".facebox");
                requestIdleCallback(function() { return (0, a.scanForProblems)(e, o, u) }) })) }) }), define("github/advanced-search", ["./query-selector", "./onfocus", "invariant", "selector-observer", "delegated-events"], function(e, t, n, r, a) {
        function o(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

        function s() { var t = (0, e.querySelectorAll)(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
                n = (0, e.querySelectorAll)(document, "select.js-advanced-search-prefix", HTMLSelectElement),
                r = (0, e.querySelectorAll)(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
                a = [].concat(o(u(t)), o(u(n)), o(u(r))),
                s = a.reduce(function(e, t) { return t.value && t.type && e[t.type]++, e }, { Repositories: 0, Users: 0, Code: 0, Issues: 0 }),
                i = a.reduce(function(e, t) { return (e + " " + function(e) { var t = e.prefix,
                            n = e.value; return "" === t ? "" : n ? "" + t + n : "" }(t)).trim() }, ""),
                l = (0, e.query)(document, ".js-advanced-search-input", HTMLInputElement).value;
            (0, e.query)(document, ".js-type-value", HTMLInputElement).value = function(e) { var t = 0,
                    n = "Repositories"; for (var r in e) e[r] > t && (t = e[r], n = r); return n }(s), (0, e.query)(document, ".js-search-query", HTMLInputElement).value = (l + " " + i).trim(); var c = (0, e.query)(document, ".js-advanced-query");
            c.innerHTML = "", c.textContent = i; var d = document.createElement("span");
            d.textContent = l.trim(), c.prepend(d, " ") }

        function i(e) { return -1 !== e.search(/\s/g) ? '"' + e + '"' : e }

        function u(e) { return e.map(function(e) { var t = e.value.trim(),
                    n = e.getAttribute("data-search-prefix");
                (0, l.default)(null != n, "github/advanced-search.js:82"); var r = e.getAttribute("data-search-type"); return "" === n ? { prefix: n, value: t, type: r } : -1 !== t.search(/,/g) && "location" !== n ? t.split(/,/).map(function(e) { return { prefix: n, value: i(e.trim()), type: r } }) : { prefix: n, value: i(t), type: r } }).reduce(function(e, t) { return e.concat(t) }, []) } var l = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, t.onInput)(".js-advanced-search-prefix", function() { s() }), (0, a.on)("change", ".js-advanced-search-prefix", s), (0, t.onFocus)(".js-advanced-search-input", function(t) { var n = (0, e.closest)(t, ".js-advanced-search-label");
            n.classList.add("focus"), t.addEventListener("blur", function() { return n.classList.remove("focus") }, { once: !0 }) }), (0, a.on)("click", ".js-see-all-search-cheatsheet", function(e) { e.preventDefault(); var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = document.querySelectorAll(".js-more-cheatsheet-info")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { a.value.classList.remove("d-none") } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }), (0, r.observe)(".js-advanced-search-input", function() { s() }) }), define("github/apps", ["./typecast", "./query-selector", "./debounce", "./onfocus", "./remote-form", "./form"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) { var n = e.querySelector(".js-app-logo-with-bgcolor");
            n && (n.style.backgroundColor = "#" + t) } var u = s(e),
            l = s(n);
        (0, a.remoteForm)(".js-app-bgcolor-form", function(e, t) { var n, r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        if (n = e.querySelector(".js-app-bgcolor-save-notice")) { a.next = 3; break } return a.abrupt("return");
                    case 3:
                        return r = void 0, a.prev = 4, a.next = 7, regeneratorRuntime.awrap(t.html());
                    case 7:
                        r = a.sent, a.next = 13; break;
                    case 10:
                        a.prev = 10, a.t0 = a.catch(4), n.classList.remove("visible");
                    case 13:
                        r && (n.classList.add("visible"), setTimeout(function() { return n.classList.remove("visible") }, 1500));
                    case 14:
                    case "end":
                        return a.stop() } }, null, this, [
                [4, 10]
            ]) }), (0, r.onInput)(".js-app-bgcolor-input", function(e) { var n = (0, u.default)(e.target, HTMLInputElement),
                r = (0, t.closest)(n, "form", HTMLFormElement),
                a = n.value.replace(/^#/, ""); if (a.length < 1) return n.classList.remove("text-red"), void i(r, n.defaultValue);
            n.checkValidity() ? (n.classList.remove("text-red"), i(r, a), r.classList.contains("js-app-bgcolor-form") && (0, l.default)(function() { return function(e, t) { t.checkValidity() && (0, o.submit)(e) }(r, n) }, 400)()) : (n.classList.add("text-red"), i(r, n.defaultValue)) }) }), define("github/find-next-element-sibling", ["exports", "./typecast"], function(e, t) {
        function n(e, t) { if (e.nextElementSibling) { var a = (0, r.default)(e.nextElementSibling, HTMLElement); return a.classList.contains(t) ? a : n(a, t) } } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n; var r = function(e) { return e && e.__esModule ? e : { default: e } }(t) }), define("github/banner", ["./query-selector", "./typecast", "./find-next-element-sibling", "selector-observer", "delegated-events"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } } var s = o(t),
            i = o(n);
        (0, a.on)("click", ".js-banner .js-next", function(t) { var n = (0, e.closest)(t.currentTarget, ".js-banner"),
                r = (0, e.query)(n, ".js-dismiss", HTMLButtonElement),
                a = (0, e.query)(n, ".js-next", HTMLButtonElement),
                o = (0, e.query)(n, ".js-page.d-block"),
                u = (0, s.default)((0, i.default)(o, "js-page"), HTMLElement);
            o.classList.remove("d-block"), o.classList.add("d-none"), u.classList.remove("d-none"), u.classList.add("d-block"), (0, i.default)(u, "js-page") || (a.classList.add("d-none"), r.classList.remove("d-none")) }), (0, r.observe)(".js-banner", function(t) { var n = (0, s.default)(t, HTMLDivElement),
                r = (0, e.query)(n, ".js-dismiss", HTMLButtonElement); if (n.querySelectorAll(".js-page").length > 0) { var a = (0, e.query)(n, ".js-next", HTMLButtonElement),
                    o = (0, e.query)(n, ".js-page.d-block", HTMLDivElement);
                o && !(0, i.default)(o, "js-page") ? r.classList.remove("d-none") : a.classList.remove("d-none") } else r.classList.remove("d-none") }) }), define("github/behaviors/ajax-pagination", ["../query-selector", "delegated-events", "../remote-form"], function(e, t, n) {
        (0, n.remoteForm)("form.js-ajax-pagination, .js-ajax-pagination form", function(n, r) { var a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return a = (0, e.closest)(n, ".js-ajax-pagination"), o = void 0, s.prev = 2, s.next = 5, regeneratorRuntime.awrap(r.html());
                    case 5:
                        o = s.sent, s.next = 16; break;
                    case 8:
                        if (s.prev = 8, s.t0 = s.catch(2), !s.t0.response || 404 !== s.t0.response.status) { s.next = 15; break } return a.remove(), s.abrupt("return");
                    case 15:
                        throw s.t0;
                    case 16:
                        a.replaceWith(o.html), (0, t.fire)(n, "page:loaded");
                    case 18:
                    case "end":
                        return s.stop() } }, null, this, [
                [2, 8]
            ]) }) }), define("github/behaviors/autosearch-form", ["../form", "../throttled-input", "../sliding-promise-queue", "../fetch", "invariant", "../onfocus", "../history"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(t) { var n, a, o, i, u, l; return regeneratorRuntime.async(function(f) { for (;;) switch (f.prev = f.next) {
                    case 0:
                        return n = t.form, (0, c.default)(n, "github/behaviors/autosearch-form.js:34"), n.classList.add("is-sending"), f.prev = 3, a = (0, e.serialize)(n), o = (n.action + "&" + a).replace(/[?&]/, "?"), f.next = 8, regeneratorRuntime.awrap(d.push((0, r.fetchText)(o)));
                    case 8:
                        i = f.sent, u = n.getAttribute("data-results-container"), (l = u ? document.getElementById(u) : null) && (l.innerHTML = i), (0, s.replaceState)(null, "", "?" + a);
                    case 13:
                        return f.prev = 13, n.classList.remove("is-sending"), f.finish(13);
                    case 16:
                    case "end":
                        return f.stop() } }, null, this, [
                [3, , 13, 16]
            ]) } var l = i(n),
            c = i(a),
            d = new l.default;
        (0, o.onFocus)(".js-autosearch-field", function(e) { var n = e;
            (0, c.default)(n instanceof HTMLInputElement, "github/behaviors/autosearch-form.js:54"), (0, t.addThrottledInputEventListener)(n, u), n.addEventListener("blur", function() { return (0, t.removeThrottledInputEventListener)(n, u) }, { once: !0 }) }) }), define("github/behaviors/autosubmit", ["../typecast", "delegated-events", "../form"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("change", "form[data-autosubmit]", function(e) { var t = (0, r.default)(e.currentTarget, HTMLFormElement);
            (0, n.submit)(t) }) }), define("github/stats", ["exports", "./proxy-site-detection", "./metadata", "./send-beacon", "./document-ready"], function(e, t, n, r, a) {
        function o() { if (u = null, !(0, s.default)(document)) { var e = (0, n.getMetadataByName)(document, "browser-stats-url");
                e && ((0, r.guaranteedPost)(e, JSON.stringify({ stats: i }), "application/json"), i = []) } } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e) { i.push(e),
                function() { regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, regeneratorRuntime.awrap(a.loaded);
                            case 2:
                                null == u && (u = requestIdleCallback(o));
                            case 3:
                            case "end":
                                return e.stop() } }, null, this) }() }; var s = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            i = [],
            u = null }), define("github/behaviors/browser-features-stats", ["../feature-detection", "../stats"], function(e, t) {
        function n(e) { return e && e.__esModule ? e : { default: e } } var r = n(e);
        (0, n(t).default)({ features: r.default }) }), define("github/behaviors/buttons", ["selector-observer"], function(e) {
        function t(e) { e.preventDefault(), e.stopPropagation() }(0, e.observe)("a.btn.disabled", { add: function(e) { e.addEventListener("click", t) }, remove: function(e) { e.removeEventListener("click", t) } }) }), define("github/behaviors/check-all", ["../query-selector", "invariant", "delegated-events"], function(e, t, n) {
        function r(e) { var t = e.closest(".js-check-all-container") || document.body; return (0, o.default)(t, "github/behaviors/check-all.js:33"), t }

        function a(e, t, n, r) { null == r && (r = !1), t.indeterminate = r, t.checked !== n && (t.checked = n, setTimeout(function() { var n = new CustomEvent("change", { bubbles: !0, cancelable: !1, detail: { relatedTarget: e } });
                t.dispatchEvent(n) })) } var o = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            s = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }();
        (0, n.on)("change", ".js-check-all", function(t) {
            (0, o.default)(t instanceof Event, "github/behaviors/check-all.js:57"); var n = t.currentTarget,
                s = t.detail && t.detail.relatedTarget; if (!s || !s.classList.contains("js-check-all-item")) { var i = r(n),
                    u = !0,
                    l = !1,
                    c = void 0; try { for (var d, f = (0, e.querySelectorAll)(i, ".js-check-all-item", HTMLInputElement)[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) { var m = d.value;
                        m.classList.remove("is-last-changed"), a(n, m, n.checked) } } catch (e) { l = !0, c = e } finally { try {!u && f.return && f.return() } finally { if (l) throw c } } } }); var i = null;
        (0, n.on)("mousedown", ".js-check-all-item", function(e) {
            (0, o.default)(e instanceof MouseEvent, "github/behaviors/check-all.js:74"), i = e.shiftKey }), (0, n.on)("change", ".js-check-all-item", function(t) {
            (0, o.default)(t instanceof Event, "github/behaviors/check-all.js:79"); var n = t.target,
                u = t.detail && t.detail.relatedTarget; if (!u || !u.classList.contains("js-check-all") && !u.classList.contains("js-check-all-item")) { var l = r(n),
                    c = (0, e.query)(l, ".js-check-all", HTMLInputElement),
                    d = Array.from((0, e.querySelectorAll)(l, ".js-check-all-item", HTMLInputElement)),
                    f = d.filter(function(e) { return e.classList.contains("is-last-changed") })[0]; if (i && f) { var m = [d.indexOf(f), d.indexOf(n)].sort(),
                        v = s(m, 2),
                        g = v[0],
                        p = v[1],
                        h = !0,
                        y = !1,
                        b = void 0; try { for (var j, L = d.slice(g, +p + 1 || 9e9)[Symbol.iterator](); !(h = (j = L.next()).done); h = !0) { a(n, j.value, n.checked) } } catch (e) { y = !0, b = e } finally { try {!h && L.return && L.return() } finally { if (y) throw b } } } i = null; var w = !0,
                    x = !1,
                    k = void 0; try { for (var E, q = d[Symbol.iterator](); !(w = (E = q.next()).done); w = !0) { E.value.classList.remove("is-last-changed") } } catch (e) { x = !0, k = e } finally { try {!w && q.return && q.return() } finally { if (x) throw k } } n.classList.add("is-last-changed"); var S = d.length,
                    T = d.filter(function(e) { return e.checked }).length;
                a(n, c, T === S, S > T && T > 0) } }), (0, n.on)("change", ".js-check-all-item", function(e) { var t = r(e.currentTarget),
                n = t.querySelector(".js-check-all-count"); if (n) { var a = t.querySelectorAll(".js-check-all-item:checked").length;
                n.textContent = a.toString() } }) }), define("github/behaviors/commenting/edit", ["../../query-selector", "delegated-events", "../../has-interactions", "invariant", "../../remote-form"], function(e, t, n, r, a) { var o = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        (0, t.on)("click", ".js-comment-edit-button", function(n) { var r = (0, e.closest)(n.currentTarget, ".js-comment");
            r.classList.add("is-comment-editing"), (0, e.query)(r, ".js-write-tab").click(); var a = (0, e.query)(r, ".js-comment-field");
            (0, o.default)(a instanceof HTMLTextAreaElement, "github/behaviors/commenting/edit.js:17"), a.focus(), (0, t.fire)(a, "change"); var s = n.currentTarget.closest(".js-dropdown-details");
            s && s.removeAttribute("open") }), (0, t.on)("click", ".js-comment-cancel-button", function(t) { var r = (0, e.closest)(t.currentTarget, "form", HTMLFormElement),
                a = t.currentTarget.getAttribute("data-confirm-text") || ""; if ((0, n.hasDirtyFields)(r) && !confirm(a)) return !1; var s = !0,
                i = !1,
                u = void 0; try { for (var l, c = r.querySelectorAll("input, textarea")[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { var d = l.value;
                    (0, o.default)(d instanceof HTMLInputElement || d instanceof HTMLTextAreaElement, "github/behaviors/commenting/edit.js:36"), d.value = d.defaultValue } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } var f = t.currentTarget.closest(".js-comment");
            f && f.classList.remove("is-comment-editing") }), (0, a.remoteForm)(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update", function(t, n, r) { var a = (0, e.closest)(t, ".js-comment");
            a.classList.add("is-comment-loading"); var o = a.getAttribute("data-body-version");
            o && r.headers.set("X-Body-Version", o) }), (0, a.remoteForm)(".js-comment .js-comment-update", function(t, n) { var r, a, s, i, u, l, c, d, f, m, v, g, p, h; return regeneratorRuntime.async(function(y) { for (;;) switch (y.prev = y.next) {
                    case 0:
                        return r = void 0, a = (0, e.closest)(t, ".js-comment"), y.prev = 2, y.next = 5, regeneratorRuntime.awrap(n.json());
                    case 5:
                        r = y.sent, y.next = 19; break;
                    case 8:
                        if (y.prev = 8, y.t0 = y.catch(2), 422 !== y.t0.response.status) { y.next = 18; break } if (!(s = JSON.parse(y.t0.response.text)).errors) { y.next = 16; break } return (i = a.querySelector(".js-comment-update-error")) && (i.textContent = "There was an error posting your comment: " + s.errors.join(", "), i.style.display = "block"), y.abrupt("return");
                    case 16:
                        y.next = 19; break;
                    case 18:
                        throw y.t0;
                    case 19:
                        if (r) { y.next = 21; break } return y.abrupt("return");
                    case 21:
                        for (u = r.json, (l = a.querySelector(".js-comment-body")) && (l.innerHTML = u.body), (c = a.querySelector(".js-comment-update-error")) && (c.style.display = "none"), a.setAttribute("data-body-version", u.newBodyVersion), (d = a.querySelector(".js-body-version")) instanceof HTMLInputElement && (d.value = u.newBodyVersion), f = !0, m = !1, v = void 0, y.prev = 32, g = a.querySelectorAll("input, textarea")[Symbol.iterator](); !(f = (p = g.next()).done); f = !0) h = p.value, (0, o.default)(h instanceof HTMLInputElement || h instanceof HTMLTextAreaElement, "github/behaviors/commenting/edit.js:97"), h.defaultValue = h.value;
                        y.next = 40; break;
                    case 36:
                        y.prev = 36, y.t1 = y.catch(32), m = !0, v = y.t1;
                    case 40:
                        y.prev = 40, y.prev = 41, !f && g.return && g.return();
                    case 43:
                        if (y.prev = 43, !m) { y.next = 46; break } throw v;
                    case 46:
                        return y.finish(43);
                    case 47:
                        return y.finish(40);
                    case 48:
                        a.classList.remove("is-comment-stale", "is-comment-editing");
                    case 49:
                    case "end":
                        return y.stop() } }, null, this, [
                [2, 8],
                [32, 36, 40, 48],
                [41, , 43, 47]
            ]) }), (0, a.remoteForm)(".js-comment .js-comment-delete, .js-comment .js-comment-update", function(t, n) { var r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return r = (0, e.closest)(t, ".js-comment"), o.prev = 1, o.next = 4, regeneratorRuntime.awrap(n.text());
                    case 4:
                        o.next = 15; break;
                    case 6:
                        if (o.prev = 6, o.t0 = o.catch(1), 422 !== o.t0.response.status) { o.next = 14; break } a = void 0; try { a = JSON.parse(o.t0.response.text) } catch (e) {} a && a.stale && r.classList.add("is-comment-stale"), o.next = 15; break;
                    case 14:
                        throw o.t0;
                    case 15:
                        r.classList.remove("is-comment-loading");
                    case 16:
                    case "end":
                        return o.stop() } }, null, this, [
                [1, 6]
            ]) }), (0, a.remoteForm)(".js-comment-delete", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.json());
                    case 2:
                        (r = t.closest(".js-comment-delete-container")) || (r = t.closest(".js-comment-container") || t.closest(".js-line-comments")) && 1 !== r.querySelectorAll(".js-comment").length && (r = (0, e.closest)(t, ".js-comment")), (0, o.default)(r, "github/behaviors/commenting/edit.js:140"), r.remove();
                    case 6:
                    case "end":
                        return a.stop() } }, null, this) }), (0, a.remoteForm)(".js-issue-update", function(t, n) { var r, a, o, s, i, u, l, c, d, f, m; return regeneratorRuntime.async(function(v) { for (;;) switch (v.prev = v.next) {
                    case 0:
                        return (r = (0, e.closest)(t, ".js-details-container")).classList.remove("open"), v.next = 4, regeneratorRuntime.awrap(n.json());
                    case 4:
                        for (a = v.sent, null != (o = a.json).issue_title && ((0, e.query)(r, ".js-issue-title").textContent = o.issue_title, (s = r.closest(".js-issues-results")) && (i = s.querySelector(".js-merge-pull-request textarea")) instanceof HTMLTextAreaElement && i.value === i.defaultValue && (i.value = i.defaultValue = o.issue_title)), document.title = o.page_title, u = !0, l = !1, c = void 0, v.prev = 11, d = t.elements[Symbol.iterator](); !(u = (f = d.next()).done); u = !0)((m = f.value) instanceof HTMLInputElement || m instanceof HTMLTextAreaElement) && (m.defaultValue = m.value);
                        v.next = 19; break;
                    case 15:
                        v.prev = 15, v.t0 = v.catch(11), l = !0, c = v.t0;
                    case 19:
                        v.prev = 19, v.prev = 20, !u && d.return && d.return();
                    case 22:
                        if (v.prev = 22, !l) { v.next = 25; break } throw c;
                    case 25:
                        return v.finish(22);
                    case 26:
                        return v.finish(19);
                    case 27:
                    case "end":
                        return v.stop() } }, null, this, [
                [11, 15, 19, 27],
                [20, , 22, 26]
            ]) }) }), define("github/behaviors/commenting/focus", ["../../onfocus"], function(e) {
        function t(e, t) { var n = e.closest(".js-write-bucket");
            n && n.classList.toggle("focused", t) }

        function n(e) { var n = e.currentTarget;
            n instanceof Element && t(n, !1) }(0, e.onFocus)(".js-comment-field", function(e) { t(e, !0), e.addEventListener("blur", n, { once: !0 }) }) }), define("github/behaviors/dirty-menus", ["delegated-events"], function(e) {
        (0, e.on)("menu:activate", ".js-select-menu", function(e) { e.currentTarget.classList.add("is-dirty") }), (0, e.on)("menu:deactivate", ".js-select-menu", function(e) { e.currentTarget.classList.remove("is-dirty") }) }), define("github/behaviors/event-key-polyfill", [], function() {
        function e(e, t) { return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e } var t = { OS: "Meta", Win: "Meta", Windows: "Meta", Scroll: "ScrollLock", SpaceBar: " ", Left: "ArrowLeft", Right: "ArrowRight", Down: "ArrowDown", Up: "ArrowUp", Del: "Delete", Esc: "Escape" },
            n = { 3: "Cancel", 6: "Help", 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 28: "Convert", 29: "NonConvert", 30: "Accept", 31: "ModeChange", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 41: "Select", 42: "Print", 43: "Execute", 44: "PrintScreen", 45: "Insert", 46: "Delete", 91: "OS", 93: "ContextMenu", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 181: "VolumeMute", 182: "VolumeDown", 183: "VolumeUp", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Meta", 225: "AltGraph", 246: "Attn", 247: "CrSel", 248: "ExSel", 249: "EraseEof", 250: "Play", 251: "ZoomOut" },
            r = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' },
            a = null,
            o = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key"); if (o)
            if (a = function(e) { return o.get.apply(e) }, /Macintosh.*Chrome/.test(navigator.userAgent)) { var s = /^Key[A-Z]$/;
                a = function(t) { var n = o.get.apply(t); if (t.metaKey && s.test(t.code) && t.code !== "Key" + n.toUpperCase()) { var r = String.fromCharCode(t.which); return t.shiftKey ? r.toUpperCase() : r.toLowerCase() } return e(n, t.shiftKey) } } else /Macintosh.*Safari/.test(navigator.userAgent) && (a = function(t) { return e(o.get.apply(t), t.shiftKey) });
        Object.defineProperty(KeyboardEvent.prototype, "key", { enumerable: !0, configurable: !0, get: function() { return a ? function(e) { return t[e] || e }(a(this)) : function(e) { var t = String.fromCharCode(e.which),
                        a = e.which; return !e.shiftKey && a >= 49 && a <= 57 ? t : !e.shiftKey && a >= 96 && a <= 105 ? String(a - 95) : a >= 65 && a <= 90 ? e.shiftKey ? t : t.toLowerCase() : a >= 112 && a <= 123 ? "F" + (a - 111) : e.shiftKey ? r[a] || "Unidentified" : n[a] || "Unidentified" }(this) } }) }), define("github/behaviors/facebox-button", ["../facebox", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("click", "[data-facebox]", function() {
            (0, n.default)({ div: this.getAttribute("data-facebox") }, this.getAttribute("data-facebox-class")) }) }), define("github/behaviors/flash", ["invariant", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("click", ".js-flash-close", function(e) { var t = e.currentTarget.closest(".flash-messages"),
                r = e.currentTarget.closest(".flash");
            (0, n.default)(r, "github/behaviors/flash.js:24"), r.remove(), t && !t.querySelector(".flash") && t.remove() }) }), define("github/behaviors/focus-delay", ["delegated-events"], function(e) { var t = new WeakMap;
        document.addEventListener("focus", function(n) { var r = n.target;
            t.get(r) || ((0, e.fire)(r, "focusin:delay"), t.set(r, !0)) }, { capture: !0 }), document.addEventListener("blur", function(n) { setTimeout(function() { var r = n.target;
                r !== document.activeElement && ((0, e.fire)(r, "focusout:delay"), t.delete(n.target)) }, 200) }, { capture: !0 }) }), define("github/behaviors/g-emoji-element", ["../emoji-detection"], function(e) {
        function t() { return Reflect.construct(HTMLElement, [], this.__proto__.constructor) } var n = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        Object.setPrototypeOf(t.prototype, HTMLElement.prototype), Object.setPrototypeOf(t, HTMLElement); var r = function(r) {
            function a() { return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a),
                    function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments)) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(a, t), n(a, [{ key: "connectedCallback", value: function() { if (null === this.image && !(0, e.isEmojiSupported)()) { this.textContent = ""; var t = function(e) { var t = document.createElement("img"); return t.className = "emoji", t.alt = e.getAttribute("alias") || "", t.height = 20, t.width = 20, t }(this);
                        t.src = this.getAttribute("fallback-src") || "", this.appendChild(t) } } }, { key: "image", get: function() { return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null } }]), a }();
        window.customElements.get("g-emoji") || (window.GEmojiElement = r, window.customElements.define("g-emoji", r)) }), define("github/behaviors/html-validation-polyfill", [], function() {! function() {
            function e() { var e = function() { if (this instanceof HTMLFormElement || this instanceof HTMLFieldSetElement) { var e = !0,
                            t = !1,
                            n = void 0; try { for (var a, o = this.elements[Symbol.iterator](); !(e = (a = o.next()).done); e = !0)
                                if (!a.value.checkValidity()) return !1 } catch (e) { t = !0, n = e } finally { try {!e && o.return && o.return() } finally { if (t) throw n } } return !0 } if (this instanceof HTMLInputElement && "hidden" === this.type) return !0; if (r.get(this)) return !1; if (this.hasAttribute("required") && !this.value) return !1; var s = this.getAttribute("pattern"); if (null != s && this.value) { var i = new RegExp("^(?:" + s + ")$"); if (0 !== this.value.search(i)) return !1 } return !0 }.call(this); if (!e) { var t = new CustomEvent("invalid", { bubbles: !1, cancelable: !0 });
                    this.dispatchEvent(t) } return e }

            function t(e) { r.set(this, e) } var n = document.createElement("input"); if (!("checkValidity" in n && "setCustomValidity" in n && (n.required = !0, n.value = "hi", n.cloneNode().checkValidity()))) { var r = new WeakMap,
                    a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = ["HTMLFormElement", "HTMLInputElement", "HTMLTextAreaElement", "HTMLSelectElement", "HTMLButtonElement", "HTMLFieldSetElement", "HTMLOutputElement"][Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value;
                        window[l] && (window[l].prototype.checkValidity = e, "HTMLFormElement" !== l && (window[l].prototype.setCustomValidity = t)) } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } } }() }), define("github/behaviors/html-validation", ["selector-observer", "delegated-events", "../onfocus", "../query-selector", "./html-validation-polyfill"], function(e, t, n, r) {
        function a(e) { var t = e.checkValidity(),
                n = !0,
                a = !1,
                o = void 0; try { for (var s, i = (0, r.querySelectorAll)(e, "button[data-disable-invalid]", HTMLButtonElement)[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) { s.value.disabled = !t } } catch (e) { a = !0, o = e } finally { try {!n && i.return && i.return() } finally { if (a) throw o } } } var o = ["input[pattern]", "input[required]", "textarea[required]", "[data-required-change]"].join(",");
        (0, n.onFocus)(o, function(e) {
            function t() { var t = e.checkValidity();
                t !== n && e.form && a(e.form), n = t } var n = e.checkValidity();
            e.addEventListener("input", t), e.addEventListener("blur", function n() { e.removeEventListener("input", t), e.removeEventListener("blur", n) }) }); var s = new WeakMap;
        (0, e.observe)("button[data-disable-invalid]", { constructor: HTMLButtonElement, initialize: function(e) { var t = e.form;
                t && (! function(e) { s.get(e) || (e.addEventListener("change", function() { return a(e) }), s.set(e, !0)) }(t), e.disabled = !t.checkValidity()) } }), (0, e.observe)("[data-required-change]", function(e) {
            function t() { e.setCustomValidity(e.value === e.defaultValue ? "unchanged" : "") } e.addEventListener("input", t), e.addEventListener("change", t), t(), e.form && a(e.form) }), document.addEventListener("reset", function(e) { if (e.target instanceof HTMLFormElement) { var t = e.target;
                setTimeout(function() { return a(t) }) } }), (0, t.on)("submit", ".js-normalize-submit", function(e) { this.checkValidity() || e.preventDefault() }) }), define("github/behaviors/labeled-button", ["selector-observer"], function(e) {
        function t(e, t) { e.closest("label").classList.toggle("selected", t) }(0, e.observe)(".labeled-button:checked", { add: function(e) { t(e, !0) }, remove: function(e) { t(e, !1) } }) }), define("github/behaviors/minibutton-accessibility", ["invariant", "../onfocus"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.onKey)("keydown", "div.btn-sm, span.btn-sm", function(e) {
            (0, n.default)(e.target instanceof HTMLElement, "github/behaviors/minibutton-accessibility.js:7"), "Enter" === e.key && (e.target.click(), e.preventDefault()) }) }), define("github/behaviors/notice", ["../query-selector", "../remote-form"], function(e, t) {
        (0, t.remoteForm)(".js-notice-dismiss", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.text());
                    case 2:
                        (r = (0, e.closest)(t, ".js-notice")).remove();
                    case 4:
                    case "end":
                        return a.stop() } }, null, this) }) }), define("github/behaviors/pjax-loader", ["../document-ready"], function(e) { e.ready.then(function() {
            function e(e) { 0 === e && (null == s && (s = getComputedStyle(r).transition), r.style.transition = "none"), a = e, r.style.width = a + "%", 0 === e && (r.clientWidth, r.style.transition = s || "") }

            function t() { 0 === a && (a = 12), e(Math.min(a + 3, 95)), o = setTimeout(t, 500) } var n = document.getElementById("js-pjax-loader-bar"); if (n) { var r = n.firstElementChild; if (r instanceof HTMLElement) { var a = 0,
                        o = null,
                        s = null;
                    document.addEventListener("pjax:start", function() { e(0), n.classList.add("is-loading"), o = setTimeout(t, 0) }), document.addEventListener("pjax:end", function() { o && clearTimeout(o), e(100), n.classList.remove("is-loading") }), document.addEventListener("pjax:timeout", function(e) { e.preventDefault() }) } } }) }), define("github/behaviors/pjax-timing", ["../setimmediate", "../stats"], function(e, t) {
        function n(e) { return e && e.__esModule ? e : { default: e } }

        function r() {
            (0, a.default)(function() { if (window.performance.getEntriesByName(u).length) { window.performance.mark(l), window.performance.measure(i, u, l); var e = window.performance.getEntriesByName(i).pop(),
                        t = e ? e.duration : null;
                    t && (s && (0, o.default)({ requestUrl: s, pjaxDuration: Math.round(t) }), window.performance.clearMarks(u), window.performance.clearMarks(l), window.performance.clearMeasures(i)) } }) } var a = n(e),
            o = n(t),
            s = null,
            i = "last_pjax_request",
            u = "pjax_start",
            l = "pjax_end";
        document.addEventListener("pjax:start", function(e) { e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(u), s = e.detail.url) }), document.addEventListener("pjax:end", r) }), define("github/behaviors/pjax/beforeunload", [], function() { document.addEventListener("pjax:click", function(e) { if (window.onbeforeunload) return e.preventDefault() }) }), define("github/behaviors/quick-submit", ["invariant", "../onfocus", "../form"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.onKey)("keydown", ".js-quick-submit", function(e) { var t = e.target; if ((0, r.default)(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement, "github/behaviors/quick-submit.js:14"), (e.ctrlKey || e.metaKey) && "Enter" === e.key) { var a = t.form;
                (0, r.default)(a instanceof HTMLFormElement, "github/behaviors/quick-submit.js:18"); var o = a.querySelector("input[type=submit], button[type=submit]");
                o && o.disabled || (0, n.submit)(a), e.preventDefault() } }) }), define("github/markdown-parsing", ["exports", "invariant"], function(e, t) {
        function n(e) { for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return n.some(function(t) { return e.classList.contains(t) }) }

        function r(e) {
            (0, o.default)(null != e.parentNode && e.parentNode instanceof HTMLElement, "github/markdown-parsing.js:10"); for (var t = e.parentNode.children, n = 0; n < t.length; ++n)
                if (t[n] === e) return n; return 0 }

        function a(e, t) { for (var n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) { return e.nodeName in i && (function(e) { return "IMG" === e.nodeName || null != e.firstChild }(e) || function(e) { return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type }(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }), r = [], a = n.nextNode(); a;) a instanceof HTMLElement && r.push(a), a = n.nextNode();
            r.reverse(); var o = !0,
                s = !1,
                u = void 0; try { for (var l, c = r[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) t(a = l.value, i[a.nodeName](a)) } catch (e) { s = !0, u = e } finally { try {!o && c.return && c.return() } finally { if (s) throw u } } } Object.defineProperty(e, "__esModule", { value: !0 }), e.selectionToMarkdown = function(e) { var t = e.getRangeAt(0).cloneContents();
            s = 0, (0, o.default)(null != e.anchorNode && null != e.anchorNode.parentNode && e.anchorNode.parentNode instanceof HTMLElement, "selection's anchorNode and parentNode must not be null -- github/markdown-parsing.js:190"); var n = e.anchorNode.parentNode.closest("li"); if (n && ((0, o.default)(null != n.parentNode, "github/markdown-parsing.js:199"), "OL" === n.parentNode.nodeName && (s = r(n)), !t.querySelector("li"))) { var i = document.createElement("li");
                (0, o.default)(null != n.parentNode, "github/markdown-parsing.js:207"); var u = document.createElement(n.parentNode.nodeName);
                i.appendChild(t), u.appendChild(i), (t = document.createDocumentFragment()).appendChild(u) } return a(t, function(e, t) { return e.replaceWith(t) }), t }; var o = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            s = 0,
            i = { INPUT: function(e) { return e.checked ? "[x] " : "[ ] " }, CODE: function(e) { var t = e.textContent; return (0, o.default)(null != e.parentNode, "github/markdown-parsing.js:54"), "PRE" === e.parentNode.nodeName ? (e.textContent = t.replace(/^/gm, "    "), e.textContent) : t.indexOf("`") >= 0 ? "`` " + t + " ``" : "`" + t + "`" }, PRE: function(e) {
                    (0, o.default)(null != e.parentNode && e.parentNode instanceof HTMLElement, "github/markdown-parsing.js:66"); var t = e.parentNode; return "DIV" === t.nodeName && t.classList.contains("highlight") && (e.textContent = e.textContent.replace(/^/gm, "    "), e.append("\n\n")), e }, STRONG: function(e) { return "**" + e.textContent + "**" }, EM: function(e) { return "_" + e.textContent + "_" }, BLOCKQUOTE: function(e) { var t = e.textContent.trim().replace(/^/gm, "> "),
                        n = document.createElement("pre"); return n.textContent = t + "\n\n", n }, A: function(e) { var t = e.textContent; if (n(e, "issue-link", "user-mention", "team-mention")) return t; if (/^https?:/.test(t) && t === e.getAttribute("href")) return t; var r = e.getAttribute("href"); return (0, o.default)(null != r, "github/markdown-parsing.js:96"), "[" + t + "](" + r + ")" }, IMG: function(e) { var t = e.getAttribute("alt"); if ((0, o.default)(null != t, "github/markdown-parsing.js:104"), n(e, "emoji")) return t; var r = e.getAttribute("src"); return (0, o.default)(null != r, "github/markdown-parsing.js:111"), "![" + t + "](" + r + ")" }, LI: function(e) { var t = e.parentNode; if ((0, o.default)(null != t, "github/markdown-parsing.js:119"), ! function(e) { var t = e.childNodes[0],
                                n = e.childNodes[1]; return !!(t && e.childNodes.length < 3) && !("OL" !== t.nodeName && "UL" !== t.nodeName || n && (n.nodeType !== Node.TEXT_NODE || n.textContent.trim())) }(e)) switch (t.nodeName) {
                        case "UL":
                            e.prepend("* "); break;
                        case "OL":
                            if (s > 0 && !t.previousSibling) { var n = r(e) + s + 1;
                                e.prepend(n + "\\. ") } else e.prepend(r(e) + 1 + ". ") }
                    return e }, OL: function(e) { var t = document.createElement("li"); return t.appendChild(document.createElement("br")), e.append(t), e }, H1: function(e) { var t = parseInt(e.nodeName.slice(1)); return e.prepend(Array(t + 1).join("#") + " "), e }, UL: function(e) { return e } };
        i.UL = i.OL; for (var u = 2; u <= 6; ++u) i["H" + u] = i.H1 }), define("github/behaviors/quote-markdown-selection", ["invariant", "delegated-events", "../markdown-parsing"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("quote:selection", ".js-quote-markdown", function(e) {
            (0, r.default)(e instanceof CustomEvent, "github/behaviors/quote-markdown-selection.js:36"); var t = e.detail.selection; try { var a = function(e, t) { var n = document.body;
                    (0, r.default)(n, "github/behaviors/quote-markdown-selection.js:15"); var a = document.createElement("div");
                    a.appendChild(t), a.style.cssText = "position:absolute;left:-9999px;", n.appendChild(a); var o = void 0; try { var s = document.createRange();
                        s.selectNodeContents(a), e.removeAllRanges(), e.addRange(s), o = e.toString(), e.removeAllRanges() } finally { n.removeChild(a) } return o }(t, (0, n.selectionToMarkdown)(t));
                e.detail.selectionText = a.replace(/^\n+/, "").replace(/\s+$/, "") } catch (e) { setTimeout(function() { throw e }) } }) }), define("github/behaviors/quote-selection", ["../form", "delegated-events", "../hotkey", "../query-selector", "../visible"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } } var s = o(n),
            i = o(a);
        document.addEventListener("keydown", function(n) { if (!(n.defaultPrevented || "r" !== (0, s.default)(n) || n.target instanceof Node && (0, e.isFormField)(n.target))) { var a = window.getSelection();
                a && function(n) { var a = n.toString().trim(); if (!a) return !1; var o = n.focusNode; if (!o) return !1; if (o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode), !(o instanceof Element)) return !1; var s = o.closest(".js-quote-selection-container"); if (!s) return !1; var u = { selection: n, selectionText: a }; if (!(0, t.fire)(s, "quote:selection", u)) return !0;
                    a = u.selectionText; var l = (0, r.querySelectorAll)(s, ".js-quote-selection-target", HTMLTextAreaElement).filter(i.default)[0]; if (!l) return !1; var c = "> " + a.replace(/\n/g, "\n> ") + "\n\n"; return l.value && (c = l.value + "\n\n" + c), (0, e.changeValue)(l, c), l.focus(), l.selectionStart = l.value.length, l.scrollTop = l.scrollHeight, !0 }(a) && n.preventDefault() } }) }), define("github/behaviors/removed-contents", ["delegated-events", "selector-observer"], function(e, t) {
        (0, t.observe)(".has-removed-contents", function() { var t = void 0; return { add: function(n) { t = Array.from(n.childNodes); var r = !0,
                        a = !1,
                        o = void 0; try { for (var s, i = t[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value;
                            n.removeChild(u) } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } var l = n.closest("form");
                    l && (0, e.fire)(l, "change") }, remove: function(n) { var r = !0,
                        a = !1,
                        o = void 0; try { for (var s, i = t[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value;
                            n.appendChild(u) } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } var l = n.closest("form");
                    l && (0, e.fire)(l, "change") } } }) }), define("github/behaviors/session-resume", ["../session-storage", "delegated-events", "../metadata", "../setimmediate", "../form"], function(e, t, n, r) {
        function a(e) { e = e || window.location; return (0, n.getMetadataByName)(document, "session-resume-id") || e.pathname }

        function o(t) { var n = "session-resume:" + t,
                r = [],
                a = !0,
                o = !1,
                s = void 0; try { for (var i, u = document.querySelectorAll(".js-session-resumable")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var c = i.value;
                    (c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) && r.push(c) } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } var d = r.filter(function(e) { return function(e) { return e.id && e.value !== e.defaultValue && e.form !== l }(e) }).map(function(e) { return [e.id, e.value] });
            d.length && (0, e.setItem)(n, JSON.stringify(d)) }

        function s(n) { var r = "session-resume:" + n,
                a = (0, e.getItem)(r); if (a) {
                (0, e.removeItem)(r); var o = [],
                    s = !0,
                    l = !1,
                    c = void 0; try { for (var d, f = JSON.parse(a)[Symbol.iterator](); !(s = (d = f.next()).done); s = !0) { var m = d.value,
                            v = u(m, 2),
                            g = v[0],
                            p = v[1]; if ((0, t.fire)(document, "session:resume", { targetId: g, targetValue: p })) { var h = document.getElementById(g);
                            h && (h instanceof HTMLInputElement || h instanceof HTMLTextAreaElement) && h.value === h.defaultValue && (h.value = p, o.push(h)) } } } catch (e) { l = !0, c = e } finally { try {!s && f.return && f.return() } finally { if (l) throw c } }(0, i.default)(function() { var e = !0,
                        n = !1,
                        r = void 0; try { for (var a, s = o[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) { var i = a.value;
                            (0, t.fire)(i, "change") } } catch (e) { n = !0, r = e } finally { try {!e && s.return && s.return() } finally { if (n) throw r } } }) } } var i = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            u = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            l = null;
        window.addEventListener("submit", function(e) { l = e.target, (0, i.default)(function() { e.defaultPrevented && (l = null) }) }, { capture: !0 }), window.addEventListener("pageshow", function() { s(a()) }), window.addEventListener("pjax:end", function() { s(a()) }), window.addEventListener("pagehide", function() { o(a()) }), window.addEventListener("pjax:beforeReplace", function(e) { var t = e.detail.previousState,
                n = t ? t.url : null; if (n) o(a(new URL(n)));
            else { var r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                setTimeout(function() { throw r }) } }) }), define("github/behaviors/size-to-fit", ["../typecast", "selector-observer", "delegated-events", "../dimensions", "../visible"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e) { var t = (0, u.default)(e.currentTarget, HTMLTextAreaElement),
                n = i(t); if (n.x !== e.clientX || n.y !== e.clientY) { var r = t.style.height;
                n.height && n.height !== r && (t.classList.add("is-user-resized"), t.style.maxHeight = "", t.removeEventListener("mousemove", s)), n.height = r } n.x = e.clientX, n.y = e.clientY }

        function i(e) { var t = c.get(e) || {}; return c.set(e, t), t } var u = o(e),
            l = o(a),
            c = new WeakMap;
        (0, n.on)("reset", "form", function(e) { var t = e.target.querySelector(".js-size-to-fit");
            t && (t.classList.remove("is-user-resized"), t.style.height = "", t.style.maxHeight = "") }), (0, t.observe)("textarea.js-size-to-fit", function(e) {
            function t() { if (!n.classList.contains("is-user-resized") && n.value !== a && (0, l.default)(n)) { var e = (0, r.overflowOffset)(n); if (!(null == e || e.top < 0 || e.bottom < 0)) { var t = Number(getComputedStyle(n).height.replace(/px/, "")) + e.bottom;
                        n.style.maxHeight = t - 100 + "px"; var o = n.parentElement; if (o instanceof HTMLElement) { var s = o.style.height;
                            o.style.height = getComputedStyle(o).height, n.style.height = "auto", n.style.height = n.scrollHeight + "px", o.style.height = s, i(n).height = n.style.height } a = n.value } } } var n = (0, u.default)(e, HTMLTextAreaElement),
                a = null; return { add: function() { n.addEventListener("mousemove", s), n.addEventListener("input", t), n.addEventListener("change", t), n.value && t() }, remove: function() { n.removeEventListener("mousemove", s), n.removeEventListener("input", t), n.removeEventListener("change", t) } } }) }), define("github/behaviors/social", ["../query-selector", "../remote-form"], function(e, t) {
        (0, t.remoteForm)(".js-social-form", function(t, n) { var r, a, o, s, i, u, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return d.next = 2, regeneratorRuntime.awrap(n.json());
                    case 2:
                        for (r = d.sent, a = (0, e.closest)(t, ".js-social-container"), o = !0, s = !1, i = void 0, d.prev = 7, u = a.querySelectorAll(".js-social-count")[Symbol.iterator](); !(o = (l = u.next()).done); o = !0)(c = l.value).textContent = r.json.count;
                        d.next = 15; break;
                    case 11:
                        d.prev = 11, d.t0 = d.catch(7), s = !0, i = d.t0;
                    case 15:
                        d.prev = 15, d.prev = 16, !o && u.return && u.return();
                    case 18:
                        if (d.prev = 18, !s) { d.next = 21; break } throw i;
                    case 21:
                        return d.finish(18);
                    case 22:
                        return d.finish(15);
                    case 23:
                    case "end":
                        return d.stop() } }, null, this, [
                [7, 11, 15, 23],
                [16, , 18, 22]
            ]) }) }), define("github/text-field-mirror", ["exports", "invariant", "./form"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) { var s = e.nodeName.toLowerCase(); if ("textarea" !== s && "input" !== s) throw new Error("expected textField to a textarea or input"); var i = o.get(e); if (i && i.parentElement === e.parentElement) i.innerHTML = "";
            else { i = document.createElement("div"), o.set(e, i); var u = window.getComputedStyle(e),
                    l = r.slice(0); "textarea" === s ? l.push("white-space:pre-wrap;") : l.push("white-space:nowrap;"); for (var c = 0, d = a.length; c < d; c++) { var f = a[c];
                    l.push(f + ":" + u.getPropertyValue(f) + ";") } i.style.cssText = l.join(" ") } var m = void 0;!1 !== t && ((m = document.createElement("span")).style.cssText = "position: absolute;", m.className = "text-field-mirror-marker", m.innerHTML = "&nbsp;"); var v = void 0,
                g = void 0; if ("number" == typeof t) { var p = e.value.substring(0, t);
                p && (v = document.createTextNode(p)), (p = e.value.substring(t)) && (g = document.createTextNode(p)) } else { var h = e.value;
                h && (v = document.createTextNode(h)) } return v && i.appendChild(v), m && i.appendChild(m), g && i.appendChild(g), i.parentElement || ((0, n.default)(e.parentElement, "textField must have a parentElement to mirror -- github/text-field-mirror.js:111"), e.parentElement.insertBefore(i, e)), i.scrollTop = e.scrollTop, i.scrollLeft = e.scrollLeft, i }; var n = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            r = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
            a = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
            o = new WeakMap }), define("github/text-field-selection-position", ["exports", "./jquery", "./text-field-mirror", "./form"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd,
                n = (0, o.default)(e, t),
                r = (0, a.default)(n).find(".text-field-mirror-marker").position(); return r.top += parseInt((0, a.default)(n).css("border-top-width"), 10), r.left += parseInt((0, a.default)(n).css("border-left-width"), 10), setTimeout(function() {
                (0, a.default)(n).remove() }, 5e3), r }; var a = r(t),
            o = r(n) }), define("github/suggester", ["exports", "./fetch", "./navigation", "./jquery", "./typecast", "invariant", "./parse-html", "./query-selector", "./text-field-selection-position"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(e, "__esModule", { value: !0 }); var c = l(r),
            d = l(a),
            f = l(o),
            m = l(u),
            v = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            g = new WeakMap,
            p = {},
            h = function() {
                function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.setup = this.setup.bind(this), this.teardown = this.teardown.bind(this), this.textarea = t.input, this.types = t.types, this.suggester = t.suggester, this.repositionManually = t.repositionManually, this.teardownManually = t.teardownManually, this.onActivate = t.onActivate, this.suggestions = t.suggestions || document.createElement("div"), this.disable = t.disable, this.keyDownHandler = this.onNavigationKeyDown.bind(this), this.navigationOpenHandler = this.onNavigationOpen.bind(this) } return v(e, [{ key: "setup", value: function() {
                        (0, c.default)(this.textarea.form).on("reset.suggester", this.deactivate.bind(this)), (0, c.default)(this.textarea).on("paste.suggester", this.onPaste.bind(this)), (0, c.default)(this.textarea).on("input.suggester", this.onInput.bind(this)), this.suggester.addEventListener("navigation:keydown", this.keyDownHandler), this.suggester.addEventListener("navigation:open", this.navigationOpenHandler), null == this.teardownManually && this.textarea.addEventListener("focusout:delay", this.teardown), this.loadSuggestions() } }, { key: "teardown", value: function() { this.deactivate(), (0, c.default)(this.textarea).off(".suggester"), (0, c.default)(this.textarea.form).off(".suggester"), (0, c.default)(this.suggester).off(".suggester"), this.suggester.removeEventListener("navigation:keydown", this.keyDownHandler), this.suggester.removeEventListener("navigation:open", this.navigationOpenHandler), this.textarea.removeEventListener("focusout:delay", this.teardown), this.onSuggestionsLoaded = function() { return null } } }, { key: "onPaste", value: function() { this.deactivate(), this.justPasted = !0 } }, { key: "onInput", value: function() { if (!this.justPasted) return !this.checkQuery() && void 0;
                        this.justPasted = !1 } }, { key: "onNavigationKeyDown", value: function(e) { var t = e.detail; if (e.target instanceof HTMLElement && e.target.hasAttribute("data-value")) switch (t.hotkey) {
                            case "Tab":
                                this.onNavigationOpen(e), e.preventDefault(); break;
                            case "Escape":
                                this.deactivate(), e.stopImmediatePropagation(), e.preventDefault() } } }, { key: "_getDataValue", value: function(e) { return this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e) : e.getAttribute("data-value") } }, { key: "_findIndexOfPick", value: function(e, t) { var n = 1,
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value; if (this._getDataValue(u) === t) return n;
                                n++ } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return -1 } }, { key: "logMention", value: function(e, n, r, a) { var o = r.getAttribute("data-mentionable-type"); if (o) { var s = r.getAttribute("data-mentionable-id"); if (s) { var i = new FormData;
                                i.append("authenticity_token", n), i.append("mentionable_type", o), i.append("mentionable_id", s), i.append("query_string", a), (0, t.fetch)(e, { method: "POST", body: i }) } } } }, { key: "onNavigationOpen", value: function(e) { var t = this,
                            n = (0, d.default)(e.target, HTMLElement); if (n.hasAttribute("data-value")) { var r = this._getDataValue(n),
                                a = this.textarea.value.substring(0, this.currentSearch.endIndex),
                                o = this.textarea.value.substring(this.currentSearch.endIndex);
                            this.currentSearch.type.onSelection ? this.currentSearch.type.onSelection(r) : (a = a.replace(this.currentSearch.type.match, this.currentSearch.type.replace.replace("$value", r)), this.textarea.value = a + o), this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = a.length, this.textarea.selectionEnd = a.length; var s = this.suggester.getAttribute("data-log-mention-url"); if (s) { var i = this.suggester.getAttribute("data-log-mention-authenticity-token");
                                i && requestIdleCallback(function() { return t.logMention(s, i, n, t.currentSearch.query) }) } } } }, { key: "checkQuery", value: function() { var e = this,
                            t = this.searchQuery(); if (t) { var n = null,
                                r = null; if ("mention" === t.type.typeid && (n = this.suggestions.querySelector(".js-mention-suggestion-template")) && (n = (0, d.default)(n, HTMLTemplateElement), !(r = g.get(n)))) { var a = n.getAttribute("data-mentions-json");
                                (0, f.default)("string" == typeof a, "must have data-mentions-json attribute -- github/suggester.js:282"), r = JSON.parse(a), g.set(n, r) } if (this.currentSearch && this.currentSearch === t.query) return; return this.currentSearch = t, this.search(t.type, t.query, r, n).then(function(n) { return n ? e.activate(t.startIndex) : e.deactivate() }), this.currentSearch.query } this.currentSearch = null, this.deactivate() } }, { key: "renderResults", value: function(e, t, n) { var r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = t[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value;
                                n && e.appendChild(n.content.cloneNode(!0)); var l = (0, d.default)(e.children[e.children.length - 1], HTMLLIElement); "user" === u.type ? this.renderUserResult(u, l) : "team" === u.type && this.renderTeamResult(u, l), l.setAttribute("data-mentionable-type", u.type), l.setAttribute("data-mentionable-id", u.id) } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } } }, { key: "renderUserResult", value: function(e, t) {
                        (0, i.query)(t, ".js-suggestion-text").textContent = e.login;
                        (0, i.query)(t, ".js-suggestion-secondary-text").textContent = e.name, t.setAttribute("data-value", e.login), t.setAttribute("data-text", e.login + " " + e.name) } }, { key: "renderTeamResult", value: function(e, t) {
                        (0, i.query)(t, ".js-suggestion-text").textContent = e.name;
                        (0, i.query)(t, ".js-suggestion-secondary-text").textContent = e.description, t.setAttribute("data-value", e.name), t.setAttribute("data-text", e.name + " " + e.description) } }, { key: "activate", value: function(e) { this.textarea === document.activeElement && (this.onActivate && this.onActivate(this.suggester), null == this.repositionManually && (0, c.default)(this.suggester).css((0, m.default)(this.textarea, e + 1)), this.suggester.classList.contains("active") || (this.suggester.classList.add("active"), this.textarea.classList.add("js-navigation-enable"), (0, n.push)(this.suggester), (0, n.focus)(this.suggester))) } }, { key: "deactivate", value: function() { if (this.suggester.classList.contains("active")) { this.suggester.classList.remove("active"); var e = this.suggester.querySelector(".suggestions");
                            e && (e.style.display = "none"), this.textarea.classList.remove("js-navigation-enable"), (0, n.pop)(this.suggester) } } }, { key: "search", value: function(e, t, r, a) { var o, s, i, u, l; return regeneratorRuntime.async(function(c) { for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, regeneratorRuntime.awrap(e.search(this.suggestions, t, r));
                                case 2:
                                    if (o = c.sent, s = o.element, i = o.results, !((u = i && Array.isArray(i) ? i.length : i) > 0 && s)) { c.next = 16; break } return l = s.cloneNode(!0), r && Array.isArray(i) && this.renderResults(l, i, a), this.suggester.innerHTML = "", this.suggester.appendChild(l), l.style.display = "block", (0, n.focus)(this.suggester), c.abrupt("return", !0);
                                case 16:
                                    return c.abrupt("return", !1);
                                case 17:
                                case "end":
                                    return c.stop() } }, null, this) } }, { key: "searchQuery", value: function() { var e = this.textarea.selectionEnd,
                            t = this.textarea.value.substring(0, e); if (!this.disable || !this.disable(t))
                            for (var n in this.types) { var r = this.types[n],
                                    a = t.match(r.match); if (a) return r.normalizeMatch ? r.normalizeMatch(r, e, a) : this.normalizeMatch(r, e, a) } } }, { key: "normalizeMatch", value: function(e, t, n) { var r = n[2]; return { type: e, text: r, query: n[3], startIndex: t - r.length, endIndex: t } } }, { key: "loadSuggestions", value: function() { var e, n, r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!this.suggestions.hasChildNodes()) { a.next = 2; break } return a.abrupt("return");
                                case 2:
                                    if (e = this.suggester.getAttribute("data-url")) { a.next = 5; break } return a.abrupt("return");
                                case 5:
                                    return n = p[e] || (p[e] = (0, t.fetchText)(e)), a.next = 8, regeneratorRuntime.awrap(n);
                                case 8:
                                    return r = a.sent, a.abrupt("return", this.onSuggestionsLoaded(r));
                                case 10:
                                case "end":
                                    return a.stop() } }, null, this) } }, { key: "onSuggestionsLoaded", value: function(e) { var t = (0, s.parseHTML)(document, e); if (this.suggestions.appendChild(t), document.activeElement === this.textarea) return this.currentSearch = null, this.checkQuery() } }]), e }();
        e.default = h }), define("github/fuzzy-filter", ["exports"], function(e) {
        function t(e, t) { var n = a(e, t); if (n && -1 === t.indexOf("/")) { n += a(e.substring(e.lastIndexOf("/") + 1), t) } return n }

        function n(e, t) { var n = e[0],
                r = t[0],
                a = e[1],
                o = t[1]; return a > o ? -1 : a < o ? 1 : n < r ? -1 : n > r ? 1 : 0 }

        function r(e) { var t = e.toLowerCase(),
                n = "+.*?[]{}()^$|\\".replace(/(.)/g, "\\$1"),
                r = new RegExp("\\(([" + n + "])\\)", "g"); return e = t.replace(/(.)/g, "($1)(.*?)").replace(r, "(\\$1)"), new RegExp("(.*)" + e + "$", "i") }

        function a(e, t) { if (e === t) return 1; var n = e.length,
                r = 0,
                a = 0,
                o = void 0,
                s = void 0,
                i = void 0; for (o = s = 0, i = t.length; s < i; o = ++s) { var u = t[o],
                    l = e.indexOf(u.toLowerCase()),
                    c = e.indexOf(u.toUpperCase()),
                    d = Math.min(l, c),
                    f = d > -1 ? d : Math.max(l, c); if (-1 === f) return 0;
                r += .1, e[f] === u && (r += .1), 0 === f && (r += .8, 0 === o && (a = 1)), " " === e.charAt(f - 1) && (r += .8), e = e.substring(f + 1, n) } var m = t.length,
                v = r / m,
                g = (v * (m / n) + v) / 2; return a && g + .1 < 1 && (g += .1), g } Object.defineProperty(e, "__esModule", { value: !0 }), e.fuzzyScore = t, e.fuzzySort = function(e, r) { var a = function() { for (var n = [], a = 0, o = e.length; a < o; a++) { var s = e[a],
                        i = t(s, r);
                    i && n.push([s, i]) } return n }();
            a.sort(n); for (var o = [], s = 0, i = a.length; s < i; s++) { var u = a[s];
                o.push(u[0]) } return o }, e.fuzzyRegexp = r, e.fuzzyHighlightElement = function(e, t, n) { var a = e.innerHTML.trim(); if (t) { null == n && (n = r(t)); var o = a.match(n); if (!o) return; var s = !1;
                a = []; var i = void 0,
                    u = void 0,
                    l = void 0; for (i = u = 1, l = o.length; 1 <= l ? u < l : u > l; i = 1 <= l ? ++u : --u) { var c = o[i];
                    c && (i % 2 == 0 ? s || (a.push("<mark>"), s = !0) : s && (a.push("</mark>"), s = !1), a.push(c)) } e.innerHTML = a.join("") } else { var d = a.replace(/<\/?mark>/g, "");
                a !== d && (e.innerHTML = d) } } }), define("github/fuzzy-filter-sort-list", ["exports", "./fuzzy-filter", "./jquery"], function(e, t, n) {
        function r(e, t) { var n = e.fuzzyFilterScoreCache,
                r = t.fuzzyFilterScoreCache,
                a = e.fuzzyFilterTextCache,
                o = t.fuzzyFilterTextCache; return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0 } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, n, i) { var u = void 0,
                l = void 0,
                c = void 0,
                d = void 0,
                f = void 0,
                m = void 0,
                v = void 0,
                g = void 0,
                p = void 0,
                h = void 0,
                y = void 0; if (null == i && (i = {}), !e) return 0;
            n = n.toLowerCase(); var b = null != i.content ? i.content : function(e) { return e },
                j = null != i.text ? i.text : function(e) { return e.hasAttribute("data-filter-value") ? e.getAttribute("data-filter-value").toLowerCase().trim() : e.textContent.toLowerCase().trim() },
                L = null != i.score ? i.score : t.fuzzyScore,
                w = i.limit;!0 === i.mark ? y = s : null != i.mark && null != i.mark.call && (y = i.mark); var x = o.get(e); for (x ? u = (0, a.default)(e).children() : (u = x = (0, a.default)(e).children(), o.set(e, x.slice(0))), l = 0, v = u.length; l < v; l++) c = u[l], e.removeChild(c), c.style.display = ""; var k = document.createDocumentFragment(),
                E = 0,
                q = 0; if (n) { var S = x.slice(0); for (f = 0, p = S.length; f < p; f++) null == (c = S[f]).fuzzyFilterTextCache && (c.fuzzyFilterTextCache = j(b(c))), c.fuzzyFilterScoreCache = L(c.fuzzyFilterTextCache, n, c);
                S.sort(r); var T = (0, t.fuzzyRegexp)(n); for (m = 0, h = S.length; m < h; m++) { if (c = S[m], (null == w || E < w) && c.fuzzyFilterScoreCache > 0) { if (q++, y) { var _ = b(c);
                            y(_), y(_, n, T) } k.appendChild(c) } E++ } } else
                for (d = 0, g = x.length; d < g; d++) c = x[d], (null == w || E < w) && (q++, y && y(b(c)), k.appendChild(c)), E++;
            e.appendChild(k); var M = e.querySelectorAll(".js-divider"); for (l = 0; l < M.length; l++) M[l].classList.toggle("d-none", Boolean(n && n.trim().length > 0)); return q }; var a = function(e) { return e && e.__esModule ? e : { default: e } }(n),
            o = new WeakMap,
            s = t.fuzzyHighlightElement }), define("github/behaviors/tag-input", ["../query-selector", "../suggester", "../typecast", "../fetch", "delegated-events", "../fuzzy-filter-sort-list", "../fuzzy-filter", "../hotkey", "invariant", "selector-observer"], function(e, t, n, r, a, o, s, i, u, l) {
        function c(e) { return e && e.__esModule ? e : { default: e } } var d = c(t),
            f = c(n),
            m = c(o),
            v = c(i),
            g = c(u),
            p = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            h = function() {
                function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.suggestions = e.suggestions, this.tagTemplate = e.tagTemplate, this.form = this.input.closest("form"), this.delayTimer = null } return p(t, [{ key: "setup", value: function() { var e = this;
                        this.container.addEventListener("click", function(t) {
                            (0, f.default)(t.target, HTMLElement).matches(".js-remove") ? e.removeTag(t) : e.onFocus() }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.setupSuggester() } }, { key: "setupSuggester", value: function() { var e = this.suggestions.cloneNode(!0);
                        this.container.appendChild(e), this.suggester = new d.default({ input: this.input, suggester: this.suggestions, suggestions: e, repositionManually: !0, teardownManually: !0, onActivate: this.repositionSuggester.bind(this), types: { tag: { match: /.+/i, onSelection: this.selectTag.bind(this), search: this.filterSuggestions.bind(this), normalizeMatch: this.normalizeSuggestionMatch.bind(this) } } }), this.suggester.setup(), this.container.classList.add("js-suggester-container"), this.suggestions.classList.add("js-navigation-container", "suggester") } }, { key: "onFocus", value: function() { this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus() } }, { key: "onBlur", value: function() { this.inputWrap.classList.remove("focus"), this.isSuggesterVisible() || this.onSubmit() } }, { key: "onSubmit", value: function() { this.val() && (this.selectTag(this.val()), this.suggester.deactivate()) } }, { key: "onKeyDown", value: function(e) { switch ((0, v.default)(e)) {
                            case "Backspace":
                                this.onBackspace(); break;
                            case "Enter":
                            case "Tab":
                                this.taggifyValueWhenSuggesterHidden(e); break;
                            case ",":
                            case " ":
                                this.taggifyValue(e) } } }, { key: "taggifyValueWhenSuggesterHidden", value: function(e) {!this.isSuggesterVisible() && this.val() && (e.preventDefault(), this.selectTag(this.val())) } }, { key: "taggifyValue", value: function(e) { this.val() && (e.preventDefault(), this.selectTag(this.val()), this.suggester.deactivate()) } }, { key: "selectTag", value: function(e) { var t = this.normalizeTag(e),
                            n = this.selectedTags();
                        t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", (0, a.fire)(this.form, "tags:changed")) } }, { key: "removeTag", value: function(t) { var n = (0, f.default)(t.target, HTMLElement);
                        t.preventDefault();
                        (0, e.closest)(n, ".js-tag-input-tag").remove(), (0, a.fire)(this.form, "tags:changed") } }, { key: "templateTag", value: function(t) { var n = this.tagTemplate.cloneNode(!0);
                        (0, e.query)(n, "input", HTMLInputElement).value = t; return (0, e.query)(n, ".js-placeholder-tag-name").replaceWith(t), n.classList.remove("d-none", "js-template"), n } }, { key: "normalizeTag", value: function(e) { return e.toLowerCase().trim().replace(/[\s,']+/g, "-") } }, { key: "onBackspace", value: function() { if (!this.val()) { var e = this.selections.querySelector("li:last-child .js-remove");
                            e && e.click() } } }, { key: "val", value: function() { return this.input.value } }, { key: "repositionSuggester", value: function(e) { e.style.position = "absolute", e.style.top = this.container.clientHeight + "px" } }, { key: "filterSuggestions", value: function(t, n) { var a = this,
                            o = (0, e.query)(t, ".js-tag-suggestions", HTMLElement); if (o.hasAttribute("data-url")) return new Promise(function(t) { null !== a.delayTimer && clearTimeout(a.delayTimer), a.delayTimer = setTimeout(function() { var s, i, u, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                                        case 0:
                                            if (!(a.input.value.trim().length < 1) && o) { d.next = 2; break } return d.abrupt("return", t({ element: o, results: 0 }));
                                        case 2:
                                            return s = o.getAttribute("data-url"), (0, g.default)(s, "github/behaviors/tag-input.js:304"), i = new URL(s, window.location.origin), (u = new URLSearchParams(i.search.slice(1))).append("q", n), i.search = u.toString(), d.next = 10, regeneratorRuntime.awrap((0, r.fetchSafeDocumentFragment)(document, i));
                                        case 10:
                                            if (l = d.sent, !(a.input.value.trim().length < 1)) { d.next = 13; break } return d.abrupt("return", t({ element: o, results: 0 }));
                                        case 13:
                                            o.innerHTML = "", o.appendChild(l), c = (0, e.querySelectorAll)(o, "li", HTMLLIElement).length, t({ element: o, results: c });
                                        case 17:
                                        case "end":
                                            return d.stop() } }, null, a) }, 300) }); var i = this.selectedTags(),
                            u = (0, m.default)(o, n, { limit: 5, score: function(e, t) { return i.indexOf(e) >= 0 ? 0 : i.indexOf(a.normalizeTag(e)) >= 0 ? 0 : (0, s.fuzzyScore)(e, t) } }); return Promise.resolve({ element: o, results: u }) } }, { key: "normalizeSuggestionMatch", value: function(e, t, n) { return { type: e, text: n[0], query: n[0] } } }, { key: "selectedTags", value: function() { var t = (0, e.querySelectorAll)(this.selections, "input", HTMLInputElement); return Array.from(t).map(function(e) { return e.value }).filter(function(e) { return e.length > 0 }) } }, { key: "isSuggesterVisible", value: function() { return !!this.suggestions.offsetParent } }]), t }();
        (0, l.observe)(".js-tag-input-container", function(e) { new h({ container: e, inputWrap: e.querySelector(".js-tag-input-wrapper"), input: e.querySelector('input[type="text"]'), suggestions: e.querySelector(".js-tag-input-options"), selections: e.querySelector(".js-tag-input-selected-tags"), tagTemplate: e.querySelector(".js-template") }).setup() }) }), define("github/behaviors/team-members", ["../fetch", "invariant", "selector-observer"], function(e, t, n) {
        function r(t) { var n, r, s, i, u, l, c, d, f, m, v, g, p, h; return regeneratorRuntime.async(function(y) { for (;;) switch (y.prev = y.next) {
                    case 0:
                        if (n = t.currentTarget, (0, o.default)(n instanceof HTMLElement, "github/behaviors/team-members.js:10"), r = n.getAttribute("data-url")) { y.next = 5; break } return y.abrupt("return");
                    case 5:
                        for (s = (0, e.fetchJSON)(r), i = n.getAttribute("data-id"), (0, o.default)(i, "github/behaviors/team-members.js:17"), u = document.querySelectorAll(".js-team-mention[data-id='" + i + "']"), l = !0, c = !1, d = void 0, y.prev = 12, f = u[Symbol.iterator](); !(l = (m = f.next()).done); l = !0)(v = m.value).removeAttribute("data-url");
                        y.next = 20; break;
                    case 16:
                        y.prev = 16, y.t0 = y.catch(12), c = !0, d = y.t0;
                    case 20:
                        y.prev = 20, y.prev = 21, !l && f.return && f.return();
                    case 23:
                        if (y.prev = 23, !c) { y.next = 26; break } throw d;
                    case 26:
                        return y.finish(23);
                    case 27:
                        return y.finish(20);
                    case 28:
                        return y.prev = 28, y.next = 31, regeneratorRuntime.awrap(s);
                    case 31:
                        0 === (g = y.sent).total ? g.members.push("This team has no members") : g.total > g.members.length && g.members.push(g.total - g.members.length + " more"), a(u, function(e) { { if (0 === e.length) return ""; if (1 === e.length) return e[0]; if (2 === e.length) return e.join(" and "); var t = e[e.length - 1]; return e.slice(0, -1).concat("and " + t).join(", ") } }(g.members)), y.next = 42; break;
                    case 36:
                        y.prev = 36, y.t1 = y.catch(28), p = y.t1.response ? y.t1.response.status : 500, h = n.getAttribute(404 === p ? "data-permission-text" : "data-error-text"), (0, o.default)(h, "github/behaviors/team-members.js:35"), a(u, h);
                    case 42:
                    case "end":
                        return y.stop() } }, null, this, [
                [12, 16, 20, 28],
                [21, , 23, 27],
                [28, 36]
            ]) }

        function a(e, t) { var n = !0,
                r = !1,
                a = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value;
                    i.setAttribute("aria-label", t), i.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline") } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } } var o = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.observe)(".js-team-mention", function(e) { e.addEventListener("mouseenter", r) }) }), define("github/page-focused", ["exports"], function(e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e) { return new Promise(function(t) {
                function n() { e.hasFocus() && (t(), e.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n), window.removeEventListener("blur", n)) } e.addEventListener("visibilitychange", n), window.addEventListener("focus", n), window.addEventListener("blur", n), n() }) } }), define("github/in-viewport", ["exports", "selector-observer", "./page-focused"], function(e, t, n) {
        function r(e) { var t = e.getBoundingClientRect(),
                n = window.innerHeight,
                r = window.innerWidth; if (0 === t.height) return !1; if (t.height < n) return t.top >= 0 && t.left >= 0 && t.bottom <= n && t.right <= r; var a = Math.ceil(n / 2); return t.top >= 0 && t.top + a < n }

        function a(e) { var t = !0,
                n = !1,
                a = void 0; try { for (var o, s = e.elements[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) { var i = o.value;
                    r(i) ? e.in.call(i, i, e) : e.out && e.out.call(i, i, e) } } catch (e) { n = !0, a = e } finally { try {!t && s.return && s.return() } finally { if (n) throw a } } }

        function o(e, n) { var r = { id: i++, selector: e, in: n, out: null, elements: [], checkPending: !1, scrollHandler: function() {! function(e) { document.hasFocus() && window.scrollY !== u && (u = window.scrollY, e.checkPending || (e.checkPending = !0, window.requestAnimationFrame(function() { e.checkPending = !1, a(e) }))) }(r) } };
            (0, t.observe)(e, { add: function(e) {! function(e, t) { 0 === t.elements.length && (window.addEventListener("scroll", t.scrollHandler, { capture: !0, passive: !0 }), (0, s.default)(document).then(function() { return a(t) })), t.elements.push(e) }(e, r) }, remove: function(e) {! function(e, t) { var n = t.elements.indexOf(e); - 1 !== n && t.elements.splice(n, 1), 0 === t.elements.length && window.removeEventListener("scroll", t.scrollHandler, { capture: !0, passive: !0 }) }(e, r) } }) } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o; var s = function(e) { return e && e.__esModule ? e : { default: e } }(n),
            i = 0,
            u = -1 }), define("github/behaviors/unread-comments", ["../in-viewport", "selector-observer", "delegated-events", "../form"], function(e, t, n, r) {
        function a(e) { return e.classList.remove("js-unread-item", "unread-item") } var o = 0;
        (0, function(e) { return e && e.__esModule ? e : { default: e } }(e).default)(".js-unread-item", function(e) { a(e) }), (0, t.observe)(".js-unread-item", { add: function() { o++ }, remove: function() { 0 === --o && function() { if (document.hasFocus()) { var e = document.querySelector(".js-timeline-marker-form");
                        e && e instanceof HTMLFormElement && (0, r.submit)(e) } }() } }), (0, n.on)("socket:message", ".js-discussion", function(e) { if (e.currentTarget === e.target) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var o, s = document.querySelectorAll(".js-unread-item")[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) { a(o.value) } } catch (e) { n = !0, r = e } finally { try {!t && s.return && s.return() } finally { if (n) throw r } } } }) }), define("github/behaviors/unread-item-counter", ["selector-observer"], function(e) {
        function t() { var e = n ? "(" + n + ") " : "";
            document.title.match(r) ? document.title = document.title.replace(r, e) : document.title = "" + e + document.title } var n = 0,
            r = /^\(\d+\)\s+/;
        (0, e.observe)(".js-unread-item", { add: function() { n++, t() }, remove: function() { n--, t() } }) }), define("github/behaviors/user-content", ["../fragment-target", "delegated-events", "../document-ready"], function(e, t, n) {
        function r() { if (!document.querySelector(":target")) { var t = (0, e.decodeFragmentValue)(location.hash),
                    n = (0, e.findElementByFragmentName)(document, "user-content-" + t);
                n && n.scrollIntoView() } } window.addEventListener("hashchange", r), document.addEventListener("pjax:success", r), (0, t.on)("click", "a[href]", function(e) { this.href === location.href && location.hash.length > 1 && setTimeout(function() { e.defaultPrevented || r() }) }), n.ready.then(r) }), define("github/behaviors/will-transition-once", ["selector-observer"], function(e) {
        function t(e) { return e.target.classList.remove("will-transition-once") }(0, e.observe)(".will-transition-once", { add: function(e) { e.addEventListener("transitionend", t) }, remove: function(e) { e.removeEventListener("transitionend", t) } }) }), define("github/biztools/showcase", ["../query-selector", "../fetch", "delegated-events", "selector-observer"], function(e, t, n, r) {
        (0, r.observe)(".js-repo-health", function(r) {
            function a() {! function(r, a, o) { var s = (0, e.query)(document, ".js-repo-health-check", HTMLFormElement);
                    (0, e.query)(s, ".js-repo-health-name", HTMLInputElement).value = o, r.classList.remove("d-none"), r.classList.add("is-loading"), a.setCustomValidity("checking"), (0, n.fire)(a, "change"), (0, t.fetchSafeDocumentFragment)(document, s.action, { method: "POST", body: new FormData(s) }).then(function(t) { var o = (0, e.query)(r, ".js-repo-health-results");
                        o.innerHTML = "", o.appendChild(t), r.classList.remove("is-loading"), a.setCustomValidity(""), (0, n.fire)(a, "change") }) }(r, s, i.value) } var o = (0, e.closest)(r, "form", HTMLFormElement),
                s = (0, e.query)(o, ".js-comment-field", HTMLTextAreaElement),
                i = (0, e.query)(o, ".js-repo-name", HTMLInputElement); "hidden" === i.type ? s.addEventListener("focus", a) : i.addEventListener("change", a) }) }), define("github/clipboard", ["exports", "invariant"], function(e, t) {
        function n(e) { var t = getSelection(); if (null != t) { t.removeAllRanges(); var n = document.createRange();
                n.selectNodeContents(e), t.addRange(n), document.execCommand("copy"), t.removeAllRanges() } }

        function r(e) { var t = document.body;
            (0, a.default)(t, "github/clipboard.js:33"); var r = function(e) { var t = document.createElement("pre"); return t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t }(e);
            t.appendChild(r), n(r), t.removeChild(r) } Object.defineProperty(e, "__esModule", { value: !0 }), e.copyNode = n, e.copyText = r, e.copyInput = function(e) { e.select(), document.execCommand("copy"); var t = getSelection();
            null != t && t.removeAllRanges() }; var a = function(e) { return e && e.__esModule ? e : { default: e } }(t) }), define("github/clipboard-copy-element", ["./clipboard"], function(e) {
        function t() { return Reflect.construct(HTMLElement, [], this.__proto__.constructor) }

        function n(t) { var n = t.getAttribute("for"),
                r = t.getAttribute("data-clipboard-text");
            r ? (0, e.copyText)(r) : n && function(t, n) { var r = t.getElementById(n); if (!r) return;
                    r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement ? "hidden" === r.type ? (0, e.copyText)(r.value) : (0, e.copyInput)(r) : (0, e.copyNode)(r) }(t.ownerDocument, n),
                function(e) { var t = e.getAttribute("data-copied-hint"),
                        n = e.getAttribute("aria-label");
                    t && t !== n && (e.setAttribute("aria-label", t), e.addEventListener("mouseleave", function() { null != n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label") }, { once: !0 })) }(t), t.blur() }

        function r(e) { var t = e.currentTarget;
            t instanceof HTMLElement && n(t) }

        function a(e) { if (" " === e.key || "Enter" === e.key) { var t = e.currentTarget;
                t instanceof HTMLElement && (e.preventDefault(), n(t)) } }

        function o(e) { e.currentTarget.addEventListener("keydown", a) }

        function s(e) { e.currentTarget.removeEventListener("keydown", a) } var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        Object.setPrototypeOf(t.prototype, HTMLElement.prototype), Object.setPrototypeOf(t, HTMLElement); var u = function(e) {
            function n() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, n); var e = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)); return e.addEventListener("click", r), e.addEventListener("focus", o), e.addEventListener("blur", s), e } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(n, t), i(n, [{ key: "connectedCallback", value: function() { this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0") } }]), n }();
        window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = u, window.customElements.define("clipboard-copy", u)) }), define("github/audit-log", ["./typecast", "./fetch", "delegated-events", "./query-selector", "./remote-form", "./form"], function(e, t, n, r, a, o) {
        function s() { var e = (0, r.query)(document, ".js-audit-log-export-status"); return g.set(e, e.textContent), d = setInterval(function() { var t = m.slice(0, v).join("");
                e.textContent = "Exporting" + t, v >= 3 ? v = 0 : v += 1 }, f), (0, r.query)(document, ".js-audit-log-export-button").classList.add("disabled") }

        function i() {
            (0, r.query)(document, ".js-audit-log-export-button").classList.remove("disabled"); var e = (0, r.query)(document, ".js-audit-log-export-status");
            e.textContent = g.get(e) || "", null !== d && clearInterval(d), v = 0 }

        function u() { i(); var e = document.getElementById("ajax-error-message");
            e && e.classList.add("visible") }

        function l(e) { i(), window.location = e } var c = function(e) { return e && e.__esModule ? e : { default: e } }(e),
            d = null,
            f = 300,
            m = [".", ".", "."],
            v = 0,
            g = new WeakMap;
        (0, a.remoteForm)(".js-audit-log-export-form", function(e, n) { var r, a; return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return s(), r = void 0, e.prev = 2, e.next = 5, regeneratorRuntime.awrap(n.json());
                    case 5:
                        r = e.sent, e.next = 12; break;
                    case 8:
                        return e.prev = 8, e.t0 = e.catch(2), u(), e.abrupt("return");
                    case 12:
                        return a = r.json, e.prev = 13, e.next = 16, regeneratorRuntime.awrap((0, t.fetchPoll)(a.job_url));
                    case 16:
                        e.next = 22; break;
                    case 18:
                        return e.prev = 18, e.t1 = e.catch(13), u(), e.abrupt("return");
                    case 22:
                        l(a.export_url);
                    case 23:
                    case "end":
                        return e.stop() } }, null, this, [
                [2, 8],
                [13, 18]
            ]) }), (0, n.on)("navigation:open", ".audit-search-form .js-suggester", function(e) { var t = (0, c.default)(e.currentTarget.closest("form"), HTMLFormElement);
            (0, o.submit)(t) }) }), define("github/branches", ["./query-selector", "delegated-events", "./sliding-promise-queue", "./throttled-input", "./typecast", "./fetch", "./hotkey", "invariant", "selector-observer", "./remote-form", "./history", "./form"], function(e, t, n, r, a, o, s, i, u, l, c) {
        function d(e) { return e && e.__esModule ? e : { default: e } }

        function f(t) {
            function n() { a.classList.remove("is-loading") } var r = t.form;
            (0, h.default)(r, "github/branches.js:44"); var a = (0, e.closest)(r, ".js-branches"),
                s = a.querySelectorAll(".js-branches-subnav .js-subnav-item"),
                i = a.querySelector(".js-branches-subnav .js-subnav-item.selected"),
                u = (0, e.query)(a, ".js-branches-subnav .js-branches-all"),
                l = r.getAttribute("data-results-container");
            y || (y = i); var d = t.value.trim().length > 0,
                f = function(e) { var t = e.form; if ((0, h.default)(t, "github/branches.js:23"), e.value.trim()) { var n = new URL(t.action, window.location.origin),
                            r = new URLSearchParams(n.search.slice(1)),
                            a = t.elements.namedItem("utf8"); return a instanceof HTMLInputElement && r.append("utf8", a.value), r.append("query", e.value), n.search = r.toString(), n.toString() } var o = t.getAttribute("data-reset-url"); return (0, h.default)(o, "github/branches.js:38"), o }(t);
            b.push((0, o.fetchSafeDocumentFragment)(document, f)).then(function(e) {
                (0, c.replaceState)(null, "", f); var t = l ? document.getElementById(l) : null;
                t && (t.innerHTML = "", t.appendChild(e)) }).then(n, n), a.classList.toggle("is-search-mode", d), a.classList.add("is-loading"); var m = !0,
                v = !1,
                g = void 0; try { for (var p, j = s[Symbol.iterator](); !(m = (p = j.next()).done); m = !0) { p.value.classList.remove("selected") } } catch (e) { v = !0, g = e } finally { try {!m && j.return && j.return() } finally { if (v) throw g } } d ? u.classList.add("selected") : y && (y.classList.add("selected"), y = null) }

        function m(t) { var n = (0, e.closest)(t, ".js-branch-row").getAttribute("data-branch-name"),
                r = (0, e.closest)(t, ".js-branches").querySelectorAll(".js-branch-row"); return Array.from(r).filter(function(e) { return e.getAttribute("data-branch-name") === n }) } var v = d(n),
            g = d(a),
            p = d(s),
            h = d(i),
            y = null,
            b = new v.default;
        (0, u.observe)(".js-branch-search-field", function(e) {
            (0, r.addThrottledInputEventListener)(e, f), e.addEventListener("keyup", function(t) { "Escape" === (0, p.default)(t) && (! function(e) { var t = e.value.trim();
                    e.value = "", t && f(e) }(e), e.blur()) }) }), (0, t.on)("submit", ".js-branch-search", function(e) { return e.preventDefault() }), (0, t.on)("click", ".js-clear-branch-search", function(n) { var r = (0, g.default)(n.currentTarget, HTMLButtonElement);
            (0, h.default)(r.form, "github/branches.js:113"); var a = (0, e.query)(r.form, ".js-branch-search-field", HTMLInputElement);
            a.focus(), a.value = "", (0, t.fire)(a, "input") }), (0, l.remoteForm)(".js-branch-destroy, .js-branch-restore", function(t, n) { var r, a, o, s, i, u, l, c, d, f, v, g, p, h, y, b, j, L, w, x, k, E; return regeneratorRuntime.async(function(q) { for (;;) switch (q.prev = q.next) {
                    case 0:
                        for ((r = (0, e.query)(t, "button[type=submit]")).blur(), r.classList.remove("tooltipped"), a = m(t), o = !0, s = !1, i = void 0, q.prev = 7, u = a[Symbol.iterator](); !(o = (l = u.next()).done); o = !0)(c = l.value).classList.add("loading");
                        q.next = 15; break;
                    case 11:
                        q.prev = 11, q.t0 = q.catch(7), s = !0, i = q.t0;
                    case 15:
                        q.prev = 15, q.prev = 16, !o && u.return && u.return();
                    case 18:
                        if (q.prev = 18, !s) { q.next = 21; break } throw i;
                    case 21:
                        return q.finish(18);
                    case 22:
                        return q.finish(15);
                    case 23:
                        return d = !1, q.prev = 24, q.next = 27, regeneratorRuntime.awrap(n.text());
                    case 27:
                        q.next = 33; break;
                    case 29:
                        q.prev = 29, q.t1 = q.catch(24), d = !0, location.reload();
                    case 33:
                        for (q.prev = 33, r.classList.add("tooltipped"), f = !0, v = !1, g = void 0, q.prev = 38, p = a[Symbol.iterator](); !(f = (h = p.next()).done); f = !0)(y = h.value).classList.remove("loading");
                        q.next = 46; break;
                    case 42:
                        q.prev = 42, q.t2 = q.catch(38), v = !0, g = q.t2;
                    case 46:
                        q.prev = 46, q.prev = 47, !f && p.return && p.return();
                    case 49:
                        if (q.prev = 49, !v) { q.next = 52; break } throw g;
                    case 52:
                        return q.finish(49);
                    case 53:
                        return q.finish(46);
                    case 54:
                        return q.finish(33);
                    case 55:
                        if (d) { q.next = 76; break } for (b = t.classList.contains("js-branch-destroy"), j = !0, L = !1, w = void 0, q.prev = 60, x = a[Symbol.iterator](); !(j = (k = x.next()).done); j = !0)(E = k.value).classList.toggle("is-deleted", b);
                        q.next = 68; break;
                    case 64:
                        q.prev = 64, q.t3 = q.catch(60), L = !0, w = q.t3;
                    case 68:
                        q.prev = 68, q.prev = 69, !j && x.return && x.return();
                    case 71:
                        if (q.prev = 71, !L) { q.next = 74; break } throw w;
                    case 74:
                        return q.finish(71);
                    case 75:
                        return q.finish(68);
                    case 76:
                    case "end":
                        return q.stop() } }, null, this, [
                [7, 11, 15, 23],
                [16, , 18, 22],
                [24, 29, 33, 55],
                [38, 42, 46, 54],
                [47, , 49, 53],
                [60, 64, 68, 76],
                [69, , 71, 75]
            ]) }) }), define("github/bulk-actions", ["delegated-events", "./sliding-promise-queue", "./query-selector", "./debounce", "./fetch"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e) { var t = document.querySelector(".js-membership-tabs"); if (t) { var n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                t.classList.toggle("d-none", n.length > 0) } } var i = o(t),
            u = o(r),
            l = new i.default;
        (0, e.on)("change", ".js-bulk-actions-toggle", function(t) { var r = t.currentTarget,
                a = (0, n.closest)(r, ".js-bulk-actions-container");
            (0, e.fire)(a, "bulk-actions:update") }), (0, e.on)("bulk-actions:update", ".js-bulk-actions-container", (0, u.default)(function(e) { var t, n, r, o, i, u, c, d, f; return regeneratorRuntime.async(function(m) { for (;;) switch (m.prev = m.next) {
                    case 0:
                        return t = e.target, n = t.querySelector(".js-bulk-actions"), r = Array.from(t.querySelectorAll(".js-bulk-actions-toggle:checked")), o = r.map(function(e) { return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id") }).sort(), i = t.getAttribute("data-bulk-actions-url"), u = t.getAttribute("data-bulk-actions-parameter"), c = o.map(function(e) { return u + "[]=" + e }).join("&"), d = i + "?" + c, m.next = 10, regeneratorRuntime.awrap(l.push((0, a.fetchText)(d)));
                    case 10:
                        f = m.sent, 0 === r.length ? (n.innerHTML = f, s(t)) : (s(t), n.innerHTML = f);
                    case 12:
                    case "end":
                        return m.stop() } }, null, this) }, 100)) }), define("github/bust-frames", [], function() { top !== window && (alert("For security reasons, framing is not allowed."), top.location.replace(document.location)) }), define("github/button-outline", ["exports"], function(e) {
        function t() { a = document.activeElement, document.body && (n || r) && document.body.classList.toggle("intent-mouse", o) } Object.defineProperty(e, "__esModule", { value: !0 }), e.interactingWithMouse = function() { return o }; var n = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
            r = /Macintosh.*Safari/.test(navigator.userAgent),
            a = void 0,
            o = !1;
        document.addEventListener("mousedown", function() { o = !0, a === document.activeElement && t() }, { capture: !0 }), document.addEventListener("keydown", function() { o = !1 }, { capture: !0 }), document.addEventListener("focusin", t, { capture: !0 }) }), define("github/check-run-summary", ["./query-selector", "./fetch", "invariant", "delegated-events"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, r.on)("click", ".js-open-check-run-summary", function(n) { var r, o, s, i, u; return regeneratorRuntime.async(function(l) { for (;;) switch (l.prev = l.next) {
                    case 0:
                        return r = (0, e.closest)(n.currentTarget, ".js-checks-index-item"), (o = (0, e.query)(document, ".js-checks-index-selected-item")).classList.remove("selected"), o.classList.remove("position-relative"), o.classList.remove("js-checks-index-selected-item"), r.classList.add("selected"), r.classList.add("position-relative"), r.classList.add("js-checks-index-selected-item"), s = n.currentTarget.getAttribute("data-check-run-url"), (0, a.default)(s, "github/check-run-summary.js:21"), i = (0, e.query)(document, ".js-check-run-summary-container"), l.next = 13, regeneratorRuntime.awrap((0, t.fetchSafeDocumentFragment)(document, s));
                    case 13:
                        u = l.sent, i.innerHTML = "", i.append(u);
                    case 16:
                    case "end":
                        return l.stop() } }, null, this) }) }), define("github/collector-api", [], function() {
        function e(e) { if (console && console.warn) return console.warn(e) } var t = {}.hasOwnProperty,
            n = [].slice,
            r = { host: "collector.githubapp.com", type: "page_view", dimensions: {}, measures: {}, context: {}, actor: {}, image: new Image, performance: {}, expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"], recordPageView: function() { return this.applyMetaTags(), null != this.app && (null == this.host ? (e("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0)) }, setHost: function(e) { this.host = e }, setApp: function(e) { this.app = e }, setDimensions: function(e) { this.dimensions = e }, addDimensions: function(e) { var n = void 0;
                    null == this.dimensions && (this.dimensions = {}); var r = []; for (n in e)
                        if (t.call(e, n)) { var a = e[n];
                            r.push(this.dimensions[n] = a) }
                    return r }, setMeasures: function(e) { this.measures = e }, addMeasures: function(e) { var n = void 0;
                    null == this.measures && (this.measures = {}); var r = []; for (n in e)
                        if (t.call(e, n)) { var a = e[n];
                            r.push(this.measures[n] = a) }
                    return r }, setContext: function(e) { this.context = e }, addContext: function(e) { var n = void 0;
                    null == this.context && (this.context = {}); var r = []; for (n in e)
                        if (t.call(e, n)) { var a = e[n];
                            r.push(this.context[n] = a) }
                    return r }, setActor: function(e) { this.actor = e }, push: function(e) { return this.applyCall(e) }, enablePerformance: function() { this.performance = this._performanceTiming() }, _recordSrc: function(e, t, n, r) { return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, n, r) }, _src: function() { return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString() }, _queryString: function(e, t, n) { var r = void 0,
                        a = void 0,
                        o = function() { var e = this._params(),
                                t = []; for (r in e) a = e[r], t.push("dimensions[" + r + "]=" + a); return t }.call(this); return o.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), o.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && o.push(this._encodeObject("measures", { performance_timing: this.performance })), o.push(this._encodeObject("context", this._merge(this.context, n))), o.push(this._actor()), o.push(this._encodeObject("dimensions", { cid: this._clientId() })), o.join("&") }, _clearPerformance: function() { this.performance = null }, _performanceTiming: function() { var e = void 0,
                        t = void 0,
                        n = void 0; if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null; var r = {},
                        a = this.expectedPerformanceTimingKeys; for (e = 0, t = a.length; e < t; e++) { var o = a[e];
                        r[o] = null != (n = window.performance.timing[o]) ? n : 0 } var s = [],
                        i = r.navigationStart; for (var u in r) { var l = r[u],
                            c = 0 === l ? null : l - i;
                        s.push(c) } return "1-" + s.join("-") }, _params: function() { return { page: this._encode(this._page()), title: this._encode(this._title()), referrer: this._encode(this._referrer()), user_agent: this._encode(this._agent()), screen_resolution: this._encode(this._screenResolution()), pixel_ratio: this._encode(this._pixelRatio()), browser_resolution: this._encode(this._browserResolution()), tz_seconds: this._encode(this._tzSeconds()), timestamp: (new Date).getTime() } }, _page: function() { try { return document.location.href } catch (e) {} }, _title: function() { try { return document.title } catch (e) {} }, _referrer: function() { var e = void 0;
                    e = ""; try { e = window.top.document.referrer } catch (t) { if (window.parent) try { e = window.parent.document.referrer } catch (e) {} } return "" === e && (e = document.referrer), e }, _agent: function() { try { return navigator.userAgent } catch (e) {} }, _screenResolution: function() { try { return screen.width + "x" + screen.height } catch (e) { return "unknown" } }, _pixelRatio: function() { return window.devicePixelRatio }, _browserResolution: function() { var e = void 0,
                        t = void 0; try { return t = 0, e = 0, "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), t + "x" + e } catch (e) { return "unknown" } }, _tzSeconds: function() { try { return -60 * (new Date).getTimezoneOffset() } catch (e) { return "" } }, _merge: function() { var e = void 0,
                        t = void 0,
                        r = void 0,
                        a = 1 <= arguments.length ? n.call(arguments, 0) : [],
                        o = {}; for (e = 0, r = a.length; e < r; e++) { var s = a[e]; for (t in s) { var i = s[t];
                            o[t] = i } } return o }, _encodeObject: function(e, t) { var n = void 0,
                        r = void 0,
                        a = void 0,
                        o = []; if (null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
                        for (n = 0, r = t.length; n < r; n++) { var s = t[n];
                            o.push(this._encodeObject(e + "[]", s)) } else if (t === Object(t))
                            for (a in t) o.push(this._encodeObject(e + "[" + a + "]", t[a]));
                        else o.push(e + "=" + this._encode(t)); return o.join("&") }, _actor: function() { var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = [],
                        a = this.actor; for (t in a) { var o = a[t],
                            s = "dimensions[actor_" + t + "]"; if (o.join)
                            for (e = 0, n = o.length; e < n; e++) { var i = o[e];
                                r.push(s + "[]=" + this._encode(i)) } else r.push(s + "=" + this._encode(o)) } return r.join("&") }, _getCookie: function(e) { var t = void 0,
                        n = void 0,
                        r = [],
                        a = document.cookie.split(";"); for (t = 0, n = a.length; t < n; t++) { var o = a[t].trim().split("="); if (!(o.length < 2)) { var s = o[0],
                                i = o[1];
                            s === e && r.push({ key: s, value: i }) } } return r }, _clientId: function() { var e = void 0; return "" === (e = this._getClientId()) && (e = this._setClientId()), e }, _getClientId: function() { var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = this._getCookie("_octo"),
                        a = []; for (t = 0, n = r.length; t < n; t++) { var o = r[t].value.split("."); if ("GH1" === o.shift() && o.length > 1) { var s = o.shift().split("-");
                            1 === s.length && (s[1] = "1"), s[0] *= 1, s[1] *= 1, e = o.join("."), a.push([s, e]) } } return e = "", a.length > 0 && (e = a.sort().reverse()[0][1]), e }, _setClientId: function() { var e = (new Date).getTime(),
                        t = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(e / 1e3),
                        n = "GH1.1." + t,
                        r = new Date(e + 63072e6).toUTCString(),
                        a = document.domain; if (null == a) throw new Error("Unable to get document domain"); var o = "." + a.split(".").reverse().slice(0, 2).reverse().join("."); return document.cookie = "_octo=" + n + "; expires=" + r + "; path=/; domain=" + o, t }, _encode: function(e) { return null != e ? window.encodeURIComponent(e) : "" }, applyQueuedCalls: function(e) { var t = void 0,
                        n = void 0,
                        r = []; for (t = 0, n = e.length; t < n; t++) { var a = e[t];
                        r.push(this.applyCall(a)) } return r }, applyCall: function(t) { var n = t[0],
                        r = t.slice(1); return this[n] ? this[n].apply(this, r) : e(n + " is not a valid method") }, applyMetaTags: function() { var e = this.loadMetaTags(); return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context) }, loadMetaTags: function() { var e = void 0,
                        t = void 0,
                        n = { dimensions: {}, measures: {}, context: {}, actor: {} },
                        r = document.getElementsByTagName("meta"); for (e = 0, t = r.length; e < t; e++) { var a = r[e]; if (a.name && a.content) { var o = a.name.match(this.octolyticsMetaTagName); if (o) switch (o[1]) {
                                case "host":
                                    n.host = a.content; break;
                                case "app-id":
                                case "app":
                                    n.app = a.content; break;
                                case "dimension":
                                    this._addField(n.dimensions, o[2], a); break;
                                case "measure":
                                    this._addField(n.measures, o[2], a); break;
                                case "context":
                                    this._addField(n.context, o[2], a); break;
                                case "actor":
                                    this._addField(n.actor, o[2], a) } } } return n }, _addField: function(e, t, n) { n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content }, _objectIsEmpty: function(e) { var n = void 0; for (n in e)
                        if (t.call(e, n)) return !1; return !0 }, octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/ }; if (window._octo) { if (window._octo.slice) { var a = window._octo.slice(0);
                window._octo = r, window._octo.applyQueuedCalls(a) } } else window._octo = r }), define("github/community", ["./query-selector", "./typecast", "invariant", "selector-observer", "delegated-events", "./onfocus"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { var t = e.getAttribute("data-fieldname"); return (0, c.default)("string" == typeof t, "github/community.js:12"), document.querySelectorAll('span[data-fieldname="' + t + '"]') }

        function u(e, t) { if (e.value) { var n = !0,
                    r = !1,
                    a = void 0; try { for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { o.value.textContent = e.value } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } } } var l = s(t),
            c = s(n);
        (0, o.onFocus)(".js-template-form-input", function(e) {
            function t() { u(r, a) }

            function n(e) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var o, s = a[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) { o.value.classList.toggle("CommunityTemplate-highlight--focus", e) } } catch (e) { n = !0, r = e } finally { try {!t && s.return && s.return() } finally { if (n) throw r } } } var r = (0, l.default)(e, HTMLInputElement),
                a = i(r);
            n(!0), r.addEventListener("input", t), r.addEventListener("blur", function e() { n(!1), r.removeEventListener("input", t), r.removeEventListener("blur", e) }) }), (0, a.on)("click", ".js-template-highlight", function(t) {
            (function(t) { var n = t.getAttribute("data-fieldname"); return (0, c.default)("string" == typeof n, "github/community.js:18"), (0, e.query)(document, 'input[data-fieldname="' + n + '"]', HTMLInputElement) })(t.currentTarget).focus() }), (0, r.observe)(".js-templates", function() { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = (0, e.querySelectorAll)(document, ".js-template-form-input", HTMLInputElement)[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var s = a.value;
                    u(s, i(s)) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }) }), define("github/commit-access", ["./debounce", "./fetch", "invariant", "selector-observer", "./query-selector"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t, n) { var r = (0, a.query)(n, ".js-commit-access-submit");
            r.textContent = "branch" === t ? "Create and update " + e : r.getAttribute("data-default") || "" }

        function i(e, t, n) {
            (0, a.query)(n, ".js-commit-access-input").classList.toggle("d-none", "branch" !== t), s(e, t, n) }

        function u(e) { if (e.target.classList.contains("js-commit-access-radio")) { i((0, a.query)(e.currentTarget, ".js-commit-access-ref").value, e.target.value, e.currentTarget) } }

        function l(e) { if (e.target.classList.contains("js-commit-access-ref-input")) {
                (0, a.query)(e.currentTarget, ".js-commit-access-submit", HTMLButtonElement).setAttribute("disabled", !0), f() } } var c = o(e),
            d = o(n),
            f = (0, c.default)(function() { var e, n, r, o, i, u, l, c, f, m, v, g; return regeneratorRuntime.async(function(p) { for (;;) switch (p.prev = p.next) {
                        case 0:
                            if (e = (0, a.query)(document, ".js-commit-access-container"), "" !== (n = (0, a.query)(e, ".js-commit-access-ref-input", HTMLInputElement)).value) { p.next = 4; break } return p.abrupt("return");
                        case 4:
                            return r = n.value, o = (0, a.query)(e, ".js-commit-access-ref", HTMLInputElement), i = n.getAttribute("data-check-url"), u = n.getAttribute("data-check-authenticity-token"), l = (0, a.query)(e, ".js-commit-access-result"), c = (0, a.query)(e, ".js-commit-access-submit", HTMLButtonElement), (0, d.default)(i, "github/commit-access.js:51"), (0, d.default)(u, "github/commit-access.js:52"), (f = new FormData).append("ref", r), f.append("authenticity_token", u), p.prev = 15, p.next = 18, regeneratorRuntime.awrap((0, t.fetchJSON)(i, { method: "post", body: f }));
                        case 18:
                            m = p.sent, v = m.message_html, g = m.normalized_ref, o.value = g, l.innerHTML = v, s(g, "branch", e), c.removeAttribute("disabled"), p.next = 30; break;
                        case 27:
                            p.prev = 27, p.t0 = p.catch(15), l.innerHTML = "";
                        case 30:
                        case "end":
                            return p.stop() } }, null, void 0, [
                    [15, 27]
                ]) }, 300);
        (0, r.observe)(".js-commit-access-container", { add: function(e) { e.addEventListener("change", u), e.addEventListener("keyup", l); var t = e.querySelector(".js-commit-access-radio:checked"),
                    n = (0, a.query)(e, ".js-commit-access-ref-input");
                t ? i(n.value, t.value, e) : s(n.value, "branch", e) }, remove: function(e) { e.removeEventListener("change", u), e.removeEventListener("keyup", l) } }) }), define("github/dashboard", ["delegated-events", "./fetch", "invariant", "selector-observer"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, e.on)("details:toggled", ".js-news-feed-event-group", function(t) { if ((0, a.default)(t instanceof CustomEvent, "github/dashboard.js:10"), t.detail.open) { var n = t.currentTarget,
                    r = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = n.querySelectorAll("[data-hydro-view]")[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) { var l = i.value;
                        (0, e.fire)(l, "view") } } catch (e) { o = !0, s = e } finally { try {!r && u.return && u.return() } finally { if (o) throw s } } } }), (0, r.observe)(".js-dashboard-deferred-module-content", function(e) {
            (0, t.fetchSafeDocumentFragment)(document, e.getAttribute("data-src")).then(function(t) { e.replaceWith(t) }) }), (0, e.on)("navigation:open", ".js-dashboard-content-options", function(e) { var t = e.target.getAttribute("data-src");
            (0, a.default)(t, "github/dashboard.js:27"); var n = document.createElement("div");
            n.classList.add("js-dashboard-deferred-module-content"), n.setAttribute("data-src", t), n.textContent = "Loading..."; var r = e.target.closest(".js-dashboard-module");
            (0, a.default)(r, "github/dashboard.js:34"); var o = r.querySelector(".js-dashboard-content-container");
            (0, a.default)(o, "github/dashboard.js:36"), o.innerHTML = "", o.appendChild(n) }) }), define("github/dashboard/discover-repositories", ["../query-selector", "../typecast", "../in-viewport", "selector-observer", "../remote-form", "../form"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(t) {
            (0, e.query)(t.currentTarget, ".js-dismiss-repository-recommendation").classList.remove("d-none") }

        function u(t) {
            (0, e.query)(t.currentTarget, ".js-dismiss-repository-recommendation").classList.add("d-none") } var l = s(t);
        (0, s(n).default)(".js-discover-repositories .js-ajax-pagination", function(e) { e.classList.contains("is-loading") || (e.classList.add("is-loading"), (0, o.submit)((0, l.default)(e, HTMLFormElement))) }), (0, r.observe)(".js-repository-recommendation", { add: function(e) { e.addEventListener("mouseover", i), e.addEventListener("mouseout", u) }, remove: function(e) { e.removeEventListener("mouseover", i), e.removeEventListener("mouseout", u) } }), (0, a.remoteForm)(".js-dismiss-repository-recommendation", function(t, n) { var r, a, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return r = (0, e.closest)(t, ".js-repository-recommendation-and-restore"), a = (0, e.query)(r, ".js-restore-repo-rec-container"), o = (0, e.query)(r, ".js-repository-recommendation"), i.next = 5, regeneratorRuntime.awrap(n.html());
                    case 5:
                        (s = i.sent) && (o.classList.add("d-none"), a.classList.remove("d-none"), a.style.display = "block");
                    case 7:
                    case "end":
                        return i.stop() } }, null, this) }), (0, a.remoteForm)(".js-restore-repo-rec-form", function(t, n) { var r, a, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return r = (0, e.closest)(t, ".js-repository-recommendation-and-restore"), a = (0, e.query)(r, ".js-restore-repo-rec-container"), o = (0, e.query)(r, ".js-repository-recommendation"), i.next = 5, regeneratorRuntime.awrap(n.html());
                    case 5:
                        (s = i.sent) && (a.classList.add("d-none"), o.classList.remove("d-none"), o.style.display = "block");
                    case 7:
                    case "end":
                        return i.stop() } }, null, this) }) }), define("github/dashboard/recent-interactions", ["../typecast", "selector-observer", "delegated-events", "../query-selector"], function(e, t, n, r) {
        function a(e) { var t = e.currentTarget,
                n = (0, r.query)(t, ".js-hover-popover"); if (n.classList.remove("d-none"), !n.hasAttribute("data-positioned")) { var a = n.clientHeight / 2 - t.clientHeight / 2;
                n.style.left = "-" + (n.clientWidth + 5) + "px", n.style.top = "-" + a + "px", n.setAttribute("data-positioned", "") } n.classList.remove("v-hidden") }

        function o(e) { var t = e.currentTarget,
                n = (0, r.query)(t, ".js-hover-popover");
            n.classList.add("v-hidden"), n.classList.add("d-none") } var s = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.observe)(".js-hover-popover-container", { add: function(e) { e.addEventListener("mouseover", a), e.addEventListener("mouseout", o) }, remove: function(e) { e.removeEventListener("mouseover", a), e.removeEventListener("mouseout", o) } }), (0, n.on)("click", ".js-show-more-recent-items", function(e) {
            (0, s.default)(e.currentTarget, HTMLButtonElement).classList.add("d-none") }) }), define("github/delegated-account-recovery", ["./fetch", "./form", "invariant", "selector-observer", "delegated-events", "./query-selector", "./sudo"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } } var u = i(n),
            l = i(s);
        (0, a.on)("submit", ".js-post-recovery-token", function(n) { n.preventDefault(); var r = this;
            (0, l.default)("high").then(function() {! function(n) { var r, a, s, i;
                    regeneratorRuntime.async(function(u) { for (;;) switch (u.prev = u.next) {
                            case 0:
                                return r = (0, o.query)(document, ".js-delegated-account-recovery-submit", HTMLButtonElement), a = (0, o.query)(document, ".js-create-recovery-token-form", HTMLFormElement), n.classList.remove("failed"), n.classList.add("loading"), r.disabled = !0, u.prev = 5, u.next = 8, regeneratorRuntime.awrap((0, e.fetchForm)(a));
                            case 8:
                                return s = u.sent, u.next = 11, regeneratorRuntime.awrap(s.json());
                            case 11:
                                i = u.sent, (0, t.fillFormValues)(n, { token: i.token, state: i.state_url }), n.submit(), u.next = 21; break;
                            case 16:
                                u.prev = 16, u.t0 = u.catch(5), n.classList.remove("loading"), n.classList.add("failed"), r.disabled = !1;
                            case 21:
                            case "end":
                                return u.stop() } }, null, this, [
                        [5, 16]
                    ]) }(r) }) }), (0, r.observe)("form.js-recovery-provider-auto-redirect", { constructor: HTMLFormElement, initialize: function(e) {! function(e) { regeneratorRuntime.async(function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                (0, u.default)(e instanceof HTMLFormElement, "github/delegated-account-recovery.js:39"), e.submit();
                            case 2:
                            case "end":
                                return t.stop() } }, null, this) }(e) } }) }), define("github/dependencies", ["./fetch", "invariant", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-sub-dependencies", function(t) {
            (0, r.default)(t.currentTarget instanceof HTMLElement, "github/dependencies.js:9"); var n = t.currentTarget,
                a = n.getAttribute("data-loaded"),
                o = n.querySelector(".js-expanded"),
                s = n.querySelector(".js-collapsed"),
                i = n.closest(".js-details-container"); if (o && o.classList.toggle("d-none"), s && s.classList.toggle("d-none"), i && i.classList.toggle("bg-gray-light"), !a) { n.setAttribute("data-loaded", "true"); var u = n.getAttribute("data-sub-dependency-url"),
                    l = n.closest(".js-dependency");
                (0, r.default)(u, "github/dependencies.js:24"), (0, e.fetchSafeDocumentFragment)(document, u).then(function(e) { l && l.after(e) }) } }) }), define("github/details-element", ["delegated-events"], function(e) { var t = null;
        document.addEventListener("keydown", function(e) { "Escape" === e.key && t && (t.open = !1) }), (0, e.on)("toggle", ".js-dropdown-details", function(e) { var n = e.currentTarget;
            n.hasAttribute("open") ? (t && t !== n && (t.open = !1), t = n) : n === t && (t = null) }, { capture: !0 }), (0, e.on)("toggle", "details.js-select-menu", function(t) { var n = t.currentTarget.hasAttribute("open") ? "menu:activate" : "menu:deactivate";
            (0, e.fire)(t.currentTarget, n) }, { capture: !0 }), (0, e.on)("menu:deactivate", "details.js-select-menu", function(e) { e.currentTarget.hasAttribute("open") && e.currentTarget.removeAttribute("open") }) }), define("github/sticky", ["exports", "invariant", "selector-observer"], function(e, t, n) {
        function r() { c.length ? l || (window.addEventListener("resize", a, { passive: !0 }), document.addEventListener("scroll", a, { passive: !0 }), l = !0) : (window.removeEventListener("resize", a, { passive: !0 }), document.removeEventListener("scroll", a, { passive: !0 }), l = !1) }

        function a() { c.forEach(function(e) { if (e.element.offsetHeight > 0) { var t = e.element,
                        n = e.placeholder,
                        r = e.top,
                        a = t.getBoundingClientRect(); if (n) { var i = n.getBoundingClientRect();
                        t.classList.contains("is-stuck") ? i.top > parseInt(r) ? s(e) : function(e) { var t = e.element,
                                n = e.placeholder,
                                r = e.offsetParent,
                                a = e.top; if (n) { var o = t.getBoundingClientRect(),
                                    s = n.getBoundingClientRect(); if (t.style.left = s.left + "px", t.style.width = s.width + "px", r) { var i = r.getBoundingClientRect();
                                    i.bottom < o.height + parseInt(a) && (t.style.top = i.bottom - o.height + "px") } } }(e) : a.top <= parseInt(r) && o(e) } else a.top <= parseInt(r) ? o(e) : s(e) } }) }

        function o(e) { var t = e.element,
                n = e.placeholder,
                r = e.top; if (n) { var a = t.getBoundingClientRect();
                t.style.top = r.toString(), t.style.left = a.left + "px", t.style.width = a.width + "px", t.style.marginTop = "0", t.style.position = "fixed", n.style.display = "block" } t.classList.add("is-stuck") }

        function s(e) { var t = e.element,
                n = e.placeholder;
            n && (t.style.position = "static", t.style.marginTop = n.style.marginTop, n.style.display = "none"), t.classList.remove("is-stuck") }

        function i(e) { if (function(e) { var t = window.getComputedStyle(e).position; return /sticky/.test(t) }(e)) return null; var t = e.previousElementSibling; if (t && t.classList.contains("is-placeholder")) return (0, u.default)(t instanceof HTMLElement, "previousElement must be an HTMLElement -- github/sticky.js:129"), t; var n = document.createElement("div"); return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(e).height, n.className = e.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), (0, u.default)(e.parentNode, "Element must be inserted into the dom -- github/sticky.js:142"), e.parentNode.insertBefore(n, e) } Object.defineProperty(e, "__esModule", { value: !0 }), e.forceStickyRelayout = function() { a() }; var u = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            l = !1,
            c = [];
        (0, n.observe)(".js-sticky", { constructor: HTMLElement, add: function(e) {! function(e) { var t = i(e),
                        n = window.getComputedStyle(e).position;
                    e.style.position = "static"; var r = e.offsetParent;
                    e.style.position = "fixed"; var a = window.getComputedStyle(e).top,
                        o = { element: e, placeholder: t, offsetParent: r, top: "auto" == a ? 0 : a };
                    e.style.position = n, c.push(o) }(e), a(), r() }, remove: function(e) {! function(e) { var t = c.map(function(e) { return e.element }).indexOf(e);
                    c.splice(t, 1) }(e), r() } }) }), define("github/sticky-scroll-into-view", ["exports", "./fragment-target", "./sticky"], function(e, t, n) {
        function r(e) { var t = e.ownerDocument;
            e.scrollIntoView(), t.defaultView.scrollBy(0, -a(t)) }

        function a(e) {
            (0, n.forceStickyRelayout)(); var t = e.querySelectorAll(".js-sticky-offset-scroll"); return Math.max.apply(Math, function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(Array.from(t).map(function(e) { var t = e.getBoundingClientRect(),
                    n = t.top,
                    r = t.height; return 0 === n ? r : 0 }))) } Object.defineProperty(e, "__esModule", { value: !0 }), e.scrollIntoView = r, e.scrollToFragmentTarget = function(e) { var n = (0, t.findFragmentTarget)(e);
            n && r(n) }, e.computeFixedYOffset = a }), define("github/diffs/progressive", ["exports", "../fragment-target", "selector-observer", "delegated-events", "../query-selector", "../sticky-scroll-into-view"], function(e, t, n, r, a, o) {
        function s(e) { var t = i(); if (t) { u(e, t); var n = function(e, t) { var n = function(e, t) { var n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t); if (!n) return; var r = n[1],
                            a = e.querySelector("a[name='" + r + "']"); if (!a) return; var o = a.nextElementSibling; if (!o.querySelector(".js-diff-load-container")) return; return o }(e, t); if (n) return n; return function(e, t) { var n = /^(?:r|commitcomment-)(\d+)$/.exec(t); if (!n) return; var r = n[1],
                            a = e.querySelector("#diff-with-comment-" + r); if (!a) return; return a.closest(".js-file") }(e, t) }(e, t);
                n && ((0, o.scrollIntoView)(n), c(n)) } }

        function i() { return window.location.hash.slice(1) }

        function u(e, n) { var r = (0, t.findElementByFragmentName)(e.ownerDocument, n);
            r && e.contains(r) && (0, o.scrollIntoView)(r) }

        function l() { this.querySelector(".js-diff-progressive-spinner").classList.add("d-none"), this.querySelector(".js-diff-progressive-retry").classList.remove("d-none") }

        function c(e) { var t = (0, a.query)(e, ".js-diff-entry-loader"),
                n = (0, a.query)(e, ".js-diff-placeholder", Element),
                r = (0, a.query)(e, "button.js-diff-load", HTMLButtonElement),
                o = (0, a.query)(e, ".js-button-text");
            n.setAttribute("fill", "url('#animated-diff-gradient')"), o.textContent = r.getAttribute("data-disable-with") || "", r.disabled = !0; var s = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin); return t.src = s.toString(), t.data }

        function d() { this.querySelector(".js-diff-load-button-container").classList.add("d-none"), this.querySelector(".js-diff-load-retry").classList.remove("d-none") }

        function f() { this.setAttribute("data-url", this.src), this.removeAttribute("src") }

        function m(e) { e.src = e.getAttribute("data-url"), e.removeAttribute("data-url") } Object.defineProperty(e, "__esModule", { value: !0 }), e.loadDiff = c, (0, n.observe)(".js-diff-progressive-container", function(e) { s(e); var t = e.querySelector(".js-diff-progressive-loader");
            t && (t.addEventListener("load", function() { s(e) }), t.addEventListener("error", f), t.addEventListener("error", l)) }), (0, r.on)("click", ".js-diff-progressive-retry .js-retry-button", function() { var e = this.closest(".js-diff-progressive-loader");! function(e) { e.querySelector(".js-diff-progressive-spinner").classList.remove("d-none"), e.querySelector(".js-diff-progressive-retry").classList.add("d-none") }(e), m(e) }), (0, n.observe)(".js-diff-load-container", function(e) { var t = e.querySelector(".js-diff-entry-loader");
            t && (t.addEventListener("load", function() { e.closest(".js-file").classList.remove("hide-file-notes-toggle"); var t = i();
                t && u(e, t) }), t.addEventListener("error", f), t.addEventListener("error", d)) }), (0, r.on)("click", ".js-diff-load", function(e) { if (!e.target.classList.contains("js-ignore-this")) { c(this.closest(".js-diff-load-container")) } }), (0, r.on)("click", ".js-diff-load-retry .js-retry-button", function() { var e = this.closest(".js-diff-entry-loader");! function(e) { e.querySelector(".js-diff-load-button-container").classList.remove("d-none"), e.querySelector(".js-diff-load-retry").classList.add("d-none") }(e), m(e) }) }), define("github/diffs/prose", ["../query-selector", "invariant", "delegated-events", "../remote-form", "../history"], function(e, t, n, r, a) { var o = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-rendered, .js-source", function(t) { var n = t.currentTarget;
            n.classList.contains("selected") ? t.preventDefault() : (function(t) { var n = new URL(window.location.href, window.location.origin),
                    r = (0, e.closest)(t, ".js-file-header"),
                    s = t.classList.contains("js-rendered"),
                    i = t.classList.contains("js-source"),
                    u = r.getAttribute("data-short-path");
                (0, o.default)(u, "github/diffs/prose.js:40"); var l = r.getAttribute("data-anchor");
                (0, o.default)(l, "github/diffs/prose.js:42"), n.hash = l, s ? n.searchParams.set("short_path", u) : i && n.searchParams.delete("short_path"), (0, a.replaceState)(null, "", n.toString()) }(n), function(e) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var a, o = document.querySelectorAll(".js-rendered, .js-source")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) a.value.classList.remove("selected") } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } e.classList.add("selected") }(n)) }), (0, r.remoteForm)(".js-prose-diff-toggle-form", function(t, n) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return r = (0, e.closest)(t, ".js-details-container"), a = (0, e.query)(r, ".js-file-content"), s.next = 4, regeneratorRuntime.awrap(n.html());
                    case 4:
                        for (o = s.sent; a.lastChild;) a.removeChild(a.lastChild);
                        a.append(o.html), r.classList.toggle("display-rich-diff"), r.classList.toggle("show-inline-notes");
                    case 9:
                    case "end":
                        return s.stop() } }, null, this) }) }), define("github/diffs/toc-summary", ["delegated-events"], function(e) {
        (0, e.on)("click", ".js-toc-retry", function(e) { var t = e.target.closest(".js-select-menu");
            null != t && (t.classList.add("js-load-contents", "is-loading"), t.classList.remove("has-error")) }) }), define("github/fixed-offset-fragment-navigation-observer", ["./sticky-scroll-into-view", "./hash-change"], function(e, t) {
        (0, function(e) { return e && e.__esModule ? e : { default: e } }(t).default)(function() {
            (0, e.computeFixedYOffset)(document) && (0, e.scrollToFragmentTarget)(document) }) }), define("github/gfm", ["delegated-events"], function(e) {
        (0, e.on)("click", ".email-hidden-toggle", function(e) { var t = this.nextElementSibling;
            t.style.display = "", t.classList.toggle("expanded"), e.preventDefault() }) }), define("github/git-clone-help", ["./query-selector", "delegated-events"], function(e, t) {
        (0, t.on)("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function(t) { var n = t.currentTarget,
                r = (0, e.closest)(n, ".js-git-clone-help-container"),
                a = n.getAttribute("data-url") || ""; if ((0, e.query)(r, ".js-git-clone-help-field", HTMLInputElement).value = a, n.matches(".js-git-protocol-clone-url")) { var o = !0,
                    s = !1,
                    i = void 0; try { for (var u, l = r.querySelectorAll(".js-git-clone-help-text")[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { u.value.textContent = a } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } } var c = r.querySelector(".js-clone-url-button.selected");
            c && c.classList.remove("selected"), (0, e.closest)(n, ".js-clone-url-button").classList.add("selected") }) }), define("github/google-analytics-octolytics", ["./send-beacon", "./google-analytics"], function(e, t) {
        (0, t.providePlugin)("octolyticsPlugin", function(t) { var n = t.get("sendHitTask");
            t.set("sendHitTask", function(t) { n(t), "event" === t.get("hitType") && null != window._octo && (0, e.guaranteedPost)("//" + window._octo.host + "/collect", t.get("hitPayload"), "application/x-www-form-urlencoded") }) }) }), define("github/google-analytics-overrides", ["exports", "./session-storage", "./google-analytics", "./typecast"], function(e, t, n, r) {
        function a(e) { var t = document.querySelectorAll(e); if (t.length > 0) return t[t.length - 1] }

        function o() { return function() { var e = a("meta[name=analytics-location]"); return e ? e.content : window.location.pathname }() + function() { var e = "";
                a("meta[name=analytics-location-query-strip]") || (e = window.location.search); var t = a("meta[name=analytics-location-params]");
                t && (e += (e ? "&" : "?") + t.content); var n = !0,
                    r = !1,
                    o = void 0; try { for (var s, i = document.querySelectorAll("meta[name=analytics-param-rename]")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) { var l = s.value,
                            c = (0, u.default)(l, HTMLMetaElement).content.split(":", 2);
                        e = e.replace(new RegExp("(^|[?&])" + c[0] + "($|=)", "g"), "$1" + c[1] + "$2") } } catch (e) { r = !0, o = e } finally { try {!n && i.return && i.return() } finally { if (r) throw o } } return e }() }

        function s() { var e = window.location.protocol + "//" + window.location.host + o();
            (0, n.setGlobalLocation)(e), (0, n.setGlobalTitle)(a("meta[name=analytics-location]") ? "(masked)" : document.title); var r = a("meta[name=analytics-ec-payload]");
            r && i(r.content); var s = (0, t.getItem)("ga-deferred");
            s && (i(s), (0, t.removeItem)("ga-deferred")); var l = !0,
                c = !1,
                d = void 0; try { for (var f, m = document.querySelectorAll("meta.js-ga-set")[Symbol.iterator](); !(l = (f = m.next()).done); l = !0) { var v = f.value,
                        g = (0, u.default)(v, HTMLMetaElement);
                    (0, n.setDimension)(g.name, g.content) } } catch (e) { c = !0, d = e } finally { try {!l && m.return && m.return() } finally { if (c) throw d } } }

        function i(e) { if (e) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var a, o = JSON.parse(e)[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var s = a.value;
                        window.ga.apply(null, s) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } } Object.defineProperty(e, "__esModule", { value: !0 }), e.updateGlobalFields = s, e.applyEcommercePayload = i, e.trackPageviews = function() { var e = !0,
                t = !1,
                r = void 0; try { for (var a, o = document.querySelectorAll("meta[name=analytics-virtual-pageview]")[Symbol.iterator](); !(e = (a = o.next()).done); e = !0) { var s = a.value;
                    (0, n.trackPageview)((0, u.default)(s, HTMLMetaElement).content, { title: "" }) } } catch (e) { t = !0, r = e } finally { try {!e && o.return && o.return() } finally { if (t) throw r } }(0, n.trackPageview)() }, e.extractEventParams = function(e) { var t = e.trim().split(/\s*,\s*/); return { category: t[0], action: t[1], label: t[2], value: t[3] } }; var u = function(e) { return e && e.__esModule ? e : { default: e } }(r) }), define("github/google-analytics-tracking", ["./google-analytics-overrides", "./google-analytics", "./typecast", "selector-observer", "delegated-events", "./document-ready", "./session-storage", "./google-analytics-octolytics"], function(e, t, n, r, a, o, s) { var i = function(e) { return e && e.__esModule ? e : { default: e } }(n),
            u = document.querySelector("meta[name=google-analytics]");
        u && ((0, t.setGlobalAccount)((0, i.default)(u, HTMLMetaElement).content, "auto"), (0, t.requirePlugin)("octolyticsPlugin"), (0, t.requirePlugin)("ec"), (0, e.updateGlobalFields)()), o.ready.then(function() { return (0, e.trackPageviews)() }), document.addEventListener("pjax:complete", function() { setTimeout(function() {
                (0, e.updateGlobalFields)(), (0, e.trackPageviews)() }, 20) }, !1), (0, r.observe)("[data-ga-load]", function(n) { var r = (0, e.extractEventParams)(n.getAttribute("data-ga-load"));
            r.interactive = !1, (0, t.trackEvent)(r) }), (0, r.observe)("meta[name=analytics-event]", function(n) { var r = (0, e.extractEventParams)(n.content);
            r.interactive = !1, (0, t.trackEvent)(r) }), (0, a.on)("click", "[data-ga-click]", function() {
            (0, e.applyEcommercePayload)(this.getAttribute("data-ga-ec")); var n = (0, e.extractEventParams)(this.getAttribute("data-ga-click"));
            (0, t.trackEvent)(n) }, { capture: !0 }), (0, a.on)("click", "[data-ga-deferred]", function() {
            (0, s.setItem)("ga-deferred", this.getAttribute("data-ga-deferred")) }, { capture: !0 }), (0, a.on)("change", "[data-ga-change]", function() {
            (0, e.applyEcommercePayload)(this.getAttribute("data-ga-ec")); var n = (0, e.extractEventParams)(this.getAttribute("data-ga-change"));
            (0, t.trackEvent)(n) }, { capture: !0 }) }), define("github/homepage/play-video", ["../query-selector", "../typecast", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-video-play, .js-video-close, .is-expanded", function(t) { t.preventDefault(); var n = (0, r.default)(t.currentTarget, HTMLButtonElement),
                a = n.classList.contains("js-video-play"),
                o = (0, e.closest)(n, ".js-video-container"),
                s = (0, e.query)(o, ".js-video-iframe", HTMLIFrameElement),
                i = document.querySelector(".js-video-bg");
            a ? s.src = s.getAttribute("data-src") || "" : s.removeAttribute("src"), o.classList.toggle("is-expanded", a), null != i && i.classList.toggle("is-expanded", a),
                function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = e.getBoundingClientRect(),
                        r = n.top - t,
                        a = n.bottom - window.innerHeight + t;
                    r < 0 ? window.scrollBy(0, r) : a > 0 && window.scrollBy(0, a) }(s, 20) }) }), define("github/octolytics-tracking", ["exports", "./typecast", "./send-beacon", "delegated-events", "./query-selector"], function(e, t, n, r, a) {
        function o(e) { if (window._octo) { var t = Math.floor((new Date).getTime() / 1e3);
                e.timestamp = t; if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) { var r = (0, a.query)(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content;
                    (0, n.guaranteedPost)(r, JSON.stringify(e), "application/vnd.github-octolytics+json") } } } Object.defineProperty(e, "__esModule", { value: !0 }), e.sendOctoEvent = o; var s = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, r.on)("click", "[data-octo-click]", function(e) { if (window._octo) { var t = e.currentTarget,
                    n = t.getAttribute("data-octo-click"),
                    r = {};
                r.event_type = n; var a = {},
                    i = {},
                    u = {},
                    l = [];
                t.hasAttribute("data-octo-dimensions") && (l = (t.getAttribute("data-octo-dimensions") || "").split(",")); var c = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [],
                    d = !0,
                    f = !1,
                    m = void 0; try { for (var v, g = c[Symbol.iterator](); !(d = (v = g.next()).done); d = !0) { var p = v.value,
                            h = (0, s.default)(p, HTMLMetaElement); if (h.name.startsWith("octolytics-dimension-")) { a[h.name.replace(/^octolytics-dimension-/, "")] = h.content } else if (h.name.startsWith("octolytics-measure-")) { i[h.name.replace(/^octolytics-measure-/, "")] = h.content } else if (h.name.startsWith("octolytics-context-")) { u[E = h.name.replace(/^octolytics-context-/, "")] = h.content } else if (h.name.startsWith("octolytics-actor-")) { a[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content } else if (h.name.startsWith("octolytics-")) { r[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content } } } catch (e) { f = !0, m = e } finally { try {!d && g.return && g.return() } finally { if (f) throw m } } if (t.hasAttribute("data-ga-click")) { var y = (t.getAttribute("data-ga-click") || "").split(",").map(function(e) { return e.trim() });
                    a.category = y[0], a.action = y[1] } var b = !0,
                    j = !1,
                    L = void 0; try { for (var w, x = l[Symbol.iterator](); !(b = (w = x.next()).done); b = !0) { var k = w.value.split(":"),
                            E = k.shift();
                        a[E] = k.join(":") } } catch (e) { j = !0, L = e } finally { try {!b && x.return && x.return() } finally { if (j) throw L } } r.dimensions = a, r.measures = i, r.context = u, o(r) } }) }), define("github/hovercards", ["./fetch", "selector-observer", "./octolytics-tracking"], function(e, t, n) {
        function r(e, t) { e.trackedOpen || setTimeout(function() { if (d === e) { e.trackedOpen = !0; var r = {};
                    r.event_type = "user-hovercard-load", r.dimensions = t, (0, n.sendOctoEvent)(r) } }, 500) }

        function a() { l && (l.style.display = "none", l.children[0].innerHTML = "") }

        function o(e, t, n) { if (l) { var r = l.children[0],
                    a = t / 2 - 32;
                r.style.left = a + "px", r.innerHTML = ""; var o = !0,
                    s = !1,
                    i = void 0; try { for (var u, c = e.children[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) { var d = u.value;
                        r.appendChild(d.cloneNode(!0)) } } catch (e) { s = !0, i = e } finally { try {!o && c.return && c.return() } finally { if (s) throw i } } if (n) { var f = r.querySelector(".js-hovercard-highlight");
                    f && (f.innerHTML = n, f.classList.remove("d-none")) } l.style.display = "block" } }

        function s(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return r = "/hovercards?user_id=" + t + "&context=" + n, c[r] || (c[r] = (0, e.fetchSafeDocumentFragment)(document, r)), a.next = 4, regeneratorRuntime.awrap(c[r]);
                    case 4:
                        return a.abrupt("return", a.sent);
                    case 5:
                    case "end":
                        return a.stop() } }, null, this) }

        function i(e) { var t, n, i, u, c, f; return regeneratorRuntime.async(function(m) { for (;;) switch (m.prev = m.next) {
                    case 0:
                        if (t = e.currentTarget, d !== t) { m.next = 3; break } return m.abrupt("return");
                    case 3:
                        return t.append(l), d = t, a(), n = t.closest("[data-hovercard-context]"), i = n ? n.getAttribute("data-hovercard-context") : "", u = t.getAttribute("data-hovercard-user-id") || "", c = t.getAttribute("data-hovercard-highlight"), m.next = 12, regeneratorRuntime.awrap(s(u, i));
                    case 12:
                        f = m.sent, t === d && (o(f, t.getBoundingClientRect().width, c), r(t, { userId: u, context: i }));
                    case 14:
                    case "end":
                        return m.stop() } }, null, this) }

        function u(e) { e.relatedTarget && e.relatedTarget.closest("[data-hovercard-user-id]") || (a(), d = null) } var l = document.querySelector(".js-hovercard-content"),
            c = {},
            d = void 0;
        l && (0, t.observe)("[data-hovercard-user-id]", { add: function(e) { e.addEventListener("mouseover", i), e.addEventListener("mouseout", u) }, remove: function(e) { e.removeEventListener("mouseover", i), e.removeEventListener("mouseout", u) } }) }), define("github/hydro-tracking", ["./metadata", "./send-beacon", "invariant", "delegated-events"], function(e, t, n, r) {
        function a(n, r) { var a = Math.floor((new Date).getTime() / 1e3),
                s = (0, e.getMetadataByName)(document, "hydro-events-url");
            (0, o.default)(s, "hydro-events-url not found -- github/hydro-tracking.js:12"); var i = new URL(s);
            i.searchParams.append("timestamp", a.toString()), i.searchParams.append("hmac", r), (0, t.guaranteedPost)(i.toString(), n, "application/json") } var o = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, r.on)("click", "[data-hydro-click]", function(e) { var t = e.currentTarget,
                n = t.getAttribute("data-hydro-click"),
                r = t.getAttribute("data-hydro-click-hmac");
            n && r && a(n, r) }), (0, r.on)("view", "[data-hydro-view]", function(e) { var t = e.currentTarget,
                n = t.getAttribute("data-hydro-view"),
                r = t.getAttribute("data-hydro-view-hmac");
            n && r && a(n, r) }) }), define("github/iconnav", ["./jquery", "selector-observer"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.observe)(".js-iconnav", function(e) { window.addEventListener("scroll", function() {! function(e) { var t = (0, n.default)(document).scrollTop() + (0, n.default)(".IconNav").height(),
                        r = !0,
                        a = !1,
                        o = void 0; try { for (var s, i = e.querySelectorAll(".js-section")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value,
                                l = (0, n.default)(u),
                                c = t >= l.position().top,
                                d = t <= l.position().top + l.height(); if (c && d) { var f = e.querySelector('.IconNav-item[href="#' + u.id + '"]'); if (f && !f.classList.contains("selected")) { var m = !0,
                                        v = !1,
                                        g = void 0; try { for (var p, h = e.querySelectorAll(".IconNav-item")[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) p.value.classList.remove("selected") } catch (e) { v = !0, g = e } finally { try {!m && h.return && h.return() } finally { if (v) throw g } } f.classList.add("selected") } } } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } }(e) }, { passive: !0 }) }) }), define("github/issues/bookmark-toggler", ["../query-selector", "../fetch", "delegated-events"], function(e, t, n) {
        function r(n) { var r = new FormData,
                a = n.getAttribute("data-authenticity-token"),
                o = (0, e.closest)(n, ".js-bookmark-toggler-container"),
                s = (0, e.query)(document, ".js-bookmarking-error"),
                i = (0, e.query)(s, ".js-bookmarking-error-message"); return r.append("authenticity_token", a), o.classList.toggle("on"), (0, t.fetch)(n.getAttribute("data-url"), { method: "post", body: r }).catch(function(e) { if (e.response) return o.classList.toggle("on"), s.classList.add("visible"), e.response.json().then(function(e) { i.textContent = e.error }) }).catch(function() { o.classList.toggle("on"), s.classList.add("visible"), i.textContent = "Something went wrong." }) }(0, n.on)("click", ".js-bookmark-toggler-container .js-unbookmark-target", function() { r(this) }), (0, n.on)("click", ".js-bookmark-toggler-container .js-bookmark-target", function() { r(this) }) }), define("github/colors", ["exports"], function(e) {
        function t(e) { var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(function(e) { return String(e).toLowerCase().replace(/[^0-9a-f]/g, "") }(e)); if (t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } } Object.defineProperty(e, "__esModule", { value: !0 }), e.getBrightness = function(e) { var n = t(e); if (n) return (299 * n[0] + 587 * n[1] + 114 * n[2]) / 1e3 } }), define.register("randomcolor"),
    function(e, t) { if ("object" == typeof exports) { var n = t(); "object" == typeof module && module && module.exports && (exports = module.exports = n), exports.randomColor = n } else "function" == typeof define && define.amd ? define([], t) : e.randomColor = t() }(this, function() {
        function e(e) { var t = o(function(e) { if ("number" == typeof parseInt(e)) { var t = parseInt(e); if (t < 360 && t > 0) return [t, t] } if ("string" == typeof e)
                    if (c[e]) { var n = c[e]; if (n.hueRange) return n.hueRange } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) { var r = function(e) { e = e.replace(/^#/, ""), e = 3 === e.length ? e.replace(/(.)/g, "$1$1") : e; var t = parseInt(e.substr(0, 2), 16) / 255,
                            n = parseInt(e.substr(2, 2), 16) / 255,
                            r = parseInt(e.substr(4, 2), 16) / 255,
                            a = Math.max(t, n, r),
                            o = a - Math.min(t, n, r),
                            s = a ? o / a : 0; switch (a) {
                            case t:
                                return [(n - r) / o % 6 * 60 || 0, s, a];
                            case n:
                                return [60 * ((r - t) / o + 2) || 0, s, a];
                            case r:
                                return [60 * ((t - n) / o + 4) || 0, s, a] } }(e)[0]; return [r, r] } return [0, 360] }(e.hue)); return t < 0 && (t = 360 + t), t }

        function t(e, t) { if ("monochrome" === t.hue) return 0; if ("random" === t.luminosity) return o([0, 100]); var n = function(e) { return a(e).saturationRange }(e),
                r = n[0],
                s = n[1]; switch (t.luminosity) {
                case "bright":
                    r = 55; break;
                case "dark":
                    r = s - 10; break;
                case "light":
                    s = 55 } return o([r, s]) }

        function n(e, t, n) { var r = function(e, t) { for (var n = a(e).lowerBounds, r = 0; r < n.length - 1; r++) { var o = n[r][0],
                            s = n[r][1],
                            i = n[r + 1][0],
                            u = n[r + 1][1]; if (t >= o && t <= i) { var l = (u - s) / (i - o); return l * t + (s - l * o) } } return 0 }(e, t),
                s = 100; switch (n.luminosity) {
                case "dark":
                    s = r + 20; break;
                case "light":
                    r = (s + r) / 2; break;
                case "random":
                    r = 0, s = 100 } return o([r, s]) }

        function r(e, t) { switch (t.format) {
                case "hsvArray":
                    return e;
                case "hslArray":
                    return u(e);
                case "hsl":
                    var n = u(e); return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                case "hsla":
                    var r = u(e),
                        a = t.alpha || Math.random(); return "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + a + ")";
                case "rgbArray":
                    return i(e);
                case "rgb":
                    return "rgb(" + i(e).join(", ") + ")";
                case "rgba":
                    var o = i(e),
                        a = t.alpha || Math.random(); return "rgba(" + o.join(", ") + ", " + a + ")";
                default:
                    return function(e) {
                        function t(e) { var t = e.toString(16); return 1 == t.length ? "0" + t : t } var n = i(e); return "#" + t(n[0]) + t(n[1]) + t(n[2]) }(e) } }

        function a(e) { e >= 334 && e <= 360 && (e -= 360); for (var t in c) { var n = c[t]; if (n.hueRange && e >= n.hueRange[0] && e <= n.hueRange[1]) return c[t] } return "Color not found" }

        function o(e) { if (null === l) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0])); var t = e[1] || 1,
                n = e[0] || 0,
                r = (l = (9301 * l + 49297) % 233280) / 233280; return Math.floor(n + r * (t - n)) }

        function s(e, t, n) { var r = n[0][0],
                a = n[n.length - 1][0],
                o = n[n.length - 1][1],
                s = n[0][1];
            c[e] = { hueRange: t, lowerBounds: n, saturationRange: [r, a], brightnessRange: [o, s] } }

        function i(e) { var t = e[0];
            0 === t && (t = 1), 360 === t && (t = 359), t /= 360; var n = e[1] / 100,
                r = e[2] / 100,
                a = Math.floor(6 * t),
                o = 6 * t - a,
                s = r * (1 - n),
                i = r * (1 - o * n),
                u = r * (1 - (1 - o) * n),
                l = 256,
                c = 256,
                d = 256; switch (a) {
                case 0:
                    l = r, c = u, d = s; break;
                case 1:
                    l = i, c = r, d = s; break;
                case 2:
                    l = s, c = r, d = u; break;
                case 3:
                    l = s, c = i, d = r; break;
                case 4:
                    l = u, c = s, d = r; break;
                case 5:
                    l = r, c = s, d = i } return [Math.floor(255 * l), Math.floor(255 * c), Math.floor(255 * d)] }

        function u(e) { var t = e[0],
                n = e[1] / 100,
                r = e[2] / 100,
                a = (2 - n) * r; return [t, Math.round(n * r / (a < 1 ? a : 2 - a) * 1e4) / 100, a / 2 * 100] } var l = null,
            c = {};
        s("monochrome", null, [
            [0, 0],
            [100, 0]
        ]), s("red", [-26, 18], [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50]
        ]), s("orange", [19, 46], [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70]
        ]), s("yellow", [47, 62], [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75]
        ]), s("green", [63, 178], [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40]
        ]), s("blue", [179, 257], [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35]
        ]), s("purple", [258, 282], [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42]
        ]), s("pink", [283, 334], [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73]
        ]); var d = function(a) { if (void 0 !== (a = a || {}).seed && null !== a.seed && a.seed === parseInt(a.seed, 10)) l = a.seed;
            else if ("string" == typeof a.seed) l = function(e) { for (var t = 0, n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++) t += e.charCodeAt(n); return t }(a.seed);
            else { if (void 0 !== a.seed && null !== a.seed) throw new TypeError("The seed value must be an integer or string");
                l = null } var o, s, i; if (null !== a.count && void 0 !== a.count) { var u = a.count,
                    c = []; for (a.count = null; u > c.length;) l && a.seed && (a.seed += 1), c.push(d(a)); return a.count = u, c } return o = e(a), s = t(o, a), i = n(o, s, a), r([o, s, i], a) }; return d }), define.registerEnd(), define("github/issues/labels", ["../menu", "../query-selector", "../facebox", "delegated-events", "../number-helpers", "../onfocus", "../typecast", "../debounce", "../fetch", "../colors", "../text", "invariant", "selector-observer", "../inflector", "randomcolor", "../remote-form", "../details", "../updatable-content"], function(e, t, n, r, a, o, s, i, u, l, c, d, f, m, v, g, p, h) {
        function y(e) { return e && e.__esModule ? e : { default: e } }

        function b(e, t) { var n = t; "#" !== n.charAt(0) && (n = "#" + n), e.style.backgroundColor = n; var r = e.querySelector(".js-new-label-color-icon");
            r && function(e, t) { var n = (0, l.getBrightness)(t);
                null != n && (n < 150 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark"))) }(r, t) }

        function j() { var e = document.querySelector(".js-discussion-sidebar-item.sidebar-labels"); if (e) { var n = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels"); if (n) { var a = U.get(e); if (a) { var o = Object.keys(a),
                            s = !0,
                            i = !1,
                            u = void 0; try { for (var l, c = (0, t.querySelectorAll)(n, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { var d = l.value,
                                    f = d.value; if (o.indexOf(f) > -1) { d.checked = a[f]; var m = (0, t.closest)(d, ".js-navigation-item");
                                    m.classList.toggle("selected", d.checked), (0, r.fire)(m, "selectmenu:selected") } } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } U.delete(e) } } } }

        function L(e, n) { e.blur(); var r = (0, t.closest)(e, "form");
            (0, t.query)(r, ".js-new-label-color-input", HTMLInputElement).value = n;
            b((0, t.query)(r, ".js-new-label-color", HTMLButtonElement), n) }

        function w(e) { var t = Array.from(e.querySelectorAll(".js-navigation-item")).filter(function(e) { return "" === e.style.display }); if (!(t.length > 2) && t.every(function(e) { return e.classList.contains("js-label-options") })) { var n = t.filter(function(e) { return e.classList.contains("js-add-label-button") })[0]; if (n) { var r = !0,
                        a = !1,
                        o = void 0; try { for (var s, i = e.querySelectorAll(".navigation-focus")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { s.value.classList.remove("navigation-focus") } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } n.classList.add("navigation-focus") } } }

        function x(e) { var n = function(e) { return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength")) : e.maxLength }(e);! function(e, n, r) { var a = (0, t.closest)(r, ".js-label-characters-remaining-container"),
                    o = (0, t.query)(a, ".js-label-characters-remaining"),
                    s = String(o.getAttribute("data-suffix")),
                    i = n - (0, c.getUtf8StringLength)(e);
                i <= 20 ? (o.textContent = i + " " + s, o.classList.toggle("text-red", i <= 5), o.classList.remove("d-none")) : o.classList.add("d-none") }(e.value, n, e) }

        function k(e, n, r) { var a = n.querySelector(e);
            a && (r ? function(e, n) {
                (0, t.closest)(e, ".js-label-error-container").classList.add("errored"), e.textContent = n, e.classList.remove("d-none") }(a, r[0]) : function(e) {
                (0, t.closest)(e, ".js-label-error-container").classList.remove("errored"), e.classList.add("d-none") }(a)) }

        function E(e, t) { k(".js-label-name-error", e, t.name), k(".js-label-description-error", e, t.description), k(".js-label-color-error", e, t.color) }

        function q(e) { k(".js-label-name-error", e, null), k(".js-label-description-error", e, null), k(".js-label-color-error", e, null) }

        function S(e) { var n = e.querySelectorAll(".js-label-characters-remaining-container"),
                r = !0,
                a = !1,
                o = void 0; try { for (var s, i = n[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value;
                    x((0, t.query)(u, ".js-label-characters-remaining-field", HTMLInputElement)) } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } }

        function T(e, t, n, r, a) { var o = new URL("" + e + encodeURIComponent(t), window.location.origin),
                s = new URLSearchParams(o.search.slice(1)); return s.append("color", n), r && s.append("description", r), a && s.append("id", a), o.search = s.toString(), o.toString() }

        function _(e) { var t = e.querySelector(".js-new-label-description-input");
            t && (t = (0, D.default)(t, HTMLInputElement)); var n = null; return t && t.value.trim().length > 0 && (n = t.value.trim()), n }

        function M(e) { var n = (0, t.query)(e, ".js-new-label-color-input", HTMLInputElement); return n.checkValidity() ? n.value.trim().replace(/^#/, "") : "ededed" }

        function A(e, n) { var r = (0, t.query)(e, ".js-new-label-name-input", HTMLInputElement).value.trim(); return r.length < 1 && (r = n.getAttribute("data-default-name"), (0, B.default)("string" == typeof r, "github/issues/labels.js:241")), r }

        function H(e) { var n, r, a, o, s, i, l, c, d, f, m, v, g; return regeneratorRuntime.async(function(p) { for (;;) switch (p.prev = p.next) {
                    case 0:
                        if (n = e.closest(".js-label-preview-container")) { p.next = 3; break } return p.abrupt("return");
                    case 3:
                        if (r = (0, t.closest)(e, ".js-label-form", HTMLFormElement), a = r.querySelector(".js-new-label-error"), o = r.getAttribute("data-label-id"), s = (0, t.query)(n, ".js-label-preview", HTMLElement), i = A(r, s), l = M(r), c = _(r), d = s.getAttribute("data-url-template"), (0, B.default)("string" == typeof d, "github/issues/labels.js:261"), f = T(d, i, l, c, o), !n.hasAttribute("data-last-preview-url")) { p.next = 18; break } if (m = n.getAttribute("data-last-preview-url"), (0, B.default)("string" == typeof m, "github/issues/labels.js:266"), f !== m) { p.next = 18; break } return p.abrupt("return");
                    case 18:
                        return v = void 0, p.prev = 19, p.next = 22, regeneratorRuntime.awrap((0, u.fetchSafeDocumentFragment)(document, f));
                    case 22:
                        v = p.sent, p.next = 33; break;
                    case 25:
                        return p.prev = 25, p.t0 = p.catch(19), p.next = 29, regeneratorRuntime.awrap(p.t0.response.json());
                    case 29:
                        return g = p.sent, E(r, g), a && (a.textContent = g.message, a.classList.remove("d-none")), p.abrupt("return");
                    case 33:
                        a && (a.textContent = "", a.classList.add("d-none")), q(r), s.innerHTML = "", s.appendChild(v), n.setAttribute("data-last-preview-url", f);
                    case 38:
                    case "end":
                        return p.stop() } }, null, this, [
                [19, 25]
            ]) }

        function C(e, n) {
            (0, t.closest)(e, ".js-details-container").classList.toggle("is-empty", n) }

        function I(e) { var n = (0, t.query)(document, ".js-labels-count"),
                r = (0, a.parseFormattedNumber)(n.textContent) + e;
            n.textContent = (0, a.formatNumber)(r); var o = (0, t.query)(document, ".js-labels-label"); return (0, m.pluralizeNode)(r, o), r }

        function R() { return document.querySelector(".js-issue-sidebar-form .js-issue-labels-container .js-menu-container") || document.querySelector(".js-issue-sidebar-form .js-new-issue-labels-container .js-menu-container") }

        function F() { var t = R();
            t && (0, e.activate)(t) }

        function P(e) { var t = document.querySelector(".js-discussion-sidebar-item.sidebar-labels"); if (t) { var n = 'input[type="checkbox"][name="issue[labels][]"][data-label-name="' + e.replace(/"/g, '\\"') + '"]',
                    r = document.querySelector(n); if (r instanceof HTMLInputElement) { var a = r.value,
                        o = U.get(t) || {};
                    o[a] = !0, U.set(t, o) } } } var O = y(n),
            D = y(s),
            N = y(i),
            B = y(d),
            z = y(v),
            U = new WeakMap;
        (0, o.onInput)(".js-label-filter-field", function(e) { var n = (0, D.default)(e.target, HTMLInputElement),
                r = (0, t.closest)(n, ".js-menu-content").querySelector(".js-new-label-name"); if (r) { var a = n.value.trim();
                r.textContent = a } }), (0, f.observe)(".js-label-characters-remaining-field", function(e) { x((0, D.default)(e, HTMLInputElement)) }), (0, r.on)("filterable:change", ".js-filterable-issue-labels", function(e) {
            (0, B.default)(e instanceof CustomEvent, "github/issues/labels.js:389"); var t = e.target,
                n = t.querySelector(".js-add-label-button"); if (n) { var r = e.detail.inputField.value.trim().toLowerCase(),
                    a = Array.from(t.querySelectorAll(".js-navigation-item")).filter(function(e) { return "" === e.style.display }),
                    o = r.length > 0; if (o) { var s = !0,
                        i = !1,
                        u = void 0; try { for (var l, c = a[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { var d = l.value.querySelector('input[type="checkbox"][name="issue[labels][]"]'); if (d) { if (d.getAttribute("data-label-name").toLowerCase() === r) { o = !1; break } } } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } } n.classList.toggle("d-block", o), n.classList.toggle("d-none", !o), w(t) } }), (0, r.on)("navigation:focus", ".js-label-options", function(e) { var t = e.target.closest(".js-filterable-issue-labels");
            t && w((0, D.default)(t, HTMLElement)) }), (0, o.onFocus)(".js-new-label-color-input", function(e) { var n = (0, t.closest)(e, "form"),
                r = (0, t.query)(n, ".js-new-label-swatches");
            r.classList.remove("d-none"), e.addEventListener("blur", function() { r.classList.add("d-none") }, { once: !0 }) }), (0, o.onInput)(".js-new-label-color-input", function(e) { var n = (0, D.default)(e.target, HTMLInputElement),
                r = n.value.trim(); if (!(r.length < 1))
                if (0 !== r.indexOf("#") && (r = "#" + r, n.value = r), n.checkValidity()) { n.classList.remove("text-red"); var a = (0, t.closest)(n, "form");
                    b((0, t.query)(a, ".js-new-label-color", HTMLButtonElement), r) } else n.classList.add("text-red") }), (0, o.onKey)("keyup", ".js-new-label-color-input", function(e) { var n = (0, D.default)(e.target, HTMLInputElement),
                a = n.value.trim(); if (0 !== a.indexOf("#") && (a = "#" + a, n.value = a), n.checkValidity()) { var o = (0, t.closest)(n, "form");
                b((0, t.query)(o, ".js-new-label-color", HTMLButtonElement), a) }(0, r.fire)(n, "change", !1);
            q((0, t.closest)(n, "form", HTMLFormElement)) }), (0, o.onKey)("keyup", ".js-new-label-description-input", function(e) { var t = (0, D.default)(e.target, HTMLInputElement).form;
            (0, B.default)(t, "github/issues/labels.js:493"), q(t) }), (0, o.onKey)("keyup", ".js-new-label-color-input", function(e) { var t = (0, D.default)(e.target, HTMLInputElement).form;
            (0, B.default)(t, "github/issues/labels.js:500"), q(t) }), (0, o.onKey)("keydown", ".js-label-filter-field", function(e) { if ("Enter" === e.key) { var n = (0, t.query)(document, ".js-issue-sidebar-form .js-filterable-issue-labels").querySelector(".js-navigation-item.navigation-focus"); if (n)
                    if (n.classList.contains("js-add-label-button")) { document.getElementById("label-creation-modal") && (0, O.default)({ div: "#label-creation-modal" }, "label-creation-modal") } else if ("A" === n.tagName) { var r = (0, D.default)(n, HTMLAnchorElement);
                    window.location.href = r.href } } }), (0, r.on)("click", ".js-new-label-color", function(e) { var t = (0, D.default)(e.currentTarget, HTMLButtonElement);
            L(t, (0, z.default)()), H(t) }), (0, r.on)("mousedown", ".js-new-label-color-swatch", function(e) { var n = (0, D.default)(e.currentTarget, HTMLButtonElement),
                r = n.getAttribute("data-color");
            (0, B.default)(r, "must have data-color attribute -- github/issues/labels.js:538"), L(n, r), H(n);
            (0, t.closest)(n, ".js-new-label-swatches").classList.add("d-none") }), document.addEventListener("facebox:reveal", function() { var n = document.querySelector("#facebox .js-new-label-name-input"); if (n) { n = (0, D.default)(n, HTMLInputElement),
                    function() { var e = (0, t.query)(document, ".js-issue-sidebar-form .js-label-filter-field", HTMLInputElement);
                        e.value = e.defaultValue }(),
                    function() { var t = R();
                        t && (0, e.deactivate)(t) }(); var r = (0, t.query)(document, ".js-issue-sidebar-form .js-new-label-name").textContent;
                n.value = r, x(n); var a = (0, t.query)(document, "#facebox .js-new-label-color-input", HTMLInputElement),
                    o = (0, z.default)(); if (a.value.length > 0)
                    for (; a.value === o;) o = (0, z.default)();
                a.value = o; var s = (0, t.query)(document, "#facebox .js-new-label-color", HTMLButtonElement);
                b(s, o), H(s); var i = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels"); if (i) { var u = {},
                        l = !0,
                        c = !1,
                        d = void 0; try { for (var f, m = (0, t.querySelectorAll)(i, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); !(l = (f = m.next()).done); l = !0) { var v = f.value;
                            u[v.value] = v.checked } } catch (e) { c = !0, d = e } finally { try {!l && m.return && m.return() } finally { if (c) throw d } } var g = (0, t.closest)(i, ".js-discussion-sidebar-item.sidebar-labels");
                    U.set(g, u) } } }), (0, g.remoteForm)(".js-new-label-modal-form", function(e, r) { var a, o, s, i, u, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return a = (0, t.query)(e, ".js-new-label-error"), o = void 0, d.prev = 2, d.next = 5, regeneratorRuntime.awrap(r.html());
                    case 5:
                        o = d.sent, d.next = 13; break;
                    case 8:
                        d.prev = 8, d.t0 = d.catch(2), s = d.t0.response.json, a.textContent = s.message, a.classList.remove("d-none");
                    case 13:
                        if (o) { d.next = 15; break } return d.abrupt("return");
                    case 15:
                        return a.classList.add("d-none"), i = (0, t.query)(document, "#facebox .js-new-label-name-input", HTMLInputElement), u = i.value.trim(), (0, n.close)(), (l = document.getElementById("issue-labels-style")) && l.replaceWith(o.html), c = (0, t.query)(document, ".js-issue-labels-menu-content"), d.next = 24, regeneratorRuntime.awrap((0, h.updateContent)(c));
                    case 24:
                        P(u), j(), F();
                    case 27:
                    case "end":
                        return d.stop() } }, null, this, [
                [2, 8]
            ]) }), (0, o.onInput)(".js-label-characters-remaining-field", function(e) { x((0, D.default)(e.target, HTMLInputElement)) }), (0, r.on)("navigation:keydown", ".js-label-emoji-suggester", function(e) { var n = (0, t.closest)(e.target, ".js-suggester-container", HTMLElement);
            x((0, t.query)(n, ".js-suggester-field", HTMLInputElement)) }), (0, r.on)("click", ".js-edit-label-cancel", function(e) { var n = (0, t.closest)(e.target, "form", HTMLFormElement);
            q(n), n.reset(); var r = (0, t.query)(n, ".js-new-label-color-input", HTMLInputElement),
                a = r.value;
            (0, t.query)(n, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = a, S(n), H(r); var o = e.currentTarget.closest(".labels-list-item"); if (o) {
                (0, t.query)(o, ".js-update-label", HTMLElement).classList.add("d-none"); var s = o.querySelector(".js-label-preview"); if (s) { s.classList.add("d-none");
                    (0, t.query)(o, ".js-label-link", HTMLElement).classList.remove("d-none") } var i = o.querySelectorAll(".js-hide-on-label-edit.d-none"),
                    u = !0,
                    l = !1,
                    c = void 0; try { for (var d, f = i[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) { d.value.classList.remove("d-none") } } catch (e) { l = !0, c = e } finally { try {!u && f.return && f.return() } finally { if (l) throw c } } } }), (0, g.remoteForm)(".js-update-label", function(e, n) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return r = void 0, s.prev = 1, s.next = 4, regeneratorRuntime.awrap(n.html());
                    case 4:
                        r = s.sent, s.next = 12; break;
                    case 7:
                        return s.prev = 7, s.t0 = s.catch(1), a = s.t0.response.json, E(e, a), s.abrupt("return");
                    case 12:
                        q(e), (o = (0, t.closest)(e, ".labels-list-item")).replaceWith(r.html);
                    case 15:
                    case "end":
                        return s.stop() } }, null, this, [
                [1, 7]
            ]) }), (0, g.remoteForm)(".js-create-label", function(e, n) { var r, a, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return r = void 0, i.prev = 1, i.next = 4, regeneratorRuntime.awrap(n.html());
                    case 4:
                        r = i.sent, i.next = 12; break;
                    case 7:
                        return i.prev = 7, i.t0 = i.catch(1), a = i.t0.response.json, E(e, a), i.abrupt("return");
                    case 12:
                        e.reset(), q(e), H((0, t.query)(e, ".js-new-label-name-input", HTMLInputElement)), (0, t.query)(document, ".js-label-list").prepend(r.html), I(1), C(e, !1), L(o = (0, t.query)(e, ".js-new-label-color", HTMLButtonElement), (0, z.default)()), S(e), (s = e.closest(".js-details-container")) && (0, p.toggleDetailsTarget)((0, D.default)(s, HTMLElement));
                    case 23:
                    case "end":
                        return i.stop() } }, null, this, [
                [1, 7]
            ]) }), (0, r.on)("click", ".js-toggle-label-delete", function(e) { var n = (0, t.closest)(e.currentTarget, ".labels-list-item"),
                r = (0, t.query)(n, ".js-label-delete-container", HTMLElement),
                a = (0, t.querySelectorAll)(n, ".js-hide-on-label-delete", HTMLElement),
                o = r.classList.contains("d-none");
            r.classList.toggle("d-none"); var s = !0,
                i = !1,
                u = void 0; try { for (var l, c = a[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { l.value.classList.toggle("d-none", o) } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } }), (0, r.on)("click", ".js-details-target-new-label", function() { var e = (0, t.query)(document, ".js-create-label");
            (0, t.query)(e, ".js-new-label-name-input", HTMLInputElement).focus() }), (0, r.on)("click", ".js-edit-label", function(e) { var n = (0, t.closest)(e.currentTarget, ".labels-list-item"),
                r = (0, t.query)(n, ".js-update-label", HTMLElement);
            r.classList.remove("d-none");
            (0, t.query)(r, ".js-new-label-name-input", HTMLInputElement).focus(); var a = n.querySelector(".js-label-preview"); if (a) { a.classList.remove("d-none");
                (0, t.query)(n, ".js-label-link", HTMLElement).classList.add("d-none") } var o = (0, t.querySelectorAll)(n, ".js-hide-on-label-edit", HTMLElement),
                s = !0,
                i = !1,
                u = void 0; try { for (var l, c = o[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { l.value.classList.add("d-none") } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } }), (0, g.remoteForm)(".js-delete-label", function(e, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return e.classList.add("loading"), a.next = 3, regeneratorRuntime.awrap(n.text());
                    case 3:
                        e.classList.remove("loading"), r = I(-1), C(e, 0 === r), (0, t.closest)(e, ".labels-list-item").remove();
                    case 7:
                    case "end":
                        return a.stop() } }, null, this) }); var V = (0, N.default)(function(e) { H((0, D.default)(e.target, HTMLInputElement)) }, 500);
        (0, o.onInput)(".js-new-label-name-input", V), (0, o.onInput)(".js-new-label-description-input", V), (0, o.onInput)(".js-new-label-color-input", V), (0, r.on)("navigation:keydown", ".js-label-emoji-suggester", function(e) { var n = (0, t.closest)(e.target, ".js-suggester-container", HTMLElement);
            H((0, t.query)(n, ".js-suggester-field", HTMLInputElement)) }), (0, r.on)("click", ".js-label-emoji-suggester .js-navigation-item", function(e) { var n = (0, t.closest)(e.target, ".js-suggester-container", HTMLElement);
            H((0, t.query)(n, ".js-suggester-field", HTMLInputElement)) }), (0, o.onKey)("keypress", ".js-new-label-name-input", function(e) { var t = (0, D.default)(e.target, HTMLInputElement),
                n = parseInt(t.getAttribute("data-maxlength"));
            (0, c.getUtf8StringLength)(t.value) >= n && e.preventDefault() }) }), define("github/issues/triage", ["../query-selector", "../fetch", "../menu", "invariant", "delegated-events", "../select-menu/loading"], function(e, t, n, r, a, o) { var s = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        (0, a.on)("change", ".js-issues-list-check", function() { var t = !!document.querySelector(".js-issues-list-check:checked");
            (0, e.query)(document, "#js-issues-toolbar").classList.toggle("triage-mode", t) }), (0, a.on)("change", ".js-issues-list-check", function() { var t = (0, e.querySelectorAll)(document, ".js-issues-list-check:checked", HTMLInputElement).map(function(e) { return [e.name, e.value] }),
                n = document.querySelectorAll("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu"),
                r = !0,
                a = !1,
                s = void 0; try { for (var i, u = n[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) { var l = i.value;
                    (0, o.setLoadingData)(l, t), l.classList.add("js-load-contents") } } catch (e) { a = !0, s = e } finally { try {!r && u.return && u.return() } finally { if (a) throw s } } }), (0, a.on)("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item", function(t) { var r = t.currentTarget,
                a = (0, e.closest)(r, ".js-menu-container").hasAttribute("data-submits-hash"),
                o = (0, e.closest)(r, "form"),
                i = r.classList.contains("selected"),
                u = r.getAttribute("data-name");
            (0, s.default)(u, "github/issues/triage.js:43"); var l = r.getAttribute("data-value");
            (0, s.default)(l, "github/issues/triage.js:45"); var c = document.createElement("input");
            c.setAttribute("type", "hidden"), a ? (c.setAttribute("name", u + "[" + l + "]"), c.setAttribute("value", i ? "1" : "0")) : (c.setAttribute("name", u), c.setAttribute("value", i ? l : "")), Promise.resolve().then(function() {
                (0, n.deactivate)(r.closest(".js-menu-container")) });
            (0, e.query)(o, ".js-issues-triage-fields").appendChild(c), o.classList.add("will-submit") }), (0, a.on)("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container", function(e) { var r = e.currentTarget,
                a = r.querySelector("form.will-submit"); if (a instanceof HTMLFormElement) { r.classList.add("is-loading"); var o = a.action,
                    s = a.method;
                (0, t.fetchJSON)(o, { method: s, body: new FormData(a) }).then(function(e) { return (0, t.fetchPoll)(e.job.url, { headers: { accept: "application/json" } }) }).then(function() {
                    (0, n.deactivate)(r), location.reload() }).catch(function() { r.classList.add("has-error") }), a.classList.remove("will-submit"), e.preventDefault() } }) }), define("github/issues/undo-timeline-event", ["../jquery", "../typecast", "invariant"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } } var a = r(e),
            o = r(t),
            s = r(n);
        (0, a.default)(document).on("ajaxSuccess", ".js-undo-issue-event-form", function(e) { var t = (0, o.default)(e.target, HTMLFormElement),
                n = t.getAttribute("action");
            (0, s.default)("string" == typeof n, "github/issues/undo-timeline-event.js:10"), t.remove(); for (var r = document.querySelectorAll('.js-undo-issue-event-form[action="' + n + '"]'), a = 0; a < r.length; a++) r[a].remove() }) }), define("github/labels/maintainer-label-prompt", ["../typecast", "../find-next-element-sibling", "delegated-events", "../query-selector", "../form"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } } var s = o(e),
            i = o(t);
        (0, n.on)("click", ".js-details-target-new-label", function(e) { var t = (0, s.default)(e.target, HTMLElement),
                n = (0, i.default)(t, "Popover"); if (n) { var o = (0, r.query)(n, "form", HTMLFormElement);
                (0, a.submit)(o) } }) }), define("github/launch/credentials", ["../fetch", "delegated-events", "selector-observer", "../remote-form"], function(e, t, n, r) {
        (0, n.observe)(".js-launch-credz-form", function() {
            (0, r.remoteForm)(".js-launch-credz-form", function(n, r) { var a, o; return regeneratorRuntime.async(function(n) { for (;;) switch (n.prev = n.next) {
                        case 0:
                            return a = void 0, n.prev = 1, n.next = 4, regeneratorRuntime.awrap(r.json());
                        case 4:
                            a = n.sent, n.next = 10; break;
                        case 7:
                            n.prev = 7, n.t0 = n.catch(1), n.t0.response && console.error("Error: got HTTP " + n.t0.response.status + "!");
                        case 10:
                            if (a) { n.next = 12; break } return n.abrupt("return");
                        case 12:
                            if (!a.json.success) { n.next = 17; break }(0, t.fire)(document, "facebox:close"),
                            function() { var t, n, r, a;
                                regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            if (t = document.querySelector(".js-launch-configuration-file-validation-container")) { o.next = 3; break } return o.abrupt("return");
                                        case 3:
                                            if (n = t.getAttribute("data-url")) { o.next = 6; break } return o.abrupt("return");
                                        case 6:
                                            return o.next = 8, regeneratorRuntime.awrap((0, e.fetchSafeDocumentFragment)(document, n));
                                        case 8:
                                            if (r = o.sent) { o.next = 11; break } return o.abrupt("return");
                                        case 11:
                                            if (a = t.querySelector(".js-launch-configuration-validation")) { o.next = 14; break } return o.abrupt("return");
                                        case 14:
                                            a.replaceWith(r);
                                        case 15:
                                        case "end":
                                            return o.stop() } }, null, this) }(), n.next = 21; break;
                        case 17:
                            if (o = document.querySelector(".js-launch-credz-form-error-message")) { n.next = 20; break } return n.abrupt("return");
                        case 20:
                            o.textContent = a.json.error_message;
                        case 21:
                        case "end":
                            return n.stop() } }, null, this, [
                    [1, 7]
                ]) }) }) }), define("github/legacy/behaviors/ajax_error", ["../../jquery", "../../inspect", "../../failbot", "delegated-events"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o() { var e = document.getElementById("ajax-error-message");
            e && e.classList.add("visible") }

        function s() { var e = document.getElementById("ajax-error-message");
            e && e.classList.remove("visible") } var i = a(e),
            u = a(t),
            l = function(e) {
                function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.name = "DataRemoteError", n.message = e, n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, Error), t }();
        (0, i.default)(document).on("ajaxError", "[data-remote]", function(e, t, r, a) { var s = void 0,
                i = void 0,
                c = void 0,
                d = void 0; if (this === e.target && "abort" !== a && "canceled" !== a) { var f = "." + this.className.split(" ").sort().join("."),
                    m = new l(a + " (" + t.status + ") from " + f); if ((0, n.reportError)(m, { dataRemoteTarget: (0, u.default)(this), dataRemoteMethod: null != (s = this.getAttribute("method")) ? s : "GET", dataRemoteUrl: null != (i = null != (c = this.href) ? c : this.action) ? i : window.location.href, dataRemoteType: null != (d = this.getAttribute("data-type")) ? d : "intelligent guess" }), /<html/.test(t.responseText)) throw o(), e.stopImmediatePropagation(), m; return setTimeout(function() { if (!e.isDefaultPrevented()) throw o(), m }, 0) } }), (0, i.default)(document).on("ajaxSend", "[data-remote]", function() { s() }), (0, r.on)("click", ".js-ajax-error-dismiss", function() { s() }) }), define("github/legacy/behaviors/ajax_loading", ["../../jquery"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.default)(document).on("ajaxSend", "[data-remote]", function(e) { if (this === e.target && !e.isDefaultPrevented()) return (0, t.default)(this).addClass("loading") }), (0, t.default)(document).on("ajaxComplete", "[data-remote]", function(e) { if (this === e.target) return (0, t.default)(this).removeClass("loading") }) }), define("github/legacy/behaviors/analytics", ["../../document-ready"], function(e) { e.ready.then(function() { window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"]) }), document.addEventListener("pjax:complete", function() { window._octo.push(["recordPageView"]) }) }), define("github/legacy/behaviors/autocheck", ["../../throttled-input", "../../typecast", "../../query-selector", "invariant", "../../visible", "../../onfocus", "../../sliding-promise-queue", "delegated-events", "../../fetch", "../../form"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e, t) { var n = x.get(e);
            n || (n = new w.default, x.set(e, n)), t.append("authenticity_token", function(e) { var t = e.getAttribute("data-autocheck-authenticity-token"); if (t) return t; var n = e.form;
                (0, j.default)(n, "github/legacy/behaviors/autocheck.js:34"); var r = n.querySelector("input[name=authenticity_token]"); if (r instanceof HTMLInputElement) return r.value; throw new Error("csrf token not found") }(e)); var r = e.getAttribute("data-autocheck-url"); return (0, j.default)(r, "github/legacy/behaviors/autocheck.js:56"), n.push((0, u.fetchText)(r, { method: "post", body: t })) }

        function d(e) { f(e), e.classList.add("errored"); var t = e.querySelector("p.note");
            t && t.classList.add("d-none") }

        function f(e) { e.classList.remove("errored", "successed", "warn"); var t = e.querySelector("p.note");
            t && t.classList.remove("d-none"); var n = e.querySelector("dd.error");
            n && n.remove(); var r = e.querySelector("dd.warning");
            r && r.remove() }

        function m(e) { return e.entries ? [].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e.entries())).sort().toString() : null }

        function v(e) { var t = new FormData;
            t.append("value", e.value), (0, i.fire)(e, "autocheck:send", { body: t }); var n = m(t); if (!n || n !== k.get(e)) return k.set(e, n), t }

        function g(e) { var t, r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        if (a = function(n) { e.classList.toggle("is-autocheck-loading", n), t.classList.toggle("is-loading", n) }, t = (0, n.closest)(e, "dl.form-group"), r = v(e)) { s.next = 5; break } return s.abrupt("return");
                    case 5:
                        if (f(t), e.classList.remove("is-autocheck-successful", "is-autocheck-errored"), e.value.trim()) { s.next = 10; break } return (0, i.fire)(e, "autocheck:complete"), s.abrupt("return");
                    case 10:
                        return a(!0), s.prev = 11, s.next = 14, regeneratorRuntime.awrap(c(e, r));
                    case 14:
                        o = s.sent, e.classList.add("is-autocheck-successful"), t.classList.add("successed"), (0, i.fire)(e, "autocheck:success", o), s.next = 31; break;
                    case 20:
                        if (s.prev = 20, s.t0 = s.catch(11), !(0, L.default)(e)) { s.next = 31; break } return e.classList.add("is-autocheck-errored"), d(t), s.t1 = t, s.next = 28, regeneratorRuntime.awrap(function(e) { var t, n; return regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, regeneratorRuntime.awrap(p(e));
                                    case 2:
                                        return t = r.sent, (n = document.createElement("dd")).classList.add("error"), e.response instanceof Response && h(e.response) ? n.innerHTML = t : n.textContent = t, r.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return r.stop() } }, null, this) }(s.t0));
                    case 28:
                        s.t2 = s.sent, s.t1.append.call(s.t1, s.t2), (0, i.fire)(e, "autocheck:error");
                    case 31:
                        a(!1), (0, i.fire)(e, "autocheck:complete");
                    case 33:
                    case "end":
                        return s.stop() } }, null, this, [
                [11, 20]
            ]) }

        function p(e) { var t, n, r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        if (t = "Something went wrong", e.response) { a.next = 3; break } return a.abrupt("return", t);
                    case 3:
                        return n = (0, b.default)(e.response, Response), a.next = 6, regeneratorRuntime.awrap(n.text());
                    case 6:
                        if (r = a.sent, !/<html/.test(r)) { a.next = 9; break } return a.abrupt("return", t);
                    case 9:
                        return a.abrupt("return", r);
                    case 10:
                    case "end":
                        return a.stop() } }, null, this) }

        function h(e) { return /text\/html/.test(e.headers.get("Content-Type")) }

        function y(e) { g(e) } var b = l(t),
            j = l(r),
            L = l(a),
            w = l(s),
            x = new WeakMap,
            k = new WeakMap;
        (0, i.on)("change", "input[data-autocheck-url]", function(e) { g((0, b.default)(e.currentTarget, HTMLInputElement)) }), (0, o.onFocus)("input[data-autocheck-url]", function(t) { var n = (0, b.default)(t, HTMLInputElement);
            (0, e.addThrottledInputEventListener)(n, y, { wait: 300 }), n.addEventListener("blur", function() { return (0, e.removeThrottledInputEventListener)(n, y) }, { once: !0 }) }) }), define("github/legacy/behaviors/autocomplete", ["selector-observer", "../../throttled-input", "../../jquery", "../../visible", "../../navigation", "../../sliding-promise-queue", "../../fetch", "delegated-events"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e, t) { return function() { return e.apply(t, arguments) } } var c = u(n),
            d = u(r),
            f = u(o),
            m = new(function() {
                function e() { this.onNavigationOpen = l(this.onNavigationOpen, this), this.onNavigationKeyDown = l(this.onNavigationKeyDown, this), this.onInputChange = l(this.onInputChange, this), this.onResultsMouseDown = l(this.onResultsMouseDown, this), this.onInputBlur = l(this.onInputBlur, this), this.onInputFocus = l(this.onInputFocus, this), this.focusedInput = this.focusedResults = null, this.mouseDown = !1, this.fetchQueue = new f.default } return e.prototype.bindEvents = function(e, n) {
                    (0, c.default)(e).on("blur", this.onInputBlur), (0, t.addThrottledInputEventListener)(e, this.onInputChange), (0, c.default)(n).on("mousedown", this.onResultsMouseDown), n.addEventListener("navigation:open", this.onNavigationOpen), n.addEventListener("navigation:keydown", this.onNavigationKeyDown) }, e.prototype.unbindEvents = function(e, n) {
                    (0, c.default)(e).off("blur", this.onInputBlur), (0, t.removeThrottledInputEventListener)(e, this.onInputChange), (0, c.default)(n).off("mousedown", this.onResultsMouseDown), n.removeEventListener("navigation:open", this.onNavigationOpen), n.removeEventListener("navigation:keydown", this.onNavigationKeyDown) }, e.prototype.onInputFocus = function(e) { var t = (0, c.default)(e).closest(".js-autocomplete-container").find(".js-autocomplete")[0];
                    this.focusedInput = e, this.focusedResults = t, this.bindEvents(e, t), (0, c.default)(e).attr("autocomplete", "off"), this.fetchResults(e.value) }, e.prototype.onInputBlur = function() { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).keepResultsOpen,
                        t = this.focusedInput,
                        n = this.focusedResults;
                    this.mouseDown || (e || this.hideResults(), this.inputValue = null, this.focusedInput = this.focusedResults = null, this.unbindEvents(t, n)) }, e.prototype.onResultsMouseDown = function() { this.mouseDown = !0; var e = function(t) { return function() { return t.mouseDown = !1, (0, c.default)(document).off("mouseup", e) } }(this);
                    (0, c.default)(document).on("mouseup", e) }, e.prototype.onInputChange = function() { var e = this.focusedInput;
                    this.inputValue !== e.value && ((0, c.default)(e).removeData("autocompleted"), (0, i.fire)(e, "autocomplete:autocompleted:changed")), this.fetchResults(e.value) }, e.prototype.fetchResults = function(e) { var t = this.focusedResults.getAttribute("data-search-url"); if (t) { var n = (0, c.default)(this.focusedInput).closest(".js-autocomplete-container"),
                            r = e.trim() ? (t += ~t.indexOf("?") ? "&" : "?", t += "q=" + encodeURIComponent(e), n.addClass("is-sending"), (0, s.fetchText)(t)) : (0, c.default)(this.focusedResults).find("[data-autocomplete-value]").length > 0 ? this.hideResults() : Promise.resolve(""); return this.fetchQueue.push(r).then(function(t) { return function(n) { return (0, c.default)(t.focusedResults).find(".js-autocomplete-results").html(n), t.onResultsChange(e) } }(this)).catch(function(e) { return e }).then(function() { n.removeClass("is-sending") }) } }, e.prototype.onResultsChange = function(e) { if (0 === (0, c.default)(this.focusedResults).find("[data-autocomplete-value]").length) this.hideResults();
                    else if (this.inputValue !== e && (this.inputValue = e, this.showResults(), (0, c.default)(this.focusedInput).is("[data-autocomplete-autofocus]"))) { var t = this.focusedResults.querySelector(".js-navigation-container");
                        t && (0, a.focus)(t) } }, e.prototype.onNavigationKeyDown = function(e) { if (null !== e.target.getAttribute("data-autocomplete-value")) switch (e.detail.hotkey) {
                        case "Tab":
                            this.onNavigationOpen(e), e.preventDefault(); break;
                        case "Escape":
                            this.hideResults(), e.preventDefault() } }, e.prototype.onNavigationOpen = function(e) { if (null !== e.target.getAttribute("data-autocomplete-value")) { var t = e.target; if (t.classList.contains("disabled")) this.focusedInput !== document.activeElement && this.onInputBlur({ keepResultsOpen: !0 });
                        else { var n = this.inputValue,
                                r = (0, c.default)(t).attr("data-autocomplete-value");
                            this.inputValue = r, (0, c.default)(this.focusedInput).val(r), (0, c.default)(this.focusedInput).data("autocompleted", r), (0, i.fire)(this.focusedInput, "autocomplete:autocompleted:changed"), (0, i.fire)(this.focusedInput, "autocomplete:result", { text: r, query: n }), (0, c.default)(t).removeClass("active"), this.focusedInput === document.activeElement ? this.hideResults() : this.onInputBlur() } } }, e.prototype.showResults = function(e, t) { if (null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), !(0, d.default)(t)) { var n = (0, c.default)(e).offset().top + (0, c.default)(e).innerHeight(),
                            r = (0, c.default)(e).innerWidth();
                        (0, c.default)(t).css({ display: "block", position: "absolute", width: r + 2 }), (0, c.default)(t).offset({ top: n + 5 }), (0, c.default)(e).addClass("js-navigation-enable"); var o = t.querySelector(".js-navigation-container"); return o && (0, a.push)(o), (0, c.default)(t).show() } }, e.prototype.hideResults = function(e, t) { if (null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), this.inputValue = null, t && (0, d.default)(t)) {
                        (0, c.default)(e).removeClass("js-navigation-enable"); var n = t.querySelector(".js-navigation-container"); return n && (0, a.pop)(n), (0, c.default)(t).hide() } }, e }());
        (0, e.observe)(".js-autocomplete-field", function(e) { e.addEventListener("focus", function() { return m.onInputFocus(e) }), document.activeElement === e && m.onInputFocus(e) }) }), define("github/legacy/behaviors/billing/addons", ["selector-observer", "../../../throttled-input", "../../../visible", "../../../pjax", "../../../history", "../../../fetch", "../../../sliding-promise-queue"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(e) { var t = e.getAttribute("data-item-name") || "items",
                n = parseInt(e.getAttribute("data-item-minimum")) || 0,
                s = parseInt(e.getAttribute("data-item-count")) || 0,
                i = Math.max(n, parseInt(e.value) || 0),
                u = i > 300,
                l = document.querySelector(".js-purchase-button");
            l instanceof HTMLButtonElement && (l.disabled = 0 === i || u); var d = document.querySelector(".js-downgrade-button");
            d instanceof HTMLButtonElement && (d.disabled = i === s); var f = new URL(e.getAttribute("data-url"), window.location.origin),
                m = new URLSearchParams(f.search.slice(1));
            m.append(t, i.toString()), f.search = m.toString(), c.push((0, o.fetchJSON)(f)).then(function(e) { var t = document.querySelector(".js-contact-us");
                t && t.classList.toggle("d-none", !u); var n = document.querySelector(".js-payment-summary");
                n && n.classList.toggle("d-none", u); var o = document.querySelector(".js-billing-section");
                o && o.classList.toggle("has-removed-contents", e.free); var s = document.querySelector(".js-upgrade-info");
                s && s.classList.toggle("d-none", i <= 0); var l = document.querySelector(".js-downgrade-info");
                l && l.classList.toggle("d-none", i >= 0); var c = document.querySelector(".js-extra-seats-line-item");
                c && c.classList.toggle("d-none", e.no_additional_seats); var d = e.selectors; for (var f in d) { var m = !0,
                        v = !1,
                        g = void 0; try { for (var p, h = document.querySelectorAll(f)[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) p.value.textContent = d[f] } catch (e) { v = !0, g = e } finally { try {!m && h.return && h.return() } finally { if (v) throw g } } } return (0, a.replaceState)((0, r.getState)(), "", e.url) }) } var l = i(n),
            c = new(i(s).default);
        (0, e.observe)(".js-addon-purchase-field", function(e) {
            (0, l.default)(e) && u(e), (0, t.addThrottledInputEventListener)(e, function() { u(e) }) }), (0, e.observe)(".js-addon-downgrade-field", function(e) {
            (0, l.default)(e) && u(e), e.addEventListener("change", function() { u(e) }) }) }), define("github/legacy/behaviors/bundle-download-stats", ["../../jquery", "../../document-ready", "../../stats"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a() { var e = void 0,
                t = void 0,
                n = void 0,
                r = function() { try { return localStorage.getItem("bundle-urls") } catch (e) {} }();
            r && (t = function() { try { return JSON.parse(r) } catch (e) {} }()), null == t && (t = {}); var a = function() { var e = void 0,
                    t = void 0,
                    n = void 0,
                    r = void 0,
                    a = void 0,
                    s = void 0,
                    i = {},
                    u = (0, o.default)("script"); for (t = 0, r = u.length; t < r; t++) { var l = u[t];
                    null != (s = l.src.match(/\/([\w-]+)-[0-9a-f]{64}\.js$/)) && (e = s[1], i[e + ".js"] = l.src) } var c = (0, o.default)("link[rel=stylesheet]"); for (n = 0, a = c.length; n < a; n++) { var d = c[n];
                    null != (s = d.href.match(/\/([\w-]+)-[0-9a-f]{64}\.css$/)) && (e = s[1], i[e + ".css"] = d.href) } return i }(); try { localStorage.setItem("bundle-urls", JSON.stringify(a)) } catch (e) {} var i = function() { var r = []; for (e in a) n = a[e], t[e] !== n && r.push(e); return r }();
            i.length && (0, s.default)({ downloadedBundles: i }) } var o = r(e),
            s = r(n);
        t.loaded.then(a) }), define("github/legacy/behaviors/clippable_behavior", ["../../query-selector", "../../clipboard", "invariant", "delegated-events"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, r.on)("click", ".js-zeroclipboard", function(n) { var r = n.currentTarget;
            (0, a.default)(r instanceof HTMLElement, "github/legacy/behaviors/clippable_behavior.js:46"); var o = r.getAttribute("data-clipboard-text"); if (o)(0, t.copyText)(o);
            else { var s = (0, e.closest)(r, ".js-zeroclipboard-container"),
                    i = (0, e.query)(s, ".js-zeroclipboard-target");
                i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement ? "hidden" === i.type ? (0, t.copyText)(i.value) : (0, t.copyInput)(i) : (0, t.copyNode)(i) } var u = r.getAttribute("data-copied-hint"),
                l = r.getAttribute("aria-label");
            u && u !== l && (r.setAttribute("aria-label", u), r.addEventListener("mouseleave", function() { null != l ? r.setAttribute("aria-label", l) : r.removeAttribute("aria-label") }, { once: !0 })), r.blur() }) }), define("github/legacy/behaviors/commenting/ajax", ["../../../form", "../../../remote-form", "../../../updatable-content", "../../../query-selector"], function(e, t, n, r) {
        function a(e) { var t = e.querySelector(".js-comment-form-error");
            t && (t.style.display = "none") }(0, t.remoteForm)(".js-new-comment-form", function(t, o) { var s, i, u, l, c, d, f, m, v, g, p, h; return regeneratorRuntime.async(function(y) { for (;;) switch (y.prev = y.next) {
                    case 0:
                        return s = void 0, a(t), y.prev = 2, y.next = 5, regeneratorRuntime.awrap(o.json());
                    case 5:
                        s = y.sent, y.next = 11; break;
                    case 8:
                        y.prev = 8, y.t0 = y.catch(2),
                            function(e, t) { var n = "You can't comment at this time"; if (t.response && 422 === t.response.status) { var r = t.response.json;
                                    r.errors && (n += " \u2014 your comment " + r.errors.join(", ")) } n += ". "; var a = e.querySelector(".js-comment-form-error");
                                a && (a.style.display = "block", a.classList.remove("d-none"), a.textContent = n) }(t, y.t0);
                    case 11:
                        if (s) { y.next = 13; break } return y.abrupt("return");
                    case 13:
                        for (t.reset(), i = !0, u = !1, l = void 0, y.prev = 17, c = (0, r.querySelectorAll)(t, ".js-resettable-field", HTMLInputElement)[Symbol.iterator](); !(i = (d = c.next()).done); i = !0) f = d.value, (0, e.changeValue)(f, f.getAttribute("data-reset-value") || "");
                        y.next = 25; break;
                    case 21:
                        y.prev = 21, y.t1 = y.catch(17), u = !0, l = y.t1;
                    case 25:
                        y.prev = 25, y.prev = 26, !i && c.return && c.return();
                    case 28:
                        if (y.prev = 28, !u) { y.next = 31; break } throw l;
                    case 31:
                        return y.finish(28);
                    case 32:
                        return y.finish(25);
                    case 33:
                        (m = (0, r.query)(t, ".js-write-tab")).click(), v = s.json.updateContent; for (g in v) p = v[g], (h = document.querySelector(g)) ? (0, n.replaceContent)(h, p) : console.warn("couldn't find " + g + " for immediate update");
                    case 37:
                    case "end":
                        return y.stop() } }, null, this, [
                [2, 8],
                [17, 21, 25, 33],
                [26, , 28, 32]
            ]) }) }), define("github/legacy/behaviors/commenting/close", ["selector-observer"], function(e) {
        (0, e.observe)(".js-comment-and-button", function(e) {
            function t() { var t = this.value.trim();
                t !== a && (a = t, e.textContent = t ? e.getAttribute("data-comment-text") : r) } var n = e.form.querySelector(".js-comment-field"),
                r = e.textContent,
                a = !1; return { add: function() { n.addEventListener("input", t), n.addEventListener("change", t) }, remove: function() { n.removeEventListener("input", t), n.removeEventListener("change", t) } } }) }), define("github/legacy/behaviors/commenting/markdown-toolbar", ["../../../query-selector", "../../../menu", "delegated-events", "../../../hotkey", "invariant", "../../../onfocus"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { return e.trim().split("\n").length > 1 }

        function u(e, t) { return Array(t + 1).join(e) }

        function l(e, t) { var r = e.value.slice(e.selectionStart, e.selectionEnd),
                a = void 0;
            a = t.orderedList ? function(e) { var t = /^\d+\.\s+/,
                        n = void 0,
                        r = void 0,
                        a = e.value.slice(e.selectionStart, e.selectionEnd),
                        o = a.split("\n"); if (o.every(function(e) { return t.test(e) })) o = o.map(function(e) { return e.replace(t, "") }), a = o.join("\n");
                    else { o = function() { var e = void 0,
                                t = void 0,
                                n = void 0,
                                r = []; for (n = e = 0, t = o.length; e < t; n = ++e) { var a = o[n];
                                r.push(n + 1 + ". " + a) } return r }(), a = o.join("\n"); var s = c(e),
                            i = s.newlinesToAppend,
                            u = s.newlinesToPrepend;
                        r = e.selectionStart + i.length, n = r + a.length, a = i + a + u } return { text: a, selectionStart: r, selectionEnd: n } }(e) : t.multiline && i(r) ? function(e, t) { var n = t.prefix,
                        r = t.suffix,
                        a = t.surroundWithNewlines,
                        o = e.value.slice(e.selectionStart, e.selectionEnd),
                        s = e.selectionStart,
                        i = e.selectionEnd,
                        u = o.split("\n"); if (u.every(function(e) { return e.startsWith(n) && e.endsWith(r) })) o = u.map(function(e) { return e.slice(n.length, e.length - r.length) }).join("\n"), i = s + o.length;
                    else if (o = u.map(function(e) { return n + e + r }).join("\n"), a) { var l = c(e),
                            d = l.newlinesToAppend,
                            f = l.newlinesToPrepend;
                        s += d.length, i = s + o.length, o = d + o + f } return { text: o, selectionStart: s, selectionEnd: i } }(e, t) : function(e, t) { var n = void 0,
                        r = void 0,
                        a = t.prefix,
                        o = t.suffix,
                        s = t.blockPrefix,
                        u = t.blockSuffix,
                        l = t.replaceNext,
                        d = t.prefixSpace,
                        f = t.scanFor,
                        v = t.surroundWithNewlines,
                        g = e.selectionStart,
                        p = e.selectionEnd,
                        h = e.value.slice(e.selectionStart, e.selectionEnd),
                        y = i(h) && s.length > 0 ? s + "\n" : a,
                        b = i(h) && u.length > 0 ? "\n" + u : o; if (d) { var j = e.value[e.selectionStart - 1];
                        0 === e.selectionStart || null == j || j.match(/\s/) || (y = " " + y) } h = function(e, t, n) { if (e.selectionStart === e.selectionEnd) e.selectionStart = function(e, t) { for (; e[t] && null != e[t - 1] && !e[t - 1].match(/\s/);) t--; return t }(e.value, e.selectionStart), e.selectionEnd = function(e, t) { for (; e[t] && !e[t].match(/\s/);) t++; return t }(e.value, e.selectionEnd);
                        else { var r = e.selectionStart - t.length,
                                a = e.selectionEnd + n.length,
                                o = e.value.slice(r, e.selectionStart) === t,
                                s = e.value.slice(e.selectionEnd, a) === n;
                            o && s && (e.selectionStart = r, e.selectionEnd = a) } return e.value.slice(e.selectionStart, e.selectionEnd) }(e, y, b); var L = e.selectionStart,
                        w = e.selectionEnd,
                        x = l.length > 0 && b.indexOf(l) > -1 && h.length > 0; if (v) { var k = c(e);
                        n = k.newlinesToAppend, r = k.newlinesToPrepend, y = n + a, b += r } { if (h.startsWith(y) && h.endsWith(b)) { var E = h.slice(y.length, h.length - b.length); if (g === p) { var q = g - y.length;
                                q = Math.max(q, L), q = Math.min(q, L + E.length), L = w = q } else w = L + E.length; return { text: E, selectionStart: L, selectionEnd: w } } if (x) { if (f.length > 0 && h.match(f)) { b = b.replace(l, h); var S = y + b; return L = w = L + y.length, { text: S, selectionStart: L, selectionEnd: w } } var T = y + h + b; return L = L + y.length + h.length + b.indexOf(l), w = L + l.length, { text: T, selectionStart: L, selectionEnd: w } } var _ = y + h + b; if (L = g + y.length, w = p + y.length, t.trimFirst) { var M = h.match(/^\s*|\s*$/g);
                            (0, m.default)(M, "github/legacy/behaviors/commenting/markdown-toolbar.js:196"); var A = M[0] || "",
                                H = M[1] || "";
                            _ = A + y + h.trim() + b + H, L += A.length, w -= H.length } return { text: _, selectionStart: L, selectionEnd: w } } }(e, t),
                function(e, t) { var r = t.text,
                        a = t.selectionStart,
                        o = t.selectionEnd,
                        s = e.selectionStart,
                        i = e.value.slice(0, s),
                        u = e.value.slice(e.selectionEnd); if (null === v || !0 === v) { e.contentEditable = "true"; try { v = document.execCommand("insertText", !1, r) } catch (e) { v = !1 } e.contentEditable = "false" } if (v && !e.value.slice(0, e.selectionStart).endsWith(r) && (v = !1), !v) { try { document.execCommand("ms-beginUndoUnit") } catch (e) {} e.value = i + r + u; try { document.execCommand("ms-endUndoUnit") } catch (e) {}(0, n.fire)(e, "input") } null != a && null != o ? e.setSelectionRange(a, o) : e.setSelectionRange(s, e.selectionEnd) }(e, a) }

        function c(e) { var t = e.value.slice(0, e.selectionStart),
                n = e.value.slice(e.selectionEnd),
                r = t.match(/\n*$/),
                a = n.match(/^\n*/),
                o = r ? r[0].length : 0,
                s = a ? a[0].length : 0,
                i = void 0,
                l = void 0; return t.match(/\S/) && o < 2 && (i = u("\n", 2 - o)), n.match(/\S/) && s < 2 && (l = u("\n", 2 - s)), null == i && (i = ""), null == l && (l = ""), { newlinesToAppend: i, newlinesToPrepend: l } }

        function d(t) { var n = (0, e.closest)(t, ".js-previewable-comment-form"),
                r = (0, e.query)(n, ".js-improved-comment-field", HTMLTextAreaElement),
                a = { prefix: t.getAttribute("data-prefix") || "", suffix: t.getAttribute("data-suffix") || "", blockPrefix: t.getAttribute("data-block-prefix") || "", blockSuffix: t.getAttribute("data-block-suffix") || "", multiline: t.hasAttribute("data-multiline"), replaceNext: t.getAttribute("data-replace-next") || "", prefixSpace: t.hasAttribute("data-prefix-space"), scanFor: t.getAttribute("data-scan-for") || "", surroundWithNewlines: t.hasAttribute("data-surround-with-newlines"), orderedList: t.hasAttribute("data-ordered-list"), trimFirst: t.hasAttribute("data-trim-first") };
            r.focus(), l(r, a) } var f = s(r),
            m = s(a),
            v = null;
        (0, n.on)("click", ".js-toolbar-item", function(e) { var n = e.currentTarget;
            (0, t.deactivate)(n.closest(".js-menu-container")), d(n) }); var g = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control",
            p = new WeakMap;
        (0, o.onFocus)(".js-improved-comment-field", function(t) { if (!p.get(t)) { p.set(t, !0); var n = {},
                    r = (0, e.closest)(t, ".js-previewable-comment-form"),
                    a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = r.querySelectorAll(".js-toolbar .js-toolbar-item[data-toolbar-hotkey]")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value,
                            c = l.getAttribute("data-toolbar-hotkey");
                        (0, m.default)(c, "github/legacy/behaviors/commenting/markdown-toolbar.js:331"), n[g + "+" + c] = l } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } t.addEventListener("keydown", function(e) { var t = n[(0, f.default)(e)];
                    t && (d(t), e.preventDefault()) }) } }) }), define("github/legacy/behaviors/commenting/preview", ["selector-observer", "../../../onfocus", "../../../query-selector", "../../../jquery", "../../../fetch", "../../../sliding-promise-queue", "invariant", "delegated-events"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e) { var t = e.getAttribute("data-preview-authenticity-token"),
                n = e.closest("form").elements.authenticity_token; return null != t ? t : null != n ? n.value : void 0 }

        function c(e) { var t = e.closest(".js-previewable-comment-form"),
                n = e.classList.contains("js-preview-tab"); if (n) { var r = t.querySelector(".js-write-bucket");
                t.querySelector(".js-preview-body").style.minHeight = (0, m.default)(r).height() + "px" } t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n); var a = t.querySelector(".tabnav-tab.selected");
            a.setAttribute("aria-selected", !1), a.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", !0); var o = t.querySelector(".js-write-tab"); return n ? o.setAttribute("data-hotkey", "Control+P,Meta+P") : o.removeAttribute("data-hotkey"), Promise.resolve(t) }

        function d(e, t) { var n, r, o, s, i; return regeneratorRuntime.async(function(u) { for (;;) switch (u.prev = u.next) {
                    case 0:
                        if (n = { url: e.getAttribute("data-preview-url"), data: { text: t, authenticity_token: l(e) }, headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" } }, !(r = !e.dispatchEvent(new CustomEvent("preview:setup", { bubbles: !0, cancelable: !0, detail: n })))) { u.next = 6; break } throw new Error("preview canceled");
                    case 6:
                        t = JSON.stringify(n);
                    case 7:
                        return o = h.get(e), s = void 0, i = void 0, o && (s = o[0], i = o[1]), s !== t && (y = !1, (i = p.push(function(e) { return (0, a.fetchText)(e.url, { method: "post", body: m.default.param(e.data), headers: e.headers }) }(n))).then(function() { y = !0 }), h.set(e, [t, i])), u.abrupt("return", i);
                    case 13:
                    case "end":
                        return u.stop() } }, null, this) }

        function f(e) { var t = e.querySelector(".js-comment-field"),
                n = e.querySelector(".comment-body");
            d(e, t.value).then(function(e) { n.innerHTML = e || "<p>Nothing to preview</p>" }), y || (n.innerHTML = "<p>Loading preview&hellip;</p>") } var m = u(r),
            v = u(o),
            g = u(s);
        (0, i.on)("click", ".js-write-tab", function() { c(this).then(function(e) { return e.querySelector(".js-comment-field").focus() }); var e = this.closest(".js-previewable-comment-form").querySelector(".js-toolbar");
            null != e && e.classList.remove("d-none") }), (0, i.on)("click", ".js-preview-tab", function(e) { c(this).then(function(e) { f(e) }); var t = this.closest(".js-previewable-comment-form").querySelector(".js-toolbar");
            null != t && t.classList.add("d-none"), e.stopPropagation(), e.preventDefault() }), (0, i.on)("preview:render", ".js-previewable-comment-form", function() { c(this.querySelector(".js-preview-tab")).then(function(e) { f(e) }) }); var p = new v.default,
            h = new WeakMap,
            y = !1;
        (0, e.observe)(".js-preview-tab", function(e) { var t = void 0,
                n = void 0;
            e.addEventListener("mouseenter", function() { t || (t = e.closest(".js-previewable-comment-form"), n = t.querySelector(".js-comment-field")), d(t, n.value) }) }), (0, t.onKey)("keydown", ".js-comment-field", function(e) { var t = e.target; if ((0, g.default)(t instanceof HTMLTextAreaElement, "github/legacy/behaviors/commenting/preview.js:207"), (e.ctrlKey || e.metaKey) && "P" === e.key) { var r = (0, n.closest)(t, ".js-previewable-comment-form");
                r.classList.contains("write-selected") && (t.blur(), r.dispatchEvent(new CustomEvent("preview:render", { bubbles: !0, cancelable: !1 })), e.preventDefault(), e.stopImmediatePropagation()) } }) }), define("github/legacy/behaviors/disable", ["../../jquery", "invariant", "delegated-events", "../../remote-form"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o(e) { return e instanceof HTMLInputElement ? e.value || "Submit" : e.innerHTML || "" }

        function s(e, t) { e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t }

        function i(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = e.querySelectorAll(d)[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var i = a.value,
                        u = c.get(i);
                    null != u && ((0, l.default)(i instanceof HTMLInputElement || i instanceof HTMLButtonElement, "github/legacy/behaviors/disable.js:58"), s(i, u), i.hasAttribute("data-disable-invalid") && !e.checkValidity() || (i.disabled = !1), c.delete(i)) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } var u = a(e),
            l = a(t),
            c = new WeakMap,
            d = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");
        (0, n.on)("submit", "form", function(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var a, i = e.currentTarget.querySelectorAll(d)[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) { var u = a.value;
                    (0, l.default)(u instanceof HTMLInputElement || u instanceof HTMLButtonElement, "github/legacy/behaviors/disable.js:42"), c.set(u, o(u)); var f = u.getAttribute("data-disable-with");
                    f && s(u, f), u.disabled = !0 } } catch (e) { n = !0, r = e } finally { try {!t && i.return && i.return() } finally { if (n) throw r } } }, { capture: !0 }), (0, u.default)(document).on("ajaxComplete", "form", function(e) { e.currentTarget === e.target && i(e.currentTarget) }), (0, r.afterRemote)(i) }), define("github/legacy/behaviors/facebox", ["../../history", "selector-observer", "../../facebox", "../../jquery", "../../hash-change", "../../restrict-tab-behavior", "delegated-events"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u() { var e = window.location.hash.slice(1); if (e) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var a, o = document.querySelectorAll("[data-hashchange-activated]")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var s = a.value; if (s.getAttribute("data-hashchange-activated") === e) return s } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } } var l = i(r),
            c = i(a),
            d = i(o);
        (0, c.default)(function() { var e = u();
            e && setTimeout(function() { e.click() }, 0) }), document.addEventListener("facebox:close", function() { var t = u();
            t && /facebox/.test(t.rel) && (0, e.replaceState)((0, e.getState)(), "", window.location.href.split("#")[0]) }), document.addEventListener("facebox:reveal", function() { var e = document.getElementById("facebox");
            setTimeout(function() {! function(e) { var t = e.querySelectorAll("input[autofocus], textarea[autofocus]"),
                        n = t[t.length - 1];
                    n && document.activeElement !== n && n.focus() }(e) }, 0), (0, l.default)(e).on("keydown", d.default) }), document.addEventListener("facebox:afterClose", function() {
            (0, l.default)("#facebox").off("keydown", d.default), (0, l.default)("#facebox :focus").blur() }), (0, t.observe)("a[rel*=facebox]", function(e) {
            (0, n.addFaceboxEventListener)(e) }), document.addEventListener("facebox:close", n.teardownOnClose), (0, s.on)("click", ".js-facebox-close", function(e) { e.preventDefault(), (0, n.close)() }) }), define("github/prefix-filter-list", ["exports", "./jquery"], function(e, t) {
        function n(e, t) { var n = e.innerHTML; if (t) { var r = new RegExp(t, "i");
                e.innerHTML = n.replace(r, "<mark>$&</mark>") } else { var a = n.replace(/<\/?mark>/g, "");
                n !== a && (e.innerHTML = a) } } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t, a) { var o = void 0,
                s = void 0,
                i = void 0; if (null == a && (a = {}), e) { t = t.toLowerCase(); var u = null != a.text ? a.text : function(e) { return e.textContent.toLowerCase().trim() },
                    l = (0, r.default)(e).children(),
                    c = a.limit;!0 === a.mark ? i = n : null != a.mark && null != a.mark.call && (i = a.mark); var d = 0; for (o = 0, s = l.length; o < s; o++) { var f = l[o];
                    0 === u(f).indexOf(t) ? null != c && d >= c ? f.style.display = "none" : (d++, f.style.display = "", i && (i(f), i(f, t))) : f.style.display = "none" } return d } }; var r = function(e) { return e && e.__esModule ? e : { default: e } }(t) }), define("github/substring-filter-list", ["exports"], function(e) {
        function t(e, t) { var n = e.innerHTML; if (t) { var r = new RegExp(t, "i");
                e.innerHTML = n.replace(r, "<mark>$&</mark>") } else { var a = n.replace(/<\/?mark>/g, "");
                n !== a && (e.innerHTML = a) } } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, n, r) { var a = void 0; if (null == r && (r = {}), e) { n = n.toLowerCase(); var o = null != r.text ? r.text : function(e) { return e.textContent.toLowerCase().trim() },
                    s = r.limit,
                    i = Array.from(e.children).filter(function(e) { return !e.classList.contains("select-menu-no-results") });!0 === r.mark ? a = t : "function" == typeof r.mark && (a = r.mark); var u = 0,
                    l = !0,
                    c = !1,
                    d = void 0; try { for (var f, m = i[Symbol.iterator](); !(l = (f = m.next()).done); l = !0) { var v = f.value; - 1 !== o(v).indexOf(n) ? null != s && u >= s ? v.style.display = "none" : (u++, v.style.display = "", a && (a(v), a(v, n))) : v.style.display = "none" } } catch (e) { c = !0, d = e } finally { try {!l && m.return && m.return() } finally { if (c) throw d } } return u } } }), define("github/substring-memory-filter-list", ["exports", "./query-selector", "invariant"], function(e, t, n) {
        function r(e, n, r) {
            function s(e) { var r = !(null != i && b >= i) && function(e) { return (e.login + " " + e.name).toLowerCase().trim() }(e).indexOf(n) >= 0; if (r || e.selected) { var a = function(e, n, r) { if (null != e.element) return e.element; var a = n.content.cloneNode(!0),
                            o = (0, t.query)(a, "input[type=checkbox]", HTMLInputElement);
                        e.type && (o.name = "reviewer_" + e.type + "_ids[]");
                        o.value = e.id; var s = "" + o.name + e.id,
                            i = e.selected;
                        r[s] && (i = !0, r[s].remove(), delete r[s]); var u = (0, t.query)(a, ".js-navigation-item");
                        i && (u.classList.add("selected"), o.checked = !0);
                        e.disabled && u.classList.add("disabled"); var l = a.querySelector(".js-username");
                        l && (l.textContent = e.login); var c = a.querySelector(".js-description");
                        c && (c.textContent = e.name); var d = a.querySelector(".js-extended-description");
                        d && (e.description ? d.textContent = e.description : d.remove()); return (0, t.query)(a, ".js-avatar", HTMLImageElement).src = e.avatar, e.element = u, e.element }(e, u, l);
                    a.classList.toggle("d-none", !r), r && b++, j.appendChild(a) } } var i = r.limit,
                u = (0, t.query)(e, "template", HTMLTemplateElement),
                l = {},
                c = !0,
                d = !1,
                f = void 0; try { for (var m, v = (0, t.querySelectorAll)(e, "input[type=hidden]", HTMLInputElement)[Symbol.iterator](); !(c = (m = v.next()).done); c = !0) { var g = m.value;
                    l["" + g.name + g.value] = g } } catch (e) { d = !0, f = e } finally { try {!c && v.return && v.return() } finally { if (d) throw f } } for (var p = u.nextElementSibling; p;) { var h = p;
                p = h.nextElementSibling, h.classList.contains("selected") || h.classList.contains("select-menu-divider") ? h.classList.add("d-none") : h.remove() } var y = o.get(e);
            (0, a.default)(null != y, "github/substring-memory-filter-list.js:51"); var b = 0,
                j = document.createDocumentFragment(),
                L = e.querySelector(".js-divider-suggestions"),
                w = e.querySelector(".js-divider-rest"); if (L && y.suggestions) { var x = !0,
                    k = !1,
                    E = void 0; try { for (var q, S = y.suggestions[Symbol.iterator](); !(x = (q = S.next()).done); x = !0) { s(q.value) } } catch (e) { k = !0, E = e } finally { try {!x && S.return && S.return() } finally { if (k) throw E } } j.childNodes.length && (L.after(j), L.classList.toggle("d-none", 0 === b), j = document.createDocumentFragment()) } var T = b,
                _ = !0,
                M = !1,
                A = void 0; try { for (var H, C = y.users[Symbol.iterator](); !(_ = (H = C.next()).done); _ = !0) { s(H.value) } } catch (e) { M = !0, A = e } finally { try {!_ && C.return && C.return() } finally { if (M) throw A } } return e.append(j), w && w.classList.toggle("d-none", b === T || 0 === T), b } Object.defineProperty(e, "__esModule", { value: !0 }), e.storeData = function(e, t) { o.set(e, t) }, e.hasData = function(e) { return o.has(e) }, e.substringMemoryFilterList = r; var a = function(e) { return e && e.__esModule ? e : { default: e } }(n),
            o = new WeakMap }), define("github/legacy/behaviors/filterable", ["../../throttled-input", "selector-observer", "delegated-events", "../../fuzzy-filter-sort-list", "../../prefix-filter-list", "../../substring-filter-list", "../../substring-memory-filter-list", "../../setimmediate", "../../form"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } } var l = u(r),
            c = u(a),
            d = u(o),
            f = u(i);
        (0, t.observe)(".js-filterable-field", function(t) {
            function r(e) { o !== e.value && (o = e.value, (0, f.default)(function() {
                    (0, n.fire)(e, "filterable:change") })) }

            function a(e) { var t = e.currentTarget;
                (0, f.default)(function() {
                    (0, n.fire)(t, "filterable:change") }) } var o = t.value; return { add: function(t) { t.addEventListener("focus", a), (0, e.addThrottledInputEventListener)(t, r), document.activeElement === t && a({ currentTarget: t }) }, remove: function(t) { t.removeEventListener("focus", a), (0, e.removeThrottledInputEventListener)(t, r) } } }), (0, n.on)("filterable:change", ".js-filterable-field", function() { var e = this.value.trim().toLowerCase(),
                t = document.querySelectorAll("[data-filterable-for=" + this.id + "]"),
                n = !0,
                r = !1,
                a = void 0; try { for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) { var u = o.value; if ("substring-memory" !== u.getAttribute("data-filterable-type") || (0, s.hasData)(u)) {! function(e, t) { var n = e.hasAttribute("data-filterable-highlight"),
                                r = e.getAttribute("data-filterable-limit"),
                                a = 0; switch (e.getAttribute("data-filterable-type")) {
                                case "fuzzy":
                                    a = (0, l.default)(e, t, { mark: n, limit: r }); break;
                                case "substring":
                                    a = (0, d.default)(e, t, { mark: n, limit: r }); break;
                                case "substring-memory":
                                    a = (0, s.substringMemoryFilterList)(e, t, { limit: r }); break;
                                default:
                                    a = (0, c.default)(e, t, { mark: n, limit: r }) } e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === a) }(u, e); var f = new CustomEvent("filterable:change", { bubbles: !0, cancelable: !1, detail: { inputField: this } });
                        u.dispatchEvent(f) } } } catch (e) { r = !0, a = e } finally { try {!n && i.return && i.return() } finally { if (r) throw a } } }), document.addEventListener("selectmenu:data", function(e) { var t = e.target.querySelector('[data-filterable-type="substring-memory"]'); if (t) {
                (0, s.storeData)(t, e.detail.data); var r = e.target.querySelector(".js-filterable-field");
                r && r === document.activeElement && (0, n.fire)(r, "filterable:change") } }) }), define("github/legacy/behaviors/issue-references", ["../../fetch", "selector-observer"], function(e, t) {
        function n() { var t = this.getAttribute("data-url"); if (t) { var n = (0, e.fetchJSON)(t),
                    a = this.getAttribute("data-id"),
                    o = this.textContent,
                    s = document.querySelectorAll(".js-issue-link[data-id='" + a + "']"),
                    i = !0,
                    u = !1,
                    l = void 0; try { for (var c, d = s[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) { c.value.removeAttribute("data-url") } } catch (e) { u = !0, l = e } finally { try {!i && d.return && d.return() } finally { if (u) throw l } } var f = function(e) { return function(t) { var n = (null != t.response ? t.response.status : void 0) || 500,
                            a = function() { switch (n) {
                                    case 404:
                                        return this.getAttribute("data-permission-text");
                                    default:
                                        return this.getAttribute("data-error-text") } }.call(e); return r(s, a) } }(this); return n.then(function(e) { return r(s, o + ", " + e.title) }, f) } }

        function r(e, t) { var n = !0,
                r = !1,
                a = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value;
                    i.classList.add("tooltipped"), i.classList.add("tooltipped-ne"), i.setAttribute("aria-label", t) } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } }(0, t.observe)(".js-issue-link", function(e) { e.addEventListener("mouseenter", n) }) }), define("github/legacy/behaviors/js-immediate-updates", ["../../updatable-content", "../../jquery"], function(e, t) {
        (0, function(e) { return e && e.__esModule ? e : { default: e } }(t).default)(document).on("ajaxSuccess", ".js-immediate-updates", function(t, n, r, a) { var o = void 0; if (this === t.target) { var s = a.updateContent; for (o in s) { var i = s[o],
                        u = document.querySelector(o);
                    u && (0, e.replaceContent)(u, i) } } }) }), define("github/legacy/behaviors/permalink", ["delegated-events"], function(e) {
        (0, e.on)("click", ".js-permalink-shortcut", function(e) { window.location = this.href + window.location.hash, e.preventDefault() }) }), define("github/legacy/behaviors/pjax", ["../../jquery", "../../pjax", "delegated-events", "invariant"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o(e) { return null == e.getAttribute("data-pjax-preserve-scroll") && 0 }

        function s(e) { var t = (0, i.default)(e),
                n = t.add(t.parents("[data-pjax]")).map(function() { var e = this.getAttribute("data-pjax"); if (null != e && "true" !== e) return e })[0]; return n ? document.querySelector(n) : (0, i.default)(e).closest("[data-pjax-container]")[0] } var i = a(e),
            u = a(r);
        (0, n.on)("click", "[data-pjax] a, a[data-pjax]", function(e) {
            (0, u.default)(e instanceof MouseEvent, "github/legacy/behaviors/pjax.js:67"); var n = e.currentTarget; if (n instanceof HTMLAnchorElement) { if (null != n.getAttribute("data-skip-pjax")) return; if (null != n.getAttribute("data-remote")) return; var r = s(n);
                r && (0, t.click)(e, { container: r, scrollTo: o(n) }) } }), (0, i.default)(document).on("submit", "form[data-pjax]", function(e) { var n = s(this);
            n && (0, t.submit)(e, { container: n, scrollTo: o(this) }) }) }), define("github/legacy/behaviors/pjax/exceptions", ["invariant", "delegated-events"], function(e, t) {
        function n(e, t) { return e.split("/", 3).join("/") === t.split("/", 3).join("/") } var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
            (0, r.default)(e.currentTarget instanceof HTMLAnchorElement, "github/legacy/behaviors/pjax/exceptions.js:21"); var t = e.currentTarget.pathname;
            n(t, location.pathname) ? function(e) { return "projects" === e.split("/")[3] && n(e, location.pathname) }(t) && e.preventDefault() : e.preventDefault() }), (0, t.on)("pjax:click", ".js-comment-body", function(e) {
            (0, r.default)(e.target instanceof HTMLAnchorElement, "github/legacy/behaviors/pjax/exceptions.js:33"), "files" === e.target.pathname.split("/")[3] && e.preventDefault() }) }), define("github/legacy/behaviors/pjax/head", ["../../../jquery", "../../../document-ready", "invariant"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } } var a = r(e),
            o = r(n),
            s = {};
        t.ready.then(function() { s[document.location.pathname] = (0, a.default)("head [data-pjax-transient]") }), document.addEventListener("pjax:beforeReplace", function(e) {
            (0, o.default)(e instanceof CustomEvent, "github/legacy/behaviors/pjax/head.js:19"); var t = void 0,
                n = void 0,
                r = void 0,
                i = e.detail.contents; for (t = n = 0, r = i.length; n < r; t = ++n) { var u = i[t];
                u && ("pjax-head" === u.id ? (s[document.location.pathname] = (0, a.default)(u).children(), i[t] = null) : "js-flash-container" === u.id && ((0, a.default)("#js-flash-container").replaceWith(u), i[t] = null)) } }), document.addEventListener("pjax:end", function() { var e = s[document.location.pathname]; if (e) {
                (0, a.default)("head [data-pjax-transient]").remove(); var t = (0, a.default)(e).not("title, script, link[rel='stylesheet']"),
                    n = (0, a.default)(e).filter("link[rel='stylesheet']"); return (0, a.default)(document.head).append(t.attr("data-pjax-transient", !0)), (0, a.default)(document.head).append(n) } }) }), define("github/legacy/behaviors/print_popup", ["../../document-ready", "invariant"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        e.ready.then(function() { var e = document.body;
            (0, n.default)(e, "github/legacy/behaviors/print_popup.js:8"), e.classList.contains("js-print-popup") && (window.print(), setTimeout(window.close, 1e3)) }) }), define("github/legacy/behaviors/quicksearch", ["../../query-selector", "../../form", "../../navigation", "../../sliding-promise-queue", "../../fetch", "../../onfocus", "../../typecast", "invariant", "delegated-events"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } } var c = l(r),
            d = l(s),
            f = l(i),
            m = new c.default;
        (0, o.onFocus)(".js-quicksearch-field", function(e) {
            (0, f.default)(e instanceof HTMLInputElement, "github/legacy/behaviors/quicksearch.js:43"); var t = (0, d.default)(e.form, HTMLFormElement);
            (0, n.push)(t.querySelector(".js-quicksearch-results")) }), (0, o.onInput)(".js-quicksearch-field", function(t) {
            function n() { s.classList.remove("is-sending") } var r = (0, d.default)(t.target, HTMLInputElement),
                o = r.value.replace(/^\s+|\s+$/g, ""),
                s = (0, e.closest)(r, "form"),
                i = (0, e.query)(s, ".js-quicksearch-results").getAttribute("data-quicksearch-url");
            (0, f.default)(i, "github/legacy/behaviors/quicksearch.js:77"); var u = void 0; if (o.length) { var l = new URL(i, window.location.origin),
                    c = new URLSearchParams(l.search.slice(1));
                c.append("q", o), l.search = c.toString(), s.classList.add("is-sending"), u = (0, a.fetchText)(l) } else u = Promise.resolve("");
            (0, f.default)(m, "github/legacy/behaviors/quicksearch.js:95"), m.push(u).then(function(t) { var n = (0, e.query)(s, ".js-quicksearch-results");
                n.innerHTML = t, n.classList.toggle("active", "" !== o) }).then(n, n) }), (0, u.on)("navigation:keydown", ".js-quicksearch-results", function(r) {
            (0, f.default)(r instanceof CustomEvent, "github/legacy/behaviors/quicksearch.js:58"); var a = r.target,
                o = (0, e.closest)(a, "form", HTMLFormElement); if ("Escape" === r.detail.hotkey) { var s = (0, e.query)(o, ".js-quicksearch-results");
                s.classList.remove("active"), (0, n.clear)(s) } else "Enter" !== r.detail.hotkey || a.classList.contains("js-navigation-item") || ((0, t.submit)(o), r.preventDefault()) }), (0, u.on)("submit", ".js-quicksearch-form", function(e) {
            (0, f.default)(e.currentTarget instanceof HTMLFormElement, "github/legacy/behaviors/quicksearch.js:49"); var t = e.currentTarget.querySelector(".js-quicksearch-results");
            t && (t.classList.remove("active"), (0, n.pop)(t)) }) }), define("github/legacy/behaviors/stale_session", ["delegated-events", "../../query-selector"], function(e, t) { var n = document.querySelector("meta[name=user-login]");! function() { if (n instanceof HTMLMetaElement) { var r = n.content,
                    a = String(!!r.length); try { localStorage.setItem("logged-in", a) } catch (e) { return } window.addEventListener("storage", function(n) { if (n.storageArea === localStorage && "logged-in" === n.key && n.newValue !== a) { a = n.newValue; var r = (0, t.query)(document, ".js-stale-session-flash");
                        r.classList.toggle("is-signed-in", "true" === a), r.classList.toggle("is-signed-out", "false" === a), r.classList.remove("d-none"), window.addEventListener("popstate", function(e) { null != e.state.container && location.reload() }), (0, e.on)("submit", "form", function(e) { e.preventDefault() }) } }) } }() }), define("github/fuzzy-filter-sort", ["exports", "./fuzzy-filter"], function(e, t) {
        function n(e, t) { var n = e.fuzzyFilterScoreCache,
                r = t.fuzzyFilterScoreCache,
                a = e.fuzzyFilterTextCache,
                o = t.fuzzyFilterTextCache; return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0 } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, r, a) { r = r.toLowerCase(); var o = a.text,
                s = null != a.score ? a.score : t.fuzzyScore,
                i = e; if (r) { i = []; var u = !0,
                    l = !1,
                    c = void 0; try { for (var d, f = e[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) { var m = d.value;
                        null == m.fuzzyFilterTextCache && (m.fuzzyFilterTextCache = o(m)), m.fuzzyFilterScoreCache = s(m.fuzzyFilterTextCache, r, m), m.fuzzyFilterScoreCache > 0 && i.push(m) } } catch (e) { l = !0, c = e } finally { try {!u && f.return && f.return() } finally { if (l) throw c } } i.sort(n) } return null != a.limit ? i.slice(0, a.limit) : i } }), define("github/legacy/behaviors/suggester", ["../../suggester", "../../fuzzy-filter-sort", "../../fuzzy-filter-sort-list", "delegated-events"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o(e, t, n) { var r = n[3],
                a = n[4]; return { type: e, text: r, query: a, startIndex: t - a.length, endIndex: t } }

        function s(e) { var t = e.getAttribute("data-emoji-name"); return h[t] = " " + i(e).replace(/_/g, " "), t }

        function i(e) { return e.getAttribute("data-text").trim().toLowerCase() }

        function u(e, t) { var n = e.indexOf(t); return -1 === n ? 0 : 1 / (n + 1) }

        function l(e, t) { var n = h[e].indexOf(t); return n > -1 ? 1e3 - n : 0 }

        function c() { return 2 }

        function d(e) { var t = void 0; if (e) { var n = e.toLowerCase().split("");
                t = function(t) { if (!t) return 0; var r = function(e, t) { var n = void 0,
                            r = void 0,
                            a = void 0,
                            o = void 0,
                            s = function(e, t) { for (var n = 0, r = [];
                                    (n = e.indexOf(t, n)) > -1;) r.push(n++); return r }(e, t[0]); if (0 !== s.length) { if (1 === t.length) return [s[0], 1, []]; for (o = null, r = 0, a = s.length; r < a; r++) { var i = s[r]; if (n = function(e, t, n) { var r = void 0,
                                            a = void 0,
                                            o = void 0,
                                            s = []; for (r = a = 1, o = t.length; 1 <= o ? a < o : a > o; r = 1 <= o ? ++a : --a) { if (-1 === (n = e.indexOf(t[r], n))) return;
                                            s.push(n++) } return s }(e, t, i + 1)) { var u = n[n.length - 1] - i;
                                    (!o || u < o[1]) && (o = [i, u, n]) } } return o } }(t, n); if (!r) return 0; var a = e.length / r[1]; return a /= r[0] / 2 + 1 } } else t = c; return { score: t } }

        function f(e) { var t = e.match(/`{3,}/g); return t || (t = function(e) { return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "") }(e).match(/`/g)), null != t && t.length % 2 } var m = a(e),
            v = a(t),
            g = a(n),
            p = { mention: { typeid: "mention", match: /(^|\s|\()(@([a-z0-9\-_/]*))$/i, replace: "$1@$value ", search: function(e, t, n) { var r = d(t),
                            a = e.querySelector("ul.mention-suggestions"),
                            o = void 0; return o = n ? (0, v.default)(n, t, { limit: 5, score: function(e, t, n) { var a = r.score(e),
                                    o = n.score; return "number" == typeof o ? a * o : a }, text: function(e) { return e.login ? (e.login + " " + e.name).trim().toLowerCase() : (e.name + " " + e.description).trim().toLowerCase() } }) : (0, g.default)(a, t, { limit: 5, text: i, score: function(e, t, n) { var a = r.score(e, t, n),
                                    o = n.getAttribute("data-mentionable-score"); return null !== o ? a * parseFloat(o) : a } }), Promise.resolve({ element: a, results: o }) } }, auditLogUser: { typeid: "auditLogUser", match: /(^|\s)((-?actor:|-?user:)([a-z0-9\-+_]*))$/i, replace: "$1$3$value ", search: function(e, t) { var n = e.querySelector("ul.user-suggestions"),
                            r = (0, g.default)(n, t, { limit: 5 }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: o }, auditLogOrg: { typeid: "auditLogOrg", match: /(^|\s)((-?org:)([a-z0-9\-+_]*))$/i, replace: "$1$3$value ", search: function(e, t) { var n = e.querySelector("ul.org-suggestions"),
                            r = (0, g.default)(n, t, { limit: 5 }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: o }, auditLogAction: { typeid: "auditLogAction", match: /(^|\s)((-?action:)([a-z0-9.\-+_]*))$/i, replace: "$1$3$value ", search: function(e, t) { var n = e.querySelector("ul.action-suggestions"),
                            r = (0, g.default)(n, t, { limit: 5 }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: o }, auditLogRepo: { typeid: "auditLogRepo", match: /(^|\s)((-?repo:)([a-z0-9/\-+_]*))$/i, replace: "$1$3$value ", search: function(e, t) { var n = e.querySelector("ul.repo-suggestions"),
                            r = (0, g.default)(n, t, { limit: 5 }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: o }, auditLogCountry: { typeid: "auditLogCountry", match: /(^|\s)((-?country:)([a-z0-9\-+_]*))$/i, replace: "$1$3$value ", search: function(e, t) { var n = e.querySelector("ul.country-suggestions"),
                            r = (0, g.default)(n, t, { limit: 5 }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: o }, emoji: { typeid: "emoji", match: /(^|\s|\()(:([a-z0-9\-+_]*))$/i, replace: "$1$value ", getValue: function(e) { if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value"); var t = e.firstElementChild; return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value") }, search: function(e, t) { var n = e.querySelector("ul.emoji-suggestions");
                        t = " " + t.toLowerCase().replace(/_/g, " "); var r = (0, g.default)(n, t, { limit: 5, text: s, score: l }); return Promise.resolve({ element: n, results: r }) } }, search: { typeid: "search", match: /(^|\s)([a-z-]*)$/i, replace: "$1$value", getValue: function(e) { return e.getAttribute("data-value") }, search: function(e, t) { var n = e.querySelector("ul.search-suggestions"),
                            r = (0, g.default)(n, t, { limit: 10, text: function(e) { return e.getAttribute("data-text") }, score: u }); return Promise.resolve({ element: n, results: r }) }, normalizeMatch: function(e, t, n) { var r = n[2]; return { type: e, text: r, query: r, startIndex: t - r.length, endIndex: t } } }, hashed: { typeid: "issue", match: /(^|\s|\()(#([a-z0-9\-_/]*))$/i, replace: "$1#$value ", search: function(e, t) { var n = void 0,
                            r = e.querySelector("ul.hashed-suggestions"),
                            a = /^\d+$/.test(t) ? (n = new RegExp("\\b" + t), function(e) { return function(e, t) { var n = e.search(t); return n > -1 ? 1e3 - n : 0 }(e, n) }) : d(t).score,
                            o = (0, g.default)(r, t, { limit: 5, text: i, score: a }); return Promise.resolve({ element: r, results: o }) } } },
            h = {};
        (0, r.on)("focusin:delay", ".js-suggester-field", function() { new m.default({ input: this, suggester: this.closest(".js-suggester-container").querySelector(".js-suggester"), types: p, disable: f }).setup() }) }), define("github/legacy/behaviors/timeline_marker", ["../../jquery", "../../remote-form"], function(e, t) {
        (0, function(e) { return e && e.__esModule ? e : { default: e } }(e).default)(document).on("ajaxSend", function(e, t, n) { if (!n.crossDomain && !/[?&]_pjax=/.test(n.url)) { var r = document.querySelector(".js-timeline-marker");
                r && t.setRequestHeader("X-Timeline-Last-Modified", r.getAttribute("data-last-modified")) } }), (0, t.remoteForm)(".js-needs-timeline-marker-header", function(e, t, n) { var r = document.querySelector(".js-timeline-marker"); if (r) { var a = r.getAttribute("data-last-modified");
                a && n.headers.set("X-Timeline-Last-Modified", a) } }) }), define("github/legacy/behaviors/timeline_progressive_disclosure", ["../../dimensions", "selector-observer", "delegated-events"], function(e, t, n) {
        function r() { return window.location.hash.slice(1) } var a = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                        r = !0,
                        a = !1,
                        o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }();
        (0, n.on)("click", ".js-timeline-progressive-disclosure-button", function() { this.closest(".js-timeline-progressive-disclosure-container").src = this.getAttribute("data-url") }); var o = null;
        (0, t.observe)(".js-timeline-progressive-disclosure-container", function() { return { add: function(t) { return t.addEventListener("loadstart", function() { return this.classList.add("is-loading"), !0 }), t.addEventListener("loadend", function() { return this.classList.remove("is-loading"), !0 }), t.addEventListener("load", function() { if (t === o) { o = null; var n = r(),
                                a = document.getElementById(n); if (a) { var s = a.closest(".js-details-container");
                                null != s && s.classList.add("open"); var i = (0, e.overflowOffset)(a);
                                null != i && (i.top < 0 || i.bottom < 0) && a.scrollIntoView() } } return !0 }), t.addEventListener("error", function() { return this.src = "", !0 }) } } }); var s = [/^(commitcomment)-(\d+)$/, /^(commits-pushed)-([0-9a-f]{7})$/, /^(discussion)_r(\d+)$/, /^(discussion-diff)-(\d+)(?:[LR]-?\d+)?$/, /^(event)-(\d+)$/, /^(issuecomment)-(\d+)$/, /^(ref-commit)-([0-9a-f]{7})$/, /^(ref-issue)-(\d+)$/, /^(ref-pullrequest)-(\d+)$/];! function() { var e = r(); if (!e || !document.getElementById(e)) { var t = document.querySelector(".js-timeline-progressive-disclosure-container"); if (t) { var n = function(e) { for (var t = 0; t < s.length; t++) { var n = s[t].exec(e); if (null != n) return [n[1], n[2]] } }(e); if (n) { var i = a(n, 2);! function(e, t, n) { var r = new URL(e.getAttribute("data-fragment-url"), window.location.origin),
                                a = new URLSearchParams(r.search.slice(1));
                            a.append("focus_type", t), a.append("focus_value", n), r.search = a.toString(), e.src = r.toString() }(t, i[0], i[1]), o = t } } } }() }), define("github/legacy/graphs/calendar-sample", ["invariant", "delegated-events", "../../fetch", "../../query-selector"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("click", ".js-new-user-contrib-example", function(e) { var t, o, s, i, u; return regeneratorRuntime.async(function(l) { for (;;) switch (l.prev = l.next) {
                    case 0:
                        if (!(t = (0, r.query)(document, ".js-calendar-graph")).classList.contains("sample-graph")) { l.next = 3; break } return l.abrupt("return");
                    case 3:
                        return t.classList.add("sample-graph"), o = e.currentTarget.getAttribute("data-url"), (0, a.default)(o, "github/legacy/graphs/calendar-sample.js:16"), s = void 0, l.prev = 7, l.next = 10, regeneratorRuntime.awrap((0, n.fetchText)(o));
                    case 10:
                        s = l.sent, l.next = 17; break;
                    case 13:
                        return l.prev = 13, l.t0 = l.catch(7), t.classList.remove("sample-graph"), l.abrupt("return");
                    case 17:
                        (i = document.createElement("div")).innerHTML = s, u = t.querySelector(".js-calendar-graph-svg"), (0, a.default)(u, "github/legacy/graphs/calendar-sample.js:33"), u.replaceWith(i.children[0]);
                    case 22:
                    case "end":
                        return l.stop() } }, null, this, [
                [7, 13]
            ]) }) }), define("github/legacy/pages/account_membership", ["selector-observer", "invariant", "../../typecast"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e) { var t = e.options[e.selectedIndex];
            (0, o.default)(t, "github/legacy/pages/account_membership.js:9"); var n = t.hasAttribute("data-already-member"),
                r = e.form;
            (0, o.default)(r, "github/legacy/pages/account_membership.js:13"), r.classList.toggle("is-member", n), r.classList.toggle("is-not-member", !n) } var o = r(t),
            s = r(n);
        (0, e.observe)(".js-account-membership", function(e) { var t = (0, s.default)(e, HTMLSelectElement);
            a(t), t.addEventListener("change", function() { a(t) }) }) }), define("github/legacy/pages/billing_settings/coupon_redemption", ["../../../query-selector", "selector-observer", "../../../document-ready", "delegated-events", "invariant", "../../../typecast"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { var t = e.closest("form").querySelector(".js-redeem-button");
            (0, c.default)(t instanceof HTMLButtonElement, "github/legacy/pages/billing_settings/coupon_redemption.js:69"), t.disabled = e.classList.contains("free-plan") }

        function u(t) { var n = t.getAttribute("data-login"),
                r = t.getAttribute("data-plan"); if (n && r) { var a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = document.querySelectorAll(".js-account-row, .js-choose-account")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { i.value.classList.remove("selected") } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } t.classList.add("selected"); var c = t.querySelector(".js-choose-account");
                c && c.classList.add("selected"); var d = (0, e.query)(document, ".js-account", HTMLInputElement);
                d && (d.value = n); var f = document.querySelector(".js-plan-section");
                f && f.classList.remove("d-none"); var m = !0,
                    v = !1,
                    g = void 0; try { for (var p, h = document.querySelectorAll(".js-billing-plans")[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) { p.value.classList.add("d-none") } } catch (e) { v = !0, g = e } finally { try {!m && h.return && h.return() } finally { if (v) throw g } } var y = document.querySelector(".js-billing-plans[data-login='" + n + "']"); if (y) { y.classList.remove("d-none"); var b = y.querySelectorAll(".js-plan-row"),
                        j = 1 === b.length ? b[0] : y.querySelector("[data-name='" + r + "']");
                    j && l(j) } } }

        function l(t) { var n = t.getAttribute("data-name"),
                r = t.closest(".js-billing-plans"); if (r) { var a = r.getAttribute("data-login"); if (a) { var o = "true" === r.getAttribute("data-has-billing"),
                        s = parseInt(t.getAttribute("data-cost"), 10),
                        i = !0,
                        u = !1,
                        l = void 0; try { for (var c, d = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) { c.value.classList.remove("selected") } } catch (e) { u = !0, l = e } finally { try {!i && d.return && d.return() } finally { if (u) throw l } } t.classList.add("selected"); var f = t.querySelector(".js-choose-plan");
                    f && f.classList.add("selected"); var m = t.querySelector(".js-choose-plan-radio");
                    m instanceof HTMLInputElement && (m.checked = !0); var v = (0, e.query)(document, ".js-plan", HTMLInputElement); if (v && (v.value = n || ""), 0 === s || o) { var g = document.querySelector(".js-billing-section");
                        g && g.classList.add("has-removed-contents") } else if (a) { var p = document.querySelector(".js-billing-section[data-login='" + a + "']");
                        p && p.classList.remove("has-removed-contents") } } } } var c = s(a),
            d = s(o);
        (0, r.on)("submit", ".js-find-coupon-form", function(e) { var t = (0, d.default)(e.target, HTMLFormElement).action,
                n = (0, d.default)(document.getElementById("code"), HTMLInputElement);
            window.location = t + "/" + encodeURIComponent(n.value), e.preventDefault() }), (0, r.on)("click", ".js-choose-account", function(t) { var n = !0,
                r = !1,
                a = void 0; try { for (var o, s = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { o.value.classList.remove("selected") } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } }(0, e.query)(document, ".js-plan", HTMLInputElement).value = ""; var i = !0,
                l = !1,
                c = void 0; try { for (var d, f = document.querySelectorAll(".js-billing-section")[Symbol.iterator](); !(i = (d = f.next()).done); i = !0) { d.value.classList.add("has-removed-contents") } } catch (e) { l = !0, c = e } finally { try {!i && f.return && f.return() } finally { if (l) throw c } } var m = t.currentTarget.closest(".js-account-row");
            m && u(m) }), (0, r.on)("click", ".js-choose-plan", function(t) { l((0, e.closest)(t.target, ".js-plan-row")) }), (0, t.observe)(".js-choose-plan-radio:checked", { add: function(e) { l(e.closest(".js-plan-row")) } }), (0, t.observe)(".js-plan-row.selected", { add: function(e) { i(e) } }), (0, t.observe)(".js-choose-account.selected", { add: function(e) { i(e) } }), n.ready.then(function() { var e = document.querySelector(".js-account-row.selected");
            e && u(e); var t = document.querySelector(".js-plan-row.selected");
            t && l(t) }) }), define("github/legacy/pages/billing_settings/survey", ["delegated-events"], function(e) {
        function t(t, n) { var r = t.closest(".js-survey-question-form"),
                a = r.querySelector(".js-survey-other-text");
            r.classList.toggle("is-other-selected", n), n ? (a.addAttribute("required", "required"), a.focus()) : a.removeAttribute("required"), (0, e.fire)(a, "change") }(0, e.on)("change", ".js-survey-select", function() { t(this, this.options[this.selectedIndex].classList.contains("js-survey-option-other")) }), (0, e.on)("change", ".js-survey-radio", function() { t(this, this.classList.contains("js-survey-radio-other")) }) }), define("github/blob-anchor", ["exports"], function(e) {
        function t(e) { var t = e.match(/#?(?:L)(\d+)/g); return t ? t.map(function(e) { return parseInt(e.replace(/\D/g, "")) }) : [] }

        function n(e, t) { return e - t } Object.defineProperty(e, "__esModule", { value: !0 }), e.parseLineRange = t, e.parseFileAnchor = function(e) { return { lineRange: t(e), anchorPrefix: function(e) { var t = e.match(/(file-.+?-)L\d+?/i); return t ? t[1] : "" }(e) } }, e.formatLineRange = function(e) { var t = e.lineRange,
                r = e.anchorPrefix; switch (t.sort(n), t.length) {
                case 1:
                    return "#" + r + "L" + t[0];
                case 2:
                    return "#" + r + "L" + t[0] + "-L" + t[1];
                default:
                    return "#" } } }), define("github/legacy/pages/blob", ["../../query-selector", "delegated-events", "../../blob-anchor", "../../hash-change", "../../typecast", "../../inflector"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(t) { null == t && (t = (0, n.parseFileAnchor)(window.location.hash)),
                function(e) { var t = e.lineRange,
                        n = e.anchorPrefix,
                        r = document.querySelectorAll(".js-file-line"); if (0 !== r.length) { var a = !0,
                            o = !1,
                            s = void 0; try { for (var i, u = r[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) i.value.classList.remove("highlighted") } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } for (var l = t[0]; l <= t[t.length - 1]; l++) { var c = document.querySelector("#" + n + "LC" + l);
                            c && c.classList.add("highlighted") } } }(t),
                function() { var e = document.querySelector(".js-file-line-actions"),
                        t = document.getElementById("js-file-line-action-button"),
                        n = document.querySelectorAll(".js-file-line.highlighted"),
                        r = n[0]; if (t && e && r) {! function(e) { for (var t = [], n = 0; n < e.length; n++) t.push(e[n].textContent);
                            t = t.join("\n"); var r = document.getElementById("js-copy-lines"); if (r) { r.innerHTML = "Copy " + (0, o.pluralize)(e.length, "line"), r.setAttribute("data-clipboard-text", t); var a = "Blob, copyLines, numLines:" + e.length.toString();
                                r.setAttribute("data-ga-click", a) } }(n); var a = function(e) { var t = document.getElementsByClassName("js-permalink-shortcut")[0]; if (t instanceof HTMLAnchorElement) { var n = "" + t.href + window.location.hash,
                                    r = document.getElementById("js-copy-permalink"); if (r) { r.setAttribute("data-clipboard-text", n); var a = "Blob, copyPermalink, numLines:" + e.toString();
                                    r.setAttribute("data-ga-click", a) } return n } }(n.length);! function(e) { var t = document.getElementById("js-view-git-blame"); if (t) { var n = "Blob, viewGitBlame, numLines:" + e.toString();
                                t.setAttribute("data-ga-click", n) } }(n),
                        function(e, t) { var n = document.getElementById("js-new-issue"); if (n instanceof HTMLAnchorElement && e) { var r = n.getAttribute("href"); if (r) { var a = new URL(r, window.location.origin),
                                        o = new URLSearchParams(a.search.slice(1));
                                    o.set("permalink", e), a.search = o.toString(), n.setAttribute("href", a.toString()); var s = "Blob, newIssue, numLines:" + t.toString();
                                    n.setAttribute("data-ga-click", s) } } }(a, n.length), e.style.top = r.offsetTop - 2 + "px", e.classList.remove("d-none") } }(); var r = t,
                a = r.lineRange,
                s = r.anchorPrefix,
                i = document.querySelector("#" + s + "LC" + a[0]); if (!d && i) { i.scrollIntoView();
                (0, e.closest)(i, ".blob-wrapper").scrollLeft = 0 } d = !1 }

        function u(e, t) { var n = "FORM" === e.nodeName ? "action" : "href",
                r = e.getAttribute(n); if (r) { var a = r.indexOf("#");
                a >= 0 && (r = r.substr(0, a)), r += t, e.setAttribute(n, r) } } var l = s(r),
            c = s(a),
            d = !1;
        (0, l.default)(function() { if (document.querySelector(".js-file-line-container")) { setTimeout(i, 0); var e = window.location.hash,
                    t = !0,
                    n = !1,
                    r = void 0; try { for (var a, o = document.querySelectorAll(".js-update-url-with-hash")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { u(a.value, e) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } }), (0, t.on)("click", "#js-copy-permalink, #js-copy-lines", function(e) { var t = e.target.getAttribute("data-original-text");
            t && (e.target.textContent = "Copied!", setTimeout(function() { e.target.textContent = t }, 2e3)) }), (0, t.on)("click", ".js-line-number", function(e) { var t = (0, n.parseFileAnchor)(e.currentTarget.id); if (e.shiftKey) { var r = (0, n.parseLineRange)(window.location.hash);
                r.length > 0 && t.lineRange.unshift(r[0]) }! function(e) { var t = window.scrollY;
                d = !0, e(), window.scrollTo(0, t) }(function() { window.location.hash = (0, n.formatLineRange)(t) }) }), (0, t.on)("submit", ".js-jump-to-line-form", function(n) { var r = (0, c.default)(n.currentTarget, HTMLFormElement),
                a = (0, e.query)(r, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(function(e) { return parseInt(e, 10) }).filter(function(e) { return e > 0 }).sort(function(e, t) { return e - t }); return a.length && (window.location.hash = "L" + a.join("-L")), (0, t.fire)(document, "facebox:close"), !1 }) }), define("github/legacy/pages/blob/csv", ["../../../typecast", "../../../onfocus"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.onInput)(".js-csv-filter-field", function(e) { var t = (0, n.default)(e.target, HTMLInputElement).value; if (t) { t = t.toLowerCase(); var r = !0,
                    a = !1,
                    o = void 0; try { for (var s, i = document.querySelectorAll(".js-csv-data tbody tr")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value; - 1 === u.textContent.toLowerCase().indexOf(t) ? u.classList.add("d-none") : u.classList.remove("d-none") } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } } }) }), define("github/legacy/pages/commits", ["../../navigation", "invariant", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("navigation:keyopen", ".commits-list-item", function(e) { var t = e.target.querySelector(".commit-title > a");
            t && t.click() }), (0, n.on)("navigation:keydown", ".commits-list-item", function(e) {
            (0, r.default)(e instanceof CustomEvent, "github/legacy/pages/commits.js:14"); var t = e.target.querySelector(".commit-title > a"); "c" === e.detail.hotkey && t && (t.click(), e.preventDefault(), e.stopPropagation()) }), (0, n.on)("menu:activated", ".js-diffbar-commits-menu", function(t) { var n = t.target.querySelector(".in-range");
            n && (0, e.focus)(t.target, n) }) }), define("github/legacy/pages/diffs/helpers", ["exports"], function(e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.matchHash = function(e) { var t = e.match(/#(diff-[a-f0-9]+)([L|R])(\d+)-?([L|R])?(\d+)?$/i); if (null != t && 6 === t.length) return t; var n = e.match(/#(discussion-diff-[0-9]+)([L|R])(\d+)-?([L|R])?(\d+)$/i); return null != n && 6 === n.length ? n : null } }), define("github/legacy/pages/diffs/expander", ["../../../query-selector", "../../../preserve-position", "../../../hash-change", "invariant", "../../../fragment-target", "../../../sticky-scroll-into-view", "./helpers", "../../../diffs/progressive", "../../../fetch", "delegated-events"], function(e, t, n, r, a, o, s, i, u, l) {
        function c(e) { return e && e.__esModule ? e : { default: e } }

        function d(e, t) { var n, r, s, u, l, c, v, g, p, h, y, b, j, L, w; return regeneratorRuntime.async(function(x) { for (;;) switch (x.prev = x.next) {
                    case 0:
                        if (n = e.anchor, r = e.side, s = e.line, u = e.lastLine, l = e.hashFragment, c = e.partialHashFragment, v = (0, a.findElementByFragmentName)(document, n)) { x.next = 4; break } return x.abrupt("return");
                    case 4:
                        if (g = v.nextElementSibling) { x.next = 7; break } return x.abrupt("return");
                    case 7:
                        if ((p = m(g, r, s, u)).length) { x.next = 27; break } if (!(h = (0, a.findElementByFragmentName)(document, l))) { x.next = 13; break } return (0, o.scrollIntoView)(h), x.abrupt("return");
                    case 13:
                        if (y = g.querySelector(".js-diff-load-container")) { x.next = 16; break } return x.abrupt("return");
                    case 16:
                        return x.prev = 16, x.next = 19, regeneratorRuntime.awrap((0, i.loadDiff)(y));
                    case 19:
                        (b = (0, a.findElementByFragmentName)(document, l)) instanceof HTMLElement && (0, o.scrollIntoView)(b), x.next = 26; break;
                    case 23:
                        x.prev = 23, x.t0 = x.catch(16), (0, o.scrollIntoView)(g);
                    case 26:
                        return x.abrupt("return");
                    case 27:
                        return x.next = 29, regeneratorRuntime.awrap(function(e, t) { return Promise.all(e.map(function(e) { return f(e, t) })) }(p, c));
                    case 29:
                        j = 1, L = (0, a.findElementByFragmentName)(document, l), (w = m(g, r, s, u)).length ? d(e, t) : L ? (0, o.scrollIntoView)(L) : t < j && d(e, t + 1);
                    case 33:
                    case "end":
                        return x.stop() } }, null, this, [
                [16, 23]
            ]) }

        function f(n, r) { var a, o, s, i, l, c, d, f, m, v; return regeneratorRuntime.async(function(p) { for (;;) switch (p.prev = p.next) {
                    case 0:
                        return a = void 0, r ? (o = "R" === r.slice(-1) ? "data-right-range" : "data-left-range", s = n.getAttribute(o) || "", i = parseInt(s.split("-")[0], 10), a = r + i) : a = n.hash.slice(1), l = n.getAttribute("data-url"), (0, g.default)(l, "github/legacy/pages/diffs/expander.js:136"), c = new URL(l, window.location.origin), (d = new URLSearchParams(c.search.slice(1))).append("anchor", a), c.search = d.toString(), p.next = 10, regeneratorRuntime.awrap((0, u.fetchSafeDocumentFragment)(document, c));
                    case 10:
                        f = p.sent, m = (0, e.closest)(n, ".js-expandable-line"), v = function(e, t) { var n = e.nextElementSibling; return n && n.matches(t) ? n : null }(m, ".file-diff-line"), (0, t.preservingScrollPosition)(v, function() { m.replaceWith(f) });
                    case 14:
                    case "end":
                        return p.stop() } }, null, this) }

        function m(t, n, r, a) { var o = parseInt(r, 10),
                s = parseInt(a, 10); return (0, e.querySelectorAll)(t, ".js-expand", HTMLAnchorElement).filter(function(e) { var t = "R" === n ? "data-right-range" : "data-left-range",
                    r = (e.getAttribute(t) || "").split("-"),
                    a = parseInt(r[0], 10),
                    i = parseInt(r[1], 10); return a <= o && o <= i || (o <= a && i <= s || a <= s && s <= i) }) } var v = c(n),
            g = c(r);
        (0, v.default)(function() { var e = function(e) { if (e) { var t = (0, s.matchHash)(e); if (t) { var n = t[1],
                            r = t[2],
                            a = t[3]; return { anchor: n, side: r, line: a, lastLine: t[5], hashFragment: n + r + a, partialHashFragment: n + r } } } }(window.location.hash);
            e && ((0, a.findElementByFragmentName)(document, e.hashFragment) && !e.lastLine || d(e, 0)) }), (0, l.on)("click", ".js-expand", function(e) { e.preventDefault(), (0, g.default)(e.currentTarget instanceof HTMLAnchorElement, "github/legacy/pages/diffs/expander.js:116"), f(e.currentTarget, null) }) }), define("github/behaviors/inline-comment", ["exports", "../query-selector", "delegated-events", "invariant", "../onfocus"], function(e, t, n, r, a) {
        function o(e) { var n = (0, t.query)(e, ".js-inline-comment-form-container");
            n.classList.add("open"), (0, t.query)(n, ".js-write-tab").click(), (0, t.query)(n, ".js-comment-field").focus() }

        function s(e) { e.reset(); var r = (0, t.closest)(e, ".js-inline-comment-form-container");
            r.classList.remove("open"), (0, n.fire)(r, "inlinecomment:collapse") } Object.defineProperty(e, "__esModule", { value: !0 }), e.focusForm = o, e.blurForm = s; var i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        (0, n.on)("click", ".js-toggle-inline-comment-form", function(e) { o((0, t.closest)(e.currentTarget, ".js-line-comments")) }), (0, n.on)("quote:selection", ".js-line-comments", function(e) { o(e.currentTarget) }), (0, a.onKey)("keydown", ".js-inline-comment-form-container form .js-comment-field", function(e) { var n = e.target; if ((0, i.default)(n instanceof HTMLTextAreaElement, "github/behaviors/inline-comment.js:36"), !n.classList.contains("js-navigation-enable") && "Escape" === e.key && 0 === n.value.length) { s((0, t.closest)(n, "form", HTMLFormElement)), e.preventDefault() } }), (0, n.on)("click", ".js-hide-inline-comment-form", function(e) { s((0, t.closest)(e.currentTarget, "form", HTMLFormElement)) }) }), define("github/legacy/pages/diffs/line-comments", ["../../../behaviors/inline-comment", "../../../form", "../../../query-selector", "invariant", "selector-observer", "delegated-events", "../../../parse-html", "../../../remote-form"], function(e, t, n, r, a, o, s, i) {
        function u(e, t) { var n = e.nextElementSibling; return n && n.matches(t) ? n : null }

        function l(e) { var n = e.querySelector(".js-toggle-file-notes");
            n instanceof HTMLInputElement && (0, t.changeValue)(n, !0) }

        function c() { var e = !0,
                t = !1,
                n = void 0; try { for (var r, a = document.querySelectorAll(".file .js-inline-comments-container")[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) { var o = r.value,
                        s = o.querySelectorAll(".js-comments-holder > *").length > 0,
                        i = o.querySelector(".js-inline-comment-form-container"),
                        u = !!i && i.classList.contains("open");
                    s || u || o.remove() } } catch (e) { t = !0, n = e } finally { try {!e && a.return && a.return() } finally { if (t) throw n } } }

        function d(e) { var t = (0, n.query)(document, e).firstElementChild;
            (0, m.default)(t, "github/legacy/pages/diffs/line-comments.js:203"); var r = t.cloneNode(!0),
                a = r.querySelector("textarea"); return a instanceof HTMLTextAreaElement && (a.value = ""), r }

        function f(e, t) { var r = !0,
                a = !1,
                o = void 0; try { for (var s, i = Object.keys(t)[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value,
                        l = e.elements.namedItem(u);
                    l instanceof HTMLInputElement && (l.value = t[u] || "") } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } var c = (0, n.query)(e, ".js-comment-field");
            c.id = c.id.replace(/^r\d+ /, "").replace("${anchor}", t.anchor || "").replace("${position}", t.position || "") } var m = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            v = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }();
        (0, o.on)("click", ".js-add-single-line-comment", function(t) { var r = t.currentTarget;
            (0, m.default)(r instanceof Element, "github/legacy/pages/diffs/line-comments.js:17");
            l((0, n.closest)(r, ".file")); var a = function(e) { return u((0, n.closest)(e, "tr"), ".js-inline-comments-container") }(r) || function(e) { var t = (0, n.closest)(e, "tr"),
                        r = d("#js-inline-comments-single-container-template"),
                        a = r.querySelector(".js-inline-comment-form"); return a instanceof HTMLFormElement && f(a, { path: e.getAttribute("data-path"), anchor: e.getAttribute("data-anchor"), position: e.getAttribute("data-position"), line: e.getAttribute("data-line") }), t.after(r), r }(r),
                o = Array.from(a.querySelectorAll(".js-line-comments")).pop();
            (0, e.focusForm)(o) }), (0, o.on)("click", ".js-add-split-line-comment", function(t) { var r = t.currentTarget;
            l((0, n.closest)(r, ".file")); var a = (0, n.closest)(r, "tr"),
                o = "addition" === r.getAttribute("data-type") ? "js-addition" : "js-deletion",
                s = function(e, t, n) { var r = e.querySelector(".js-line-comments." + t); if (r) return r; var a = d("#js-inline-comments-split-form-container-template");
                    a.classList.add(t); var o = a.querySelector(".js-inline-comment-form");
                    o instanceof HTMLFormElement && f(o, n); var s = e.querySelectorAll("." + t);
                    s[s.length - 1].after(a); var i = !0,
                        u = !1,
                        l = void 0; try { for (var c, m = s[Symbol.iterator](); !(i = (c = m.next()).done); i = !0) c.value.remove() } catch (e) { u = !0, l = e } finally { try {!i && m.return && m.return() } finally { if (u) throw l } } return a }(function(e) { var t = u(e, ".js-inline-comments-container"); return t || (t = d("#js-inline-comments-split-container-template"), e.after(t), t) }(a), o, { type: r.getAttribute("data-type"), anchor: r.getAttribute("data-anchor"), path: r.getAttribute("data-path"), position: r.getAttribute("data-position"), line: r.getAttribute("data-line") }),
                i = Array.from(s.querySelectorAll(".js-line-comments")).pop();
            (0, e.focusForm)(i) }), (0, i.remoteForm)(".js-inline-comment-form", function(t, r) { var a, o, i, u, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return a = void 0, d.prev = 1, d.next = 4, regeneratorRuntime.awrap(r.json());
                    case 4:
                        a = d.sent, d.next = 16; break;
                    case 7:
                        if (d.prev = 7, d.t0 = d.catch(1), !d.t0.response) { d.next = 15; break } o = void 0; try { o = d.t0.response.json } catch (e) {} if (!o) { d.next = 15; break } return function(e, t) { var r = (0, n.query)(e, ".js-comment-form-error"),
                                a = void 0;
                            a = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors : "There was an error posting your comment.", r.textContent = a, r.style.display = "block", r.classList.remove("d-none") }(t, o), d.abrupt("return");
                    case 15:
                        throw d.t0;
                    case 16:
                        i = a.json, u = i.inline_comment, l = t.closest(".js-line-comments"), u && ((0, m.default)(l, "github/legacy/pages/diffs/line-comments.js:107"), (0, n.query)(l, ".js-comments-holder").append((0, s.parseHTML)(document, u))), (c = i.inline_comment_thread) && ((0, m.default)(l, "github/legacy/pages/diffs/line-comments.js:114"), l.replaceWith((0, s.parseHTML)(document, c))), (0, e.blurForm)(t);
                    case 23:
                    case "end":
                        return d.stop() } }, null, this, [
                [1, 7]
            ]) }), document.addEventListener("session:resume", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/legacy/pages/diffs/line-comments.js:171"),
            function(t) { var n = t.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [],
                    r = v(n, 2),
                    a = r[0],
                    o = r[1]; if (a) { var s = document.querySelector(".js-inline-comment-form input[name='in_reply_to'][value='" + o + "']"); if (s) { var i = s.closest(".js-line-comments");
                        i && (0, e.focusForm)(i) } } }(t.detail.targetId),
            function(e) { var t = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [],
                    n = v(t, 2),
                    r = n[0],
                    a = n[1]; if (r) { var o = document.querySelector(".js-add-line-comment[data-anchor='" + r + "'][data-position='" + a + "']");
                    o && o.click() } }(t.detail.targetId) }), (0, a.observe)(".js-comment", { remove: c }), document.addEventListener("inlinecomment:collapse", function() { c() }) }), define("github/legacy/pages/diffs/line-highlight", ["selector-observer"], function(e) {
        function t(e) { return Math.floor(e / 2) }

        function n(e, n) { var r = e.parentElement; if (r) { var a = r.children,
                    o = void 0; if (4 === a.length)
                    for (var s = 0, i = a.length; s < i; s++) { a[s] === e && (o = t(s)) }
                for (var u = 0, l = a.length; u < l; u++) { var c = a[u];
                    null != o && t(u) !== o || c.classList.toggle("is-hovered", n) } } }(0, e.observe)(".diff-table", function(e) {
            function t() { a && n(a, !1), a = null }

            function r(e) { a && n(a, !1), (a = e.target.closest("td.blob-code")) && n(a, !0) } var a = null; return { add: function() { e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", t), e.addEventListener("mouseover", r) }, remove: function() { e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", t), e.removeEventListener("mouseover", r) } } }) }), define("github/legacy/pages/diffs/linkable-line-number", ["delegated-events", "selector-observer", "../../../hash-change", "../../../fragment-target", "./helpers"], function(e, t, n, r, a) {
        function o(e) { return Math.floor(e / 2) }

        function s() { var e = void 0,
                t = void 0,
                n = void 0,
                s = void 0,
                i = void 0,
                l = void 0,
                c = void 0,
                d = void 0; if (u) { for (n = 0, i = u.length; n < i; n++)(e = u[n]).classList.remove("selected-line");
                u = null } var f = window.location.hash,
                m = (0, a.matchHash)(f); if (m) { var v = m[1] + m[2] + m[3]; if (v && (c = (0, r.findElementByFragmentName)(document, v)), c && c.classList.contains("js-linkable-line-number")) { var g = c.parentNode.children; if (4 === g.length)
                        for (t = s = 0, l = g.length; s < l; t = ++s)(e = g[t]) === c && (d = o(t));
                    u = function() { var n = void 0,
                            r = void 0,
                            a = []; for (t = n = 0, r = g.length; n < r; t = ++n) e = g[t], null != d && o(t) !== d || (e.classList.toggle("selected-line"), a.push(e)); return a }() } } } var i = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, e.on)("click", ".js-linkable-line-number", function(e) { window.location.hash = this.id, e.preventDefault() }); var u = null;
        (0, i.default)(s), (0, t.observe)(".blob-expanded", s), (0, t.observe)(".js-diff-progressive-loader", function(e) { e.addEventListener("load", s) }), (0, t.observe)(".js-diff-entry-loader", function(e) { e.addEventListener("load", s) }) }), define("github/legacy/pages/diffs/prose_diff", ["invariant", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("click", ".js-rich-diff.collapsed .js-expandable", function(e) { e.preventDefault(); var t = e.target.closest(".js-rich-diff");
            (0, n.default)(t, "github/legacy/pages/diffs/prose_diff.js:9"), t.classList.remove("collapsed") }), (0, t.on)("click", ".js-show-rich-diff", function(e) { var t = e.currentTarget.closest(".js-warn-no-visible-changes"); if (t) { t.classList.add("d-none"); var r = t.parentElement;
                (0, n.default)(r, "github/legacy/pages/diffs/prose_diff.js:20"); var a = r.querySelector(".js-no-rich-changes");
                a && a.classList.remove("d-none") } }) }), define("github/legacy/pages/diffs/split", ["selector-observer", "invariant"], function(e, t) {
        function n() { var e = document.body;
            (0, r.default)(e, "github/legacy/pages/diffs/split.js:8"); var t = document.querySelector("meta[name=diff-view]"),
                n = t && t instanceof HTMLMetaElement ? t.content : "",
                a = document.querySelector(".file-diff-split"),
                o = document.querySelector(".CommunityTemplate-header"),
                s = !!("split" === n && a || document.querySelector(".wants-full-width-container"));
            e.classList.toggle("full-width", s); var i = !!o;
            e.classList.toggle("full-width-p0", i) } var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.observe)("meta[name=diff-view]", { add: n, remove: n }), (0, e.observe)(".file-diff-split", { add: n, remove: n }), (0, e.observe)(".js-compare-tab.selected", { add: n, remove: n }), (0, e.observe)(".wants-full-width-container", { add: n, remove: n }), (0, e.observe)(".CommunityTemplate-header", { add: n, remove: n }) }), define("github/legacy/pages/diffs/toggle-file-notes", ["selector-observer", "../../../form", "delegated-events", "../../../query-selector"], function(e, t, n, r) {
        (0, n.on)("change", ".js-toggle-file-notes", function() { this.closest(".file").classList.toggle("show-inline-notes", this.checked) }), (0, n.on)("click", ".js-toggle-all-file-notes", function(e) { var n = (0, r.querySelectorAll)(document, ".js-toggle-file-notes", HTMLInputElement),
                a = n.some(function(e) { return e.checked }),
                o = !0,
                s = !1,
                i = void 0; try { for (var u, l = n[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { var c = u.value;
                    (0, t.changeValue)(c, !a) } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } e.preventDefault() }), (0, e.observe)(".js-inline-comments-container", function(e) { var t = void 0,
                n = e.closest(".file"); if (n) { return { add: t = function() { var e = null != n.querySelector(".js-inline-comments-container");
                        n.classList.toggle("has-inline-notes", e) }, remove: t } } }) }), define("github/legacy/pages/diffs/tr-collapsing", ["selector-observer"], function(e) {
        function t(e) { var t = e.parentElement,
                n = t.querySelectorAll("td.js-line-comments").length,
                r = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
            t.classList.toggle("is-collapsed", r > 0 && n === r) }(0, e.observe)("td.js-line-comments.is-collapsed", { add: function(e) { t(e) }, remove: function(e) { t(e) } }) }), define("github/legacy/pages/directory", ["../../jquery"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.default)(document).on("focusin", ".js-url-field", function() { var e = this; return setTimeout(function() { return (0, t.default)(e).select() }, 0) }) }), define("github/legacy/pages/early_access_tracking", ["../../google-analytics", "../../jquery"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        document.querySelector(".js-account-membership-form") && ((0, n.default)(document).one("change.early-access-tracking", ".js-account-membership-form", function() {
            (0, e.trackEvent)({ category: "Large File Storage", action: "attempt", label: "location: early access form" }) }), (0, n.default)(document).on("submit.early-access-tracking", ".js-account-membership-form", function() {
            (0, e.trackEvent)({ category: "Large File Storage", action: "submit", label: "location: early access form" }) })) }), define("github/legacy/pages/edit_repositories/options", ["../../../onfocus", "../../../typecast", "../../../jquery", "../../../visible", "../../../fetch", "delegated-events", "../../../query-selector"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } } var u = i(t),
            l = i(n),
            c = i(r),
            d = /[^0-9A-Za-z_\-.]/g;
        (0, e.onInput)(".js-repository-name", function(e) { var t = (0, u.default)(e.target, HTMLInputElement),
                n = (0, u.default)(t.form, HTMLFormElement),
                r = (0, s.query)(n, ".js-rename-repository-button", HTMLButtonElement),
                a = (0, l.default)(".js-form-note");
            a.html("Will be renamed as <strong>" + t.value.replace(d, "-") + "</strong>"), d.test(t.value) ? a.show() : a.hide(), r.disabled = !t.value || t.value === t.getAttribute("data-original-name") }), (0, o.on)("click", ".js-repo-team-suggestions-view-all", function(e) { e.preventDefault(), (0, a.fetchText)(this.href).then(function(e) { return function(t) { var n = (0, l.default)(Array.from((0, l.default)(".js-repo-toggle-team:checked")).filter(c.default)).map(function() { return this.value }),
                        r = (0, l.default)(e).closest("ul"); return r.html(t), n.each(function() { return r.find(".js-repo-toggle-team[value=" + this + "]").prop("checked", !0) }) } }(this)) }) }), define("github/legacy/pages/edit_repositories/repository-collabs", ["../../../query-selector", "../../../jquery", "selector-observer", "../../../form", "delegated-events"], function(e, t, n, r, a) {
        function o(e, t) { var n = t.querySelector(".js-repo-access-error"); return n.textContent = e, n.classList.remove("d-none") }

        function s() { var e = void 0,
                t = void 0,
                n = document.querySelectorAll(".js-repo-access-error"),
                r = []; for (e = 0, t = n.length; e < t; e++) { var a = n[e];
                a.textContent = "", r.push(a.classList.add("d-none")) } return r }

        function i(e) { return e.classList.toggle("is-empty", !e.querySelector(".js-repo-access-entry")) }

        function u() { var t = document.getElementById("collaborators");
            t && ((0, e.query)(t, ".js-add-new-collab", HTMLButtonElement).disabled = !0, (0, l.default)(t.querySelector(".js-add-repo-access-field")).data("autocompleted")) } var l = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.observe)(".js-add-new-collab", u), (0, a.on)("autocomplete:autocompleted:changed", ".js-add-repo-access-field", function() {
            (0, l.default)(this).data("autocompleted") ? this.form.querySelector(".js-add-new-collab").disabled = !1 : u() }), (0, a.on)("selectmenu:selected", ".js-repo-access-team-select", function() { var e = this.querySelector(".js-repo-access-team-select-option.selected").getAttribute("data-team-id"),
                t = this.closest(".js-repo-access-group").querySelector(".js-add-repo-access-field");
            t.value = e, (0, r.submit)(t.form) }), (0, l.default)(document).on("ajaxSend", ".js-add-repo-access-form", function() { s() }), (0, l.default)(document).on("ajaxSuccess", ".js-add-repo-access-form", function(t, n, r, a) { var s = void 0,
                l = this.closest(".js-repo-access-group"),
                c = this.querySelector(".js-add-repo-access-field");
            s = "teams" === l.id || "project-collaborators" === l.id ? l.querySelector(".js-repo-access-list") : l.querySelector(".js-repo-access-list-invites"); var d = c.value; if (c.value = "", a.error) return o(a.error, l); if (u(), s.insertAdjacentHTML("beforeend", a.html), i(l), a.seats || 0 === a.seats) { var f = 1 === a.seats ? "seat" : "seats",
                    m = document.getElementById("available-seats");
                m && (m.innerHTML = a.seats + " " + f) } return "teams" === l.id ? function(t) { var n = void 0,
                    r = void 0,
                    a = document.querySelector(".js-repo-access-team-select"); if (a) { var o = 0,
                        s = a.querySelectorAll(".js-repo-access-team-select-option"); for (n = 0, r = s.length; n < r; n++) { var i = s[n],
                            u = i.classList;
                        t === i.getAttribute("data-team-id") && (u.add("has-access"), u.remove("selected")), u.contains("has-access") || o++ } if (0 === o) return (0, e.closest)(a, ".js-repo-access-group").classList.add("no-form") } }(d) : void 0 }), (0, l.default)(document).on("ajaxSuccess", ".js-remove-repo-access-form", function() { s(); var t = this.closest(".js-repo-access-entry"),
                n = this.closest(".js-repo-access-group"); return "teams" === n.id && function(t) { var n = document.querySelector(".js-repo-access-team-select"); if (n) { var r = n.querySelector("[data-team-id='" + t + "']");
                    r && r.classList.remove("has-access"), (0, e.closest)(n, ".js-repo-access-group").classList.remove("no-form") } }(t.getAttribute("data-team-id")), t.remove(), i(n) }), (0, l.default)(document).on("ajaxError", ".js-remove-repo-access-form", function() { return o(this.getAttribute("data-error-message"), this.closest(".js-repo-access-group")), !1 }) }), define("github/legacy/pages/edit_repositories/repository-options", ["invariant", "../../../fetch", "delegated-events", "selector-observer", "../../../throttled-input", "../../../jquery", "../../../query-selector", "../../../form"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e) { var t = e.querySelector(".js-authorized-pushers"),
                n = parseInt(t.getAttribute("data-limit")),
                r = t.querySelectorAll(".js-authorized-user-or-team").length;
            t.classList.toggle("at-limit", r >= n) }

        function c(e) { var t = e.querySelector(".js-value"),
                n = e.closest("form"); return n.querySelector(".js-item-value").value = t.textContent, n }

        function d() { document.removeEventListener("facebox:afterClose", d); var e = (0, s.query)(document, ".js-permission-options").getAttribute("data-current-form"); if (e) { var t = (0, s.query)(document, ".js-permission-options form." + e + " .js-navigation-container"); if (t) { var n = t.querySelector(".js-original-selected"); if (n) { var r = n.querySelector(".js-value"),
                            a = n.querySelector(".js-select-button-text"),
                            o = t.querySelector(".js-item-value"),
                            i = t.querySelector(".js-navigation-item.selected"),
                            u = t.closest(".Box-row"); if (r && a && o && o instanceof HTMLInputElement && i && u) { var l = u.querySelector(".js-select-button");
                            l && (o.value = r.textContent, i.classList.remove("selected"), n.classList.add("selected"), l.textContent = a.textContent) } } } } } var f = u(e),
            m = u(o);
        (0, n.on)("change", ".js-repo-data-opt-in", function() { var e = this.closest(".js-repo-data-services"),
                t = this.checked,
                n = !0,
                r = !1,
                a = void 0; try { for (var o, s = e.querySelectorAll(".js-repo-data-options")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { o.value.classList.toggle("active", t) } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } var i = !0,
                u = !1,
                l = void 0; try { for (var c, d = e.querySelectorAll(".js-repo-data-option")[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) { var f = c.value;
                    t ? f.removeAttribute("disabled") : (f.setAttribute("disabled", "disabled"), f.removeAttribute("checked")) } } catch (e) { u = !0, l = e } finally { try {!i && d.return && d.return() } finally { if (u) throw l } } }), (0, n.on)("change", ".js-default-branch", function() { var e = (0, s.query)(document, ".js-default-branch-confirmation", HTMLInputElement);
            (0, s.query)(document, ".js-change-default-branch-button", HTMLButtonElement).disabled = this.value === e.getAttribute("data-original-value"), e.value = this.value }), (0, n.on)("change", ".js-repo-features-form input[type=checkbox]", function() { var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
            e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading") }), (0, m.default)(document).on("ajaxSuccess", ".js-repo-features-form", function(e, t, n, r) { Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success") }), /^\s*</.test(r) && (0, m.default)(document.querySelector(".js-repo-nav")).replaceWith(r) }), (0, m.default)(document).on("ajaxError", ".js-repo-features-form", function() { Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed"); var t = e.closest(".js-repo-option").querySelector("input[type=checkbox]");
                t.checked = !t.checked }) }), (0, n.on)("change", ".js-merge-features-form input[type=checkbox]", function() { Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) { return e.classList.remove("errored") }); var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
            e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading") }), (0, m.default)(document).on("ajaxSuccess", ".js-merge-features-form", function() { Array.from(this.querySelectorAll(".errored")).forEach(function(e) { return e.classList.remove("errored") }), Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) { e.classList.add("d-none") }), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success") }) }), (0, m.default)(document).on("ajaxError", ".js-merge-features-form", function(e) { Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) { e.classList.remove("d-none") }), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed"); var t = e.closest(".js-repo-option");
                t.classList.add("errored"); var n = t.querySelector("input[type=checkbox]");
                n.checked = !n.checked }), Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) { e.classList.remove("status-indicator-success") }), e.preventDefault() }), (0, n.on)("change", ".js-protect-branch", function() { var e = this.closest(".js-protected-branch-settings"),
                t = this.checked;
            Array.from(e.querySelectorAll(".js-protected-branch-options")).forEach(function(e) { e.classList.toggle("active", t) }), Array.from(e.querySelectorAll(".js-protected-branch-option")).forEach(function(e) { t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "disabled") }) }), (0, n.on)("change", ".js-required-status-toggle", function() { this.closest(".js-protected-branch-settings").querySelector(".js-required-statuses").classList.toggle("d-none", !this.checked) }), (0, n.on)("change", ".js-required-status-checkbox", function() { this.closest(".js-protected-branches-item").querySelector(".js-required-status-badge").classList.toggle("d-none", !this.checked) }), (0, n.on)("change", ".js-authorized-branch-pushers-toggle, .js-authorized-review-dismisser-toggle", function() { var e = this.closest(".js-protected-branch-options").querySelector(".js-authorized-pushers");
            e.classList.toggle("d-none", !this.checked), e.querySelector(".js-autocomplete-field").focus() }), (0, n.on)("change", ".js-protected-branch-include-admin-toggle", function() { var e = this.closest(".js-protected-branch-options").querySelectorAll(".js-protected-branch-admin-permission");
            Array.from(e).forEach(function(e) { e.classList.toggle("d-none"), e.classList.toggle("active", !e.classList.contains("d-none")) }) }), (0, n.on)("autocomplete:result", ".js-add-protected-branch-user-or-team", function(e) {
            (0, f.default)(e instanceof CustomEvent, "github/legacy/pages/edit_repositories/repository-options.js:178"); var n = e.detail.text,
                r = this.closest(".js-protected-branch-options"),
                a = this.closest(".js-autocomplete-container"),
                o = new URL(a.getAttribute("data-url"), window.location.origin),
                s = new URLSearchParams(o.search.slice(1));
            s.append("item", n), o.search = s.toString(); var i = r.querySelector(".js-authorized-users-and-teams"),
                u = i.querySelector("div[data-user-or-team-name='" + n + "']");
            u ? (a.querySelector(".js-autocomplete-field").value = "", u.querySelector(".js-protected-branch-pusher").classList.add("user-already-added")) : (0, t.fetchText)(o).then(function(e) { a.querySelector(".js-autocomplete-field").value = "", i.insertAdjacentHTML("beforeend", e), l(r) }) }), (0, n.on)("click", ".js-remove-authorized-user-or-team", function() { var e = this.closest(".js-protected-branch-options");
            this.closest(".js-authorized-user-or-team").remove(), l(e) }), (0, r.observe)("#pages-cname-field", function(e) {
            (0, a.addThrottledInputEventListener)(e, function() {
                (0, s.query)(document, ".js-pages-cname-save-btn", HTMLButtonElement).disabled = e.value === e.defaultValue }) }), (0, n.on)("selectmenu:selected", ".js-pages-source", function() { var e = (0, s.query)(document, ".js-pages-source-btn-text"),
                t = e.getAttribute("data-original-text") === e.textContent;
            (0, s.query)(document, ".js-pages-source-save-btn", HTMLButtonElement).disabled = t; var n = document.querySelector(".js-pages-theme-source-value"); if (n && n instanceof HTMLInputElement) { var r = this.querySelector(".selected input").value,
                    a = (0, s.query)(document, ".js-pages-theme-source-note"),
                    o = (0, s.query)(document, ".js-pages-theme-source-note-value"); if ("none" === r) { var i = n.getAttribute("data-original-value"),
                        u = o.getAttribute("data-original-text");
                    (0, f.default)(null != i && null != u, "Missing attributes [`data-original-value`, `data-original-text`] -- github/legacy/pages/edit_repositories/repository-options.js:237"), n.value = i, o.textContent = u, a.classList.remove("hide-note") } else n.value = r, o.textContent = e.textContent, t ? a.classList.add("hide-note") : a.classList.remove("hide-note") } }), (0, r.observe)(".js-enable-btn", function(e) { e.disabled = !1, e.classList.remove("tooltipped"), e.removeAttribute("aria-label") }), (0, n.on)("click", ".js-edit-repository-settings-select", function() { var e = c(this);
            (0, i.submit)(e) }), (0, n.on)("click", ".js-edit-repository-settings-select-with-confirm", function() { var e = c(this);
            e.closest(".js-permission-options").setAttribute("data-current-form", e.getAttribute("class")), document.addEventListener("facebox:afterClose", d) }) }), define("github/legacy/pages/editors/render", ["selector-observer", "../../../code-editor", "../../../jquery", "../../../visible"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o(e) { if (null != e) { var t = f.get(e[0]);
                null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null)) } }

        function s(e) { if (null != e) return e.removeClass(d), e.addClass("is-render-failed"), o(e) }

        function i(e, t) { return null == t && (t = function() { return !0 }),
                function() { var n = void 0; if (function() { try { return Array.from(e).some(c.default) } catch (t) { return Array.from(e).filter(c.default).length > 0 } }() && !e.hasClass("is-render-ready") && !e.hasClass("is-render-failed") && !e.hasClass("is-render-failed-fatally") && (!t || t())) return (n = f.get(e[0])) ? (console.error("Render timeout: " + JSON.stringify(n) + " Now: " + Date.now()), s(e)) : console.error("No timing data on $:", e) } }

        function u(e) { var t = (0, l.default)(e || this),
                n = f.get(t[0]);
            null != n && n.load || (o(t), function(e) { if (!f.get(e[0])) { var t = { load: null, hello: null, helloTimer: null, loadTimer: null };
                    t.load = Date.now(), t.helloTimer = setTimeout(i(e, function() { return !t.hello }), 1e4), t.loadTimer = setTimeout(i(e), 45e3), f.set(e[0], t) } }(t), t.addClass("is-render-automatic"), function(e) { e.addClass("is-render-requested") }(t)) } var l = a(n),
            c = a(r),
            d = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"].reduce(function(e, t) { return e + " " + t }),
            f = new WeakMap;
        (0, e.observe)(".js-render-target", u), (0, l.default)(window).on("message", function(e) { var n = void 0,
                r = null != (n = e.originalEvent) ? n : e,
                a = r.data,
                o = r.origin; if (a && o) { var i = function() { try { return JSON.parse(a) } catch (t) { return e = t, a } }(),
                    u = i.type,
                    c = i.identity,
                    m = i.body,
                    v = i.payload,
                    g = function(e) { var t = ".js-render-target"; return e ? (0, l.default)(t + "[data-identity='" + e + "']") : (0, l.default)(t) }(c); if (u && m && 1 === g.length && o === g.attr("data-host") && "render" === u) return function(e, n, r, a, o) { var i = void 0,
                        u = void 0,
                        l = void 0,
                        c = void 0; switch (a) {
                        case "hello":
                            if ((f.get(e[0]) || { untimed: !0 }).hello = Date.now(), l = { type: "render:cmd", body: { cmd: "ack", ack: !0 } }, i = { type: "render:cmd", body: { cmd: "branding", branding: !1 } }, (c = null != (u = e.find("iframe").get(0)) ? u.contentWindow : void 0) && "function" == typeof c.postMessage && c.postMessage(JSON.stringify(l), "*"), c && "function" == typeof c.postMessage && c.postMessage(JSON.stringify(i), "*"), e.hasClass("is-local")) { var m = (0, t.getCodeEditor)(e.parents(".js-code-editor")[0]); return null == m ? null : (i = { type: "render:data", body: m.code() }, c && "function" == typeof c.postMessage ? c.postMessage(JSON.stringify(i), "*") : null) } break;
                        case "error":
                            return s(e);
                        case "error:fatal":
                            return s(e), e.addClass("is-render-failed-fatal");
                        case "error:invalid":
                            return s(e), e.addClass("is-render-failed-invalid");
                        case "loading":
                            return e.removeClass(d), e.addClass("is-render-loading");
                        case "loaded":
                            return e.removeClass(d), e.addClass("is-render-loaded");
                        case "ready":
                            if (e.removeClass(d), e.addClass("is-render-ready"), null != o && null != o.height) return e.height(o.height); break;
                        case "resize":
                            return null != o && null != o.height && e.hasClass("is-render-ready") ? e.height(o.height) : console.error("Resize event sent without height or before ready");
                        default:
                            return console.error("Unknown message [" + n + "]=>'" + a + "'") } }(g, u, 0, m, v) } }) }), define("github/legacy/pages/explore", ["../../query-selector", "selector-observer", "../../remote-form", "delegated-events"], function(e, t, n, r) {
        function a() { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = document.querySelectorAll(".js-newsletter-frequency-choice.selected")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { a.value.classList.remove("selected") } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } var s = (0, e.query)(document, ".js-newsletter-frequency-radio:enabled:checked");
            (0, e.closest)(s, ".js-newsletter-frequency-choice").classList.add("selected") }(0, t.observe)(".js-subscription-toggle", function() { a() }), (0, r.on)("change", ".js-newsletter-frequency-radio", function() { a() }), (0, n.remoteForm)(".js-subscription-toggle", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.text());
                    case 2:
                        (r = (0, e.query)(t, ".selected .notice")).classList.add("visible"), setTimeout(function() { r.classList.remove("visible") }, 2e3);
                    case 5:
                    case "end":
                        return a.stop() } }, null, this) }), (0, n.remoteForm)(".js-explore-newsletter-form", function(t, n) { var r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return o.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        r = o.sent, (a = (0, e.closest)(t, ".js-explore-newsletter-container")).replaceWith(r.html);
                    case 5:
                    case "end":
                        return o.stop() } }, null, this) }) }), define("github/legacy/pages/files/ref_create", ["../../../form", "delegated-events", "invariant"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, t.on)("navigation:open", ".js-create-branch", function(t) { return (0, r.default)(t.currentTarget instanceof HTMLFormElement, "github/legacy/pages/files/ref_create.js:8"), (0, e.submit)(t.currentTarget), !1 }) }), define("github/legacy/pages/files/repo_next", ["delegated-events"], function(e) {
        (0, e.on)("click", ".js-toggle-lang-stats", function(e) { var t = document.querySelector(".js-stats-switcher-viewport"); if (null != t) { var n = 0 !== t.scrollTop ? "is-revealing-overview" : "is-revealing-lang-stats";
                t.classList.toggle(n), e.preventDefault() } }) }), define("github/animate", ["exports"], function(e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.animate = function(e) { return new Promise(function(t) {
                function n() { window.requestAnimationFrame(function(a) {!1 !== e(a - r) ? (r = a, n()) : t() }) } var r = performance.now();
                n() }) } }), define("github/legacy/pages/generated_pages/theme_picker", ["../../../animate", "../../../typecast", "../../../document-ready", "../../../form", "../../../jquery"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var i = o(t),
            u = o(a),
            l = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            c = function() {
                function e(t) { s(this, e); var n = (0, u.default)(t);
                    this.name = n.attr("data-theme-name"), this.slug = n.attr("data-theme-slug"), this.gem = n.attr("data-theme-gem"), this.selected = n.hasClass("selected"), this.baseHref = n.attr("href") } return l(e, [{ key: "wrappedKey", value: function(e, t) { return null == t && (t = null), t ? t + "[" + e + "]" : e } }, { key: "params", value: function(e) { null == e && (e = null); var t = {}; return t[this.wrappedKey("theme_slug", e)] = this.slug, t } }, { key: "previewSrc", value: function() { return [this.baseHref, u.default.param(this.params())].join("&") } }]), e }(),
            d = function() {
                function t() { var e = this;
                    s(this, t), this.$pagePreview = (0, u.default)("#page-preview"), this.$contextLoader = (0, u.default)(".theme-picker-spinner"), this.$fullPicker = (0, u.default)(".theme-picker-thumbs"), this.$miniPicker = (0, u.default)(".theme-picker-controls"), this.$scrollBackwardsLinks = (0, u.default)(".theme-toggle-full-left"), this.$scrollForwardsLinks = (0, u.default)(".theme-toggle-full-right"), this.$prevLinks = (0, u.default)(".theme-picker-prev"), this.$nextLinks = (0, u.default)(".theme-picker-next"), this.themeLinksContainer = this.$fullPicker.find(".js-theme-selector"), this.themeLinks = this.themeLinksContainer.find(".theme-selector-thumbnail"), this.themes = [], this.themeLinks.each(function(t, n) { var r = new c(n);
                        r.selected && (e.selectedTheme = r), e.themes.push(r) }), this.scrolledPage = 0, this.selectedTheme = this.selectedTheme || this.themes[0], this.$pagePreview.on("load", function() { return e.onPagePreviewLoad() }), this.$scrollBackwardsLinks.click(function() { return e.scrollThemeLinksContainer(-1) }), this.$scrollForwardsLinks.click(function() { return e.scrollThemeLinksContainer(1) }), this.$prevLinks.click(function() { return e.onThemeNavPrevClick() }), this.$nextLinks.click(function() { return e.onThemeNavNextClick() }), this.themeLinks.click(function(t) { return e.onThemeLinkClick(t) }), (0, u.default)(".theme-picker-view-toggle").click(function(t) { return e.onHideClick(t) }), (0, u.default)("#page-edit").click(this.onEditClick), (0, u.default)("#page-publish").click(function() { return e.onPublishClick() }), this.theme(this.selectedTheme), this.updateScrollLinks() } return l(t, [{ key: "onPagePreviewLoad", value: function() { this.$contextLoader.removeClass("visible") } }, { key: "onThemeNavPrevClick", value: function() { return this.theme(this.prevTheme()) } }, { key: "onThemeNavNextClick", value: function() { return this.theme(this.nextTheme()) } }, { key: "onThemeLinkClick", value: function(e) { return this.theme(this.themeForLink(e.currentTarget)), !1 } }, { key: "onHideClick", value: function(e) { this.$fullPicker.toggle(), this.$miniPicker.toggle(), this.scrollToTheme(this.theme(), !1); return (0, u.default)(e.currentTarget).toggleClass("open") } }, { key: "onEditClick", value: function() { return (0, r.submit)((0, i.default)(document.getElementById("page-edit-form"), HTMLFormElement)), !1 } }, { key: "onPublishClick", value: function() { var e = (0, u.default)("#page-publish-form"),
                            t = this.theme(); return t && e.find('input[name="page[theme_slug]"]').val(t.slug), (0, r.submit)((0, i.default)(document.getElementById("page-publish-form"), HTMLFormElement)), !1 } }, { key: "scrollThemeLinksContainer", value: function(e) { this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks() } }, { key: "updateScrollLinks", value: function() { var e = 0 === this.scrolledPage,
                            t = this.$scrollBackwardsLinks[0],
                            n = this.$scrollForwardsLinks[0];
                        t.disabled = e, t.classList.toggle("disabled", e), n.disabled = !e, n.classList.toggle("disabled", !e) } }, { key: "selectedThemeIndex", value: function() { return this.themes.indexOf(this.selectedTheme) } }, { key: "prevTheme", value: function() { var e = (this.selectedThemeIndex() - 1) % this.themes.length; return e < 0 && (e += this.themes.length), this.themes[e] } }, { key: "nextTheme", value: function() { return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length] } }, { key: "themeForLink", value: function(e) { return this.themes[this.themeLinks.index((0, u.default)(e))] } }, { key: "linkForTheme", value: function(e) { return (0, u.default)(this.themeLinks[this.themes.indexOf(e)]) } }, { key: "scrollToTheme", value: function(t) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.scrolledPage = Math.floor(this.themes.indexOf(t) / 6); var r = 0; if (this.scrolledPage > 0) { var a = this.linkForTheme(this.themes[6 * this.scrolledPage])[0];
                            r = a.offsetLeft } var o = this.themeLinksContainer[0],
                            s = r - o.scrollLeft; if (n && 0 !== s) {
                            (0, e.animate)(function(e) { if (!(e < 0)) { var t = o.scrollLeft;
                                    o.scrollLeft = Math[r - t > 0 ? "min" : "max"](t + s * (e / 150), r); return t !== o.scrollLeft && void 0 } }) } else o.scrollLeft = r } }, { key: "theme", value: function(e) { return null == e && (e = null), e ? (this.selectedTheme = e, this.showPreviewFor(e), this.themeLinks.removeClass("selected"), this.linkForTheme(e).addClass("selected"), this.scrollToTheme(e), this.$miniPicker.find(".js-theme-name").text(e.name), !1) : this.selectedTheme } }, { key: "showPreviewFor", value: function(e) { if (this.$contextLoader.addClass("visible"), e.gem) this.$pagePreview.attr("src", e.baseHref);
                        else { var t = this.$fullPicker.find("form");
                            t.find('input[name="theme_slug"]').val(e.slug), (0, r.submit)(t[0]) } } }]), t }();
        n.ready.then(function() { document.getElementById("theme-picker-wrap") && new d }) }), define("github/legacy/pages/gist/drag_drop", ["selector-observer", "../../../google-analytics", "invariant", "../../../query-selector"], function(e, t, n, r) {
        function a(e) {
            (0, r.query)(document, ".js-gist-dropzone").classList.remove("d-none"), e.stopPropagation(), e.preventDefault() }

        function o(e) { null != e.target.classList && e.target.classList.contains("js-gist-dropzone") && e.target.classList.add("d-none") }

        function s(e) { var n = void 0,
                a = void 0,
                o = e.dataTransfer.files,
                s = function() { var r = o[n];
                    (0, t.trackEvent)({ category: "Interaction", action: "File Drop", label: r.type }),
                    function(e) { return new Promise(function(t, n) { var r = new FileReader; return r.onload = function() {
                                (0, i.default)("string" == typeof r.result, "github/legacy/pages/gist/drag_drop.js:80"); var a = r.result; return a && !/\0/.test(a) ? t({ file: e, data: a }) : n(new Error("invalid file")) }, r.readAsText(e) }) }(r).then(function(t) { r = t.file; var n = t.data; return e.target.dispatchEvent(new CustomEvent("gist:filedrop", { bubbles: !0, cancelable: !0, detail: { file: r, text: n } })) }, function() {}) }; for (n = 0, a = o.length; n < a; n++) s();
            (0, r.query)(document, ".js-gist-dropzone").classList.add("d-none"), e.stopPropagation(), e.preventDefault() } var i = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, e.observe)(".js-gist-dropzone", { add: function() { var e = document.body;
                (0, i.default)(e, "github/legacy/pages/gist/drag_drop.js:59"), e.addEventListener("dragenter", a), e.addEventListener("dragleave", o), e.addEventListener("dragover", a), e.addEventListener("drop", s) }, remove: function() { var e = document.body;
                (0, i.default)(e, "github/legacy/pages/gist/drag_drop.js:67"), e.removeEventListener("dragenter", a), e.removeEventListener("dragleave", o), e.removeEventListener("dragover", a), e.removeEventListener("drop", s) } }) }), define("github/legacy/pages/gist/gist_edit", ["invariant", "../../../document-ready", "selector-observer", "../../../code-editor", "../../../throttled-input", "../../../jquery", "../../../onfocus", "../../../fetch", "delegated-events", "../../../form"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e) { var t = void 0,
                n = void 0,
                r = void 0,
                a = void 0,
                o = void 0,
                s = e.querySelector(".js-gist-files"),
                i = document.getElementById("js-gist-file-template");
            (0, p.default)(i, "github/legacy/pages/gist/gist_edit.js:27"); var u = document.createElement("div");
            u.innerHTML = i.textContent; var l = u.querySelectorAll("[id]"); for (n = 0, a = l.length; n < a; n++)(t = l[n]).removeAttribute("id"); var c = u.querySelector(".js-code-textarea");
            null != c && c.setAttribute("id", "blob_contents_" + Date.now()); var d = u.children; for (r = 0, o = d.length; r < o; r++) t = d[r], s.append(t); return s.lastElementChild }

        function d(e) { return (0, r.getAsyncCodeEditor)(e.closest(".js-code-editor")) }

        function f(e) { var t = void 0,
                n = void 0,
                r = e.querySelectorAll(".js-code-textarea"); for (t = 0, n = r.length; t < n; t++) { if (r[t].value.trim().length > 0) return !0 } return !1 }

        function m() { var e = void 0,
                t = void 0,
                n = document.querySelectorAll(".js-gist-create"),
                r = []; for (e = 0, t = n.length; e < t; e++) { var a = n[e];
                (0, p.default)(a instanceof HTMLButtonElement, "`.js-gist-create` must be HTMLButtonElement -- github/legacy/pages/gist/gist_edit.js:89"), r.push(a.disabled = !f(a.form)) } return r }

        function v(e) { var t = e.getAttribute("data-language-detection-url"); if (t) return (0, i.fetchJSON)(t + "?filename=" + encodeURIComponent(e.value)).then(function(t) { return d(e).then(function(e) { return e.setMode(t.language) }) }) }

        function g(e) { var t = void 0,
                n = void 0,
                r = e.querySelectorAll(".js-remove-gist-file"),
                a = []; for (t = 0, n = r.length; t < n; t++) { var o = r[t];
                a.push(o.classList.toggle("d-none", r.length < 2)) } return a } var p = l(e),
            h = l(o);
        (0, u.on)("change", ".js-code-textarea", function() { m() }), (0, s.onFocus)(".js-gist-filename", function(e) { d(e.closest(".js-code-editor")).then(function() {
                (0, a.addThrottledInputEventListener)(e, v) }), e.addEventListener("blur", function() { return (0, a.removeThrottledInputEventListener)(e, v) }, { once: !0 }) }), (0, u.on)("click", ".js-add-gist-file", function(e) { e.preventDefault();
            c(this.closest(".js-blob-form")).scrollIntoView() }), (0, h.default)(document).on("gist:filedrop", ".js-blob-form", function(e) { var t = e.originalEvent.detail,
                n = t.file,
                r = t.text,
                a = function(e) { var t = void 0,
                        n = void 0,
                        r = e.querySelectorAll(".js-gist-file"); for (t = 0, n = r.length; t < n; t++) { var a = r[t],
                            o = a.querySelector(".js-gist-filename"),
                            s = a.querySelector(".js-blob-contents"); if (!o.value && !s.value) return a } return c(e) }(this),
                o = a.querySelector(".js-gist-filename"); return o.value = n.name, v(o), d(o).then(function(e) { return e.setCode(r) }), a.scrollIntoView() }), (0, u.on)("click", ".js-remove-gist-file", function(e) { e.preventDefault(); var t = void 0,
                n = void 0,
                r = this.closest(".js-gist-file"),
                a = r.querySelectorAll(".js-gist-deleted input"); for (t = 0, n = a.length; t < n; t++) { a[t].disabled = !1 } r.querySelector(".js-code-editor").remove() }), t.ready.then(function() { m() }), (0, n.observe)(".js-remove-gist-file", function(e) { var t = e.closest(".js-gist-files"); return { add: function() { return g(t) }, remove: function() { return g(t) } } }) }), define("github/legacy/pages/gist/task_lists", ["../../../jquery"], function(e) {
        (0, function(e) { return e && e.__esModule ? e : { default: e } }(e).default)(document).on("ajaxComplete", ".js-gist-file-update-container .js-comment-update", function(e, t) { if (200 === t.status) { var n = JSON.parse(t.responseText); if (this.action = n.url, n.authenticity_token) { this.querySelector("input[name=authenticity_token]").value = n.authenticity_token } } }) }), define("github/legacy/pages/header", ["delegated-events"], function(e) {
        (0, e.on)("click", ".js-skip-to-content", function(e) { var t = document.getElementById("start-of-content"); if (t) { var n = t.nextElementSibling;
                n instanceof HTMLElement && (n.setAttribute("tabindex", "-1"), n.focus()) } e.preventDefault() }) }), define("github/legacy/pages/hooks", ["../../query-selector", "invariant", "../../form", "../../throttled-input", "../../fetch", "../../jquery", "../../sudo", "../../facebox", "delegated-events", "selector-observer", "../../typecast"], function(e, t, n, r, a, o, s, i, u, l, c) {
        function d(e) { return e && e.__esModule ? e : { default: e } }

        function f(t) { var n = (0, e.querySelectorAll)(document, ".js-hook-event-checkbox", HTMLInputElement),
                r = !0,
                a = !1,
                o = void 0; try { for (var s, i = n[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value;
                    u.checked = u.matches(t) } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } } var m = d(t),
            v = d(o),
            g = d(s),
            p = d(i),
            h = d(c),
            y = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            b = new WeakMap;
        (0, l.observe)(".js-hook-url-field", function(e) {
            function t() { var t = void 0; try { t = new URL(e.value) } catch (e) {} e.form.classList.toggle("is-invalid-url", !("" === e.value || t && /^https?:/.test(t.protocol))), e.form.classList.toggle("is-ssl", !(!t || "https:" !== t.protocol)) }(0, r.addThrottledInputEventListener)(e, t), t() }), (0, u.on)("click", ".js-hook-toggle-ssl-verification", function(t) { t.preventDefault(); var n = (0, e.query)(document, ".js-ssl-hook-fields"),
                r = (0, e.query)(document, ".js-hook-ssl-verification-field", HTMLInputElement);
            n.classList.toggle("is-not-verifying-ssl"), n.classList.contains("is-not-verifying-ssl") ? (r.value = "1", (0, u.fire)(document, "facebox:close")) : r.value = "0" }), (0, u.on)("change", ".js-hook-event-choice", function(t) { var n = (0, h.default)(t.currentTarget, HTMLInputElement),
                r = n.checked && "custom" === n.value,
                a = n.closest(".js-hook-events-field"); if (a && a.classList.toggle("is-custom", r), n.checked)
                if (r) {
                    (0, e.query)(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1 } else "push" === n.value ? f('[value="push"]') : "all" === n.value && f(".js-hook-wildcard-event") }), (0, u.on)("details:toggled", ".js-hook-secret", function(t) { var n = t.currentTarget,
                r = (0, e.query)(n, "input[type=password]", HTMLInputElement);
            n.classList.contains("open") ? (r.disabled = !1, r.focus()) : r.disabled = !0 }), (0, u.on)("details:toggled", ".js-hook-delivery-item", function(e) { var t = e.currentTarget,
                n = t.querySelector(".js-hook-delivery-details");
            n && !b.get(t) && (0, g.default)("low").then(function() { b.set(t, !0), n.classList.add("is-loading"); var e = n.getAttribute("data-url");
                (0, m.default)(e, "github/legacy/pages/hooks.js:119"), (0, a.fetchText)(e).then(function(e) { n.outerHTML = e, n.classList.remove("is-loading") }, function() { n.classList.add("has-error"), n.classList.remove("is-loading") }) }) }), (0, u.on)("click", ".js-hook-delivery-details .js-tabnav-tab", function(t) { var n = t.currentTarget,
                r = (0, e.closest)(n, ".js-hook-delivery-details"),
                a = !0,
                o = !1,
                s = void 0; try { for (var i, u = r.querySelectorAll(".js-tabnav-tab, .js-tabnav-tabcontent")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { i.value.classList.remove("selected") } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } n.classList.add("selected"); var l = n.getAttribute("data-tab-target");
            (0, m.default)(l, "github/legacy/pages/hooks.js:135"); var c = r.querySelector('.js-tabnav-tabcontent[data-tab-name="' + l + '"]');
            c && c.classList.add("selected") }), (0, u.on)("click", ".js-hook-deliveries-pagination-button", function(e) { e.preventDefault(); var t = e.currentTarget,
                n = t.parentElement;
            (0, m.default)(n, "github/legacy/pages/hooks.js:146"), (0, g.default)("low").then(function() { n.classList.add("loading"); var e = t.getAttribute("href");
                (0, m.default)(e, "github/legacy/pages/hooks.js:152"), (0, a.fetchText)(e).then(function(e) { n.outerHTML = e }) }) }), (0, u.on)("click", ".js-redeliver-hook-delivery-init-button", function(e) { e.preventDefault(); var t = e.currentTarget.getAttribute("href");
            (0, g.default)("low").then(function() {
                (0, p.default)({ div: t }) }) }), (0, v.default)(document).on("ajaxSuccess", ".js-redeliver-hook-form", function(t, n) { var r = t.currentTarget.getAttribute("data-delivery-guid"),
                a = (0, e.query)(document, '.js-hook-delivery-details[data-delivery-guid="' + r + '"]'),
                o = a.parentElement;
            (0, m.default)(o, "github/legacy/pages/hooks.js:178"), (0, u.fire)(document, "facebox:close"), a.outerHTML = n.responseText;
            (0, e.query)(o, "poll-include-fragment").addEventListener("load", function() { var t = (0, e.query)(o, ".js-hook-delivery-details"),
                    n = (0, e.query)(o, ".js-item-status"),
                    r = t.getAttribute("data-status-class");
                n.classList.remove("success", "pending", "failure"), r && n.classList.add(r); var a = o.querySelector(".js-item-status-tooltip"),
                    s = t.getAttribute("data-status-message");
                a && s && a.setAttribute("aria-label", s) }) }), (0, v.default)(document).on("ajaxError", ".js-redeliver-hook-form", function(e) { e.currentTarget.parentElement.querySelector(".js-redelivery-dialog").classList.add("failed") }), (0, u.on)("submit", ".js-test-hook-form", function(t) { t.preventDefault(); var n = (0, h.default)(t.currentTarget, HTMLFormElement);
            (0, g.default)("low").then(function() {
                function t() { n.dispatchEvent(new CustomEvent("ajaxComplete", { bubbles: !0 })) } var r = (0, e.query)(document, ".js-test-hook-message");
                r.classList.remove("error", "success"), (0, a.fetch)(n.action, { method: n.method, body: new FormData(n) }).then(function() { r.classList.add("success") }, function(t) { r.classList.add("error"); var n = (0, e.query)(r, ".js-test-hook-message-errors");
                    null != t.response ? t.response.json().then(function(e) { n.textContent = e.errors }) : n.textContent = "Network request failed" }).then(t, t) }) }), (0, u.on)("click", ".js-hook-enforcement-select .js-navigation-item", function(t) { var r = t.currentTarget,
                a = (0, e.query)(t.currentTarget, ".js-value"),
                o = (0, e.closest)(r, "form", HTMLFormElement),
                s = (0, e.query)(o, ".js-enforcement-value", HTMLInputElement),
                i = a.textContent.split("_"),
                u = y(i, 2),
                l = u[0],
                c = u[1];
            s.value = l; var d = o.querySelector(".js-final-value");
            d && ((d = (0, h.default)(d, HTMLInputElement)).value = c ? "false" : "true"), (0, n.submit)(o) }) }), define("github/legacy/pages/integrations", ["../../query-selector", "../../jquery", "selector-observer", "delegated-events", "../../typecast"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s() { var e = document.getElementById("js-update-integration-permissions");
            null != e && e.removeAttribute("disabled") } var i = o(t),
            u = o(a);
        (0, n.observe)(".js-integration-permissions-selector", function() {
            (0, r.on)("change", "[id^=integration_permission_]", function() { var t = this.getAttribute("data-permission"),
                    n = this.getAttribute("data-resource"),
                    r = (0, e.querySelectorAll)(document, '.js-integration-hook-event[data-resource="' + n + '"]', HTMLInputElement),
                    a = (0, e.querySelectorAll)(document, ".js-integration-single-file-resource", HTMLInputElement),
                    o = (0, e.querySelectorAll)(document, '.js-dropdown-container[data-resource="' + n + '"]', HTMLElement);
                s(), "none" !== t ? ((0, i.default)(".js-integration-hook-event-permission-error[data-resource='" + n + "']").addClass("d-none"), (0, i.default)(".js-integration-single-file-permission-error").addClass("d-none"), r.forEach(function(e) { e.readOnly = !1 }), a.forEach(function(e) { e.readOnly = !1 }), this.closest(".js-list-group-item").classList.remove("disabled"), o.forEach(function(e) { return e.classList.remove("d-none") })) : (o.forEach(function(e) { return e.classList.add("anim-fade-in") }), o.forEach(function(e) { return e.classList.add("d-none") }), this.closest(".js-list-group-item").classList.add("disabled"), r.forEach(function(e) { e.readOnly = !0, e.checked = !1 }), "single_file" === n && a.forEach(function(e) { e.readOnly = !0, e.value = "" })) }), (0, r.on)("change", "[name^=integration]", s), (0, r.on)("click", ".js-integration-hook-event", function(t) { var n = (0, u.default)(t.currentTarget, HTMLInputElement); if (n.readOnly) { var r = (0, e.closest)(n, ".js-send-events");
                    (0, e.query)(r, ".js-integration-hook-event-permission-error").classList.remove("d-none"), t.preventDefault() } }), (0, r.on)("click", ".js-integration-single-file-resource", function(t) { var n = (0, u.default)(t.currentTarget, HTMLInputElement); if (n.readOnly) { var r = (0, e.closest)(n, ".js-single-file");
                    (0, e.query)(r, ".js-integration-single-file-permission-error").classList.remove("d-none"), t.preventDefault() } }) }) }), define("github/legacy/pages/issues/filters", ["../../../typecast", "../../../form", "delegated-events", "invariant"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } } var o = a(e),
            s = a(r);
        (0, n.on)("navigation:open", ".js-issues-custom-filter", function(e) { var n = (0, o.default)(e.currentTarget, HTMLFormElement),
                r = document.createElement("input");
            r.type = "hidden"; var a = n.getAttribute("data-name");
            (0, s.default)(a, "github/legacy/pages/issues/filters.js:13"), r.name = a; var i = n.querySelector(".js-new-item-name");
            (0, s.default)(i, "github/legacy/pages/issues/filters.js:17"), r.value = i.textContent, n.appendChild(r), (0, t.submit)(n) }) }), define("github/legacy/pages/issues/legacy", ["../../../hash-change"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.default)(function(e) { var t = e.newURL,
                n = t.match(/\/issues#issue\/(\d+)$/); if (n) { var r = n[1];
                window.location = t.replace(/\/?#issue\/.+/, "/" + r) } }), (0, t.default)(function(e) { var t = e.newURL,
                n = t.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/); if (n) { var r = n[1],
                    a = n[2];
                window.location = t.replace(/\/?#issue\/.+/, "/" + r + "#issuecomment-" + a) } }) }), define("github/legacy/pages/issues/list", ["../../../form", "selector-observer", "../../../onfocus", "invariant", "delegated-events"], function(e, t, n, r, a) { var o = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        (0, t.observe)(".js-issues-list-check:checked", { add: function(e) { e.closest(".js-issue-row").classList.add("selected") }, remove: function(e) { e.closest(".js-issue-row").classList.remove("selected") } }), (0, a.on)("navigation:keydown", ".js-issue-row", function(t) {
            (0, o.default)(t instanceof CustomEvent, "github/legacy/pages/issues/list.js:27"), "x" === t.detail.hotkey && (! function(t) { var n = t.querySelector(".js-issues-list-check");
                n && (0, e.changeValue)(n, !n.checked) }(t.currentTarget), t.preventDefault(), t.stopPropagation()) }), (0, n.onFocus)("#js-issues-search", function(e) {
            (0, o.default)(e instanceof HTMLInputElement, "github/legacy/pages/issues/list.js:39"), e.value = e.value }) }), define("github/legacy/pages/issues/replies", ["delegated-events", "../../../text", "../../../query-selector", "../../../onfocus", "../../../hotkey", "invariant", "../../../google-analytics"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } } var u = i(a),
            l = i(o);
        (0, e.on)("selectmenu:selected", ".js-saved-reply-container", function(e) { var r = (0, n.query)(e.target, ".js-saved-reply-body"),
                a = r.textContent.trim(),
                o = this.closest(".js-previewable-comment-form"),
                s = o.querySelector(".js-comment-field");
            (0, t.insertText)(s, a);
            o.querySelector(".js-saved-reply-id").value = r.getAttribute("data-saved-reply-id") }), (0, r.onKey)("keydown", ".js-saved-reply-shortcut-comment-field", function(e) { if ("Control+." === (0, u.default)(e)) {
                (0, l.default)(e.target instanceof HTMLElement, "github/legacy/pages/issues/replies.js:25"); var t = (0, n.closest)(e.target, ".js-previewable-comment-form");
                (0, n.query)(t, ".js-saved-reply-button").click(), e.preventDefault(), (0, s.trackEvent)({ category: "Markdown Toolbar", action: "shortcut", label: "saved reply" }) } }), (0, r.onKey)("keydown", ".js-saved-reply-filter-input", function(e) { if (/^Control\+[1-9]$/.test((0, u.default)(e))) {
                (0, l.default)(e.target instanceof HTMLElement, "github/legacy/pages/issues/replies.js:40"); var t = (0, n.closest)(e.target, ".js-previewable-comment-form").querySelectorAll(".js-navigation-item"),
                    r = Number(e.key),
                    a = t[r - 1];
                a && (a.click(), e.preventDefault(), (0, s.trackEvent)({ category: "Saved Replies", action: "shortcut", label: "saved reply number " + r })) } }) }), define("github/legacy/pages/issues/sidebar", ["../../../query-selector", "../../../form", "../../../jquery", "../../../typecast", "../../../fetch", "invariant", "delegated-events", "../../../parse-html"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e) { e instanceof HTMLFormElement ? (0, t.submit)(e) : f(e) }

        function c(e) { l((0, v.default)(e.currentTarget, Element)) }

        function d(e, t) { e.replaceWith((0, i.parseHTML)(document, t)) }

        function f(n, r) { var o, s, i, u, l; return regeneratorRuntime.async(function(c) { for (;;) switch (c.prev = c.next) {
                    case 0:
                        return o = function(n) { var r = (0, e.closest)(n, "form", HTMLFormElement),
                                a = (0, t.serializeArray)(r),
                                o = new FormData,
                                s = !0,
                                i = !1,
                                u = void 0; try { for (var l, c = a[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { var d = l.value;
                                    n.contains(function(e, t) { var n = !0,
                                            r = !1,
                                            a = void 0; try { for (var o, s = e.elements[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value; if (i.name === t.name && i.value === t.value) return i } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } }(r, d)) && o.append(d.name, d.value) } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } return o }(n), r && o.append(r.name, r.value), null == (s = n.getAttribute("data-authenticity-token")) && (i = (0, e.closest)(n, "form", HTMLFormElement).elements.namedItem("authenticity_token")) instanceof HTMLInputElement && (s = i.value), (0, g.default)(s, "github/legacy/pages/issues/sidebar.js:105"), o.append("authenticity_token", s), u = n.getAttribute("data-url"), (0, g.default)(u, "github/legacy/pages/issues/sidebar.js:111"), c.next = 10, regeneratorRuntime.awrap((0, a.fetchText)(u, { method: "post", body: o }));
                    case 10:
                        l = c.sent, d((0, e.closest)(n, ".js-discussion-sidebar-item"), l);
                    case 12:
                    case "end":
                        return c.stop() } }, null, this) } var m = u(n),
            v = u(r),
            g = u(o);
        (0, s.on)("selectmenu:selected", ".js-issue-sidebar-form", function(t) { var n = t.currentTarget,
                r = t.target,
                a = (0, e.closest)(r, ".js-select-menu"),
                o = a.hasAttribute("data-multiple"); if (r.hasAttribute("data-clear-assignees")) { var s = (0, e.closest)(r, ".js-menu-content"),
                    i = (0, e.querySelectorAll)(s, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement),
                    u = !0,
                    d = !1,
                    f = void 0; try { for (var m, v = i[Symbol.iterator](); !(u = (m = v.next()).done); u = !0) { var g = m.value;
                        g.disabled = !1, g.checked = !1 } } catch (e) { d = !0, f = e } finally { try {!u && v.return && v.return() } finally { if (d) throw f } } l(n) } else if (o) { var p = Number(a.getAttribute("data-max-options")); if (p) { var h = a.querySelectorAll('input[type="checkbox"]:checked').length;
                    (0, e.query)(a, ".js-max-warning").classList.toggle("d-none", h <= p) } n.addEventListener("menu:deactivate", c, { once: !0 }) } else l(n) }), (0, m.default)(document).on("ajaxSuccess", ".js-discussion-sidebar-item", function(e, t, n, r) { e.target.classList.contains("js-issue-sidebar-form") && d(e.currentTarget, r) }), (0, s.on)("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(t) { var n = (0, v.default)(t.currentTarget, HTMLButtonElement);
            f((0, e.closest)(n, ".js-issue-sidebar-form"), { name: n.name, value: n.value }), t.preventDefault() }), (0, s.on)("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(t) { var n = (0, v.default)(t.currentTarget, HTMLButtonElement);
            f((0, e.closest)(n, ".js-issue-sidebar-form"), { name: n.name, value: n.value }), t.preventDefault() }), (0, m.default)(document).on("ajaxSuccess", ".js-pages-preview-toggle-form", function(t, n, r, a) { 200 !== n.status && 201 !== n.status || ((0, e.query)(t.currentTarget, "button.btn").textContent = a.new_button_value) }), (0, s.on)("change", ".js-project-menu-checkbox", function(t) { var n = (0, v.default)(t.currentTarget, HTMLInputElement),
                r = (0, e.closest)(n, ".js-project-menu-container"),
                a = !0,
                o = !1,
                s = void 0; try { for (var i, u = (0, e.querySelectorAll)(r, ".js-project-menu-checkbox", HTMLInputElement)[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value;
                    l !== n && (l.name === n.name && (l.checked = n.checked, (0, e.closest)(l, ".select-menu-item").classList.toggle("selected", l.checked))) } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } }), (0, s.on)("click", ".js-prompt-dismiss", function(t) {
            (0, e.closest)(t.currentTarget, ".js-prompt").remove() }) }), define("github/legacy/pages/oauth", ["invariant", "../../typecast", "../../jquery", "delegated-events", "selector-observer", "../../query-selector"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { return e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length }

        function u(e) { var t = +e.getAttribute("data-max-repos"); if (t) return i(e) >= t }

        function l(e) { return e.querySelector(".js-all-repositories-radio").checked || function(e) { return i(e) > 0 }(e) }

        function c() { var e = 0;
            0 !== document.querySelectorAll(".js-integrations-install-repo-picked:not(.d-none)").length && (e = document.querySelectorAll(".js-repository-picker-result:not(.d-none)").length); var t = ""; if (e > 0) { t = "Selected " + e + " " + (e > 1 ? "repositories" : "repository") } return (0, m.default)(".js-integration-total-repos").text(t) } var d = s(e),
            f = s(t),
            m = s(n);
        (0, m.default)(document).on("ajaxSend", ".js-toggler-container .js-set-approval-state", function() { return this.closest(".js-toggler-container").classList.add("loading") }), (0, m.default)(document).on("ajaxComplete", ".js-toggler-container .js-set-approval-state", function() { return this.closest(".js-toggler-container").classList.remove("loading") }), (0, m.default)(document).on("ajaxSuccess", ".js-toggler-container .js-set-approval-state", function(e, t, n, r) { if (1 === r.approval_state) this.closest(".js-toggler-container").classList.add("on");
            else if (2 === r.approval_state) { var a = this.closest(".js-toggler-container");
                a.classList.add("revoked"), a.classList.remove("on") } }), (0, m.default)(document).on("ajaxSuccess", ".js-request-approval-facebox-form", function() { var e = this.getAttribute("data-container-id"); return (0, f.default)(document.getElementById(e), HTMLElement).classList.add("on"), (0, r.fire)(document, "facebox:close") }), (0, a.observe)(".js-integrations-install-form", function(e) {
            function t() { if (n.disabled = !l(this), null !== e.querySelector(".flash")) return i.disabled = u(this), e.querySelector(".flash").classList.toggle("d-none", !u(this)) } var n = e.querySelector(".js-integrations-install-form-submit"),
                a = e.querySelector(".js-autocomplete"),
                s = a.getAttribute("data-search-url"),
                i = e.querySelector(".js-autocomplete-field");
            e.addEventListener("change", t), (0, r.on)("click", ".js-repository-picker-remove", function() { return this.closest(".js-repository-picker-result").remove(), 0 === (0, o.query)(document, ".js-integrations-install-repo-picked").children.length && (0, o.query)(document, ".js-min-repository-error").classList.remove("d-none"), c(), t.call(e) }), (0, m.default)(document).on("focus", ".js-integrations-install-repo-picker .js-autocomplete-field", function() { return (0, o.query)(document, ".js-select-repositories-radio", HTMLInputElement).checked = !0, t.call(e) }), (0, r.on)("autocomplete:autocompleted:changed", ".js-integrations-install-repo-picker", function() { var e = void 0,
                    t = void 0,
                    n = s,
                    r = document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field"); for (e = 0, t = r.length; e < t; e++) { var o = (0, f.default)(r[e], HTMLInputElement);
                    n += ~n.indexOf("?") ? "&" : "?", n += o.name + "=" + encodeURIComponent(o.value) } a.setAttribute("data-search-url", n) }), (0, r.on)("autocomplete:result", ".js-integrations-install-repo-picker", function(n) {
                (0, d.default)(n instanceof CustomEvent, "github/legacy/pages/oauth.js:125"); var r = n.detail.text,
                    a = this.querySelector("#repo-result-" + r),
                    s = e.querySelector(".js-integrations-install-repo-picked");
                a.classList.remove("d-none"), s.insertBefore(a, s.firstChild), i.value = "", e.querySelector(".js-autocomplete-results").innerHTML = "", (0, o.query)(document, ".js-min-repository-error").classList.add("d-none"), c(), t.call(e) }), (0, r.on)("click", ".js-all-repositories-radio", function() {
                (0, o.query)(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), c() }), (0, r.on)("click", ".js-select-repositories-radio", function() {
                (0, o.query)(document, ".js-integrations-install-repo-picked").classList.remove("d-none"), c() }), (0, m.default)(document).on("submit", ".js-integrations-install-form", function() { this.querySelector(".js-all-repositories-radio").checked ? Array.from(this.querySelectorAll('input[name="repository_ids[]"]')).forEach(function(e) { return e.remove() }) : (0, m.default)(".js-autocomplete-results").empty() }) }) }), define("github/legacy/pages/orgs", ["delegated-events"], function(e) {
        (0, e.on)("submit", ".org form[data-results-container]", function(e) { e.preventDefault() }) }), define("github/legacy/pages/orgs/invitations/new", ["../../../../query-selector", "../../../../fetch", "delegated-events", "../../../../typecast"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        (0, n.on)("click", ".js-invitations-team-suggestions-view-all", function(n) { n.preventDefault(); var r = (0, a.default)(n.currentTarget, HTMLAnchorElement);
            (0, t.fetchSafeDocumentFragment)(document, r.href).then(function(t) { var n = (0, e.closest)(r, "ul");
                n.innerHTML = "", n.appendChild(t); var a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = (0, e.querySelectorAll)(document, ".js-invitation-toggle-team:checked", HTMLInputElement)[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value.value;
                        (0, e.query)(n, ".js-invitation-toggle-team[value=" + l + "]", HTMLInputElement).setAttribute("checked", "true") } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } }) }) }), define("github/legacy/pages/orgs/invitations/reinstate", ["invariant", "delegated-events", "selector-observer"], function(e, t, n) {
        function r() { var e = document.querySelector(".js-org-reinstate-forms"),
                t = document.querySelectorAll(".js-org-reinstate-option:checked"); if (e && 1 === t.length) { var n = t[0].getAttribute("data-form");
                (0, a.default)(null != n, "Missing attribute `data-form` -- github/legacy/pages/orgs/invitations/reinstate.js:19"); var r = e.getElementsByClassName("js-togglable-form"),
                    o = !0,
                    s = !1,
                    i = void 0; try { for (var u, l = r[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { u.value.classList.add("d-none") } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } var c = document.getElementById(n);
                (0, a.default)(c, "undefined -- github/legacy/pages/orgs/invitations/reinstate.js:29"), c.classList.remove("d-none") } } var a = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("change", ".js-org-reinstate-option", r), (0, n.observe)(".js-org-reinstate-forms", r) }), define("github/legacy/pages/orgs/members/change-role", ["invariant", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("change", ".js-change-org-role-selector", function(e) { var t = e.target; if ((0, n.default)(t instanceof HTMLInputElement, "github/legacy/pages/orgs/members/change-role.js:7"), t.form) { var r = t.form.querySelector(".js-change-org-role-submit");
                r instanceof HTMLButtonElement && (r.disabled = !1) } }) }), define("github/legacy/pages/orgs/members/index", ["invariant", "../../../../fetch", "delegated-events", "../../../../form", "../../../../onfocus", "../../../../throttled-input", "../../../../jquery", "../../../../sudo", "../../../../facebox", "../../../../query-selector", "../../../../remote-form", "../../../../document-ready", "../../../../parse-html"], function(e, t, n, r, a, o, s, i, u, l, c, d, f) {
        function m(e) { return e && e.__esModule ? e : { default: e } }

        function v(e) { var n = this,
                a = e.target;
            (0, g.default)(a instanceof HTMLElement, "github/legacy/pages/orgs/members/index.js:134"); var o = e.currentTarget;
            (0, g.default)(o instanceof HTMLElement, "github/legacy/pages/orgs/members/index.js:137"); var s = a.getAttribute("data-member-name") || a.value; if (s) { var i = o.getAttribute("data-action-type"); if (i) { var u = o.closest(".js-add-members-container"); if (u) { var l = parseInt(u.getAttribute("data-accessible-repositories-count")); if (isNaN(l) || l < 1) Promise.resolve().then(function() { return (0, r.submit)(n) });
                        else { e.preventDefault(); var c = new URL(u.getAttribute("data-url"), window.location.origin),
                                d = new URLSearchParams(c.search.slice(1));
                            d.append("member", s), d.append("action_type", i); var f = o.getAttribute("data-return-to");
                            f && d.append("return_to", f), c.search = d.toString(), u.classList.add("loading"), (0, t.fetchSafeDocumentFragment)(document, c).then(function(e) { u.classList.remove("loading"), u.innerHTML = null, u.appendChild(e) }).catch() } } } } } var g = m(e),
            p = m(s),
            h = m(i),
            y = m(u);
        (0, n.on)("click", ".js-member-remove-confirm-button", function(e) { e.preventDefault(); var n = new URL(this.getAttribute("data-url"), window.location.origin),
                r = new URLSearchParams(n.search.slice(1)),
                a = this.getAttribute("data-member-id"); if (a) r.append("member_ids[]", a);
            else { var o = !0,
                    s = !1,
                    i = void 0; try { for (var u, l = Array.from(document.querySelectorAll(".js-bulk-actions-container .js-bulk-actions-toggle:checked")).map(function(e) { return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id") }).sort()[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { var c = u.value;
                        r.append("member_ids[]", c) } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } } n.search = r.toString(), (0, y.default)(function() {
                (0, t.fetchText)(n).then(y.default) }) }), (0, n.on)("click", ".js-membership-tab", function() { var e = this.getAttribute("data-membership"),
                t = (0, l.query)(document, ".js-member-filter-field", HTMLInputElement),
                n = t.value,
                r = new RegExp("membership:[a-z-]+"),
                a = n.toString().trim().replace(r, "");
            t.value = (a + " " + e).replace(/\s\s/, " "), t.focus(), (0, o.dispatchThrottledInputEvent)(t);
            (0, l.query)(document, ".js-membership-tabs").classList.remove("selected"), this.classList.add("selected") }), (0, n.on)("click", ".js-member-search-filter", function(e) { e.preventDefault(); var t = this.getAttribute("data-filter"),
                n = this.closest(".js-select-menu").getAttribute("data-filter-on"),
                r = (0, l.query)(document, ".js-member-filter-field", HTMLInputElement),
                a = r.value,
                s = new RegExp(n + ":[a-z]+"),
                i = a.toString().trim().replace(s, "");
            r.value = (i + " " + t).replace(/\s\s/, " "), r.focus(), (0, o.dispatchThrottledInputEvent)(r) }), (0, a.onKey)("keydown", ".js-auto-submit-on-select .js-autocomplete-field", function(e) { "Enter" === e.key && e.preventDefault() }), (0, n.on)("autocomplete:result", ".js-auto-submit-on-select", function() { var e = this;
            Promise.resolve().then(function() { return (0, r.submit)(e) }) }), (0, n.on)("autocomplete:result", ".js-bulk-add-team-form .js-autocomplete-field", function(e) { if ((0, p.default)(this).data("autocompleted").indexOf("/") > 0) { var n = this.form.action,
                    r = this.form.method,
                    a = new FormData(this.form);
                (0, h.default)("low").then(function() {
                    (0, y.default)(function() {
                        (0, t.fetchText)(n, { method: r, body: a }).then(y.default) }) }), e.stopPropagation() } }); var b = "";
        d.ready.then(function() { var e = document.querySelector(".js-add-members-container");
            e && (b = e.innerHTML) }), (0, n.on)("click", ".js-approve-membership-request", v), (0, n.on)("autocomplete:result", ".js-add-team-member-form", v), document.addEventListener("facebox:close", function() { var e = document.querySelector(".js-add-members-container");
            e && (e.innerHTML = b) }), (0, c.remoteForm)(".js-add-org-member-form", function(e, t) { var n, r, a, o, s, i, u, c, d, m, v; return regeneratorRuntime.async(function(g) { for (;;) switch (g.prev = g.next) {
                    case 0:
                        return n = void 0, r = (0, l.query)(document, ".js-member-list"), e.classList.add("is-sending"), (a = document.querySelector(".flash-messages")) && a.remove(), g.prev = 5, g.next = 8, regeneratorRuntime.awrap(t.json());
                    case 8:
                        n = g.sent, g.next = 16; break;
                    case 11:
                        if (g.prev = 11, g.t0 = g.catch(5), g.t0.response || g.t0.response.json) { g.next = 15; break } return g.abrupt("return");
                    case 15:
                        r.insertAdjacentHTML("beforebegin", g.t0.response.json.message_html);
                    case 16:
                        if (!n) { g.next = 50; break } if (e.classList.remove("is-sending"), e.querySelector(".js-autocomplete-field").value = "", o = (0, l.query)((0, f.parseHTML)(document, n.json.list_item_html), "*"), !(s = o.getAttribute("data-login"))) { g.next = 49; break } i = !0, u = !1, c = void 0, g.prev = 25, d = r.children[Symbol.iterator]();
                    case 27:
                        if (i = (m = d.next()).done) { g.next = 35; break } if ((v = m.value).getAttribute("data-login") !== s) { g.next = 32; break } return v.remove(), g.abrupt("break", 35);
                    case 32:
                        i = !0, g.next = 27; break;
                    case 35:
                        g.next = 41; break;
                    case 37:
                        g.prev = 37, g.t1 = g.catch(25), u = !0, c = g.t1;
                    case 41:
                        g.prev = 41, g.prev = 42, !i && d.return && d.return();
                    case 44:
                        if (g.prev = 44, !u) { g.next = 47; break } throw c;
                    case 47:
                        return g.finish(44);
                    case 48:
                        return g.finish(41);
                    case 49:
                        r.prepend(o);
                    case 50:
                    case "end":
                        return g.stop() } }, null, this, [
                [5, 11],
                [25, 37, 41, 49],
                [42, , 44, 48]
            ]) }) }), define("github/legacy/pages/orgs/members/show", ["../../../../fetch", "delegated-events", "../../../../facebox"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, t.on)("click", ".js-remove-member-button", function(t) { t.preventDefault(); var n = new URL(this.getAttribute("data-url"), window.location.origin),
                a = new URLSearchParams(n.search.slice(1));
            a.append("member_ids[]", this.getAttribute("data-user-id")), a.append("redirect_to_path", this.getAttribute("data-redirect-to-path")), n.search = a.toString(), (0, r.default)(function() {
                (0, e.fetchText)(n).then(r.default) }) }) }), define("github/legacy/pages/orgs/migration/customize_member_privileges", ["../../../../query-selector", "../../../../document-ready", "../../../../debounce", "delegated-events"], function(e, t, n, r) {
        function a() {
            (0, e.query)(document, ".js-save-member-privileges-button-container").classList.toggle("member-privilege-radios-preserved", o() && s() && i()) }

        function o() { return "" === (0, e.query)(document, ".js-customize-member-privileges-default-repository-permission-radio:checked", HTMLInputElement).value }

        function s() { return "0" === (0, e.query)(document, ".js-customize-member-privileges-repository-creation-radio:checked", HTMLInputElement).value }

        function i() { return "secret" === (0, e.query)(document, ".js-customize-member-privileges-team-privacy-radio:checked", HTMLInputElement).value } var u = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, r.on)("change", ".js-customize-member-privileges-default-repository-permission-radio", function() {
            (0, e.query)(document, ".js-migrate-ability-list-item-default-repository-permission").classList.toggle("migrate-ability-not-possible", o()), a() }), (0, r.on)("change", ".js-customize-member-privileges-repository-creation-radio", function() {
            (0, e.query)(document, ".js-migrate-ability-list-item-members-can-create-repositories").classList.toggle("migrate-ability-not-possible", s()), a() }), (0, r.on)("change", ".js-customize-member-privileges-team-privacy-radio", function() {
            (0, e.query)(document, ".js-migrate-ability-list-item-team-privacy").classList.toggle("migrate-ability-not-possible", i()), a() }), t.ready.then(function() { var e = document.querySelector(".js-org-migration-settings-sidebar"); if (null != e) { var t = e.getBoundingClientRect(); if (null != t) { var n = t.top + window.pageYOffset - 16,
                        r = e.style.position,
                        o = e.style.top,
                        s = e.style.left,
                        i = e.style.width,
                        l = (0, u.default)(function() { var a = e.parentNode; if (null != a && a instanceof HTMLElement) { var u = a.getBoundingClientRect().right - t.width;
                                window.pageYOffset >= n ? (e.style.position = "fixed", e.style.top = "16px", e.style.left = u + "px", e.style.width = "250px") : (e.style.position = r, e.style.top = o, e.style.left = s, e.style.width = i) } }, 5);
                    window.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", l, { passive: !0 }), a() } } }) }), define("github/legacy/pages/orgs/migration/index", ["../../../../throttled-input", "../../../../fetch", "selector-observer", "../../../../query-selector"], function(e, t, n, r) {
        function a(e, t) { "" === t && ((0, r.query)(document, ".js-rename-owners-team-errors").innerHTML = ""), (0, r.query)(document, ".js-rename-owners-team-button").classList.toggle("disabled", !e), (0, r.query)(document, ".js-rename-owners-team-note").classList.toggle("d-none", "" !== t) }(0, n.observe)(".js-rename-owners-team-input", function(n) {
            (0, e.addThrottledInputEventListener)(n, function() {! function(e) { var n = e.value.trim().toLowerCase(),
                        o = e.form;
                    o.classList.add("is-sending"), o.classList.remove("is-name-check-fail", "is-name-check-success"); var s = new URL(e.getAttribute("data-check-url"), window.location.origin),
                        i = new URLSearchParams(s.search.slice(1));
                    i.append("name", n), s.search = i.toString(), (0, t.fetchText)(s).then(function(e) { if (o.classList.remove("is-sending"), "owners" === n || "" === n) return a(!1, "");
                        (0, r.query)(o, ".js-rename-owners-team-errors").innerHTML = e || ""; var t = !!document.querySelector(".js-error"); return a(!(t || !n), e), o.classList.toggle("is-name-check-fail", t), o.classList.toggle("is-name-check-success", !t && n) }) }(n) }) }) }), define("github/legacy/pages/orgs/new", ["../../../typecast", "../../../form", "selector-observer", "../../../onfocus", "../../../query-selector", "../../../remote-form"], function(e, t, n, r, a, o) { var s = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, r.onInput)(".js-new-organization-name", function(e) { var t = e.target,
                n = (0, a.closest)(t, "dd").querySelector(".js-field-hint-name");
            n && ("innerText" in n ? n.innerText = t.value : n.textContent = t.value) }), (0, r.onInput)(".js-company-name-input", function(e) { var t = (0, s.default)(e.target.form, HTMLFormElement),
                n = t.querySelector(".js-company-name-text"); if (n) { var r = (0, a.query)(t, ".js-corp-tos-link"),
                    o = t.querySelector(".js-tos-link");
                o && (o.classList.add("d-none"), o.setAttribute("aria-hidden", "true")), r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false"); var i = " on behalf of your company, " + e.target.value; "innerText" in n ? n.innerText = i : n.textContent = i } }), (0, n.observe)(".js-company-owned:not(:checked)", { add: function(e) { var n = (0, s.default)(e.form, HTMLFormElement),
                    r = (0, a.query)(n, ".js-company-name-input", HTMLInputElement),
                    o = (0, a.query)(document, ".js-company-name-text"),
                    i = (0, a.query)(document, ".js-corp-tos-link"),
                    u = (0, a.query)(document, ".js-tos-link");
                e.getAttribute("data-optional") && r.removeAttribute("required"), (0, t.changeValue)(r, ""), u.classList.remove("d-none"), u.setAttribute("aria-hidden", "false"), i.classList.add("d-none"), i.setAttribute("aria-hidden", "true"), "innerText" in o ? o.innerText = "" : o.textContent = "" } }), (0, n.observe)(".js-company-owned-autoselect", function(e) {
            function n() { if (r.checked && r.form) { var e = (0, a.query)(r.form, ".js-company-owned", HTMLInputElement);
                    (0, t.changeValue)(e, !0) } } var r = (0, s.default)(e, HTMLInputElement);
            r.addEventListener("change", n), n() }), (0, o.remoteForm)(".js-org-list-item .js-org-remove-item", function(e, t) { var n; return regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                    case 0:
                        return e.closest(".js-org-list-item").classList.add("d-none"), r.prev = 1, r.next = 4, regeneratorRuntime.awrap(t.text());
                    case 4:
                        r.next = 12; break;
                    case 6:
                        if (r.prev = 6, r.t0 = r.catch(1), e.closest(".js-org-list-item").classList.remove("d-none"), !(n = e.getAttribute("data-error-message"))) { r.next = 12; break } return r.abrupt("return", alert(n));
                    case 12:
                        e.closest(".js-org-list-item").remove();
                    case 13:
                    case "end":
                        return r.stop() } }, null, this, [
                [1, 6]
            ]) }) }), define("github/legacy/pages/orgs/per_seat", ["../../../query-selector", "../../../remote-form"], function(e, t) {
        function n(t) { for (var n in t.selectors) { var r = t.selectors[n],
                    a = document.querySelector(n);
                r && a && (a.textContent = r) } var o = 100 === t.filled_seats_percent;
            (0, e.query)(document, ".js-live-update-seats-percent").style.width = t.filled_seats_percent + "%", (0, e.query)(document, ".js-need-more-seats").classList.toggle("d-none", !o), (0, e.query)(document, ".js-add-org-member-form").classList.toggle("d-none", o) }(0, t.remoteForm)(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", function(e, t) { var r; return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, regeneratorRuntime.awrap(t.json());
                    case 2:
                        n((r = e.sent).json);
                    case 4:
                    case "end":
                        return e.stop() } }, null, this) }) }), define("github/legacy/pages/orgs/repositories/index", ["selector-observer", "../../../../hotkey"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.observe)(".js-repository-fallback-search", function(e) { e.addEventListener("keypress", function(e) { if ("Enter" === (0, n.default)(e)) { var t = new URL(this.getAttribute("data-url"), window.location.origin),
                        r = new URLSearchParams(t.search.slice(1)),
                        a = r.get("q") || "";
                    r.set("q", a + " " + this.value), t.search = r.toString(), window.location = t.toString() } }) }) }), define("github/legacy/pages/orgs/repositories/permission-select", ["../../../../typecast", "delegated-events", "../../../../remote-form", "../../../../form"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("selectmenu:selected", ".js-select-repo-permission", function(e) {
            (0, r.submit)((0, a.default)(e.currentTarget, HTMLFormElement)) }), (0, n.remoteForm)(".js-select-repo-permission", function(e, t) { var n, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return e.classList.remove("was-successful"), o.next = 3, regeneratorRuntime.awrap(t.json());
                    case 3:
                        n = o.sent, r = n.json, e.classList.add("was-successful"), (a = e.closest(".js-org-repo")) && a.classList.toggle("with-higher-access", r.members_with_higher_access);
                    case 8:
                    case "end":
                        return o.stop() } }, null, this) }) }), define("github/legacy/pages/orgs/security_settings/index", ["selector-observer", "../../../../facebox"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.observe)(".js-two-factor-needs-enforced", function(e) { e.addEventListener("submit", function(e) { e.target.querySelector("input[type=checkbox]").checked && (e.preventDefault(), (0, n.default)({ div: "#confirm-2fa-requirement" })) }) }), (0, e.observe)(".js-two-factor-enforcement-poller", function(e) { var t = e.getAttribute("data-redirect-url");
            e.addEventListener("load", function() { window.location.href = t }) }) }), define("github/legacy/pages/orgs/settings/change-default-repository-permission", ["../../../../form", "delegated-events", "../../../../query-selector"], function(e, t, n) {
        function r(t, r) { t.preventDefault(); var a = (0, n.query)(document, r, HTMLFormElement);
            (0, e.submit)(a) }(0, t.on)("click", ".js-change-default-permission-members-confirm", function(e) { r(e, ".js-change-default-permission-members-form") }), (0, t.on)("click", ".js-change-default-permission-users-confirm", function(e) { r(e, ".js-change-default-permission-users-form") }), (0, t.on)("change", ".js-auto-submit-on-change", function(t) { t.preventDefault(); var r = (0, n.closest)(t.target, "form", HTMLFormElement);
            r && (0, e.submit)(r) }) }), define("github/remote-submit", ["exports"], function(e) {
        function t(e) { var t = e.querySelector("input.is-submit-button-value"); return t instanceof HTMLInputElement ? t : null } Object.defineProperty(e, "__esModule", { value: !0 }), e.findPersistedSubmitButtonValue = t, e.persistSubmitButtonValue = function(e) { var n = e.closest("form"); if (n instanceof HTMLFormElement) { var r = t(n); if (e.name) { var a = e.matches("input[type=submit]") ? "Submit" : "",
                        o = e.value || a;
                    r || ((r = document.createElement("input")).type = "hidden", r.classList.add("is-submit-button-value"), n.prepend(r)), r.name = e.name, r.value = o } else r && r.remove() } } }), define("github/warn-unsaved-changes", ["./has-interactions", "selector-observer"], function(e, t) {
        function n() {
            (0, e.hasDirtyFields)(this) ? function(e) { var t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                window.onbeforeunload = function(e) { return e.returnValue = t, t } }(this) : r() }

        function r() { window.onbeforeunload = null }(0, t.observe)("[data-warn-unsaved-changes]", function(e) { e.addEventListener("input", n), e.addEventListener("change", n), e.addEventListener("submit", r) }) }), define("github/legacy/pages/orgs/settings/security", ["delegated-events", "../../../../facebox", "../../../../form", "invariant", "../../../../remote-submit", "../../../../query-selector", "../../../../warn-unsaved-changes"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i() { return (0, o.query)(document, ".js-saml-provider-settings-form", HTMLFormElement) }

        function u() { return i().querySelector(".js-saml-form-inputs") }

        function l() { return (0, o.query)(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement) }

        function c(e) { e && e.classList.remove("d-none") }

        function d() { return !(0, o.query)(document, ".js-org-enable-saml", HTMLInputElement).checked }

        function f() { return (0, o.query)(document, ".is-submit-button-value", HTMLInputElement) }

        function m() { return (0, o.query)(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === l().value && !("1" === (0, o.query)(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === (0, o.query)(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value }

        function v() { i().submit() } var g = s(t),
            p = s(r);
        (0, e.on)("click", ".js-org-enable-saml", function(e) { e.currentTarget.checked ? c(u()) : function(e) { e && e.classList.add("d-none") }(u()) }), (0, e.on)("click", ".js-saml-submit", function(e) { e.preventDefault(), (0, p.default)(e.currentTarget instanceof HTMLButtonElement, "github/legacy/pages/orgs/settings/security.js:120"), (0, a.persistSubmitButtonValue)(e.currentTarget), (0, n.submit)(i()) }), (0, e.on)("click", ".js-org-saml-confirm-enforce-button", function() { l().value = "true", (0, n.submit)(i()) }), (0, e.on)("submit", ".js-saml-provider-settings-form", function(e) { e.preventDefault(), "test_settings" === f().name ? v() : "save_settings" === f().name && (d() ? (0, g.default)({ div: "#disable-saml-confirmation" }) : m() ? (0, g.default)({ div: "#enforce-saml-confirmation" }) : v()) }), document.addEventListener("facebox:close", function() { if (document.querySelector("#facebox .js-disable-saml-confirmation")) { var e = document.querySelector(".js-org-enable-saml");
                e && e instanceof HTMLInputElement && (e.checked = !0, c(u())) } }) }), define("github/legacy/pages/orgs/team", ["../../../fetch", "delegated-events", "../../../jquery", "../../../query-selector", "../../../sudo"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } } var s = o(n),
            i = o(a);
        (0, t.on)("autocomplete:autocompleted:changed", ".js-team-add-user-name", function() {
            (0, s.default)(".js-team-add-user-button")[0].disabled = !(0, s.default)(this).data("autocompleted") }), (0, t.on)("click", ".js-team-remove-user", function(e) { e.preventDefault(), (0, s.default)(".js-team-add-user-form").removeClass("d-none"), (0, s.default)(".js-team-add-user-name").focus(), this.closest("li").remove() }), (0, t.on)("click", ".js-team-add-user-button", function(t) { t.preventDefault(); var n = this.closest(".js-team-add-user-form"),
                a = n.querySelector(".js-team-add-user-name"),
                o = a.value; if (o && (0, s.default)(a).data("autocompleted")) { a.value = ""; var u = (0, r.query)(document, ".js-team-user-logins"),
                    l = !0,
                    c = !1,
                    d = void 0; try { for (var f, m = u.querySelectorAll("li")[Symbol.iterator](); !(l = (f = m.next()).done); l = !0) { if (f.value.getAttribute("data-login") === o) return } } catch (e) { c = !0, d = e } finally { try {!l && m.return && m.return() } finally { if (c) throw d } }(0, i.default)("low").then(function() { var t = new URL(n.getAttribute("data-template-url"), window.location.origin),
                        r = new URLSearchParams(t.search.slice(1));
                    r.append("member", o), t.search = r.toString(), (0, e.fetchSafeDocumentFragment)(document, t).then(function(e) { u.appendChild(e), (0, s.default)(".js-login-field").prop("disabled", !1), n.classList.add("d-none") }), a.focus() }) } }) }), define("github/legacy/pages/orgs/teams/change-visibility", ["invariant", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("change", ".js-change-team-visibility-selector", function(e) { var t = e.target; if ((0, n.default)(t instanceof HTMLInputElement, "github/legacy/pages/orgs/teams/change-visibility.js:7"), t.form) { var r = t.form.querySelector(".js-change-team-visibility-submit");
                r instanceof HTMLButtonElement && (r.disabled = !1) } }) }), define("github/legacy/pages/orgs/teams/import", ["../../../../throttled-input", "selector-observer", "../../../../jquery", "delegated-events", "../../../../fetch", "../../../../query-selector", "../../../../sliding-promise-queue"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(e, t) { var n = e.querySelector(".js-save-button"),
                r = e.closest(".js-team").querySelector(".js-slug");
            e.classList.remove("is-checking"), t.error ? (n.disabled = !0, "exists" === t.error && (e.classList.add("is-exists"), t.slug && (r.textContent = t.slug))) : (n.disabled = !1, t.slug && (r.textContent = t.slug)) } var l = i(n),
            c = new(i(s).default);
        (0, l.default)(document).on("ajaxSend", ".js-ldap-import-groups-container", function(e, t) { return t.setRequestHeader("X-Context", "import") }), (0, r.on)("autocomplete:autocompleted:changed", ".js-team-ldap-group-field", function() { var e = this.closest(".js-ldap-group-adder");
            e && (e.classList.remove("is-exists"), e.querySelector(".js-ldap-group-adder-button").disabled = !(0, l.default)(this).data("autocompleted")) }), (0, r.on)("navigation:open", ".js-team-ldap-group-autocomplete-results .js-navigation-item", function(e) { var t = e.currentTarget,
                n = this.closest(".js-ldap-group-adder"),
                r = t.getAttribute("data-dn"),
                a = (0, o.closest)(t, ".js-ldap-import-groups-container");
            n.querySelector(".js-team-ldap-dn-field").value = r; var s = !0,
                i = !1,
                u = void 0; try { for (var l, c = a.querySelectorAll(".js-ldap-group-dn")[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { l.value.textContent === r && (n.classList.add("is-exists"), n.querySelector(".js-ldap-group-adder-button").disabled = !0) } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } } }), (0, l.default)(document).on("ajaxSend", ".js-import-container", function() { this.classList.add("is-importing"), this.querySelector(".js-ldap-group-adder-button").disabled = !0 }), (0, l.default)(document).on("ajaxComplete", ".js-import-container", function() { return this.classList.remove("is-importing") }), (0, l.default)(document).on("ajaxSuccess", ".js-ldap-group-adder", function(e, t, n, r) { var a = this.closest(".js-ldap-import-groups-container"),
                o = document.querySelector(".js-import-form-actions");
            a.classList.remove("is-empty");
            a.querySelector(".js-ldap-imported-groups").insertAdjacentHTML("afterbegin", r), this.reset(), this.querySelector(".js-team-ldap-group-field").focus(); var s = this.querySelector(".js-ldap-group-adder-button");
            s && (s.disabled = !0), o && o.classList.remove("d-none") }), (0, l.default)(document).on("submit", ".js-team-remove-group", function() { this.closest(".js-team").classList.add("is-removing"), (0, o.query)(document, ".js-team-ldap-group-field").focus() }), (0, l.default)(document).on("ajaxSuccess", ".js-team-remove-group", function() { this.closest(".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || ((0, o.query)(document, ".js-ldap-import-groups-container").classList.add("is-empty"), (0, o.query)(document, ".js-import-form-actions").classList.add("d-none")) }), (0, l.default)(document).on("ajaxError", ".js-team-remove-group", function() { this.closest(".js-team").classList.remove("is-removing") }), (0, r.on)("click", ".js-edit-team", function() { var e = this.closest(".js-team");
            e.classList.contains("is-removing") || (e.classList.add("is-editing"), e.querySelector(".js-team-name-field").focus()) }), (0, r.on)("click", ".js-cancel-team-edit", function() { var e = this.closest(".js-team"),
                t = e.querySelector(".js-team-form"),
                n = e.querySelector(".js-slug");
            e.classList.remove("is-editing"), t.classList.remove("is-exists"), n.textContent = n.getAttribute("data-original-slug"), t.reset() }), (0, l.default)(document).on("ajaxSuccess", ".js-team-form:not(.is-checking)", function(e, t, n, r) { var a = this.closest(".js-team");
            a.classList.remove("is-editing"), a.outerHTML = r }), (0, t.observe)(".js-team-name-field", function(t) {
            (0, e.addThrottledInputEventListener)(t, function() { var e = t.closest(".js-team-form");
                e.classList.remove("is-exists"), e.classList.add("is-checking"), e.querySelector(".js-save-button").disabled = !0; var n = new URL(t.getAttribute("data-check-url"), window.location.origin),
                    r = new URLSearchParams(n.search.slice(1));
                r.append("name", t.value), n.search = r.toString(), c.push((0, a.fetchJSON)(n, { headers: { "X-Context": "import" } })).then(function(t) { u(e, t) }, function(t) { u(e, { error: t }) }) }) }) }), define("github/legacy/pages/orgs/teams/index", ["../../../../throttled-input", "delegated-events", "../../../../query-selector"], function(e, t, n) {
        (0, t.on)("click", ".js-team-search-filter", function(t) { t.preventDefault(); var r = this.getAttribute("data-filter"),
                a = this.closest(".js-select-menu").getAttribute("data-filter-on"),
                o = (0, n.query)(document, ".js-team-search-field", HTMLInputElement),
                s = o.value,
                i = new RegExp(a + ":[a-z]+"),
                u = s.toString().trim().replace(i, "");
            o.value = (u + " " + r).replace(/\s\s/, " "), o.focus(), (0, e.dispatchThrottledInputEvent)(o) }) }), define("github/legacy/pages/orgs/teams/new", ["../../../../throttled-input", "../../../../fetch", "selector-observer", "delegated-events", "../../../../typecast", "../../../../facebox", "invariant", "../../../../query-selector"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e) { var n = e.value.trim(),
                r = e.form;
            r.classList.add("is-sending"), r.classList.remove("is-name-check-fail"), r.classList.remove("is-name-check-success"); var a = new URL(e.getAttribute("data-check-url"), window.location.origin),
                o = new URLSearchParams(a.search.slice(1));
            o.append("name", n), a.search = o.toString(), (0, t.fetchText)(a).then(function(t) { var a = void 0;
                r.classList.remove("is-sending"), r.querySelector(".js-team-name-errors").innerHTML = t || ""; var o = null != (a = e.getAttribute("data-original")) ? a.trim() : void 0,
                    s = o && n === o,
                    i = !!r.querySelector(".js-error"),
                    u = (i || !n) && !s; return r.querySelector(".js-create-team-button").disabled = u, r.classList.toggle("is-name-check-fail", i), r.classList.toggle("is-name-check-success", !i && n) }) }

        function c(e) { var t = (0, i.closest)(e, "form", HTMLFormElement),
                n = t.querySelector(".js-selected-team-id"),
                r = n && (0, d.default)(n, HTMLInputElement).value,
                a = (0, i.query)(t, ".js-team-privacy-closed"),
                o = (0, i.query)(t, ".js-team-privacy-secret"),
                s = (0, i.query)(a, "input", HTMLInputElement),
                u = (0, i.query)(o, "input", HTMLInputElement);
            o.classList.toggle("tooltipped", !!r), o.classList.toggle("text-gray", !!r), u.disabled = !!r, r && (s.checked = !0) } var d = u(a),
            f = u(o),
            m = u(s);
        (0, n.observe)(".js-new-team", function(t) {
            (0, e.addThrottledInputEventListener)(t, function() { l(t) }) }), (0, n.observe)(".js-new-org-team", function(e) { var t = e.querySelector(".js-new-team");
            t.value && l(t) }), (0, n.observe)(".js-select-team-menu", function(e) { c(e) }), (0, r.on)("selectmenu:selected", ".js-select-team-menu", function(e) { c(e.currentTarget) }), (0, r.on)("click", ".js-create-team-button", function(e) { var n = (0, i.closest)(e.currentTarget, "form"),
                r = (0, d.default)(n.querySelector(".js-already-selected-team-name"), HTMLInputElement),
                a = n.querySelector(".js-original-team-visibility"),
                o = (0, i.query)(n, ".js-team-privacy-secret"),
                s = (0, i.query)(o, "input", HTMLInputElement),
                u = function(e) { return e.value !== e.getAttribute("data-original-team-name") }(r),
                l = function(e, t) { return null != e && t.checked && "SECRET" !== e.getAttribute("data-original-team-visibility") }(a, s); if (u || l) { e.preventDefault(); var c = n.getAttribute("data-important-changes-summary-url");
                (0, m.default)(c, "github/legacy/pages/orgs/teams/new.js:101"); var v = new URL(c, window.location.origin),
                    g = new URLSearchParams(v.search.slice(1));
                g.append("parent_team", r.value), l && g.append("visibility_changed", l.toString()), u && g.append("parent_changed", u.toString()), v.search = g.toString(), (0, f.default)(function() {
                    (0, t.fetchSafeDocumentFragment)(document, v).then(function(e) {
                        (0, f.default)(e, "js-org-team-edit-change-parent-summary") }) }) } }), (0, r.on)("click", ".js-org-team-edit-change-parent-summary .js-confirm-change-parent", function() {
            (0, i.query)(document, ".js-org-team-form", HTMLFormElement).submit() }) }), define("github/legacy/pages/orgs/teams/show", ["delegated-events", "../../../../query-selector"], function(e, t) {
        (0, e.on)("click", ".js-rename-owners-team-next-btn", function() {
            (0, t.query)(document, ".js-rename-owners-team-about-content").classList.toggle("migrate-owners-content-hidden"), (0, t.query)(document, ".js-rename-owners-team-rename-form").classList.toggle("migrate-owners-content-hidden") }) }), define("github/legacy/pages/orgs/transform", ["selector-observer"], function(e) {
        (0, e.observe)(".js-org-transform-poller", function(e) { var t = e.getAttribute("data-redirect-url");
            e.addEventListener("load", function() { window.location.href = t }) }) }), define("github/legacy/pages/pages_composer", ["delegated-events", "invariant", "../../typecast"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t) { var n = e.value;
            e.value = t.textContent, t.textContent = n } var o = r(t),
            s = r(n);
        (0, e.on)("click", "#load-readme", function(e) {
            function t(e) { e.currentTarget.value !== u && (i.classList.add("d-none"), n.removeEventListener("input", t)) } var n = (0, s.default)(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
                r = document.getElementById("editor-body-buffer"),
                i = document.getElementById("undo-load-readme");
            (0, o.default)(r && i, "github/legacy/pages/pages_composer.js:11"); var u = r.textContent,
                l = e.currentTarget.getAttribute("data-readme-name");
            (0, o.default)(l, "github/legacy/pages/pages_composer.js:14"), a(n, r), (0, o.default)(e.currentTarget instanceof HTMLButtonElement, "github/legacy/pages/pages_composer.js:17"), e.currentTarget.disabled = !0, e.currentTarget.textContent = l + " loaded", i.classList.remove("d-none"), n.addEventListener("input", t) }), (0, e.on)("click", "#undo-load-readme", function(e) { var t = (0, s.default)(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
                n = document.getElementById("editor-body-buffer");
            (0, o.default)(n, "github/legacy/pages/pages_composer.js:35"), a(t, n); var r = document.getElementById("load-readme");
            (0, o.default)(r instanceof HTMLButtonElement, "github/legacy/pages/pages_composer.js:38"); var i = r.getAttribute("data-readme-name");
            (0, o.default)(i, "github/legacy/pages/pages_composer.js:40"), r.disabled = !1, r.textContent = "Load " + i, e.currentTarget.classList.add("d-none") }) }), define("github/legacy/pages/pull_requests/composer", ["delegated-events", "../../../jquery"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.on)("change", ".js-collab-checkbox", function() { Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) { return e.classList.remove("errored") }); var e = this.closest(".js-collab-option").querySelector(".js-status-indicator");
            e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading") }), (0, n.default)(document).on("ajaxSuccess", ".js-collab-form", function() { Array.from(this.querySelectorAll(".errored")).forEach(function(e) { return e.classList.remove("errored") }), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success") }) }), (0, n.default)(document).on("ajaxError", ".js-collab-form", function(e) { Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) { e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed"); var t = e.closest(".js-collab-option");
                t.classList.add("errored"); var n = t.querySelector(".js-collab-checkbox");
                n.checked = !n.checked }), Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) { e.classList.remove("status-indicator-success") }), e.preventDefault() }) }), define("github/legacy/pages/pull_requests/discussion-timeline-regrouping", ["selector-observer"], function(e) {
        (0, e.observe)(".js-timeline-item > .discussion-item.discussion-commits", { add: function(e) { if (!e.querySelector(".discussion-item-header")) { var t = e.closest(".js-timeline-item"); if (t) { var n = t.previousElementSibling;
                        n && n.querySelector(".discussion-item.discussion-commits") && function(e, t) { var n = e.querySelector(".timeline-commits"),
                                r = t.querySelectorAll(".timeline-commits > .commit");
                            Array.from(r).forEach(function(e) { n.appendChild(e) }), t.remove() }(n, t) } } } }) }), define("github/legacy/pages/pull_requests/merge", ["../../../query-selector", "../../../updatable-content", "../../../jquery", "invariant", "delegated-events", "../../../visible", "../../../button-outline"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } } var u = i(n),
            l = i(r),
            c = i(o);
        (0, a.on)("details:toggled", ".js-pull-merging", function() { var e = (0, u.default)(this).find(".js-merge-pull-request");
            e.toggleClass("is-dirty", Array.from(e).some(c.default)) }), (0, u.default)(document).on("ajaxSuccess", ".js-merge-pull-request", function(e, n, r, a) { var o = void 0;
            this.reset(), (0, u.default)(this).removeClass("is-dirty"); var s = a.updateContent; for (o in s) { var i = s[o],
                    l = document.querySelector(o);
                l && (0, t.replaceContent)(l, i) } }), document.addEventListener("session:resume", function(e) {
            (0, l.default)(e instanceof CustomEvent, "github/legacy/pages/pull_requests/merge.js:46"); var t = document.getElementById(e.detail.targetId); if (t) {
                (0, u.default)(t).closest(".js-merge-pull-request").closest(".js-details-container").addClass("open") } }), (0, a.on)("change", ".js-merge-method", function() { var e = this.closest(".js-merge-pr");
            e.classList.toggle("is-merging", "merge" === this.value), e.classList.toggle("is-squashing", "squash" === this.value), e.classList.toggle("is-rebasing", "rebase" === this.value); var t = e.querySelectorAll(".js-merge-pull-request .js-merge-commit-button"),
                n = !0,
                r = !1,
                a = void 0; try { for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value;
                    i.type = this.value === i.value ? "submit" : "button" } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } var u = e.closest(".js-pull-merging"),
                l = u.getAttribute("data-url");
            l = l.replace(/merge_type=(\w+)/, "merge_type=" + this.value), u.setAttribute("data-url", l) }), (0, a.on)("change", ".js-merge-button-toggle", function() { var e = void 0,
                t = void 0,
                n = this.closest(".js-merge-pr"),
                r = !this.checked,
                a = n.querySelectorAll(".js-merge-commit-button"); for (e = 0, t = a.length; e < t; e++) { a[e].disabled = r } }), (0, a.on)("navigation:open", ".js-merge-method-menu .js-navigation-item", function(t) { var n = t.currentTarget,
                r = (0, e.closest)(n, ".js-merge-pr"),
                a = (0, e.query)(r, ".js-merge-title", HTMLInputElement),
                o = (0, e.query)(r, ".js-merge-message", HTMLTextAreaElement);
            a.defaultValue === a.value && (a.defaultValue = n.getAttribute("data-input-title-value") || ""), o.defaultValue === o.value && (o.defaultValue = n.getAttribute("data-input-message-value") || "") }), (0, a.on)("details:toggled", ".js-merge-pr", function(e) { var t = e.currentTarget.querySelector(".js-merge-message");
            t && (0, a.fire)(t, "change") }), (0, a.on)("click", ".js-pull-merging a[href]", function(e) { var t = e.currentTarget;
            (0, l.default)(t instanceof HTMLElement, "github/legacy/pages/pull_requests/merge.js:107"), (0, s.interactingWithMouse)() && t.blur() }) }), define("github/legacy/pages/pull_requests/merging_error", ["../../../jquery", "../../../fetch", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, r.default)(document).on("ajaxError", ".js-handle-pull-merging-errors", function(e, t) { var n = void 0,
                a = this.closest(".js-pull-merging"); if (a.classList.add("is-error"), 422 === t.status && (n = t.responseText)) { var o = a.querySelector(".js-pull-merging-error");
                (0, r.default)(o).replaceWith(n) } return !1 }), (0, n.on)("click", ".js-pull-merging-refresh", function() { var e = this.closest(".js-pull-merging"),
                n = new URL(e.getAttribute("data-url"), window.location.origin),
                a = new URLSearchParams(n.search.slice(1)),
                o = document.getElementById("merge_title_field"); if (o instanceof HTMLInputElement) { var s = o.value;
                a.set("commit_title", s) } var i = document.getElementById("merge_message_field"); if (i instanceof HTMLTextAreaElement) { var u = i.value;
                a.set("commit_message", u) } return n.search = a.toString(), (0, t.fetchText)(n.toString()).then(function(t) { return (0, r.default)(e).replaceWith(t) }), !1 }) }), define("github/legacy/pages/pull_requests/restore_branch", ["selector-observer", "../../../jquery"], function(e, t) {
        function n() {
            (0, a.default)(".pull-request-ref-restore").removeClass("last").last().addClass("last") }

        function r() { var e = (0, a.default)("#js-pull-restorable").length;
            (0, a.default)(".js-pull-discussion-timeline").toggleClass("is-pull-restorable", e) } var a = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.observe)(".pull-request-ref-restore", { add: n, remove: n }), (0, e.observe)("#js-pull-restorable", { add: r, remove: r }) }), define("github/legacy/pages/pulls/show", ["delegated-events"], function(e) { document.addEventListener("pjax:end", function() { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = document.querySelectorAll(".js-pull-refresh-on-pjax")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var s = a.value;
                    (0, e.fire)(s, "socket:message", {}) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }) }), define("github/legacy/pages/repositories/fork", ["invariant"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        document.addEventListener("facebox:reveal", function() { var e = document.querySelector("#facebox .js-fork-select-fragment"); if (e) { var n = e.getAttribute("data-url");
                (0, t.default)(n, "Missing attribute `data-url` -- github/legacy/pages/repositories/fork.js:13"), e.setAttribute("src", n) } }) }), define("github/legacy/pages/repositories/repo_new", ["../../../typecast", "../../../form", "invariant", "selector-observer", "../../../onfocus", "../../../jquery", "delegated-events", "../../../query-selector"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l() { return "false" === (0, i.query)(document, ".js-privacy-toggle:checked", HTMLInputElement).value }

        function c() { var e = (0, i.query)(document, ".js-repo-name");
            (0, s.fire)(e, "change"); var t = (0, g.default)(".js-owner-container").find(".select-menu-item.selected"); if (!p) { var n = (0, i.query)(document, ".js-privacy-toggle[value=false]", HTMLInputElement),
                    r = (0, i.query)(document, ".js-privacy-toggle[value=true]", HTMLInputElement); "private" === t.attr("data-default") ? (n.checked = !0, (0, s.fire)(n, "change")) : (r.checked = !0, (0, s.fire)(r, "change")) } "yes" === t.attr("data-permission") ? ((0, g.default)(".with-permission-fields").show(), (0, g.default)(".without-permission-fields").hide(), (0, g.default)(".errored").show(), (0, g.default)("dl.warn").show()) : ((0, g.default)(".with-permission-fields").hide(), (0, g.default)(".without-permission-fields").show(), (0, g.default)(".errored").hide(), (0, g.default)("dl.warn").hide()),
                function() { var e = document.querySelector("#js-upgrade-container"); if (!e) return; var t = (0, i.query)(document, "#js-payment-methods-form");
                    e.firstElementChild && t.appendChild(e.firstElementChild); var n = (0, i.query)(document, "input[name=owner]:checked", HTMLInputElement).value,
                        r = t.querySelector('.js-upgrade[data-login="' + n + '"]');
                    r && e.appendChild(r) }(), d() }

        function d(e) { var t = (0, g.default)("#js-upgrade-container"),
                n = (0, g.default)("#new_repository"),
                r = e ? e.target : null;
            r || (r = document.querySelector(".js-privacy-toggle:checked")), (0, v.default)(r instanceof HTMLInputElement, "github/legacy/pages/repositories/repo_new.js:72"); var a = t.find(".js-billing-section"); "false" === r.value ? (t.show(), a.removeClass("has-removed-contents"), t.find("input[type=checkbox]").prop("checked", "checked")) : (t.hide(), a.addClass("has-removed-contents"), t.find("input[type=checkbox]").prop("checked", null), n.attr("action", n.attr("data-url"))), f() }

        function f() { var e = (0, g.default)("#js-upgrade-container"),
                t = (0, i.query)(document, "#new_repository"),
                n = (0, i.query)(t, ".js-repo-name").classList.contains("is-autocheck-successful"),
                r = e.find("input[type=checkbox]");
            l() && r.length && !r.is(":checked") && (n = !1);
            (0, i.query)(t, "button[type=submit]", HTMLButtonElement).disabled = !n } var m = u(e),
            v = u(n),
            g = u(o),
            p = !1;
        (0, r.observe)(".page-new-repo", function() { p = l(), (0, g.default)("#js-upgrade-container").hide(), c() }), (0, s.on)("click", ".js-reponame-suggestion", function() { var e = (0, i.query)(document, ".js-repo-name", HTMLInputElement);
            (0, t.changeValue)(e, this.textContent) }), (0, s.on)("click", ".js-privacy-toggle", function() { p = !0 }), (0, s.on)("change", ".js-privacy-toggle", d), (0, s.on)("navigation:open", ".js-owner-container", c), (0, s.on)("change", "#js-upgrade-container input", f), (0, a.onInput)("#js-upgrade-container input", f), (0, s.on)("autocheck:send", "#repository_name", function(e) {
            (0, v.default)(e instanceof CustomEvent, "github/legacy/pages/repositories/repo_new.js:146"); var t = (0, m.default)(e.currentTarget, HTMLInputElement).form;
            (0, v.default)(t, "github/legacy/pages/repositories/repo_new.js:149"); var n = (0, i.query)(t, "input[name=owner]:checked", HTMLInputElement).value;
            e.detail.body.append("owner", n) }), (0, s.on)("autocheck:complete", "#repository_name", function() { f() }), (0, s.on)("autocheck:success", "#repository_name", function(e) {
            (0, v.default)(e instanceof CustomEvent, "github/legacy/pages/repositories/repo_new.js:161"); var t = e.detail ? e.detail.trim() : null; if (t) { var n = this.closest("dl.form-group");
                n.classList.add("warn"); var r = document.createElement("dd");
                r.classList.add("warning"), r.innerHTML = t, n.append(r) } }) }), define("github/legacy/pages/repository_imports/show", ["../../../form", "invariant", "delegated-events", "../../../parse-html", "../../../query-selector", "../../../jquery"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i() { var e = this.querySelector(".js-repository-import-author-autocomplete");
            e.focus(), e.select() } var u = s(t),
            l = s(o);
        (0, n.on)("change", ".js-repository-import-owner-container input", function() { var e = this.getAttribute("data-upsell"),
                t = this.getAttribute("data-billing-url");
            (0, a.query)(document, ".js-repository-import-billing-url", HTMLAnchorElement).href = t, (0, a.query)(document, ".js-repository-import-upsell").classList.toggle("d-none", "false" == e), (0, a.query)(document, ".js-repository-import-no-upsell").classList.toggle("d-none", "true" == e) }), (0, n.on)("socket:message", ".repository-import", function(e) {
            (0, u.default)(e instanceof CustomEvent, "github/legacy/pages/repository_imports/show.js:23"); var t = e.detail.data;
            t.redirect_to && (document.location.href = t.redirect_to, e.stopImmediatePropagation()) }), (0, n.on)("change", ".js-repository-import-lfs-opt", function() { var e = this.getAttribute("data-percent-used"),
                t = this.closest(".js-repository-import-lfs-container"),
                n = this.getAttribute("data-used");
            t.querySelector(".js-repository-import-lfs-warn").classList.toggle("d-none", !(e > 100)), t.querySelector(".js-usage-bar").classList.toggle("exceeded", e >= 100), t.querySelector(".js-usage-bar").setAttribute("aria-label", e + "%"), t.querySelector(".js-repository-import-lfs-progress").style.width = e + "%", t.querySelector("span.js-usage-text").textContent = n }), (0, n.on)("menu:activated", ".js-repository-import-author-select-menu", i), (0, n.on)("selectmenu:load", ".js-repository-import-author-select-menu", i), (0, n.on)("autocomplete:result", ".js-repository-import-author-autocomplete", function() { var t = this.closest(".js-repository-import-author").querySelector(".js-author-login-info");
            (0, e.changeValue)(t, this.value) }), (0, l.default)(document).on("ajaxSuccess", ".js-repository-import-author-form", function(e, t, n, a) { var o = (0, r.parseHTML)(document, a.trim());
            this.closest(".js-repository-import-author").replaceWith(o) }), (0, n.on)("click", ".js-repository-import-projects-cancel-button", function() { var t = (0, a.query)(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
            (0, e.submit)(t) }) }), define("github/legacy/pages/settings/user/saved-replies", ["invariant", "../../../../remote-form"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.remoteForm)(".js-saved-reply-delete", function(e, t) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        r = e.closest(".js-saved-reply-container"), (0, n.default)(r, "github/legacy/pages/settings/user/saved-replies.js:10"), a = r.querySelectorAll(".js-saved-reply-list-item").length, r.classList.toggle("has-replies", a > 1), o = e.closest(".js-saved-reply-list-item"), (0, n.default)(o, "github/legacy/pages/settings/user/saved-replies.js:16"), o.remove();
                    case 9:
                    case "end":
                        return s.stop() } }, null, this) }) }), define("github/legacy/pages/settings/user/settings", ["../../../../typecast", "../../../../form", "delegated-events", "../../../../query-selector", "selector-observer", "../../../../jquery", "../../../../facebox", "../../../../remote-form"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e, t) { e.querySelector(".js-add-new-blocked-user").disabled = !t } var c = u(e),
            d = u(o);
        (0, a.observe)(".js-email-global-unsubscribe-form", function(e) { e.querySelector(".js-email-global-unsubscribe-submit").disabled = !0 }), (0, n.on)("change", ".js-email-global-unsubscribe-form", function(e) { var t = e.currentTarget,
                n = (0, r.query)(t, ".js-email-global-unsubscribe-submit", HTMLInputElement),
                a = (0, r.querySelectorAll)(t, ".js-email-global-unsubscribe", HTMLInputElement),
                o = Array.from(a).some(function(e) { return e.checked !== e.defaultChecked });
            n.disabled = !o }), (0, i.remoteForm)(".js-verify-ssh-key", function(e, t) { var n; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(t.html());
                    case 2:
                        n = (0, r.closest)(e, "li"), (0, r.query)(n, ".js-unverified-user-key-notice").remove(), (0, r.query)(n, ".js-user-key-icon").classList.remove("unverified-user-key"), e.remove();
                    case 6:
                    case "end":
                        return a.stop() } }, null, this) }), (0, d.default)(document).on("ajaxSuccess", ".js-leave-collaborated-repo", function(e) { var t = e.target.getAttribute("data-repo-id");
            (0, r.query)(document, ".js-collab-repo[data-repo-id='" + t + "']").remove(), (0, s.close)() }), (0, d.default)(document).on("ajaxSuccess", ".js-newsletter-unsubscribe-form", function() { var e = void 0,
                t = void 0,
                n = document.querySelectorAll(".js-newsletter-unsubscribe-message"),
                r = []; for (e = 0, t = n.length; e < t; e++) { var a = n[e];
                r.push(a.classList.toggle("d-none")) } return r }), (0, d.default)(document).on("ajaxSuccess", ".js-revoke-access-form", function() { var e = this.getAttribute("data-id"),
                t = this.getAttribute("data-type-name"),
                n = (0, r.query)(document, ".js-revoke-item[data-type='" + t + "'][data-id='" + e + "']");
            (0, s.close)(), n.remove(), n.classList.contains("new-token") && (0, r.query)(document, ".js-flash-new-token").remove() }), (0, n.on)("click", ".js-delete-oauth-application-image", function() { var e = (0, r.query)(document, ".js-delete-oauth-application-image-form", HTMLFormElement);
            (0, t.submit)(e) }), (0, n.on)("click", ".js-new-callback", function(e) { e.preventDefault(); var t = e.currentTarget,
                n = (0, r.closest)(t, ".js-callback-urls"),
                a = (0, r.query)(n, ".js-callback-url").cloneNode(!0);
            a.classList.remove("is-default-callback");
            (0, r.query)(a, "input", HTMLInputElement).value = "", n.classList.add("has-many");
            (0, c.default)(t.parentNode, HTMLElement).insertBefore(a, t) }), (0, n.on)("click", ".js-delete-callback", function(e) { e.preventDefault(); var t = (0, c.default)(e.currentTarget, HTMLElement);
            (0, r.closest)(t, ".js-callback-url").remove(); var n = (0, r.closest)(t, ".js-callback-urls");
            (0, r.querySelectorAll)(n, ".js-callback-url", HTMLElement).length <= 1 && n.classList.remove("has-many") }), (0, n.on)("click", ".js-oauth-application-whitelist .js-deny-this-request", function(e) { var n = (0, c.default)(e.currentTarget, HTMLElement);
            (0, c.default)(n.nextElementSibling, HTMLInputElement).value = "denied", (0, t.submit)((0, r.closest)(n, ".js-org-application-access-form", HTMLFormElement)) }), (0, d.default)(document).on("ajaxSuccess", ".js-org-application-access-form", function() { return window.location.reload() }), (0, n.on)("click", ".js-user-rename-warning-continue", function() { var e = document.querySelectorAll(".js-user-rename-warning, .js-user-rename-form"),
                t = !0,
                n = !1,
                r = void 0; try { for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { a.value.classList.toggle("d-none") } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }), (0, n.on)("change", ".js-checkbox-scope", function(e) { var t = (0, c.default)(e.currentTarget, HTMLInputElement),
                n = (0, r.closest)(t, ".js-check-scope-container"),
                a = (0, r.querySelectorAll)(n, ".js-checkbox-scope", HTMLInputElement),
                o = !0,
                s = !1,
                i = void 0; try { for (var u, l = a[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { var d = u.value;
                    d !== t && (d.checked = t.checked, d.disabled = t.checked) } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } }), (0, n.on)("click", ".js-generate-integration-key", function() {
            (0, n.fire)(document, "facebox:close");
            (0, r.query)(document, ".js-integration-key-management-wrapper").classList.add("downloading") }), (0, a.observe)(".js-block-users-form", function(e) { l(e, !1) }), (0, d.default)(document).on("ajaxSuccess", ".js-block-users-form", function(e, n, a, o) { var s = (0, r.query)(document, ".js-user-block-settings-list"),
                i = (0, r.query)(s, ".js-blocked-list");
            l(this); var u = this.querySelector(".js-add-blocked-user-field");
            (0, t.changeValue)(u, ""),
            function(e) { document.querySelector(".js-blocked-user-list") || (0, r.query)(e, ".blankslate").classList.add("d-none") }(s), i.insertAdjacentHTML("afterbegin", o) }), (0, n.on)("autocomplete:autocompleted:changed", ".js-add-blocked-user-field", function() { l(this.form, (0, d.default)(this).data("autocompleted")) }) }), define("github/legacy/pages/settings/user/user_sessions", ["invariant", "../../../../remote-form"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.remoteForm)(".js-user-sessions-revoke", function(e, t) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        r = e.closest(".js-user-sessions-container"), a = e.closest(".js-user-session"), (0, n.default)(a, "github/legacy/pages/settings/user/user_sessions.js:12"), a.remove(), r && (o = r.querySelectorAll(".js-user-session").length, r.classList.toggle("has-active-sessions", o > 0));
                    case 7:
                    case "end":
                        return s.stop() } }, null, this) }) }), define("github/legacy/pages/signup", ["../../document-ready", "selector-observer", "../../google-analytics", "../../jquery"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        e.ready.then(function() { return (0, a.default)(".js-email-notice-trigger").focus(function() { return (0, a.default)(".js-email-notice").addClass("notice-highlight") }), (0, a.default)(".js-email-notice-trigger").blur(function() { return (0, a.default)(".js-email-notice").removeClass("notice-highlight") }) }), (0, t.observe)(".js-plan-choice:checked", { add: function(e) { return (0, a.default)(e).closest(".plan-row").addClass("selected") }, remove: function(e) { return (0, a.default)(e).closest(".plan-row").removeClass("selected") } }), (0, t.observe)(".js-setup-organization:checked", { add: function() { var e = (0, a.default)(".js-choose-plan-submit"); return e.attr("data-default-text") || e.attr("data-default-text", e.text()), e.text(e.attr("data-org-text")) }, remove: function() { var e = (0, a.default)(".js-choose-plan-submit"); return e.text(e.attr("data-default-text")) } }); var o = new WeakMap;
        (0, t.observe)(".js-signup-form", function(e) { e.addEventListener("input", function(t) { if (t.target.closest("input[type=text]") && !o.get(e)) { var r = e.querySelector(".js-signup-source");
                    (0, n.trackEvent)({ category: "Signup", action: "Attempt", label: r.value }), o.set(e, !0) } }) }) }), define("github/legacy/pages/site-search", ["../../onfocus", "delegated-events", "../../typecast", "invariant", "../../query-selector"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) { var n = (0, a.query)(document, ".js-site-search-form", HTMLFormElement);
            (0, a.query)(document, ".js-site-search").classList.toggle("scoped-search", t); var r = void 0,
                o = void 0;
            t ? (r = n.getAttribute("data-scoped-search-url"), o = e.getAttribute("data-scoped-placeholder")) : (r = n.getAttribute("data-unscoped-search-url"), o = e.getAttribute("data-unscoped-placeholder")), (0, u.default)("string" == typeof r, "github/legacy/pages/site-search.js:23"), (0, u.default)("string" == typeof o, "github/legacy/pages/site-search.js:24"), n.setAttribute("action", r), e.setAttribute("placeholder", o) } var i = o(n),
            u = o(r);
        (0, e.onKey)("keyup", ".js-site-search-field", function(e) { var t = (0, i.default)(e.target, HTMLInputElement),
                n = 0 === t.value.length;
            n && "Backspace" === e.key && t.classList.contains("is-clearable") && s(t, !1), n && "Escape" === e.key && s(t, !0), t.classList.toggle("is-clearable", n) }), (0, e.onFocus)(".js-site-search-focus", function(e) {
            function t() { n.classList.remove("focus"), (0, u.default)(e instanceof HTMLInputElement, "github/legacy/pages/site-search.js:48"), 0 === e.value.length && e.classList.contains("js-site-search-field") && s(e, !0), e.removeEventListener("blur", t) } var n = (0, a.closest)(e, ".js-chromeless-input-container");
            n.classList.add("focus"), e.addEventListener("blur", t) }), (0, t.on)("submit", ".js-site-search-form", function(e) {
            (0, a.query)((0, i.default)(e.target, HTMLFormElement), ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type") }) }), define("github/legacy/pages/site/contact", ["selector-observer"], function(e) {
        (0, e.observe)(".js-contact-javascript-flag", function(e) { e.value = "true" }) }), define("github/legacy/pages/site/features", ["../../../query-selector", "invariant", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-segmented-nav-button", function(t) { t.preventDefault(); var n = t.currentTarget,
                a = n.getAttribute("data-selected-tab");
            (0, r.default)(a, "github/legacy/pages/site/features.js:12"); var o = (0, e.closest)(n, ".js-segmented-nav"),
                s = o.parentElement;
            (0, r.default)(s, "github/legacy/pages/site/features.js:16"); var i = !0,
                u = !1,
                l = void 0; try { for (var c, d = (0, e.querySelectorAll)(o, ".js-segmented-nav-button")[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) { c.value.classList.remove("selected") } } catch (e) { u = !0, l = e } finally { try {!i && d.return && d.return() } finally { if (u) throw l } } n.classList.add("selected"); var f = !0,
                m = !1,
                v = void 0; try { for (var g, p = (0, e.querySelectorAll)(s, ".js-selected-nav-tab")[Symbol.iterator](); !(f = (g = p.next()).done); f = !0) { g.value.classList.remove("active") } } catch (e) { m = !0, v = e } finally { try {!f && p.return && p.return() } finally { if (m) throw v } }(0, e.query)(document, "." + a).classList.add("active") }) }), define("github/legacy/pages/site/keyboard_shortcuts", ["../../../query-selector", "../../../visible", "../../../facebox", "../../../document-ready", "../../../fetch", "delegated-events"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i() { var e = "/site/keyboard_shortcuts?url=" + window.location.pathname; return (0, l.default)(function() { return (0, a.fetchText)(e).then(function(e) { return (0, l.default)(e, "shortcuts") }) }) } var u = s(t),
            l = s(n);
        (0, o.on)("click", ".js-keyboard-shortcuts", function(e) { i(), e.preventDefault() }), (0, o.on)("click", ".js-see-all-keyboard-shortcuts", function(t) { t.currentTarget.remove();
            (0, e.query)(document, ".facebox .js-hidden-pane").style.display = "table-row-group", t.preventDefault() }), r.ready.then(function() { document.body && document.body.addEventListener("keypress", function(e) { if (e.target instanceof HTMLElement) { var t = e.target === document.body,
                        r = e.target.classList.contains("facebox-header");
                    (t || r) && "?" === e.key && (Array.from(document.querySelectorAll(".facebox")).some(u.default) ? (0, n.close)() : i(), e.preventDefault()) } }) }) }), define("github/legacy/pages/site_status", ["selector-observer", "../../query-selector"], function(e, t) {
        (0, e.observe)(".js-site-status-container", function(e) { var n = e.querySelector(".js-site-status-message"),
                r = e.querySelector(".js-site-status-time"),
                a = e.querySelector(".flash"),
                o = (0, t.query)(document, "meta[name=site-status-api-url]", HTMLMetaElement).content;
            window.fetch(o).then(function(e) { return e.json() }).then(function(t) { if (null != t.status && "good" !== t.status) { n.textContent = t.body, r.setAttribute("datetime", t.created_on); var o = "major" === t.status ? "error" : "warn";
                    a.classList.add("flash-" + o), e.classList.remove("d-none") } }) }) }), define("github/legacy/pages/stafftools/ldap", ["../../../jquery"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.default)(document).on("ajaxSend", ".js-action-ldap-create", function() { return (0, t.default)(this).find(".btn-sm").addClass("disabled") }), (0, t.default)(document).on("ajaxError", ".js-action-ldap-create", function() { return !1 }), (0, t.default)(document).on("ajaxComplete", ".js-action-ldap-create", function(e, n) { var r = (0, t.default)(this),
                a = 500 === n.status ? "Oops, something went wrong." : n.responseText; return r.find(".js-message").show().html(" &ndash; " + a), 200 === n.status && r.find(".btn").hide(), !1 }) }), define("github/legacy/pages/tree_finder", ["../../typecast", "selector-observer", "../../fetch", "../../fuzzy-filter", "../../onfocus", "../../throttled-input", "../../navigation", "invariant", "../../query-selector"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e, t) { var a = e.getAttribute("data-results"); if (a) { var o = document.getElementById(a); if (o) { var i = v.get(o); if (i) { var l = (0, d.default)((0, u.query)(o, ".js-tree-browser-result-template").firstElementChild, HTMLElement),
                            g = (0, u.query)(o, ".js-tree-finder-results");
                        null == t && (t = e.value); var p = void 0,
                            h = void 0;
                        t ? (p = (0, r.fuzzyRegexp)(t), h = (0, r.fuzzySort)(i, t)) : h = i, o.classList.toggle("filterable-empty", !h.length); for (var y = document.createDocumentFragment(), b = h.slice(0, 50), j = 0, L = b.length; j < L; j++) { var w = b[j],
                                x = l.cloneNode(!0),
                                k = (0, d.default)(x.getElementsByClassName("js-tree-finder-path")[0], HTMLAnchorElement),
                                E = new URL(k.href);
                            E.pathname = E.pathname + "/" + encodeURI(w), k.href = E.href, k.textContent = w, (0, r.fuzzyHighlightElement)(k, t, p), y.appendChild(x) } g.innerHTML = "", g.appendChild(y), (0, s.focus)(g) } else if (null == m) { var q = o.getAttribute("data-url");
                        (0, f.default)(q, "github/legacy/pages/tree_finder.js:34"), m = (0, n.fetchJSON)(q).then(function(t) { v.set(o, t.paths), c(e), m = null }).catch(function() { m = null }) } } } } var d = l(e),
            f = l(i),
            m = null,
            v = new WeakMap;
        (0, a.onKey)("keydown", ".js-tree-finder-field", function(e) { "Escape" === e.key && (e.preventDefault(), history.back()) }), (0, t.observe)(".js-tree-finder-field", { constructor: HTMLInputElement, initialize: function(e) {
                function t() { c(e) } return t(), { add: function(e) {
                        (0, o.addThrottledInputEventListener)(e, t), e.focus() }, remove: function(e) {
                        (0, o.removeThrottledInputEventListener)(e, t) } } } }) }), define("github/legacy/pages/users/contributions", ["../../../typecast", "../../../fetch", "invariant", "../../../history", "../../../pjax", "delegated-events", "../../../inflector", "../../../number-helpers", "selector-observer", "../../../query-selector", "../../../remote-form"], function(e, t, n, r, a, o, s, i, u, l, c) {
        function d(e) { return e && e.__esModule ? e : { default: e } }

        function f() { var e = (0, l.query)(document, ".js-calendar-graph").getAttribute("data-url"); return (0, q.default)(e, "github/legacy/pages/users/contributions.js:24"), new URL(e, window.location.origin) }

        function m(e) { e.target.matches("rect.day") && (v(), function(e) { var t = document.body;
                (0, q.default)(t, "github/legacy/pages/users/contributions.js:91"); var n = e.getAttribute("data-date");
                (0, q.default)(n, "github/legacy/pages/users/contributions.js:94"); var r = function(e, t) { var n = C[t.getUTCMonth()].slice(0, 3) + " " + t.getUTCDate() + ", " + t.getUTCFullYear(),
                        r = 0 === e ? "No" : (0, i.formatNumber)(e),
                        a = document.createElement("div");
                    a.classList.add("svg-tip", "svg-tip-one-line"); var o = document.createElement("strong"); return o.textContent = r + " " + (0, s.pluralize)(e, "contribution"), a.append(o, " on " + n), a }(parseInt(e.getAttribute("data-count")), w(n));
                t.appendChild(r); var a = e.getBoundingClientRect(),
                    o = a.left + window.pageXOffset - r.offsetWidth / 2 + a.width / 2,
                    u = a.bottom + window.pageYOffset - r.offsetHeight - 2 * a.height;
                r.style.top = u + "px", r.style.left = o + "px" }(e.target)) }

        function v() { var e = document.querySelector(".svg-tip");
            e && e.remove() }

        function g(e) { var t = document.getElementById("js-contribution-activity");
            t && (0, S.default)({ url: e, container: t, scrollTo: !1, replace: !0 }) }

        function p(e, n) { var r, a, o, s, i; return regeneratorRuntime.async(function(u) { for (;;) switch (u.prev = u.next) {
                    case 0:
                        return r = (0, l.query)(document, ".js-calendar-graph"), a = r.getAttribute("data-graph-url"), (0, q.default)(a, "github/legacy/pages/users/contributions.js:122"), o = new URL(a, window.location.origin), (s = new URLSearchParams(o.search.slice(1))).append("from", L(e)), s.append("to", L(n)), s.append("full_graph", "1"), o.search = s.toString(), u.next = 11, regeneratorRuntime.awrap((0, t.fetchSafeDocumentFragment)(document, o.toString()));
                    case 11:
                        i = u.sent, (0, l.query)(document, ".js-contribution-graph").replaceWith(i);
                    case 13:
                    case "end":
                        return u.stop() } }, null, this) }

        function h(e, t) { var n = (e.getAttribute("class") || "").trim().split(" ").filter(function(e) { return e !== t });
            e.setAttribute("class", n.join(" ")) }

        function y(e, t) { var n = (e.getAttribute("class") || "") + " " + t;
            e.setAttribute("class", n.trim()) }

        function b(e, t) {
            function n(n) { var r = w(n.getAttribute("data-date")).getTime(); return e && t ? e.getTime() <= r && r <= t.getTime() : r === e.getTime() } var r = (0, l.query)(document, ".js-calendar-graph"),
                a = r.querySelectorAll("rect.day"),
                o = !0,
                s = !1,
                i = void 0; try { for (var u, c = a[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) { h(u.value, "active") } } catch (e) { s = !0, i = e } finally { try {!o && c.return && c.return() } finally { if (s) throw i } } if (r.classList.remove("days-selected"), e || t) { r.classList.add("days-selected"); var d = !0,
                    f = !1,
                    m = void 0; try { for (var v, g = a[Symbol.iterator](); !(d = (v = g.next()).done); d = !0) { var p = v.value;
                        n(p) && y(p, "active") } } catch (e) { f = !0, m = e } finally { try {!d && g.return && g.return() } finally { if (f) throw m } } } }

        function j(e) { return ("0" + e).slice(-2) }

        function L(e) { return e.getUTCFullYear() + "-" + j(e.getUTCMonth() + 1) + "-" + j(e.getUTCDate()) }

        function w(e) { var t = e.split("-").map(function(e) { return parseInt(e, 10) }),
                n = T(t, 3),
                r = n[0],
                a = n[1],
                o = n[2]; return new Date(Date.UTC(r, a - 1, o)) }

        function x(e, t, n) { var r = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                i = f(),
                u = new URLSearchParams(i.search.slice(1)); if (u.append("tab", "overview"), e >= A && e <= H) ! function(e) { _ = e, A = null, H = null; var t = f(),
                    n = new URLSearchParams(t.search.slice(1));
                n.append("tab", "overview"), n.append("period", _), t.search = n.toString(), b(), g(t.toString()) }("weekly");
            else { if ("object" == typeof t && (M = t, t = !0), M && t) { var l = new Date(M.getTime() - 26784e5),
                        c = new Date(M.getTime() + 26784e5),
                        d = e > M ? [M, e] : [e, M];
                    a = d[1], (r = d[0]) < l && (r = l), a > c && (a = c), A = (o = [r, a])[0], H = o[1], u.append("from", L(r)), u.append("to", L(a)) } else A = (s = [r = e, null])[0], H = s[1], u.append("from", L(r));
                M = e, _ = "custom", b(r, a), n || (i.search = u.toString(), g(i.toString())) } }

        function k(e) { var t = e.closest(".js-details-container");
            t && t.classList.add("open"); var n = e.getBoundingClientRect(),
                r = window.scrollY + n.top - 62 - 10;
            window.scrollTo(0, r) } var E = d(e),
            q = d(n),
            S = d(a),
            T = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            _ = null,
            M = null,
            A = null,
            H = null;
        (0, o.on)("pjax:send", "#js-contribution-activity", function(e) { e.currentTarget.classList.add("loading") }), (0, o.on)("pjax:complete", "#js-contribution-activity", function(e) { e.currentTarget.classList.remove("loading") }), (0, u.observe)(".js-calendar-graph-svg", function(e) { var t = e.closest(".js-calendar-graph");
            t.addEventListener("mouseover", m), t.addEventListener("mouseout", v); var n = t.getAttribute("data-from");
            n && (n = M = w(n)); var r = t.getAttribute("data-to");
            r && (r = w(r)) }), (0, o.on)("click", ".js-calendar-graph rect.day", function(e) {
            (0, q.default)(e instanceof MouseEvent, "github/legacy/pages/users/contributions.js:54"); var t = e.currentTarget.getAttribute("data-date");
            (0, q.default)(t, "github/legacy/pages/users/contributions.js:56"), x(w(t), e.shiftKey, !1) }); var C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        (0, o.on)("click", ".js-year-link", function(e) { e.stopPropagation(); var t = (0, l.query)(document, ".js-year-link.selected"),
                n = e.target;
            t.classList.remove("selected"), n.classList.add("selected"); var r = n.textContent,
                a = new Date,
                o = a.getUTCFullYear(); if (parseInt(o) === parseInt(r)) { var s = a.getUTCMonth();
                p(new Date(o, s, 1), a) } else ! function(e, t) { var n = new Date(Date.parse("1 " + e + " " + t + " 00:00:00 UTC"));
                p(n, new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth() + 1, 0))) }("December", r) }),
        function() { var e = window.location.hash; if (e && !(e.indexOf("#event-") < 0)) { var t = e.slice(1, e.length),
                    n = document.getElementById(t);
                n && k(n) } }(), window.addEventListener("hashchange", function(e) { var t = e.newURL || window.location.href,
                n = t.slice(t.indexOf("#") + 1, t.length),
                r = document.getElementById(n);
            r && (e.stopPropagation(), k(r)) }), (0, u.observe)(".js-profile-timeline-year-list.js-sticky", function(e) {
            (0, E.default)(document.getElementById("js-contribution-activity"), HTMLElement).style.minHeight = e.offsetHeight + "px" }), (0, c.remoteForm)(".js-show-more-timeline-form", function(e, t) { var n, a, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return i.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        (n = document.querySelector(".js-show-more-timeline-form")) && (a = n.getAttribute("data-year"), (0, q.default)(null != a, "Missing attribute `data-year` -- github/legacy/pages/users/contributions.js:355"), o = (0, l.query)(document, ".js-year-link.selected"), s = (0, E.default)(document.getElementById("year-link-" + a), HTMLElement), o.classList.remove("selected"), s.classList.add("selected")), document.title = e.getAttribute("data-title"), (0, r.pushState)(null, "", e.action);
                    case 6:
                    case "end":
                        return i.stop() } }, null, this) }) }), define("github/legacy/pages/users/pinned-repositories", ["../../../query-selector", "../../../typecast", "invariant", "delegated-events", "../../../onfocus", "../../../hotkey"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(t) { var n = (0, e.querySelectorAll)(t, "input[type=checkbox]", HTMLInputElement),
                r = n.filter(function(e) { return e.checked }).length,
                a = parseInt(t.getAttribute("data-max-repo-count"), 10),
                o = !0,
                s = !1,
                i = void 0; try { for (var u, l = n[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { var c = u.value;
                    c.disabled = r === a && !c.checked } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } }! function(t, n, r) { var a = (0, e.query)(t, ".js-remaining-pinned-repos-count"),
                    o = a.getAttribute("data-remaining-label");
                (0, f.default)(o, "github/legacy/pages/users/pinned-repositories.js:28"); var s = r - n;
                a.textContent = s + " " + o, a.classList.toggle("text-red", s < 1) }((0, e.closest)(t, ".js-pinned-repos-selection-form", HTMLFormElement), r, a) }

        function u(e, t) { return e !== t }

        function l(t) { return { name: (0, e.query)(t, ".js-repo").textContent.toLowerCase().trim(), pinned: (0, e.query)(t, 'input[type="checkbox"]', HTMLInputElement).checked, owner: t.classList.contains("js-owned-repo"), contributor: t.classList.contains("js-contributed-repo"), element: t } }

        function c(t) { var n = (0, d.default)(t.target, Element),
                r = (0, e.closest)(n, ".js-pinned-repos-selection-form"),
                a = (0, e.query)(r, ".js-pinned-repos-filter", HTMLInputElement).value.toLowerCase().trim(),
                o = function(t) { if (function(e) { return !e.querySelector(".js-pinned-repo-source") }(t)) return { owners: !0, contributors: !0 }; var n = (0, e.querySelectorAll)(t, ".js-pinned-repo-source:checked", HTMLInputElement),
                        r = n.map(function(e) { return e.value }),
                        a = r.indexOf("owned") > -1,
                        o = r.indexOf("contributed") > -1,
                        s = !0,
                        i = !1,
                        l = void 0; try { for (var c, d = n[Symbol.iterator](); !(s = (c = d.next()).done); s = !0) c.value.disabled = u(a, o) } catch (e) { i = !0, l = e } finally { try {!s && d.return && d.return() } finally { if (i) throw l } } return { owners: a, contributors: o } }(r),
                s = Array.from(r.querySelectorAll(".js-pinned-repos-selection")).map(l).map(function(e) { return { matched: function(e, t, n) { if (e.pinned) return !0; var r = !t || e.name.indexOf(t) > -1,
                                a = e.owner && n.owners,
                                o = e.contributor && n.contributors; return r && (a || o) }(e, a, o), candidate: e } }),
                i = !0,
                c = !1,
                f = void 0; try { for (var m, v = s[Symbol.iterator](); !(i = (m = v.next()).done); i = !0) { var g = m.value,
                        p = g.matched;
                    g.candidate.element.classList.toggle("d-none", !p) } } catch (e) { c = !0, f = e } finally { try {!i && v.return && v.return() } finally { if (c) throw f } } var h = s.some(function(e) { return e.matched });
            (0, e.query)(r, ".js-no-repos-message").classList.toggle("d-none", h) } var d = s(t),
            f = s(n),
            m = s(o);
        (0, r.on)("change", ".js-pinned-repos-selection-list input[type=checkbox]", function(t) { var n = (0, d.default)(t.currentTarget, HTMLInputElement),
                r = (0, e.closest)(n, ".js-pinned-repos-selection");
            r.classList.toggle("selected", n.checked);
            i((0, e.closest)(r, ".js-pinned-repos-selection-list")) }), (0, a.onKey)("keydown", ".js-pinned-repos-filter", function(e) {
            (0, f.default)(e instanceof KeyboardEvent, "github/legacy/pages/users/pinned-repositories.js:133"), "Enter" === (0, m.default)(e) && e.preventDefault() }), (0, a.onInput)(".js-pinned-repos-filter", c), (0, r.on)("change", ".js-pinned-repos-filter", c), (0, r.on)("search", ".js-pinned-repos-filter", c), (0, r.on)("change", ".js-pinned-repo-source", c), document.addEventListener("facebox:reveal", function() { var e = document.querySelector("#facebox .js-pinned-repos-settings-fragment"); if (e) { var t = e.getAttribute("data-url");
                (0, f.default)(t, "`data-url` must exist -- github/legacy/pages/users/pinned-repositories.js:149"), e.setAttribute("src", t) } }) }), define("github/sortable-button", ["exports", "delegated-events"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, n) {
            (0, t.on)("click", e + " .js-sortable-button", function() { var t = this.closest(e),
                    r = this.getAttribute("data-direction"),
                    a = Array.from(t.parentElement.children).indexOf(t); "up" === r ? t.previousElementSibling.insertAdjacentElement("beforebegin", t) : "down" === r && t.nextElementSibling && t.nextElementSibling.insertAdjacentElement("afterend", t); var o = Array.from(t.parentElement.children).indexOf(t);
                this.focus(), n({ oldIndex: a, newIndex: o, item: t }) }) } }), define("github/legacy/pages/users/pinned-repository-reordering", ["../../../query-selector", "delegated-events", "../../../fetch", "selector-observer", "@github/sortablejs", "../../../sortable-button"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { var t = e.item,
                n = e.oldIndex;
            f = t.parentNode.children[n + 1] }

        function u(t) { var r, a, o, s, i, u, l, c; return regeneratorRuntime.async(function(m) { for (;;) switch (m.prev = m.next) {
                    case 0:
                        if (r = t.oldIndex, a = t.newIndex, o = t.item, r !== a) { m.next = 3; break } return m.abrupt("return");
                    case 3:
                        return s = (0, e.closest)(o, ".js-pinned-repos-reorder-form"), i = (0, e.closest)(s, ".js-pinned-repos-reorder-container"), u = (0, e.query)(i, ".js-pinned-repos-spinner"), l = (0, e.query)(i, ".js-pinned-repos-reorder-message"), l.textContent = "", u.style.display = "inline-block", d.option("disabled", !0), m.prev = 10, m.next = 13, regeneratorRuntime.awrap((0, n.fetchText)(s.action, { method: s.method, body: new FormData(s) }));
                    case 13:
                        l.textContent = l.getAttribute("data-success-text"), u.style.display = "none", d.option("disabled", !1), m.next = 23; break;
                    case 18:
                        m.prev = 18, m.t0 = m.catch(10), l.textContent = l.getAttribute("data-error-text"), c = o.parentNode, f ? c.insertBefore(o, f) : c.appendChild(o);
                    case 23:
                    case "end":
                        return m.stop() } }, null, this, [
                [10, 18]
            ]) } var l = s(a),
            c = s(o),
            d = null,
            f = null;
        (0, r.observe)(".js-pinned-repos-reorder-list", function(e) { d = l.default.create(e, { animation: 150, item: ".js-pinned-repo-list-item", handle: ".js-pinned-repository-reorder", onUpdate: u, onStart: i, chosenClass: "is-dragging" }) }), (0, t.on)("submit", ".js-pinned-repos-reorder-form", function(e) { e.preventDefault() }), (0, c.default)(".js-pinned-repo-list-item", u) }), define("github/legacy/pages/users/profile-sidebar", ["selector-observer", "../../../query-selector"], function(e, t) {
        (0, e.observe)(".js-user-profile-sticky-fields.is-stuck", function() { var e = (0, t.query)(document, ".js-user-profile-sticky-bar"); return { add: function() { e.classList.add("is-stuck") }, remove: function() { e.classList.remove("is-stuck") } } }), (0, e.observe)(".js-user-profile-follow-button.is-stuck", function() { var e = (0, t.query)(document, ".js-user-profile-sticky-bar"); return { add: function() { e.classList.add("is-follow-stuck") }, remove: function() { e.classList.remove("is-follow-stuck") } } }), (0, e.observe)(".js-user-profile-following-toggle .js-toggler-container.on", function() { var e = (0, t.query)(document, ".js-user-profile-following-mini-toggle .js-toggler-container"); return { add: function() { e.classList.add("on") }, remove: function() { e.classList.remove("on") } } }), (0, e.observe)(".js-user-profile-following-mini-toggle .js-toggler-container.on", function() { var e = (0, t.query)(document, ".js-user-profile-following-toggle .js-toggler-container"); return { add: function() { e.classList.add("on") }, remove: function() { e.classList.remove("on") } } }) }), define("github/legacy/index", ["./behaviors/ajax_error", "./behaviors/ajax_loading", "./behaviors/analytics", "./behaviors/autocheck", "./behaviors/autocomplete", "./behaviors/billing/addons", "./behaviors/bundle-download-stats", "./behaviors/clippable_behavior", "./behaviors/commenting/ajax", "./behaviors/commenting/close", "./behaviors/commenting/markdown-toolbar", "./behaviors/commenting/preview", "./behaviors/disable", "./behaviors/facebox", "./behaviors/filterable", "./behaviors/issue-references", "./behaviors/js-immediate-updates", "./behaviors/permalink", "./behaviors/pjax", "./behaviors/pjax/exceptions", "./behaviors/pjax/head", "./behaviors/print_popup", "./behaviors/quicksearch", "./behaviors/stale_session", "./behaviors/suggester", "./behaviors/timeline_marker", "./behaviors/timeline_progressive_disclosure", "./graphs/calendar-sample", "./pages/account_membership", "./pages/billing_settings/coupon_redemption", "./pages/billing_settings/survey", "./pages/blob", "./pages/blob/csv", "./pages/commits", "./pages/diffs/expander", "./pages/diffs/line-comments", "./pages/diffs/line-highlight", "./pages/diffs/linkable-line-number", "./pages/diffs/prose_diff", "./pages/diffs/split", "./pages/diffs/toggle-file-notes", "./pages/diffs/tr-collapsing", "./pages/directory", "./pages/early_access_tracking", "./pages/edit_repositories/options", "./pages/edit_repositories/repository-collabs", "./pages/edit_repositories/repository-options", "./pages/editors/render", "./pages/explore", "./pages/files/ref_create", "./pages/files/repo_next", "./pages/generated_pages/theme_picker", "./pages/gist/drag_drop", "./pages/gist/gist_edit", "./pages/gist/task_lists", "./pages/header", "./pages/hooks", "./pages/integrations", "./pages/issues/filters", "./pages/issues/legacy", "./pages/issues/list", "./pages/issues/replies", "./pages/issues/sidebar", "./pages/oauth", "./pages/orgs", "./pages/orgs/invitations/new", "./pages/orgs/invitations/reinstate", "./pages/orgs/members/change-role", "./pages/orgs/members/index", "./pages/orgs/members/show", "./pages/orgs/migration/customize_member_privileges", "./pages/orgs/migration/index", "./pages/orgs/new", "./pages/orgs/per_seat", "./pages/orgs/repositories/index", "./pages/orgs/repositories/permission-select", "./pages/orgs/security_settings/index", "./pages/orgs/settings/change-default-repository-permission", "./pages/orgs/settings/security", "./pages/orgs/team", "./pages/orgs/teams/change-visibility", "./pages/orgs/teams/import", "./pages/orgs/teams/index", "./pages/orgs/teams/new", "./pages/orgs/teams/show", "./pages/orgs/transform", "./pages/pages_composer", "./pages/pull_requests/composer", "./pages/pull_requests/discussion-timeline-regrouping", "./pages/pull_requests/merge", "./pages/pull_requests/merging_error", "./pages/pull_requests/restore_branch", "./pages/pulls/show", "./pages/repositories/fork", "./pages/repositories/repo_new", "./pages/repository_imports/show", "./pages/settings/user/saved-replies", "./pages/settings/user/settings", "./pages/settings/user/user_sessions", "./pages/signup", "./pages/site-search", "./pages/site/contact", "./pages/site/features", "./pages/site/keyboard_shortcuts", "./pages/site_status", "./pages/stafftools/ldap", "./pages/tree_finder", "./pages/users/contributions", "./pages/users/pinned-repositories", "./pages/users/pinned-repository-reordering", "./pages/users/profile-sidebar"], function() {}), define("github/length-limited-input-with-warning", ["selector-observer"], function(e) {
        function t() { var e = parseInt(this.getAttribute("data-input-max-length"), 10),
                t = parseInt(this.getAttribute("data-warning-length"), 10) || 5,
                n = this.value.replace(/(\r\n|\n|\r)/g, "\r\n"),
                r = e - n.length; if (r <= 0) { var a = n.substr(0, e);
                a.endsWith("\r") ? (a = a.substr(0, e - 1), r = 1) : r = 0, this.value = a } var o = this.getAttribute("data-warning-text"),
                s = this.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
            r <= t ? (s.textContent = o.replace(new RegExp("{{remaining}}", "g"), r), s.classList.remove("d-none")) : (s.textContent = "", s.classList.add("d-none")) }(0, e.observe)(".js-length-limited-input", { add: function(e) { e.addEventListener("input", t), e.addEventListener("change", t) }, remove: function(e) { e.removeEventListener("input", t), e.removeEventListener("change", t) } }) }), define("github/link-prefetch-viewed", ["selector-observer"], function(e) {
        (0, e.observe)("link[rel=prefetch-viewed]", { initialize: function() { requestIdleCallback(function() { fetch(location.href, { method: "HEAD", credentials: "same-origin", headers: { Purpose: "prefetch-viewed" } }) }) } }) }), define("github/manage-membership-navigation", ["selector-observer"], function(e) {
        (0, e.observe)(".js-manage-requests-tabs-item", function(e) { e.addEventListener("click", function() { var e = this.closest(".js-manage-memberships-container");
                e.querySelector(".js-manage-invitations-tabs-item").classList.remove("selected"), this.classList.add("selected"); var t = e.querySelector(".js-manage-invitations-list"),
                    n = e.querySelector(".js-manage-requests-list");
                t.classList.add("d-none"), n.classList.remove("d-none") }) }), (0, e.observe)(".js-manage-invitations-tabs-item", function(e) { e.addEventListener("click", function() { var e = this.closest(".js-manage-memberships-container");
                e.querySelector(".js-manage-requests-tabs-item").classList.remove("selected"), this.classList.add("selected"); var t = e.querySelector(".js-manage-requests-list"),
                    n = e.querySelector(".js-manage-invitations-list");
                t.classList.add("d-none"), n.classList.remove("d-none") }) }) }), define("github/milestones", ["./has-interactions", "delegated-events", "./query-selector"], function(e, t, n) {
        function r(t) { var r = t.currentTarget,
                a = (0, n.query)(r, ".js-milestone-edit-cancel"),
                o = a.getAttribute("data-confirm-changes");
            o && ((0, e.hasDirtyFields)(r) ? a.setAttribute("data-confirm", o) : a.removeAttribute("data-confirm")) }(0, t.on)("change", ".js-milestone-edit-form", r), (0, t.on)("click", ".js-milestone-edit-form", r) }), define("github/milestone-dragging", ["./query-selector", "@github/sortablejs", "./sortable-button", "./debounce", "./fetch", "./has-interactions", "invariant", "./navigation", "selector-observer", "delegated-events", "./preserve-position", "./remote-form", "./form", "./google-analytics", "./sso"], function(e, t, n, r, a, o, s, i, u, l, c, d, f, m, v) {
        function g(e) { return e && e.__esModule ? e : { default: e } }

        function p(e) { var t, n; return regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                    case 0:
                        if (!(0, o.hasInteractions)(e)) { r.next = 2; break } return r.abrupt("return");
                    case 2:
                        return t = e.getAttribute("data-url"), (0, L.default)(t, "github/milestone-dragging.js:27"), r.next = 6, regeneratorRuntime.awrap((0, a.fetchSafeDocumentFragment)(document, t));
                    case 6:
                        n = r.sent, (0, c.preserveInteractivePosition)(function() { e.replaceWith(n) });
                    case 8:
                    case "end":
                        return r.stop() } }, null, this) }

        function h(e, t) { k({ item: t, newIndex: Array.from(e.querySelectorAll(".js-draggable-issue")).indexOf(t), trackingLabel: "keyboard-shortcut" }), (0, i.refocus)(t.closest(".js-navigation-container"), t) } var y = g(t),
            b = g(n),
            j = g(r),
            L = g(s),
            w = g(v),
            x = new WeakMap;
        (0, l.on)("socket:message", ".js-milestone-issues", function(t) { var n, r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        if (n = t.currentTarget, "1" !== (r = (0, e.query)(n, ".js-draggable-issues-container")).getAttribute("data-is-sorting")) { a.next = 5; break } return r.removeAttribute("data-is-sorting"), a.abrupt("return");
                    case 5:
                        return a.next = 7, regeneratorRuntime.awrap((0, w.default)());
                    case 7:
                        p(n);
                    case 8:
                    case "end":
                        return a.stop() } }, null, this) }), (0, d.remoteForm)(".js-milestone-sort-form", function(t, n) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2, regeneratorRuntime.awrap(n.json());
                    case 2:
                        r = s.sent, a = r.json, (o = (0, e.query)(t, ".js-milestone-reorder-feedback")).textContent = "", a.error ? (0, e.query)(t, ".js-milestone-changed").classList.remove("d-none") : ((0, e.query)(t, ".js-timestamp", HTMLInputElement).value = a.updated_at, o.textContent = o.getAttribute("data-success-text") || "");
                    case 7:
                    case "end":
                        return s.stop() } }, null, this) }); var k = (0, j.default)(function(t) { var n = t.newIndex,
                r = t.item,
                a = (0, e.closest)(r, ".js-draggable-issues-container"),
                o = r.getAttribute("data-id"),
                s = function(e, t) { return e.querySelectorAll(".js-draggable-issue")[t] }(a, n - 1),
                i = s && s.getAttribute("data-id"),
                u = (0, e.closest)(a, ".js-milestone-sort-form");
            (0, e.query)(u, ".js-item-id", HTMLInputElement).value = o, (0, e.query)(u, ".js-prev-id", HTMLInputElement).value = i || "", (0, m.trackEvent)({ category: "Milestone", action: "reorder", label: t.trackingLabel || "drag-and-drop" }), a.setAttribute("data-is-sorting", "1"), (0, f.submit)(u) }, 200);
        (0, b.default)(".js-draggable-issue", k), (0, l.on)("navigation:keydown", ".js-draggable-issue", function(t) {
            (0, L.default)(t instanceof CustomEvent, "github/milestone-dragging.js:105"); var n = t.currentTarget,
                r = (0, e.closest)(n, ".js-draggable-issues-container"); if ("J" === t.detail.hotkey) { var a = n.nextElementSibling;
                a && (a.after(n), h(r, n), t.preventDefault(), t.stopPropagation()) } else if ("K" === t.detail.hotkey) { var o = n.previousElementSibling;
                o && (o.before(n), h(r, n), t.preventDefault(), t.stopPropagation()) } }), (0, u.observe)(".js-draggable-issues-container", { add: function(e) { if (!x.has(e)) { var t = y.default.create(e, { animation: 150, item: ".js-draggable-issue", handle: ".js-drag-handle", onUpdate: k, chosenClass: "is-dragging" });
                    x.set(e, t) } }, remove: function(e) { var t = x.get(e);
                t && t.destroy() } }) }), define("github/mobile-preference", ["delegated-events"], function(e) {
        (0, e.on)("submit", ".js-mobile-preference-form", function() { this.querySelector(".js-mobile-preference-anchor-field").value = window.location.hash.substr(1) }) }), define("github/notifications/subscriptions", ["../query-selector", "delegated-events", "../remote-form", "../updatable-content"], function(e, t, n, r) {
        function a(e, t) { var n = !0,
                r = !1,
                a = void 0; try { for (var o, s = document.querySelectorAll(".js-setting-toggle .js-status-indicator")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { o.value.classList.remove("status-indicator-success", "status-indicator-loading", "status-indicator-failed") } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } e.classList.add(t) }(0, n.remoteForm)(".js-setting-toggle", function(t, n) { var r; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return r = (0, e.query)(t, ".js-status-indicator"), a(r, "status-indicator-loading"), o.prev = 2, o.next = 5, regeneratorRuntime.awrap(n.text());
                    case 5:
                        o.next = 10; break;
                    case 7:
                        o.prev = 7, o.t0 = o.catch(2), a(r, "status-indicator-failed");
                    case 10:
                        a(r, "status-indicator-success");
                    case 11:
                    case "end":
                        return o.stop() } }, null, this, [
                [2, 7]
            ]) }), (0, t.on)("change", ".js-participating-email input, .js-subscribed-email input", function() { var t = (0, e.query)(document, ".js-notification-emails"),
                n = document.querySelector(".js-participating-email input:checked, .js-subscribed-email input:checked");
            t.classList.toggle("d-none", !n) }), (0, n.remoteForm)(".js-unignore-form, .js-ignore-form, .js-unsubscribe-form, .js-subscribe-form", function(t, n) { var r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return (r = (0, e.closest)(t, ".js-subscription-row")).classList.add("loading"), o.prev = 2, o.next = 5, regeneratorRuntime.awrap(n.text());
                    case 5:
                        o.next = 13; break;
                    case 7:
                        o.prev = 7, o.t0 = o.catch(2), r.classList.remove("loading"), (a = (0, e.query)(t, ".btn-sm")).classList.add("btn-danger"), a.setAttribute("title", r.getAttribute("data-error-message") || "");
                    case 13:
                        r.classList.remove("loading"), t.classList.contains("js-unignore-form") || t.classList.contains("js-unsubscribe-form") ? r.classList.add("unsubscribed") : (t.classList.contains("js-ignore-form") || t.classList.contains("js-subscribe-form")) && r.classList.remove("unsubscribed");
                    case 15:
                    case "end":
                        return o.stop() } }, null, this, [
                [2, 7]
            ]) }), (0, n.remoteForm)(".js-thread-subscribe-form", function(t, n) { var a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2, regeneratorRuntime.awrap(n.text());
                    case 2:
                        a = s.sent, o = (0, e.closest)(t, ".js-thread-subscription-status"), a && (0, r.replaceContent)(o, a.text);
                    case 5:
                    case "end":
                        return s.stop() } }, null, this) }) }), define("github/oauth", ["invariant", "selector-observer", "./page-focused"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } } var a = r(e),
            o = r(n);
        (0, t.observe)("#js-oauth-authorize-btn", function(e) {
            (0, o.default)(document).then(function() { setTimeout(function() {
                    (0, a.default)(e instanceof HTMLButtonElement, "github/oauth.js:10"), e.disabled = !1 }, 1e3) }) }) }), define("github/orgs/team-discussions", ["../query-selector", "delegated-events", "../typecast", "invariant", "../document-ready", "../remote-form", "../form", "../behaviors/inline-comment"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(t) { var n = t.closest(".js-teams-write-a-post"); if (n) { var r = (0, e.query)(n, ".js-team-discussions-post-compose");
                r.classList.contains("d-none") || (r.classList.add("d-none"), (0, e.query)(n, ".js-post-placeholder").classList.remove("d-none"), n.classList.remove("active")), (0, e.query)(n, ".js-comment-form-error").classList.add("d-none") } }

        function l(e) { var n = v(e); if (n) {
                (0, p.default)(/\[private\]/.test(n.name), "github/orgs/team-discussions.js:49"); var r = n.getAttribute("data-original-value"),
                    a = e.querySelector("1" === r ? ".js-discussion-post-select-private" : ".js-discussion-post-select-public");
                a && (0, t.fire)(a, "navigation:open") } }

        function c(e) { var t = e.closest(".js-teams-reply-to-post"),
                n = t && t.querySelector(".js-comment-form-error");
            n && n.classList.add("d-none") }

        function d(e, t) { e.textContent = (parseInt(e.textContent) + t).toString() }

        function f(t, n) { t.classList.add("d-none"), (0, p.default)(t.parentElement, "github/orgs/team-discussions.js:195"), (0, e.query)(t.parentElement, n).classList.remove("d-none") }

        function m(t, n) { var r = v((0, g.default)(t.target.closest(".js-comment-update") || t.target.closest(".js-new-comment-form"), HTMLFormElement));
            (0, p.default)(r, "github/orgs/team-discussions.js:229"), (0, p.default)(/\[private\]/.test(r.name), "github/orgs/team-discussions.js:230"), r.value = n; var a = t.target.closest(".js-discussion-post"); if (a) { var o = (0, e.query)(a, ".js-discussion-post-privacy-icon"); "1" === n ? (a.classList.add("discussion-post-private"), o.classList.remove("d-none")) : (a.classList.remove("discussion-post-private"), o.classList.add("d-none")) } }

        function v(e) { var t = e.querySelector(".js-discussion-post-privacy-select"); if (t) { var n = t.querySelector("input"); if (n) return (0, p.default)(n instanceof HTMLInputElement, "github/orgs/team-discussions.js:253"), n } } var g = i(n),
            p = i(r);
        (0, t.on)("click", ".js-team-discussions-team-description-toggle", function() {
            (0, e.query)(document, ".js-team-discussions-team-description").classList.toggle("d-none"), (0, e.query)(document, ".js-team-discussions-team-description-form").classList.toggle("d-none") }), (0, t.on)("click", ".js-team-discussions-post-toggle", function(t) { var n = (0, e.closest)(t.target, ".js-teams-write-a-post");
            n.classList.contains("active") || (n.classList.add("active"), (0, e.query)(n, ".js-team-discussions-post-compose").classList.remove("d-none"), (0, e.query)(n, ".js-post-placeholder").classList.add("d-none"), (0, e.query)(n, ".js-title-field").focus()) }), (0, t.on)("click", ".js-hide-post-form", function(t) { u(t.target);
            l((0, e.closest)(t.target, ".js-new-comment-form", HTMLFormElement)) }), (0, t.on)("click", ".js-hide-inline-comment-form", function(e) { c(e.target) }), (0, o.remoteForm)(".js-new-comment-form", function(e, t) { return regeneratorRuntime.async(function(n) { for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        u(e), l(e), c(e);
                    case 5:
                    case "end":
                        return n.stop() } }, null, this) }), (0, o.remoteForm)(".js-team-discussions-team-description-form", function(t, n) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.prev = 0, s.next = 3, regeneratorRuntime.awrap(n.text());
                    case 3:
                        s.next = 7; break;
                    case 5:
                        s.prev = 5, s.t0 = s.catch(0);
                    case 7:
                        r = (0, e.query)(document, ".js-team-discussions-team-description"), a = (0, e.query)(r, ".description"), o = (0, e.query)(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement), r.classList.toggle("d-none"), t.classList.toggle("d-none"), o.value.trim() ? (a.textContent = o.value, o.defaultValue = o.value) : (a.textContent = "This team has no description", o.defaultValue = "");
                    case 13:
                    case "end":
                        return s.stop() } }, null, this, [
                [0, 5]
            ]) }), (0, o.remoteForm)(".js-comment-pin", function(t, n) { var r, a, o, s, i, u, l, c; return regeneratorRuntime.async(function(f) { for (;;) switch (f.prev = f.next) {
                    case 0:
                        return (r = (0, e.query)(t, "button[type=submit]")).blur(), f.next = 4, regeneratorRuntime.awrap(n.text());
                    case 4:
                        a = (0, e.query)(t, 'input[name="team_discussion[pinned]"]', HTMLInputElement), o = (0, e.query)(document, "#pinned_posts_counter"), s = r.getAttribute("aria-label") || "", i = r.getAttribute("data-alternate-aria-label") || "", r.setAttribute("data-alternate-aria-label", s), r.setAttribute("aria-label", i), r.classList.toggle("pinned"), u = r.classList.contains("pinned"), d(o, u ? 1 : -1), l = (0, e.closest)(o, ".js-pinned-post-tab"), !u && l.classList.contains("selected") && function(e) { e.addEventListener("transitionend", function(t) { "opacity" === t.propertyName && e.remove() }, { once: !0 }), e.classList.add("fade-out") }(c = (0, e.closest)(t, ".js-comment-delete-container")), a.value = u ? "0" : "1";
                    case 16:
                    case "end":
                        return f.stop() } }, null, this) }), (0, o.remoteForm)(".js-comment-delete", function(e, t) { var n, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return o.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        n = e.closest(".discussion-post"), (r = n && n.querySelector(".js-comment-pin button[type=submit]")) && r.classList.contains("pinned") && (a = document.querySelector("#pinned_posts_counter")) && d(a, -1);
                    case 5:
                    case "end":
                        return o.stop() } }, null, this) }), (0, t.on)("quote:selection", ".js-discussion-post", function(t) { var n = (0, e.query)(t.target, ".js-inline-comment-form-container");
            n.classList.add("open"), (0, e.query)(n, ".js-write-tab").click(), (0, e.query)(n, ".js-comment-field").focus() }), (0, o.remoteForm)(".js-comment-subscribe", function(e, t) { return regeneratorRuntime.async(function(n) { for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        f(e, ".js-comment-unsubscribe");
                    case 3:
                    case "end":
                        return n.stop() } }, null, this) }), (0, o.remoteForm)(".js-comment-unsubscribe", function(e, t) { return regeneratorRuntime.async(function(n) { for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        f(e, ".js-comment-subscribe");
                    case 3:
                    case "end":
                        return n.stop() } }, null, this) }), (0, o.remoteForm)(".js-discussion-post-update", function(e, t) { var n, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        if (n = e.closest(".js-comment")) { o.next = 3; break } return o.abrupt("return");
                    case 3:
                        if (r = n.querySelector(".js-comment-title")) { o.next = 6; break } return o.abrupt("return");
                    case 6:
                        return o.next = 8, regeneratorRuntime.awrap(t.json());
                    case 8:
                        a = o.sent, r.textContent = a.json.title;
                    case 10:
                    case "end":
                        return o.stop() } }, null, this) }), (0, t.on)("selectmenu:selected", ".js-discussion-post-select-private", function(e) { m(e, "1") }), (0, t.on)("selectmenu:selected", ".js-discussion-post-select-public", function(e) { m(e, "0") }),
        function() { var e;
            regeneratorRuntime.async(function(t) { for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, regeneratorRuntime.awrap(a.loaded);
                    case 2:
                        (e = document.querySelector(".js-show-discussion .js-mark-notification-form")) instanceof HTMLFormElement && (0, s.submit)(e);
                    case 4:
                    case "end":
                        return t.stop() } }, null, this) }() }), define("github/orgs/team-projects", ["delegated-events", "../query-selector", "../form"], function(e, t, n) {
        function r(e) { var r = (0, t.query)(e.currentTarget, ".js-team-project-suggestion-form", HTMLFormElement);
            (0, n.submit)(r) }(0, e.on)("click", ".js-team-project-suggestion", r), (0, e.on)("navigation:keyopen", ".js-team-project-suggestion", r) }), define("github/pages/notifications", ["../query-selector", "invariant", "delegated-events", "../remote-form", "../form"], function(e, t, n, r, a) {
        function o(e) { e.classList.contains("read") || (e.classList.toggle("unread"), e.classList.toggle("read")) } var s = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-notification-target", function(t) { if (0 === t.button) { o((0, e.closest)(t.currentTarget, ".js-notification")) } }), (0, r.remoteForm)(".js-delete-notification", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        o(r = (0, e.closest)(t, ".js-notification"));
                    case 4:
                    case "end":
                        return a.stop() } }, null, this) }), (0, r.remoteForm)(".js-mute-notification", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        o(r = (0, e.closest)(t, ".js-notification")), r.classList.toggle("muted");
                    case 5:
                    case "end":
                        return a.stop() } }, null, this) }), (0, r.remoteForm)(".js-unmute-notification", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        (r = (0, e.closest)(t, ".js-notification")).classList.toggle("muted");
                    case 4:
                    case "end":
                        return a.stop() } }, null, this) }), (0, r.remoteForm)(".js-mark-visible-as-read", function(t, n) { var r, a, o, s, i, u, l, c, d, f; return regeneratorRuntime.async(function(m) { for (;;) switch (m.prev = m.next) {
                    case 0:
                        return m.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        for (r = (0, e.closest)(t, ".js-notifications-browser"), a = r.querySelectorAll(".unread"), o = !0, s = !1, i = void 0, m.prev = 7, u = a[Symbol.iterator](); !(o = (l = u.next()).done); o = !0)(c = l.value).classList.remove("unread"), c.classList.add("read");
                        m.next = 15; break;
                    case 11:
                        m.prev = 11, m.t0 = m.catch(7), s = !0, i = m.t0;
                    case 15:
                        m.prev = 15, m.prev = 16, !o && u.return && u.return();
                    case 18:
                        if (m.prev = 18, !s) { m.next = 21; break } throw i;
                    case 21:
                        return m.finish(18);
                    case 22:
                        return m.finish(15);
                    case 23:
                        (d = r.querySelector(".js-mark-visible-as-read")) && d.classList.add("mark-all-as-read-confirmed"), (f = r.querySelector(".js-mark-as-read-confirmation")) && f.classList.add("mark-all-as-read-confirmed");
                    case 27:
                    case "end":
                        return m.stop() } }, null, this, [
                [7, 11, 15, 23],
                [16, , 18, 22]
            ]) }), (0, r.remoteForm)(".js-mark-remaining-as-read", function(t, n) { var r, a, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        r = (0, e.closest)(t, ".js-notifications-browser"), (a = r.querySelector(".js-mark-remaining-as-read")) && a.classList.add("d-none"), (o = r.querySelector(".js-mark-remaining-as-read-confirmation")) && o.classList.remove("d-none");
                    case 7:
                    case "end":
                        return s.stop() } }, null, this) }), (0, n.on)("navigation:keydown", ".js-notification", function(e) {
            (0, s.default)(e instanceof CustomEvent, "github/pages/notifications.js:84"); var t = e.currentTarget; switch (e.detail.hotkey) {
                case "I":
                case "e":
                case "y":
                    (0, a.submit)(t.querySelector(".js-delete-notification")), e.preventDefault(), e.stopPropagation(); break;
                case "M":
                case "m":
                    (0, a.submit)(t.querySelector(".js-mute-notification")), e.preventDefault(), e.stopPropagation() } }), (0, n.on)("navigation:keyopen", ".js-notification", function(e) { o(e.currentTarget) }), (0, r.remoteForm)(".js-notifications-subscription", function(t, n) { var r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return (r = (0, e.query)(t, ".js-spinner")).classList.remove("d-none"), a.prev = 2, a.next = 5, regeneratorRuntime.awrap(n.html());
                    case 5:
                        a.next = 9; break;
                    case 7:
                        a.prev = 7, a.t0 = a.catch(2);
                    case 9:
                        r.classList.add("d-none");
                    case 10:
                    case "end":
                        return a.stop() } }, null, this, [
                [2, 7]
            ]) }) }), define("github/pages/repositories/pulse", ["invariant", "delegated-events", "../../pjax"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } } var a = r(e),
            o = r(n);
        (0, t.on)("change", ".js-pulse-period", function(e) { var t = e.target.getAttribute("data-url");
            (0, a.default)(t, "github/pages/repositories/pulse.js:9"); var n = document.getElementById("js-repo-pjax-container");
            (0, a.default)(n, "github/pages/repositories/pulse.js:11"), (0, o.default)({ url: t, container: n }) }) }), define("github/pages/repositories/side-navigation", ["../../query-selector"], function(e) { document.addEventListener("pjax:end", function() { setTimeout(function() { var t = (0, e.query)(document, 'meta[name="selected-link"]', HTMLMetaElement).getAttribute("value"); if (null != t) { var n = !0,
                        r = !1,
                        a = void 0; try { for (var o, s = (0, e.querySelectorAll)(document, ".js-sidenav-container-pjax .js-selected-navigation-item")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value,
                                u = (i.getAttribute("data-selected-links") || "").split(" ").some(function(e) { return e === t });
                            i.classList.toggle("selected", u) } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } } }) }) }), define("github/pages/site/header-notifications", ["invariant", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("socket:message", ".js-notification-indicator", function(e) {
            (0, n.default)(e instanceof CustomEvent, "github/pages/site/header-notifications.js:9"); var t = e.currentTarget,
                r = e.detail.data;
            t.setAttribute("aria-label", r.aria_label), t.setAttribute("data-ga-click", r.ga_click), t.querySelector("span").setAttribute("class", r.span_class) }) }), define("github/capture-keypresses", ["exports", "invariant"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e) { var t = e.createElement("textarea"); return t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", (0, n.default)(e.body, "github/capture-keypresses.js:18"), e.body.appendChild(t), t.focus(),
                function() { return t.blur(), t.remove(), t.value } }; var n = function(e) { return e && e.__esModule ? e : { default: e } }(t) }), define("github/pjax/capture-keypresses", ["../capture-keypresses", "../form", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e),
            a = null;
        (0, n.on)("pjax:click", ".js-pjax-capture-input", function() { a = (0, r.default)(document) }), (0, n.on)("pjax:end", "#js-repo-pjax-container", function() { if (a) { var e = a(),
                    n = document.querySelector(".js-pjax-restore-captured-input");
                n instanceof HTMLInputElement && e && (0, t.changeValue)(n, e), a = null } }) }), define("github/pjax/history-navigate", ["../history", "invariant", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("pjax:click", ".js-pjax-history-navigate", function(t) {
            (0, r.default)(t instanceof CustomEvent, "github/pjax/history-navigate.js:15"), this.href === (0, e.getBackURL)() ? (history.back(), t.detail.relatedEvent.preventDefault(), t.preventDefault()) : this.href === (0, e.getForwardURL)() && (history.forward(), t.detail.relatedEvent.preventDefault(), t.preventDefault()) }) }), define("github/pjax/link-prefetch", ["../pjax", "selector-observer", "./prefetch"], function(e, t, n) {
        (0, t.observe)("link[rel=pjax-prefetch]", { initialize: function(t) { var r = (0, e.fetch)(t, { headers: { Purpose: "prefetch" } });
                (0, n.setPrefetchResponse)(t, r) } }) }), define("github/proxy-site-reporting", ["./proxy-site-detection", "./failbot"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e),
            r = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
            a = document.querySelector("meta[name=expected-hostname]"); if (r instanceof HTMLMetaElement && a instanceof HTMLMetaElement && (0, n.default)(document)) { var o = { url: window.location.href, expectedHostname: a.content, documentHostname: document.location.hostname, proxyPayload: r.content },
                s = new Error,
                i = {};
            i.$__ = btoa(JSON.stringify(o)), (0, t.reportError)(s, i) } }), define("github/pulls/change-base", ["../query-selector", "../menu", "../facebox", "delegated-events"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, r.on)("selectmenu:select", ".js-pull-base-branch-item", function(n) { var r = (0, e.closest)(n.currentTarget, ".js-select-menu");
            (0, t.deactivate)(r), n.preventDefault();
            (0, e.query)(r, ".js-pull-change-base-branch-field", HTMLInputElement).value = n.currentTarget.getAttribute("data-branch") || ""; var o = (0, e.query)(r, ".js-change-base-facebox");
            (0, a.default)(o.innerHTML) }) }), define("github/pulls/commits-range-selection", ["invariant", "delegated-events", "../pjax"], function(e, t, n) {
        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t, n) { var r = Array.from(e.querySelectorAll(".js-navigation-item")),
                a = r.indexOf(t),
                s = r.indexOf(n); if (-1 === a) throw new Error("Couldn't find startIndex in container"); if (-1 === s) throw new Error("Couldn't find endItem in container"); if (o(e), r[s].classList.add("is-last-in-range"), a > s) { var i = [s, a];
                a = i[0], s = i[1] } var u = !0,
                l = !1,
                c = void 0; try { for (var d, f = r[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) { d.value.classList.add("js-navigation-open") } } catch (e) { l = !0, c = e } finally { try {!u && f.return && f.return() } finally { if (l) throw c } } var m = !0,
                v = !1,
                g = void 0; try { for (var p, h = r.slice(a, s + 1)[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) { var y = p.value;
                    y.classList.add("is-range-selected"), y.classList.remove("js-navigation-open") } } catch (e) { v = !0, g = e } finally { try {!m && h.return && h.return() } finally { if (v) throw g } } }

        function o(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = e.querySelectorAll(".js-navigation-item")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { a.value.classList.remove("is-range-selected", "is-last-in-range") } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } var s = r(e),
            i = r(n);
        (0, t.on)("navigation:open", ".js-diffbar-commits-list .js-navigation-item", function(e) { if ((0, s.default)(e instanceof CustomEvent, "github/pulls/commits-range-selection.js:83"), e.detail.shiftKey) { e.preventDefault(); var t = e.currentTarget.closest(".js-diffbar-commits-menu"); if (e.currentTarget.classList.contains("is-range-selected")) { e.stopPropagation(); var n = t.querySelectorAll(".js-navigation-item.is-range-selected"),
                        r = n[0],
                        u = n[n.length - 1],
                        l = t.getAttribute("data-range-url"),
                        c = r.getAttribute("data-parent-commit"),
                        d = u.getAttribute("data-commit"),
                        f = c && d ? c + ".." + d : d,
                        m = l.replace("$range", f),
                        v = document.getElementById("js-repo-pjax-container");
                    (0, s.default)(v, "github/pulls/commits-range-selection.js:105"), (0, i.default)({ url: m, container: v }) } else e.stopImmediatePropagation(),
                    function(e) { var t, n;
                        regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (n = function(n) {
                                            (0, s.default)(n.target instanceof HTMLElement, "github/pulls/commits-range-selection.js:61"), a(e, t, n.target) }, t = e.querySelector(".js-navigation-item.navigation-focus")) { r.next = 4; break } return r.abrupt("return");
                                case 4:
                                    return a(e, t, t), e.addEventListener("navigation:focus", n), r.next = 8, regeneratorRuntime.awrap(new Promise(function(e) { return window.addEventListener("keyup", e, { once: !0 }) }));
                                case 8:
                                    e.removeEventListener("navigation:focus", n), o(e);
                                case 10:
                                case "end":
                                    return r.stop() } }, null, this) }(t) } }) }), define("github/pulls/compare", ["../hash-change", "invariant", "selector-observer", "delegated-events", "../query-selector", "../form", "../visible"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } } var u = i(e),
            l = i(t),
            c = i(s);
        (0, r.on)("click", ".js-compare-tab", function(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var o, s = document.querySelectorAll(".js-compare-tab.selected")[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) { o.value.classList.remove("selected") } } catch (e) { n = !0, r = e } finally { try {!t && s.return && s.return() } finally { if (n) throw r } } e.currentTarget.classList.add("selected"); var i = !0,
                u = !1,
                c = void 0; try { for (var d, f = document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")[Symbol.iterator](); !(i = (d = f.next()).done); i = !0) { d.value.classList.add("d-none") } } catch (e) { u = !0, c = e } finally { try {!i && f.return && f.return() } finally { if (u) throw c } }(0, l.default)(e.currentTarget instanceof HTMLAnchorElement, "github/pulls/compare.js:21"); var m = e.currentTarget.hash;
            (0, a.query)(document, m).classList.remove("d-none"), e.preventDefault() }), (0, u.default)(function(e) { var t = e.target; if (t instanceof HTMLElement) { var n = t.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
                n && n instanceof HTMLElement && !(0, c.default)(n) && (0, a.query)(document, '.js-compare-tab[href="#' + n.id + '"]').click() } }), (0, r.on)("click", ".js-toggle-range-editor-cross-repo", function() {
            (0, a.query)(document, ".js-range-editor").classList.toggle("is-cross-repo") }), (0, r.on)("pjax:click", ".js-range-editor", function(e) { var t = document.querySelector(".js-compare-pr"); if (t && t.classList.contains("open")) {
                (0, l.default)(e instanceof CustomEvent, "github/pulls/compare.js:52"); var n = e.detail.options,
                    r = new URL(n.url);
                r.search.match(/expand=1/) || (r.search += (r.search ? "&" : "") + "expand=1", n.url = r.toString()) } }), (0, r.on)("navigation:open", ".js-commitish-form", function(e) { var t = e.currentTarget;
            (0, l.default)(t instanceof HTMLFormElement, "github/pulls/compare.js:64"); var n = document.createElement("input");
            n.type = "hidden", n.name = "new_compare_ref"; var r = t.querySelector(".js-new-item-name");
            (0, l.default)(r, "github/pulls/compare.js:69"), n.value = r.textContent, t.appendChild(n), (0, o.submit)(t) }), (0, n.observe)(".js-compare-pr.open", { add: function() { var e = document.body;
                (0, l.default)(e, "github/pulls/compare.js:79"), e.classList.add("is-pr-composer-expanded") }, remove: function() { var e = document.body;
                (0, l.default)(e, "github/pulls/compare.js:84"), e.classList.remove("is-pr-composer-expanded") } }) }), define("github/pulls/favicon-status", ["invariant", "selector-observer"], function(e, t) {
        function n(e) { var t = document.querySelector("head .js-site-favicon");
            t instanceof HTMLLinkElement && (null == a && (a = t.href), t.href = e) } var r = function(e) { return e && e.__esModule ? e : { default: e } }(e),
            a = void 0;
        (0, t.observe)("[data-favicon-override]", { add: function(e) { var t = e.getAttribute("data-favicon-override");
                (0, r.default)("string" == typeof t, "github/pulls/favicon-status.js:27"), setTimeout(function() { return n(t) }) }, remove: function() { null != a && n(a) } }) }), define("github/pulls/reviews", ["../query-selector", "../menu", "../hash-change", "invariant", "delegated-events", "../inflector", "../remote-form"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u() { var t = document.querySelector(".js-reviews-container");
            t && setTimeout(function() { return function(t) { var n = (0, e.closest)(t, ".js-review-state-classes"),
                        r = n.querySelectorAll(".js-pending-review-comment").length;
                    n.classList.toggle("is-review-pending", r > 0); var a = !0,
                        s = !1,
                        i = void 0; try { for (var u, l = document.querySelectorAll(".js-pending-review-comment-count")[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) u.value.textContent = String(r) } catch (e) { s = !0, i = e } finally { try {!a && l.return && l.return() } finally { if (s) throw i } } var c = !0,
                        d = !1,
                        f = void 0; try { for (var m, v = document.querySelectorAll(".js-pending-comment-count-type")[Symbol.iterator](); !(c = (m = v.next()).done); c = !0) { var g = m.value;
                            (0, o.pluralizeNode)(r, g) } } catch (e) { d = !0, f = e } finally { try {!c && v.return && v.return() } finally { if (d) throw f } } if (r > 0) { var p = (0, e.query)(t, ".js-menu-target");
                        p.classList.add("anim-pulse-in"), p.addEventListener("animationend", function() { return p.classList.remove("anim-pulse-in") }, { once: !0 }) } }(t) }) } var l = i(n),
            c = i(r);
        (0, l.default)(function() { if ("submit-review" === window.location.hash.slice(1)) { var e = document.querySelector(".js-reviews-container");
                (0, t.activate)(e) } }), (0, s.remoteForm)(".js-inline-comment-form", function(e, t) { return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        u();
                    case 3:
                    case "end":
                        return e.stop() } }, null, this) }), (0, s.remoteForm)(".js-pending-review-comment .js-comment-delete", function(e, t) { return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, regeneratorRuntime.awrap(t.text());
                    case 2:
                        u();
                    case 3:
                    case "end":
                        return e.stop() } }, null, this) }), (0, a.on)("click", ".js-review-menu-target", function(e) { e.stopImmediatePropagation(), (0, c.default)(e.currentTarget instanceof HTMLButtonElement, "github/pulls/reviews.js:55"); var n = e.currentTarget.form;
            (0, c.default)(n, "github/pulls/reviews.js:57"); var r = n.querySelector(".js-review-requests-menu");
            (0, t.activate)(r) }) }), define("github/reactions", ["./query-selector", "./menu", "invariant", "delegated-events", "./parse-html", "./remote-form"], function(e, t, n, r, a, o) {
        function s(t) { var n = t.target;
            (0, u.default)(n instanceof HTMLElement, "github/reactions.js:29"); var r = n.getAttribute("data-reaction-label");
            (0, u.default)(r, "github/reactions.js:32"); var a = (0, e.closest)(n, ".js-add-reaction-popover");
            (0, e.query)(a, ".js-reaction-description").textContent = r }

        function i(t) {
            (0, u.default)(t.target instanceof HTMLElement, "github/reactions.js:40"); var n = (0, e.closest)(t.target, ".js-add-reaction-popover");
            (0, e.query)(n, ".js-reaction-description").textContent = "Pick your reaction" } var u = function(e) { return e && e.__esModule ? e : { default: e } }(n);
        (0, o.remoteForm)(".js-pick-reaction", function(n, r) { var o, s, i, u, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return d.next = 2, regeneratorRuntime.awrap(r.json());
                    case 2:
                        o = d.sent, (0, t.deactivate)(n.closest(".js-menu-container")), s = (0, e.closest)(n, ".js-comment"), i = (0, e.query)(s, ".js-reactions-container"), u = (0, e.query)(s, ".js-comment-header-reaction-button"), l = (0, a.parseHTML)(document, o.json.reactions_container.trim()), c = (0, a.parseHTML)(document, o.json.comment_header_reaction_button.trim()), i.replaceWith(l), u.replaceWith(c), s.classList.remove("is-reacting");
                    case 12:
                    case "end":
                        return d.stop() } }, null, this) }), (0, r.on)("toggle", ".js-reaction-popover-container", function(t) { var n = t.currentTarget.hasAttribute("open"),
                r = !0,
                a = !1,
                o = void 0; try { for (var u, l = t.target.querySelectorAll(".js-reaction-option-item")[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) { var c = u.value;
                    n ? (c.addEventListener("mouseenter", s), c.addEventListener("mouseleave", i)) : (c.removeEventListener("mouseenter", s), c.removeEventListener("mouseleave", i)) } } catch (e) { a = !0, o = e } finally { try {!r && l.return && l.return() } finally { if (a) throw o } }(0, e.closest)(t.target, ".js-comment").classList.toggle("is-reacting", n) }, { capture: !0 }) }), define("github/releases", ["exports", "./query-selector", "delegated-events", "./typecast", "./fetch", "./pjax", "invariant", "selector-observer", "./history"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e) { var r, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return r = (0, p.default)(e.form, HTMLFormElement), o = (0, t.query)(r, "#release_draft", HTMLInputElement), o.value = "1", d(e, "is-saving"), i.prev = 4, i.next = 7, regeneratorRuntime.awrap((0, a.fetchJSON)(r.action, { method: r.method, body: new FormData(r) }));
                    case 7:
                        return s = i.sent, d(e, "is-saved"), setTimeout(d, 5e3, e, "is-default"), (0, n.fire)(r, "release:saved", { release: s }), i.abrupt("return", s);
                    case 14:
                        throw i.prev = 14, i.t0 = i.catch(4), d(e, "is-failed"), i.t0;
                    case 18:
                    case "end":
                        return i.stop() } }, null, this, [
                [4, 14]
            ]) }

        function d(e, t) { var n;
            (n = e.classList).remove.apply(n, y), e.classList.add(t), e.disabled = "is-saving" === t }

        function f(e) { var t, n = document.querySelector(".release-target-wrapper"),
                r = document.querySelector(".js-release-tag"); if (null != n && null != r) { switch (e) {
                    case "is-valid":
                        n.classList.add("d-none"); break;
                    case "is-loading":
                        break;
                    default:
                        n.classList.remove("d-none") }(t = r.classList).remove.apply(t, b), r.classList.add(e) } }

        function m(e) { var n, r, o; return regeneratorRuntime.async(function(s) { for (;;) switch (s.prev = s.next) {
                    case 0:
                        if (e.value) { s.next = 2; break } return s.abrupt("return");
                    case 2:
                        if (e.value !== j.get(e)) { s.next = 4; break } return s.abrupt("return");
                    case 4:
                        return f("is-loading"), j.set(e, e.value), n = new URL(e.getAttribute("data-url"), window.location.origin), (r = new URLSearchParams(n.search.slice(1))).append("tag_name", e.value), n.search = r.toString(), s.prev = 10, s.next = 13, regeneratorRuntime.awrap((0, a.fetchJSON)(n));
                    case 13:
                        "duplicate" === (o = s.sent).status && parseInt(e.getAttribute("data-existing-id")) === parseInt(o.release_id) ? f("is-valid") : ((0, t.query)(document, ".js-release-tag .js-edit-release-link").setAttribute("href", o.url), f("is-" + o.status)), s.next = 20; break;
                    case 17:
                        s.prev = 17, s.t0 = s.catch(10), f("is-invalid");
                    case 20:
                    case "end":
                        return s.stop() } }, null, this, [
                [10, 17]
            ]) }

        function v(e, t, n) { return t + "/releases/" + e + "/" + n }

        function g(e) { var n = (0, t.closest)(e, "form", HTMLFormElement).querySelector(".js-previewable-comment-form"); if (n) { var r = n.getAttribute("data-base-preview-url");
                r || (r = String(n.getAttribute("data-preview-url")), n.setAttribute("data-base-preview-url", r)); var a = (0, t.querySelectorAll)(e, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
                    o = new URL(r, window.location.origin),
                    s = new URLSearchParams(o.search.slice(1)),
                    i = !0,
                    u = !1,
                    l = void 0; try { for (var c, d = a[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) { var f = c.value;
                        f.value && s.append(f.name, f.value) } } catch (e) { u = !0, l = e } finally { try {!i && d.return && d.return() } finally { if (u) throw l } } o.search = s.toString(), n.setAttribute("data-preview-url", o.toString()) } } Object.defineProperty(e, "__esModule", { value: !0 }), e.saveDraft = c; var p = l(r),
            h = l(s);
        (0, n.on)("click", ".js-save-draft", function(e) { c((0, p.default)(e.currentTarget, HTMLButtonElement)), e.preventDefault() }), (0, n.on)("click", ".js-timeline-tags-expander", function(e) { var n = (0, p.default)(e.currentTarget, HTMLElement);
            (0, t.closest)(n, ".js-timeline-tags").classList.remove("is-collapsed") }); var y = ["is-default", "is-saving", "is-saved", "is-failed"];
        (0, n.on)("release:saved", ".js-release-form", function(e) {
            (0, h.default)(e instanceof CustomEvent, "github/releases.js:59"); var n = e.detail.release,
                r = e.currentTarget,
                a = r.getAttribute("data-repo-url"),
                s = n.update_url || v("tag", a, n.tag_name); if (r.setAttribute("action", s), n.update_authenticity_token) { r.querySelector("input[name=authenticity_token]").value = n.update_authenticity_token } var i = n.edit_url || v("edit", a, n.tag_name);
            (0, u.replaceState)((0, o.getState)(), document.title, i); var l = document.querySelector("#delete_release_confirm form"); if (l) { var c = n.delete_url || v("tag", a, n.tag_name); if (l.setAttribute("action", c), n.delete_authenticity_token) {
                    (0, t.query)(l, "input[name=authenticity_token]", HTMLInputElement).value = n.delete_authenticity_token } } var d = r.querySelector("#release_id"); if (!d.value) { d.value = n.id; var f = document.createElement("input");
                f.type = "hidden", f.name = "_method", f.value = "put", r.appendChild(f) } }), (0, n.on)("click", ".js-publish-release", function() {
            (0, t.query)(document, "#release_draft", HTMLInputElement).value = "0" }); var b = ["is-loading", "is-empty", "is-valid", "is-invalid", "is-duplicate", "is-pending"],
            j = new WeakMap;
        (0, i.observe)(".js-release-tag-field", function(e) { m(e), e.addEventListener("blur", function() { m(e) }) }), (0, n.on)("change", ".js-release-tag", function(e) { g(e.currentTarget) }), (0, i.observe)(".js-release-form .js-previewable-comment-form", function(e) { g(e.closest("form").querySelector(".js-release-tag")) }) }), define("github/repo-list", ["./query-selector", "delegated-events", "./onfocus", "./jquery", "./typecast", "invariant", "selector-observer", "./history", "./form"], function(e, t, n, r, a, o, s, i, u) {
        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e) { var t = h.get(e) || 0; if (!(t > y)) { var n = e.querySelector(".js-more-repos-form");
                n && (h.set(e, t + 1), (0, u.submit)((0, g.default)(n, HTMLFormElement))) } }

        function d(e, t, n) { var r = new URL(e, window.location.origin),
                a = new URLSearchParams(r.search.slice(1)); return t.length < 1 ? a.delete(n) : a.set(n, t), r.search = a.toString(), r.toString() }

        function f(e) { var t = e.querySelector(".js-your-repositories-search"); return !!t && (document.activeElement === t || (0, g.default)(t, HTMLInputElement).defaultValue.trim().length > 0) }

        function m(e) { var n = e.querySelector(".js-your-repositories-search");
            n && (0, t.fire)(n, "filterable:change") } var v = l(r),
            g = l(a),
            p = l(o),
            h = new WeakMap,
            y = 100;
        (0, n.onFocus)(".js-your-repositories-search", function(t) { c((0, e.closest)(t, ".js-repos-container")) }), (0, s.observe)(".js-your-repositories-search", function(e) { e.defaultValue.trim().length > 0 && m(e.closest(".js-repos-container")) }), (0, n.onInput)(".js-your-repositories-search", function(t) { var n = (0, g.default)(t.target, HTMLInputElement);! function(t) { var n = (0, e.closest)(t, ".js-repos-container"),
                    r = t.getAttribute("data-query-name");
                (0, p.default)("string" == typeof r, "github/repo-list.js:86"); var a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = (0, e.querySelectorAll)(n, ".js-repo-filter-link", HTMLAnchorElement)[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value;
                        l.href = d(l.href, t.value.trim(), r) } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } }(n),
            function(e) { var t = e.getAttribute("data-url"),
                    n = e.getAttribute("data-query-name");
                (0, p.default)("string" == typeof t && "string" == typeof n, "github/repo-list.js:78"), (0, i.replaceState)(null, "", d(t, e.value.trim(), n)) }(n) }), (0, v.default)(document).on("ajaxSend", ".js-more-repos-form", function(t) {
            (0, e.query)(t.target, ".js-more-repos-link", HTMLButtonElement).classList.add("is-loading") }), (0, v.default)(document).on("ajaxSuccess", ".js-more-repos-form", function(t) { var n = t.target.querySelector(".js-more-repos-link");
            n && n.classList.remove("is-loading"); var r = (0, e.closest)(t.target, ".js-repos-container");
            f(r) && c(r) }), (0, s.observe)(".js-more-repos-form", function(t) { var n = (0, e.closest)(t, ".js-repos-container");
            f(n) && c(n), t.addEventListener("page:loaded", function() { m(n) }) }), (0, t.on)("pjax:end", ".js-repos-container", function(e) { var t = (0, g.default)(e.target, HTMLElement);! function(e) { h.set(e, 0) }(t), m(t) }) }), define("github/search-suggester", ["./query-selector", "./throttled-input", "./typecast", "./fetch", "invariant", "./features", "./navigation", "selector-observer", "delegated-events", "./form"], function(e, t, n, r, a, o, s, i, u, l) {
        function c(e) { return e && e.__esModule ? e : { default: e } }

        function d(e) { var t = e.value.slice(0, e.selectionEnd),
                n = e.value.slice(e.selectionEnd),
                r = 0 === e.value.trim().length,
                a = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/); return r || a }

        function f(t) { var n, a, i, u, l, c, d, f, v, p, h; return regeneratorRuntime.async(function(y) { for (;;) switch (y.prev = y.next) {
                    case 0:
                        if (n = t.getAttribute("data-contents-url"), a = (0, o.isFeatureEnabled)("SEARCH_SUGGESTIONS"), n) { y.next = 4; break } return y.abrupt("return");
                    case 4:
                        return i = (0, e.query)(document, ".js-search-suggester"), u = t.value.slice(0, t.selectionEnd).match(/\S*$/), l = u ? u[0] : "", c = new URL(n, window.location.origin), (d = new URLSearchParams).append("query", l), c.search = d.toString(), y.next = 13, regeneratorRuntime.awrap((0, r.fetchText)(c.toString()));
                    case 13:
                        if ("" !== (f = y.sent).trim()) { y.next = 17; break } return m(), y.abrupt("return");
                    case 17:
                        i.innerHTML = f, a && i.classList.remove("d-none"), (0, s.activate)(i.querySelector(".js-navigation-container")), v = (0, e.query)(i, ".js-search-suggester-helper"), p = t.value.match(/(^|\s)[^\s:]+$/), h = (0, g.default)(v.parentElement, HTMLElement), p && (v.textContent = t.value), h.classList.toggle("d-none", a && !p);
                    case 25:
                    case "end":
                        return y.stop() } }, null, this) }

        function m() {
            (0, e.query)(document, ".js-search-suggester").classList.add("d-none") }

        function v(t) { var n = t.target,
                r = (0, e.closest)(n, ".js-navigation-item"),
                a = (0, e.query)(document, ".js-search-suggester-field", HTMLInputElement),
                o = (0, e.query)(document, ".js-search-suggester"),
                s = r.getAttribute("data-value") || "",
                i = a.value.slice(0, a.selectionEnd).replace(/\S+$/, ""),
                u = a.value.slice(a.selectionEnd);
            o.classList.contains("d-none") ? (0, l.submit)((0, e.query)(document, "#search_form", HTMLFormElement)) : (t.preventDefault(), a.value = i + s + u, d(a) ? f(a) : m()) } var g = c(n),
            p = c(a);
        (0, i.observe)(".js-search-suggester-field", function(e) { f(e), (0, t.addThrottledInputEventListener)(e, function() { d(e) ? f(e) : m() }) }), (0, u.on)("focusin", ".js-search-suggester-field", function(e) { var t = (0, g.default)(e.currentTarget, HTMLInputElement);
            d(t) ? f(t) : m() }), (0, u.on)("focusout", ".js-search-suggester-field", function() { m() }), (0, u.on)("mousedown", ".js-search-suggester", v), (0, u.on)("navigation:keydown", ".js-search-suggester", function(t) {
            (0, p.default)(t instanceof CustomEvent, "github/search-suggester.js:101"); var n = t.currentTarget.querySelector(".js-search-suggester .js-navigation-item.navigation-focus"); switch (t.detail.hotkey) {
                case "Enter":
                    n ? v(t) : (0, l.submit)((0, e.query)(document, "#search_form", HTMLFormElement)); break;
                case "Tab":
                    n && v(t); break;
                case "ArrowLeft":
                case "ArrowRight":
                case "Escape":
                    m() } }) }), define("github/select-menu/ajax", ["../jquery", "../menu", "delegated-events"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, r.default)(document).on("ajaxSuccess", ".js-select-menu:not([data-multiple])", function(e) {
            (0, t.deactivate)(e.currentTarget) }), (0, r.default)(document).on("ajaxSend", ".js-select-menu:not([data-multiple])", function(e) { e.currentTarget.classList.add("is-loading") }), (0, r.default)(document).on("ajaxComplete", ".js-select-menu", function(e) { e.currentTarget.classList.remove("is-loading") }), (0, r.default)(document).on("ajaxError", ".js-select-menu", function(e) { e.currentTarget.classList.add("has-error") }), (0, n.on)("menu:deactivate", ".js-select-menu", function(e) { e.currentTarget.classList.remove("is-loading", "has-error") }) }), define("github/select-menu/base", ["../query-selector", "delegated-events", "../form", "../menu"], function(e, t, n, r) {
        (0, t.on)("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item", function(a) { var o = a.currentTarget; if ((0, t.fire)(o, "selectmenu:select")) { var s = (0, e.closest)(o, ".js-select-menu"),
                    i = s.querySelector(".js-navigation-item.selected");
                i && i.classList.remove("selected"), o.classList.add("selected"), o.classList.remove("indeterminate"); var u = !0,
                    l = !1,
                    c = void 0; try { for (var d, f = (0, e.querySelectorAll)(o, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) { var m = d.value;
                        (0, n.changeValue)(m, !0) } } catch (e) { l = !0, c = e } finally { try {!u && f.return && f.return() } finally { if (l) throw c } }(0, t.fire)(o, "selectmenu:selected"), s.classList.contains("is-loading") || (0, r.deactivate)(s) } }), (0, t.on)("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item", function(r) { var a = r.currentTarget; if ((0, t.fire)(a, "selectmenu:select")) { var o = a.classList.contains("selected");
                a.classList.toggle("selected"), a.classList.remove("indeterminate"); var s = !0,
                    i = !1,
                    u = void 0; try { for (var l, c = (0, e.querySelectorAll)(a, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) { var d = l.value;
                        (0, n.changeValue)(d, !o) } } catch (e) { i = !0, u = e } finally { try {!s && c.return && c.return() } finally { if (i) throw u } }(0, t.fire)(a, "selectmenu:selected") } }), (0, t.on)("selectmenu:select", ".js-select-menu .js-navigation-item.disabled", function(e) { e.preventDefault() }) }), define("github/select-menu/button", ["../query-selector", "delegated-events"], function(e, t) {
        (0, t.on)("selectmenu:selected", ".js-select-menu .js-navigation-item", function(t) { var n = t.currentTarget,
                r = (0, e.closest)(n, ".js-select-menu"),
                a = n.querySelector(".js-select-button-text"); if (a) { var o = r.querySelector(".js-select-button");
                o && (o.innerHTML = a.innerHTML) } var s = n.querySelector(".js-select-menu-item-gravatar"); if (s) { var i = r.querySelector(".js-select-button-gravatar");
                i && (i.innerHTML = s.innerHTML) } }) }), define("github/select-menu/css", ["delegated-events", "../visible"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.on)("selectmenu:change", ".js-select-menu .select-menu-list", function(e) { var t = e.currentTarget,
                r = Array.from(t.querySelectorAll(".js-navigation-item")),
                a = !0,
                o = !1,
                s = void 0; try { for (var i, u = r[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { i.value.classList.remove("last-visible") } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } var l = r.filter(n.default).pop(); if (l && l.classList.add("last-visible"), !t.hasAttribute("data-filterable-for")) { var c = e.target.classList.contains("filterable-empty");
                t.classList.toggle("filterable-empty", c) } }) }), define("github/select-menu/filterable", ["delegated-events"], function(e) {
        function t() { var e = this.querySelector(".js-filterable-field");
            e && e.focus() }(0, e.on)("menu:activated", ".js-select-menu", t), (0, e.on)("selectmenu:load", ".js-select-menu", t), (0, e.on)("menu:deactivate", ".js-select-menu", function() { var t = this.querySelector(".js-filterable-field");
            t && (t.value = "", (0, e.fire)(t, "filterable:change")); var n = !0,
                r = !1,
                a = void 0; try { for (var o, s = this.querySelectorAll(".js-navigation-item.selected")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value,
                        u = i.querySelector("input[type=radio], input[type=checkbox]");
                    u && i.classList.toggle("selected", u.checked) } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } var l = document.activeElement; if (l && this.contains(l)) try { l.blur() } catch (e) {} }) }), define("github/select-menu/navigation", ["../navigation", "../query-selector", "delegated-events"], function(e, t, n) {
        function r(n) { var r = (0, t.closest)(n.currentTarget, ".js-select-menu").querySelector(".js-navigation-container");
            r && (0, e.refocus)(r, n.currentTarget) }(0, n.on)("menu:activate", ".js-select-menu", function(t) { var n = t.currentTarget.querySelector(":focus");
            n && n.blur(); var r = t.currentTarget.querySelector(".js-menu-target");
            r && r.classList.add("selected"); var a = t.currentTarget.querySelector(".js-navigation-container");
            a && (0, e.push)(a) }), (0, n.on)("menu:deactivate", ".js-select-menu", function(t) { var n = t.currentTarget.querySelector(".js-menu-target");
            n && n.classList.remove("selected"); var r = t.currentTarget.querySelector(".js-navigation-container");
            r && (0, e.pop)(r) }), (0, n.on)("filterable:change", ".js-select-menu .select-menu-list", r), (0, n.on)("selectmenu:tabchange", ".js-select-menu .select-menu-list", r) }), define("github/select-menu/new", ["delegated-events", "invariant", "../query-selector"], function(e, t, n) {
        function r(e, t, r) { var a = r.length > 0 && ! function(e, t) { var n = !0,
                    r = !1,
                    a = void 0; try { for (var o, s = e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { if (o.value.textContent.toLowerCase().trim() === t.toLowerCase()) return !0 } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } return !1 }(e, r); if (e.classList.toggle("is-showing-new-item-form", a), a) { var o = (0, n.query)(t, ".js-new-item-name"); "innerText" in o ? o.innerText = r : o.textContent = r; var s = t.querySelector(".js-new-item-value");
                s instanceof HTMLInputElement && (s.value = r) } } var a = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, e.on)("filterable:change", ".js-select-menu .select-menu-list", function(t) {
            (0, a.default)(t instanceof CustomEvent, "github/select-menu/new.js:22"); var n = t.currentTarget,
                o = n.querySelector(".js-new-item-form");
            o && r(n, o, t.detail.inputField.value), (0, e.fire)(t.target, "selectmenu:change") }) }), define("github/select-menu/tabs", ["delegated-events", "selector-observer"], function(e, t) {
        function n() { var e = this.querySelectorAll(".js-select-menu-tab"),
                t = e[0],
                n = !0,
                a = !1,
                o = void 0; try { for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) { var u = s.value; if (u.classList.contains("selected")) { t = u; break } } } catch (e) { a = !0, o = e } finally { try {!n && i.return && i.return() } finally { if (a) throw o } } t && r(t) }

        function r(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = e.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var s = a.value;
                    s !== e && (s.classList.remove("selected"), s.setAttribute("aria-current", !1)) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } e.classList.add("selected"), e.setAttribute("aria-current", !0) }

        function a(t, n) { var r = t.getAttribute("data-tab-filter"),
                a = t.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab-bucket"),
                o = !0,
                s = !1,
                i = void 0; try { for (var u, l = a[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) { var c = u.value;
                    c.getAttribute("data-tab-filter") === r && (c.classList.toggle("selected", n), n && (0, e.fire)(c, "selectmenu:tabchange")) } } catch (e) { s = !0, i = e } finally { try {!o && l.return && l.return() } finally { if (s) throw i } } }(0, e.on)("menu:activate", ".js-select-menu", n), (0, e.on)("selectmenu:load", ".js-select-menu", n), (0, e.on)("click", ".js-select-menu .js-select-menu-tab", function(e) { r(this); var t = this.closest(".js-select-menu").querySelector(".js-filterable-field"); if (t) { var n = this.getAttribute("data-filter-placeholder");
                n && t.setAttribute("placeholder", n), t.focus() } e.stopPropagation(), e.preventDefault() }), (0, t.observe)(".js-select-menu .js-select-menu-tab.selected", { add: function(e) { a(e, !0) }, remove: function(e) { a(e, !1) } }) }), define("github/select-menu", ["./select-menu/ajax", "./select-menu/base", "./select-menu/button", "./select-menu/css", "./select-menu/filterable", "./select-menu/loading", "./select-menu/navigation", "./select-menu/new", "./select-menu/tabs"], function() {}), define("github/sessions/two-factor", ["../typecast", "../fetch", "invariant", "delegated-events", "../query-selector", "../remote-form"], function(e, t, n, r, a, o) {
        function s(e) { return e && e.__esModule ? e : { default: e } }

        function i() { var e = document.body;
            (0, d.default)(e, "github/sessions/two-factor.js:12"), e.classList.add("is-sending"), e.classList.remove("is-sent", "is-not-sent") }

        function u() { var e = document.body;
            (0, d.default)(e, "github/sessions/two-factor.js:20"), e.classList.add("is-sent"), e.classList.remove("is-sending") }

        function l(e) { var t = document.body;
            (0, d.default)(t, "github/sessions/two-factor.js:28"), e && ((0, a.query)(document, ".js-sms-error").textContent = e), t.classList.add("is-not-sent"), t.classList.remove("is-sending") } var c = s(e),
            d = s(n);
        (0, o.remoteForm)(".js-send-auth-code", function(e, t) { var n; return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                    case 0:
                        return i(), n = void 0, e.prev = 2, e.next = 5, regeneratorRuntime.awrap(t.text());
                    case 5:
                        n = e.sent, e.next = 11; break;
                    case 8:
                        e.prev = 8, e.t0 = e.catch(2), l(e.t0.response.text);
                    case 11:
                        n && u();
                    case 12:
                    case "end":
                        return e.stop() } }, null, void 0, [
                [2, 8]
            ]) }), (0, r.on)("click", ".js-send-two-factor-code", function(e) { var n, r, o, s, f, m, v, g, p, h, y, b, j, L, w, x, k, E, q, S, T, _; return regeneratorRuntime.async(function(M) { for (;;) switch (M.prev = M.next) {
                    case 0:
                        return n = (0, c.default)(e.currentTarget, HTMLButtonElement), r = n.form, (0, d.default)(r, "github/sessions/two-factor.js:56"), o = (0, a.query)(r, ".js-country-code-select", HTMLSelectElement).value, s = (0, a.query)(r, ".js-sms-number", HTMLInputElement).value, f = o + " " + s, i(), null == (m = n.getAttribute("data-authenticity-token")) && (v = (0, c.default)(r.elements.namedItem("authenticity_token"), HTMLInputElement), m = v.value), (g = new FormData).append("number", f), g.append("authenticity_token", m), M.prev = 12, p = n.getAttribute("data-url"), (0, d.default)(p, "github/sessions/two-factor.js:77"), M.next = 17, regeneratorRuntime.awrap((0, t.fetch)(p, { method: "post", body: g }));
                    case 17:
                        for (u(), h = !0, y = !1, b = void 0, M.prev = 21, j = r.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(h = (L = j.next()).done); h = !0)((w = L.value) instanceof HTMLInputElement || w instanceof HTMLButtonElement) && (w.disabled = !1);
                        M.next = 29; break;
                    case 25:
                        M.prev = 25, M.t0 = M.catch(21), y = !0, b = M.t0;
                    case 29:
                        M.prev = 29, M.prev = 30, !h && j.return && j.return();
                    case 32:
                        if (M.prev = 32, !y) { M.next = 35; break } throw b;
                    case 35:
                        return M.finish(32);
                    case 36:
                        return M.finish(29);
                    case 37:
                        (0, a.query)(r, ".js-2fa-otp").focus(), M.next = 66; break;
                    case 40:
                        if (M.prev = 40, M.t1 = M.catch(12), !M.t1.response) { M.next = 47; break } return M.next = 45, regeneratorRuntime.awrap(M.t1.response.text());
                    case 45:
                        l(x = M.sent);
                    case 47:
                        for (k = !0, E = !1, q = void 0, M.prev = 50, S = r.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(k = (T = S.next()).done); k = !0)((_ = T.value) instanceof HTMLInputElement || _ instanceof HTMLButtonElement) && (_.disabled = !0);
                        M.next = 58; break;
                    case 54:
                        M.prev = 54, M.t2 = M.catch(50), E = !0, q = M.t2;
                    case 58:
                        M.prev = 58, M.prev = 59, !k && S.return && S.return();
                    case 61:
                        if (M.prev = 61, !E) { M.next = 64; break } throw q;
                    case 64:
                        return M.finish(61);
                    case 65:
                        return M.finish(58);
                    case 66:
                    case "end":
                        return M.stop() } }, null, this, [
                [12, 40],
                [21, 25, 29, 37],
                [30, , 32, 36],
                [50, 54, 58, 66],
                [59, , 61, 65]
            ]) }), (0, r.on)("click", ".js-enable-enable-two-factor-auth-button", function() { var e = (0, a.query)(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
            e.disabled = !1, e.removeAttribute("aria-label"), e.classList.remove("tooltipped") }), document.addEventListener("facebox:reveal", function() { if (document.querySelector("#facebox .js-two-factor-set-sms-fallback")) { var e = (0, a.query)(document, "#facebox .js-configure-sms-fallback .facebox-alert");
                e.textContent = "", e.classList.add("d-none"), (0, a.query)(document, "#facebox .js-configure-sms-fallback").classList.remove("d-none"), (0, a.query)(document, "#facebox .js-verify-sms-fallback").classList.add("d-none") } }), (0, o.remoteForm)(".js-two-factor-set-sms-fallback", function(e, t) { var n, r; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return n = void 0, o.prev = 1, o.next = 4, regeneratorRuntime.awrap(t.text());
                    case 4:
                        n = o.sent, o.next = 11; break;
                    case 7:
                        switch (o.prev = 7, o.t0 = o.catch(1), r = (0, a.query)(e, ".js-verify-sms-fallback .facebox-alert"), o.t0.response.status) {
                            case 422:
                            case 429:
                                r.textContent = o.t0.response.text, r.classList.remove("d-none") }
                    case 11:
                        if (!n) { o.next = 21; break } o.t1 = n.status, o.next = 200 === o.t1 ? 15 : 201 === o.t1 ? 15 : 202 === o.t1 ? 17 : 21; break;
                    case 15:
                        return window.location.reload(), o.abrupt("break", 21);
                    case 17:
                        return (0, a.query)(e, ".js-configure-sms-fallback").classList.add("d-none"), (0, a.query)(e, ".js-verify-sms-fallback").classList.remove("d-none"), (0, a.query)(e, ".js-fallback-otp").focus(), o.abrupt("break", 21);
                    case 21:
                    case "end":
                        return o.stop() } }, null, void 0, [
                [1, 7]
            ]) }) }), define("github/skip-autofill", ["invariant", "./onfocus"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.onFocus)(".js-skip-password-autofill", function(e) {
            (0, n.default)(e instanceof HTMLInputElement, "github/skip-autofill.js:9"), e.type = "password" }) }), define("github/smooth-scroll-anchor", ["./fragment-target", "delegated-events"], function(e, t) {
        (0, t.on)("click", ".js-smoothscroll-anchor", function(t) { var n = t.currentTarget; if (n instanceof HTMLAnchorElement) { var r = (0, e.findFragmentTarget)(document, n.hash);
                r && (r.scrollIntoView({ behavior: "smooth" }), t.preventDefault()) } }) }), define("github/service-worker-registration", ["./features"], function(e) {! function() { var t;
            regeneratorRuntime.async(function(n) { for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (!(0, e.isFeatureEnabled)("SERVICE_WORKER") || !navigator.serviceWorker) { n.next = 12; break } return t = void 0, n.prev = 2, n.next = 5, regeneratorRuntime.awrap(navigator.serviceWorker.register("/service-worker.js"));
                    case 5:
                        t = n.sent, n.next = 11; break;
                    case 8:
                        n.prev = 8, n.t0 = n.catch(2), console.error(n.t0);
                    case 11:
                        t && console.log("Service worker registration successful: ", t);
                    case 12:
                    case "end":
                        return n.stop() } }, null, this, [
                [2, 8]
            ]) }() }), define.register("robust-websocket"),
    function(e, t) { "function" == typeof define && define.amd ? define(function() { return e(t, navigator) }) : "object" == typeof exports && "object" == typeof module ? module.exports = e(t, navigator) : t.RobustWebSocket = e(t, "undefined" != typeof Mocha ? Mocha : navigator) }(function(e, t) { var n = function(r, a, o) {
            function s() { d && (clearTimeout(d), d = null) }

            function i() { L && (e.removeEventListener("online", b), e.removeEventListener("offline", j), L = !1) }

            function u(e) { if (!y.shouldReconnect.handle1000 && 1e3 === e.code || h) v = 0;
                else if (!1 !== t.onLine) { var n = y.shouldReconnect(e, m); "number" == typeof n && (d = setTimeout(l, n)) } else p = !0 }

            function l() { d = null, (f = new WebSocket(r, a || void 0)).binaryType = m.binaryType, v++, m.dispatchEvent(Object.assign(new CustomEvent("connecting"), { attempts: v, reconnects: g })), c = setTimeout(function() { c = null, i(), m.dispatchEvent(Object.assign(new CustomEvent("timeout"), { attempts: v, reconnects: g })) }, y.timeout), ["open", "close", "message", "error"].forEach(function(e) { f.addEventListener(e, function(t) { m.dispatchEvent(t); var n = m["on" + e]; if ("function" == typeof n) return n.apply(m, arguments) }) }), y.ignoreConnectivityEvents || L || (e.addEventListener("online", b), e.addEventListener("offline", j), L = !0) } var c, d, f = { close: function() {} },
                m = this,
                v = 0,
                g = -1,
                p = !1,
                h = !1,
                y = Object.assign({}, n.defaultOptions, "function" == typeof o ? { shouldReconnect: o } : o); if ("number" != typeof y.timeout) throw new Error("timeout must be the number of milliseconds to timeout a connection attempt"); if ("function" != typeof y.shouldReconnect) throw new Error("shouldReconnect must be a function that returns the number of milliseconds to wait for a reconnect attempt, or null or undefined to not reconnect.");
            ["bufferedAmount", "url", "readyState", "protocol", "extensions"].forEach(function(e) { Object.defineProperty(m, e, { get: function() { return f[e] } }) }); var b = function(e) { p && (s(), u(e)) },
                j = function() { p = !0, f.close(1e3) },
                L = !1;
            m.send = function() { return f.send.apply(f, arguments) }, m.close = function(e, t) { return "number" != typeof e && (t = e, e = 1e3), s(), p = !1, h = !0, i(), f.close(e, t) }, m.open = function() { f.readyState !== WebSocket.OPEN && f.readyState !== WebSocket.CONNECTING && (s(), p = !1, h = !1, l()) }, Object.defineProperty(m, "listeners", { value: { open: [function(e) { c && (clearTimeout(c), c = null), e.reconnects = ++g, e.attempts = v, v = 0, p = !1 }], close: [u] } }), Object.defineProperty(m, "attempts", { get: function() { return v }, enumerable: !0 }), Object.defineProperty(m, "reconnects", { get: function() { return g }, enumerable: !0 }), y.automaticOpen && l() }; return n.defaultOptions = { timeout: 4e3, shouldReconnect: function(e, t) { if (1008 !== e.code && 1011 !== e.code) return [0, 3e3, 1e4][t.attempts] }, ignoreConnectivityEvents: !1, automaticOpen: !0 }, n.prototype.binaryType = "blob", n.prototype.addEventListener = function(e, t) { e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t) }, n.prototype.removeEventListener = function(e, t) { if (e in this.listeners)
                for (var n = this.listeners[e], r = 0, a = n.length; r < a; r++)
                    if (n[r] === t) return void n.splice(r, 1) }, n.prototype.dispatchEvent = function(e) { if (e.type in this.listeners)
                for (var t = this.listeners[e.type], n = 0, r = t.length; n < r; n++) t[n].call(this, e) }, n }, "undefined" != typeof window ? window : "undefined" != typeof global ? global : this), define.registerEnd(), define("github/socket-channel", ["robust-websocket", "delegated-events", "invariant", "selector-observer"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } }

        function o(e) { var t = e.getAttribute("data-channel"); return t ? t.split(/\s+/) : [] }

        function s(e) { d || (d = function() { var e = document.head && document.head.querySelector("link[rel=web-socket]"); if (e) {
                    (0, u.default)(e instanceof HTMLLinkElement, "Link must be of type HTMLLinkElement -- github/socket-channel.js:36"); var n = new i.default(e.href, void 0, { shouldReconnect: function(e, t) { if (!(t.reconnects <= 5) && 1008 !== e.code && 1011 !== e.code) { if (1013 === e.code) return 6e3; if (1012 === e.code) return 5e3; var n = 5 * Math.random(); return 1e3 * Math.pow(2, t.attempts) * n } } }); return n.addEventListener("open", function() { for (var e in l) n.send("subscribe:" + e) }), n.addEventListener("message", function(e) { var n = JSON.parse(e.data),
                            r = n[0],
                            a = n[1]; if (r && a) { var o = c[r] || [],
                                s = !0,
                                i = !1,
                                u = void 0; try { for (var l, d = o[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) { var f = l.value;
                                    (0, t.fire)(f, "socket:message", { data: a, name: r }) } } catch (e) { i = !0, u = e } finally { try {!s && d.return && d.return() } finally { if (i) throw u } } } }), n } }()); var n = d; if (n) { var r = !0,
                    a = !1,
                    s = void 0; try { for (var f, m = o(e)[Symbol.iterator](); !(r = (f = m.next()).done); r = !0) { var v = f.value;
                        n.readyState !== WebSocket.OPEN || l[v] || n.send("subscribe:" + v), l[v] = !0, null == c[v] && (c[v] = []), c[v].push(e) } } catch (e) { a = !0, s = e } finally { try {!r && m.return && m.return() } finally { if (a) throw s } } } } var i = a(e),
            u = a(n),
            l = {},
            c = {},
            d = null;
        (0, r.observe)(".js-socket-channel[data-channel]", { add: s, remove: function(e) { var t = !0,
                    n = !1,
                    r = void 0; try { for (var a, s = o(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) { var i = a.value,
                            u = c[i]; if (u) { var l = u.indexOf(e); - 1 !== l && u.splice(l, 1) } } } catch (e) { n = !0, r = e } finally { try {!t && s.return && s.return() } finally { if (n) throw r } } } }) }), define("github/sso-auto-replay", ["selector-observer", "./form"], function(e, t) {
        (0, e.observe)("form.js-auto-replay-enforced-sso-request", function(e) {
            (0, t.submit)(e) }) }), define("github/sudo-required", ["delegated-events", "selector-observer", "./form", "./sudo"], function(e, t, n, r) {
        function a(r, a) {
            function i(t) { s || (t.preventDefault(), t.stopImmediatePropagation(), (0, o.default)(a).then(function() { s = !0, (0, n.submit)(t.target), s = !1 }).catch(function(n) {
                    (0, e.fire)(t.target, "sudo:failed", { error: n }) })) }(0, t.observe)(r, { add: function(e) { e.addEventListener("submit", i) }, remove: function(e) { e.removeEventListener("submit", i) } }) } var o = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            s = !1;
        a("form.js-sudo-required", "low"), a("form.js-high-risk-sudo-required", "high") }), define("github/tagsearch", ["./menu", "./html-safe", "./debounce", "./fetch", "invariant", "selector-observer", "./parse-html", "./query-selector"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } } var l = u(n),
            c = u(a),
            d = (0, l.default)(function() { var n, a, o, u, l, d, f, m, v, g, p, h, y, b, j; return regeneratorRuntime.async(function(L) { for (;;) switch (L.prev = L.next) {
                        case 0:
                            if (n = (0, i.query)(document, ".js-tagsearch-popover"), a = (0, i.query)(n, ".js-tagsearch-popover-content"), o = (0, i.query)(n, ".js-tagsearch-popover-loader"), u = document.getSelection(), (0, c.default)(null != u, "Selection must not be null -- github/tagsearch.js:17"), !u.isCollapsed) { L.next = 9; break } return n.classList.add("d-none"), (0, e.deactivate)(n), L.abrupt("return");
                        case 9:
                            if ((l = u.toString().trim()) && !l.match(/\n|\s|[();&.=",]/)) { L.next = 12; break } return L.abrupt("return");
                        case 12:
                            if (null != u.anchorNode && u.anchorNode.parentNode instanceof HTMLElement) { L.next = 14; break } return L.abrupt("return");
                        case 14:
                            if (d = u.anchorNode.parentNode.closest(".js-file-line-container")) { L.next = 17; break } return L.abrupt("return");
                        case 17:
                            if (f = u.getRangeAt(0).getClientRects()[0], n.style.position = "absolute", n.style.top = window.scrollY + f.bottom + 6 + "px", n.style.left = window.scrollX + f.left + f.width / 2 + "px", a.innerHTML = "", o.classList.remove("d-none"), n.classList.remove("d-none"), (0, e.activate)(n), m = n.getAttribute("data-tagsearch-url"), v = n.getAttribute("data-tagsearch-path"), g = n.getAttribute("data-tagsearch-ref"), null != m && null != v && null != g) { L.next = 30; break } throw new Error("Missing attribute `data-tagsearch-url");
                        case 30:
                            return p = new URL(m, window.location.origin), (h = new URLSearchParams).set("q", l), h.set("context", v), h.set("ref", g), p.search = h.toString(), L.prev = 36, L.next = 39, regeneratorRuntime.awrap((0, r.fetchPoll)(p));
                        case 39:
                            return y = L.sent, (0, t.verifyResponseHtmlSafeNonce)((0, t.getDocumentHtmlSafeNonce)(document), y), L.t0 = s.parseHTML, L.t1 = document, L.next = 45, regeneratorRuntime.awrap(y.text());
                        case 45:
                            L.t2 = L.sent, b = (0, L.t0)(L.t1, L.t2), o.classList.add("d-none"), a.innerHTML = "", a.append(b), L.next = 57; break;
                        case 52:
                            L.prev = 52, L.t3 = L.catch(36), j = (0, i.query)(n, ".js-tagsearch-popover-error"), o.classList.add("d-none"), j.classList.remove("d-none");
                        case 57:
                        case "end":
                            return L.stop() } }, null, this, [
                    [36, 52]
                ]) }, 200);
        (0, o.observe)(".js-tagsearch-popover", { add: function() { document.addEventListener("selectionchange", d) }, remove: function() { document.removeEventListener("selectionchange", d) } }) }), define("github/team-add-child", ["./typecast", "./fetch", "invariant", "delegated-events", "./query-selector"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) {
            (0, a.query)(e, ".js-add-child-team-loading-state").classList.toggle("d-none", !t), (0, a.query)(e, ".js-add-child-team-modal-content").classList.toggle("d-none", t) } var i = o(e),
            u = o(n);
        (0, r.on)("autocomplete:result", ".js-add-child-team-form", function(e) {
            (0, u.default)(e instanceof CustomEvent, "github/team-add-child.js:16"); var n = e.detail.text,
                r = e.detail.query,
                o = (0, i.default)(e.currentTarget, HTMLFormElement),
                l = o.closest(".js-add-team-container"); if (l) { if (s(l, !0), "_new" === n) { var c = o.getAttribute("data-new-child-team-path"); if (c) { var d = new URL(c, window.location.origin),
                            f = new URLSearchParams(d.search.slice(1)); return f.append("name", r), d.search = f.toString(), void(window.location.href = d) } } var m = o.getAttribute("data-change-parent-summary-path");
                (0, u.default)(m, "github/team-add-child.js:40"), (0, t.fetchSafeDocumentFragment)(document, m).then(function(e) {
                    (0, a.query)(o, ".js-add-team-search").classList.add("d-none"), (0, a.query)(o, ".js-add-team-warning").appendChild(e), s(l, !1) }) } }), (0, r.on)("click", ".js-add-child-team-form .js-confirm-change-parent", function(e) { var t = (0, i.default)(e.currentTarget, HTMLButtonElement).form,
                n = e.currentTarget.closest(".js-add-team-container");
            n && s(n, !0), t && t.submit() }) }), define("github/team-breadcrumbs", ["./query-selector", "invariant", "delegated-events", "./updatable-content"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger", function(t) {
            (0, a.default)(t.target instanceof HTMLElement, "github/team-breadcrumbs.js:10"); var n = (0, e.closest)(t.target, ".js-expandable-team-breadcrumbs");
            n && (n.classList.add("is-loading"), (0, r.updateContent)(n).catch().then(function() { n.classList.remove("is-loading") })) }) }), define("github/team-hierarchy", ["./query-selector", "./throttled-input", "./fetch", "invariant", "selector-observer", "delegated-events", "./form"], function(e, t, n, r, a, o) {
        function s(e) { var t = !0,
                n = !1,
                r = void 0; try { for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { var i = a.value,
                        u = String(i.getAttribute("data-team-slug"));
                    s(document.querySelectorAll('.js-child-team[data-parent-team-slug="' + u + '"]')), i.classList.remove("is-open"), i.classList.add("d-none") } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } }

        function i(t) { var r, a, o, s, i; return regeneratorRuntime.async(function(l) { for (;;) switch (l.prev = l.next) {
                    case 0:
                        return r = t.getAttribute("data-contents-url"), (0, u.default)(r, "github/team-hierarchy.js:87"), a = new URL(r, window.location.origin), (o = new URLSearchParams(a.search.slice(1))).append("query", t.value.trim()), a.search = o.toString(), s = (0, e.query)(document, ".js-select-team-results"), l.next = 9, regeneratorRuntime.awrap((0, n.fetchSafeDocumentFragment)(document, a));
                    case 9:
                        i = l.sent, s.innerHTML = "", s.append(i);
                    case 12:
                    case "end":
                        return l.stop() } }, null, this) } var u = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            l = !1;
        (0, o.on)("click", ".js-open-child-team", function(t) { if (!l) { l = !0; var r = t.currentTarget.getAttribute("data-parent-team-slug"); if (r) { var a = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + r + '"]'),
                        o = (0, e.closest)(t.currentTarget, ".js-team-row"); if (o.classList.contains("is-open")) t.currentTarget.setAttribute("aria-expanded", "false"),
                        function(e, t) { s(t), e.classList.remove("is-open"), l = !1 }(o, a);
                    else { t.currentTarget.setAttribute("aria-expanded", "true"); var i = t.currentTarget.getAttribute("data-child-team-url");
                        (0, u.default)(i, "github/team-hierarchy.js:29"),
                        function(e, t, r) { var a, o, s, i, u, c, d;
                            regeneratorRuntime.async(function(f) { for (;;) switch (f.prev = f.next) {
                                    case 0:
                                        if (!t.length) { f.next = 24; break } for (a = !0, o = !1, s = void 0, f.prev = 4, i = t[Symbol.iterator](); !(a = (u = i.next()).done); a = !0)(c = u.value).classList.remove("d-none");
                                        f.next = 12; break;
                                    case 8:
                                        f.prev = 8, f.t0 = f.catch(4), o = !0, s = f.t0;
                                    case 12:
                                        f.prev = 12, f.prev = 13, !a && i.return && i.return();
                                    case 15:
                                        if (f.prev = 15, !o) { f.next = 18; break } throw s;
                                    case 18:
                                        return f.finish(15);
                                    case 19:
                                        return f.finish(12);
                                    case 20:
                                        e.classList.add("is-open"), l = !1, f.next = 30; break;
                                    case 24:
                                        return f.next = 26, regeneratorRuntime.awrap((0, n.fetchSafeDocumentFragment)(document, r));
                                    case 26:
                                        d = f.sent, e.after(d), e.classList.add("is-open"), l = !1;
                                    case 30:
                                    case "end":
                                        return f.stop() } }, null, this, [
                                [4, 8, 12, 20],
                                [13, , 15, 19]
                            ]) }(o, a, i) } } } }), (0, o.on)("click", ".js-show-more-child-teams", function(t) { var r, a, o, s, i; return regeneratorRuntime.async(function(c) { for (;;) switch (c.prev = c.next) {
                    case 0:
                        if (!l) { c.next = 2; break } return c.abrupt("return");
                    case 2:
                        return l = !0, r = t.currentTarget, a = (0, e.closest)(r, ".js-team-row"), o = r.getAttribute("data-child-team-url"), (0, u.default)(o, "github/team-hierarchy.js:74"), s = a.parentNode, c.next = 10, regeneratorRuntime.awrap((0, n.fetchSafeDocumentFragment)(document, o));
                    case 10:
                        i = c.sent, a.before(i), s && s.removeChild(a), l = !1;
                    case 14:
                    case "end":
                        return c.stop() } }, null, this) }), (0, a.observe)(".js-selected-team-field", function(e) {
            (0, t.addThrottledInputEventListener)(e, i) }), (0, o.on)("menu:activated", ".js-select-team-menu", function(e) { var t = e.target.querySelector(".js-selected-team-field");
            t && t.focus() }), (0, o.on)("selectmenu:selected", ".js-select-team", function(t) { var n = t.currentTarget,
                r = n.getAttribute("data-selected-team-id") || "",
                a = (0, e.query)(document, "#selected-team-id", HTMLInputElement),
                o = (0, e.query)(n, ".js-selected-team-name").innerHTML,
                s = (0, e.query)(document, "#selected-team-name", HTMLInputElement);
            r !== a.value && (a.value = r, s.value = o) }), (0, o.on)("selectmenu:selected", ".js-clear-team-selection", function() { var t = (0, e.query)(document, ".js-select-button");
            t.textContent = t.getAttribute("data-placeholder") || "Select team" }) }), define("github/timeline/progressive", ["../details", "../fetch", "invariant", "selector-observer", "../query-selector", "../document-ready", "../sticky-scroll-into-view"], function(e, t, n, r, a, o, s) {
        function i(t) {! function(t) { var n = t.closest(".js-details-container"); if (!n) return;
                (0, l.default)(n instanceof HTMLElement, "github/timeline/progressive.js:78"), (0, e.isDetailsTargetExpanded)(n) || (0, e.toggleDetailsTarget)(n) }(t),
            function(e) { e.classList.add("timeline-item-highlight") }(t), (0, s.scrollIntoView)(t) }

        function u() { return window.location.hash.slice(1) } var l = function(e) { return e && e.__esModule ? e : { default: e } }(n);! function() { var e, n;
            regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, regeneratorRuntime.awrap(o.ready);
                    case 2:
                        if (e = u()) { r.next = 5; break } return r.abrupt("return");
                    case 5:
                        (n = document.getElementById(e)) || function(e) { var n, r, o, s, u, l, c, d, f;
                            regeneratorRuntime.async(function(m) { for (;;) switch (m.prev = m.next) {
                                    case 0:
                                        if (n = document.getElementById("js-timeline-progressive-loader")) { m.next = 3; break } return m.abrupt("return");
                                    case 3:
                                        if (r = n.getAttribute("data-timeline-item-src")) { m.next = 6; break } return m.abrupt("return");
                                    case 6:
                                        return o = new URL(r, window.location.origin), (s = new URLSearchParams(o.search.slice(1))).append("anchor", e), o.search = s.toString(), m.next = 12, regeneratorRuntime.awrap((0, t.fetchSafeDocumentFragment)(document, o));
                                    case 12:
                                        if (u = m.sent, l = u.querySelector(".js-timeline-item")) { m.next = 16; break } return m.abrupt("return");
                                    case 16:
                                        if (c = l.getAttribute("data-gid")) { m.next = 19; break } return m.abrupt("return");
                                    case 19:
                                        (d = document.querySelector(".js-timeline-item[data-gid='" + c + "']")) ? (d.replaceWith(l), (f = document.getElementById(e)) && i(f)) : (0, a.query)(document, "#progressive-timeline-item-container").replaceWith(u);
                                    case 21:
                                    case "end":
                                        return m.stop() } }, null, this) }(e);
                    case 7:
                    case "end":
                        return r.stop() } }, null, void 0) }(), (0, r.observe)(".js-timeline-progressive-focus-container", function(e) { var t = u(); if (t) { var n = document.getElementById(t);
                n && e.contains(n) && i(n) } }) }), define("github/simulated-performance-timing", ["exports", "./session-storage"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.getSimulatedNavigationStart = function() { var e = (0, t.getItem)(n); if (e) return parseInt(e, 10) }; var n = "navigationStart";
        window.performance || window.performance.timing || window.addEventListener("pagehide", function() {
            (0, t.setItem)(n, Date.now().toString()) }) }), define("github/timing-stats", ["./timers", "./simulated-performance-timing", "./document-ready", "./stats"], function(e, t, n, r) {
        function a() { var e = {};
            e.crossBrowserLoadEvent = Date.now(); var n = window.performance && window.performance.timing; if (n)
                for (var r in n) { var a = n[r]; "number" == typeof a && (e[r] = a) } else { var o = (0, t.getSimulatedNavigationStart)();
                    null != o && (e.simulatedNavigationStart = o) }
            var s = function() { if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) { var e = window.performance.getEntriesByType("paint"); if (e.length) { var t = e.find(function(e) { return "first-paint" === e.name }); if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6) } } }(); return null != s && (e.chromeFirstPaintTime = s), e }

        function o() { var e = [],
                t = window.performance; if (t) { var n = !0,
                    r = !1,
                    a = void 0; try { for (var o, s = t.getEntriesByType("resource")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) { var i = o.value,
                            u = {};
                        e.push(u); for (var l in i) { var c = i[l]; "number" != typeof c && "string" != typeof c || (u[l] = c) } } } catch (e) { r = !0, a = e } finally { try {!n && s.return && s.return() } finally { if (r) throw a } } } return e }

        function s() { var e = [],
                t = window.performance; if (t) { var n = !0,
                    r = !1,
                    o = void 0; try { for (var s, i = t.getEntriesByType("navigation")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) { var u = s.value,
                            l = {};
                        e.push(l); for (var c in u) { var d = u[c]; "number" != typeof d && "string" != typeof d || (l[c] = d) } } } catch (e) { r = !0, o = e } finally { try {!n && i.return && i.return() } finally { if (r) throw o } } } var f = a(); return f && 0 === e.length && e.push({ name: location.href, entryType: "navigation", startTime: 0, duration: f.loadEventEnd - f.navigationStart, initiatorType: "navigation", nextHopProtocol: "http/1.1", type: "navigate", redirectStart: f.redirectStart, redirectEnd: f.redirectEnd, fetchStart: f.fetchStart, domainLookupStart: f.domainLookupStart, domainLookupEnd: f.domainLookupEnd, connectStart: f.connectStart, connectEnd: f.connectEnd, secureConnectionStart: f.secureConnectionStart, requestStart: f.requestStart, responseStart: f.responseStart, responseEnd: f.responseEnd, unloadEventStart: f.unloadEventStart, unloadEventEnd: f.unloadEventEnd, domInteractive: f.domInteractive, domContentLoadedEventStart: f.domContentLoadedEventStart, domContentLoadedEventEnd: f.domContentLoadedEventEnd, domComplete: f.domComplete, loadEventStart: f.loadEventStart, loadEventEnd: f.loadEventEnd }), e } var i = function(e) { return e && e.__esModule ? e : { default: e } }(r);! function() { var t, r;
            regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2, regeneratorRuntime.awrap(n.loaded);
                    case 2:
                        return a.next = 4, regeneratorRuntime.awrap((0, e.delay)(0));
                    case 4:
                        (t = o()).length && (0, i.default)({ resourceTimings: t }), (r = s()).length && (0, i.default)({ navigationTimings: r });
                    case 8:
                    case "end":
                        return a.stop() } }, null, this) }() }), define("github/toggler", ["./jquery", "delegated-events"], function(e, t) { var n = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("click", ".js-toggler-container .js-toggler-target", function(e) { if (1 === e.which) { this.closest(".js-toggler-container").classList.toggle("on") } }), (0, n.default)(document).on("ajaxSend", ".js-toggler-container", function() { this.classList.remove("success", "error"), this.classList.add("loading") }), (0, n.default)(document).on("ajaxComplete", ".js-toggler-container", function() { this.classList.remove("loading") }), (0, n.default)(document).on("ajaxSuccess", ".js-toggler-container", function() { this.classList.add("success") }), (0, n.default)(document).on("ajaxError", ".js-toggler-container", function() { this.classList.add("error") }) }), define("github/topics", ["./query-selector", "./typecast", "./fetch", "invariant", "delegated-events", "./remote-form", "./form", "./details"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(t) { var n = (0, e.closest)(t, ".js-topic-save-notice-container"),
                r = (0, e.query)(n, ".js-repo-topics-save-notice");
            r.classList.remove("d-none"), r.classList.add("d-inline-block", "anim-fade-in"), setTimeout(function() { r.classList.remove("d-inline-block"), r.classList.add("d-none") }, 1900) }

        function c(t) { var n = (0, e.query)(t, ".js-topic-suggestions-box");
            n.querySelector(".js-topic-suggestion") || n.remove() }

        function d(t) { var n = (0, e.query)(document, ".js-repo-meta-container"),
                r = (0, e.query)(document, "#topics-list-container"),
                a = (0, e.query)(n, ".js-repo-meta-edit");
            (0, e.query)(n, ".js-edit-repo-meta-button").classList.toggle("d-none", t), r.classList.toggle("d-none", t), a.classList.toggle("d-none", t) }

        function f() { var t, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return d(!1), t = (0, e.query)(document, "#topics-list-container"), r = t.getAttribute("data-url"), (0, g.default)(r, "`data-url` must exist -- github/topics.js:55"), o.next = 6, regeneratorRuntime.awrap((0, n.fetchSafeDocumentFragment)(document, r));
                    case 6:
                        a = o.sent, t.innerHTML = "", t.appendChild(a);
                    case 9:
                    case "end":
                        return o.stop() } }, null, this) }

        function m(e) { var t, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        if (t = e.querySelector(".js-topic-suggestions-container")) { o.next = 3; break } return o.abrupt("return");
                    case 3:
                        return r = t.getAttribute("data-url"), (0, g.default)(r, "`data-url` must exist -- github/topics.js:69"), o.next = 7, regeneratorRuntime.awrap((0, n.fetchSafeDocumentFragment)(document, r));
                    case 7:
                        a = o.sent, t.innerHTML = "", t.appendChild(a);
                    case 10:
                    case "end":
                        return o.stop() } }, null, this) } var v = u(t),
            g = u(r);
        (0, o.remoteForm)(".js-accept-topic-form", function(t, n) { var r, a, o, s, i, u; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return d.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        r = (0, e.closest)(t, ".js-topic-form-area"), a = (0, e.closest)(t, ".js-topic-suggestion"), o = (0, e.query)(r, ".js-template"), s = (0, e.query)(r, ".js-tag-input-selected-tags"), i = o.cloneNode(!0), u = (0, e.query)(a, 'input[name="input[name]"]', HTMLInputElement).value, (0, e.query)(i, "input", HTMLInputElement).value = u, (0, e.query)(i, ".js-placeholder-tag-name").replaceWith(u), i.classList.remove("d-none", "js-template"), s.appendChild(i), a.remove(), m(r), c(r), l(t);
                    case 16:
                    case "end":
                        return d.stop() } }, null, this) }), (0, a.on)("click", ".js-repo-topics-form-done", function(e) {
            (0, g.default)(e.target instanceof HTMLElement, "github/topics.js:103"), (0, i.toggleDetailsTarget)(e.target), f() }), (0, o.remoteForm)(".js-decline-topic-form", function(t, n) { var r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        return o.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        l(t), r = (0, e.closest)(t, ".js-topic-form-area"), (a = (0, e.closest)(t, ".js-topic-suggestion")).remove(), m(r), c(r);
                    case 8:
                    case "end":
                        return o.stop() } }, null, this) }), (0, o.remoteForm)(".js-repo-topics-edit-form", function(t, n) { var r, a, o, s, i, u, c, d, f, v, g, p, h, y, b, j, L, w, x, k, E, q; return regeneratorRuntime.async(function(S) { for (;;) switch (S.prev = S.next) {
                    case 0:
                        for ((r = (0, e.closest)(t, ".js-topic-form-area")).classList.remove("errored"), (0, e.query)(r, ".js-topic-error").textContent = "", a = !0, o = !1, s = void 0, S.prev = 6, i = r.querySelectorAll(".js-tag-input-tag.invalid-topic")[Symbol.iterator](); !(a = (u = i.next()).done); a = !0)(c = u.value).classList.remove("invalid-topic");
                        S.next = 14; break;
                    case 10:
                        S.prev = 10, S.t0 = S.catch(6), o = !0, s = S.t0;
                    case 14:
                        S.prev = 14, S.prev = 15, !a && i.return && i.return();
                    case 17:
                        if (S.prev = 17, !o) { S.next = 20; break } throw s;
                    case 20:
                        return S.finish(17);
                    case 21:
                        return S.finish(14);
                    case 22:
                        return S.prev = 22, S.next = 25, regeneratorRuntime.awrap(n.json());
                    case 25:
                        l(t), m(r), S.next = 78; break;
                    case 29:
                        if (S.prev = 29, S.t1 = S.catch(22), (d = S.t1.response.json).message && (r.classList.add("errored"), (0, e.query)(r, ".js-topic-error").textContent = d.message), !d.invalidTopics) { S.next = 78; break } f = t.querySelectorAll(".js-topic-input"), v = !0, g = !1, p = void 0, S.prev = 38, h = d.invalidTopics[Symbol.iterator]();
                    case 40:
                        if (v = (y = h.next()).done) { S.next = 64; break } for (b = y.value, j = !0, L = !1, w = void 0, S.prev = 45, x = f[Symbol.iterator](); !(j = (k = x.next()).done); j = !0)(E = k.value).value === b && (q = (0, e.closest)(E, ".js-tag-input-tag")).classList.add("invalid-topic");
                        S.next = 53; break;
                    case 49:
                        S.prev = 49, S.t2 = S.catch(45), L = !0, w = S.t2;
                    case 53:
                        S.prev = 53, S.prev = 54, !j && x.return && x.return();
                    case 56:
                        if (S.prev = 56, !L) { S.next = 59; break } throw w;
                    case 59:
                        return S.finish(56);
                    case 60:
                        return S.finish(53);
                    case 61:
                        v = !0, S.next = 40; break;
                    case 64:
                        S.next = 70; break;
                    case 66:
                        S.prev = 66, S.t3 = S.catch(38), g = !0, p = S.t3;
                    case 70:
                        S.prev = 70, S.prev = 71, !v && h.return && h.return();
                    case 73:
                        if (S.prev = 73, !g) { S.next = 76; break } throw p;
                    case 76:
                        return S.finish(73);
                    case 77:
                        return S.finish(70);
                    case 78:
                    case "end":
                        return S.stop() } }, null, this, [
                [6, 10, 14, 22],
                [15, , 17, 21],
                [22, 29],
                [38, 66, 70, 78],
                [45, 49, 53, 61],
                [54, , 56, 60],
                [71, , 73, 77]
            ]) }), (0, a.on)("tags:changed", ".js-repo-topics-edit-form", function(e) {
            (0, s.submit)((0, v.default)(e.target, HTMLFormElement)) }), (0, a.on)("click", ".js-repo-topics-form-toggle", function(t) { var n = (0, e.closest)(t.target, ".js-repo-meta-container"),
                r = n.querySelector(".js-repo-topics-form-fragment"); if (r) { r.classList.remove("d-none"); var a = r.getAttribute("data-url");
                (0, g.default)(a, "`data-url` must exist -- github/topics.js:173"), r.setAttribute("src", a) }(0, e.query)(n, ".js-repository-topics-container").classList.contains("open") ? d(!0) : f() }), (0, a.on)("click", ".js-edit-repo-meta-toggle", function(t) { var n = (0, e.closest)(t.target, ".js-repo-meta-container"),
                r = (0, e.query)(n, ".js-repo-meta-edit").classList.contains("open"),
                a = n.querySelector(".js-repository-topics-container");
            a && a.classList.toggle("d-none", r) }), (0, a.on)("click", ".js-reveal-hidden-topics", function(e) { var t = e.target,
                n = (0, v.default)(t.closest(".js-hidden-topics-container"), HTMLElement).querySelector(".js-hidden-topics");
            n && (n.classList.remove("d-none"), t.remove()) }) }), define("github/touch-events-observer", ["selector-observer"], function(e) {
        function t() {}(0, e.observe)(".js-touch-events", { add: function(e) { e.addEventListener("click", t) }, remove: function(e) { e.removeEventListener("click", t) } }) }), define("github/tz-cookie", ["./timezone"], function(e) { var t = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        requestIdleCallback(function() { var e = (0, t.default)(); if (e) { var n = "https:" === location.protocol ? "secure" : "";
                document.cookie = "tz=" + encodeURIComponent(e) + "; path=/; " + n } }) }), define.register("u2f-api-polyfill"),
    function() { var e = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0; if (!("u2f" in window) && e) { var t, n = window.u2f = {};
            n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", n.MessageTypes = { U2F_REGISTER_REQUEST: "u2f_register_request", U2F_REGISTER_RESPONSE: "u2f_register_response", U2F_SIGN_REQUEST: "u2f_sign_request", U2F_SIGN_RESPONSE: "u2f_sign_response", U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request", U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response" }, n.ErrorCodes = { OK: 0, OTHER_ERROR: 1, BAD_REQUEST: 2, CONFIGURATION_UNSUPPORTED: 3, DEVICE_INELIGIBLE: 4, TIMEOUT: 5 }, n.U2fRequest, n.U2fResponse, n.Error, n.Transport, n.Transports, n.SignRequest, n.SignResponse, n.RegisterRequest, n.RegisterResponse, n.RegisteredKey, n.GetJsApiVersionResponse, n.getMessagePort = function(e) { if ("undefined" != typeof chrome && chrome.runtime) { var t = { type: n.MessageTypes.U2F_SIGN_REQUEST, signRequests: [] };
                    chrome.runtime.sendMessage(n.EXTENSION_ID, t, function() { chrome.runtime.lastError ? n.getIframePort_(e) : n.getChromeRuntimePort_(e) }) } else n.isAndroidChrome_() ? n.getAuthenticatorPort_(e) : n.isIosChrome_() ? n.getIosPort_(e) : n.getIframePort_(e) }, n.isAndroidChrome_ = function() { var e = navigator.userAgent; return -1 != e.indexOf("Chrome") && -1 != e.indexOf("Android") }, n.isIosChrome_ = function() { return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1 }, n.getChromeRuntimePort_ = function(e) { var t = chrome.runtime.connect(n.EXTENSION_ID, { includeTlsChannelId: !0 });
                setTimeout(function() { e(new n.WrappedChromeRuntimePort_(t)) }, 0) }, n.getAuthenticatorPort_ = function(e) { setTimeout(function() { e(new n.WrappedAuthenticatorPort_) }, 0) }, n.getIosPort_ = function(e) { setTimeout(function() { e(new n.WrappedIosPort_) }, 0) }, n.WrappedChromeRuntimePort_ = function(e) { this.port_ = e }, n.formatSignRequest_ = function(e, r, a, o, s) { if (void 0 === t || t < 1.1) { for (var i = [], u = 0; u < a.length; u++) i[u] = { version: a[u].version, challenge: r, keyHandle: a[u].keyHandle, appId: e }; return { type: n.MessageTypes.U2F_SIGN_REQUEST, signRequests: i, timeoutSeconds: o, requestId: s } } return { type: n.MessageTypes.U2F_SIGN_REQUEST, appId: e, challenge: r, registeredKeys: a, timeoutSeconds: o, requestId: s } }, n.formatRegisterRequest_ = function(e, r, a, o, s) { if (void 0 === t || t < 1.1) { for (u = 0; u < a.length; u++) a[u].appId = e; for (var i = [], u = 0; u < r.length; u++) i[u] = { version: r[u].version, challenge: a[0], keyHandle: r[u].keyHandle, appId: e }; return { type: n.MessageTypes.U2F_REGISTER_REQUEST, signRequests: i, registerRequests: a, timeoutSeconds: o, requestId: s } } return { type: n.MessageTypes.U2F_REGISTER_REQUEST, appId: e, registerRequests: a, registeredKeys: r, timeoutSeconds: o, requestId: s } }, n.WrappedChromeRuntimePort_.prototype.postMessage = function(e) { this.port_.postMessage(e) }, n.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) { var n = e.toLowerCase(); "message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(e) { t({ data: e }) }) : console.error("WrappedChromeRuntimePort only supports onMessage") }, n.WrappedAuthenticatorPort_ = function() { this.requestId_ = -1, this.requestObject_ = null }, n.WrappedAuthenticatorPort_.prototype.postMessage = function(e) { var t = n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
                document.location = t }, n.WrappedAuthenticatorPort_.prototype.getPortType = function() { return "WrappedAuthenticatorPort_" }, n.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) { if ("message" == e.toLowerCase()) { window.addEventListener("message", this.onRequestUpdate_.bind(this, t), !1) } else console.error("WrappedAuthenticatorPort only supports message") }, n.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) { var n = JSON.parse(t.data),
                    r = (n.intentURL, n.errorCode, null);
                n.hasOwnProperty("data") && (r = JSON.parse(n.data)), e({ data: r }) }, n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", n.WrappedIosPort_ = function() {}, n.WrappedIosPort_.prototype.postMessage = function(e) { var t = JSON.stringify(e),
                    n = "u2f://auth?" + encodeURI(t);
                location.replace(n) }, n.WrappedIosPort_.prototype.getPortType = function() { return "WrappedIosPort_" }, n.WrappedIosPort_.prototype.addEventListener = function(e, t) { "message" !== e.toLowerCase() && console.error("WrappedIosPort only supports message") }, n.getIframePort_ = function(e) { var t = "chrome-extension://" + n.EXTENSION_ID,
                    r = document.createElement("iframe");
                r.src = t + "/u2f-comms.html", r.setAttribute("style", "display:none"), document.body.appendChild(r); var a = new MessageChannel,
                    o = function(t) { "ready" == t.data ? (a.port1.removeEventListener("message", o), e(a.port1)) : console.error('First event on iframe port was not "ready"') };
                a.port1.addEventListener("message", o), a.port1.start(), r.addEventListener("load", function() { r.contentWindow.postMessage("init", t, [a.port2]) }) }, n.EXTENSION_TIMEOUT_SEC = 30, n.port_ = null, n.waitingForPort_ = [], n.reqCounter_ = 0, n.callbackMap_ = {}, n.getPortSingleton_ = function(e) { n.port_ ? e(n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort(function(e) { for (n.port_ = e, n.port_.addEventListener("message", n.responseHandler_); n.waitingForPort_.length;) n.waitingForPort_.shift()(n.port_) }), n.waitingForPort_.push(e)) }, n.responseHandler_ = function(e) { var t = e.data,
                    r = t.requestId; if (r && n.callbackMap_[r]) { var a = n.callbackMap_[r];
                    delete n.callbackMap_[r], a(t.responseData) } else console.error("Unknown or missing requestId in response.") }, n.sign = function(e, r, a, o, s) { void 0 === t ? n.getApiVersion(function(i) { t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), n.sendSignRequest(e, r, a, o, s) }) : n.sendSignRequest(e, r, a, o, s) }, n.sendSignRequest = function(e, t, r, a, o) { n.getPortSingleton_(function(s) { var i = ++n.reqCounter_;
                    n.callbackMap_[i] = a; var u = void 0 !== o ? o : n.EXTENSION_TIMEOUT_SEC,
                        l = n.formatSignRequest_(e, t, r, u, i);
                    s.postMessage(l) }) }, n.register = function(e, r, a, o, s) { void 0 === t ? n.getApiVersion(function(i) { t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), n.sendRegisterRequest(e, r, a, o, s) }) : n.sendRegisterRequest(e, r, a, o, s) }, n.sendRegisterRequest = function(e, t, r, a, o) { n.getPortSingleton_(function(s) { var i = ++n.reqCounter_;
                    n.callbackMap_[i] = a; var u = void 0 !== o ? o : n.EXTENSION_TIMEOUT_SEC,
                        l = n.formatRegisterRequest_(e, r, t, u, i);
                    s.postMessage(l) }) }, n.getApiVersion = function(e, t) { n.getPortSingleton_(function(r) { if (r.getPortType) { var a; switch (r.getPortType()) {
                            case "WrappedIosPort_":
                            case "WrappedAuthenticatorPort_":
                                a = 1.1; break;
                            default:
                                a = 0 } e({ js_api_version: a }) } else { var o = ++n.reqCounter_;
                        n.callbackMap_[o] = e; var s = { type: n.MessageTypes.U2F_GET_API_VERSION_REQUEST, timeoutSeconds: void 0 !== t ? t : n.EXTENSION_TIMEOUT_SEC, requestId: o };
                        r.postMessage(s) } }) } } }(), define.registerEnd(), define("github/u2f", ["exports", "./metadata", "u2f-api-polyfill"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.u2fEnabledBrowser = function() { return !!window.u2f || "true" === (0, t.getMetadataByName)(document, "u2f-support") }, e.u2fSign = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new Promise(function(e, n) { var r;
                (r = window.u2f).sign.apply(r, t.concat([function(t) { if (null != t.errorCode && 0 !== t.errorCode) { var r = new Error("Signing request failed");
                        r.code = t.errorCode, n(r) } else e(t) }])) }) }, e.u2fRegister = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new Promise(function(e, n) { var r;
                (r = window.u2f).register.apply(r, t.concat([function(t) { if (null != t.errorCode && 0 !== t.errorCode) { var r = new Error("Device registration failed");
                        r.code = t.errorCode, n(r) } else e(t) }])) }) } }), define("github/u2f-auth-form", ["exports", "delegated-events", "./query-selector", "./u2f"], function(e, t, n, r) { Object.defineProperty(e, "__esModule", { value: !0 }), e.waitForDevice = function() { var e = (0, n.query)(document, ".js-u2f-auth-form", HTMLFormElement),
                a = (0, n.query)(e, ".js-u2f-auth-response", HTMLInputElement),
                o = e.getAttribute("data-app-id"),
                s = e.getAttribute("data-challenge"),
                i = e.getAttribute("data-sign-requests"); if (null != i) { var u = JSON.parse(i);
                Array.from(document.querySelectorAll(".js-u2f-error")).forEach(function(e) { return e.classList.add("d-none") }); var l = document.querySelector(".js-u2f-login-waiting");
                null != l && l.classList.remove("d-none"), (0, r.u2fSign)(o, s, u).then(function(n) { a.value = JSON.stringify(n), (0, t.fire)(e, "submit") && e.submit() }, function(e) { var t = ".js-u2f-auth-error"; switch (e.code) {
                        case 4:
                            t = ".js-u2f-auth-not-registered-error"; break;
                        case 5:
                            t = ".js-u2f-auth-timeout" } var n = document.querySelector(t);
                    null != n && n.classList.remove("d-none"), null != l && l.classList.add("d-none") }) } } }), define("github/u2f-login", ["selector-observer", "delegated-events", "./u2f", "./u2f-auth-form"], function(e, t, n, r) {
        (0, t.on)("click", ".js-u2f-auth-retry", function() {
            (0, r.waitForDevice)() }), (0, e.observe)(".js-u2f-auth-form-body", function(e) { e.classList.toggle("unavailable", !(0, n.u2fEnabledBrowser)()), (0, n.u2fEnabledBrowser)() && (0, r.waitForDevice)() }) }), define("github/u2f-settings", ["./u2f", "./jquery", "./typecast", "./fetch", "selector-observer", "delegated-events", "./query-selector", "./sudo"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(e, t, n) { if (null == n) { var r = e.getAttribute(t); return null == r ? null : JSON.parse(r) } e.setAttribute(t, JSON.stringify(n)) }

        function c(e) { return l((0, s.query)(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-sign-requests", e) }

        function d(e) { return l((0, s.query)(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-register-requests", e) }

        function f(e) { e.register_requests && d(e.register_requests), e.sign_requests && c(e.sign_requests) }

        function m(e, t) { var n = (0, s.query)(document, ".js-new-u2f-registration");
            n.classList.add("is-showing-error"), n.classList.remove("is-sending"), Array.from(n.querySelectorAll(".js-u2f-error")).forEach(function(e) { return e.classList.add("d-none") }); var r = (0, s.query)(n, e);
            null != t && (r.textContent = t), r.classList.remove("d-none") }

        function v(e) {
            (0, y.default)("high").then(function() { var t = (0, s.query)(document, ".js-add-u2f-registration-form", HTMLFormElement);
                (0, h.default)(t.elements.namedItem("response"), HTMLInputElement).value = JSON.stringify(e), (0, r.fetchJSON)(t.action, { method: t.method, body: new FormData(t) }).then(function(e) { f(e), (0, s.query)(document, ".js-new-u2f-registration").classList.remove("is-sending", "is-active"), (0, s.query)(document, ".js-u2f-registration-nickname-field", HTMLInputElement).value = "",
                        function(e) { var t = document.createElement("div");
                            t.innerHTML = e; var n = t.firstChild;
                            null != n && (0, s.query)(document, ".js-u2f-registrations").appendChild(n) }(e.registration) }).catch(function(e) { e.response ? e.response.json().then(function(e) { f(e), m(".js-u2f-server-error", e.error) }) : m(".js-u2f-network-error") }) }) }

        function g() { var t = (0, s.query)(document, ".js-new-u2f-registration");
            t.classList.add("is-sending"), t.classList.remove("is-showing-error"); var n = (0, s.query)(document, ".js-add-u2f-registration-form").getAttribute("data-app-id"); if (null == n) throw new Error("invalid appId");
            (0, e.u2fRegister)(n, d(), c()).then(v).catch(function(e) { var t = ".js-u2f-other-error"; switch (e.code) {
                    case 4:
                        t = ".js-u2f-registered-error"; break;
                    case 5:
                        t = ".js-u2f-timeout-error" } m(t) }) } var p = u(t),
            h = u(n),
            y = u(i);
        (0, p.default)(document).on("ajaxSend", ".js-u2f-registration-delete", function() { this.closest(".js-u2f-registration").classList.add("is-sending") }), (0, p.default)(document).on("ajaxSuccess", ".js-u2f-registration-delete", function(e, t) { f(t.responseJSON), this.closest(".js-u2f-registration").remove() }), (0, o.on)("click", ".js-add-u2f-registration-link", function() { var e = (0, s.query)(document, ".js-new-u2f-registration");
            e.classList.add("is-active"), e.classList.remove("is-showing-error");
            (0, s.query)(document, ".js-u2f-registration-nickname-field", HTMLInputElement).focus() }), (0, o.on)("click", ".js-u2f-register-retry", function() { g() }), (0, o.on)("submit", ".js-add-u2f-registration-form", function(e) { e.preventDefault(), g() }), (0, a.observe)(".js-u2f-box", function(t) { t.classList.toggle("available", (0, e.u2fEnabledBrowser)()) }) }), define("github/updatable-content-observer", ["invariant", "delegated-events", "./updatable-content"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("socket:message", ".js-updatable-content", function(e) {
            (0, r.default)(e instanceof CustomEvent, "github/updatable-content-observer.js:18"); var t = e.detail.data; if (this === e.target) { var a = t && t.wait;
                null == a ? (0, n.updateContent)(e.target) : setTimeout(function() {
                    (0, r.default)(e.target instanceof HTMLElement, "github/updatable-content-observer.js:28"), (0, n.updateContent)(e.target) }, a) } }) }), define("github/upload/avatar", ["../facebox", "../fetch", "invariant", "delegated-events"], function(e, t, n, r) {
        function a(e) { return e && e.__esModule ? e : { default: e } } var o = a(e),
            s = a(n);
        (0, r.on)("upload:setup", ".js-upload-avatar-image", function(e) {
            (0, s.default)(e instanceof CustomEvent, "github/upload/avatar.js:9"); var t = e.detail.policyRequest,
                n = e.currentTarget.getAttribute("data-alambic-organization"),
                r = e.currentTarget.getAttribute("data-alambic-owner-type"),
                a = e.currentTarget.getAttribute("data-alambic-owner-id");
            n && t.body.append("organization_id", n), r && t.body.append("owner_type", r), a && t.body.append("owner_id", a) }), (0, r.on)("upload:complete", ".js-upload-avatar-image", function(e) {
            (0, s.default)(e instanceof CustomEvent, "github/upload/avatar.js:26"); var n = "/settings/avatars/" + e.detail.result.id;
            (0, o.default)(function() { return regeneratorRuntime.async(function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = o.default, e.next = 3, regeneratorRuntime.awrap((0, t.fetchText)(n));
                        case 3:
                            e.t1 = e.sent, (0, e.t0)(e.t1);
                        case 5:
                        case "end":
                            return e.stop() } }, null, this) }) }) }), define("github/png-scanner", ["exports", "invariant"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(e) { return e && e.__esModule ? e : { default: e } }(t),
            r = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = function() {
                function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.dataview = new DataView(t), this.pos = 0 } return r(e, null, [{ key: "fromFile", value: function(t) { return new Promise(function(r, a) { var o = new FileReader;
                            o.onload = function() {
                                (0, n.default)(o.result instanceof ArrayBuffer, "github/png-scanner.js:38"), r(new e(o.result)) }, o.onerror = function() { a(o.error) }, o.readAsArrayBuffer(t) }) } }]), r(e, [{ key: "advance", value: function(e) { this.pos += e } }, { key: "readInt", value: function(e) { var t = this,
                            n = function() { switch (e) {
                                    case 1:
                                        return t.dataview.getUint8(t.pos);
                                    case 2:
                                        return t.dataview.getUint16(t.pos);
                                    case 4:
                                        return t.dataview.getUint32(t.pos);
                                    default:
                                        throw new Error("bytes parameter must be 1, 2 or 4") } }(); return this.advance(e), n } }, { key: "readChar", value: function() { return this.readInt(1) } }, { key: "readShort", value: function() { return this.readInt(2) } }, { key: "readLong", value: function() { return this.readInt(4) } }, { key: "readString", value: function(e) { for (var t = [], n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar())); return t.join("") } }, { key: "scan", value: function(e) { if (2303741511 !== this.readLong()) throw new Error("invalid PNG"); for (this.advance(4);;) { var t = this.readLong(),
                                n = this.readString(4),
                                r = this.pos + t + 4; if (!1 === e.call(this, n, t) || "IEND" === n) break;
                            this.pos = r } } }]), e }();
        e.default = a }), define("github/image-dimensions", ["exports", "./png-scanner"], function(e, t) { Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        e.default = function(e) { var t, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        if ("image/png" === e.type) { o.next = 2; break } return o.abrupt("return", null);
                    case 2:
                        return t = e.slice(0, 10240, e.type), o.next = 5, regeneratorRuntime.awrap(n.default.fromFile(t));
                    case 5:
                        return r = o.sent, a = { width: 0, height: 0, ppi: 1 }, r.scan(function(e) { switch (e) {
                                case "IHDR":
                                    return a.width = this.readLong(), a.height = this.readLong(), !0;
                                case "pHYs":
                                    var t = this.readLong(),
                                        n = this.readLong(),
                                        r = void 0; return 1 === this.readChar() && (r = .0254), r && (a.ppi = Math.round((t + n) / 2 * r)), !1;
                                case "IDAT":
                                    return !1 } return !0 }), o.abrupt("return", a);
                    case 9:
                    case "end":
                        return o.stop() } }, null, this) } }), define("github/upload/markdown", ["../text", "../image-dimensions", "invariant", "delegated-events", "../query-selector"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(e) { return (u(e) ? "!" : "") + "[Uploading " + e.name + "\u2026]()" }

        function i(e) { return function(e) { return e.toLowerCase().replace(/[^a-z0-9\-_]+/gi, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "") }(e).replace(/\.[^.]+$/, "").replace(/\./g, " ") }

        function u(e) { return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1 }

        function l(e) { var t = e.split(".").pop().toLowerCase(); return ["gif", "png", "jpg", "jpeg"].indexOf(t) > -1 }

        function c(e) { return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || "\xa0" }

        function d(e) { var t = Array.from(e.querySelectorAll("tr")),
                n = function(e) { return Array.from(e.querySelectorAll("td, th")).map(c) }(t.shift()),
                r = n.map(function() { return "--" }); return "\n" + (n.join(" | ") + "\n" + r.join(" | ") + "\n") + t.map(function(e) { return Array.from(e.querySelectorAll("td")).map(c).join(" | ") }).join("\n") + "\n\n" } var f = o(t),
            m = o(n);
        (0, r.on)("upload:setup", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:49"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement);
            n.setCustomValidity("uploading"), (0, e.insertText)(n, s(t.detail.file) + "\n") }), (0, r.on)("upload:complete", ".js-upload-markdown-image", function(t) { var n, r, o, l, c; return regeneratorRuntime.async(function(d) { for (;;) switch (d.prev = d.next) {
                    case 0:
                        return c = function(t) { var r = "[" + n.file.name + "](" + n.policy.asset.href + ")"; if (u(n.file)) { var a = i(n.policy.asset.name),
                                    s = n.policy.asset.href; if (t && 144 === t.ppi) { r = '<img width="' + Math.round(t.width / 2) + '" alt="' + a + '" src="' + s + '">' } else r = "![" + a + "](" + s + ")" } o.setCustomValidity(""), (0, e.replaceText)(o, l, r) }, (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:56"), n = t.detail, r = t.currentTarget, o = (0, a.query)(r, ".js-comment-field", HTMLTextAreaElement), l = s(n.file), d.prev = 6, d.t0 = c, d.next = 10, regeneratorRuntime.awrap((0, f.default)(n.file));
                    case 10:
                        d.t1 = d.sent, (0, d.t0)(d.t1), d.next = 18; break;
                    case 14:
                        d.prev = 14, d.t2 = d.catch(6), c(), setTimeout(function() { throw d.t2 });
                    case 18:
                    case "end":
                        return d.stop() } }, null, this, [
                [6, 14]
            ]) }), (0, r.on)("upload:error", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:91"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                r = s(t.detail.file);
            n.setCustomValidity(""), (0, e.replaceText)(n, r, "") }), (0, r.on)("upload:invalid", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:99"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                r = s(t.detail.file);
            n.setCustomValidity(""), (0, e.replaceText)(n, r, "") }), (0, r.on)("upload:drop:links", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:115"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                r = !0,
                o = !1,
                s = void 0; try { for (var i, u = t.detail.links[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) { var c = i.value,
                        d = l(c) ? "\n![](" + c + ")\n" : c;
                    (0, e.insertText)(n, d) } } catch (e) { o = !0, s = e } finally { try {!r && u.return && u.return() } finally { if (o) throw s } } }), (0, r.on)("upload:drop:text", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:124"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement);
            (0, e.insertText)(n, t.detail.text) }), (0, r.on)("upload:drop:table", ".js-upload-markdown-image", function(t) {
            (0, m.default)(t instanceof CustomEvent, "github/upload/markdown.js:161"); var n = (0, a.query)(t.currentTarget, ".js-comment-field", HTMLTextAreaElement);
            (0, e.insertText)(n, d(t.detail.node)) }) }), define("github/upload/marketplace-listing-screenshot", ["../fetch", "invariant", "delegated-events", "../query-selector"], function(e, t, n, r) { var a = function(e) { return e && e.__esModule ? e : { default: e } }(t);
        (0, n.on)("upload:setup", ".js-upload-marketplace-listing-screenshot", function(e) {
            (0, a.default)(e instanceof CustomEvent, "github/upload/marketplace-listing-screenshot.js:9"); var t = e.detail.policyRequest,
                n = e.currentTarget.getAttribute("data-marketplace-listing-id");
            n && t.body.append("marketplace_listing_id", n) }), (0, n.on)("upload:complete", ".js-upload-marketplace-listing-screenshot", function(t) { var n, o, s; return regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                    case 0:
                        return n = t.currentTarget.getAttribute("data-screenshots-url"), (0, a.default)(n, "`data-screenshots-url` must exist -- github/upload/marketplace-listing-screenshot.js:21"), o = (0, r.query)(document, ".js-marketplace-listing-screenshots-container"), i.next = 5, regeneratorRuntime.awrap((0, e.fetchSafeDocumentFragment)(document, n));
                    case 5:
                        s = i.sent, o.innerHTML = "", o.appendChild(s);
                    case 8:
                    case "end":
                        return i.stop() } }, null, this) }) }), define("github/upload/marketplace-listing-hero-card-background", ["invariant", "delegated-events", "../query-selector"], function(e, t, n) { var r = function(e) { return e && e.__esModule ? e : { default: e } }(e);
        (0, t.on)("upload:setup", ".js-upload-marketplace-listing-hero-card-background", function(e) {
            (0, r.default)(e instanceof CustomEvent, "github/upload/marketplace-listing-hero-card-background.js:8"); var t = e.detail.policyRequest,
                n = e.currentTarget.getAttribute("data-marketplace-listing-id");
            n && t.body.append("marketplace_listing_id", n) }), (0, t.on)("upload:complete", ".js-upload-marketplace-listing-hero-card-background", function(e) {
            (0, r.default)(e instanceof CustomEvent, "github/upload/marketplace-listing-hero-card-background.js:19"); var t = e.detail,
                a = t.policy;
            (0, n.query)(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = a.asset.id || t.result.id; var o = (0, n.query)(document, ".js-hero-listing-container"),
                s = a.asset.href || t.result.href;
            o.style.backgroundImage = "url(" + s + ")" }) }), define("github/upload/release-file", ["../query-selector", "../typecast", "invariant", "delegated-events", "../releases"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } }

        function s(t) { var n = (0, e.closest)(t, "form", HTMLFormElement); return (0, e.query)(n, "#release_id", HTMLInputElement).value }

        function i(t, n) { var r = (0, u.default)(n.body, FormData);
            r.append("release_id", s(t)); var a = (0, e.querySelectorAll)(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement); if (a.length) { var o = a.map(function(e) { return e.value });
                r.append("deletion_candidates", o.join(",")) } } var u = o(t),
            l = o(n);
        (0, r.on)("click", ".js-release-remove-file", function(t) { var n = (0, e.closest)(t.currentTarget, ".js-release-file");
            n.classList.add("delete"), (0, e.query)(n, "input.destroy", HTMLInputElement).value = "true" }), (0, r.on)("click", ".js-release-undo-remove-file", function(t) { var n = (0, e.closest)(t.currentTarget, ".js-release-file");
            n.classList.remove("delete"), (0, e.query)(n, "input.destroy", HTMLInputElement).value = "" }); var c = null;
        (0, r.on)("release:saved", ".js-release-form", function(t) { var n = t.currentTarget;
            c = null; var r = !1,
                a = !0,
                o = !1,
                s = void 0; try { for (var i, u = n.querySelectorAll(".js-releases-field .js-release-file")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var l = i.value;
                    l.classList.contains("delete") ? l.remove() : l.classList.contains("js-template") || (r = !0) } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } var d = (0, e.query)(n, ".js-releases-field");
            d.classList.toggle("not-populated", !r), d.classList.toggle("is-populated", r) }), (0, r.on)("upload:setup", ".js-upload-release-file", function(t) {
            (0, l.default)(t instanceof CustomEvent, "github/upload/release-file.js:60"); var n = t.detail,
                r = n.policyRequest,
                o = n.preprocess,
                u = t.currentTarget; if (s(u)) i(u, r);
            else { if (!c) { var d = (0, e.query)(document, ".js-save-draft", HTMLButtonElement);
                    c = (0, a.saveDraft)(d) } var f = i.bind(null, u, r);
                o.push(c.then(f)) } }), (0, r.on)("upload:start", ".js-upload-release-file", function(t) {
            (0, l.default)(t instanceof CustomEvent, "github/upload/release-file.js:83"); var n = t.detail.policy;
            (0, e.query)(t.currentTarget, ".js-upload-meter").classList.remove("d-none"); var r = n.asset.replaced_asset; if (r) { var a = !0,
                    o = !1,
                    s = void 0; try { for (var i, u = (0, e.querySelectorAll)(document, ".js-releases-field .js-release-file .id", HTMLInputElement)[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) { var c = i.value;
                        Number(c.value) === r && (0, e.closest)(c, ".js-release-file").remove() } } catch (e) { o = !0, s = e } finally { try {!a && u.return && u.return() } finally { if (o) throw s } } } }), (0, r.on)("upload:complete", ".js-upload-release-file", function(t) {
            (0, l.default)(t instanceof CustomEvent, "github/upload/release-file.js:100"); var n = t.detail,
                r = n.policy,
                a = (0, e.query)(document, ".js-releases-field"),
                o = (0, e.query)(a, ".js-template").cloneNode(!0);
            o.classList.remove("template", "js-template"), (0, e.query)(o, "input.id", HTMLInputElement).value = r.asset.id || n.result.id; var s = r.asset.name || r.asset.href.split("/").pop(),
                i = !0,
                u = !1,
                c = void 0; try { for (var d, f = o.querySelectorAll(".filename")[Symbol.iterator](); !(i = (d = f.next()).done); i = !0) { var m = d.value;
                    m instanceof HTMLInputElement ? m.value = s : m.textContent = s } } catch (e) { u = !0, c = e } finally { try {!i && f.return && f.return() } finally { if (u) throw c } } var v = r.asset.size ? "(" + (r.asset.size / 1048576).toFixed(2) + " MB)" : "";
            (0, e.query)(o, ".filesize").textContent = v, a.appendChild(o), a.classList.remove("not-populated"), a.classList.add("is-populated");
            (0, e.query)(t.currentTarget, ".js-upload-meter").classList.add("d-none") }), (0, r.on)("upload:progress", ".js-upload-release-file", function(t) {
            (0, l.default)(t instanceof CustomEvent, "github/upload/release-file.js:133");
            (0, e.query)(t.currentTarget, ".js-upload-meter").style.width = t.detail.percent + "%" }) }), define("github/upload/upload-manifest-file", ["../query-selector", "../fetch", "../typecast", "invariant", "selector-observer", "delegated-events", "../pjax", "../remote-form"], function(e, t, n, r, a, o, s, i) {
        function u(e) { return e && e.__esModule ? e : { default: e } }

        function l(t, n) { var r = (0, e.closest)(t, ".js-upload-manifest-file-container"),
                a = (0, e.query)(r, ".js-upload-progress");
            a.classList.add("active"), t.classList.add("is-progress-bar"); var o = (0, e.query)(a, ".js-upload-meter-text");
            (0, e.query)(o, ".js-upload-meter-range-start").textContent = String(n.batch.uploaded + 1);
            (0, e.query)(o, ".js-upload-meter-range-end").textContent = String(n.batch.size) }

        function c(t) { t.classList.remove("is-progress-bar"); var n = (0, e.closest)(t, ".js-upload-manifest-file-container");
            (0, e.query)(n, ".js-upload-progress").classList.remove("active");
            (0, e.query)(n, ".js-upload-meter-text .js-upload-meter-filename").textContent = "" }

        function d(e) { return e._path ? e._path + "/" + e.name : e.name }

        function f(e) { c(e.currentTarget) } var m = u(n),
            v = u(r),
            g = u(s),
            p = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            h = null,
            y = new WeakMap;
        (0, o.on)("upload:drop:setup", ".js-upload-manifest-file", function(e) {
            (0, v.default)(e instanceof CustomEvent, "github/upload/upload-manifest-file.js:54"); var t = e.detail.files,
                n = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
            t.length > n && (e.preventDefault(), e.currentTarget.classList.add("is-too-many")) }), (0, o.on)("upload:drop:setup", ".js-upload-manifest-tree-view", function(t) {
            (0, v.default)(t instanceof CustomEvent, "github/upload/upload-manifest-file.js:64"), t.preventDefault(); var n = t.detail.upload,
                r = (0, e.query)(document, "#js-repo-pjax-container");
            r.addEventListener("pjax:success", function() { n(r.querySelector(".js-uploadable-container")) }, { once: !0 }); var a = t.currentTarget.getAttribute("data-drop-url");
            (0, v.default)(a, "github/upload/upload-manifest-file.js:80"), (0, g.default)({ url: a, container: r }) }), (0, o.on)("upload:setup", ".js-upload-manifest-file", function(n) { var r, a, o, s, i, u, c, d, f, g, b, j, L; return regeneratorRuntime.async(function(w) { for (;;) switch (w.prev = w.next) {
                    case 0:
                        if (i = function() { a.body.append("upload_manifest_id", y.get(s)) }, (0, v.default)(n instanceof CustomEvent, "github/upload/upload-manifest-file.js:85"), r = n.detail, a = r.policyRequest, o = r.preprocess, s = n.currentTarget, l(s, n.detail), !y.get(s)) { w.next = 8; break } return i(), w.abrupt("return");
                    case 8:
                        if (!h) { w.next = 11; break } return o.push(h.then(i)), w.abrupt("return");
                    case 11:
                        return u = (0, e.closest)(s, ".js-upload-manifest-file-container"), c = u.querySelector(".js-upload-manifest-form"), h = (0, t.fetchJSON)(c.action, { method: c.method, body: new FormData(c) }), d = function() { var e = void 0,
                                t = void 0,
                                n = new Promise(function(n, r) { e = n, t = r }); return (0, v.default)(e, "github/upload/upload-manifest-file.js:139"), (0, v.default)(t, "github/upload/upload-manifest-file.js:140"), [n, e, t] }(), f = p(d, 2), g = f[0], b = f[1], o.push(g.then(i)), w.next = 18, regeneratorRuntime.awrap(h);
                    case 18:
                        j = w.sent, L = (0, e.query)(document, ".js-manifest-commit-form", HTMLFormElement), (0, m.default)(L.elements.namedItem("manifest_id"), HTMLInputElement).value = j.upload_manifest.id, y.set(s, j.upload_manifest.id), h = null, b();
                    case 24:
                    case "end":
                        return w.stop() } }, null, this) }), (0, o.on)("upload:start", ".js-upload-manifest-file", function(t) {
            (0, v.default)(t instanceof CustomEvent, "github/upload/upload-manifest-file.js:153"); var n = t.detail,
                r = (0, e.closest)(t.currentTarget, ".js-upload-manifest-file-container"),
                a = (0, e.query)(r, ".js-upload-progress"),
                o = (0, e.query)(a, ".js-upload-meter-text");
            (0, e.query)(o, ".js-upload-meter-range-start").textContent = n.batch.uploaded + 1;
            (0, e.query)(o, ".js-upload-meter-filename").textContent = d(n.file) }), (0, o.on)("upload:complete", ".js-upload-manifest-file", function(t) {
            (0, v.default)(t instanceof CustomEvent, "github/upload/upload-manifest-file.js:168"); var n = t.detail,
                r = (0, e.query)(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
            (0, e.query)(r, ".name").textContent = d(n.file); var a = n.policy.asset.id || n.result.id,
                o = (0, e.query)(r, ".js-remove-manifest-file-form", HTMLFormElement);
            (0, m.default)(o.elements.namedItem("file_id"), HTMLInputElement).value = a; var s = (0, e.query)(document, ".js-manifest-file-list");
            s.classList.remove("d-none"), t.currentTarget.classList.add("is-file-list");
            (0, e.query)(document, ".js-upload-progress").classList.add("is-file-list");
            (0, e.query)(s, ".js-manifest-file-list-root").appendChild(r), n.batch.isFinished() && c(t.currentTarget) }), (0, o.on)("upload:progress", ".js-upload-manifest-file", function(t) {
            (0, v.default)(t instanceof CustomEvent, "github/upload/upload-manifest-file.js:201"); var n = t.detail,
                r = (0, e.closest)(t.currentTarget, ".js-upload-manifest-file-container");
            (0, e.query)(r, ".js-upload-meter").style.width = n.batch.percent() + "%" }), (0, o.on)("upload:error", ".js-upload-manifest-file", f), (0, o.on)("upload:invalid", ".js-upload-manifest-file", f), (0, i.remoteForm)(".js-remove-manifest-file-form", function(t, n) { var r, a, o, s, i; return regeneratorRuntime.async(function(u) { for (;;) switch (u.prev = u.next) {
                    case 0:
                        return u.next = 2, regeneratorRuntime.awrap(n.html());
                    case 2:
                        r = (0, e.closest)(t, ".js-manifest-file-list-root"), (a = (0, e.closest)(t, ".js-manifest-file-entry")).remove(), r.hasChildNodes() || ((o = (0, e.closest)(r, ".js-manifest-file-list")).classList.add("d-none"), (s = (0, e.query)(document, ".js-upload-manifest-file")).classList.remove("is-file-list"), (i = (0, e.query)(document, ".js-upload-progress")).classList.remove("is-file-list"));
                    case 6:
                    case "end":
                        return u.stop() } }, null, this) }), (0, a.observe)(".js-manifest-ready-check", { initialize: function(n) {! function(n) { var r;
                    regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                            case 0:
                                return r = n.getAttribute("data-redirect-url"), a.prev = 1, a.next = 4, regeneratorRuntime.awrap((0, t.fetchPoll)(n.getAttribute("data-poll-url")));
                            case 4:
                                window.location = r, a.next = 11; break;
                            case 7:
                                a.prev = 7, a.t0 = a.catch(1), (0, e.query)(document, ".js-manifest-ready-check").classList.add("d-none"), (0, e.query)(document, ".js-manifest-ready-check-failed").classList.remove("d-none");
                            case 11:
                            case "end":
                                return a.stop() } }, null, this, [
                        [1, 7]
                    ]) }(n) } }) }), define("github/uploads", ["./typecast", "./query-selector", "./fetch", "delegated-events", "invariant", "selector-observer", "./parse-html", "./upload/avatar", "./upload/markdown", "./upload/marketplace-listing-screenshot", "./upload/marketplace-listing-hero-card-background", "./upload/release-file", "./upload/upload-manifest-file"], function(e, t, n, r, a, o, s) {
        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function l(e) { var n = (0, t.closest)(e, "form", HTMLFormElement); return (0, O.default)(n.elements.namedItem("authenticity_token"), HTMLInputElement).value }

        function c(e, t) { var n;
            (n = e.classList).remove.apply(n, z), e.classList.add(t) }

        function d(e, t) { var a, o, s, i, u, d, m, v, g, p, h, y, b; return regeneratorRuntime.async(function(j) { for (;;) switch (j.prev = j.next) {
                    case 0:
                        a = !0, o = !1, s = void 0, j.prev = 3, i = e.files[Symbol.iterator]();
                    case 5:
                        if (a = (u = i.next()).done) { j.next = 37; break } if (d = u.value, m = function(e, t) { var n = t.getAttribute("data-upload-policy-url");
                                (0, D.default)(n, "github/uploads.js:302"); var r = t.getAttribute("data-upload-repository-id"),
                                    a = t.getAttribute("data-upload-policy-authenticity-token");
                                null == a && (a = l(t)); var o = new FormData;
                                o.append("name", e.name), o.append("size", String(e.size)), o.append("content_type", e.type), o.append("authenticity_token", a), r && o.append("repository_id", r);
                                e._path && o.append("directory", String(e._path)); return { url: n, options: { method: "post", body: o, headers: {} } } }(d, t), v = [], (0, r.fire)(t, "upload:setup", { batch: e, file: d, policyRequest: m.options, preprocess: v })) { j.next = 11; break } return j.abrupt("return");
                    case 11:
                        return j.prev = 11, j.next = 14, regeneratorRuntime.awrap(Promise.all(v));
                    case 14:
                        return j.next = 16, regeneratorRuntime.awrap((0, n.fetchJSON)(m.url, m.options));
                    case 16:
                        g = j.sent, U.upload(function(e, t, a, o) { var s = a.upload_authenticity_token;
                            null == s && (s = l(o)); var i = a.asset_upload_authenticity_token;
                            null == i && (i = l(o)); return { file: t, to: a.upload_url, form: a.form, header: a.header, sameOrigin: a.same_origin, csrf: s, start: function() { c(o, "is-uploading"), (0, r.fire)(o, "upload:start", { batch: e, file: t, policy: a }) }, progress: function(n) { e.progress(t, n), (0, r.fire)(o, "upload:progress", { batch: e, file: t, percent: n }) }, complete: function(s) { if (e.completed(), s && s.href && (a.asset || (a.asset = {}), a.asset.href = s.href), a.asset_upload_url && a.asset_upload_url.length > 0) { var u = new FormData;
                                        u.append("authenticity_token", i), (0, n.fetchJSON)(a.asset_upload_url, { method: "put", body: u }) }(0, r.fire)(o, "upload:complete", { batch: e, file: t, policy: a, result: s }), c(o, "is-default") }, error: function(n) {
                                    (0, r.fire)(o, "upload:error", { batch: e, file: t, policy: a }); var s = f(n);
                                    c(o, s) } } }(e, d, g, t)), j.next = 34; break;
                    case 20:
                        if (j.prev = 20, j.t0 = j.catch(11), (0, r.fire)(t, "upload:invalid", { batch: e, file: d, error: j.t0 }), !j.t0.response) { j.next = 32; break } return j.next = 26, regeneratorRuntime.awrap(j.t0.response.text());
                    case 26:
                        p = j.sent, h = j.t0.response.status, y = f({ status: h, body: p }, d), c(t, y), j.next = 34; break;
                    case 32:
                        b = f({ status: 0, body: "" }), c(t, b);
                    case 34:
                        a = !0, j.next = 5; break;
                    case 37:
                        j.next = 43; break;
                    case 39:
                        j.prev = 39, j.t1 = j.catch(3), o = !0, s = j.t1;
                    case 43:
                        j.prev = 43, j.prev = 44, !a && i.return && i.return();
                    case 46:
                        if (j.prev = 46, !o) { j.next = 49; break } throw s;
                    case 49:
                        return j.finish(46);
                    case 50:
                        return j.finish(43);
                    case 51:
                    case "end":
                        return j.stop() } }, null, this, [
                [3, 39, 43, 51],
                [11, 20],
                [44, , 46, 50]
            ]) }

        function f(e, t) { if (400 === e.status) return "is-bad-file"; if (422 !== e.status) return "is-failed"; var n = JSON.parse(e.body); if (!n || !n.errors) return "is-failed"; var r = !0,
                a = !1,
                o = void 0; try { for (var s, i = n.errors[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) { var u = s.value; switch (u.field) {
                        case "size":
                            var l = t ? t.size : null; return null != l && 0 === parseInt(l) ? "is-empty" : "is-too-big";
                        case "file_count":
                            return "is-too-many";
                        case "width":
                        case "height":
                            return "is-bad-dimensions";
                        case "name":
                            return "already_exists" === u.code ? "is-duplicate-filename" : "is-bad-file";
                        case "content_type":
                            return "is-bad-file";
                        case "uploader_id":
                            return "is-bad-permissions";
                        case "repository_id":
                            return "is-repository-required";
                        case "format":
                            return "is-bad-format" } } } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return "is-failed" }

        function m(e) { return Array.from(e.types).indexOf("Files") >= 0 }

        function v(e) { return Array.from(e.types).indexOf("text/uri-list") >= 0 }

        function g(e) { return Array.from(e.types).indexOf("text/plain") >= 0 }

        function p(e) { if (-1 !== Array.from(e.types).indexOf("text/html")) { var t = e.getData("text/html"); if (/<table/i.test(t)) { var n = (0, s.parseHTML)(document, t).querySelector("table"); if (n && !n.closest(".js-comment")) return /\b(js|blob|diff)-./.test(n.className) ? null : n } } }

        function h(e) { return e.reduce(function(e, t) { return e.concat(Array.isArray(t) ? h(t) : t) }, []) }

        function y(e) { return Array.from(e).filter(function(e) { return ! function(e) { return e.name.startsWith(".") }(e) }) }

        function b(e, t) { var n, r; return regeneratorRuntime.async(function(a) { for (;;) switch (a.prev = a.next) {
                    case 0:
                        if (!t.getFilesAndDirectories) { a.next = 8; break } return a.next = 3, regeneratorRuntime.awrap(t.getFilesAndDirectories());
                    case 3:
                        return n = a.sent, r = y(n).map(function(e) { return b(t.path, e) }), a.abrupt("return", Promise.all(r));
                    case 8:
                        return t._path = e, a.abrupt("return", Promise.resolve(t));
                    case 10:
                    case "end":
                        return a.stop() } }, null, this) }

        function j(e) { return regeneratorRuntime.async(function(t) { for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.t0 = h, t.next = 3, regeneratorRuntime.awrap(b("", e));
                    case 3:
                        return t.t1 = t.sent, t.abrupt("return", (0, t.t0)(t.t1));
                    case 5:
                    case "end":
                        return t.stop() } }, null, this) }

        function L(e) { return new Promise(function(t, n) { e.file(t, n) }) }

        function w(e) { return new Promise(function(t, n) { e.createReader().readEntries(t, n) }) }

        function x(e, t) { var n, r, a; return regeneratorRuntime.async(function(o) { for (;;) switch (o.prev = o.next) {
                    case 0:
                        if (!t.isDirectory) { o.next = 8; break } return o.next = 3, regeneratorRuntime.awrap(w(t));
                    case 3:
                        return n = o.sent, r = y(n).map(function(e) { return x(t.fullPath, e) }), o.abrupt("return", Promise.all(r));
                    case 8:
                        return o.next = 10, regeneratorRuntime.awrap(L(t));
                    case 10:
                        return a = o.sent, a._path = e, o.abrupt("return", a);
                    case 13:
                    case "end":
                        return o.stop() } }, null, this) }

        function k(e) { return e.items && Array.from(e.items).some(function(e) { return e.webkitGetAsEntry && e.webkitGetAsEntry().isDirectory }) }

        function E(e) { var t, n; return regeneratorRuntime.async(function(r) { for (;;) switch (r.prev = r.next) {
                    case 0:
                        return t = Array.from(e.items).map(function(e) { return e.webkitGetAsEntry() }), n = y(t).map(function(e) { return x("", e) }), r.t0 = h, r.next = 5, regeneratorRuntime.awrap(Promise.all(n));
                    case 5:
                        return r.t1 = r.sent, r.abrupt("return", (0, r.t0)(r.t1));
                    case 7:
                    case "end":
                        return r.stop() } }, null, this) }

        function q(e, t) { d(new V(e), t) }

        function S(e) { e.preventDefault() }

        function T(e) { e.preventDefault() }

        function _(e) { if (!K) { var t = (0, O.default)(e.currentTarget, Element);
                W && clearTimeout(W), W = setTimeout(function() { return t.classList.remove("dragover") }, 200); var n = e.dataTransfer;
                n && (n.dropEffect = function(e) { return m(e) ? "copy" : v(e) ? "link" : g(e) ? "copy" : "none" }(n)), t.classList.add("dragover"), e.stopPropagation(), e.preventDefault() } }

        function M(e) { e.dataTransfer && (e.dataTransfer.dropEffect = "none"), (0, O.default)(e.currentTarget, Element).classList.remove("dragover"), e.stopPropagation(), e.preventDefault() }

        function A(e) { if (e.target.classList) {
                (0, O.default)(e.target, Element).classList.contains("js-document-dropzone") && (0, O.default)(e.currentTarget, Element).classList.remove("dragover") } }

        function H(e) { var t = document.body;
            (0, D.default)(t, "github/uploads.js:677"); var n = (0, O.default)(e.currentTarget, Element);
            n.classList.remove("dragover"), t.classList.remove("dragover"); var a = e.dataTransfer;
            (0, D.default)(a, "github/uploads.js:685"); var o = p(a); if (m(a)) ! function(e, t) { var n, a, o, s;
                regeneratorRuntime.async(function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return n = null, n = e.hasAttribute("data-directory-upload") && t.getFilesAndDirectories ? j(t) : e.hasAttribute("data-directory-upload") && k(t) ? E(t) : Promise.resolve(y(Array.from(t.files))), i.next = 4, regeneratorRuntime.awrap(n);
                        case 4:
                            if ((a = i.sent).length) { i.next = 8; break } return c(e, "is-hidden-file"), i.abrupt("return");
                        case 8:
                            o = q.bind(null, a), (s = !(0, r.fire)(e, "upload:drop:setup", { upload: o, files: a })) || q(a, e);
                        case 11:
                        case "end":
                            return i.stop() } }, null, this) }(n, a);
            else if (v(a)) { var s = (a.getData("text/uri-list") || "").split("\r\n");
                s.length && (0, r.fire)(n, "upload:drop:links", { links: s }) } else o ? (0, r.fire)(n, "upload:drop:table", { node: o }) : g(a) && (0, r.fire)(n, "upload:drop:text", { text: a.getData("text/plain") });
            e.stopPropagation(), e.preventDefault() }

        function C(e) { if (e.clipboardData) { var t = p(e.clipboardData); if (t) return (0, r.fire)(e.currentTarget, "upload:drop:table", { node: t }), void e.preventDefault(); if (e.clipboardData.items) { var n = Array.from(e.clipboardData.items).map(function(e) { return [e, function(e) { switch (e) {
                                case "image/gif":
                                    return "image.gif";
                                case "image/png":
                                    return "image.png";
                                case "image/jpeg":
                                    return "image.jpg" } }(e.type)] }).filter(function(e) { return e[1] }).shift(); if (n) { q([N(n, 1)[0].getAsFile()], e.currentTarget), e.preventDefault() } } } }

        function I(e) { e.target.classList.contains("js-manual-file-chooser") && (q(e.target.files, e.currentTarget), e.target.value = "") }

        function R(e) { c(e.currentTarget.classList.contains("js-uploadable-container") ? e.currentTarget : e.currentTarget.querySelector(".js-uploadable-container"), "is-default") }

        function F() { K = !0 }

        function P() { K = !1 } var O = i(e),
            D = i(a),
            N = function() { return function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var n = [],
                            r = !0,
                            a = !1,
                            o = void 0; try { for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { a = !0, o = e } finally { try {!r && i.return && i.return() } finally { if (a) throw o } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            B = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            z = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"],
            U = new(function() {
                function e() { u(this, e), this.uploads = [], this.busy = !1 } return B(e, [{ key: "upload", value: function(e) { this.uploads.push(e), this.process() } }, { key: "process", value: function() { var e = this; if (!this.busy && 0 !== this.uploads.length) { var t = this.uploads.shift();
                            this.busy = !0; var n = new XMLHttpRequest;
                            n.open("POST", t.to, !0); for (var r in t.header) n.setRequestHeader(r, t.header[r]);
                            n.onloadstart = function() { t.start() }, n.onload = function() { 204 === n.status ? t.complete({}) : 201 === n.status ? t.complete(JSON.parse(n.responseText)) : t.error({ status: n.status, body: n.responseText }), e.busy = !1, e.process() }, n.onerror = function() { t.error({ status: 0, body: "" }), e.busy = !1, e.uploads = [] }, n.upload.onprogress = function(e) { if (e.lengthComputable) { var n = Math.round(e.loaded / e.total * 100);
                                    t.progress(n) } }; var a = new FormData;
                            t.sameOrigin && a.append("authenticity_token", t.csrf); for (var o in t.form) a.append(o, t.form[o]);
                            a.append("file", t.file), n.send(a) } } }]), e }()),
            V = function() {
                function e(t) { u(this, e), this.files = Array.from(t), this.percentages = this.files.map(function() { return 0 }), this.size = this.files.length, this.total = this.files.reduce(function(e, t) { return e + t.size }, 0), this.uploaded = 0 } return B(e, [{ key: "percent", value: function() { var e = this,
                            t = this.files.map(function(t, n) { return t.size * e.percentages[n] / 100 }).reduce(function(e, t) { return e + t }); return Math.round(t / this.total * 100) } }, { key: "progress", value: function(e, t) { var n = this.files.indexOf(e);
                        this.percentages[n] = t } }, { key: "completed", value: function() { this.uploaded += 1 } }, { key: "isFinished", value: function() { return this.uploaded === this.files.length } }]), e }(),
            W = null,
            $ = 0,
            K = !1;
        (0, o.observe)(".js-document-dropzone", { add: function(e) { var t = document.body;
                (0, D.default)(t, "github/uploads.js:792"), t.addEventListener("dragstart", F), t.addEventListener("dragend", P), t.addEventListener("dragenter", _), t.addEventListener("dragover", _), t.addEventListener("dragleave", A), e.addEventListener("drop", H) }, remove: function(e) { var t = document.body;
                (0, D.default)(t, "github/uploads.js:803"), t.removeEventListener("dragstart", F), t.removeEventListener("dragend", P), t.removeEventListener("dragenter", _), t.removeEventListener("dragover", _), t.removeEventListener("dragleave", A), e.removeEventListener("drop", H) } }), (0, o.observe)(".js-uploadable-container", { add: function(e) { 0 == $++ && (document.addEventListener("drop", S), document.addEventListener("dragover", T)), e.addEventListener("dragenter", _), e.addEventListener("dragover", _), e.addEventListener("dragleave", M), e.addEventListener("drop", H), e.addEventListener("paste", C), e.addEventListener("change", I); var t = e.closest("form");
                null != t && t.addEventListener("reset", R) }, remove: function(e) { 0 == --$ && (document.removeEventListener("drop", S), document.removeEventListener("dragover", T)), e.removeEventListener("dragenter", _), e.removeEventListener("dragover", _), e.removeEventListener("dragleave", M), e.removeEventListener("drop", H), e.removeEventListener("paste", C), e.removeEventListener("change", I); var t = e.closest("form");
                null != t && t.removeEventListener("reset", R) } }) }), define("github/user-select-contain", ["delegated-events"], function(e) {! function() { var e = document.createElement("div");
            e.style.cssText = "-ms-user-select: element; user-select: contain;"; var t = e; return "element" === t.msUserSelect || "contain" === t.userSelect }() && window.getSelection && (0, e.on)("click", ".user-select-contain", function() { var e = window.getSelection(); if (e.rangeCount) { var t = e.getRangeAt(0).commonAncestorContainer;
                this.contains(t) || e.selectAllChildren(this) } }) }), define("github/remote", ["./remote-form", "./remote-submit", "./jquery", "invariant", "delegated-events"], function(e, t, n, r, a) {
        function o(e) { return e && e.__esModule ? e : { default: e } } var s = o(n),
            i = o(r);
        (0, a.on)("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
            (0, i.default)(this instanceof HTMLButtonElement || this instanceof HTMLInputElement, "github/remote.js:201");
            this.form && !e.defaultPrevented && (0, t.persistSubmitButtonValue)(this) }), (0, e.remoteForm)("form[data-remote]", function(e, t, n) { "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json"); var r = { status: 0, statusText: null, responseText: null, responseJSON: null, setRequestHeader: function(e, t) { n.headers.set(e, t) } },
                a = void 0; try { a = new URL(n.url) } catch (e) {} var o = { url: n.url, type: n.method, crossDomain: a && a.host !== window.location.host },
                i = (0, s.default)(e);
            i.trigger("ajaxSend", [r, o]), t.text().catch(function(e) { if (e.response) return e.response; throw e }).then(function(e) { r.status = e.status, r.statusText = e.statusText; var t = void 0;
                t = r.responseText = e.text, /[/+]json($|;)/.test(e.headers.get("content-type")) && (t = r.responseJSON = e.json), r.status < 300 ? i.trigger("ajaxSuccess", [r, o, t]) : i.trigger("ajaxError", [r, o, r.statusText]) }, function(e) { i.trigger("ajaxError", [r, o, e.message]) }).then(function() { i.trigger("ajaxComplete", [r, o]) }) }), (0, s.default)(document).on("ajaxComplete", "form", function(e) { var n = (0, t.findPersistedSubmitButtonValue)(e.currentTarget);
            n && n.remove() }), (0, e.afterRemote)(function(e) { var n = (0, t.findPersistedSubmitButtonValue)(e);
            n && n.remove() }) }), define("github-bootstrap", ["./github/accessibility-report", "./github/advanced-search", "./github/apps", "./github/banner", "./github/behaviors/ajax-pagination", "./github/behaviors/autosearch-form", "./github/behaviors/autosubmit", "./github/behaviors/browser-features-stats", "./github/behaviors/buttons", "./github/behaviors/check-all", "./github/behaviors/commenting/edit", "./github/behaviors/commenting/focus", "./github/behaviors/dirty-menus", "./github/behaviors/event-key-polyfill", "./github/behaviors/facebox-button", "./github/behaviors/flash", "./github/behaviors/focus-delay", "./github/behaviors/g-emoji-element", "./github/behaviors/html-validation", "./github/behaviors/labeled-button", "./github/behaviors/minibutton-accessibility", "./github/behaviors/notice", "./github/behaviors/pjax-loader", "./github/behaviors/pjax-timing", "./github/behaviors/pjax/beforeunload", "./github/behaviors/quick-submit", "./github/behaviors/quote-markdown-selection", "./github/behaviors/quote-selection", "./github/behaviors/removed-contents", "./github/behaviors/session-resume", "./github/behaviors/size-to-fit", "./github/behaviors/social", "./github/behaviors/tag-input", "./github/behaviors/team-members", "./github/behaviors/unread-comments", "./github/behaviors/unread-item-counter", "./github/behaviors/user-content", "./github/behaviors/will-transition-once", "./github/biztools/showcase", "./github/clipboard-copy-element", "./github/audit-log", "./github/branches", "./github/bulk-actions", "./github/bust-frames", "./github/button-outline", "./github/check-run-summary", "./github/collector-api", "./github/community", "./github/commit-access", "./github/dashboard", "./github/dashboard/discover-repositories", "./github/dashboard/recent-interactions", "./github/delegated-account-recovery", "./github/dependencies", "./github/details-element", "./github/diffs/progressive", "./github/diffs/prose", "./github/diffs/toc-summary", "./github/feature-detection", "./github/fixed-offset-fragment-navigation-observer", "./github/gfm", "./github/git-clone-help", "./github/google-analytics-tracking", "./github/hash-change", "./github/homepage/play-video", "./github/hovercards", "./github/hydro-tracking", "./github/iconnav", "./github/issues/bookmark-toggler", "./github/issues/labels", "./github/issues/triage", "./github/issues/undo-timeline-event", "./github/labels/maintainer-label-prompt", "./github/launch/credentials", "./github/legacy/index", "./github/length-limited-input-with-warning", "./github/link-prefetch-viewed", "./github/manage-membership-navigation", "./github/milestones", "./github/milestone-dragging", "./github/mobile-preference", "./github/notifications/subscriptions", "./github/oauth", "./github/octolytics-tracking", "./github/orgs/team-discussions", "./github/orgs/team-projects", "./github/pages/notifications", "./github/pages/repositories/pulse", "./github/pages/repositories/side-navigation", "./github/pages/site/header-notifications", "./github/pjax", "./github/pjax/capture-keypresses", "./github/pjax/history-navigate", "./github/pjax/link-prefetch", "./github/proxy-site-reporting", "./github/pulls/change-base", "./github/pulls/commits-range-selection", "./github/pulls/compare", "./github/pulls/favicon-status", "./github/pulls/reviews", "./github/reactions", "./github/releases", "./github/repo-list", "./github/search-suggester", "./github/select-menu", "./github/sessions/two-factor", "./github/skip-autofill", "./github/smooth-scroll-anchor", "./github/service-worker-registration", "./github/socket-channel", "./github/sso", "./github/sso-auto-replay", "./github/sticky", "./github/sudo-required", "./github/task-list", "./github/tagsearch", "./github/team-add-child", "./github/team-breadcrumbs", "./github/team-hierarchy", "./github/timeline/progressive", "./github/timing-stats", "./github/toggler", "./github/topics", "./github/touch-events-observer", "./github/tz-cookie", "./github/u2f-login", "./github/u2f-settings", "./github/updatable-content-observer", "./github/uploads", "./github/user-select-contain", "./github/remote"], function() {}), ghImport("github-bootstrap").catch(function(e) { setTimeout(function() { throw e }) });