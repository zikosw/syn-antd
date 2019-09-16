(ns syn-antd.input-shim
  (:require [syn-antd.auto-complete]
            [syn-antd.input]
            [reagent.impl.template]
            [reagent.interop]
            ["antd/es/auto-complete" :default ant-auto-complete]
            ["antd/es/input" :default ant-input]))

;(js/goog.exportSymbol "AutoComplete" ant-auto-complete)
;(.defineProperty js/Object js/AutoComplete "name" #js {"value" "AutoComplete"})
;
;(js/goog.exportSymbol "Input" ant-input)
;(.defineProperty js/Object js/Input "name" #js {"value" "Input"})
;
;(js/goog.exportSymbol "TextArea" (.-TextArea ant-input))
;(.defineProperty js/Object js/TextArea "name" #js {"value" "TextArea"})
;
;(js/goog.exportSymbol "Search" (.-Search ant-input))
;(.defineProperty js/Object js/Search "name" #js {"value" "Search"})
;
;
;(set! syn-antd.auto-complete/auto-complete (reagent.core/adapt-react-class js/AutoComplete))
;(set! syn-antd.input/input (reagent.core/adapt-react-class js/Input))
;(set! syn-antd.input/input-text-area (reagent.core/adapt-react-class js/TextArea))
;(set! syn-antd.input/input-search (reagent.core/adapt-react-class js/Search))
;
;(set! reagent.impl.template/input-component?
;      (fn [x]
;        (or (= x "input")
;            (= x "textarea")
;            (= (reagent.interop/$ x :name) "TextArea")
;            (= (reagent.interop/$ x :name) "Input")
;            (= (reagent.interop/$ x :name) "AutoComplete")
;            (= (reagent.interop/$ x :name) "Search"))))