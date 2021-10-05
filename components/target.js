AFRAME.registerComponent('ring', {


    init: function () {

        for (var i = 1; i <= 20; i = i + 1) {
            var id = `ring${i}`
            var posX = Math.random() * 3000 - 1000
            var posZ = Math.random() * 3000 - 1000
            var posY = Math.random() * 2 - 1

            var position = { x: posX, y: posY, z: posZ }

            this.createRing(id, position)

        }


    },


    createRing: function (id, position) {
        var ring = document.createElement("a-entity")
        ring.setAttribute("material", "color", "yellow")
        ring.setAttribute("geometry", { primitive: "torus", radius: 8 })
        var terrainEl = document.querySelector("#terrainmap")
        ring.setAttribute("position", position)
        ring.setAttribute("id", id)
        ring.setAttribute("static-body",{})
        ring.setAttribute("static-body",{shape:"sphere",sphereRadius:6})
        ring.setAttribute("game",{elementId:`#${id}`})
        terrainEl.appendChild(ring)



    }

});
