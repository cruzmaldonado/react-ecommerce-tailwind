const Layout =({children})=>{
    //? el componete Layout es un componente padre para crear todos los estilos generales de todo el sitio web
    //? este sirve para que todo tengo la misma estructura base este recibe un "hijo" por promps que sera la ruta
    return(
        <div className="flex flex-col mt-20 items-center">
            {children}
        </div>
    )
}
export default Layout