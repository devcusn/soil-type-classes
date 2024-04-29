import Soil from "./Soil";

interface GravelProperty {
  unit_weight?: number;
  specific_gravity: number;
}

class Gravel extends Soil {
  properties: GravelProperty | undefined;
  constructor(properties?: GravelProperty) {
    super("Gravel");
    this.properties = properties;
  }
  getProperties() {
    return this.properties;
  }
}

export default Gravel;
