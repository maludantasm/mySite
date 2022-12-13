import './App.css';
import { GlobalStyle, AppStyle, AppBodyContainer } from './appStyle';

import Header from './components/header';
import BodyComponent from './components/bodyComponents';
import Report from './components/report';
import Footer from './components/footer';

import pfp from './public/imgs/person.jpg';

function App() {
    return (
        <>
                <AppStyle>
                    <div className='header-container'>
                        <Header letter='M' name='Maria Marques'/>
                    </div>
                    <AppBodyContainer>
                        <Report img={pfp} occupation='Frontend-developer' name='Maria Marques' description='Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.'/>
                        <BodyComponent type='formacao' title='Minha Formação'/>
                        <BodyComponent type='what-i-do' title='O que eu faço?'/>
                    </AppBodyContainer>
                    <div className='footer-container'>
                        <Footer/>
                    </div>
                </AppStyle>
        </>
  );
}

export default App;