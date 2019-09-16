goog.provide('syn_antd.input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('syn_antd.reagent_utils');
var module$node_modules$antd$es$input$index=shadow.js.require("module$node_modules$antd$es$input$index", {});
syn_antd.input.input = syn_antd.reagent_utils.fixed_async_input(reagent.core.adapt_react_class(module$node_modules$antd$es$input$index.default));
syn_antd.input.input_group = syn_antd.reagent_utils.fixed_async_input(reagent.core.adapt_react_class(module$node_modules$antd$es$input$index.default.Group));
syn_antd.input.input_password = syn_antd.reagent_utils.fixed_async_input(reagent.core.adapt_react_class(module$node_modules$antd$es$input$index.default.Password));
syn_antd.input.input_search = syn_antd.reagent_utils.fixed_async_input(reagent.core.adapt_react_class(module$node_modules$antd$es$input$index.default.Search));
syn_antd.input.input_text_area = syn_antd.reagent_utils.fixed_async_input(reagent.core.adapt_react_class(module$node_modules$antd$es$input$index.default.TextArea));

//# sourceMappingURL=syn_antd.input.js.map
