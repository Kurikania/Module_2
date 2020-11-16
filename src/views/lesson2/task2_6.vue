<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 6
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> 
      Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
    В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
  </p>
    <v-text-field
      v-model="dishes"
      :rules="arrRules"
      required
      label="Тарелки"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="fairy"
      :rules="arrRules"
      required
      label="Моющее средство"
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
    > Посчитать
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
      dishes: "",
      fairy: "", 
      arrRules: [
        v => !!v || 'Введите числа',
        v => !isNaN(Number(v)) || 'Только цифры',
      ],
      answer: "" 
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = "",
        this.dishes = "",
        this.fairy = ""    
      },
      count() {
          while(this.dishes > 0 && this.fairy >= 0.5) { 
              this.dishes -= 1;
              this.fairy -= 0.5;
              this.answer += `Тарелок осталось ${this.dishes} 
              Моющего средства осталось ${this.fairy} \n `
        }
        if (this.dishes !== 0 && this.fairy === 0  ) {
            this.answer += `По итогу! Тарелок осталось ${this.dishes}, а моющее средство закончилось `
        } else if ( this.dishes === 0 && this.fairy !== 0 ) {
            this.answer += `По итогу! Моющего средства осталось ${this.fairy}, а тарелки закончились `
        } else if ( this.dishes === 0 && this.fairy === 0) {
            this.answer += `У нас ничья`
        } else {
          this.answer += `Мытье не состоялось`
        }
    }
  }
}
</script>
