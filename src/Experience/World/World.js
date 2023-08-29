import Experience from "../Experience.js"
import Fox from './Fox';
import PlaneToy from './PlaneToy';
export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.debug = this.experience.debug
    this.resources = this.experience.resources

    // Wait for resources
    this.resources.on("ready", () => {
      this.plane = new PlaneToy()







    })
  }
  update() {
    if (this.plane) this.plane.update()
  }
}
