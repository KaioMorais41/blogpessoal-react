import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog pessoal Generation | Copyright: {data}
          </p>

          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/kaio-morais-araujo/?skipRedirect=true"
              target="_blank"
            >
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/kaio_moraaiis/" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a
              href="https://www.facebook.com/login/web/?cuid=AYg2j9vuJx0E5FYCPIC5sjc9i2TaN_2hts5uYUArM4d6OAogodQr3Be7OFnnqSiRfz5QuXCQKBde0szAB3zXRg19AJNVLPuBmpog5Bat4uiCAQ&e=1348092&next"
              target="_blank"
            >
              <FacebookLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
