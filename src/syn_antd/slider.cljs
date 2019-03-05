(ns syn-antd.slider
  (:require
    [reagent.core]
    ["antd/es/slider" :default ant-slider]))

(def slider (reagent.core/adapt-react-class ant-slider))