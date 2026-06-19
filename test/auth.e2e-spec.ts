import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - dapet token', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@gmail.com', pass: 'admin123' })
      .expect(201)
      .then((res) => {
        expect(res.body).toHaveProperty('access_token');
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
