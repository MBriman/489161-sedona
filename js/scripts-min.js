var searchHotelLink=document.querySelector(".find"),popupSearchHotel=document.querySelector(".login-form"),formSubmitButton=document.querySelector(".login-form"),formDateArriveInput=document.querySelector("[name=dateArrive]"),formDateDepartInput=document.querySelector("[name=dateDepart]"),formAdultsAmountInput=document.querySelector("[name=adultsAmount]"),formChildrenAmountInput=document.querySelector("[name=childrenAmount]");window.addEventListener("load",function(e){popupSearchHotel.classList.contains("form-close")||popupSearchHotel.classList.add("form-close")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(popupSearchHotel.classList.contains("form-close")||popupSearchHotel.classList.add("form-close"))}),searchHotelLink.addEventListener("click",function(e){e.preventDefault(),popupSearchHotel.classList.contains("form-close")?(popupSearchHotel.classList.remove("form-close"),popupSearchHotel.classList.remove("form-error"),popupSearchHotel.classList.add("form-show")):(popupSearchHotel.classList.add("form-close"),popupSearchHotel.classList.remove("form-show"))}),formSubmitButton.addEventListener("submit",function(e){e.preventDefault(),formDateArriveInput.value&&formDateDepartInput.value&&formAdultsAmountInput.value&&formChildrenAmountInput.value?popupSearchHotel.classList.remove("form-error"):(e.preventDefault(),popupSearchHotel.classList.remove("form-error"),popupSearchHotel.offsetWidth=popupSearchHotel.offsetWidth,popupSearchHotel.classList.add("form-error"))});
