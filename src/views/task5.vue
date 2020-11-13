<template>

  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
         Задание 5
      </v-card-title>

 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  width="400" >

  <p> Трёхмерное пространство:
Есть три вершины a, b и с. У каждой 
вершина заданы координатами x, y, z как 
целые числа. Нужно определить - является 
ли треугольник с заданными координатами 
прямоугольным </p>
    <v-text-field
      v-model="x"
      :rules="numRules"
      required
      label="Координата x"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="y"
      :rules="numRules"
      required
      label="Координата y"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="z"
      :rules="numRules"
      required
      label="Координата z"
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
          <p v-if="answer" class="font-weight-black" > Этот треугольник {{answer}} прямоугольным </p>
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
      x: "",
      y: "",
      z: '',
      numRules: [
        v => !!v || 'Введите число',
        v => !isNaN(Number(v)) || 'Вы ввели что-то не то ',
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
          if ( this.x*this.x + this.y*this.y === this.z*this.z || 
               this.y*this.y + this.z*this.z === this.x*this.x || 
               this.z*this.z + this.x*this.x === this.y*this.y )
           { 
            return this.answer = "является";
          } else {  
             return this.answer = "не является";
          }
      }
    }
  }
</script>
