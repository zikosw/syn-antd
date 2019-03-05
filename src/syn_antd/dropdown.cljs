(ns syn-antd.dropdown
  (:require
    [reagent.core]
    ["antd/es/dropdown" :default ant-dropdown]))

(def dropdown (reagent.core/adapt-react-class ant-dropdown))

(def dropdown-button (reagent.core/adapt-react-class (.-Button ant-dropdown)))