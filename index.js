import{a as f,S as d,i}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(o){const r=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get("https://pixabay.com/api/",{params:r}).then(n=>n.data).catch(n=>{console.error("There was a problem with the fetch operation:",n)})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m({webformatURL:o,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a href="${r}" data-lightbox="gallery">
        <img src="${o}" alt="${s}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${t}</p>
        <p><strong>Downloads:</strong> ${a}</p>
      </div>
    </li>
  `}function p(o){const r=o.map(m).join("");l.innerHTML=r,h.refresh()}function y(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(console.log("Search query:",r),!r){i.info({title:"Info",message:"Please enter a search query.",position:"topRight"});return}y(),L(),g(r).then(s=>{if(s.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(s.hits)}).catch(s=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()}),c.reset()});
//# sourceMappingURL=index.js.map
