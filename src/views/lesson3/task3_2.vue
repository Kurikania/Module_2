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
  max-width="400" style="flex-wrap = no-wrap">

  <p> 
2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
  </p>

 <v-row no-gutters> 
   <v-col > <v-text-field auto-grow = "true" outlined dense class = "numInput" v-model="arr1" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr2" :rules="arrRules"></v-text-field> </v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr3" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr4" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr5" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr6" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr7" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr8" :rules="arrRules"></v-text-field></v-col>
    <v-col> <v-text-field outlined dense class = "numInput" v-model="arr9" :rules="arrRules"></v-text-field></v-col>
 </v-row>

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
    > Добавить
    </v-btn>

  </v-form>

        </v-card-text>
         <v-card-text> 
             <p> Использовать documen.write в Vue было бы немного странно. Клалссический вариант решения представлен отдельно в корне my app</p>
             <v-row  class="d-flex justify-center" v-for="(arr, index) in answer" :key="index" no-gutters >
                  <v-col class="flex-grow-0" v-for="(n, index) in arr" :key="index"> <v-card class="text-center" style="margin: 8px" outlined :elevation="2" height="60" width="60">
                      <v-card-text style="font-size: 1.2em" class = "full-height pa-4 d-flex flex-column">
                      {{n}}
                      </v-card-text>
                      </v-card> </v-col>
             </v-row>
            <p style="font-size: 1.5em"> {{winner}} </p>

         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      arr1: null,
      arr2: null, 
      arr3: null,
      arr4: null, 
      arr5: null,
      arr6: null, 
      arr7: null, 
      arr8: null,
      arr9: null, 
      arrRules: [
        v => /^[0-1]/.test(v) || '!',
      ],
      answer: [],
      winner: ""  
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = [],
        this.winner =  ""     
      },
      count() {
          this.answer = [ 
                        [this.arr1, this.arr2, this.arr3], 
                        [this.arr4, this.arr5, this.arr6], 
                        [this.arr7, this.arr8, this.arr9]
                        ];

                for (let i=0 ; i <3 ; i++) {
                    for (let j=0; j <3 ; j++) {
                        (this.answer[i][j] === "1") ? this.answer[i][j] = "X" : (this.answer[i][j] === "0") ? this.answer[i][j] = "0" :  this.answer[i][j] = "" 
                        
                    }
                }


                for (let i=0 ; i <3 ; i++) {
                    if (this.answer[0][i] ===  this.answer[1][i]  &&
                            this.answer[1][i] === this.answer[2][i])  {
                                if (this.answer[0][i] == "0") {
                                    return this.winner = "0 Три в ряд по вертикали" 
                                } else {
                                    return this.winner = "Х Три в ряд по вертикали" 
                                }
                            }
                    }

                    for (let i=0 ; i <3 ; i++) {
                        if (this.answer[i].includes("X") && !this.answer[i].includes("0")) {
                            return this.winner = "Х Три в ряд по горизонтали"
                        } else if (this.answer[i].includes("0") && !this.answer[i].includes("X")) {
                            return this.winner = "0 Три в ряд по горизонтали"
                        }
                    }

                    if ((this.answer[0][0] ===  this.answer[1][1] &&
                        this.answer[1][1] === this.answer[2][2]) ||  
                        (this.answer[0][2] ===  this.answer[1][1] &&
                        this.answer[1][1] === this.answer[2][0]) && 
                        this.answer[1][1] === "0")  {
                        if (this.answer[1][1] === "0") {
                                return this.winner = "0 Три в ряд по диагонали" 
                            } else { 
                                return this.winner = "Х Три в ряд по диагонали"}
                    } 
    }
  }
}
</script>


<style scoped>

.numInput {
    min-width: 30px;
    margin-right: 2px;
}

</style>