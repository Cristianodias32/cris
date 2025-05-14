"use client";
import Image from "next/image";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function Sobre() {
    return (
        <div className="container-sobre">

            <div className="img-sobre">
                <Image
                    src="/avatar-perfil.jpg"
                    alt="Avatar do perfil"
                    width={300}
                    height={400}
                    className="avatar-perfil"
                />
            </div>

            <div className="conteudo-sobre">

                <div className="topo-conteudo-sobre">

                    <div className="freela">
                        Disponível para Trabalho Freelance
                    </div>

                    <div className="data-dia">
                        Teste de Conteudo de data do dia
                    </div>

                    <Link
                        href="/"
                        className="link-contato-topo"
                    >Entre em Contato Comigo</Link>
                </div>

                <div className="sobre">

                    <div className="texto-sobre"></div>

                    <div className="animacao-sobre">
                        <DotLottieReact
                            src="https://lottie.host/01716371-9add-483b-87d3-01f73878335b/xW9NTznGp0.lottie"
                            loop
                            autoplay
                        className="animacao"/>
                    </div>
                </div>
            </div>

        </div>
    );
}