(ns syn-antd.tabs
  (:require
    [reagent.core]
    ["antd/es/tabs" :default ant-tabs]))

(def tabs (reagent.core/adapt-react-class ant-tabs))

(def tabs-tab-pane (reagent.core/adapt-react-class (.-TabPane ant-tabs)))