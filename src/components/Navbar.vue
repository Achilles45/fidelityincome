<template>
  <div class="navbar__wrapper container-fluid">
      <div class="container">
          <div class="navbar__content d-flex justify-content-between align-items-center">
              <div class="logo pt-2">
                  <router-link to="/" class="logo"><h4><i class="fa fa-cubes"></i>&nbsp; Fidelity Income</h4></router-link>
              </div>
              <div class="menu">
                  <ul class="d-flex justify-content-between pt-3">
                      <li><router-link to="/" class="links">Home</router-link></li>
                      <li><router-link to="/about" class="links">About Us</router-link></li>
                      <li><router-link to="/contact" class="links">Contact Us</router-link></li>
                      <li><a href="#pricing" class="links">Investment Plans</a></li>
                      <li v-if="!user"><router-link to="/signup" class="links">Sign Up</router-link></li>
                      <li v-if="!user"><router-link to="/signin" class="login links">Sing In</router-link></li>
                        <li v-if="user" @click="logOut()" class="logout">Logout</li>
                  </ul>
              </div>
              <div @click="showNav()" class="navbar__toggler">
                  <i class="fa fa-bars"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
     data(){
        return{
            user:null
        }
    },
     created(){
        let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.user = user
            }else{
                this.user = null
            }
        })
    },
    methods:{
         logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
        showNav:function(){
            const navbarToggler = document.querySelector('.navbar__toggler');
            const nav = document.querySelector('.menu');
            const navLinks = document.querySelector('.links')
            nav.classList.toggle('show__nav');
            navLinks.classList.remove('show__nav');
        },
        fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 150) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        },
 },
 mounted(){
     this.fixNav()
 }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.navbar__wrapper{
    // background: red;
    padding: 1rem 0;
    .navbar__content{
        .logo{
            text-decoration: none;
           .logo h4 {
                color: $primary-color;
                font-weight: bold;
            }
        }
        .menu{
            ul li a{
                text-decoration: none;
                margin: 0 1.2rem;
                font-weight: bold;
                opacity: .7;
                color: $primary-color;
            }
            .login{
                border: 1px solid $primary-color;
                padding: .9rem 2rem;
                border-radius: 4px;
            }
        }
          .logout{
        background: transparent;
        // padding: .8rem 2rem;
        opacity: .7;
        margin: 0 1rem;
        font-weight: bold;
        border-radius: 3px;
        // border: 1px solid $primary-color;
        color: $primary-color;
        cursor: pointer;
    }
        .navbar__toggler{
            display: none;
            font-size: 1.5rem;
            padding-right: 1rem;
            color: $primary-color;
        }
    }
}
//Fix navigation
.fix__nav{
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 10000 !important;
    background: #fff;
    padding: .8rem 0;
    transition: all ease-in-out .5s;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.17);
}

//Show Navigation
.show__nav{
    display: block !important;
    transition: all ease-in .5s;
}
//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .menu{
        background-color: #000;
        width: 70%;
        position: absolute;
        z-index: 100;
        height: 100vh;
        bottom: 0;
        left: 0;
        top: 15%;
        display: none;
        ul{
            flex-direction: column;
            li a{
                color: #fff !important;
                line-height: 4;
            }
            .login{
                border: 1px solid #fff !important;
                color: #fff !important;
            }
        }
    }
    .navbar__toggler{
        display: block !important;
    }
}
</style>