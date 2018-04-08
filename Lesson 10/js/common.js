class options {
  constructor(height, width, bg, fontsize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontsize = fontsize;
      this.textAlign = textAlign;
  }

     newStyle() { 
       let box = document.createElement('div');
           box.textContent = 'Привет как дела';
           document.body.appendChild(box);

        let s = box.style;
            s.cssText = `height: ${this.height}; \
                    width: ${this.width}; \
                    background-color: ${this.bg}; \
                    font-size: ${this.fontsize}; \
                    text-align: ${this.textAlign}; \
                    `;
          
                   
        }

        
     
}

let characteristic = new options('250px', '250px', 'red', '16px', 'center');
characteristic.newStyle();




