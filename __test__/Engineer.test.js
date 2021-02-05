const Engineer = require('../lib/Engineer');

test('test employee constructor', () => {
    var e = new Engineer(1, "name", "123@gmail.com", "githubId");
    expect(e.id).toBe(1);
    expect(e.name).toBe("name");
    expect(e.email).toBe("123@gmail.com");
    expect(e.github).toBe("githubId");
})