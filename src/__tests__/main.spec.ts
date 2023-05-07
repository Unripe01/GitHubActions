//main のテストを行う
describe('returnWord', () => {
  test('Hello World', async () => {
    const returnWord = (await import('../main')).returnWord
    expect(returnWord('Hello World!')).toBe('Hello World!')
  })
})