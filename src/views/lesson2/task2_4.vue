<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 4
      </v-card-title>

  <p> Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
    Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
    а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
    Измените код так, чтобы она выводила «ThreeFive» для всех чисел, 
    которые делятся и на 3 и на 5</p>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Очистить
    </v-btn>
 
    <v-btn
      color="success"
      class="mr-4"
      @click="count"
    > Старт
    </v-btn>
        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black"  >   {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  },
    data: () => ({
      answer: ""    
    }),

    methods: {
      reset () {
        this.answer = ""   
      },
      count() {  
                for(let i = 1; i <= 100; i++) {
                    if(i % 3 === 0 && i % 5 === 0 ) { 
                         console.log("ThreeFive") 
                         this.answer += "ThreeFive " 
                    } else if(i % 5 === 0) { 
                         console.log("Five")  
                         this.answer += "Five "
                    } else if(i % 3 === 0) { 
                         console.log("Three")
                         this.answer += "Three "
                    } else {  
                        console.log(i)
                        this.answer += i + " "
                    }               
                } 
                return this.answer
                },
        
  }
}
</script>
