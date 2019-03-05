(ns syn-antd.layout
  (:require
    [reagent.core]
    ["antd/es/layout" :default ant-layout]))

(def layout (reagent.core/adapt-react-class ant-layout))

(def layout-content (reagent.core/adapt-react-class (.-Content ant-layout)))

(def layout-footer (reagent.core/adapt-react-class (.-Footer ant-layout)))

(def layout-header (reagent.core/adapt-react-class (.-Header ant-layout)))

(def layout-sider (reagent.core/adapt-react-class (.-Sider ant-layout)))