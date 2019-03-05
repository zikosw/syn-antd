(ns syn-antd.notification
  (:require
    ["antd/es/notification" :default ant-notification]))

(defn close-ant-notification [& args] (apply (.-close ant-notification) args))

(defn config-ant-notification [& args] (apply (.-config ant-notification) args))

(defn destroy-ant-notification [& args] (apply (.-destroy ant-notification) args))

(defn error-ant-notification [& args] (apply (.-error ant-notification) args))

(defn info-ant-notification [& args] (apply (.-info ant-notification) args))

(defn open-ant-notification [& args] (apply (.-open ant-notification) args))

(defn success-ant-notification [& args] (apply (.-success ant-notification) args))

(defn warn-ant-notification [& args] (apply (.-warn ant-notification) args))

(defn warning-ant-notification [& args] (apply (.-warning ant-notification) args))