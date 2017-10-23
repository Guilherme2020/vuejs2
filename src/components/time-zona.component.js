// import {Time} from '../time';
// import event from '../event';

import store from '../store';

export default {
    template: `
               <div>
                        <h3>Times que Vao para a libetadores</h3>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th>Nome </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="time in timesLibertadores">
                                    <td>
                                        <img :src="time.escudo" style="height: 30px; width: 30px;">
                                        <strong>{{time.nome}}</strong>
                                    </td>
                                  
                                </tr>
                            </tbody>
                        </table>
                        <h3>Times que Serão Rebaixados</h3>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th>Nome </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="time in timesRebaixados">
                                    <td>
                                        <img :src="time.escudo" style="height: 30px; width: 30px;">
                                        <strong>{{time.nome}}</strong>
                                    </td>
                                  
                                </tr>
                            </tbody>
                        </table>    
                </div>
            
   `,
   
   
    
    computed:{
        timesLibertadores(){
            // return store.state.times;
            return store.getters.timesLibertadores;
        },
       timesRebaixados(){
            return store.getters.timesRebaixados;
       }
    }

};
