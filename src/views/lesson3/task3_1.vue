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
      1. Заданы два массива  <br> 
    A = [ 12, 4, 3, 10, 1, 20 ] <br>  
    B = [-3, -7, -100, -33] <br>  
    необходимо их объединить 
    в один массив C добавив 
    массив B в конец(в начало) A. 
  </p>
    <v-text-field
      v-model="arrA"
      :rules="arrRules"
      required
      label="Массив А"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="arrB"
      :rules="arrRules"
      required
      label="Массив Б"
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
      arrA: "12,4,3,10,1,20",
      arrB: "-3,-7,-100,-33", 
      arrRules: [
        v => !!v || 'Введите числа',
        v => /^[-,0-9]+$/.test(v) || 'Массив должен содержать только цифры и запятые',
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
        this.arrA = this.arrA.split(',') 
        this.arrA = this.arrA.map(string => parseFloat(string))
        this.arrB = this.arrB.split(',') 
        this.arrB = this.arrB.map(string => parseFloat(string))
        return this.answer = this.arrB.concat(this.arrA)
    }
  }
}
</script>
