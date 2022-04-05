class App extends React.Component {

    render(){
        return(
            <div>
                <Friends name="Emilio" hobbies={['piano','reading','coding']} stars='5' image="https://lh3.googleusercontent.com/vyx2Hes_9s-KIxcWXL2FFbEX7hprRfpUr6FgNCScs7nKxwO_exjBDsdJsfs43JKcPW8jf8BKY3wlrsAuZ7oGD6R2b_GdwXdUDnw-wTq62aS--mD0ez7vr7dbRZB9b3daqWcmHaF3kqm_vkkzilwq9anWafs0-y6uCb6dvYDZlytcF3ajW7CIimmC1ZB-IW4NC1u1Nj15wkdZ-n-4Y5X0qsOGEd5pn9VKdykyAr-6xzYc1lc8llyg-0MDSWleAM-2XdYUE5-ZZQLb8ZVjzDygxboUs720R7BU6WpfPYzSL9NHQTLAWeHvbk6Vuom7Bn1BEoLWVOAX6ml5bdSaQ4pVZHfM-j-qwHU7XjO00NP7yx8VzP6hJ05jtN0m7gy06iMU2BX8Arh-vi2YB0B1xL4LjJIDbQcSGm6zbXABtRcTHIhJuq61G_nJysrkw7xHRxIxQzpYdlQFEC5WK_Is22uD-LEz7yCM7YELVJw0OPuA7XC98fFjak7gU5LVk0HbdaYFmsWol390yZC7cQWmArvJoeFK6xaqOPRH8tI4FFwMvdWpHd0NOKKG_mvmD6g16ma5fe2C3MTTP1pS5nIT8A4Y3ARKM7MlVVx4yDHd3Gjznclk75WyGh64wN_znQSjHUBENFAmrmB4RI4N00WYDC6sE-hzQSYMGo5hoPfs50ej1WYZnBDH-ekBdTaws_SSuoOD_o1xokgueaqTGPMMXeK8nrdv=w719-h720-no?authuser=0"/>
                <Friends name="Alex" hobbies={['reading','guitar','robots']} stars='3' image="https://lh3.googleusercontent.com/KyjwNKjeTIkwaAVoCjuEwOcm-Tyuo46GKmMJdXJNQXvca0H5_uxWsdft4nOK2ggWfrxJfQ__myk0gUjayEoCiYBjT3jYdRGXlLuPks4NXNsMIlmB__vrwQ7jt9lowypN8wBIIPOT7qTwqxpfrHvMjGesTf4mxtct8ejR_45mHUz5KaBKZ7Gv92_47DLMSVZ1xRFnQkVev-CHa3hhZJSEMeFoadfYj_jQVA4_HSEs65yMnozRg-_b-xdqoqnf3Ciqw-Nhq3c3y_WSJhWsSTqZ644hVNA0wPAa3LhX2QDiTGR79vYlhIr6TIHu8ixG6cbF-Ly8gp8fo7E2wc8bvn-8wLWfrv2Y4X6e_Q9RDyb9z6fGx3sB0KslHhdWbNV1SAh8x02kuIYxa9rOLh59AEpjKVsoaEVg6Ah-8Ru2hUNtd3Z-1nTDAf3jWYv_ebEJfMX1TfFRqHGy_LxGF9IzzQYbarh58NMM6SOMmJ2gLN45phPaWv6GfYsHoRczzNu7wWCpeEJwSOROK0TqCba8vPaJwwZT2jE1TDcOUJEDILACtCtGaNO9wAy5BVZQBfHqaGTXrsJWvPEFUIO60Bn8TrfcDiX2I_E1_c3fpBcI9vNXJQ7EpSuYfHe9caXEHkdxs7g4B4K_lgILFs4ZGDgQi-_BqEewl4XnDC0mNE-ixlxliKxz-WQqUnxtedf4cHFGmxw622pZ5_a0jdl3nEtI13YSPDNE=w1267-h950-no?authuser=0" />
                <Friends name="John" hobbies={['reading','guitar','robots']} stars='3' />
                
            </div>        
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))