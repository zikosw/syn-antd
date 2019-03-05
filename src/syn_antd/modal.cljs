(ns syn-antd.modal
  (:require
    [reagent.core]
    ["antd/es/modal" :default ant-modal]))

(def modal (reagent.core/adapt-react-class ant-modal))

(defn confirm-ant-modal [& args] (apply (.-confirm ant-modal) args))

(defn error-ant-modal [& args] (apply (.-error ant-modal) args))

(defn info-ant-modal [& args] (apply (.-info ant-modal) args))

(defn success-ant-modal [& args] (apply (.-success ant-modal) args))

(defn warning-ant-modal [& args] (apply (.-warning ant-modal) args))

(defn open-ant-modal [& args] (apply (.-open ant-modal) args))

(defn destroy-all-ant-modal [& args] (apply (.-destroyAll ant-modal) args))