(ns syn-antd.list
  (:require
    [reagent.core]
    ["antd/es/list" :default ant-list]))

(def list (reagent.core/adapt-react-class ant-list))

(def list-item (reagent.core/adapt-react-class (.-Item ant-list)))

(def list-item-meta (reagent.core/adapt-react-class (.-Meta (.-Item ant-list))))