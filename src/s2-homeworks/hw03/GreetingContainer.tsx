import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // to fix any
    addUserCallback: (name: string) => void // to fix any
}


export const pureOnBlur = (name: string, setError: Function) => {
    !name.trim().length ? setError('Ошибка! Введите имя!') : setError('')
    // если имя пустое - показать ошибку
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: Function) => {
    const trimmedName = name.trim()
    if (trimmedName) {
        addUserCallback(trimmedName)
        setError('')
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: Function) => {
    if (e.key === 'Enter') {
        addUser()
    }// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // to fix any
    const [error, setError] = useState<string>('') // to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {  // to fix any
        setName(e.currentTarget.value);
        setError("");
        // to fix
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // to fix
    const lastUserName = users.length ? users[users.length - 1].name : ''  // to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}

        />
    )
}

export default GreetingContainer
