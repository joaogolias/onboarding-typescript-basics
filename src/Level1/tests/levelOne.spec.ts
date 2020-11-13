describe("First test", () => {
  console.log = jest.fn()
  it("Should be Hello World", () => {
    require('../levelOne')
    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith("Hello World")
  })
})