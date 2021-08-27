import React, { Component } from 'react'

const useContext=React.createContext('text');

console.log(useContext)
const UserProvider=useContext.Provider

const UserConsumer=useContext.Consumer;

export {UserProvider, UserConsumer}