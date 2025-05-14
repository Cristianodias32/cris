'use client';
import { WhatsappLogo, LinkedinLogo, InstagramLogo, GithubLogo, House, HandTap, Panorama, Network } from '@phosphor-icons/react';
import Image from "next/image";
import Link from "next/link";


export function Menu() {
  return (
    <div className="container-menu">

      <div className="topo">

        <div className="logo">
          <Link href="/">
            <Image
              src="/selos/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="logo-image1"
            />
          </Link>
          <Link href="/">
            <Image
              src="/selos/logo-hover.png"
              alt="Logo"
              width={200}
              height={200}
              className="logo-image"
            />
          </Link>

        </div>
      </div>

      <div className="resumo-qs">

        <div className="imagem-resumo">
          <Image
            src="/banner.png"
            alt="Logo"
            width={100}
            height={120}
            className="imagem"
          />
        </div>

        <div className="conteudo-resumo">
          <h1>Cristiano Dias</h1>
          <p>Desenvolvedor Fullstack</p>
          <p>Analista de Dados</p>
          <span>São Paulo</span>
        </div>

      </div>

      <nav className="navegacao">
        <ul className="menu">
          <li><Link href="/">
          <House size={28}  className='icon-nav'/>Home</Link></li>

          <li><Link href="/portfolio"><Panorama size={28} className='icon-nav'/>Portfolio</Link></li>
          
          <li><Link href="/sobre"><Network size={28}  className='icon-nav'/>Sobre</Link></li>

          <li><Link href="/contato"><HandTap size={28} className='icon-nav' />Contato</Link></li>
        </ul>
      </nav>

      <div className="redes-sociais">

        <ul className="redes-sociais-lista">
          <li>
            <Link href="https://www.linkedin.com/in/cristiano-dias-8b0a1b1b4/" target="_blank">
              <LinkedinLogo size={28} color="#8fdfeb" />
            </Link></li>
          <li>

            <Link href="/">
              <GithubLogo size={28} color="#8fdfeb" />
            </Link></li>

          <li>

            <Link href="/">
              <WhatsappLogo size={28} color="#1ef99c" weight="thin" />
            </Link></li>

          <li>

            <Link href="/">
              <InstagramLogo size={28} color="#8fdfeb" />
            </Link></li>
        </ul>

        <div className="ano-desenvolvimento">
          <span>© 2025</span>
        </div>
      </div>



    </div >
  );
}