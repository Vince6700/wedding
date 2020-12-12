require("dotenv").config();
const dbSetup = require("./dbSetup");
const Guest = require("../guestModel");

const testUser = {
  name: "name",
  email: "test@mail.com",
  firstname: "test vincent",
  adults: 2,
  children: 0,
  ceremony: true,
  reception: true,
  diner: true,
  party: true,
  confirmation: true,
};

const testUserTwo = {
  name: "name two",
  email: "testTwo@mail.com",
  firstname: "test vincent",
  adults: 2,
  children: 0,
  ceremony: true,
  reception: true,
  diner: true,
  party: true,
  confirmation: true,
};

describe("guest model test", () => {
  dbSetup();

  beforeAll(async () => {
    await Guest.deleteOne({ name: "name" });
  });

  afterEach(async () => {
    await Guest.deleteOne({ name: "name" });
  });

  it("creates a guest", async (done) => {
    const guest = new Guest(testUser);
    await guest.save();
    const newGuest = await Guest.findOne({ name: "name" });

    expect(newGuest.name).toEqual("name");
    done();
  });

  it("updates Guest", async (done) => {
    const guest = new Guest(testUser);
    await guest.save();

    const oldGuest = await Guest.findOne({ email: "test@mail.com" });
    oldGuest.name = "name two";
    await oldGuest.save();

    const updatedGuest = await Guest.findOne({ email: "test@mail.com" });

    expect(updatedGuest.name).toEqual("name two");
    done();
  });

  it("deletes a  Guest", async (done) => {
    const guest = new Guest(testUser);
    await guest.save();

    const result = await Guest.deleteOne({ email: "test@mail.com" });

    expect(result.deletedCount).toEqual(1);
    done();
  });

  it("gets a Guest", async (done) => {
    const guest = new Guest(testUser);
    await guest.save();

    const foundGuest = await Guest.findOne({ email: "test@mail.com" });

    expect(foundGuest.name).toEqual("name");
    done();
  });

  it("gets all Guests", async (done) => {
    const guest = new Guest(testUser);
    await guest.save();

    const guestTow = new Guest(testUserTwo);
    await guestTow.save();

    const foundGuests = await Guest.find();

    expect(foundGuests.length).toEqual(2);
    done();
  });
});
