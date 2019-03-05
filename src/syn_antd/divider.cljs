(ns syn-antd.divider
  (:require
    [reagent.core]
    ["antd/es/divider" :default ant-divider]))

(def divider (reagent.core/adapt-react-class ant-divider))