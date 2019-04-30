(ns syn-antd.auto-complete
  (:require
    [reagent.core]
    ["antd/es/auto-complete" :default ant-auto-complete]))

(def auto-complete (reagent.core/adapt-react-class ant-auto-complete))

(def auto-complete-opt-group (reagent.core/adapt-react-class (.-OptGroup ant-auto-complete)))

(def auto-complete-option (reagent.core/adapt-react-class (.-Option ant-auto-complete)))

(js/goog.exportSymbol "AutoComplete" ant-auto-complete)
(.defineProperty js/Object js/AutoComplete "name" #js {"value" "AutoComplete"})
(set! syn-antd.auto-complete/auto-complete (reagent.core/adapt-react-class js/AutoComplete))

(set! reagent.impl.template/input-component?
      (fn [x]
        (or (= x "input")
            (= x "textarea")
            (= (reagent.interop/$ x :name) "TextArea")
            (= (reagent.interop/$ x :name) "Input")
            (= (reagent.interop/$ x :name) "AutoComplete")
            (= (reagent.interop/$ x :name) "Search"))))