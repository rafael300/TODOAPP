import React, { useEffect, useState } from 'react'
import axios from 'axios'
import todo from './todo'
import {RemoveButton, DoneButton, RefreshButton, MainList, Main, Block, CleanAllDiv, CleanAll, Division, Task} from '../styled/todoListStyled'
import './todoList.css'

export default props=>{
    const [dados, setDados] = useState([])

    useEffect(()=>{
        axios.get('https://applicationtasklist.herokuapp.com/app/task').then((item)=>{ 
            setDados(item.data)
        })
    }, [dados])

    useEffect(()=>{
        axios.get('https://applicationtasklist.herokuapp.com/app/task').then((item)=>{ 
            setDados(item.data)
        })
    }, [])

    const deletar = ()=>{
        dados.map((res)=>{
            axios.delete(`https://applicationtasklist.herokuapp.com/app/task/${res._id}`)
        })
    }

    return(
        <div>
            <Main>
                {dados.map(res=>{
                    return(
                        <MainList key={res._id}>
                            <Block>
                                <div>
                                    <Task className={res.done ? "Done" : ''}>{res.task}</Task>
                                </div>
                                <div>
                                    <RemoveButton onClick={()=>{props.remove(res)}}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </RemoveButton>
                                    <DoneButton onClick={()=>{props.done(res)}}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                        </svg>
                                    </DoneButton>
                                    <RefreshButton onClick={()=>{props.return(res)}}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                        </svg>
                                    </RefreshButton>
                                </div>
                                <Division></Division>
                            </Block>
                        </MainList>
                    )
                })}
            </Main>
            <CleanAllDiv>
                <CleanAll onClick={deletar}>Limpar Lista</CleanAll>
            </CleanAllDiv>
        </div>
    )
}