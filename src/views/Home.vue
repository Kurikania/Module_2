<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-10>
      <v-card-text>
      <v-card-title>
        Задание 1
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  width="400">

  <p> На садовом участке площадью 10 соток, разбили грядки 
15 на 25 метров. Сколько м2 осталось незанято? </p>
    <v-text-field
      v-model="square"
      value="10"
      :rules="squareRules"
      required
      label="Площадь участка в сотках"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="width"
      :rules="widthRules"
      label="Ширина грядки в метрах"
      required
    ></v-text-field>

      <v-text-field
      v-model="height"
      :rules="widthRules"
      label="Высота грядки в метрах"
      required
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Очистить Форму
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
            <p class="font-weight-black"  v-if="answer"> Свободных останется: {{answer}} метров</p>
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
      square: "10",
      squareRules: [
        v => !!v || 'Введите площадь участка',
        v => !isNaN(Number(v)) && v >= 0  || 'Вы ввели что-то не то ',
      ],
      width: "15",
      widthRules: [
        v => !!v || 'Введите занчение в метрах',
        v => !isNaN(Number(v)) && v >= 0  || 'Вы ввели что-то не то ',
      ],
      height: "25", 
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
        let squareUnit = this.height * this.width;
        return this.answer = (this.square * 1000) % squareUnit;
      }
    

    }
  }
</script>
