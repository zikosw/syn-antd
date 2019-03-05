(ns syn-antd.col
  (:require
    [reagent.core]
    ["antd/es/col" :default ant-col]))

(def col (reagent.core/adapt-react-class ant-col))