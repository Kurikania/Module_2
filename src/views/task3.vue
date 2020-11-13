<template>

  <v-row justify="center" align="center" >
    <v-card min-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 3
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  width="400">


  <p>  Из трех данных чисел выбрать наименьшее. </p>
    <v-text-field
      v-model="num1"
      :rules="numRules"
      required
      label="Число 1"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="num2"
      :rules="numRules"
      required
      label="Число 2"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="num3"
      :rules="numRules"
      required
      label="Число 3"
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
    >Сравнить
    </v-btn>

  </v-form>

        </v-card-text>
         <v-card-text> 
            <p class="font-weight-black"  v-if="answer"> Наименьшее чило: {{answer}} </p>
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
        v => !isNaN(Number(v))  || 'Вы ввели что-то не то ',
      ],
      num2: "",
      num3: "", 
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
        let intermediate 
        (this.num1 < this.num2) ? intermediate = this.num1: intermediate = this.num2;
        if (intermediate < this.num3) {
            return this.answer = intermediate;             
        } else {
         return this.answer = this.num3 
      }
    

    }
  }
}
</script>
