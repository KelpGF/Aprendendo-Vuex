<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="E-mail"
            >
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              placeholder="Senha"
              class="form-control"
              v-model="form.password"
            >
          </div>

          <button class="btn btn-primary w-100">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return ({
      form: {
        email: 'mblader0@umich.edu',
        password: 'pOKJof0PWZ'
      }
    })
  },

  methods: {
    ...mapActions('auth', ['ActionLogin']),

    submit: async function () {
      try {
        await this.ActionLogin(this.form)

        this.$router.push({ name: 'home' })
      } catch (error) {
        alert(error.data ? error.data.message : 'Não foi possível realizar o login!')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 30%;
  }
}
</style>
