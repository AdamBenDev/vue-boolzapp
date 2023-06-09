console.log("JS OK");
console.log("Vue OK", Vue);

const app = Vue.createApp({
  name: "Boolzapp",
  data() {
    return {
      user: {
        name: "Adam Ben Salha",
        avatar: "_io",
      },

      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "AlessandroB.",
          avatar: "_io",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "AlessandroL.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "28/02/2014 16:30:55",
              text: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "28/02/2020 18:50:00",
              text: "Va bene,stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "Ciao Claudia hai novita?",
              status: "sent",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Non ancora",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Nessuna nuova, buona nuova",
              status: "received",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Fai gli auguri a Martina che e il suo compleanno?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Grazie per avermelo ricordato le scrivo subito",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "28/02/2014 16:30:55",
              text: "Ciao andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "28/02/2020 18:50:00",
              text: "No, l ho mangiata ieri,ordiniamo sushi",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      currentIndex: 0,
      lastIndex: 0,
      newMessage: "",
      searchChat: "",
      dropdownIndex: "",
      dropdownDisplay: false,
    };
  },

  methods: {
    // funzione che assegna all'array l'indice corrente
    changeCurrentIndex(index) {
      console.log(this.currentIndex);
      return (this.currentIndex = index);
    },

    // Funzione che prende l'ultimo elemento
    getLastIndex(index) {
      return this.contacts[index].messages.length - 1;
    },

    // funzione che aggiunge un nuovo messaggio alla chat
    sentMessage() {
      if (!this.newMessage) return;

      const message = {
        date: this.getCurrentMoment(),
        text: this.newMessage,
        status: "sent",
      };
      this.contacts[this.currentIndex].messages.push(message);
      this.clearInput();
      this.receivedMessage();
    },

    // Funzione che pulisce l'input
    clearInput() {
      this.newMessage = "";
      this.searchChat = "";
    },

    // Funzione che restituisce il tempo
    getCurrentMoment() {
      return new Date().toLocaleString();
    },

    // Funzione a intervalli che stampa il messaggio ok
    receivedMessage() {
      setTimeout(() => {
        const message = {
          date: this.getCurrentMoment(),
          text: "ok",
          status: "received",
        };
        this.contacts[this.currentIndex].messages.push(message);
      }, 1000);
    },

    // Funzione che imposta il toggle
    toggleDropdown(index) {
      this.dropdownIndex = index;

      if (this.dropdownDisplay) {
        this.dropdownDisplay = false;
      } else {
        this.dropdownDisplay = true;
      }
    },

    // Funzione che nasconde il toggle
    hideDropdown() {
      this.dropdownDisplay = false;
    },

    // Funzione che filtra la chat utilizzando l'oggetto visible
    filterChat() {
      this.contacts.forEach((contact) => {
        contact.visible = contact.name
          .toLowerCase()
          .includes(this.searchChat.toLowerCase());
      });
    },
  },
});

app.mount("#root");
