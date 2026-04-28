describe('test setup', () => {
  it('vitest globals are available', () => {
    expect(true).toBe(true)
  })

  it('jest-dom matchers are available', () => {
    const element = document.createElement('div')
    element.textContent = 'hello'
    document.body.appendChild(element)
    expect(element).toBeInTheDocument()
    document.body.removeChild(element)
  })
})
