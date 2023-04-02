const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            price: '100',
            curency: '$',
            showInfo: true,
            link: 'https://prog.academy/ua',
            users: [
                {
                    name: 'Bob',
                    age: 25,
                    isAdmin: true
                },
                {
                    name: 'Tom',
                    age: 30,
                    isAdmin: true
                },
                {
                    name: 'Yulia',
                    age: 23,
                    isAdmin: false
                },
            ]
        }
    }
}).mount('#app')