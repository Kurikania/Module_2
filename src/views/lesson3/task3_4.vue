<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 4
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="400">

  <p> 
    В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
    Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
    с номерами от 000001 до 999999. 
    «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
    сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
    Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
    теперь раздумывает, как много сувениров потребуется. 
    С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. 
  </p>


          <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Необходимо заготовить  {{answer}} призов </p>
         </v-card-text>

    <v-btn
      color="success"
      class="mr-4"
      @click="count"
    > Посчитать
    </v-btn>
    

  </v-form>

        </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
  data: () => ({
    answer: 0,
    a: [0,0,0,0,0,0]
  }),
  methods: { 
      reset () {
         
      },
      count() {
        let flag = true

      while (flag) {
            for (let m = 0; m <= 9; m++) {
                for (let j = 0; j <= 9; j++) {
                    this.a[5] = j
                        if ((this.a[0]+this.a[1]+this.a[2]) === (this.a[3] + this.a[4] + this.a[5])) {
                            this.answer++
                        }
            }
                this.a[4]++
            if (this.a[4] > 9 ) { 
                this.a[4] =0; 
                this.a[3]++; 
                }
            if (this.a[3] > 9) { 
                this.a[3] =0; 
                this.a[2]++ ;
                }
            if (this.a[2] > 9) {
                this.a[2] =0;  
                this.a[1]++
                } 
            if (this.a[1] > 9) { 
                this.a[1] = 0; 
                this.a[0]++
                if (this.a[0] > 9) {
                    flag = false
                    } 
                }  
            }
        }

    }
  }
  }

</script>
