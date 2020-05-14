class Slider{


/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------ Variables principales ----------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
 icones = document.querySelectorAll('i');
 slide = [
	{ image: 'image/slide_1.png', legend: '1 : Rendez-vous dans la section "Réservation" puis cliquez sur l\'une des icones'        },
	{ image: 'image/slide_2.png', legend: '2 : Remplissez le formulaire puis cliquez sur "Réserver"'           },
    { image: 'image/slide_3.png', legend: '3 : Signez avec votre souris dans le champ prévu a cet effet puis cliquez sur "Valider"'   },
    { image: 'image/slide_4.png', legend: '4 : Votre vélo vous attend !'         }
];

 compteur = 0;
 interval;

/* ---------------------------------------------------------------------------------------------- */	
/* ------------------------------------------ Function ------------------------------------------ */
/* ---------------------------------------------------------------------------------------------- */

constructor()
{
	this.play()

	// Chevron next
	document.querySelector('#next').addEventListener("click",()=> this.goToNext());

	// Chevron previous
	document.querySelector('#previous').addEventListener("click",()=> this.previous());

	// Bouton play
	document.querySelector('.slider-toggle').addEventListener("click",()=> this.play());

	// Keyboard
	document.addEventListener('keydown', (e)=> this.keyboard(e));
}

// Bouton next
 goToNext() {
	this.compteur++;
	if (this.compteur == 4) {
		this.compteur = 0; // Pour que le slider revienne à la première image
	}
	document.querySelector('#slider_img').src = this.slide[this.compteur].image;
	document.querySelector('#legend_parent').textContent = this.slide[this.compteur].legend;

}

// Bouton previous
 previous () {
	this.compteur--;
	if (this.compteur == -1) {
		this.compteur = this.slide.length-1; // Pour que le slider revienne à la première image
	}
	document.querySelector('#slider_img').src =this.slide[this.compteur].image;
	document.querySelector('#legend_parent').textContent = this.slide[this.compteur].legend;

}



// Bouton play
 play() {
	this.icones[2].classList.toggle('fa-play'); // Pour l'icone avec l'index 2.
	this.icones[2].classList.toggle('fa-pause');
	if (this.interval == undefined) {
		this.interval = window.setInterval(()=>this.goToNext(), 5000); // Définit l'interval a 5s
	} else {
		window.clearInterval(this.interval);
		this.interval = undefined;
	}
}

 keyboard(event) {
	switch (event.keyCode) {
		case 39:
		this.goToNext();
		break;

		case 37:
		this.previous();
		break;

		case 32:
		this.play();
		break;
	}
}


	

}
