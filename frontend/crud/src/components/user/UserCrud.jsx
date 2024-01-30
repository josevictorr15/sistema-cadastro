import React from 'react'
import { Component } from 'react'
import Main from '../template/Main.jsx'
import axios from 'axios'

const baseUrl = "http://localhost:5173/users"
const initialState = {
    user: "", email: "", list: []
}

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

export default class UserCrud extends Component {
    state = { ...initialState }

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? "put" : "post"
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(response => {
                const list = this.getUpdateList(response.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}> 
                Cadastro de Usuário
            </Main>
        )
    }
}