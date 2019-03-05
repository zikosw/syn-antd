(ns syn-antd.table
  (:require
    [reagent.core]
    ["antd/es/table" :default ant-table]))

(def table (reagent.core/adapt-react-class ant-table))

(def table-column (reagent.core/adapt-react-class (.-Column ant-table)))

(def table-column-group (reagent.core/adapt-react-class (.-ColumnGroup ant-table)))