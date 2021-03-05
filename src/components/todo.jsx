import React, { useEffect, useState } from 'react'
import Form from './todoForm'
import List from './todoList'
import axios from 'axios'
import {Main, Title} from '../styled/todoStyled'

export default props=>{
    const [tarefa, setTask] = useState('')

    const addtask = () =>{
            if(tarefa == '' || tarefa == ' ' || tarefa == '  '  || tarefa== '   '){
                window.alert("A tarefa não pode ser vazia!")
            }else{
                return(
                    axios.post('https://applicationtasklist.herokuapp.com/app/task', {task: tarefa}).then(
                        console.log("Adicionado!")
                    ).catch((err)=>{console.log(err)})
                );

            }
    }

    const remove = (res)=>{
        axios.delete(`https://applicationtasklist.herokuapp.com/app/task/${res._id}`)
    }

    const taskchange = (e)=>{
        setTask(e.target.value)
    }

    const taskdone= (res)=>{
        axios.put(`https://applicationtasklist.herokuapp.com/app/task/${res._id}`, {done: true})}

    const returntask = (res)=>{
        axios.put(`https://applicationtasklist.herokuapp.com/app/task/${res._id}`, {done: false})
    }

    return(
        <Main>
            <Title>Lista de Tarefas</Title><br></br>
            <Form addt={addtask} add={addtask} change={taskchange}/>
            <List return={returntask} done={taskdone} remove={remove}/>
        </Main>
    )
}