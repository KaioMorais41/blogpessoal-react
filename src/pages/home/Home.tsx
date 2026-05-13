import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
              Seja Bem Vindo!
            </h2>

            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões
            </p>

            <div className="flex justify-around gap-4">
               <ModalPostagem />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://media.discordapp.net/attachments/1478006777130909758/1504179478232961095/blog123.PNG?ex=6a060bcd&is=6a04ba4d&hm=ac8ff2d06936710b36e6db0acfbe15fb18f756e73a710d635dd58b89d5ff9aae&=&format=webp&quality=lossless&width=1376&height=917"
            alt="Imagem Página Home"
            className="w-2/3"
          />
        </div>
      </div>

       <ListaPostagens />

    </>
  )
}

export default Home
