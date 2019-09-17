(ns syn-antd.auto-complete-page
  (:require
    [syn-antd.button :as button]
    [syn-antd.auto-complete :as auto-complete]
    [syn-antd.dev :as dev]
    [re-frame.core :as re-frame])
  (:require-macros [syn-antd.util :refer [source]]))

(defn basic-auto-complete-element []
  [auto-complete/auto-complete
   {:on-search #(prn %)}])

(defn basic-auto-complete []
  [dev/demo-element
   "Uncontrolled auto-complete"
   (source basic-auto-complete-element)
   [basic-auto-complete-element]])

(defn controlled-rf-auto-complete-element []
  [auto-complete/auto-complete
   {:value     @(re-frame/subscribe [::input1])
    :on-change #(re-frame/dispatch-sync [::set-value ::input1 %])
    :on-search #(prn "Search" %)}])

(defn controlled-rf-auto-complete []
  [dev/demo-element
   "Controlled auto-complete"
   (source controlled-rf-auto-complete-element)
   [controlled-rf-auto-complete-element]])

(defn controlled-rf-auto-complete2-element []
  [auto-complete/auto-complete
   {:value     @(re-frame/subscribe [::input2])
    :on-change #(re-frame/dispatch-sync [::set-value ::input2 %])
    :on-search #(prn "Search" %)}])

(defn controlled-rf-auto-complete2 []
  [dev/demo-element
   "Controlled auto-complete with default values"
   (source controlled-rf-auto-complete2-element)
   [:<>
    [:div
     [button/button
      {:type     "primary"
       :on-click #(re-frame/dispatch [::set-value ::input2 "Test"])}
      "Set to 'Test'"]
     [button/button
      {:on-click #(re-frame/dispatch [::set-value ::input2 nil])}
      "Set to nil"]]
    [controlled-rf-auto-complete2-element]]])


;; PAGE
(defn test-auto-complete-page []
  (dev/demo-page
    {:title      "syn-antd.auto-complete"
     :link       "https://ant.design/components/auto-complete/"
     :link-title "antd Documentation - AutoComplete"
     :alerts     [dev/re-frame-input-alert]
     :elements   [:<>
                  [basic-auto-complete]
                  [controlled-rf-auto-complete]
                  [controlled-rf-auto-complete2]]}))


;; RE FRAME STUFFS
(re-frame/reg-sub ::input1 (fn [db _] (::input1 db)))
(re-frame/reg-sub ::input2 (fn [db _] (::input2 db)))

(re-frame/reg-event-db
  ::init
  (fn [db _]
    (assoc db ::input1 ""
              ::input2 "Test")))

(re-frame/reg-event-db
  ::set-value
  (fn [db [_ k v]]
    (assoc db k v)))