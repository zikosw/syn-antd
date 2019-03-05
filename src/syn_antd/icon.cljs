(ns syn-antd.icon
  (:require
    [reagent.core]
    ["antd/es/icon" :default ant-icon]))

(def icon (reagent.core/adapt-react-class ant-icon))