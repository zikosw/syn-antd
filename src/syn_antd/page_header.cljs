(ns syn-antd.page-header
  (:require
    [reagent.core]
    ["antd/es/page-header" :default ant-page-header]))

(def page-header (reagent.core/adapt-react-class ant-page-header))