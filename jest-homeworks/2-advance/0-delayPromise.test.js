const getUserWithDelay = require("./0-delayPromise");
// const delayPromise = require("./0-delayPromise");

describe("getUserWithDelay", () => {
    it('should return a user object after the delay', async () => { 
     userId = 1;
     const result = await getUserWithDelay(userId);

     expect(result).toEqual({ id: userId, name: `User ${userId}` })
     })
})