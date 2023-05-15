import Contador from "./Contador";

export default function PostLayout({children}){
    return (
        <div>
        <Contador/>
        <rb/>
        {children}
        </div>
    )
}