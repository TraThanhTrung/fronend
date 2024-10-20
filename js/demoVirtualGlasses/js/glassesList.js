export class GlassesList {
    constructor() {
        this.gList = [];
    }
    addGlassList(glasses) {
        this.gList.push(glasses);
    }
    renderGlasses() {
        
        let content = ''
        content = this.gList.reduce((glContent, item,index) => {
            glContent += 
            `
                <div class="col-4">
                    <img  class = "img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id = "${item.id}" src="${item.src}" alt="">
                </div>
            `
            

            
            return glContent;
            
        },'')

        return content;
    }
}
