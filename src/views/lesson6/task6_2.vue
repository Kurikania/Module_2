<template>
  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 2
      </v-card-title>
  <p> 
        Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
        от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
        числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
        хранится массив чисел, которые уже были сгенерированы функцией.
  </p>
     <v-btn
      color="success"
      class="mr-4"
      @click="count"
    > Число
    </v-btn>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Через замыкания не работало здесь, есть отдельный файл в корне my-app <br> {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      answer: "",
      usedNumbers: []
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
                let i = Math.floor(Math.random() * 100) + 1;
                    if ( this.usedNumbers.includes(i) ) {
                        return 
                    } 
                        this.answer += i + " "
                        this.usedNumbers.push(i)              
        } 
        
  }
}
</script>
