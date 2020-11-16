<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 5
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> Пользователь вводит год, необходимо определить 
    является ли он високосным. Например:
    <v-list dense > 
    <v-list-item> 1) '2000' – високосный год </v-list-item>
    <v-list-item> 2) '1800' – не високосный год </v-list-item>
    </v-list>
    </p>
    <v-text-field
      v-model="year"
      :rules="yearRules"
      required
      label="Введите год"
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
            <p v-if="answer" class="font-weight-black"  > Это {{answer}}  год </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      year: "",
      yearRules: [
        v => !!v || 'Введите год ',
        v => !isNaN(Number(v)) || 'Год должен содержать только цифры',
      ],
      answer: "" 
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
          if (this.year % 400 === 0) { 
              return this.answer = "високосный" 
              }
          if (this.year % 4 === 0 && this.year % 100 !== 0) {
              return this.answer = "високосный" 
            } else { return this.answer = "невисокосный" }
    }
  }
}
</script>
