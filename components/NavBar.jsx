import React from "react"
function NavBar(){
    return (
        <>
        <div className="flex bg-gradient-to-r from-cyan-500  to-blue-400/70 py-3 text-white font-bold justify-between items-center w-full">
            <div className="ms-8">
            <img src="./components/img/logo.png" alt="logo" srcset="" />
           
            </div>
            <div className="flex">
                <div className="me-8 text-sm flex text-cyan-900/60">Usuario: SGT NETO | 56465408104 <a className="ms-2 flex text-cyan-900/60 hover:underline font-extrabold" href=""><img className="mx-2 w-5 bg-green-700/50 rounded-xl" src="./components/img/sair.png"  alt="" srcset="" />Sair</a></div>
            </div>
        </div>
        </>
    )
}
export default NavBar