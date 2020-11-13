<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400"  mt-5>
      <v-card-text>
      <v-card-title>
        Задание 4
      </v-card-title>


 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  width="300" >

  <p> Вывести в консоль ближайшее к 10 из двух чисел, 
записанных в переменные m и n. Например, среди 
чисел 8.5 и 11.45 ближайшее к десяти 11.45. </p>
    <v-text-field
      v-model="m"
      :rules="numRules"
      required
      label="Число m"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="n"
      :rules="numRules"
      label="Число n"
      required
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
    >
      Посчитать
    </v-btn>

  </v-form>
  </v-card-text>
       <v-card-text> 
          <p  v-if="answer" class="font-weight-black" > Ближайшее число: {{answer}} </p>
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
      m: "",
      n: "",
      numRules: [
        v => !!v || 'Введите число',
        v => !isNaN(Number(v)) || 'Вы ввели что-то не то ',
      ], 
      answer: ''    
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
          let a = Math.abs(10-this.n);
          let b = Math.abs(10-this.m)
          if ( a > b ) { 
            return this.answer = this.m;
          } else if (a===b) {  this.answer ="числа равноудалены"
          } else {
             return this.answer = this.n;
          }
      }
    

    }
  }
</script>
