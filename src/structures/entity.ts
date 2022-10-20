export class Entity<IdentityType> {
  id: IdentityType;
  components: any[];
  constructor(id: IdentityType) {
    this.id = id;
    this.components = [];
  }
  hasTrait(name: string): boolean {
    return true;
  }
}

class Trait {
  id: string;
  constructor() {
    this.id = "";
  }
}
