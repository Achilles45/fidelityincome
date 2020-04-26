<template>
  <div class="signin">
      <div class="form__wrapper">
          <h2>Welcome Back!</h2>
          <p>Signin to continue to your dashboard</p>
          <form @submit.prevent="login()">
              <div class="form-group">
                  <label for="">Email Address</label>
                  <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
              </div>
               <div class="form-group">
                  <label for="">Password</label>
                  <input type="password" class="form-control" v-model="password">
              </div>
               <div v-if="err" class="alert alert-danger">
                 {{ err }}
             </div>
              <button type="submit" class="form__btn">Sign In</button>
                    <div class="bottom__text text-center">
                  <p>Yet to have an account? <router-link to="/signup" class="login_link">Sign Up</router-link></p>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data(){
    return{
        email:null,
        password: null,
        err:null
    }
},
methods:{
    login(){
        //Check if the form has been filled out
        if(!this.email || !this.password){
            this.err = 'Please provide your credentials'
        }else{
            //Sign in the user to his/her dahboard
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((cred) =>{
                   this.$router.push({name: 'dashboard'})
                   console.log('Successful')
               }).catch(err =>{
                   this.err = 'Your credentials did not match. Please try again'
               })
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signin{
    background: $primary-color;
    height: 100vh;
    padding: 8rem 1rem;
    // color: #fff;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    .form__wrapper{
        max-width: 400px;
        background: #fff;
        padding: 3rem;
        border-radius: 4px;
        margin:  auto;
        h2{
            font-weight: bold;
            color: $primary-color;
        }
        p{
            color: #627081;
            font-weight: 400;
            font-size: .9rem;
        }
        form{
            padding-top: 1rem;
            label{
                color: #627081;
                font-weight: bold;
                font-size: .8rem;
                // opacity: .8;
            }
            input{
                height: 3rem;
                box-shadow: none;
            }
            .form__btn{
                background: $primary-color;
                color:#fff;
                border: none;
                padding: .86rem 2rem;
                border-radius: 4px;
                width: 100%;
            }
        }
           .bottom__text{
                padding-top: 1rem;
                p{
                    color: #627081;
                    font-size: .9rem;
                    font-weight: 400;
                    opacity: .8;
                }
               a{
                   color: $primary-color;
                   font-weight: bolder;
               }
            }
    }
}
</style>