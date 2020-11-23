<template>

  <v-row justify="center" align="center" >
    <v-card max-width="800" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 2
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="800">

  <p> 
        Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
        третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
        Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
        Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
  </p>

    <v-text-field
      v-model="start"
      :rules="numInputRules"
      required
      label="Начало"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="end"
      :rules="numInputRules"
      required
      label="Конец"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="step"
      :rules="numInputRules"
      label="Шаг"
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
    > Построить массив
    </v-btn>


  </v-form>

        </v-card-text>
         <v-card-text> 
            <p v-if="answer" class="font-weight-black" > Ваш массив {{answer}}   </p>
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      valid: true,
      start: 0,
      end: 0,
      step: "",
      numInputRules: [
        v => !!v || 'Поле не должно быть пустым',
        v => /[0-9]*/.test(v) || ' Поле должно содержать цифры',
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
            let start = parseInt(this.start);
            let end = parseInt(this.end);
            let step

            if(this.step) {
                step = parseInt(this.step);
            } 

            function makeArr(start, end, step = 1) {
                let arr = [start]
                let i = 1;
                    while (arr[arr.length-1] <= end) {
                        arr[i] = arr[i-1] + step
                        if (arr[i] + step > end) {
                            break
                        }
                        i++
                    }
                    return arr
                }
            this.answer = makeArr(start, end, step)
    }
  }
}
</script>
