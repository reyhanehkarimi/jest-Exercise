const mockData = require("./data.json")
const fetchUserData = require("./1-fetchUserData");

fetch = jest.fn().mockResolvedValue({
    statusCode: 200,
    isOk: true,
    json: jest.fn().mockResolvedValue(mockData),
  });

  describe("fetchData function", () => {
    const userId = 1;
    it('should return user data when fetch is successful', async () => { 
      const data = await fetchUserData(userId);
      expect(data).toEqual(mockData);

      expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`)
     })
  })