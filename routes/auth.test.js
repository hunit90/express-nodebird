const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
    await sequelize.sync();
});

describe('POST /login', () => {
    test('로그인 수행', (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'hunit@gmail.com',
                password: 'test123',
            })
            .expect('Location', '/')
            .expect(302, done);
    });
});