(ns syn-antd.dev
  (:require
    ["react-syntax-highlighter" :as rsh]
    ["react-syntax-highlighter/dist/esm/styles/prism" :refer [base16AteliersulphurpoolLight]]
    [re-frame.core :as re-frame]
    [syn-antd.alert :as alert]
    [syn-antd.card :as card]
    [syn-antd.col :as col]
    [syn-antd.divider :as divider]
    [syn-antd.icon :as icon]
    [syn-antd.row :as row]
    [syn-antd.tooltip :as tooltip]
    [reagent.core :as reagent]))

(def code-highlighting (reagent/adapt-react-class rsh/PrismAsync))

(defn code-block [code]
  (when (some? code)
    [code-highlighting
     {:language "clojure"
      :style    base16AteliersulphurpoolLight}
     code]))

(defn demo-element [title source-code body]
  (reagent/with-let [show-code? (reagent/atom false)]
    [col/col
     {:span 12}
     [card/card
      {:title   title
       :actions [(reagent/as-element
                   [tooltip/tooltip
                    {:title (if @show-code?
                              "Hide source"
                              "Show source")}
                    [icon/icon {:type     "code"
                                :on-click #(swap! show-code? not)}]])]}
      body
      (when @show-code?
        [code-block source-code])]]))

(defn demo-page [{:keys [title alerts link link-title elements]}]
  [:<>
   [:h2 title]

   [:p>a
    {:href   link
     :target "blank"}
    link-title]

   (when (some? alerts)
     alerts)

   [divider/divider]

   [row/row
    {:gutter 16}
    elements]])

