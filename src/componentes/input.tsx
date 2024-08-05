import React from 'react';

const InputLogin: React.FC = () => {
    return (
        <div className="relative max-w-lg mx-auto mt-80 p-16 border border-gray-300 rounded-lg flex justify-center bg-slate-100">
            
            <form className="flex flex-col gap-6">
                <input placeholder="E-mail" type="email" name="email" id="" className="w-full px-12 py-2 border border-gray-300 rounded-lg focus:outline-none"/>
                <input placeholder="Senha" type="password" name="password" className="w-full px-12 py-2 border border-gray-300 rounded-lg focus:outline-none"/>
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500">Entrar</button>
            </form>
 
        </div>
    
    );
};

export default InputLogin;
