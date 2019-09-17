(ns syn-antd.input-page
  (:require
    [syn-antd.button :as button]
    [syn-antd.input :as input]
    [syn-antd.dev :as dev]
    [re-frame.core :as re-frame])
  (:require-macros [syn-antd.util :refer [source]]))

(defn event-value [e]
  (.. e -target -value))

(defn basic-input-element []
  [input/input
   {:on-change #(prn (event-value %))}])

(defn basic-input []
  [dev/demo-element
   "Uncontrolled input"
   (source basic-input-element)
   [basic-input-element]])

(defn rf-controls [k]
  [:<>
   [button/button
    {:type     "primary"
     :on-click #(re-frame/dispatch-sync [::set-value k "Test"])}
    "Reset input to 'Test'"]
   [button/button
    {:on-click #(re-frame/dispatch-sync [::set-value k nil])}
    "Reset input to nil"]])

(defn controlled-rf-input-element []
  [input/input
   {:value     @(re-frame/subscribe [::input1])
    :on-change #(re-frame/dispatch-sync [::set-value ::input1 (event-value %)])}])

(defn controlled-rf-input []
  [dev/demo-element
   "Controlled input (re-frame)"
   (source controlled-rf-input-element)
   [:<>
    [rf-controls ::input1]
    [controlled-rf-input-element]
    [:p "Value: " @(re-frame/subscribe [::input1])]]])

(defn controlled-rf-input2-element []
  [input/input
   {:value     @(re-frame/subscribe [::input2])
    :on-change #(re-frame/dispatch-sync [::set-value ::input2 (event-value %)])}])

(defn controlled-rf-input2 []
  [dev/demo-element
   "Controlled input with default value (re-frame)"
   (source controlled-rf-input2-element)
   [:<>
    [rf-controls ::input2]
    [controlled-rf-input2-element]
    [:p "Value: " @(re-frame/subscribe [::input2])]]])

(defn controlled-rf-password-input-element []
  [input/input-password
   {:value     @(re-frame/subscribe [::input3])
    :on-change #(re-frame/dispatch-sync [::set-value ::input3 (event-value %)])}])

(defn controlled-rf-password-input []
  [dev/demo-element
   "Controlled password input (re-frame)"
   (source controlled-rf-password-input-element)
   [:<>
    [rf-controls ::input3]
    [controlled-rf-password-input-element]
    [:p "Value: " @(re-frame/subscribe [::input3])]]])

(defn controlled-rf-search-input-element []
  [input/input-search
   {:value     @(re-frame/subscribe [::input4])
    :on-change #(re-frame/dispatch-sync [::set-value ::input4 (event-value %)])}])

(defn controlled-rf-search-input []
  [dev/demo-element
   "Controlled search input (re-frame)"
   (source controlled-rf-search-input-element)
   [:<>
    [rf-controls ::input4]
    [controlled-rf-search-input-element]
    [:p "Value: " @(re-frame/subscribe [::input4])]]])

(defn controlled-rf-text-area-input-element []
  [input/input-text-area
   {:value     @(re-frame/subscribe [::input5])
    :on-change #(re-frame/dispatch-sync [::set-value ::input5 (event-value %)])}])

(defn controlled-rf-text-area-input []
  [dev/demo-element
   "Controlled text area input (re-frame)"
   (source controlled-rf-text-area-input-element)
   [:<>
    [rf-controls ::input5]
    [controlled-rf-text-area-input-element]
    [:p "Value:"]
    [:pre @(re-frame/subscribe [::input5])]]])


;; PAGE
(defn test-input-page []
  (dev/demo-page
    {:title      "syn-antd.input"
     :link       "https://ant.design/components/input/"
     :link-title "antd Documentation - Input"
     :alerts     [dev/re-frame-input-alert]
     :elements   [:<>
                  [basic-input]
                  [controlled-rf-input]
                  [controlled-rf-input2]
                  [controlled-rf-password-input]
                  [controlled-rf-search-input]
                  [controlled-rf-text-area-input]]}))


;; RE FRAME STUFFS
(re-frame/reg-sub ::input1 (fn [db _] (::input1 db)))
(re-frame/reg-sub ::input2 (fn [db _] (::input2 db)))
(re-frame/reg-sub ::input3 (fn [db _] (::input3 db)))
(re-frame/reg-sub ::input4 (fn [db _] (::input4 db)))
(re-frame/reg-sub ::input5 (fn [db _] (::input5 db)))

(re-frame/reg-event-db
  ::init
  (fn [db _]
    (assoc db ::input1 ""
              ::input2 "Test"
              ::input3 ""
              ::input4 ""
              ::input5 "")))

(re-frame/reg-event-db
  ::set-value
  (fn [db [_ k v]]
    (assoc db k v)))