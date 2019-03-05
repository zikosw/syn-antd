(ns syn-antd.tree
  (:require
    [reagent.core]
    ["antd/es/tree" :default ant-tree]))

(def tree (reagent.core/adapt-react-class ant-tree))

(def tree-directory-tree (reagent.core/adapt-react-class (.-DirectoryTree ant-tree)))

(def tree-tree-node (reagent.core/adapt-react-class (.-TreeNode ant-tree)))