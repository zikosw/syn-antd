(ns syn-antd.breadcrumb
  (:require
    [reagent.core]
    ["antd/es/breadcrumb" :default ant-breadcrumb]))

(def breadcrumb (reagent.core/adapt-react-class ant-breadcrumb))

(def breadcrumb-item (reagent.core/adapt-react-class (.-Item ant-breadcrumb)))