(ns syn-antd.drawer
  (:require
    [reagent.core]
    ["antd/es/drawer" :default ant-drawer]))

(def drawer (reagent.core/adapt-react-class ant-drawer))