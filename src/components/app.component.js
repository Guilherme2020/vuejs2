import TimeListComponent from './time-list.component'
import TimeJogoComponent from './time-jogo.component'
import event from '../event'
export default {
    components:{
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent
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
             </div>
        </div>    
   `,
   mounted(){ 
      event.$on('show-time-list',() => {
        this.view = 'tabela';
      }); 
      event.$on('show-time-novo-jogo',() => {
        this.view = 'novojogo'; 
      }); 

   },
    data(){
        return{
           view: 'tabela'
        };
    },
    methods:{
     
        showView(view){
            this.view = view;
        }
    
    }
};
