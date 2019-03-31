it('Calls the action to fetch the user by id', async () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch')

    await renderComponent(route)

    expect(dispatchSpy).toHaveBeenCalledWith('FETCH_USER', { id: fakeUser.id })
    expect(dispatchSpy.mock.calls.length).toBe(1)
  })