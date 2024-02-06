<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formualrio para cricao de uma nova tarefas">
        <input type="text" class="input" placeholder="Qual tarefa voce desejar iniciar" v-model="descricao">
      </div>
      <div class="column">
        <Temporizador @ao-temporixador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador },
  data() {
    return {
      descricao: "",
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log('finalizarTarefa');
      console.log(tempoDecorrido);
      console.log(this.descricao);
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      })
      this.descricao = "";
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>