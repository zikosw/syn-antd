(ns syn-antd.row
  (:require
    [reagent.core]
    ["antd/es/row" :default ant-row]))

(def row (reagent.core/adapt-react-class ant-row))