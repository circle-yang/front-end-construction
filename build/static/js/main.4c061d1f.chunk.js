(this["webpackJsonpcra-craco"] = this["webpackJsonpcra-craco"] || []).push([
  [0],
  {
    101: function (e, t, a) {
      e.exports = a(198);
    },
    106: function (e, t, a) {},
    112: function (e, t, a) {
      e.exports = {
        App: "app_App__1w8Tx",
        "App-logo": "app_App-logo__2NH6u",
        "App-logo-spin": "app_App-logo-spin__tI3Nc",
        "App-header": "app_App-header__3Yl2W",
        "App-link": "app_App-link__3gGPU",
      };
    },
    198: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        o,
        c = a(0),
        l = a.n(c),
        r = a(19),
        i = a.n(r),
        p = (a(106), a(107), a(16)),
        s = a.n(p),
        u = (a(109), a(94)),
        g = a.n(u),
        b = (a(112), a(41)),
        m = a(206),
        f = a(207),
        h = a(92),
        d = a.n(h),
        O = Object(b.b)("globalStore")(
          Object(b.c)(function (e) {
            var t = e.globalStore.getAppLocale,
              a = t.messages,
              n = t.locale,
              o = void 0 === n ? "en-US" : n,
              c = t.antdLocal;
            return l.a.createElement(
              s.a,
              { locale: c },
              l.a.createElement(
                m.a,
                { locale: o, messages: a },
                l.a.createElement(
                  "div",
                  { className: "App" },
                  l.a.createElement(
                    g.a,
                    { type: "primary" },
                    l.a.createElement(f.a, { id: "global.form.button.submit" }),
                  ),
                  l.a.createElement("img", {
                    src: d.a,
                    alt: "",
                    style: { width: 100, height: 100 },
                  }),
                ),
              ),
            );
          }),
        ),
        j = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 208))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  o = t.getFCP,
                  c = t.getLCP,
                  l = t.getTTFB;
                a(e), n(e), o(e), c(e), l(e);
              });
        },
        L = a(35),
        v = a(95),
        y = a(52),
        _ = a(60),
        A = (a(190), a(98)),
        w = a(61),
        E = (function () {
          function e() {
            Object(L.a)(this, e);
          }
          return (
            Object(y.a)(e, null, [
              {
                key: "matchLanguageValue",
                value: function (e, t, a) {
                  var n,
                    o = "",
                    c = Object(w.a)(e);
                  try {
                    for (c.s(); !(n = c.n()).done; ) {
                      var l = n.value;
                      t.toLocaleLowerCase() === l.toLocaleLowerCase() &&
                        (o = l);
                    }
                  } catch (g) {
                    c.e(g);
                  } finally {
                    c.f();
                  }
                  var r = t.split("-"),
                    i = Object(A.a)(r, 1)[0];
                  if (!o) {
                    var p,
                      s = Object(w.a)(e);
                    try {
                      for (s.s(); !(p = s.n()).done; ) {
                        var u = p.value;
                        u.toLocaleLowerCase().includes(i) && (o = u);
                      }
                    } catch (g) {
                      s.e(g);
                    } finally {
                      s.f();
                    }
                  }
                  return o || a;
                },
              },
            ]),
            e
          );
        })(),
        S = a(2),
        C = ["zh-CN", "en-US"],
        k = a(96),
        N = {
          antdLocal: a.n(k).a,
          locale: "en-US",
          messages: Object.assign({ "global.form.button.submit": "Submit" }),
        },
        U = a(97),
        x = {
          antdLocal: a.n(U).a,
          locale: "zh-CN",
          messages: Object.assign({
            "global.form.button.submit": "\u63d0\u4ea4",
          }),
        },
        z =
          ((n = (function () {
            function e() {
              Object(L.a)(this, e), Object(v.a)(this, "language", o, this);
            }
            return (
              Object(y.a)(e, [
                {
                  key: "getAppLocale",
                  get: function () {
                    return "zh-CN" === this.language ? x : N;
                  },
                },
              ]),
              e
            );
          })()),
          (o = Object(_.a)(n.prototype, "language", [S.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return E.matchLanguageValue(C, navigator.language, "en-US");
            },
          })),
          Object(_.a)(
            n.prototype,
            "getAppLocale",
            [S.f],
            Object.getOwnPropertyDescriptor(n.prototype, "getAppLocale"),
            n.prototype,
          ),
          n),
        F = new (function e() {
          Object(L.a)(this, e),
            (this.globalStore = void 0),
            (this.globalStore = new z());
        })(),
        P = a(205),
        I = a(23),
        T = Object(I.a)();
      i.a.render(
        l.a.createElement(
          l.a.StrictMode,
          null,
          l.a.createElement(
            b.a,
            F,
            l.a.createElement(P.a, { history: T }, l.a.createElement(O, null)),
          ),
          ",",
        ),
        document.getElementById("root"),
      ),
        j();
    },
    92: function (e, t, a) {
      e.exports = a.p + "static/media/cloud_login.4470ea50.svg";
    },
  },
  [[101, 1, 2]],
]);
//# sourceMappingURL=main.4c061d1f.chunk.js.map
