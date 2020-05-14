class Reservation{

    timer=null

    constructor()
    {

        // Annule la location au click du bouton "Annuler"
        $("#reset_reservation").click(()=>{
            this.onReset()
        })

        this.setContent()
       
    }

    // Change le HTML du paragraphe, le Display de la section et initialise le Timer (temps restant jusqu'a la fin de reservation)
    setContent(){

        // Affichage de la phrase de reservatio dans la bande rouge
        $("#reservation_paragraphe").html('Vélo réservé à la station '+sessionStorage.getItem("name")+' par '+sessionStorage.getItem("firstName")+' '+sessionStorage.getItem("lastName")+'<br><span id="timer"></span>')

        $("#reservation_section").css("display","flex") 

       this.timer= setInterval(()=>{
            this.setTimer()
        },100)
        
       
 
    }

    
    onReset(){

        // Si aucune reservation ; Display = none, sessionStorage = vide, Timer = innactif
        $("#reservation_section").css("display","none") 
        sessionStorage.clear()
        clearInterval(this.timer)
    }

    // Le timer
    setTimer()
    {
       var time=sessionStorage.getItem("timeLimit") 

       var now=new Date().getTime() // Recupère l'heure actuel
       
       if(now>=time)
       {
            $("#reservation_section").css("display","none") // Si le display de reservation_section = none, alors sessionStorage = vide.
            sessionStorage.clear()

       }else
       { 
           // Calcul pour le temps restant avant expiration de la location.

           // get total seconds between the times
            var delta = Math.abs(time - now) / 1000;

            // calculate (and subtract) whole days
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            // calculate (and subtract) whole hours
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            // calculate (and subtract) whole minutes
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            // what's left is seconds
            var seconds =  Math.floor(delta % 60);

            // Affichage du temps réstant sur la bande rouge
            $("#timer").text("Temps restants : "+minutes+" min "+("0"+seconds).slice(-2))+"s"
          
       }
       
    }


}