let modal__button = document.querySelector(".modal__button")
let contact_modal = document.querySelector(".contact_modal")
let video = document.querySelector(".video-bg")
let cross = document.querySelector(".close")
modal__button.addEventListener("click",function(event){
	contact_modal.style.display = "block"
	video.style.display="block"
  })
 document.addEventListener('keydown',function(event){
	if(event.key === "Escape"){
	contact_modal.style.display = "none"
	video.style.display="none"
}
  })
  cross.addEventListener("click",function(event){
	contact_modal.style.display = "none"
	video.style.display="none"
  })