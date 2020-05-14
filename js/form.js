class Form{

    station=null

    constructor(station){

        this.station=station

        this.setName()

        $("#form").submit((e)=>{
            this.onSubmit(e)
        })
        $("#reservation").click(()=>{  // Bouton de reservation
            this.reservation()
        })
        $('#form_submit').css("display",'block')
        $("#canvas_form").css("display","none");
        $("#reservation").css("display","none");
    }


    onSubmit(e){ 

        e.preventDefault() // Annule le comportement par défaut du formulaire pour ne pas retourner en haut de l'écran à l'ajout d'information

        this.saveName($("#first_name").val(),$("#last_name").val())

     
        $("#canvas_form").css("display","block") // Change le display du Canvas
        
        $("#reservation").css("display","block")
        $('#form_submit').css("display",'none') // Bouton "Reserver" en none

        new Canvas()
    }

    // Stockage des informations dans Session Storage
    reservation(){ 

        sessionStorage.setItem("name",this.station.name)

        sessionStorage.setItem("lastName",$("#last_name").val()) // Récupère les informations entrée par l'utilisateur (la valeur)

        sessionStorage.setItem("firstName",$("#first_name").val())

        sessionStorage.setItem("timeLimit",new Date().getTime()+1200*1000) // Heure actuel + 20minutes 

        

        $("#items_form").css("display","none");

        new Reservation()
    }

    // Stockage des informations dans Local Storage
    saveName(firstName,lastName){

        localStorage.setItem("lastName",lastName)
        localStorage.setItem("firstName",firstName)
    }

    // Stockage du prénom et du nom dans Local Storage.
    setName(){

        $("#last_name").val(localStorage.getItem("lastName"))
        $("#first_name").val(localStorage.getItem("firstName"))
    }



}

