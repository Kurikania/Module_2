<template>
    <div>
        <h2>Справка о студенте {{students[index].lastName}} </h2>
        <v-list>
        <v-list-item> Полное имя {{students[index].name}} {{students[index].lastName}} </v-list-item>
        <v-list-item> Возраст {{students[index].age}} лет </v-list-item>
        <v-list-item> Увлечения </v-list-item>
        <v-list-item v-for="(hobby, index) in students[index].hobbies" :key="index"> {{hobby}} </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    name: "Student",
    props: ["students", "index"]
}
</script>

<style scoped>

</style>