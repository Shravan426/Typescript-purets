"use strict";
class TakePhoto {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const shr = new Instagram("test", "Test", 3);
shr.getReelTime();
