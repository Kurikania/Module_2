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
    Нечёткий поиск:
Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
перепутанной буквой, например: "Срида". Написать программу, которая 
позволяет с использованием регулярного выражения найти в строке-словаре 
введённое пользователем слово (не смотря на одну ошибку в слове) и 
вывести исправленное слово пользователю, например: "Среда".
  </p>

    <v-text-field
      v-model="word"
      :rules="wordRules"
      required
      label="Введите день недели"
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
      @click="count()"
    > Вы хотели сказать
    </v-btn>

  </v-form>

        </v-card-text>
         <v-card-text> 
         {{answer}}
         </v-card-text>
      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src


export default {
data: () => ({
      valid: true,
      answer: "",
      word: "",
      wordRules: [
        v => !!v || 'Поле не должно быть пустым',
        v => /[0-9]*/.test(v) || ' Поле должно содержать цифры',
      ]
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
        // Решение очень незамысловатое, но много писанины. Хотелось бы посмотреть более оптимальное написание 
        if(/([\s\S]онедельник)|(П[\s\S]недельник)|(По[\s\S]едельник)|(Пон[\s\S]дельник)|(Поне[\s\S]ельник)|(Понед[\s\S]ьник)|(Понеде[\s\S]ьник)|(Понедел[\s\S]ник)|(Понедель[\s\S]ик)|(Понедельн[\s\S]к)|(Понедельни[\s\S])/.test(this.word)) { 
          this.answer = "Понедельник"
        } 
        else if  (/([\s\S]торник)|(В[\s\S]орник)|(Вт[\s\S]рник)|(Вто[\s\S]ник)|(Втор[\s\S]ик)|(Вторн[\s\S]к)|(Вторни[\s\S])/.test(this.word)) { 
          this.answer = "Вторник"
        }
        else if(/([\s\S]реда)|(С[\s\S]еда)|(Ср[\s\S]да)|(Срe[\s\S]а)|(Срeд[\s\S])/.test(this.word)) { 
          this.answer = "Среда"
        }
        else if(/([\s\S]етверг)|(Ч[\s\S]тверг)|(Че[\s\S]верг)|(Чет[\s\S]ерг)|(Четв[\s\S]рг)|(Четве[\s\S]г)|(Четвер[\s\S])/.test(this.word)) { 
          this.answer = "Четверг"
        }
        else if(/([\s\S]ятница)|(П[\s\S]тница)|(Пя[\s\S]ница)|(Пят[\s\S]ица)|(Пятн[\s\S]ца)|(Пятни[\s\S]а)|(Пятниц[\s\S])/.test(this.word)) { 
          this.answer = "Пятница"
        }
        else if(/([\s\S]уббота)|(С[\s\S]ббота)|(Су[\s\S]бота)|(Суб[\s\S]ота)|(Субб[\s\S]та)|(Суббо[\s\S]а)|(Суббот[\s\S])/.test(this.word)) { 
          this.answer = "Суббота"
        }
        else if(/([\s\S]оскресенье)|(В[\s\S]скресенье)|(Во[\s\S]кресенье)|(Вос[\s\S]ресенье)|(Воск[\s\S]есенье)|(Воскр[\s\S]сенье)|(Воскре[\s\S]енье)|(Воскрес[\s\S]нье)|(Воскресенье)|(Воскресе[\s\S]ье)|(Воскресен[\s\S]е)|(Воскресень[\s\S])/.test(this.word)) { 
          this.answer = "Воскресенье"
        } 
        else{
          this.answer = "Совсем непонятно"
        }

      }
  }
}
</script>
