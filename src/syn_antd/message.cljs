(ns syn-antd.message
  (:require
    ["antd/es/message" :default ant-message]))

(defn config-ant-message [& args] (apply (.-config ant-message) args))

(defn destroy-ant-message [& args] (apply (.-destroy ant-message) args))

(defn error-ant-message [& args] (apply (.-error ant-message) args))

(defn info-ant-message [& args] (apply (.-info ant-message) args))

(defn loading-ant-message [& args] (apply (.-loading ant-message) args))

(defn success-ant-message [& args] (apply (.-success ant-message) args))

(defn warn-ant-message [& args] (apply (.-warn ant-message) args))

(defn warning-ant-message [& args] (apply (.-warning ant-message) args))