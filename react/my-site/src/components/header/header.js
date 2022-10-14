import './header.css'

export const Header = (props) => {
    const letter = props.letter
    const firstName = props.name.split(' ')[0]
    const lastName = props.name.split(' ')[1]

    return (
        <div className='header'>
            <div className='menu-start'>
                <p id='letter'><b>{letter}</b></p>
                <p id='name'><b>{firstName}</b> {lastName}</p>
            </div>   
            <nav className='menu-end'> 
                <ul>
                <li>
                    <a href='#'>Página inicial
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='#'>Sobre
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='#'>Contato
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>
                        </svg>
                    </a>
                </li>
                </ul>    
            </nav>
        </div>
    )
}