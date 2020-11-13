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

  <p> Единицы длины пронумерованы следующим образом: 
    1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
    Дан номер единицы длины и длина отрезка L в этих единицах (вещественное 
    число). Вывести длину данного отрезка в метрах. </p>

        <v-select
         @input= "setSelected"
          :items="units"
          :rules="unitRules"
          label="Выберите еденицу измерения"
          dense
        ></v-select>
  


    <v-text-field
      v-model="num"
      :rules="numRules"
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
    >
      Посчитать
    </v-btn>

  </v-form>
        </v-card-text>
          <v-card-text> 
            <p class="font-weight-black" v-if="answer"> {{num}}  {{selected.slice(3)}}(-ов) будет {{answer}} метров</p>
          </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      num: "",
      selected: "",
      units: ["1 — дециметр","2 — километр", "3 — метр", "4 — миллиметр","5 — сантиметр" ], 
      unitRules: [ v => !!v || "Выберите едницу" ], 
      numRules: [ 
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
      setSelected(value) {
      this.selected = value;  
      }, 
      count() {
        if (this.selected === "1 — дециметр") return this.answer = this.num/10;
        else if (this.selected === "2 — километр") return this.answer = this.num*1000;
        else if (this.selected === "3 — метр") return this.answer;
        else if (this.selected === "4 — миллиметр") return this.answer = this.num/1000;
        else if (this.selected === "5 — сантиметр") return this.answer = this.num/100;
      }
    

    }
  }
</script>
