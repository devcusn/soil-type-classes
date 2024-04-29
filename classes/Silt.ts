import Soil from "./Soil";

interface SiltPropery {
  unit_weight?: number;
  LL?: number;
  specific_gravity: number;
  dry_sensity: number;
}

class Silt extends Soil {
  properties: SiltPropery | undefined;
  constructor(properties?: SiltPropery) {
    super("Silt");
    this.properties = properties;
  }
  getProperties() {
    return this.properties;
  }
}

export default Silt;
