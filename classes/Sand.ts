import Soil from "./Soil";

interface SandProperty {
  unit_weight?: number;
  specific_gravity: number;
}

class Sand extends Soil {
  properties: SandProperty | undefined;
  constructor(properties?: SandProperty) {
    super("Sand");
    this.properties = properties;
  }
  getProperties() {
    return this.properties;
  }
}

export default Sand;
