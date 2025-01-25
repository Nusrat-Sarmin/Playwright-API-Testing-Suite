import { test, expect } from "@playwright/test";
import { request } from "http";

var userId;

//Update Userlist
test("Update User", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/" + userId, {
      data: {
        name: "morpheus",
        job: "SQA",
      },
      headers: {
        Accept: "application/json",
      },
    });
  
    console.log(await response.json());
    expect(response.status()).toBe(200);
  });