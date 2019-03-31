describe('When new item is added in real time', ()=> {

    it('ENSURE_ACTIVE_ITEMS action is dispatched', async () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch')

      wrapper = await renderComponent('top')

      expect(dispatchSpy).toHaveBeenCalledWith('ENSURE_ACTIVE_ITEMS')
    })

    it('The new list is set', async () => {
      const commitSpy = jest.spyOn(store, 'commit')

      wrapper = await renderComponent('top')
      expect(commitSpy).toHaveBeenCalledWith('SET_LIST', {"ids": newItemListAfterAddingNewItem, "type": "top"})
      expect(wrapper.text()).toContain(fakeItemList[addedItemId].title)
    })

    it('The title of the new added item is rendered', async () => {
      wrapper = await renderComponent('top')

      expect(wrapper.text()).toContain(fakeItemList[addedItemId].title)
    })
  })