$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".bibtex.hidden").toggleClass("open"),$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){$(".publications h2").each(function(){$(this).attr("data-toc-skip","")});var t="#toc-sidebar",e=$(t);Toc.init({$nav:e,$scope:$("h1, h2, h3, h4, h5, h6")}),$("body").scrollspy({target:t})}const a=document.createElement("link");a.href="../css/jupyter.css",a.rel="stylesheet",a.type="text/css";let n=localStorage.getItem("theme");if(null==n||"null"==n){const t=window.matchMedia;t&&t("(prefers-color-scheme: dark)").matches&&(n="dark")}$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(a),"dark"==n&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})})});