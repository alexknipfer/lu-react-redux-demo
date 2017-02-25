import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import TodoViewContainer from '../containers/TodoViewContainer'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <Layout>
            <TodoViewContainer />
        </Layout>
    </Provider>
)