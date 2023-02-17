const app = require("../src/app");
const request = require("supertest");
const User = require("../src/model/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Yash Yerunkar",
      email: "yash@gmail.com",
      password: "yash@123",
    })
    .expect(201);
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      name: userOne.name,
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const user = await User.findById(userOne._id);

  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should not login non-exsisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "random@gmail.com",
      password: userOne.password,
    })
    .expect(400);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("Should delete account for user", async () => {
  await request(app)
    .delete("/users")
    .set("authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOne._id);

  expect(user).toBeNull();
});

test("Should not delete account for unauthenticated user", async () => {
  await request(app).delete("/users").send().expect(401);
});

test("Should update valid user fields", async () => {
  await request(app)
    .patch("/users")
    .set("authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "Mike Jenner",
    })
    .expect(200);

  const user = await User.findById(userOneId);

  expect(user.name).toEqual("Mike Jenner");
});

test("Should not update invalid user fields", async () => {
  await request(app)
    .patch("/users")
    .set("authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "Germany",
    })
    .expect(400);
});
