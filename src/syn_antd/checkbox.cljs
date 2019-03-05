(ns syn-antd.checkbox
  (:require
    [reagent.core]
    ["antd/es/checkbox" :default ant-checkbox]))

(def checkbox (reagent.core/adapt-react-class ant-checkbox))

(def checkbox-group (reagent.core/adapt-react-class (.-Group ant-checkbox)))