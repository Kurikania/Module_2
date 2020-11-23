
<template>
  <v-row justify="center" align="center" >
    <v-card max-width="400" mt-5>
      <v-card-text>
      <v-card-title>
        Задание 5
      </v-card-title>
  <p> 
Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. 
  </p>
     <v-btn
      color="success"
      class="mr-4"
      @click="count()"
    > Отсортировать!
    </v-btn>

     <v-btn
      class="mr-4"
      @click="unsort()"
    > Раскидать!
    </v-btn>

        </v-card-text>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            Count
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in arr"
          :key="index"
        >
          <td>{{ item.price }}</td>
          <td>{{ item.count}}</td>
        </tr>
      </tbody>
    </template>
   </v-simple-table>

      </v-card>
  </v-row>

</template>

<script>
// @ is an alias to /src
export default {
    data: () => ({
      valid: true,
      answer: "",
      arr: [ 
        { 'price' : 10, 'count' : 2 },
        { 'price' : 5, 'count' : 5}, 
        { 'price' : 8, 'count' : 5 }, 
        { 'price' : 12, 'count' : 4 }, 
        { 'price' : 8, 'count' : 4}
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
         this.arr.sort(function(a, b) {
              return a.price - b.price;
            })
        },       
      unsort() {    
         this.arr.sort(function() {
              return 0.5 - Math.random();
            })
        },       
  }
}
</script>
