// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Benvenuti in',
            classRed: 'bg-red',
            img: ''
        };
    },
    methods: {
        sayHello: function () {
           this.classRed = 'bg-blue'
            this.message = 'vue js';
            this.img = 'https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg'

        }
    }
}).mount('#app');
