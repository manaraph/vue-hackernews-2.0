import { mount } from '@vue/test-utils'
import { fakeUser } from '../../../test/fake-data'
import { resolvePromises } from '../../../test/test-utils'
import { createStore } from '../../store'
import UserView from '../UserView'

describe('UserView.vue', () => {

  it('Renders user title', async () => {
    // Creating a fake route
    const route = userRoute(fakeUser.id)

    // Creating a clean store
    const store = createStore()

    //Mounting the component
    const wrapper = mount(UserView, { store,
      mocks: {
        $route: route,
      }
    })

    // Calling nuxt async data and waiting for the async promise to be solved
    wrapper.vm.$options.asyncData({ store, route })
    await resolvePromises()

    // Checking that the user id is rendered
    expect(wrapper.html()).toContain(`<h1>User : ${fakeUser.id}</h1>`)
  })
})

//builder function to create a user route
const userRoute = (id) => ({
 path: '/user',
 params: { id }
})