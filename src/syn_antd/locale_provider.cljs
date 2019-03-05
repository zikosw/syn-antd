(ns syn-antd.locale-provider
  (:require
    [reagent.core]
    ["antd/es/locale-provider" :default ant-locale-provider]))

(def locale-provider (reagent.core/adapt-react-class ant-locale-provider))