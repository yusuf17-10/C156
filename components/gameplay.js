AFRAME.registerComponent('game', {
    schema: {
        elementId : {type:"string",default:"#ring1"}

    },

    init: function () {
        var timerEl =document.querySelector("#timer")
        var duration = 120
        this.startTimer(duration,timerEl)
    },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    startTimer:function(duration,timerEl){
        var min,sec
        setInterval(() => {
            if (duration>=0){
                min = parseInt(duration/60)
                sec = parseInt(duration%60)
                if(min<10){
                    min = "0"+min
                }
                if(sec<10){
                    sec = "0"+sec
                }
                timerEl.setAttribute("text",{value:min+":"+sec})
                duration = duration-1
            }
        }, 1000);
    },

    isCollided:function(elementId){
        var element = document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if (elementId.includes("#ring")){
                this.updateScore()
                this.updateTargets()       
                element.setAttribute("visible",false)         
            }else if (elementId.includes("#bird")){
                this.gameOver()
            }

        })
    },

    updateTargets:function(){
        var element = document.querySelector("#targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets = currentTargets-1
        element.setAttribute("text",{value:currentTargets})

    },

    updateScore:function(){
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value
        var currentScore = parseInt(count)
        currentScore = currentScore+50
        element.setAttribute("text",{value:currentScore})

    },

    gameOver:function(){
        var element = document.querySelector("#game-over")
        var planeEl = document.querySelector("#airplane-simulator")

        element.setAttribute("visible",true)
        planeEl.setAttribute("dynamic-body",{mass:1})
    }


});
