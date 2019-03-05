(ns syn-antd.input
  (:require
    [reagent.core]
    ["antd/es/input" :default ant-input]))

(def input (reagent.core/adapt-react-class ant-input))

(def input-group (reagent.core/adapt-react-class (.-Group ant-input)))

(def input-search (reagent.core/adapt-react-class (.-Search ant-input)))

(def input-text-area (reagent.core/adapt-react-class (.-TextArea ant-input)))