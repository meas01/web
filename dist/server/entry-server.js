import require$$0 from "@vue/compiler-dom";
import require$$1 from "@vue/runtime-dom";
import require$$2 from "@vue/shared";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
var vue = { exports: {} };
var vue_cjs_prod = {};
var hasRequiredVue_cjs_prod;
function requireVue_cjs_prod() {
  if (hasRequiredVue_cjs_prod) return vue_cjs_prod;
  hasRequiredVue_cjs_prod = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key = shared.genCacheKey(template, options);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError: void 0,
          onWarn: shared.NOOP
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render2 = new Function("Vue", code)(runtimeDom__namespace);
      render2._rc = true;
      return compileCache[key] = render2;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports$1.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) exports$1[k] = runtimeDom[k];
    });
  })(vue_cjs_prod);
  return vue_cjs_prod;
}
var vue_cjs = {};
var hasRequiredVue_cjs;
function requireVue_cjs() {
  if (hasRequiredVue_cjs) return vue_cjs;
  hasRequiredVue_cjs = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          runtimeDom.warn(`invalid template option: `, template);
          return shared.NOOP;
        }
      }
      const key = shared.genCacheKey(template, options);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        if (!el) {
          runtimeDom.warn(`Template element not found or is empty: ${template}`);
        }
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError,
          onWarn: (e) => onError(e, true)
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && shared.generateCodeFrame(
          template,
          err.loc.start.offset,
          err.loc.end.offset
        );
        runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
      }
      const render2 = new Function("Vue", code)(runtimeDom__namespace);
      render2._rc = true;
      return compileCache[key] = render2;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports$1.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) exports$1[k] = runtimeDom[k];
    });
  })(vue_cjs);
  return vue_cjs;
}
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue.exports;
  hasRequiredVue = 1;
  if (process.env.NODE_ENV === "production") {
    vue.exports = requireVue_cjs_prod();
  } else {
    vue.exports = requireVue_cjs();
  }
  return vue.exports;
}
var vueExports = requireVue();
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>Khun meas</p>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HelloWorld, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be8889d2"]]);
function createApp() {
  const app = vueExports.createSSRApp(App);
  return { app };
}
function render(url) {
  const { app } = createApp();
  return app;
}
export {
  render
};
