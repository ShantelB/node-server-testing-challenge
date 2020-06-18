const server = require('../server');
const supertest = require('supertest');

    describe("Get request", () => {
        it('returns 200 OK', async () => {
            const res = await supertest(server).get("/api/schemes")
            expect(res.statusCode).toBe(200);
        })
    })

    describe("post scheme", () => {
        it('returns 201 CREATED', async () => {
            const data = {scheme_name: "Hello"}
            const res = await supertest(server)
            .post("/api/schemes")
            .send(data)
            expect(res.statusCode).toBe(201);
        })

        it("should return JSON", async () => {
            const res = await supertest(server)
              .post("/api/schemes")
              .send({scheme_name: "Hello"});
            expect(res.type).toMatch(/json/i);
          });
    })



    describe("delete scheme", () => {
        it('deletes scheme', async () => {
            const res = await supertest(server).delete("/api/schemes/8")
            expect(res.statusCode).toBe(200);
        })

        it("should return JSON", async () => {
            await supertest(server)
              .post("/api/schemes")
              .send({scheme_name: "Hello"});
            const res = await supertest(server).delete("/api/schemes/9");
            expect(res.type).toMatch(/json/i);
          });
    })