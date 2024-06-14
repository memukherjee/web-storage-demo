export default function InputBox({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-24 outline-none px-2 py-1 bg-transparent border-2 border-secondary placeholder:text-accent"
    />
  );
}
