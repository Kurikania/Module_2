
<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 4
      </v-card-title>


  <p> 
 Написать генератор случайных “русских слов”. Сформировать слово используя правила:
 <v-list>
<v-list-item> - определить длину слова случайно, но в диапазоне от 3 до 5 букв;</v-list-item>
<v-list-item> - начинать слово с гласной или согласной (определить случайно); </v-list-item>
<v-list-item> - чередовать гласные и согласные буквы в слове; </v-list-item>
<v-list-item> - буквы выбираются случайно. </v-list-item>
 </v-list>
  </p>
     <v-btn
      color="success"
      class="mr-4"
      @click="count"
    > Слово!
    </v-btn>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Ваши варианты
              <v-list dense v-for="(a , index) in answer" :key="index"> 
                <v-list-item>{{a}}</v-list-item>
              </v-list>
                </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      answer: [] 
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = ""    
      },
      count() {
          function makeWord() {
                    let text = "";
                    let letters = ["бвгджзйклмнпрстфшщь", "аеёиоуэюя"]    
                    let wordLength = Math.floor(3 + Math.random() * 3) ;
                    let firstLetter = Math.round(Math.random());
                    for( let i=0; i < wordLength; i++ ) {                                           
                        let letter = letters[firstLetter].charAt(Math.floor(Math.random() * letters[firstLetter].length));
                        text += letter;
                        firstLetter === 0 ? firstLetter = 1 : firstLetter = 0
                    }
                    return text;
                }
           this.answer.push(makeWord());
    }
  }
}
</script>
