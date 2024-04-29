import Soil from "./Soil";

interface ClayProperty {
  unit_weight?: number;
  LL?: number;
  specific_gravity: number;
  dry_sensity: number;
}

class Clay extends Soil {
  properties: ClayProperty | undefined;
  constructor(properties?: ClayProperty) {
    super("Clay");
    this.properties = properties;
  }
  getProperties() {
    return this.properties;
  }
}

export default Clay;
