import { Link } from "react-router-dom"

function login(){

    return(
        
        <div className="mx-auto mt-10 p-8 border border-gray-300 rounded-lg  flex justify-center">
            <figure>
                <img src="" alt="Logo-vivavox" />
                
            </figure>

            <form action="">

                <input placeholder="E-mail" type="email" name="email" id="" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"/>
                <input placeholder="Senha" type="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"/>

                <button className="w-full bg-blue-700 text-white py-2">Entrar</button>
                

            </form>
        </div>

        
    )
        

}

    
export default login