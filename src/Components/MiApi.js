import React, { useState, useEffect } from 'react'

const Buscador = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const URL = 'http://hp-api.herokuapp.com/api/characters/students'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        showData()
    }, [])


    return (
        <div>
            <input value={search} onChange={searcher} type="text" placeholder='Buscar Personaje' className='form-control' />
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <div>
                    <p className='subtitulo'>
                        <p>Estudiantes</p>
                    </p>
                </div>
                <main className="main" >
                    <div className='card-contenedor'>
                        {results.map((characters) => (
                            <div className="card" key={characters.id}>
                                <div> {characters.image}</div>

                                <div>Nombre: {characters.name}</div>
                                <div>Casa: {characters.house}</div>
                                <div>Genero: {characters.gender}</div>
                                <div>Especie: {characters.species}</div>
                                <div>Fecha de Nac.: {characters.dateOfBirth}</div>
                                <div>Patronus: {characters.patronus}</div>

                            </div>
                            
                    ))}
                    </div>
                </main>
            </table>
        </div>
    )
}
export default Buscador
