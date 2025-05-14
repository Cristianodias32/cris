'use client;'
import Link from "next/link";
import Image from "next/image";
import { CaretRight } from '@phosphor-icons/react';




export function Projetos() {
    return (
        <div className="container-projetos">

            {/* <div className="topo-projetos">
                <Link href="/projetos" className="link-github">Projetos</Link>
            </div> */}

            <div className="projetos">

                <Link href="https://oportfolio.com.br/" target="_blank" className="projetos-link" data-title="2023">
                    <Image
                        src="/oportfolio.png"
                        alt="site da oPortfolio"
                        width={480}
                        height={400}
                        className="projetos-image1" />

                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>
                </Link>

                <Link href="https://studiorenatafranca.com.br/" target="_blank" className="projetos-link" data-title="2024">
                    <Image
                        src="/studio-renata-franca.png"
                        alt="Studio Renata França"
                        width={480}
                        height={400}
                        className="projetos-image1" />                        
                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>

                </Link>

                <Link href="https://boutiqueglamour.com.br/" target="_blank" className="projetos-link">
                    <Image
                        src="/boutique-glamour.png"
                        alt="Boutique Glamour"
                        width={480}
                        height={400}
                        className="projetos-image1" />

                        
                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>
                </Link>

                <Link href="https://cursos.oportfolio.com.br/" target="_blank" className="projetos-link">
                    <Image
                        src="/cursos.oportfolio.png"
                        alt="cursos oPortfolio"
                        width={480}
                        height={400}
                        className="projetos-image1" />

                        
                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>
                </Link>

                <Link href="/projetos" className="projetos-link">
                    <Image
                        src="/avatar-perfil.jpg"
                        alt="Avatar do perfil"
                        width={480}
                        height={400}
                        className="projetos-image1" />

                        
                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>
                </Link>

                <Link href="/projetos" className="projetos-link">
                    <Image
                        src="/avatar-perfil.jpg"
                        alt="Avatar do perfil"
                        width={480}
                        height={400}
                        className="projetos-image1" />

                        
                    <div className="titulo-projeto">
                        <div className="texto">
                            <h3>Retro Remix</h3>
                            <span>Ux Design</span>
                        </div>

                        <div className="seta" >
                            <Image
                                src="icons/caret-right.svg"
                                alt="seta-imagem1"
                                width={20}
                                height={20}
                                className="seta-image" />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}