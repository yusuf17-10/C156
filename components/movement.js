AFRAME.registerComponent('terrain-rotation', {
    schema: {
        speed_rotation: { type: "number", default: 0 }
    },

    init: function () {
        window.addEventListener("keydown", (e) => {

            if (e.key == "ArrowRight") {
                if (this.data.speed_rotation < +0.1) {

                    this.data.speed_rotation += 0.01

                }

            }
            if (e.key == "ArrowLeft") {
                if (this.data.speed_rotation > -0.1) {

                    this.data.speed_rotation -= 0.01

                }
            }
        })
    },


    tick: function () {
        var map_rotation = this.el.getAttribute("rotation")
        map_rotation.y += this.data.speed_rotation
        this.el.setAttribute("rotation", { x: map_rotation.x, y: map_rotation.y, z: map_rotation.z })
    }
});

AFRAME.registerComponent('plane-rotation', {
    schema: {
        speed_rotation: { type: "number", default: 0 },
        speed_of_ascent: { type: "number", default: 0 },
    },

    init: function () {
        window.addEventListener("keydown", (e) => {
            this.data.speed_rotation = this.el.getAttribute("rotation")
            this.data.speed_of_ascent = this.el.getAttribute("position")
            var plane_rotation = this.data.speed_rotation
            var plane_position = this.data.speed_of_ascent

            if (e.key == "ArrowLeft") {
                if (plane_rotation.x > -10) {
                    plane_rotation.x -= 0.5
                    this.el.setAttribute("rotation", plane_rotation)
                }
            }


            if (e.key == "ArrowRight") {
                if (plane_rotation.x < +10) {
                    plane_rotation.x += 0.5
                    this.el.setAttribute("rotation", plane_rotation)
                }
            }

            if (e.key == "ArrowUp") {
                if (plane_rotation.z < +20) {
                    plane_rotation.z += 0.5
                    this.el.setAttribute("rotation", plane_rotation)
                }
                if (plane_rotation.y < +2) {
                    plane_rotation.y += 0.01
                    this.el.setAttribute("rotation", plane_rotation)
                }

            }

            if (e.key == "ArrowDown") {
                if (plane_rotation.z > -20) {
                    plane_rotation.z -= 0.5
                    this.el.setAttribute("rotation", plane_rotation)
                }
                if (plane_rotation.y > -2) {
                    plane_rotation.y -= 0.01
                    this.el.setAttribute("rotation", plane_rotation)
                }

            }



        })
    },



    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});

