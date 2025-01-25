import { test, expect } from "@playwright/test";

//Using Get method to view user list
test("User List", async ({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");

    console.log(await response.json());
    expect(response.status()).toBe(200);
});