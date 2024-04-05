interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button>{title}</button>
  );
}

export default function Login() {
  return (
    <div>
      <h1>Welcome to login</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}
