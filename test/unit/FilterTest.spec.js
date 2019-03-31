it('Renders time since creation', async () => {
    fakeUser.created = new Date('September 07 2018')/1000
    Date.now = jest.fn(() => new Date('September 09 2018'))

    // We extracted a function to avoid repeating the same mount code in all the tests
    wrapper = await renderComponent(route)

    expect(wrapper.text()).toContain('2 days ago')
  })