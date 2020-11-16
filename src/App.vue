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
    >
      <template v-slot:activator>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Занятие 1 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </template>

   <v-divider></v-divider>

        <v-list-item v-for="item in items" router :to="item.route" :key="item.route" >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>        
        </v-list-item>

      </v-list-group>

      <v-list-group

        no-action
        sub-group
      >
      <template v-slot:activator>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Занятие 2 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </template>
   <v-divider></v-divider>
      <v-list-item v-for="item in items2" router :to="item.route" :key="item.route" >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>        
      </v-list-item>
      </v-list-group>

      <v-list-group
      no-action
      sub-group
      >
      <template v-slot:activator>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Занятие 3  
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </template>

        <v-list-item v-for="item in items3" router :to="item.route" :key="item.route" >
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
      items: [
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
      items2: [
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
         items3: [
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
      ]
    
    }),

 
}
</script>