import { Tabs } from 'expo-router'
import React from 'react'

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _Layout