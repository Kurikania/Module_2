<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 2
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> 
   Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
  </p>

    <v-text-field
      v-model="strInput"
      :rules="strInputRules"
      required
      label="Строка"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="charInput"
      :rules="charInputRules"
      required
      label="Символ"
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
    > Добавить
    </v-btn>


  </v-form>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Строка с удвоенными символами  {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      strInput: "",
      charInput: "",
      strInputRules: [
        v => !!v || 'Строка не должна быть пустой',
      ],
      charInputRules: [
        v => !!v || "Введите символ",
        v => !(v.length > 1) || 'Только один символ'
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
            if (!this.strInput.includes(this.charInput)) {
                this.answer = " не получилась, так как данного символа нет в исходной строке"
            } else {
               let str = this.strInput.split("");
               for (let i = 0; i < str.length; i++ ) {
                   str[i] === this.charInput ? this.answer += this.charInput + str[i] : this.answer += str[i] 
               }
            
            }
    }
  }
}
</script>
