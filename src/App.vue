<template>
  <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      
      app
    >
      <v-list>


      <v-list-group
      :value="true"
      no-action
      sub-group
      v-for="(lesson, index) in lessons" :key = index
    >
      <template v-slot:activator>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Занятие {{index + 1}} 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </template>

   <v-divider></v-divider>

        <v-list-item v-for="item in lesson" router :to="item.route" :key="item.route" >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>        
        </v-list-item>

      </v-list-group>

     
        
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Домашние задания по модулю JS</v-toolbar-title>
    </v-app-bar>
<v-main> 

  <router-view></router-view>  
</v-main>
      
  
  </v-app>
  </div>
</template>

<script>
export default {

    data: () => ({ 
      drawer: true,
      clipped: false,
      lessons : [
          [
        {   
          title: 'Задание 1',
          route: '/'
        },
        {
          title: 'Задание 2',
          route: '/task2'
        },
        {
          title: 'Задание 3',
          route: '/task3'
        },
        {
          title: 'Задание 4',
          route: '/task4'
        },
        {
          title: 'Задание 5',
          route: '/task5'
        },
              
      ],
          [
        {   
          title: 'Задание 2_1',
          route: '/task2_1'
        },
        {
          title: 'Задание 2_2',
          route: '/task2_2'
        },
        {
          title: 'Задание 2_3',
          route: '/task2_3'
        },
        {
          title: 'Задание 2_4',
          route: '/task2_4'
        },
        {
          title: 'Задание 2_5',
          route: '/task2_5'
        },
        {
          title: 'Задание 2_6',
          route: '/task2_6'
        },
       ],
          [
        {   
          title: 'Задание 3_1',
          route: '/task3_1'
        },
        {
          title: 'Задание 3_2',
          route: '/task3_2'
        },
        {
          title: 'Задание 3_3',
          route: '/task3_3'
        },
        {
          title: 'Задание 3_4',
          route: '/task3_4'
        },
        {
          title: 'Задание 3_5',
          route: '/task3_5'
        },
      ],
        [
        {   
          title: 'Задание 4_1',
          route: '/task4_1'
        },
        {
          title: 'Задание 4_2',
          route: '/task4_2'
        },
        {
          title: 'Задание 4_3',
          route: '/task4_3'
        },
        {
          title: 'Задание 4_4',
          route: '/task4_4'
        }]
        ,[{
          title: 'Задание 5_1',
          route: '/task5_1'
        },
        {
          title: 'Задание 5_2',
          route: '/task5_2'
        },
        {
          title: 'Задание 5_3',
          route: '/task5_3'
        },
        {
          title: 'Задание 5_4',
          route: '/task5_4'
        }]
        ,[{
          title: 'Задание 6_1',
          route: '/task6_1'
        },
        {
          title: 'Задание 6_2',
          route: '/task6_2'
        },
        {
          title: 'Задание 6_3',
          route: '/task6_3'
        },
        {
          title: 'Задание 6_4',
          route: '/task6_4'
        },
        {
          title: 'Задание 6_5',
          route: '/task6_5'
        }]
      ]
    }),

 
}
</script>