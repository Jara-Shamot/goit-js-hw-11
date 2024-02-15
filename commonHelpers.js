import{S as d,i as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const n=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".span-loader"),p="https://pixabay.com/api/",m="41747369-46a857856bf510ac3748d6666";n.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",l.classList.add("loader");const e=o.currentTarget.elements.query.value,t=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});g(t),n.reset()});const f=o=>fetch(`${p}?${o}`).then(e=>{if(e.ok)return e.json();throw new Error("Sorry, there are no images matching your search query. Please try again!")}),h=o=>o.hits.reduce((e,t)=>e+`<li class="img-item">
      <div class="img">
  <a class="img-link" href="${t.largeImageURL}">
    <img
      class="images"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
      width="360"
      height="200"
  /></a></div>
<div class="description">
  <div class="category">
    <p><b>Likes</b></p>
    <p>${t.likes}</p>
  </div>
  <div>
    <p><b>Views</b></p>
    <p>${t.views}</p>
  </div>
  <div>
    <p><b>Comments</b></p>
    <p>${t.comments}</p>
  </div>
  <div>
    <p><b>Downloads</b></p>
    <p>${t.downloads}</p>
  </div>
</div>
</li>`,"");function g(o){f(o).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const t=new d(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});c.insertAdjacentHTML("afterbegin",h(e)),t.refresh()}).catch(e=>u.error({message:e.message,position:"topRight"})).finally(()=>{l.classList.remove("loader")})}
//# sourceMappingURL=commonHelpers.js.map
