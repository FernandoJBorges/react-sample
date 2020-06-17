import http from './../helpers/api';

import {showMessage} from './messageReducer'

const ACTIONS = {
    LIST: 'LIST_TASK',
    ADD: 'ADD_TASK',
    DELETE: 'DELETE_TASK',
    UPDATE_STATUS: 'UPDATE_STATUS_TASK'
}

const STATE_INITIAL = {
    tasks: []
}


export const taskReducer = (state = STATE_INITIAL, action) => {

    switch (action.type) {
        case ACTIONS.LIST:
            return {...state,tasks: action.tasks}
        case ACTIONS.ADD:
             return {...state,task: [...action.tasks, action.task]}
        case ACTIONS.DELETE:
                const id = action.id;
                const tasksFilter = state.tasks.filter(e => e.id !== id)
            return {...state, tasks: tasksFilter}
        case ACTIONS.UPDATE_STATUS:
            const lista = [...state.tasks]
            lista.forEach(e => {
                console.log('nao entrouuuuuuu')
                if(e.id === action.idTask){
                e.done = true;
                console.log('entrouuuuuuu')
                }
            })
            return {...state, tasks: lista}
            default:
             return state;
             }
}

export function findByAll(){
return dispatch => {
    http.get('/tarefas').then(response => {
      
          dispatch({
              type: ACTIONS.LIST,
              tasks : response.data
          })
          
        }).catch(erro => {
          console.log(erro)
        })
    }
}

export function save(task){
    return dispatch => {
        http.post('/tarefas', task).then(response => {
                dispatch([{
                    type: ACTIONS.ADD,
                    task : response.data
                },showMessage('rafafa ')])
            }).catch(erro => {
              console.log(erro)
           })
       }
    }

    export function deleteItem(idTask){
        return dispatch => {
            http.delete(`/tarefas/${idTask}`).then(response => {
                    dispatch({
                        type: ACTIONS.DELETE,
                        task : response.data
                    })
                }).catch(erro => {
                  console.log(erro)
               })
           }
        }

        export function updateStatus(idTask){
            return dispatch => {
                http.patch(`/tarefas/${idTask}`,null).then(response => {
                        dispatch({
                            type: ACTIONS.UPDATE_STATUS,
                            id: idTask
                        })
                    }).catch(erro => {
                      console.log(erro)
                   })
               }
            }