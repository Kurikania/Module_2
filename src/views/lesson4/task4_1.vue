<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 1
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> 
    Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
  </p>

    <v-text-field
      v-model="numInput"
      :rules="numInputRules"
      required
      label="Введите число"
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
            <p v-if="answer" class="font-weight-black" >  {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      numInput: "",
      numInputRules: [
        v => !!v || 'Строку с числами',
        v => /^-?\d*\.{0,1}\d+$/.test(v) || 'Строка должна содержать только цифры',
      ],
      answer: 0 
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = 0    
      },
      count() {
        let output = 0;
        this.numInput = this.numInput.split("");

        for (let i=0; i < this.numInput.length ; i++) {
            if(this.numInput[i] === "-" ) {
                output -= parseInt(this.numInput[i+1])
                i++
                continue
            }
            output += parseInt(this.numInput[i])
        }
        this.answer = output;
        output = 0; 
        return this.answer 
    }
  }
}
</script>
