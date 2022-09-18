import { NavigationContainer } from '@react-navigation/native'
import { AppRouters } from './app.routes'

export function Routes(){

    return(
        <NavigationContainer>
            <AppRouters/>

        </NavigationContainer>
    )
}