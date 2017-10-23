import TimeListComponent from './time-list.component'
import TimeJogoComponent from './time-jogo.component'
import TimeZonaComponent from './time-zona.component'
import store from '../store';

export default {
    components:{
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
        'time-zona': TimeZonaComponent
    },
    template: `
        <div class="container">
             <div class="row">
                <h3>Campeonato Brasileiro - Série A - 2016</h3>
              
               <div v-show="view == 'tabela'">
                    <time-list></time-list>
               </div>
                <div v-show="view == 'novojogo'">
                   <time-jogo></time-jogo>
                </div>
                <div v-show="view == 'zona'">
                    <time-zona></time-zona>
                </div>
             </div>
        </div>    
   `,
//    mounted(){ 
//       event.$on('show-time-list',() => {
//         this.view = 'tabela';
//       }); 
//       event.$on('show-time-novo-jogo',() => {
//         this.view = 'novojogo'; 
//       }); 
//     },
    // data(){
    //     return{
    //        view: 'tabela'
    //     };
    // },
    computed: {
        view(){
            return store.state.view;
            // return this.$store.state.view;
        }
    },
    methods:{
     
        showView(view){
            this.view = view;
        }
    
    }
};
