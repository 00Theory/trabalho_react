import './EspacoJogos.css'
import Jogo from '../Jogo'

const EspacoJogos = (props) => {

    const jogos = [
        {
            titulo: 'Não Nomeado',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/grazinha_bkg.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        },
        {
            titulo: 'Dash and Get Out',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/bkgGiga2.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        },
        {
            titulo: 'Square Problems',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/bkgGiga2.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        },
        {
            titulo: 'Pech',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/bkgGiga2.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        },
        {
            titulo: 'Save Vein',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/bkgGiga2.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        },
        {
            titulo: 'Lights Come Back',
            texto1:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>,
            texto2:
                <>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Nesse jogo, você pode fazer isso, aquilo e outros. O gênero xxxxxx reina aqui. Em
                        sua exploração, fale com xxxxxs e com yyyyyys para ajudá-lo em cada passo.
                        Enfrente xxxxxxxxx no intuito de obter xxxxxxx. Solucione puzzles a partir de seus
                        xxxxxxx e libere novos zzzzzzzzz.
                    </p>
                    <p> Em um mundo onde xxxxxxxx, descubra o que aconteceu ao xxxxxxxx para ajudar
                        os xxxxxxxxxxxx a melhorem a situação atual do xxxxxxxxx. Conte com a ajuda de
                        diversos xxxxxxx em sua jornada. Desvende mistérios que cercam as ruas e
                        florestas de xxxxxxxxxx.
                    </p>
                    <p>
                        Lembre-se sempre da ffffffffffffff. Ela sempre fornecerá ...................... e guiará você.
                    </p>
                </>
            ,
            imagem1: './imagens/bkgGiga2.png',
            imagem2: './imagens/bkgGiga2.png',
            imagemMeio: './imagens/grazinha_bkg.png',
        }
    ]
    debugger
    return (

        jogos.map(jogo =>
            
            props.aparecerJogo === jogo.titulo && <section className='espaco-jogos'>
            <div>
                {
                    <Jogo
                        key={jogo.titulo}
                        titulo={jogo.titulo}
                        texto1={jogo.texto1}
                        texto2={jogo.texto2}
                        imagem1={jogo.imagem1}
                        imagem2={jogo.imagem2}
                        imagemMeio={jogo.imagemMeio}
                    />
                }
                
            </div>
        </section>
    )
    )


    /*
        if (props.aparecerJogo === jogos[0].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[0].titulo}
                                titulo={jogos[0].titulo}
                                texto1={jogos[0].texto1}
                                texto2={jogos[0].texto2}
                                imagem1={jogos[0].imagem1}
                                imagem2={jogos[0].imagem2}
                                imagemMeio={jogos[0].imagemMeio}
                            />
                    </div>
                </section>
            )
        }
    
        else if (props.aparecerJogo === jogos[1].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[1].titulo}
                                titulo={jogos[1].titulo}
                                texto1={jogos[1].texto1}
                                texto2={jogos[1].texto2}
                                imagem1={jogos[1].imagem1}
                                imagem2={jogos[1].imagem2}
                                imagemMeio={jogos[1].imagemMeio}
                            />
                    </div>
        
                </section>
            )
        }
    
        else if (props.aparecerJogo === jogos[2].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[2].titulo}
                                titulo={jogos[2].titulo}
                                texto1={jogos[2].texto1}
                                texto2={jogos[2].texto2}
                                imagem1={jogos[2].imagem1}
                                imagem2={jogos[2].imagem2}
                                imagemMeio={jogos[2].imagemMeio}
                            />
                    </div>
        
                </section>
            )
        }
    
        else if (props.aparecerJogo === jogos[3].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[3].titulo}
                                titulo={jogos[3].titulo}
                                texto1={jogos[3].texto1}
                                texto2={jogos[3].texto2}
                                imagem1={jogos[3].imagem1}
                                imagem2={jogos[3].imagem2}
                                imagemMeio={jogos[3].imagemMeio}
                            />
                    </div>
        
                </section>
            )
        }
    
        else if (props.aparecerJogo === jogos[4].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[4].titulo}
                                titulo={jogos[4].titulo}
                                texto1={jogos[4].texto1}
                                texto2={jogos[4].texto2}
                                imagem1={jogos[4].imagem1}
                                imagem2={jogos[4].imagem2}
                                imagemMeio={jogos[4].imagemMeio}
                            />
                    </div>
        
                </section>
            )
        }
    
        else if (props.aparecerJogo === jogos[5].titulo) {
            return (
                <section className='espaco-jogos'>
                    <div>
                            <Jogo
                                key={jogos[5].titulo}
                                titulo={jogos[5].titulo}
                                texto1={jogos[5].texto1}
                                texto2={jogos[5].texto2}
                                imagem1={jogos[5].imagem1}
                                imagem2={jogos[5].imagem2}
                                imagemMeio={jogos[5].imagemMeio}
                            />
                    </div>
        
                </section>
            )
        }
        */

}

export default EspacoJogos