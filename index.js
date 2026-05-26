import{a as c,S as l}from"./assets/vendor-CpAUTAlN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){const r=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return c.get("https://pixabay.com/api/",{params:r}).then(n=>n.data).catch(n=>{console.error("There was a problem with the fetch operation:",n)})}const d=document.querySelector(".gallery"),i=document.querySelector(".loader"),f=new l(".gallery a",{captionsData:"alt",captionDelay:250});function h({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a href="${r}" data-lightbox="gallery">
        <img src="${s}" alt="${o}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${t}</p>
        <p><strong>Downloads:</strong> ${a}</p>
      </div>
    </li>
  `}function m(s){const r=s.map(h).join("");d.innerHTML=r,f.refresh()}function g(){i.classList.remove("hidden")}function p(){i.classList.add("hidden")}const y=document.querySelector(".form");y.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(console.log("Search query:",r),!r){console.log("Please enter a search query.");return}g(),u(r).then(o=>{if(o.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!");return}console.log(o),m(o.hits)}).catch(o=>{console.error("Error fetching images:",o)}).finally(()=>{p()})});
//# sourceMappingURL=index.js.map
