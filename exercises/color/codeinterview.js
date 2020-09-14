// Model Dimmer switch and 0+ bulbs

MIN_LEVEL = 0.0
MAX_LEVEL = 1.0

// Dimmer | 5 Watt | 10 Watt | 20 Watt
// 0.0    | 0      | 0       | 0 brightness
// 1.0    | 5      | 10      | 20
// 0.5    | 2.5    | 5       | 10


class Dimmer {
  constructor() {
    this.lights = [];
  }

  setLevel(dimmer) {
    // edge case
    if (typeof dimmer !== 'number') {
      console.log('Dimmer input must be a number');
      return;
      // throw new Error
    }
    let lightArr = this.lights;
    for (let i = 0; i < lightArr.length; i++) {
      let dim = lightArr[i].watts * dimmer;
      console.log(`Bulb ${this.lights[i].name} (${this.lights[i].watts}W) is now ${dim} bright`)
    }
  }

  addBulb(lightbulb) {
    this.lights.push(lightbulb);
  }
}

class LightBulb {
  constructor(watts, name) {
    this.watts = watts;
    this.name = name;
  }
}


// dimmer.setLevel(0.5);
// Bulb A-   2165381693@^!(^#(^!@)) (5W) is now 2.5 bright
// Bulb B (10W) is now 5 bright
// Bulb Z (20W) is now 10 bright

A = new LightBulb(5, 'A-    2165381693@^!(^#(^!@))');
B = new LightBulb(10, 'B');
Z = new LightBulb(20, 'Z');

dimmer1 = new Dimmer();
dimmer1.addBulb(A);
dimmer1.addBulb(B);
dimmer1.addBulb(Z);
dimmer1.setLevel(0.5);
dimmer1.setLevel(0);
dimmer1.setLevel(1.0);
dimmer1.setLevel('adfasd');
