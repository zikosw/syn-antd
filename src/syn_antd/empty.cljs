(ns syn-antd.empty
  (:require
    [reagent.core]
    ["antd/es/empty" :default ant-empty]))

(def empty (reagent.core/adapt-react-class ant-empty))