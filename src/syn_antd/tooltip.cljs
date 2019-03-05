(ns syn-antd.tooltip
  (:require
    [reagent.core]
    ["antd/es/tooltip" :default ant-tooltip]))

(def tooltip (reagent.core/adapt-react-class ant-tooltip))