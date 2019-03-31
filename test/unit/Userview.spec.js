import { mount } from '@vue/test-utils'
import { fakeUser } from '../../../test/fake-data'
import { createStore } from '../../store'
import UserView from '../UserView'

describe('UserView.vue', () => {

  it('Renders user title', () => {
    // Creating a fake route
    const route = userRoute(fakeUser.id)

    // Creating a clean store
    const store = createStore()

    // Initialising the store with a fake user
    store.state.users = { [fakeUser.id]: fakeUser }

    //Mounting the component
    const wrapper = mount(UserView, { store,
      mocks: {
        $route: route,
      }
    })

    // Checking that the user id is rendered
    expect(wrapper.html()).toContain(`<h1>User : ${fakeUser.id}</h1>`)
  })
})

//builder function to create a user route
const userRoute = (id) => ({
 path: '/user',
 params: { id }
})