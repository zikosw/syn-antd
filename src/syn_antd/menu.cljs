(ns syn-antd.menu
  (:require
    [reagent.core]
    ["antd/es/menu" :default ant-menu]))

(def menu (reagent.core/adapt-react-class ant-menu))

(def menu-divider (reagent.core/adapt-react-class (.-Divider ant-menu)))

(def menu-item (reagent.core/adapt-react-class (.-Item ant-menu)))

(def menu-item-group (reagent.core/adapt-react-class (.-ItemGroup ant-menu)))

(def menu-sub-menu (reagent.core/adapt-react-class (.-SubMenu ant-menu)))