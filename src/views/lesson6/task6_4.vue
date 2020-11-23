<template>
  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 4
      </v-card-title>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="800">
  <p> 
     Написать функцию вычисляющую факториал числа с использованием рекурсии.
    Факториал числа - это число, умноженное на себя минус один, затем на себя 
    минус два и так далее, до единицы. Обозначается n!
    Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1
  </p>

    <v-text-field
      v-model="n"
      :rules="nRules"
      required
      label="Введите n"
      clearable
    ></v-text-field>

     <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="count"
    > Рассчитать
    </v-btn>
  </v-form>
        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src
export default {
    data: () => ({
      valid: true,
      answer: 0,
      n: null,
      nRules: [
        v => !!v || 'Поле не должно быть пустым',
        v => /[0-9]*/.test(v) || ' Поле должно содержать цифры',
      ]
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
          function factorial(n) {
              if (n != 1) {
                return n * factorial(n - 1) 
              } else { 
                  return 1
              }
          }
           this.answer = factorial(this.n)
      }
  }
}
</script>
