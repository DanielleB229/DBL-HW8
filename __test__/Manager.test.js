const Manager = require('../lib/Manager');

test('test employee constructor', () => {
    var e = new Manager(1, "name", "123@gmail.com", "12312312");
    expect(e.id).toBe(1);
    expect(e.name).toBe("name");
    expect(e.email).toBe("123@gmail.com");
    expect(e.officeNumber).toBe("12312312");
})