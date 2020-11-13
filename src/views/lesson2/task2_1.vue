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
  width="400">

  <p> 1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название 
    соответствующего времени года ("зима", "весна" и т.д.). </p>
    

        <v-select
         @input= "setSelected"
          :items="months"
          :rules="monthsRules"
          label="Выберите номер месяца"
          dense
        ></v-select>


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
    >
      Посчитать
    </v-btn>

  </v-form>
    <v-spacer></v-spacer>
        </v-card-text>
            <v-card-text v-show="answer.month"> 
                <p class="font-weight-black" > Вы выбрали чудный месяц {{answer.month}}  </p>
                <p>Это {{answer.season}}</p>
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
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      selected: "",
      monthsRules: [v => !!v || 'Выберите месяц'] , 
      answer: { month : '' , season: '' }   
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(), 
        this.answer = { month : '' , season: '' }
      },

       setSelected(value) {
      this.selected = parseInt(value);  
      }, 
      count() {
           if (this.selected < 3 || this.selected === 12) this.answer.season = "зима"
          else if(this.selected >= 3 || this.selected < 6) this.answer.season = "весна"
          else if(this.selected >= 6 || this.selected < 9) this.answer.season = "лето" 
          else if(this.selected >= 9 || this.selected < 12) this.answer.season = "осень"  

          if (this.selected === 1) {return this.answer.month = "январь"} 
          else if (this.selected === 2) {return this.answer.month = "февраль"}
          else if (this.selected === 3) {return this.answer.month = "март"}       
          else if (this.selected === 4) {return this.answer.month = "апрель"} 
          else if (this.selected === 5) {return this.answer.month = "май"}
          else if (this.selected === 6) {return this.answer.month = "июнь"}
          else if (this.selected === 7) {return this.answer.month = "июль"}  
          else if (this.selected === 8) {return this.answer.month = "август"}
          else if (this.selected === 9) {return this.answer.month = "сентябрь"}
          else if (this.selected === 10) {return this.answer.month = "октябрь"}
          else if (this.selected === 11) {return this.answer.month = "ноябрь"} 
          else if (this.selected === 12) {return this.answer.month = "декабрь"}
                                                                
        }
      }
    }

</script>
