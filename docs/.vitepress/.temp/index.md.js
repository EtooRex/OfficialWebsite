import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Learn","text":"EtooreRex Learning Center","tagline":"Comprehensive resources to help you master reliability engineering and our software tools","actions":[{"theme":"brand","text":"Get Started","link":"/documentation/"},{"theme":"alt","text":"View API Reference","link":"/api/"}]},"features":[{"icon":"📚","title":"Documentation","details":"Comprehensive guides for AeROS® and Weibull Toolbox® covering everything from basic concepts to advanced features","link":"/documentation/"},{"icon":"🎥","title":"Video Tutorials","details":"Step-by-step video guides and walkthroughs to help you learn visually and practice hands-on","link":"/tutorials/"},{"icon":"🔧","title":"API Reference","details":"Complete API documentation for developers looking to integrate our reliability analysis capabilities","link":"/api/"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="quick-start-guides" tabindex="-1">Quick Start Guides <a class="header-anchor" href="#quick-start-guides" aria-label="Permalink to &quot;Quick Start Guides&quot;">​</a></h2><p>Get up and running quickly with our most popular learning resources:</p><h3 id="aeros®-fundamentals" tabindex="-1">AeROS® Fundamentals <a class="header-anchor" href="#aeros®-fundamentals" aria-label="Permalink to &quot;AeROS® Fundamentals&quot;">​</a></h3><p>Learn the basics of reliability block diagram modeling and Monte Carlo simulation.</p><ul><li><strong>Level</strong>: Beginner</li><li><strong>Duration</strong>: 30 minutes</li><li><strong>Topics</strong>: RBD basics, simulation setup, results interpretation</li></ul><h3 id="weibull-analysis-essentials" tabindex="-1">Weibull Analysis Essentials <a class="header-anchor" href="#weibull-analysis-essentials" aria-label="Permalink to &quot;Weibull Analysis Essentials&quot;">​</a></h3><p>Master the fundamentals of Weibull distribution analysis and parameter estimation.</p><ul><li><strong>Level</strong>: Intermediate</li><li><strong>Duration</strong>: 45 minutes</li><li><strong>Topics</strong>: Distribution fitting, probability plotting, confidence intervals</li></ul><h3 id="advanced-maintenance-modeling" tabindex="-1">Advanced Maintenance Modeling <a class="header-anchor" href="#advanced-maintenance-modeling" aria-label="Permalink to &quot;Advanced Maintenance Modeling&quot;">​</a></h3><p>Explore advanced maintenance strategies and optimization techniques.</p><ul><li><strong>Level</strong>: Advanced</li><li><strong>Duration</strong>: 60 minutes</li><li><strong>Topics</strong>: Preventive maintenance, spare parts optimization, cost modeling</li></ul><h2 id="popular-resources" tabindex="-1">Popular Resources <a class="header-anchor" href="#popular-resources" aria-label="Permalink to &quot;Popular Resources&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Getting Help</p><p>Join our community forum to connect with other reliability engineers and get answers to your questions.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
