// Builder pattern allows for the step-by-step construction of complex objects using a consistent interface.


// Product interface, we could have other types of products as well that would would be implemented by any other concrete builders.
interface House {
  walls: number;
  doors: number;
  windows: number;
  roof: string;
  hasGarage: boolean;
  hasGarden: boolean;
}

interface HouseBuilderInterface {
  setWalls(walls: number): HouseBuilderInterface;
  setDoors(doors: number): HouseBuilderInterface;
  setWindows(windows: number): HouseBuilderInterface;
  setRoof(roof: string): HouseBuilderInterface;
  setGarage(hasGarage: boolean): HouseBuilderInterface;
  setGarden(hasGarden: boolean): HouseBuilderInterface;
  // build(): House;  you dont need to tie the return type to the interface because differend concrete builders might produce different types of products
}

class HouseBuilder implements HouseBuilderInterface {
  private house: House;

  constructor() {
    this.house = {
      walls: 0,
      doors: 0,
      windows: 0,
      roof: "",
      hasGarage: false,
      hasGarden: false,
    };
  }

  setWalls(walls: number): HouseBuilder {
    this.house.walls = walls;
    return this;
  }
  setDoors(doors: number): HouseBuilder {
    this.house.doors = doors;
    return this;
  }
  setWindows(windows: number): HouseBuilder {
    this.house.windows = windows;
    return this;
  }
  setRoof(roof: string): HouseBuilder {
    this.house.roof = roof;
    return this;
  }
  setGarage(hasGarage: boolean): HouseBuilder {
    this.house.hasGarage = hasGarage;
    return this;
  }
  setGarden(hasGarden: boolean): HouseBuilder {
    this.house.hasGarden = hasGarden;
    return this;
  }

  build(): House {
    return this.house;
  }
}

// Director class implements different flavours of the product using the builder class.
class HouseDirector {
  private houseBuilder: HouseBuilder;

  constructor(houseBuilder: HouseBuilder) {
    this.houseBuilder = houseBuilder;
  }

  constructSimpleHouse(): House {
    return this.houseBuilder
      .setWalls(4)
      .setDoors(1)
      .setWindows(4)
      .setRoof("Flat")
      .build();
  }

  constructLuxuryHouse(): House {
    return new HouseBuilder()
      .setWalls(8)
      .setDoors(4)
      .setWindows(10)
      .setRoof("Gabled")
      .setGarage(true)
      .setGarden(true)
      .build();
  }
}


function clientCode(houseDirector: HouseDirector) {
  const houseBuilder = new HouseBuilder();

  console.log("Simple House:");

  const simpleHouse = houseDirector.constructSimpleHouse();
  console.log(simpleHouse);

  console.log("Luxury House:");

  const luxuryHouse = houseDirector.constructLuxuryHouse();
  console.log(luxuryHouse);
}

clientCode(new HouseDirector(new HouseBuilder()));
