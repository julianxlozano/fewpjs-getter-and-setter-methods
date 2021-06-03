// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
  
  
    get diameter() {
      return this.radius * 2
    }

    
    get circumference() {
        return Math.PI * this.diameter
      }

      
    get area() {
        let squared = this.radius * this.radius
        return Math.PI * squared
      }


      set diameter(newDiameter) {  
         this.radius = newDiameter / 2
      }
  
      
      set circumference(newCircum) {
         let pi = Math.PI * 2
            this.radius = newCircum / pi 
        }
  
        
     
  


 


  }