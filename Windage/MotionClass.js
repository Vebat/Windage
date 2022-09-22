
export class Motion {
     speedVectorModule
     angleOfSpeedVector
     VectorXModule
     VectorYModule
     time
     distance
     g=9.8

      decomposingVector() {
        this.VectorXModule=Math.cos(this.angleOfSpeedVector)
        this.VectorYModule=Math.sin(this.angleOfSpeedVector)
     }

     findDistance() {
          this.time=(this.VectorYModule*this.speedVectorModule/this.g)*2
          this.distance=this.VectorXModule*this.speedVectorModule*this.time
     }

     constructor(speedVectorModule, angleOfSpeedVector) {
          this.speedVectorModule=speedVectorModule
          this.angleOfSpeedVector=angleOfSpeedVector
     }
}