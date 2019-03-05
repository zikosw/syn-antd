(ns syn-antd.form
  (:require
    [reagent.core]
    ["antd/es/form" :default ant-form]))

(def form (reagent.core/adapt-react-class ant-form))

(def form-form-item (reagent.core/adapt-react-class (.-Form.Item ant-form)))