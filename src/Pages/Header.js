import React from 'react'

import '../Styles/Header.css'

const Header = () => {
    return (
        <div className='Header row m-0 p-2'>
            <div className='col-4'>Logo</div>
            <div className='col-2 menu' onClick={() => window.location.href='/Home'}>Home</div>
            <div className='col-2 menu' onClick={() => window.location.href='/CadastrarRemedio'}>Cadastrar Remédio</div>
            <div className='col-2 menu' onClick={() => window.location.href='/ConsultarRemedio'}>Consultar Remédio</div>
            <div className='col-2 menu' onClick={() => window.location.href='/Historico'}>Histórico</div>

        </div>
    )
}

export default Header