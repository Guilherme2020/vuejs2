// import {Time} from '../time';


import _ from 'lodash';
// import event from '../event';
import store from '../store';

export default {
    template: `
               <div>
                    <a class="btn btn-primary" @click="showNovoJogo">Novo jogo</a>
                    <br/><br/>
                        <input type="text" class="form-control" v-model="filter">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th v-for="coluna in colunas">
                                    <a href="#" @click.prevent="sortBy(coluna)">{{coluna | ucwords}}</a>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="time in timesFiltered">
                                    <td>
                                        <img :src="time.escudo" style="height: 30px; width: 30px;">
                                        <strong>{{time.nome}}</strong>
                                    </td>
                                    <td>{{time.pontos}}</td>
                                    <td>{{time.gm}}</td>
                                    <td>{{time.gs}}</td>
                                    <td>{{time | saldo}}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            
   `,
   created(){
        store.dispatch('load-times');
   },
    data(){
        return{
            //  novoJogo:{
            //         casa:{
            //             time: null,
            //             gols:0
            //         },
            //         fora: {
            //             time: null,
            //             gols: 0 
            //         }
            // },
             
            order:{
                keys: ['pontos','gm','gs'],
                sort: ['desc','desc','asc']
            },
            colunas:[
                'nome','pontos','gm','gs', 'saldo'
            ],
            filter:'',
            
        };
    },
   
    methods:{

        showNovoJogo(){
            // let indexCasa = Math.floor(Math.random() * 20),
            //     indexFora = Math.floor(Math.random() * 20);

            // this.novoJogo.casa.time = this.times[indexCasa];
            // this.novoJogo.casa.gols = 0;
            // this.novoJogo.fora.time = this.times[indexFora];
            // this.novoJogo.fora.gols = 0;
            // this.$parent.showView('novojogo');
            // event.$emit('show-time-novo-jogo');
            // event.$emit('get-times',this.times);
            // this.$parent.$children[1].initJogo(this.times);
            // setTimeout(() => {
               
            // });
             store.commit('show-time-novojogo');
        },

        sortBy(coluna){
            this.order.keys = coluna;

            this.order.sort = this.order.sort === 'desc' ? 'asc': 'desc';

        }

    },
    computed:{
        times(){
            // return store.state.times;
            return this.$store.state.times;
        },
        timesFiltered(){
            // return _.orderBy(this.times, this.order.keys,this.order.sort);
            // return _.orderBy(this.times, this.order.keys, this.order.sort);
            //
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao, item => {
                return item.nome.toLowerCase().indexOf(this.filter.toLowerCase()) >=0;
            });
        }
    }

};
