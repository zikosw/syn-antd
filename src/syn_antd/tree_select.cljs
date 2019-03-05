(ns syn-antd.tree-select
  (:require
    [reagent.core]
    ["antd/es/tree-select" :default ant-tree-select]))

(def tree-select (reagent.core/adapt-react-class ant-tree-select))

(def tree-select-tree-node (reagent.core/adapt-react-class (.-TreeNode ant-tree-select)))