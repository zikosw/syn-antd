(ns syn-antd.select
  (:require
    [reagent.core]
    ["antd/es/select" :default ant-select]))

(def select (reagent.core/adapt-react-class ant-select))

(def select-opt-group (reagent.core/adapt-react-class (.-OptGroup ant-select)))

(def select-option (reagent.core/adapt-react-class (.-Option ant-select)))

(defn ant-select-option [id-fn label-fn option]
  ^{:key (str "antd-option-" (id-fn option))}
  [select-option
   {:key      (id-fn option)
    :value    (id-fn option)
    :title    (label-fn option)
    :disabled (:disabled? option)}
   (label-fn option)])

(defn ant-options [{:keys [options id-fn label-fn]
                    :or   {id-fn    :id
                           label-fn :label}}]
  (let [option-fn (partial ant-select-option id-fn label-fn)]
    (map option-fn options)))