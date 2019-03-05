(ns syn-antd.cascader
  (:require
    [reagent.core]
    ["antd/es/cascader" :default ant-cascader]))

(def cascader (reagent.core/adapt-react-class ant-cascader))