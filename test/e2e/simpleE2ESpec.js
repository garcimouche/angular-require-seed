describe('Simple E2e Test', function() {
  it('Should open the front page and check', function() {
    browser().navigateTo('/index.html#/');
    sleep(1);
    expect(element('#test').html()).toEqual('Hi testUser');
  });
});
