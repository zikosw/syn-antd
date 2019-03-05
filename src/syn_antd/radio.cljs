(ns syn-antd.radio
  (:require
    [reagent.core]
    ["antd/es/radio" :default ant-radio]))

(def radio (reagent.core/adapt-react-class ant-radio))

(def radio-button (reagent.core/adapt-react-class (.-Button ant-radio)))

(def radio-group (reagent.core/adapt-react-class (.-Group ant-radio)))