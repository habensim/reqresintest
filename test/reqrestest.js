import supertest from "supertest";

const request = supertest('https://reqres.in');

import { expect } from "chai";

describe('Testing Reqres', () => {
    it('GET /api/users', () => {
        return request.get(`/api/users?page=2`).then((res) => {
            expect(res.body.data).to.not.be.empty;
        });
    });

    it('GET /api/users/:id', () => {
        return request.get(`/api/users/2`).then((res) => {
            expect(res.body.data.id).to.be.eq(2);
        });
    });

    it('POST api/users', () => {
        const data = {
            "name": "morpheus",
            "job": "leader"
        };
        return request
            .post('/api/users')
            .send(data)
            .then((res) => {
                console.log("Success" + res.body);
            });
    });
});