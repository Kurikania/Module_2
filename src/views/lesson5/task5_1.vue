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
   Написать функцию сравнения двух массивов. Функция принимает на вход два массива, 
    сравнивает их и возвращает true, если массивы равны и false, если не равны. 
  </p>
  <p> 
    Введите через запятую значения массивов
  </p>

    <v-text-field
      v-model="arr1Input"
      label="Массив 1"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="arr2Input"
      label="Массив 2"
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
      color="success"
      class="mr-4"
      @click="count"
    > Сравнить
    </v-btn>


  </v-form>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Массивы  {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
export default {
    data: () => ({
      valid: true,
      arr1Input: [],
      arr2Input: [],
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
          this.answer = ""; 
          let diffElem = 0; 
          let sameElem = 0; 
          this.arr1Input = this.arr1Input.split(",");
          this.arr2Input = this.arr2Input.split(",");
          if(this.arr1Input.length !== this.arr2Input.length) {
              return this.answer = "массивы разной длины"
          } else {
              for (let i = 0 ; i < this.arr1Input.length ; i++) {
                  this.arr1Input[i] === this.arr2Input[i] ? sameElem++ : diffElem++
              }
              if (sameElem === this.arr1Input.length) { 
                   this.answer = " одинаковые"
                 } else {
                     this.answer = ` [${this.arr1Input}] и [${this.arr2Input}] содержат ${sameElem} одинаковых элементов и ${diffElem} разных `
                }
          }
            this.arr1Input = [];
            this.arr2Input = [];
    }
  }
}
</script>
