
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[event-z]");
  var IndexElement =0  
  elements.forEach(el =>{
        
        const Attr = el.getAttribute("event-z") // Add
        const Parans = Attr.split(";").map(x=>x.trim())

        var element = document.querySelector(Parans[1])

        if(element){
            Parans.forEach(event=>{
                el.addEventListener(Parans[0],()=>{
               let ClassAddRemove = [el.getAttribute("z-add").split(";"),el.getAttribute("z-remove").split(";")]
               let VectorValues = []
               let State = parseInt(element.getAttribute("z-state"))
               if(ClassAddRemove[1].length > State)
               {
                   element.classList.remove(ClassAddRemove[1][element.getAttribute("z-state")])
                   element.classList.add(ClassAddRemove[0][element.getAttribute("z-state")])
                   element.setAttribute("z-state",State+1)
                   
                   let Timer=element.getAttribute("z-timer")
                   if(Timer)
                   {
                        TimerEvent(element.getAttribute("event-z"),Timer)
                   }
                    
               }
               else{
                   element.classList.remove(ClassAddRemove[1][0])
                   element.classList.add(ClassAddRemove[0][0])
                   element.setAttribute("z-state",1)
               }
            })
            })
            
        }
    })
})

function TimerEvent(listTargets,time){
    // Fazer função recursiva caso veja se o alvo tem z-timer implementado tambem!
}
