import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";
import Label from "../../Form/Label";
import { Input } from "antd";


const customInputStyles: React.CSSProperties = {
    textAlign: 'left',
    padding: '10px 10px 10px 40px',
    position: 'relative',
    backgroundColor: '#0C0C0D0A',
    borderRadius: '7px',
    border: 'none',
};


const PasswordField = ({ label, name, value, onChange }: any) => (
    <div className="flex flex-col gap-1">
        <Label htmlFor={name}>{label}</Label>
        <div className="items-center relative flex gap-3">
            <div className="absolute pl-3 text-primary-lightgreen">
                <LockOutlined />
            </div>
            <div className="w-full">
                <Input.Password
                    style={customInputStyles}
                    placeholder={`Enter ${label}`}
                    name={name}
                    value={value}
                    onChange={onChange}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </div>
        </div>
    </div>
);

export default PasswordField