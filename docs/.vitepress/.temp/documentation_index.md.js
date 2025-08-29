import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/index.md","filePath":"documentation/index.md"}');
const _sfc_main = { name: "documentation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><p>Comprehensive guides and documentation for AeROS® and Weibull Toolbox® to help you get started quickly and master advanced features.</p><h2 id="aeros®-documentation" tabindex="-1">AeROS® Documentation <a class="header-anchor" href="#aeros®-documentation" aria-label="Permalink to &quot;AeROS® Documentation&quot;">​</a></h2><p>Explore comprehensive documentation for AeROS® (Asset Reliability and Operations Simulation), covering everything from basic concepts to advanced modeling techniques.</p><h2 id="weibull-toolbox®-documentation" tabindex="-1">Weibull Toolbox® Documentation <a class="header-anchor" href="#weibull-toolbox®-documentation" aria-label="Permalink to &quot;Weibull Toolbox® Documentation&quot;">​</a></h2><p>Learn about advanced statistical analysis capabilities of Weibull Toolbox®, including distribution fitting, probability plotting, and life data analysis.</p><div class="tip custom-block"><p class="custom-block-title">Pro Tip</p><p>Use the search function (Ctrl+K) to quickly find specific topics or features you&#39;re looking for.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("documentation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
