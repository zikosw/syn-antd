(ns syn-antd.input
  (:require
    [reagent.core]
    ["antd/es/input" :default ant-input]))

(def input (reagent.core/adapt-react-class ant-input))

(def input-group (reagent.core/adapt-react-class (.-Group ant-input)))

(def input-search (reagent.core/adapt-react-class (.-Search ant-input)))

(def input-text-area (reagent.core/adapt-react-class (.-TextArea ant-input)))

(js/goog.exportSymbol "Input" ant-input)
(.defineProperty js/Object js/Input "name" #js {"value" "Input"})
(set! syn-antd.input/input (reagent.core/adapt-react-class js/Input))

(js/goog.exportSymbol "TextArea" (.-TextArea ant-input))
(.defineProperty js/Object js/TextArea "name" #js {"value" "TextArea"})
(set! syn-antd.input/input-text-area (reagent.core/adapt-react-class js/TextArea))

(js/goog.exportSymbol "Search" (.-Search ant-input))
(.defineProperty js/Object js/Search "name" #js {"value" "Search"})
(set! syn-antd.input/input-search (reagent.core/adapt-react-class js/Search))

(set! reagent.impl.template/input-component?
      (fn [x]
        (or (= x "input")
            (= x "textarea")
            (= (reagent.interop/$ x :name) "TextArea")
            (= (reagent.interop/$ x :name) "Input")
            (= (reagent.interop/$ x :name) "AutoComplete")
            (= (reagent.interop/$ x :name) "Search"))))