(ns syn-antd.input-number-page
  (:require [syn-antd.button :as button]
            [syn-antd.input-number :as input-number]
            [syn-antd.dev :as dev]
            [re-frame.core :as re-frame])
  (:require-macros [syn-antd.util :refer [source]]))

(defn controlled-rf-input-number-element []
  [input-number/input-number
   {:value     @(re-frame/subscribe [::input1])
    :on-change #(re-frame/dispatch [::set-value ::input1 %])}])

(defn controlled-rf-input-number-input []
  [dev/demo-element
   "Controlled input-number (re-frame)"
   (source controlled-rf-input-number-element)
   [:<>
    [:div
     [button/button
      {:type     "primary"
       :on-click #(re-frame/dispatch [::set-value ::input1 999])}
      "Set to 999"]
     [button/button
      {:on-click #(re-frame/dispatch [::set-value ::input1 nil])}
      "Set to nil"]]
    [controlled-rf-input-number-element]
    [:p "Value: " @(re-frame/subscribe [::input1])]]])

(defn controlled-rf-input-number2-element []
  [input-number/input-number
   {:value     @(re-frame/subscribe [::input2])
    :on-change #(re-frame/dispatch [::set-value ::input2 %])}])

(defn controlled-rf-input-number2-input []
  [dev/demo-element
   "Controlled input-number with initial value (re-frame)"
   (source controlled-rf-input-number2-element)
   [:<>
    [:div
     [button/button
      {:type     "primary"
       :on-click #(re-frame/dispatch [::set-value ::input2 999])}
      "Set to 999"]
     [button/button
      {:on-click #(re-frame/dispatch [::set-value ::input2 nil])}
      "Set to nil"]]
    [controlled-rf-input-number2-element]
    [:p "Value: " @(re-frame/subscribe [::input2])]]])



;; PAGE
(defn test-input-page []
  (dev/demo-page
    {:title      "syn-antd.input-number"
     :link       "https://ant.design/components/input-number/"
     :link-title "antd Documentation - InputNumber"
     :elements   [:<>
                  [controlled-rf-input-number-input]
                  [controlled-rf-input-number2-input]]}))


;; RE FRAME STUFFS
(re-frame/reg-sub ::input1 (fn [db _] (::input1 db)))
(re-frame/reg-sub ::input2 (fn [db _] (::input2 db)))

(re-frame/reg-event-db
  ::init
  (fn [db _]
    (assoc db ::input1 nil
              ::input2 42)))

(re-frame/reg-event-db
  ::set-value
  (fn [db [_ k v]]
    (assoc db k v)))