import{a as u,S as f}from"./assets/vendor-CpAUTAlN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(n){const r=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get("https://pixabay.com/api/",{params:r}).then(s=>s.data).catch(s=>{console.error("There was a problem with the fetch operation:",s)})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m({webformatURL:n,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a href="${r}" data-lightbox="gallery">
        <img src="${n}" alt="${o}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${s}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${t}</p>
        <p><strong>Downloads:</strong> ${a}</p>
      </div>
    </li>
  `}function g(n){const r=n.map(m).join("");c.innerHTML=r,h.refresh()}function p(){c.innerHTML=""}function y(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const i=document.querySelector(".form");i.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements["search-text"].value.trim();if(console.log("Search query:",r),!r){console.log("Please enter a search query.");return}p(),y(),d(r).then(o=>{if(o.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!");return}console.log(o),g(o.hits)}).catch(o=>{console.error("Error fetching images:",o)}).finally(()=>{L()}),i.reset()});
//# sourceMappingURL=index.js.map
