let boxs=document.querySelectorAll(".box")

boxs.forEach(e=>{
   e.onclick=()=>{
      // create overlay
      let overlay=document.createElement("div")
      overlay.className="overlay"
      let video =document.createElement("iframe")
      video.setAttribute("src" , e.getAttribute("link"))
      video.setAttribute("controls" , "")

      overlay.appendChild(video)



      document.body.appendChild(overlay)
      // remove overlay
      overlay.onclick=function(){
         this.remove()
      }
   }
})

// `http://www.youtube.com/watch?v=${video_id_here}`
// `http://www.youtube.com/watch?v=https://www.youtube.com/watch?v=T0VcojPbVK4`

// fetch(`http://www.youtube.com/watch?v=https://www.youtube.com/watch?v=T0VcojPbVK4`)
// .then(e=>e.json())
// .then(e=>console.log(e))