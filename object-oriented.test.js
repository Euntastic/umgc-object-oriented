describe("Object Oriented Exercise Testing", () => {
  let myFirstVehicle, myFirstCar, myFirstMotorcycle, myGarage;

  describe("Vehicle Object Testing", () => {
    beforeEach(() => {

    });
    it("Should honk", () => {
      myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
      expect(myFirstVehicle.honk()).toEqual("Beep");
    });
    it("Should print out Make, Model, and Year", () => {
      myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
      expect(myFirstVehicle.toString()).toEqual("The vehicle is a Honda Monster Truck from 1999");
    })
  });

  describe("Car Object Testing", () => {
    beforeEach(() => {
      myFirstCar = new Car("Toyota", "Corolla", 2005);
    });
    it("Should honk", () => {
      expect(myFirstCar.honk()).toEqual("Beep");
    });
    it("Should print out Make, Model, and Year", () => {
      expect(myFirstCar.toString()).toEqual("The vehicle is a Toyota Corolla from 2005");
    });
    it("Should return numWheels as 4", () => {
      expect(myFirstCar.numWheels).toEqual(4);
    });
  });

  describe("Motorcycle Object Testing", () => {
    beforeEach(() => {
      myFirstMotorcycle = new Motorcycle("Honda", "Nigthhawk", 2000);
    });
    it("Should print out Make, Model, and Year", () => {
      expect(myFirstMotorcycle.toString()).toEqual("The vehicle is a Honda Nigthhawk from 2000");
    });    
    it("Should print out Make, Model, and Year", () => {
      expect(myFirstMotorcycle.honk()).toEqual("Beep");
    });
    it("Method revEngine should return \"VROOM!!!\"", () => {
      expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!");
    });
    it("Should return numWheels as 2", () => {
      expect(myFirstMotorcycle.numWheels).toEqual(2);
    });
  });

  describe("Garage Object Testing", () => {
    beforeEach(() => {
      myGarage = new Garage(2);
    });
    it("Should return an initial empty vehicles array.", () => {
      expect(myGarage.vehicles).toEqual([]);
    });
    it("Should accept a valid car object into the Garage. Returns \"Vehicle Added!\"", () => {
      expect(myGarage.add(new Car("Hyundai", "Elantra", 2015))).toEqual("Vehicle Added!");
    });
    it("Should only accept valid vehicle objects. Returns \"Only vehicles are allowed in here!\"", () => {
      expect(myGarage.add("Taco")).toEqual("Only vehicles are allowed in here!");
    });
    it("Should confirm that a valid car object was added to the array.", () => {
      myGarage.add(new Car("Hyundai", "Elantra", 2015));
      expect(myGarage.vehicles[0] instanceof Car).toEqual(true);
    });
    it("Should accept a valid Motorcycle object into the Garage.", () => {
      myGarage.add(new Motorcycle("Honda", "Nighthawk", 2000));
      expect(myGarage.vehicles[0] instanceof Motorcycle).toEqual(true);
    });
    it("Should not accept more than it's capacity. Returns \"Sorry, we're full.\"", () => {
      myGarage.add(new Car("Hyundai", "Elantra", 2015));
      myGarage.add(new Motorcycle("Honda", "Nighthawk", 2000));
      expect(myGarage.add(new Motorcycle("Honda", "Nighthawk", 2000))).toEqual("Sorry, we're full.");
    });
  });

  
  afterAll(() => {
    myFirstVehicle = {};
    myFirstCar = {};
    myFirstMotorcycle = {};
    myGarage = {};
  });

});