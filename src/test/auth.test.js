const { empty } = require('@prisma/client/runtime/library');
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

// test('gets the test endpoint', async () => {

//   const response = await request.post('/auth/register').send({ name: 'diya', email: 'diya@gmail.com', password: 'diyaa1@23'});
//   console.log(response.body); 
//   expect(response.status).toBe(200);
  
//   expect(response.body.user.email).toBe('diya@gmail.com');
// });

describe('Prisma Test', () => {
  it('should create a user', async () => {
    const user = await global.prisma.users.create({
      data: { name: 'dhruvi', email: 'dhruvi@example.com' , password:'dhruvi@123'},
    });
    expect(user).toBeTruthy();
  });
});