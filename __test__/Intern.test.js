const Intern = require('../lib/Intern');

test('test employee constructor', () => {
    var e = new Intern(1, "name", "123@gmail.com", "school");
    expect(e.id).toBe(1);
    expect(e.name).toBe("name");
    expect(e.email).toBe("123@gmail.com");
    expect(e.school).toBe("school");
})