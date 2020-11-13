<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 3
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> Дано целое число, лежащее в диапазоне от -999 до 999. 
    Вывести строку - словесное описание данного числа вида 
    "отрицательное двузначное число", 
    "нулевое число", 
    "положительное однозначное число" и т.д. </p>
    <v-text-field
      v-model="num1"
      :rules="numRules"
      required
      label="Число 1"
      clearable
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Очистить форму
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="count"
    > Назвать
    </v-btn>

  </v-form>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer.type" class="font-weight-black"  > Вы ввели  {{answer.sign}}  {{answer.type}} </p>
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
      valid: true,
      num1: "",
      numRules: [
        v => !!v || 'Введите число',
        v => !isNaN(Number(v)) && v >= -999 && v <= 999 || 'Вы ввели что-то не то ',
      ],
      answer: { type : "", sign: ""}    
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = { type : "", sign: ""}    
      },
      count() {
        let number = parseInt(this.num1) 
        number < 0 ? this.answer.sign = "отрицательное" : 
        number > 0 ? this.answer.sign = "положительное" : this.answer.sign = "" 
        if (number  === 0) {
            return this.answer.type = "ноль";
        } else if ( Math.abs(number) < 10) {
            return this.answer.type = "однозначное число";
        } else if (Math.abs(number) >= 10 && Math.abs(number) < 100) {
            return this.answer.type = "двузначное число"
        } else if (Math.abs(number) >= 100 && Math.abs(number) < 1000) {
            return this.answer.type = "трехзначное число"                
        } 
    }
  }
}
</script>
