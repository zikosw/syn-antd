(ns syn-antd.auto-complete
  (:require
    [reagent.core]
    ["antd/es/auto-complete" :default ant-auto-complete]))

(def auto-complete (reagent.core/adapt-react-class ant-auto-complete))

(def auto-complete-opt-group (reagent.core/adapt-react-class (.-OptGroup ant-auto-complete)))

(def auto-complete-option (reagent.core/adapt-react-class (.-Option ant-auto-complete)))