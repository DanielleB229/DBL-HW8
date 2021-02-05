const Employee = require('../lib/Employee');

test('test employee constructor', () => {
    var e = new Employee(1, "name", "123@gmail.com");
    expect(e.id).toBe(1);
    expect(e.name).toBe("name");
    expect(e.email).toBe("123@gmail.com");
})