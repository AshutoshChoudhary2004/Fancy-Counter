import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({setCount, setLock}){
    return <button onClick = {(event) => {
        setCount(0);
        setLock(false);
        event.currentTarget.blur();
    }}className="reset-btn">
        <ResetIcon className="reset-btn-icon"/>
    </button>;
}