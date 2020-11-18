<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title> Задание 3 </v-card-title>
    

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> 
          Проверить что введенный пароль удовлетворяет 
          следующим условиям сложности:
  </p>
          <v-list>
          <v-list-item> - длинна от 9 символов; </v-list-item>
          <v-list-item> - содержит обязательно английские буквы верхнего и нижнего регистра; </v-list-item>
          <v-list-item> - содержит более двух цифр; </v-list-item>
          <v-list-item> - содержит обязательно один из неалфавитных символов (например, !, $, #, %) </v-list-item>
          </v-list>

    <v-text-field
      v-model="strInput"
      :rules="strInputRules"
      required
      label="Ваш пароль"
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
    > Хороший пароль
    </v-btn>

  </v-form>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" >  {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid : false,
      strInput: "",
      strInputRules: [
        v => !!v || 'Строка не должна быть пустой',
        v => /(?=.*[A-Z])(?=.*[a-z])/.test(v) || 'Пароль должен содержать латинские символы верхнего и нижнего регистра',
        v => /(?=(.*\d){3})/.test(v) || 'Пароль должен содержать более 2 цифр',
        v => /(?=.*[!@_#&^$%])/.test(v) || 'Пароль должен содержать служебные символы',
        v => v.length >= 9 || 'Пароль должен содержать не менее 9 символов',
      ],
      answer: "" 
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.valid = false,
        this.$refs.form.reset(),
        this.answer = ""    
      },
      count() {
        this.answer = "Отличный пароль!"
    }
  }
}
</script>
