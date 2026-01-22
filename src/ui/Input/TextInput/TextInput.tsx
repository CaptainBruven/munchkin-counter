import './style.css'

interface Props {
    value: string;
    onChange: (value: string) => void;
    class?: string;
    placeholder?: string;
}

const TextInput = (props: Props) => {
    return (
        <input class={`text-input ${props.class}`} type="text" value={props.value} onChange={(e) => props.onChange(e.target.value)} placeholder={props.placeholder} />
    )
}

export default TextInput