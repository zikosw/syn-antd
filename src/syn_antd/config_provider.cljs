(ns syn-antd.config-provider
  (:require
    [reagent.core]
    ["antd/es/config-provider" :default ant-config-provider]))

(def config-provider (reagent.core/adapt-react-class ant-config-provider))