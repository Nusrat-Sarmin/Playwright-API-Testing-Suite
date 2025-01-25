import { test, expect } from "@playwright/test";
import { request } from "http";

var userId;

 //Delete User
 test("Delete User", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/" + userId); 
    expect(response.status()).toBe(204);
  });