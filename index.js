import{a as c}from"./assets/vendor-K_UpdfNf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function i(o){const t=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return c.get("https://pixabay.com/api/",{params:t}).then(n=>n.data.hits).catch(n=>{console.error("There was a problem with the fetch operation:",n)})}const l=document.querySelector(".gallery");function u({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:a}){return`
    <li class="gallery-item">
      <a href="${t}" data-lightbox="gallery">
        <img src="${o}" alt="${s}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${r}</p>
        <p><strong>Downloads:</strong> ${a}</p>
      </div>
    </li>
  `}function f(o){const t=o.map(u).join("");l.innerHTML=t}const m=document.querySelector(".form");m.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();console.log("Search query:",t),i(t).then(s=>{console.log(s),f(s)}).catch(s=>{console.error("Error fetching images:",s)})});
//# sourceMappingURL=index.js.map
