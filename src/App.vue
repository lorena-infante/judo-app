<template>
  <TheHeader></TheHeader>
  <TheRegisterForm></TheRegisterForm>
  <TheFooter></TheFooter>
</template>
  
<script>
  import TheHeader from './components/header/TheHeader.vue';
  import TheFooter from './components/footer/TheFooter.vue';
  import TheRegisterForm from './components/register_form/TheRegisterForm.vue';

  export default {
    components:{
      TheHeader,
      TheFooter,
      TheRegisterForm
    }
  }

</script>