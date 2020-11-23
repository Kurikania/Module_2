
<template>
<div>
  <v-row justify="center" align="center" >
    <v-card max-width="800" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 3
      </v-card-title>
  <p> 
        Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.
  </p>
<v-expansion-panels>
  <v-expansion-panel>
    <v-expansion-panel-header>
        Добавить студента
      </v-expansion-panel-header>
      <v-expansion-panel-content>
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  max-width="800">


    <v-text-field
      v-model="name"
      :rules="inputRules"
      required
      label="Имя"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :rules="inputRules"
      required
      label="Фамилия"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="age"
      :rules="numInputRules"
      required
      label="Возраст"
      clearable
    ></v-text-field>

    <v-text-field
      v-model="hobbies"
      :rules="hobbiesInputRules"
      label="Увлечения"
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
      @click="addStudent"
    > Добавить студента
    </v-btn>

  </v-form>
      </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
        </v-card-text>

      </v-card>
</v-row>
<v-row v-if="students.length > 0">
  <v-col align-self="center" >
    <v-simple-table v-if = "students" style="width: 60%; margin: auto" >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Last Name
          </th>
          <th class="text-left">
            Options
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(student, index) in students"
          :key="index"
        >
          <td>{{ student.name }}</td>
          <td>{{ student.lastName }}</td>
          <td> <button class="btn" @click="openModal(index)">info</button> </td>
        </tr>
        <tr>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>
  </v-row>
        <div class = "trg" v-show ="modalOpen"> </div>
        <div class = "modal"  v-show = "modalOpen">            
                <div class="container">
                  <Student  :students="students" :index="index" />                 
                </div>
                <button class="btn" @click.prevent="openModal" >Закрыть</button>
        </div>
</div> 
</template>

<script>
// @ is an alias to /src

import Student from "../../components/Student"
export default {
    data: () => ({
      modalOpen: false,
      valid: true,
      index: 0,
      students: [
        {
            name: "Иван",
            lastName: "Иванов",
            hobbies: ["гитара", "походы", "рыбалка"],
            age: 26
        }
      ],
      name: "",
      lastName: "",
      age: 0,
      hobbies: [], 
      numInputRules: [
        v => !!v || 'Поле не должно быть пустым',
        v => /[0-9]*/.test(v) || ' Поле должно содержать цифры',
      ],
      inputRules: [
        v => !!v || 'Поле не должно быть пустым',
      ],
      hobbiesInputRules: [
        v => !!v || 'Поле не должно быть пустым',
        v => /^[,а-яА-Я]+$/.test(v) || 'Массив должен содержать только слова и запятые',
      ]
    }),
    components: {
      Student
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset(),
        this.answer = ""    
      },
      openModal(index) {
      this.modalOpen = !this.modalOpen;
      this.index = index
      },
      addStudent() {
        this.hobbies = this.hobbies.split(",")
        this.age = parseFloat(this.age)
          let student = {
            name: this.name,
            lastName: this.lastName,
            hobbies: this.hobbies,
            age: this.age
          }
          this.students.push(student);
          this.showStudent(student);
            this.name =""
            this.lastName = ""
            this.hobbies = ""
            this.age = 0
    }, 
    showStudent(student) {
      console.log(`Успешно добавлен студент ${student.name}  ${student.age} ${student.hobbies}`)
    }
  }
}
</script>

<style scoped>
.trg {
    display: block;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .modal {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    z-index: 2;
    top:55px;
    left:10%;
    right:10%;
    bottom:55px;
    box-shadow: 2px 0 1 1px black; 
    padding: 30px;
    background-color: rgb(255, 255, 255);
    overflow: auto;
}

</style>
