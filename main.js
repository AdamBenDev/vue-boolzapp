console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Boolzapp',
    data(){
        return{
            user: {
                name: 'Adam Ben Salha',
                avatar: '_io'
            },

            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [
                   {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                 {             
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
                {             
                 name: 'Marco',
                 avatar: '_5',
                 visible: true,
                 messages: [{
                   date: '28/02/2014 16:30:55',
                   text: 'Ti amo',
                   status: 'sent'
                 },
                 {
                   date: '28/02/2020 18:50:00',
                   text: 'Io no',
                   status: 'received'
                 }
                 ],
               },
               {
                 name: 'Bianca',
                 avatar: '_6',
                 visible: true,
                 messages: [{
                   date: '28/03/2020 10:10:40',
                   text: 'Di che colore era il cavallo bianco di Napoleone?',
                   status: 'received'
                 },
                 {
                   date: '28/03/2020 10:20:10',
                   text: 'Bianco?',
                   status: 'sent'
                 },
                 {
                   date: '28/03/2020 16:15:22',
                   text: 'Esatto',
                   status: 'received'
                 }
                 ],
               },
               {
                 name: 'Luigi',
                 avatar: '_7',
                 visible: true,
                 messages: [{
                   date: '20/03/2020 16:30:00',
                   text: 'Sai chi ha scoperto la penicillina?',
                   status: 'sent'
                 },
                 {
                   date: '20/03/2020 16:30:55',
                   text: 'Non lo so purtroppo',
                   status: 'received'
                 },
                 {
                   date: '20/03/2020 16:35:00',
                   text: 'Alexander Fleming!',
                   status: 'sent'
                 }
                 ],
               },
               {             
                 name: 'Vincenzo',
                 avatar: '_8',
                 visible: true,
                 messages: [{
                   date: '28/02/2014 16:30:55',
                   text: 'Tra due mesi scalerò il Monte Everest',
                   status: 'sent'
                 },
                 {
                   date: '28/02/2020 18:50:00',
                   text: 'Tu sei matto da legare',
                   status: 'received'
                 }
                 ],
               },
           ], 
           currentIndex: 0,  
           lastIndex: 0,
           newMessage: '',
           searchChat: '',
           dropdownIndex: "",
           dropdownDisplay: false
       }
   },

   

    }
})