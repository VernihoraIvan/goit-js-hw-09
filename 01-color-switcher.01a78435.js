const t=document.querySelector("[data-stop]");t.setAttribute("disabled","");const e=document.querySelector("[data-start]");e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled",""),d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3)})),t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled",""),clearInterval(d)}));const r=document.querySelector("body");let d=null;
//# sourceMappingURL=01-color-switcher.01a78435.js.map