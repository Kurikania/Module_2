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
  width="400">

  <p> Найдите площадь овального кольца, полученного из овала 
площадью 15 дм2 вырезанием овала площадью 600 см2. </p>
    <v-text-field
      v-model="ovalSquare"
      :rules="squareRules"
      required
      label="Площадь овала кв.дм"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="ovalSquareCut"
      :rules="squareRules"
      label="Площадь вырезанного овала кв.см"
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
            <p class="font-weight-black" v-if="answer"> Площадь составляет: {{answer}}  кв.метров</p>
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
      ovalSquare: "15",
      ovalSquareCut: "600", 
      squareRules: [
        v => !!v || 'Введите число',
        v => !isNaN(Number(v)) && v >= 0  || 'Вы ввели что-то не то ',
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
        return this.answer = this.ovalSquare / 100 -this.ovalSquareCut/ 10000;
      }
    

    }
  }
</script>
