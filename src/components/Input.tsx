import '../beauty.css'

interface inputProps{
    type : string,
    id : string,
    placeholder?: string,
    value?:string,
    className:string
}

export const Input: React.FC<inputProps> = ({ type, id, placeholder, value, className }) => {

   
    return (
        <input type={type} id={id} placeholder={placeholder} value={value} className={className}/>
    )
}