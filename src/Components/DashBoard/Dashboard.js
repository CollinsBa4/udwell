import React from 'react'
import './DashBoard.css'
import Container from './ProgressCards/Container'
import CharContainer from './Graph/Container'
export default function Dashboard() {
    return (
        <main className="main">
            <Container />
            <CharContainer />
        </main>
    )
}
