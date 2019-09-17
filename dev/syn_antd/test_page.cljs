(ns syn-antd.test-page
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]

    [syn-antd.layout :as layout]
    [syn-antd.menu :as menu]

    ;; Demo pages
    [syn-antd.auto-complete-page :as auto-complete-page]
    [syn-antd.input-page :as input-page]
    [syn-antd.input-number-page :as input-number-page]))

(re-frame/reg-sub ::active-page (fn [db _] (::active-page db)))

(re-frame/reg-event-fx
  ::change-page
  (fn [{:keys [db]} [_ new-page handler]]
    {:dispatch [handler]
     :db       (assoc db ::active-page new-page)}))


(def pages {"auto-complete" {:key            "auto-complete"
                             :render-fn      #'auto-complete-page/test-auto-complete-page
                             :change-handler ::auto-complete-page/init
                             :label          "AutoComplete"}
            "input"         {:key            "input"
                             :render-fn      #'input-page/test-input-page
                             :change-handler ::input-page/init
                             :label          "Input"}
            "input-number"  {:key            "input-number"
                             :render-fn      #'input-number-page/test-input-page
                             :change-handler ::input-number-page/init
                             :label          "InputNumber"}})

(defn menu-item [{:keys [key label]}]
  )

(defn test-page []
  (let [active-page @(re-frame/subscribe [::active-page])]
    [layout/layout
     [layout/layout-sider
      {:style {:overflow "auto"
               :height   "100vh"
               :position "fixed"
               :left     0}}
      [menu/menu
       {:theme         "dark"
        :mode          "inline"
        :selected-keys [active-page]
        :on-select     (fn [k]
                         (let [{:keys [key change-handler]} (get pages (aget k "key"))]
                           (re-frame/dispatch [::change-page key change-handler])))}
       (for [[k {:keys [key label]}] pages]
         ^{:key k}
         [menu/menu-item
          {:key key}
          label])]]
     [layout/layout {:style {:margin-left "200px"}}
      [layout/layout-header {:style {:background "#fff"}}
       [:h1 "syn-antd"]]
      [layout/layout-content {:style {:margin   "24px 16px 0px"
                                      :overflow "initial"}}
       [:div {:style {:padding    "24px"
                      :background "#fff"}}
        (if (some? active-page)
          [(get-in pages [active-page :render-fn])]
          [:p "Select a page from the right to begin"])]]
      [layout/layout-footer {:style {:text-align "center"}}
       [:ul
        {:style {:list-style "none"}}
        [:li
         {:style {:display "inline"
                  :padding "0px 16px"}}
         [:a {:href "https://gitlab.com/synqrinus/syn-antd"}
          "Source"]]
        [:li
         {:style {:display "inline"
                  :padding "0px 16px"}}
         [:a {:href "https://ant.design/"}
          "antd Docs"]]]]]]))

(defn ^:dev/after-load mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [#'test-page]
                  (.getElementById js/document "app")))

(defn init! []
  (mount-components))