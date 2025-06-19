

  document.querySelectorAll("[class*=z-glazr-]").forEach(target =>{
    let Events = target.classList
    let Target_z = ""
    let Event_type = ""
    let Declare = ""
    Events.forEach(element => {
       if(String(element).includes("z-glazr-event-")){

            // O que fazer com evento 
            Event_type = String(element).split("-")[3]
       }

        if(String(element).includes("z-glazr-t-"))
            {
                 // Alvo do evento
                Target_z = String(element).split("-")[3]
            }

        if(String(element).includes("z-glazr-func-")){
            Declare = String(element).split("-")[3]
        }
            
    });
    //Declaração do evento
    target.addEventListener(Event_type,()=>{
        const Target_css = document.querySelectorAll('.z-'+Target_z)
        Target_css.forEach(tar =>{

            tar.classList+=" "+Declare

        })
    })
  })