"use strict"; jQuery(function(n) { n(".sue-content-slider").each(function() { var e = n(this) , o = e.data() , t = Number.isInteger(o.autoplay) && 0 < o.autoplay; e.children(":not(.sue-content-slide)").remove(), e.owlCarousel({ items: 1, responsive: {}, loop: !0, margin: 10, autoHeight: "yes" === o.autoheight, autoplay: t, autoplayTimeout: t ? o.autoplay : 0, autoplayHoverPause: t, nav: o.arrows, navText: ["", ""], dots: o.pages, animateIn: o.animatein, animateOut: o.animateout }), jQuery(window).on("load", function() { e.trigger("refresh.owl.carousel") }) }), n(".sue-content-slider").on("click", ".sue-content-slide", function(e) { var o = n(this).parents(".sue-content-slider"); window.setTimeout(function() { o.trigger("refresh.owl.carousel") }, 300) }), n(".sue-content-slider").on("click", function(e) { n(this).trigger("stop.owl.autoplay") }) }), jQuery(function(i) { i(document).on("mouseleave.sue", function(e) { var o = i(".sue-exit-popup:first") , t = o.data() , n = o.children(".sue-exit-popup-screen"); return 0 !== o.length && (!(50 < e.pageY) && (("yes" !== t.once || null === ShortcodesUltimateExtraScripts.readCookie(t.cookie)) && ("yes" === t.once ? ShortcodesUltimateExtraScripts.createCookie(t.cookie, !0, 1e3) : ShortcodesUltimateExtraScripts.eraseCookie(t.cookie), n.find("p:empty").remove(), void i.magnificPopup.open({ closeOnBgClick: "close-bg" === t.onclick, closeBtnInside: !0, showCloseBtn: "yes" === t.close, enableEscapeKey: "yes" === t.esc, callbacks: { beforeOpen: function() { i("body").addClass(t.style) }, open: function() { i(document).off("mouseleave.sue"), n.css("max-width", t.width + "px"), i(".mfp-bg").css("opacity", t.opacity), i("body").on("mousedown.sue", function(e) { if ("url" === t.onclick) { var o = e.target.nodeName.toLowerCase(); if ("button" === o || "a" === o) return; window.location.href = t.url } else "close" === t.onclick && i.magnificPopup.close() }) }, close: function() { i(".mfp-bg").attr("style", ""), i("body").removeClass(t.style), i("body").unbind("mousedown.sue") } }, items: { src: n.remove() }, type: "inline" }, 0)))) }) }), jQuery(function(o) { o("body:not(.su-extra-loaded)").on("click", ".sue-panel-clickable", function(e) { "self" === o(this).data("target") ? document.location.href = o(this).data("url") : window.open(o(this).data("url")) }) }), jQuery(function(t) { t(".sue-pricing-table").each(function() { var e = t(this).find(".sue-plan-options") , o = 0; e.each(function() { var e = t(this).outerHeight(); o < e && (o = e) }), e.css("min-height", o + "px") }) }), jQuery(function(n) { n(".sue-progress-bar.sue-progress-bar-animation").one("inview", function() { var e = n(this) , o = e.children("span") , t = e.data("percent"); o.css("width", t + "%") }) }), jQuery(function(s) { s(".sue-progress-pie").one("inview", function() { var e = s(this) , o = e.data() , t = e.children("canvas").get(0).getContext("2d") , n = [{ value: o.percent, color: o.fill_color }, { value: 100 - o.percent, color: o.pie_color }] , i = { segmentShowStroke: !1, animationEasing: "easeOutQuart", percentageInnerCutout: 100 - o.pie_width }; new Chart(t).Doughnut(n, i) }) }), jQuery(function(n) { n(".sue-splash").each(function() { var e = n(this) , t = e.data() , o = e.children(".sue-splash-screen"); if ("yes" === t.once && null !== ShortcodesUltimateExtraScripts.readCookie(t.cookie)) return !1; "yes" === t.once ? ShortcodesUltimateExtraScripts.createCookie(t.cookie, !0, 1e3) : ShortcodesUltimateExtraScripts.eraseCookie(t.cookie), o.find("p:empty").remove(), window.setTimeout(function() { n.magnificPopup.open({ closeOnBgClick: "close-bg" === t.onclick, closeBtnInside: !0, showCloseBtn: "yes" === t.close, enableEscapeKey: "yes" === t.esc, callbacks: { beforeOpen: function() { n("body").addClass(t.style) }, open: function() { o.css("max-width", t.width + "px"), n(".mfp-bg").css("opacity", t.opacity), n("body").on("mousedown.sue", function(e) { if ("url" === t.onclick) { var o = e.target.nodeName.toLowerCase(); if ("button" === o || "a" === o) return; window.location.href = t.url } else "close" === t.onclick && n.magnificPopup.close() }) }, close: function() { n(".mfp-bg").attr("style", ""), n("body").removeClass(t.style), n("body").unbind("mousedown.sue") } }, items: { src: o.remove() }, type: "inline" }, 0) }, 1e3 * parseInt(t.delay) + 10) }) }), window.ShortcodesUltimateExtraScripts = {}, function() { var o = { createCookie: function(e, o, t) { var n; if (t) { var i = new Date; i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3), n = "; expires=" + i.toGMTString() } else n = ""; document.cookie = escape(e) + "=" + escape(o) + n + "; path=/" }, readCookie: function(e) { for (var o = escape(e) + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) { for (var i = t[n]; " " === i.charAt(0); ) i = i.substring(1, i.length); if (0 === i.indexOf(o)) return unescape(i.substring(o.length, i.length)) } return null }, eraseCookie: function(e) { o.createCookie(e, "", -1) } }; window.ShortcodesUltimateExtraScripts = o }(), jQuery(function(e) { e("body").addClass("su-extra-loaded") });
