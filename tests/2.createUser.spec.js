import { test, expect } from "@playwright/test";

var userId;

//Using Post method to create data on the user list
test("Create User", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        name: "morpheus",
        job: "leader",
      },
      headers: {
        Accept: "application/json",
      },
    });
  
    console.log(await response.json());
    expect(response.status()).toBe(201);
  
    var res = await response.json();
    userId = res.id;
  });