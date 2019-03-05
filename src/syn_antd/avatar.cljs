(ns syn-antd.avatar
  (:require
    [reagent.core]
    ["antd/es/avatar" :default ant-avatar]))

(def avatar (reagent.core/adapt-react-class ant-avatar))