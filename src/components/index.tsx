import {Container} from './styles'

export function Header() {
    return(
        <Container>
            <div className ="Container" >
                <h1></h1>
                <nav>
                    <a href="">Produtos</a>
                    <a href="">Mais produtos</a>
                    <a href="">Carrinho</a>
                </nav>
            </div>
        </Container>
    )
}