class Canvas
{  
    canvas
    ctx 
    painting = false;

    constructor()
    {
     
      this.canvas = document.querySelector('#canvas_form')
      this.ctx = this.canvas.getContext('2d');

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.canvas.addEventListener('mousedown',(e)=> this.startPosition(e))
      this.canvas.addEventListener('touchstart',(e)=> this.startPosition(e))

      this.canvas.addEventListener('mouseup',(e)=>this.finishedPosition(e))
      this.canvas.addEventListener('touchend',(e)=>this.finishedPosition(e))
  
      this.canvas.addEventListener('mousemove',(e)=>this.draw(e))
      this.canvas.addEventListener('touchmove',(e)=>this.draw(e))
    }

    

     startPosition(e) {
     console.log("start")
        this.painting = true;
        this.draw(e)
        
    }

     getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();
      if(window.innerWidth<850)
      {
        return {
          x: evt.touches[0].clientX - rect.left,
          y: evt.touches[0].clientY - rect.top
        };
      }
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }


     finishedPosition() {
     
      this.painting = false;
      this.ctx.beginPath();

    }

     draw (e) {
        if(!this.painting) return; // Si painting est TRUE, alors ont peut dessiner.
        this.ctx.lineWidth = 5; // Epaisseur du trait
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = 'black'; // Couleur du trait

        this.ctx.lineTo(this.getMousePos(e).x, this.getMousePos(e).y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.getMousePos(e).x, this.getMousePos(e).y);

    }
   

   

}