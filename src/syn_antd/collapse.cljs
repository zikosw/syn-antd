(ns syn-antd.collapse
  (:require
    [reagent.core]
    ["antd/es/collapse" :default ant-collapse]))

(def collapse (reagent.core/adapt-react-class ant-collapse))

(def collapse-panel (reagent.core/adapt-react-class (.-Panel ant-collapse)))