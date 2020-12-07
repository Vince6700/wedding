require("dotenv").config();
const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);
const dbSetup = require("./dbSetup");

describe("gets guest", () => {
    dbSetup();

    it("It should response the GET method", async (done) => {
        const response = await request.get("/api/guests");
        expect(response.statusCode).toBe(200);
        done();
    });
});