AFRAME.registerComponent('bird', {
    
    init: function () {
        for(var i = 1;i<=30;i++){
            var id  = `bird${i}`
            var posX = Math.random()*3000 - 1000
            var posZ = Math.random()*3000 - 1000
            var posY = Math.random()*2 - 1

            var position = {x:posX,y:posY,z:posZ}
            
            this.createBird(id,position)
        }
    },


    createBird:function(id,position){
        var birdEl = document.createElement("a-entity")
        birdEl.setAttribute("position",position)
        birdEl.setAttribute("id",id)
        birdEl.setAttribute("scale",{x:500,y:500,z:500})
        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer",{})
        birdEl.setAttribute("static-body",{shape:"sphere",sphereRadius:6})
        birdEl.setAttribute("game",{elementId:`#${id}`})

        var terrainEl = document.querySelector("#terrainmap")
        terrainEl.appendChild(birdEl)

    }

});
