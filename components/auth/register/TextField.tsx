import InputField from "../../Form/InputField";
import Label from "../../Form/Label";

const TextField = ({ label, name, type = 'text', icon, value, onChange }: any) => (
    <div className="flex flex-col gap-3">
        <Label htmlFor={name}>{label}</Label>
        <div className="items-center flex gap-1">
            <div className="absolute pl-3 text-primary-lightgreen">
                {icon}
            </div>
            <div className="w-full">
                <InputField type={type} name={name} placeholder={`Enter ${label}`}
                    value={value} onChange={onChange} />
            </div>
        </div>
    </div>
);

export default TextField;