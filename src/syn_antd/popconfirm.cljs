(ns syn-antd.popconfirm
  (:require
    [reagent.core]
    ["antd/es/popconfirm" :default ant-popconfirm]))

(def popconfirm (reagent.core/adapt-react-class ant-popconfirm))