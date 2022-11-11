/*
**Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.**Bonus**
Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.
*/

const {createApp} = Vue;

console.log(axios);
createApp({

  data(){
    return {
      apiUrl : 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
      emailCounter : 0,
      emailLimitNumber : 10,
      isLoaded:false
    }
  },
  methods: {
    getApi(){
      this.isLoaded = false;
      while(this.emailCounter < this.emailLimitNumber){
        axios.get(this.apiUrl)
        .then( result => {
          this.emailList.push(result.data.response);
        })
        return this.getApi(++this.emailCounter)
      }
      this.isLoaded = true;
      this.emailCounter = 0
    }
  },
  mounted(){
    this.getApi();
  }
}).mount('#app')